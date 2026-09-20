import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const originArg = process.argv.find((arg) => arg.startsWith("--origin="));
const localOrigin = (originArg ? originArg.slice("--origin=".length) : "http://127.0.0.1:3100").replace(/\/$/, "");
const sitemapPaths = [
  "/sitemap.xml",
  "/sitemap-markets.xml",
  "/sitemap-ru.xml",
  "/sitemaps/pages.xml",
  "/sitemaps/products.xml",
  "/sitemaps/projects.xml",
  "/sitemaps/resources.xml",
  "/sitemaps/blog.xml",
];
const redirectHosts = ["www.vishomecarpet.com", "vishomecarpet.com", "vcarpets.com"];

function csv(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function publicAssetPaths() {
  const paths = [];
  const walk = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) walk(absolute);
      else if (/\.(?:png|jpe?g|webp|avif|gif|svg|pdf)$/i.test(entry.name)) {
        paths.push(`/${path.relative(path.join(root, "public"), absolute).split(path.sep).join("/")}`);
      }
    }
  };
  walk(path.join(root, "public", "images"));
  walk(path.join(root, "public", "downloads"));
  return paths;
}

async function getSitemapPaths() {
  const paths = new Set();
  for (const sitemapPath of sitemapPaths) {
    const response = await fetch(`${localOrigin}${sitemapPath}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`${sitemapPath} returned HTTP ${response.status}`);
    const xml = await response.text();
    for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const url = new URL(match[1]);
      paths.add(`${url.pathname}${url.search}`);
    }
  }
  return [...paths].sort();
}

async function localCheck(urlPath, host) {
  try {
    const headers = execFileSync("/usr/bin/curl", [
      "-sS",
      "-D",
      "-",
      "-o",
      "/dev/null",
      "-H",
      `Host: ${host}`,
      `${localOrigin}${urlPath}`,
    ], { encoding: "utf8" });
    const status = headers.match(/^HTTP\/[^ ]+ (\d+)/m)?.[1] || "000";
    const location = headers.match(/^location:\s*(.+)$/im)?.[1]?.trim() || "";
    return `${status}${location ? ` -> ${location}` : ""}`;
  } catch (error) {
    return `error: ${error?.message || "request failed"}`;
  }
}

async function canonicalCheck(urlPath) {
  try {
    const response = await fetch(`${localOrigin}${urlPath}`, {
      headers: { Host: "www.vcarpets.com" },
      cache: "no-store",
    });
    if (!response.ok || !urlPath.startsWith("/")) return "not_checked";
    const html = await response.text();
    const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1]
      || html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1]
      || "missing";
    return canonical === `https://www.vcarpets.com${urlPath === "/" ? "" : urlPath}` ? "self-canonical" : canonical;
  } catch {
    return "not_checked";
  }
}

const pagePaths = await getSitemapPaths();
const assetPaths = publicAssetPaths();
const rows = [[
  "url_type",
  "old_url",
  "new_url",
  "path_preserved",
  "canonical_status",
  "local_test_status",
  "production_status",
  "notes",
]];

for (const urlPath of pagePaths) {
  const canonicalStatus = await canonicalCheck(urlPath);
  for (const oldHost of redirectHosts) {
    rows.push([
      "page",
      `https://${oldHost}${urlPath}`,
      `https://www.vcarpets.com${urlPath}`,
      "yes",
      canonicalStatus,
      await localCheck(urlPath, oldHost),
      "not verified: new DNS/Vercel domain attachment pending",
      "Old host redirect is code-covered; public effectiveness requires old DNS/HTTPS.",
    ]);
  }
}

for (const assetPath of assetPaths.sort()) {
  for (const oldHost of redirectHosts) {
    rows.push([
      assetPath.endsWith(".pdf") ? "download" : "image",
      `https://${oldHost}${assetPath}`,
      `https://www.vcarpets.com${assetPath}`,
      "yes",
      "not_applicable",
      await localCheck(assetPath, oldHost),
      "not verified: new DNS/Vercel domain attachment pending",
      "Asset path preserved; old-host redirect depends on old DNS/HTTPS.",
    ]);
  }
}

const output = path.join(root, "docs/seo/domain-migration-url-map-20260920.csv");
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, `${rows.map((row) => row.map(csv).join(",")).join("\n")}\n`);
console.log(`Wrote ${rows.length - 1} migration mappings to ${path.relative(root, output)}`);
