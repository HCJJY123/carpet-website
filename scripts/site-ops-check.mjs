import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const failures = [];
const warnings = [];

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
}

function git(args, allowFailure = false) {
  try {
    return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  } catch (error) {
    if (allowFailure) return "";
    throw error;
  }
}

function refExists(ref) {
  return Boolean(git(["rev-parse", "--verify", "--quiet", ref], true));
}

function matches(file, pattern) {
  if (pattern.endsWith("/**")) {
    const prefix = pattern.slice(0, -3);
    return file === prefix || file.startsWith(`${prefix}/`);
  }
  if (pattern.endsWith("*")) return file.startsWith(pattern.slice(0, -1));
  return file === pattern;
}

function parseNameStatus(output, changed) {
  for (const line of output.split("\n").filter(Boolean)) {
    const parts = line.split("\t");
    const status = parts[0];
    const file = parts.at(-1);
    const oldFile = status.startsWith("R") ? parts[1] : null;
    changed.set(file, { status, oldFile });
  }
}

function collectChangedFiles(baseRef) {
  const changed = new Map();
  if (refExists(baseRef)) parseNameStatus(git(["diff", "--name-status", `${baseRef}...HEAD`], true), changed);
  parseNameStatus(git(["diff", "--name-status", "HEAD"], true), changed);
  parseNameStatus(git(["diff", "--cached", "--name-status", "HEAD"], true), changed);
  for (const file of git(["ls-files", "--others", "--exclude-standard"], true).split("\n").filter(Boolean)) {
    changed.set(file, { status: "A", oldFile: null });
  }
  return changed;
}

function collectAddedCode(baseRef, changed) {
  const pieces = [];
  if (refExists(baseRef)) pieces.push(git(["diff", "--unified=0", `${baseRef}...HEAD`], true));
  pieces.push(git(["diff", "--unified=0", "HEAD"], true));
  pieces.push(git(["diff", "--cached", "--unified=0", "HEAD"], true));

  const codeFiles = new Set([...changed.keys()].filter((file) => /^(src|app|pages|public)\//.test(file)));
  const added = [];
  for (const diff of pieces) {
    let currentFile = "";
    for (const line of diff.split("\n")) {
      if (line.startsWith("+++ b/")) currentFile = line.slice(6);
      else if (line.startsWith("+") && !line.startsWith("+++") && codeFiles.has(currentFile)) added.push(`${currentFile}:${line.slice(1)}`);
    }
  }

  for (const [file, detail] of changed) {
    if (detail.status === "A" && codeFiles.has(file) && fs.existsSync(path.join(root, file))) {
      for (const line of fs.readFileSync(path.join(root, file), "utf8").split("\n")) added.push(`${file}:${line}`);
    }
  }
  return added.join("\n");
}

function parseKeywordMap() {
  const file = path.join(root, "keyword-map.csv");
  if (!fs.existsSync(file)) {
    failures.push("keyword-map.csv is missing.");
    return;
  }
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/).filter(Boolean);
  if (lines[0] !== "url,primary_keyword,search_intent,status,notes") failures.push("keyword-map.csv has an unexpected header.");
  const urls = new Map();
  const keywords = new Map();
  for (const [index, line] of lines.slice(1).entries()) {
    const [url, keyword, intent, status] = line.split(",");
    const row = index + 2;
    if (!url?.startsWith("/") || !keyword || !intent || !status) failures.push(`keyword-map.csv row ${row} is incomplete.`);
    if (urls.has(url)) failures.push(`Duplicate keyword-map URL: ${url} (rows ${urls.get(url)} and ${row}).`);
    if (keywords.has(keyword)) failures.push(`Duplicate primary keyword: ${keyword} (rows ${keywords.get(keyword)} and ${row}).`);
    urls.set(url, row);
    keywords.set(keyword, row);
  }
}

const baseline = readJson("ops/site-baseline.json");
const changeRequest = readJson("ops/change-request.json");
const baseRef = process.env.SITE_OPS_BASE_REF || (process.env.GITHUB_BASE_REF ? `origin/${process.env.GITHUB_BASE_REF}` : "origin/main");
const changed = collectChangedFiles(baseRef);
const changedFiles = [...changed.keys()].sort();

if (!changeRequest.task || !changeRequest.approvedBy) failures.push("ops/change-request.json must name the task and approval source.");
if (!Array.isArray(changeRequest.allowedPaths) || !changeRequest.allowedPaths.length) failures.push("ops/change-request.json must list allowedPaths.");

for (const file of changedFiles) {
  if (!changeRequest.allowedPaths.some((pattern) => matches(file, pattern))) failures.push(`Out-of-scope file: ${file}`);
}

if (changedFiles.length > baseline.maximumChangedFiles && process.env.SITE_OPS_APPROVED_LARGE_CHANGE !== "1") {
  failures.push(`${changedFiles.length} files changed; the approved maximum is ${baseline.maximumChangedFiles}.`);
}

if (changedFiles.length && !changed.has("CHANGELOG_OPS.md")) failures.push("CHANGELOG_OPS.md must be updated for every change set.");

const sensitiveRules = [
  { category: "seo-global", pattern: /(^|\/)(robots|sitemap|proxy|middleware)(\.|\/)|src\/app\/layout\./ },
  { category: "navigation", pattern: /(^|\/)(Header|Footer|Navigation|Navbar)\.(js|jsx|ts|tsx)$/i },
  { category: "conversion", pattern: /(contact|inquiry|lead|whatsapp|email|api\/lead)/i },
  { category: "database", pattern: /(visitor-intelligence|wrangler|schema\.sql|d1)/i },
  { category: "build-config", pattern: /(^|\/)(package(-lock)?\.json|next\.config\.|vercel\.json)/ },
];

for (const file of changedFiles) {
  for (const rule of sensitiveRules) {
    if (rule.pattern.test(file) && !changeRequest.approvedCategories.includes(rule.category)) {
      failures.push(`${file} requires approved category "${rule.category}".`);
    }
  }
}

for (const [file, detail] of changed) {
  const routeFile = detail.oldFile || file;
  if ((detail.status.startsWith("D") || detail.status.startsWith("R")) && /(src\/(app|pages)\/.*\/page\.|src\/(data|lib)\/|robots|sitemap|package-lock\.json)/.test(routeFile)) {
    if (!changeRequest.protectedUrlsChanged || !changeRequest.approvedCategories.includes("url-change")) {
      failures.push(`Protected route or data file deleted/renamed without URL-change approval: ${routeFile}`);
    }
  }
}

const trackedEnv = git(["ls-files", ".env", ".env.*"], true).split("\n").filter((file) => file && file !== ".env.example");
if (trackedEnv.length) failures.push(`Tracked environment files are forbidden: ${trackedEnv.join(", ")}`);
if (!fs.existsSync(path.join(root, "package-lock.json"))) failures.push("package-lock.json is missing.");

const addedCode = collectAddedCode(baseRef, changed);
if (/\b(noindex|nofollow)\b|\b(index|follow)\s*:\s*false/i.test(addedCode) && !changeRequest.approvedCategories.includes("seo-global")) {
  failures.push("New noindex/nofollow behavior requires seo-global approval.");
}
if (/BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY|\bghp_[A-Za-z0-9]{20,}|\bsk-[A-Za-z0-9_-]{20,}|NEXT_PUBLIC_[A-Z0-9_]*(SECRET|PASSWORD|PRIVATE|TOKEN)/.test(addedCode)) {
  failures.push("Possible secret or private value detected in added code.");
}

parseKeywordMap();

const originArg = process.argv.find((arg) => arg.startsWith("--origin="));
if (originArg) {
  const origin = originArg.slice("--origin=".length).replace(/\/$/, "");
  const normalize = (value) => value.replace(/\/$/, "");

  for (const sitemap of baseline.sitemaps) {
    const response = await fetch(`${origin}${sitemap.path}`, { redirect: "manual", cache: "no-store" });
    const text = await response.text();
    const count = (text.match(/<loc>/g) || []).length;
    if (response.status !== 200 || response.headers.get("location")) failures.push(`${sitemap.path} did not return a direct HTTP 200.`);
    if (count < sitemap.minimumUrlCount) failures.push(`${sitemap.path} has ${count} URLs; protected minimum is ${sitemap.minimumUrlCount}.`);
  }

  for (const page of baseline.criticalPages) {
    const response = await fetch(`${origin}${page.path}`, { redirect: "manual", cache: "no-store" });
    const html = await response.text();
    const h1Count = (html.match(/<h1\b/gi) || []).length;
    const canonical = html.match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)/i)?.[1]
      || html.match(/<link\b[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical/i)?.[1]
      || "";
    const expectedCanonical = normalize(`${baseline.canonicalOrigin}${page.path === "/" ? "" : page.path}`);
    if (response.status !== 200 || response.headers.get("location")) failures.push(`${page.path} did not return a direct HTTP 200.`);
    if (h1Count < page.minimumH1 || h1Count > page.maximumH1) failures.push(`${page.path} has ${h1Count} H1 elements; expected ${page.minimumH1}-${page.maximumH1}.`);
    if (normalize(canonical) !== expectedCanonical) failures.push(`${page.path} canonical changed: ${canonical || "missing"}.`);
    if (/<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) failures.push(`${page.path} contains noindex.`);
    for (const marker of page.requiredMarkers || []) if (!html.toLowerCase().includes(marker.toLowerCase())) failures.push(`${page.path} is missing required marker: ${marker}`);
  }
}

console.log(`Site Ops Guard: ${changedFiles.length} changed files checked for ${baseline.site}.`);
for (const warning of warnings) console.warn(`WARNING: ${warning}`);
for (const failure of failures) console.error(`ERROR: ${failure}`);
if (failures.length) process.exitCode = 1;
else console.log("Site Ops Guard passed.");
