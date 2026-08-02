"use client";

import Image from "next/image";
import { useState } from "react";
import { responsiveImageManifest } from "@/lib/responsive-image-manifest";

export default function ProductImage({
  src,
  alt,
  className = "",
  fit = "cover",
  priority = false,
  quality = 82,
  sizes = "(max-width: 768px) 100vw, 50vw",
  unoptimized = true,
  loading,
  objectPosition,
}: {
  src: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
  quality?: number;
  sizes?: string;
  unoptimized?: boolean;
  loading?: "eager" | "lazy";
  objectPosition?: string;
}) {
  const responsive = responsiveImageManifest[src];
  const [loadState, setLoadState] = useState<{
    src: string;
    mode: "responsive" | "optimized" | "direct" | "failed";
  }>({ src, mode: responsive ? "responsive" : unoptimized ? "direct" : "optimized" });
  const defaultMode = responsive ? "responsive" : unoptimized ? "direct" : "optimized";
  const loadMode = loadState.src === src ? loadState.mode : defaultMode;
  const useDirectImage = unoptimized || loadMode === "direct";

  if (loadMode === "responsive" && responsive) {
    const avifSrcSet = responsive.avif.map((item) => `${item.src} ${item.width}w`).join(", ");
    const webpSrcSet = responsive.webp.map((item) => `${item.src} ${item.width}w`).join(", ");

    return (
      <div className={`relative overflow-hidden ${className}`}>
        <picture>
          <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
          <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
          <img
            src={responsive.fallback}
            alt={alt}
            width={responsive.width}
            height={responsive.height}
            sizes={sizes}
            loading={loading ?? (priority ? "eager" : "lazy")}
            fetchPriority={priority ? "high" : "low"}
            decoding="async"
            draggable={false}
            className={`absolute inset-0 h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
            style={{ objectPosition }}
            onError={() => setLoadState({ src, mode: "direct" })}
          />
        </picture>
      </div>
    );
  }

  if (loadMode !== "failed") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          key={`${src}-${useDirectImage ? "direct" : "optimized"}`}
          src={src}
          alt={alt}
          fill
          className={fit === "contain" ? "object-contain" : "object-cover"}
          style={{ objectPosition }}
          sizes={sizes}
          priority={priority}
          loading={loading ?? (priority ? "eager" : "lazy")}
          quality={quality}
          unoptimized={useDirectImage}
          onError={() => setLoadState({ src, mode: useDirectImage ? "failed" : "direct" })}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#eef2f4] ${className}`} role="img" aria-label={alt}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-primary/10" />
      <span className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-center text-xs font-bold uppercase text-primary/55">
        Image temporarily unavailable
      </span>
    </div>
  );
}
