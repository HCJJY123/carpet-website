"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type LightboxImage = {
  src: string;
  alt: string;
};

function isDetailPath(pathname: string | null) {
  if (!pathname) return false;

  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] === "products") return segments.length >= 3;
  if (segments[0] === "projects") return segments.length >= 2;
  if (segments[0] === "blog") return segments.length >= 2;
  if (segments[0] === "ru" && segments[1] === "products") return segments.length >= 4;

  return false;
}

function normalizeImageSrc(src: string) {
  try {
    const parsed = new URL(src, window.location.origin);
    const original = parsed.searchParams.get("url");
    return original || src;
  } catch {
    return src;
  }
}

function shouldIgnoreImage(img: HTMLImageElement) {
  return Boolean(
    img.closest("header, footer, nav, a, button, form, [data-no-image-zoom='true']")
  );
}

export default function ImageProtection() {
  const pathname = usePathname();
  const zoomEnabled = isDetailPath(pathname);
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);

  useEffect(() => {
    document.body.dataset.imageZoomEnabled = zoomEnabled ? "true" : "false";

    const preventImageAction = (event: Event) => {
      const target = event.target;
      if (target instanceof Element && target.closest("img")) {
        event.preventDefault();
      }
    };

    const openLightbox = (event: MouseEvent) => {
      if (!zoomEnabled) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const img = target.closest("img");
      if (!(img instanceof HTMLImageElement) || shouldIgnoreImage(img)) return;

      const src = normalizeImageSrc(img.currentSrc || img.src);
      if (!src || src.startsWith("data:") || src.startsWith("blob:")) return;

      event.preventDefault();
      setLightboxImage({
        src,
        alt: img.alt || "Vishome Carpet image preview",
      });
    };

    document.addEventListener("contextmenu", preventImageAction, true);
    document.addEventListener("dragstart", preventImageAction, true);
    document.addEventListener("click", openLightbox, true);

    return () => {
      document.removeEventListener("contextmenu", preventImageAction, true);
      document.removeEventListener("dragstart", preventImageAction, true);
      document.removeEventListener("click", openLightbox, true);
      delete document.body.dataset.imageZoomEnabled;
    };
  }, [zoomEnabled]);

  useEffect(() => {
    if (!lightboxImage) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxImage(null);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [lightboxImage]);

  if (!lightboxImage) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/88 px-4 py-6"
      role="dialog"
      aria-modal="true"
      onClick={() => setLightboxImage(null)}
    >
      <button
        type="button"
        aria-label="Close image preview"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-white/30 bg-black/40 text-3xl leading-none text-white transition-colors hover:bg-white hover:text-black"
        onClick={() => setLightboxImage(null)}
      >
        ×
      </button>
      <div
        className="relative h-[86vh] w-[94vw] max-w-7xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          fill
          sizes="94vw"
          className="object-contain"
          draggable={false}
          priority
        />
      </div>
    </div>
  );
}
