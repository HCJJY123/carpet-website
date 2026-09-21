import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicRoot = path.join(root, "public");
const outputDirectory = path.join(publicRoot, "images/optimized");
const manifestPath = path.join(root, "src/lib/responsive-image-manifest.ts");
const manifestMarker = "export const responsiveImageManifest: Record<string, ResponsiveImageEntry> = ";
const settingsVersion = "entry-speed-20260921-avif-q56-webp-q78-v1";
const sources = [
  {
    url: "/images/contact-hero.webp",
    expectedWidth: 1881,
    expectedHeight: 836,
    widths: [480, 960, 1600],
  },
  {
    url: "/images/commercial-carpet-tiles-office-hero.webp",
    expectedWidth: 1586,
    expectedHeight: 992,
    widths: [480, 960, 1586],
  },
  {
    url: "/images/home/hero-hotel-corridor-carpet.webp",
    expectedWidth: 1672,
    expectedHeight: 941,
    widths: [480, 960, 1600],
  },
];

const originalManifest = await fs.readFile(manifestPath, "utf8");
const manifestOffset = originalManifest.indexOf(manifestMarker) + manifestMarker.length;
if (manifestOffset < manifestMarker.length) throw new Error("Unexpected responsive manifest format.");
const manifest = JSON.parse(originalManifest.slice(manifestOffset).trim().replace(/;$/, ""));
await fs.mkdir(outputDirectory, { recursive: true });

function safeStem(url) {
  return url
    .replace(/^\/images\//, "")
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

for (const source of sources) {
  const sourcePath = path.join(publicRoot, source.url.replace(/^\//, ""));
  const input = await fs.readFile(sourcePath);
  const metadata = await sharp(input).metadata();
  if (metadata.width !== source.expectedWidth || metadata.height !== source.expectedHeight) {
    throw new Error(`Review changed source dimensions: ${source.url}`);
  }

  const digest = createHash("sha256").update(input).update(settingsVersion).digest("hex").slice(0, 10);
  const stem = `entry-speed-20260921-${safeStem(source.url)}-${digest}`;
  const entry = {
    width: metadata.width,
    height: metadata.height,
    originalBytes: input.length,
    avif: [],
    webp: [],
    fallback: "",
  };

  for (const width of source.widths) {
    const filename = `${stem}-${width}w.avif`;
    const destination = path.join(outputDirectory, filename);
    await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .avif({ quality: 56, effort: 6, chromaSubsampling: "4:4:4" })
      .toFile(destination);
    const bytes = (await fs.stat(destination)).size;
    entry.avif.push({ src: `/images/optimized/${filename}`, width, bytes });
  }

  const fallbackWidth = source.widths.at(-1);
  const fallbackFilename = `${stem}-${fallbackWidth}w.webp`;
  const fallbackDestination = path.join(outputDirectory, fallbackFilename);
  await sharp(input)
    .rotate()
    .resize({ width: fallbackWidth, withoutEnlargement: true })
    .webp({ quality: 78, effort: 6, smartSubsample: true })
    .toFile(fallbackDestination);
  const fallbackBytes = (await fs.stat(fallbackDestination)).size;
  entry.webp.push({ src: `/images/optimized/${fallbackFilename}`, width: fallbackWidth, bytes: fallbackBytes });
  entry.fallback = entry.webp[0].src;
  manifest[source.url] = entry;

  const desktopAvif = entry.avif.at(-1);
  console.log(JSON.stringify({
    source: source.url,
    sourceBytes: input.length,
    dimensions: `${metadata.width}x${metadata.height}`,
    mobileAvifBytes: entry.avif[0].bytes,
    tabletAvifBytes: entry.avif[1].bytes,
    desktopAvifBytes: desktopAvif.bytes,
    desktopReductionPercent: Number(((1 - desktopAvif.bytes / input.length) * 100).toFixed(1)),
    fallbackWebpBytes: fallbackBytes,
  }));
}

await fs.writeFile(manifestPath, `${originalManifest.slice(0, manifestOffset)}${JSON.stringify(manifest, null, 2)};\n`);
