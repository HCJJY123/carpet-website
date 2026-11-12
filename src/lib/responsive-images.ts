import "server-only";
import generated from "./generated-responsive-images.json";
import { responsiveImageManifest, type ResponsiveImageEntry } from "./responsive-image-manifest";

const supplemental: Record<string, (string | number)[]> = generated;

export function getResponsiveImage(src: string): ResponsiveImageEntry | undefined {
  if (responsiveImageManifest[src]) return responsiveImageManifest[src];
  const image = supplemental[src];
  if (!image) return undefined;
  const [id, width, height] = image;
  if (typeof id !== "string" || typeof width !== "number" || typeof height !== "number") return undefined;
  const largest = Math.min(width, 1600);
  const webp = [...[320, 640, 960, 1440].filter((size) => size < largest), largest]
    .map((size) => ({ src: `/images/optimized/responsive-v1/${id}-${size}.webp`, width: size, bytes: 0 }));
  return { width, height, originalBytes: 0, avif: [], webp, fallback: webp[webp.length - 1].src };
}
