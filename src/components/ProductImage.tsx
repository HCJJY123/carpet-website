"use client";

import Image from "next/image";
import { useState } from "react";
import { products, productCategories } from "@/lib/data";

type ImageContext =
  | { type: "product"; productId: string }
  | { type: "category"; categoryId: string }
  | { type: "case"; label: string }
  | { type: "blog"; label: string; category: string };

// Map image paths to context
function resolveContext(
  src: string
): ImageContext | null {
  // Product images
  for (const p of products) {
    if (src === p.image) return { type: "product", productId: p.id };
  }
  // Category images
  const cat = productCategories.find((c) => src === c.image);
  if (cat) return { type: "category", categoryId: cat.id };
  // Case study / blog (generic)
  if (src.includes("case-")) return { type: "case", label: src.replace("/images/", "").replace(".jpg", "") };
  if (src.includes("blog-")) return { type: "blog", label: src.replace("/images/", "").replace(".jpg", ""), category: "" };
  return null;
}

export default function ProductImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [imageError, setImageError] = useState(false);
  const ctx = resolveContext(src);
  const productData = ctx?.type === "product"
    ? products.find((p) => p.id === ctx.productId)
    : null;
  const categoryData = ctx?.type === "category"
    ? productCategories.find((c) => c.id === ctx.categoryId)
    : null;

  const colors =
    productData?.spec.colors ||
    (categoryData?.id === "carpet-tiles"
      ? [
          { name: "Steel", hex: "#71797E" },
          { name: "Navy", hex: "#0F2B4A" },
          { name: "Charcoal", hex: "#36454F" },
        ]
      : categoryData?.id === "broadloom"
        ? [
            { name: "Sand", hex: "#C2B280" },
            { name: "Burgundy", hex: "#6E2C3D" },
            { name: "Pearl", hex: "#D3D3D1" },
          ]
        : []);

  if (!imageError) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-primary/3" />

      {/* Carpet-like pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0,0,0,0.08) 2px,
              rgba(0,0,0,0.08) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(0,0,0,0.08) 2px,
              rgba(0,0,0,0.08) 4px
            )
          `,
        }}
      />

      {/* Color swatches */}
      <div className="absolute inset-0 flex items-center justify-center">
        {colors.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 px-4">
            {colors.slice(0, 5).map((c) => (
              <div key={c.hex} className="flex flex-col items-center gap-1">
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/60 shadow-md"
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
                <span className="text-[10px] text-muted/70 font-medium hidden md:block">
                  {c.name}
                </span>
              </div>
            ))}
            {colors.length > 5 && (
              <div className="flex items-center">
                <span className="text-xs text-muted/60 font-medium">
                  +{colors.length - 5}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/*
      // Label at bottom
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-3 pt-6">
        <span className="text-white text-xs font-semibold drop-shadow-sm">
          {label}
        </span>
      </div>
      */}
    </div>
  );
}
