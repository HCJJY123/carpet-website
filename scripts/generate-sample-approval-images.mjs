import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceDirectory = process.argv[2];
if (!sourceDirectory) throw new Error("Provide the directory containing the four original PNG files.");
const names = [
  "vcarpets-sample-approval-review-desk-hero",
  "vcarpets-sample-color-texture-direction-review",
  "vcarpets-sample-backing-edge-inspection",
  "vcarpets-reference-production-retained-sample-review",
];
const manifestPath = path.join(root, "src/lib/responsive-image-manifest.ts");
const originalManifest = await fs.readFile(manifestPath, "utf8");
const marker = "export const responsiveImageManifest: Record<string, ResponsiveImageEntry> = ";
const manifestOffset = originalManifest.indexOf(marker) + marker.length;
if (manifestOffset < marker.length) throw new Error("Unexpected responsive manifest format.");
const manifest = JSON.parse(originalManifest.slice(manifestOffset).trim().replace(/;$/, ""));
const outputDirectory = path.join(root, "public/images/optimized");
await fs.mkdir(outputDirectory, { recursive: true });
const images = [];

for (const name of names) {
  const input = await fs.readFile(path.join(sourceDirectory, `${name}.png`));
  const metadata = await sharp(input).metadata();
  if (metadata.width !== 1536 || metadata.height !== 1024) throw new Error(`Review changed source dimensions: ${name}`);
  const digest = createHash("sha256").update(input).update("avif-q60-webp-q80-v1").digest("hex").slice(0, 10);
  const stem = `sample-approval-20260921-${name.replace("vcarpets-", "")}-${digest}`;
  const entry = { width: metadata.width, height: metadata.height, originalBytes: input.length, avif: [], webp: [], fallback: "" };
  for (const format of ["avif", "webp"]) {
    for (const width of format === "avif" ? [640, 1536] : [1536]) {
      const filename = `${stem}-${width}w.${format}`;
      const destination = path.join(outputDirectory, filename);
      const pipeline = sharp(input).rotate().resize({ width, withoutEnlargement: true });
      if (format === "avif") await pipeline.avif({ quality: 60, effort: 6, chromaSubsampling: "4:4:4" }).toFile(destination);
      else await pipeline.webp({ quality: 80, effort: 6 }).toFile(destination);
      const bytes = (await fs.stat(destination)).size;
      const variant = { src: `/images/optimized/${filename}`, width, bytes };
      entry[format].push(variant);
      if (format === "webp") entry.fallback = variant.src;
    }
  }
  manifest[entry.fallback] = entry;
  images.push({ source: `${name}.png`, sourceAttribute: "AI-generated illustrative procurement scene", ...entry });
  console.log(JSON.stringify(images.at(-1)));
}

await fs.writeFile(manifestPath, `${originalManifest.slice(0, manifestOffset)}${JSON.stringify(manifest, null, 2)};\n`);
await fs.mkdir(path.join(root, "docs/performance"), { recursive: true });
await fs.writeFile(path.join(root, "docs/performance/sample-approval-images-20260921.json"), `${JSON.stringify({
  date: "2026-09-21",
  article: "/blog/commercial-carpet-sample-approval-checklist",
  suppliedDimensions: "2048x1152 (declared only; incorrect)",
  verifiedDimensions: "1536x1024; preserve 3:2 composition without cropping or upscaling",
  delivery: "640w and 1536w AVIF; 1536w WebP fallback; existing picture renderer; contain inside existing 16:9 containers",
  provenance: "Original PNGs and supplier manifest retained unchanged outside the public delivery set. Web derivatives are generated illustrations; no EXIF camera identity is asserted.",
  images,
}, null, 2)}\n`);
