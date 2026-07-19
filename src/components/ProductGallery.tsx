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
  const thumbnails = allImages.filter((img) => img.src !== activeImage.src).slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="aspect-[3/2] rounded-sm overflow-hidden border border-border shadow-xl bg-white">
        <ProductImage
          src={activeImage.src}
          alt={activeImage.alt || productName}
          className="w-full h-full object-cover"
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
            <ProductImage src={img.src} alt={img.alt || productName} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
