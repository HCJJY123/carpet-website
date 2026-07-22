"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductImage({
  src,
  alt,
  className = "",
  fit = "cover",
  priority = false,
  quality = 82,
  sizes = "(max-width: 768px) 100vw, 50vw",
  unoptimized = false,
}: {
  src: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
  quality?: number;
  sizes?: string;
  unoptimized?: boolean;
}) {
  const [loadState, setLoadState] = useState<{
    src: string;
    mode: "optimized" | "direct" | "failed";
  }>({ src, mode: "optimized" });
  const loadMode = loadState.src === src ? loadState.mode : "optimized";
  const useDirectImage = unoptimized || loadMode === "direct";

  if (loadMode !== "failed") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          key={`${src}-${useDirectImage ? "direct" : "optimized"}`}
          src={src}
          alt={alt}
          fill
          className={fit === "contain" ? "object-contain" : "object-cover"}
          sizes={sizes}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
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
