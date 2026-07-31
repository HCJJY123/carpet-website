const baseUrl = (process.argv[2] || "http://localhost:3100").replace(/\/$/, "");

async function request(path, redirect = "manual") {
  const response = await fetch(`${baseUrl}${path}`, { redirect });
  return { response, text: await response.text() };
}

function normalizePath(href, sourcePath) {
  try {
    const url = new URL(href, `${baseUrl}${sourcePath}`);
    if (url.host !== new URL(baseUrl).host && url.host !== "www.vishomecarpet.com") return null;
    if (/\.(?:avif|css|gif|ico|jpe?g|js|pdf|png|svg|webp|woff2?)(?:$|\?)/i.test(url.pathname)) return null;
    return url.pathname.replace(/\/$/, "") || "/";
  } catch {
    return null;
  }
}

function matchContent(html, pattern) {
  return html.match(pattern)?.[1]?.trim() || "";
}

const sitemapResponse = await request("/sitemap.xml", "follow");
if (sitemapResponse.response.status !== 200) throw new Error(`sitemap.xml returned HTTP ${sitemapResponse.response.status}`);

const sitemapPaths = [...sitemapResponse.text.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => new URL(match[1]).pathname.replace(/\/$/, "") || "/")
  .filter((path) => !/\.(?:json|txt|xml)$/.test(path));

const pageResults = [];
const internalLinks = new Map();

for (let index = 0; index < sitemapPaths.length; index += 8) {
  const batch = sitemapPaths.slice(index, index + 8);
  const pages = await Promise.all(batch.map(async (path) => ({ path, ...(await request(path)) })));

  for (const { path, response, text } of pages) {
    const title = matchContent(text, /<title>([^<]*)<\/title>/i);
    const description = matchContent(text, /<meta\b[^>]*\bname=["']description["'][^>]*\bcontent=["']([^"']*)["']/i)
      || matchContent(text, /<meta\b[^>]*\bcontent=["']([^"']*)["'][^>]*\bname=["']description["']/i);
    const canonical = matchContent(text, /<link\b[^>]*\brel=["']canonical["'][^>]*\bhref=["']([^"']+)["']/i);
    const canonicalPath = canonical ? normalizePath(canonical, path) : null;
    const h1Count = [...text.matchAll(/<h1\b/gi)].length;
    const hasMetaKeywords = /<meta\b[^>]*\bname=["']keywords["']/i.test(text);
    const noindex = /<meta\b[^>]*\bname=["']robots["'][^>]*\bcontent=["'][^"']*noindex/i.test(text);

    pageResults.push({ path, status: response.status, title, description, canonicalPath, h1Count, hasMetaKeywords, noindex });

    for (const link of text.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)) {
      const target = normalizePath(link[1], path);
      if (target && !internalLinks.has(target)) internalLinks.set(target, path);
    }
  }
}

const duplicateValues = (key) => {
  const groups = new Map();
  for (const page of pageResults) {
    if (!page[key]) continue;
    const paths = groups.get(page[key]) || [];
    paths.push(page.path);
    groups.set(page[key], paths);
  }
  return [...groups.entries()].filter(([, paths]) => paths.length > 1);
};

const pageFailures = pageResults.filter((page) =>
  page.status !== 200
  || !page.title
  || !page.description
  || page.canonicalPath !== page.path
  || page.h1Count !== 1
  || page.hasMetaKeywords
  || page.noindex
);

const linkFailures = [];
const linkEntries = [...internalLinks.entries()];
for (let index = 0; index < linkEntries.length; index += 12) {
  const batch = linkEntries.slice(index, index + 12);
  const checks = await Promise.all(batch.map(async ([path, source]) => {
    const { response } = await request(path);
    return { path, source, status: response.status };
  }));
  linkFailures.push(...checks.filter((item) => item.status >= 400));
}

const duplicateTitles = duplicateValues("title");
const duplicateDescriptions = duplicateValues("description");

console.log(`Audited ${pageResults.length} sitemap HTML pages.`);
console.log(`Unique internal HTML links checked: ${internalLinks.size}.`);
console.log(`Page-level failures: ${pageFailures.length}.`);
console.log(`Internal links returning 4xx/5xx: ${linkFailures.length}.`);
console.log(`Duplicate title groups: ${duplicateTitles.length}.`);
console.log(`Duplicate description groups: ${duplicateDescriptions.length}.`);

for (const failure of pageFailures) console.error(`PAGE ${JSON.stringify(failure)}`);
for (const failure of linkFailures) console.error(`LINK ${JSON.stringify(failure)}`);
for (const [title, paths] of duplicateTitles) console.error(`DUPLICATE_TITLE ${JSON.stringify({ title, paths })}`);
for (const [description, paths] of duplicateDescriptions) console.error(`DUPLICATE_DESCRIPTION ${JSON.stringify({ description, paths })}`);

if (pageFailures.length || linkFailures.length || duplicateTitles.length || duplicateDescriptions.length) process.exitCode = 1;
