import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const PUBLIC_ROOT = path.join(ROOT, "public");
const IMAGE_ROOT = path.join(PUBLIC_ROOT, "images");
const OUTPUT_ROOT = path.join(IMAGE_ROOT, "optimized");
const MANIFEST_PATH = path.join(ROOT, "src/lib/responsive-image-manifest.ts");
const REPORT_PATH = path.join(ROOT, "docs/performance/responsive-image-report.json");
const widths = [480, 768, 1200, 1600];
const maxImages = Number(process.env.RESPONSIVE_IMAGE_LIMIT || 40);

const explicitPriority = [
  "/images/home/hero-home.webp",
  "/images/home/hero-hotel-corridor-carpet.webp",
  "/images/home/hero-custom-wool-rug.webp",
  "/images/home/category-tiles.webp",
  "/images/home/category-broadloom.webp",
  "/images/home/category-public-area.webp",
  "/images/commercial-carpet-tiles-office-hero.png",
  "/images/wall-to-wall-category.webp",
  "/images/category-tiles.png",
];

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else files.push(fullPath);
  }
  return files;
}

function publicUrl(filePath) {
  return `/${path.relative(PUBLIC_ROOT, filePath).split(path.sep).join("/")}`;
}

function safeStem(sourceUrl) {
  return sourceUrl
    .replace(/^\/images\//, "")
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

async function scanReferences() {
  const sourceFiles = (await walk(path.join(ROOT, "src"))).filter((file) => /\.(?:ts|tsx|js|jsx)$/.test(file));
  const counts = new Map();
  const imagePattern = /["'`](\/images\/[^"'`?#]+\.(?:png|jpe?g|webp|avif))["'`]/gi;

  for (const file of sourceFiles) {
    const source = await fs.readFile(file, "utf8");
    for (const match of source.matchAll(imagePattern)) {
      counts.set(match[1], (counts.get(match[1]) || 0) + 1);
    }
  }

  return counts;
}

async function selectImages(referenceCounts) {
  const candidates = [];
  for (const [url, references] of referenceCounts) {
    const filePath = path.join(PUBLIC_ROOT, url.replace(/^\//, ""));
    try {
      const stats = await fs.stat(filePath);
      if (stats.size < 180_000) continue;
      candidates.push({ url, filePath, bytes: stats.size, references });
    } catch {
      // Ignore stale source references; the build will report them separately.
    }
  }

  const priorityRank = new Map(explicitPriority.map((url, index) => [url, index]));
  candidates.sort((a, b) => {
    const aPriority = priorityRank.has(a.url) ? priorityRank.get(a.url) : Number.MAX_SAFE_INTEGER;
    const bPriority = priorityRank.has(b.url) ? priorityRank.get(b.url) : Number.MAX_SAFE_INTEGER;
    if (aPriority !== bPriority) return aPriority - bPriority;
    if (a.references !== b.references) return b.references - a.references;
    return b.bytes - a.bytes;
  });

  return candidates.slice(0, maxImages);
}

async function encodeVariant(source, destination, width, format, quality) {
  const pipeline = sharp(source, { failOn: "none" })
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .withMetadata({ orientation: undefined });

  if (format === "avif") {
    await pipeline.avif({ quality, effort: 5, chromaSubsampling: "4:4:4" }).toFile(destination);
  } else {
    await pipeline.webp({ quality, effort: 5, smartSubsample: true }).toFile(destination);
  }
}

async function optimizeImage(candidate) {
  const source = await fs.readFile(candidate.filePath);
  const metadata = await sharp(source).metadata();
  if (!metadata.width || !metadata.height) throw new Error(`Missing dimensions for ${candidate.url}`);

  const digest = createHash("sha256").update(source).digest("hex").slice(0, 10);
  const stem = `${safeStem(candidate.url)}-${digest}`;
  const largestDeliveryWidth = Math.min(metadata.width, 1600);
  const targetWidths = [...new Set(
    widths.filter((width) => width < largestDeliveryWidth).concat(largestDeliveryWidth),
  )].sort((a, b) => a - b);
  if (targetWidths.length === 0) targetWidths.push(metadata.width);

  const entry = {
    width: metadata.width,
    height: metadata.height,
    originalBytes: candidate.bytes,
    avif: [],
    webp: [],
    fallback: "",
  };

  for (const width of targetWidths) {
    for (const format of ["avif", "webp"]) {
      const destination = path.join(OUTPUT_ROOT, `${stem}-${width}w.${format}`);
      await encodeVariant(source, destination, width, format, format === "avif" ? 52 : 76);
      const stats = await fs.stat(destination);
      const item = { src: publicUrl(destination), width, bytes: stats.size };
      entry[format].push(item);
      if (format === "webp") entry.fallback = item.src;
    }
  }

  return entry;
}

function manifestSource(manifest) {
  return `// Generated by scripts/generate-responsive-images.mjs. Do not edit manually.\n\n` +
    `export type ResponsiveImageVariant = { src: string; width: number; bytes: number };\n` +
    `export type ResponsiveImageEntry = {\n` +
    `  width: number;\n  height: number;\n  originalBytes: number;\n` +
    `  avif: ResponsiveImageVariant[];\n  webp: ResponsiveImageVariant[];\n  fallback: string;\n};\n\n` +
    `export const responsiveImageManifest: Record<string, ResponsiveImageEntry> = ${JSON.stringify(manifest, null, 2)};\n`;
}

await fs.rm(OUTPUT_ROOT, { recursive: true, force: true });
await fs.mkdir(OUTPUT_ROOT, { recursive: true });
await fs.mkdir(path.dirname(REPORT_PATH), { recursive: true });

const references = await scanReferences();
const selected = await selectImages(references);
const manifest = {};
const report = [];

for (const candidate of selected) {
  const entry = await optimizeImage(candidate);
  manifest[candidate.url] = entry;
  const desktop = entry.avif.at(-1);
  report.push({
    source: candidate.url,
    references: candidate.references,
    originalBytes: candidate.bytes,
    originalWidth: entry.width,
    originalHeight: entry.height,
    desktopAvifBytes: desktop?.bytes || 0,
    reductionPercent: desktop ? Number(((1 - desktop.bytes / candidate.bytes) * 100).toFixed(1)) : 0,
    variants: { avif: entry.avif, webp: entry.webp },
  });
  process.stdout.write(`optimized ${candidate.url}\n`);
}

await fs.writeFile(MANIFEST_PATH, manifestSource(manifest));
await fs.writeFile(REPORT_PATH, `${JSON.stringify({ generatedAt: new Date().toISOString(), images: report }, null, 2)}\n`);
process.stdout.write(`Generated ${report.length} responsive image sets.\n`);
