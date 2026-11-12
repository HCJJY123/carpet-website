"use client";

import { useState } from "react";
import ProductImage from "@/components/ImageRenderer";
import type { ResponsiveImageEntry } from "@/lib/responsive-image-manifest";

type GalleryImage = { src: string; alt: string };
export default function ProductGallery({ mainImage, gallery = [], productName, responsiveImages = {} }: { mainImage: string; gallery?: GalleryImage[]; productName: string; responsiveImages?: Record<string, ResponsiveImageEntry | undefined> }) {
  const images = gallery.length ? gallery : [{ src: mainImage, alt: productName }];
  const [active, setActive] = useState(0);
  const selected = images[active] ?? images[0];
  return <div className="space-y-4">
    <div className="aspect-square overflow-hidden rounded-sm border border-border bg-white shadow-xl">
      <ProductImage src={selected.src} responsive={responsiveImages[selected.src]} alt={selected.alt} className="h-full w-full" fit="contain" priority sizes="(max-width: 1023px) calc(100vw - 48px), 600px" />
    </div>
    <div className="grid grid-cols-4 gap-3" aria-label="Product image selection">
      {images.map((image, index) => <button key={image.src} type="button" onClick={() => setActive(index)} aria-label={`View image ${index + 1}: ${image.alt}`} aria-pressed={active === index} className={`relative aspect-square overflow-hidden rounded-sm border-2 bg-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${active === index ? "border-accent" : "border-border hover:border-primary"}`}>
        <ProductImage src={image.src} responsive={responsiveImages[image.src]} alt={image.alt} className="h-full w-full" fit="contain" sizes="(max-width: 1023px) 22vw, 140px" />
      </button>)}
    </div>
  </div>;
}
