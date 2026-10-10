import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

// Update this explicit manifest in the same release as the changed pages.
// An unchanged, missing or empty manifest makes no index notification.
export const MANIFEST_PATH = "ops/indexnow-urls.json";

const KEY = process.env.INDEXNOW_KEY || "47ce845ea2794869a16a0b4abad37110";
const HOST = "www.vcarpets.com";
const BASE = `https://${HOST}`;

export function manifestChanged(cwd = process.cwd()) {
  return execFileSync("git", ["diff", "--name-only", "HEAD^", "HEAD", "--", MANIFEST_PATH], {
    cwd,
    encoding: "utf8",
  }).trim() === MANIFEST_PATH;
}

export function readReleaseUrls({ changed, manifestText }) {
  if (!changed || manifestText === null) return [];
  const manifest = JSON.parse(manifestText);
  if (manifest?.version !== 1 || typeof manifest.release !== "string" || !manifest.release.trim() || !Array.isArray(manifest.urls)) {
    throw new Error("IndexNow manifest must have version 1, a release identifier and a urls array");
  }
  for (const value of manifest.urls) {
    if (typeof value !== "string") throw new Error("IndexNow URLs must be strings");
    const url = new URL(value);
    if (url.origin !== BASE || url.username || url.password || url.search || url.hash || url.href !== value) {
      throw new Error(`Not an exact VCARPETS canonical URL: ${value}`);
    }
  }
  return [...new Set(manifest.urls)];
}

export function verifySitemapMembership(urls, sitemapUrls) {
  const canonicalUrls = new Set(sitemapUrls);
  for (const url of urls) {
    if (!canonicalUrls.has(url)) throw new Error(`Changed URL is absent from the live sitemap: ${url}`);
  }
  return urls;
}

export function verifyDeploymentCommit(expectedSha, cwd = process.cwd()) {
  const actualSha = execFileSync("git", ["rev-parse", "HEAD"], { cwd, encoding: "utf8" }).trim();
  if (!/^[a-f0-9]{40}$/i.test(expectedSha) || actualSha !== expectedSha) {
    throw new Error("Checked-out source does not match the expected deployment SHA");
  }
}

async function loadSitemapUrls(fetchImpl) {
  const response = await fetchImpl(`${BASE}/sitemap.xml`, {
    headers: { "User-Agent": "VCARPETSCarpet-IndexNow/1.0" },
  });
  if (!response.ok) {
    throw new Error(`Unable to load sitemap: HTTP ${response.status}`);
  }

  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
  const validUrls = [...new Set(urls.filter((url) => url.startsWith(`${BASE}/`)))];

  if (validUrls.length === 0) {
    throw new Error("No VCARPETS URLs found in sitemap.xml");
  }

  return validUrls;
}

async function submit(endpoint, urls, fetchImpl) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: `${BASE}/${KEY}.txt`,
    urlList: urls,
  };
  const res = await fetchImpl(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  if (![200, 202].includes(res.status)) {
    const message = await res.text();
    throw new Error(`${endpoint} returned HTTP ${res.status}: ${message}`);
  }
  console.log(`[${endpoint}] -> ${res.status} ${res.statusText} (${urls.length} URLs)`);
  return urls.length;
}

export async function notifyReleaseUrls(urls, fetchImpl = fetch) {
  if (urls.length === 0) return 0;
  verifySitemapMembership(urls, await loadSitemapUrls(fetchImpl));
  const indexNowCount = await submit("https://api.indexnow.org/indexnow", urls, fetchImpl);
  const bingCount = await submit("https://www.bing.com/indexnow", urls, fetchImpl);
  return Math.min(indexNowCount, bingCount);
}

export async function main() {
  if (process.env.EXPECTED_DEPLOYMENT_SHA) verifyDeploymentCommit(process.env.EXPECTED_DEPLOYMENT_SHA);
  const manifestFile = path.join(process.cwd(), MANIFEST_PATH);
  const manifestText = fs.existsSync(manifestFile) ? fs.readFileSync(manifestFile, "utf8") : null;
  const urls = readReleaseUrls({ changed: manifestText !== null && manifestChanged(), manifestText });
  if (urls.length === 0) {
    console.log("No changed release URLs to notify; no IndexNow requests sent.");
    return;
  }

  const accepted = await notifyReleaseUrls(urls);
  console.log(`IndexNow and Bing accepted ${accepted} changed production URLs for ${HOST}. Acceptance does not confirm indexing.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
