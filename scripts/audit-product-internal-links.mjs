const baseUrl = (process.argv[2] || "http://localhost:3100").replace(/\/$/, "");
const productionHost = "www.vishomecarpet.com";
const allowedHosts = new Set([new URL(baseUrl).host, productionHost]);

function normalizePath(href, sourcePath) {
  try {
    const url = new URL(href, `${baseUrl}${sourcePath}`);
    if (!allowedHosts.has(url.host)) return null;
    return url.pathname.replace(/\/$/, "") || "/";
  } catch {
    return null;
  }
}

async function fetchText(path) {
  const response = await fetch(`${baseUrl}${path}`, { redirect: "manual" });
  if (response.status !== 200) {
    throw new Error(`${path} returned HTTP ${response.status}`);
  }
  return response.text();
}

const sitemap = await fetchText("/sitemap.xml");
const sourcePaths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => new URL(match[1]).pathname.replace(/\/$/, "") || "/")
  .filter((path) => !/\.(txt|json|xml)$/.test(path));
const productPaths = sourcePaths.filter((path) =>
  /^\/products\/(carpet-tiles|wall-to-wall|public-area)\/[^/]+$/.test(path)
);
const productPathSet = new Set(productPaths);
const incomingSources = new Map(productPaths.map((path) => [path, new Set()]));
const complianceFailures = [];
let pagesWithMetaKeywords = 0;

for (let index = 0; index < sourcePaths.length; index += 8) {
  const batch = sourcePaths.slice(index, index + 8);
  const pages = await Promise.all(batch.map(async (path) => ({ path, html: await fetchText(path) })));

  for (const { path: sourcePath, html } of pages) {
    if (/<meta\b[^>]*\bname=["']keywords["']/i.test(html)) pagesWithMetaKeywords += 1;

    if (productPathSet.has(sourcePath)) {
      const visibleMoqLabels = ["Sample", "Trial Order", "Project MOQ"].every((label) =>
        new RegExp(`>${label}<`, "i").test(html)
      );
      const jsonLdTypes = [];
      let invalidJsonLd = 0;

      for (const script of html.matchAll(/<script\b[^>]*\btype=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
        try {
          const data = JSON.parse(script[1]);
          const types = Array.isArray(data?.["@type"]) ? data["@type"] : [data?.["@type"]];
          jsonLdTypes.push(...types.filter(Boolean));
        } catch {
          invalidJsonLd += 1;
        }
      }

      const canonicalMatch = html.match(/<link\b[^>]*\brel=["']canonical["'][^>]*\bhref=["']([^"']+)["']/i);
      const canonicalPath = canonicalMatch ? normalizePath(canonicalMatch[1], sourcePath) : null;
      const requiredTypes = ["Product", "BreadcrumbList", "FAQPage"];
      const missingTypes = requiredTypes.filter((type) => !jsonLdTypes.includes(type));

      if (!visibleMoqLabels || invalidJsonLd || missingTypes.length || canonicalPath !== sourcePath) {
        complianceFailures.push({
          path: sourcePath,
          visibleMoqLabels,
          invalidJsonLd,
          missingTypes,
          canonicalPath,
        });
      }
    }

    for (const match of html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)) {
      const targetPath = normalizePath(match[1], sourcePath);
      if (targetPath && targetPath !== sourcePath && incomingSources.has(targetPath)) {
        incomingSources.get(targetPath).add(sourcePath);
      }
    }
  }
}

const rows = [...incomingSources.entries()]
  .map(([path, sources]) => ({ path, count: sources.size, sources: [...sources].sort() }))
  .sort((a, b) => a.count - b.count || a.path.localeCompare(b.path));

for (const row of rows) {
  console.log(`${row.count}\t${row.path}\t${row.sources.join(", ")}`);
}

const failures = rows.filter((row) => row.count < 5);
console.log(`\nAudited ${rows.length} product pages across ${sourcePaths.length} indexable HTML pages.`);
console.log(`Minimum unique inbound internal links: ${Math.min(...rows.map((row) => row.count))}.`);
console.log(`Pages emitting meta keywords: ${pagesWithMetaKeywords}.`);
console.log(`Product pages failing MOQ/canonical/JSON-LD checks: ${complianceFailures.length}.`);

if (failures.length) {
  console.error(`${failures.length} product pages have fewer than 5 unique inbound internal links.`);
  process.exitCode = 1;
}

if (pagesWithMetaKeywords || complianceFailures.length) {
  for (const failure of complianceFailures) console.error(JSON.stringify(failure));
  process.exitCode = 1;
}
