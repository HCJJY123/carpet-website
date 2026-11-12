import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

// Derivatives are build output. Original artwork and product photos stay intact.
const root = process.cwd();
const publicRoot = path.join(root, "public");
const isCarpet = JSON.parse(await fs.readFile(path.join(root, "package.json"), "utf8")).name === "carpet-website";
const prefix = isCarpet ? "/images/optimized/responsive-v1" : "/assets/optimized/responsive-v1";
const outputRoot = path.join(publicRoot, prefix);
const cacheRoot = path.join(root, ".next/cache/responsive-v1");
const manifestPath = path.join(root, "src/lib/generated-responsive-images.json");
const widths = [320, 640, 960, 1440];
const minBytes = 90_000;
const manifest = {};
const stats = { images: 0, variants: 0, originals: 0, fullSize: 0, cardSize: 0, cached: 0 };

async function walk(directory) {
  const result = [];
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await walk(file));
    else result.push(file);
  }
  return result;
}

// Retain the site's existing AVIF/WebP assets when they already cover an image.
let covered = {};
if (isCarpet) {
  const source = await fs.readFile(path.join(root, "src/lib/responsive-image-manifest.ts"), "utf8");
  const json = source.split("export const responsiveImageManifest: Record<string, ResponsiveImageEntry> = ")[1];
  covered = JSON.parse(json.trim().replace(/;\s*$/, ""));
}

const references = new Set();
for (const file of await walk(path.join(root, "src"))) {
  if (!/\.[jt]sx?$/.test(file) || /image-manifest\.[jt]s$/.test(file)) continue;
  const source = await fs.readFile(file, "utf8");
  for (const match of source.matchAll(/["'`]((?:\/assets|\/images)\/[^"'`?#]+\.(?:png|jpe?g|webp|avif))["'`]/gi)) {
    if (!covered[match[1]] && !match[1].includes("/responsive-v1/")) references.add(match[1]);
  }
}

await fs.rm(outputRoot, { recursive: true, force: true });
await fs.mkdir(outputRoot, { recursive: true });
await fs.mkdir(cacheRoot, { recursive: true });
sharp.concurrency(1);

async function prepare(url) {
  const file = path.resolve(publicRoot, `.${url}`);
  if (!file.startsWith(`${publicRoot}${path.sep}`)) return;
  let source;
  try { source = await fs.readFile(file); }
  catch (error) { if (error.code === "ENOENT") return; throw error; }
  if (source.length < minBytes) return;
  const metadata = await sharp(source).metadata();
  if (!metadata.width || !metadata.height || (metadata.pages || 1) > 1) return;
  const rotated = metadata.orientation >= 5 && metadata.orientation <= 8;
  const width = rotated ? metadata.height : metadata.width;
  const height = rotated ? metadata.width : metadata.height;
  if (width <= 320) return;
  const largest = Math.min(width, 1600);
  const targets = [...widths.filter((size) => size < largest), largest];
  const id = createHash("sha256").update(source).update("responsive-v1-webp-q80").digest("hex").slice(0, 16);
  let cardBytes = source.length;
  let fullBytes = source.length;
  for (const target of targets) {
    const name = `${id}-${target}.webp`;
    const cached = path.join(cacheRoot, name);
    const output = path.join(outputRoot, name);
    if (metadata.format === "webp" && target === width && (!metadata.orientation || metadata.orientation === 1)) {
      await fs.writeFile(cached, source);
      await fs.writeFile(output, source);
    } else try { await fs.copyFile(cached, output); stats.cached += 1; }
    catch (error) {
      if (error.code !== "ENOENT") throw error;
      const buffer = await sharp(source).rotate().resize({ width: target, withoutEnlargement: true })
        .webp({ quality: 80, effort: 4, smartSubsample: true }).toBuffer();
      await fs.writeFile(cached, buffer);
      await fs.writeFile(output, buffer);
    }
    const { size } = await fs.stat(output);
    if (target === targets.find((size) => size >= 640)) cardBytes = size;
    if (target === largest) fullBytes = size;
    stats.variants += 1;
  }
  manifest[url] = [id, width, height];
  stats.images += 1;
  stats.originals += source.length;
  stats.cardSize += cardBytes;
  stats.fullSize += fullBytes;
}

const queue = [...references].sort();
await Promise.all(Array.from({ length: 4 }, async () => {
  while (queue.length) await prepare(queue.shift());
}));
await fs.mkdir(path.dirname(manifestPath), { recursive: true });
await fs.writeFile(manifestPath, `${JSON.stringify(Object.fromEntries(Object.entries(manifest).sort()))}\n`);
console.log(`Responsive images: ${JSON.stringify(stats)}`);
