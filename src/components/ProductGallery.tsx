"use client";

import { useState } from "react";
import ProductImage from "./ProductImage";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ProductGalleryProps {
  mainImage: string;
  gallery?: GalleryImage[];
  productName: string;
}

export default function ProductGallery({ mainImage, gallery = [], productName }: ProductGalleryProps) {
  const allImages = gallery.length > 0 ? gallery : [{ src: mainImage, alt: productName }];
  const [activeImage, setActiveImage] = useState(allImages[0]);

  return (
    <div className="space-y-6">
      {/* 1 张大图 */}
      <div className="relative aspect-square bg-white border-8 border-white rounded-sm overflow-hidden shadow-2xl transition-all duration-500">
        <ProductImage
          src={activeImage.src}
          alt={activeImage.alt || productName}
          className="w-full h-full"
          fit="contain"
        />
      </div>

      {/* 下方缩略图模式 (最多显示4张，包含主图) */}
      <div className="grid grid-cols-4 gap-4">
        {allImages.slice(0, 4).map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(img)}
            className={`relative aspect-square border-2 rounded-sm overflow-hidden transition-all ${
              activeImage === img ? "border-accent shadow-md scale-95" : "border-border hover:border-primary/30"
            }`}
          >
            <ProductImage src={img.src} alt={img.alt || `${productName} thumbnail ${idx + 1}`} className="w-full h-full" fit="cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
