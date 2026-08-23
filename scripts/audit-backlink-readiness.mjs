import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

function walk(dir, matcher = () => true) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (["node_modules", ".next", ".git"].includes(entry.name)) return [];
      return walk(full, matcher);
    }
    return matcher(full) ? [full] : [];
  });
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function fail(messages) {
  if (messages.length) {
    messages.forEach((message) => console.error(message));
    process.exit(1);
  }
}

function auditPlaceholders() {
  const patterns = [/CONFIRM_/i, /TODO/i, /LOREM/i, /EXAMPLE CLIENT/i, /MARriott/i, /HILTON/i, /HYATT/i];
  const files = walk(path.join(ROOT, "src/app"), (file) => /\.(tsx|ts|mdx?)$/.test(file));
  const messages = [];
  for (const file of files) {
    const text = read(file);
    for (const pattern of patterns) {
      if (pattern.test(text)) messages.push(`Placeholder found in public app file: ${path.relative(ROOT, file)} (${pattern})`);
    }
  }
  fail(messages);
  console.log(`Placeholder audit passed for ${files.length} app files.`);
}

function auditAssets() {
  const messages = [];
  const resourceData = read(path.join(ROOT, "src/lib/resource-data.ts"));
  const pdfMatches = [...resourceData.matchAll(/filePath:\s*"([^"]+)"/g)].map((match) => match[1]);
  for (const filePath of pdfMatches) {
    const full = path.join(ROOT, "public", filePath.replace(/^\//, ""));
    if (!fs.existsSync(full)) messages.push(`Missing download file: ${filePath}`);
  }
  const imageMatches = walk(path.join(ROOT, "src/app"), (file) => file.endsWith(".tsx"))
    .flatMap((file) => [...read(file).matchAll(/image="([^"]+)"/g)].map((match) => ({ file, image: match[1] })));
  for (const { file, image } of imageMatches) {
    if (image.startsWith("http")) continue;
    const full = path.join(ROOT, "public", image.replace(/^\//, ""));
    if (!fs.existsSync(full)) messages.push(`Missing page image: ${image} in ${path.relative(ROOT, file)}`);
  }
  fail(messages);
  console.log(`Asset audit passed for ${pdfMatches.length} downloads and ${imageMatches.length} page images.`);
}

function auditSeo() {
  const files = walk(path.join(ROOT, "src/app"), (file) => file.endsWith("page.tsx"));
  const messages = [];
  for (const file of files) {
    const rel = path.relative(ROOT, file);
    const text = read(file);
    const siblingLayout = path.join(path.dirname(file), "layout.tsx");
    const layoutText = fs.existsSync(siblingLayout) ? read(siblingLayout) : "";
    const isRedirectPage = text.includes("permanentRedirect(") || text.includes("redirect(");
    if (!isRedirectPage && !text.includes("metadata") && !text.includes("generateMetadata") && !layoutText.includes("metadata") && !rel.includes("/api/")) {
      messages.push(`Missing metadata export/generator: ${rel}`);
    }
    if (text.includes("<main") && !/<h1\b|title=\{|title="/.test(text)) {
      messages.push(`No obvious H1 or PageHero title: ${rel}`);
    }
  }
  fail(messages);
  console.log(`SEO audit passed for ${files.length} page files.`);
}

function auditLinks() {
  const messages = [];
  const requiredFiles = [
    "src/app/sitemap.ts",
    "src/app/robots.ts",
    "src/app/sitemaps/pages.xml/route.ts",
    "src/app/sitemaps/products.xml/route.ts",
    "src/app/sitemaps/projects.xml/route.ts",
    "src/app/sitemaps/resources.xml/route.ts",
    "src/app/sitemaps/blog.xml/route.ts",
  ];
  for (const file of requiredFiles) {
    if (!fs.existsSync(path.join(ROOT, file))) messages.push(`Missing sitemap/robots file: ${file}`);
  }
  const sitemapText = requiredFiles
    .filter((file) => file.includes("sitemap"))
    .map((file) => read(path.join(ROOT, file)))
    .join("\n");
  ["/resources/technical-library", "/architects-designers", "/media/press-kit", "/applications", "/quality-control", "/certifications"].forEach((route) => {
    if (!sitemapText.includes(route)) messages.push(`Route missing from sitemap sources: ${route}`);
  });
  fail(messages);
  console.log("Link and sitemap audit passed.");
}

const mode = process.argv[2];
if (mode === "placeholders") auditPlaceholders();
else if (mode === "assets") auditAssets();
else if (mode === "seo") auditSeo();
else if (mode === "links") auditLinks();
else {
  console.error("Usage: node scripts/audit-backlink-readiness.mjs <placeholders|assets|seo|links>");
  process.exit(1);
}
