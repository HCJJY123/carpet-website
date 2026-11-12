"use client";

import { useState } from "react";
import ProductImage from "./ImageRenderer";
import type { ResponsiveImageEntry } from "@/lib/responsive-image-manifest";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ProductGalleryProps {
  mainImage: string;
  gallery?: GalleryImage[];
  productName: string;
  responsiveImages?: Record<string, ResponsiveImageEntry | undefined>;
}

export default function ProductGallery({ mainImage, gallery = [], productName, responsiveImages = {} }: ProductGalleryProps) {
  const allImages = gallery.length > 0 ? gallery : [{ src: mainImage, alt: productName }];
  const [activeImage, setActiveImage] = useState(allImages[0]);
  const thumbnails = allImages.filter((img) => img.src !== activeImage.src).slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="aspect-[3/2] rounded-sm overflow-hidden border border-border shadow-xl bg-white">
        <ProductImage
          src={activeImage.src}
          responsive={responsiveImages[activeImage.src]}
          alt={activeImage.alt || productName}
          className="w-full h-full object-cover"
          priority
          sizes="(max-width: 1023px) calc(100vw - 48px), (max-width: 1280px) 46vw, 600px"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {thumbnails.map((img) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActiveImage(img)}
            className="relative aspect-[3/2] border border-border rounded-sm overflow-hidden transition-all hover:border-primary/40 hover:shadow-md"
          >
            <ProductImage src={img.src} responsive={responsiveImages[img.src]} alt={img.alt || productName} className="w-full h-full object-cover" sizes="(max-width: 1023px) calc((100vw - 80px) / 3), 190px" />
          </button>
        ))}
      </div>
    </div>
  );
}
