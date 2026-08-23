"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { responsiveImageManifest } from "@/lib/responsive-image-manifest";

type HomeHeroCarouselProps = {
  whatsappUrl: string;
};

const slides = [
  {
    image: "/images/home/hero-home.webp",
    alt: "Commercial carpet tiles installed in a premium international project",
    eyebrow: "Factory Direct Supply since 2005",
    title: "Commercial Carpet Tiles & Hotel Carpet Manufacturer for Global Projects",
    description:
      "Factory-direct carpet tiles, hotel broadloom, and custom printed carpets for contractors, distributors, hotels, offices, and commercial renovation projects.",
    productLabel: "Request Sample Options",
    productHref: "/request-sample-box",
    bannerHref: "/commercial-carpet-tiles",
    badges: ["Factory Direct Pricing", "Sample Box Available", "Custom Project Support"],
    overlay: "bg-gradient-to-r from-[#102A43]/88 via-[#102A43]/58 to-[#102A43]/18",
    objectPosition: "center 50%",
    quality: 90,
  },
  {
    image: "/images/home/hero-hotel-corridor-carpet.webp",
    alt: "Custom patterned hotel corridor carpet covering a luxury hospitality hallway",
    eyebrow: "Hospitality Carpet Manufacturing",
    title: "Custom Hotel Corridor Carpet for Luxury Hospitality Projects",
    description:
      "Project-made broadloom carpet with custom colors, patterns, construction, and contract-grade performance for hotel corridors, ballrooms, guest rooms, and public areas.",
    productLabel: "View Hotel Carpets",
    productHref: "/products/wall-to-wall",
    bannerHref: "/products/wall-to-wall",
    badges: ["Custom Printed Patterns", "Contract Grade Construction", "Hotel Project Support"],
    overlay: "bg-gradient-to-r from-[#102A43]/82 via-[#102A43]/48 to-[#102A43]/12",
    objectPosition: "center 58%",
    quality: 75,
  },
  {
    image: "/images/home/hero-custom-wool-rug.webp",
    alt: "Large custom sculpted wool rug displayed across a premium interior",
    eyebrow: "Made-to-Order Wool Carpet",
    title: "Custom Sculpted Wool Rugs for Premium Public Areas",
    description:
      "Large-format wool rugs with custom dimensions, carved surface effects, color matching, and project production for luxury lobbies, villas, clubs, and executive interiors.",
    productLabel: "View Custom Wool Rugs",
    productHref: "/products/public-area/custom-sculpted-wool-lobby-rug",
    bannerHref: "/products/public-area/public-area-heavy-duty",
    badges: ["Custom Sizes & Colors", "Sculpted Wool Surface", "Project-Made Production"],
    overlay: "bg-gradient-to-r from-[#102A43]/80 via-[#102A43]/45 to-[#102A43]/10",
    objectPosition: "center 62%",
    quality: 75,
  },
];

const ROTATION_MS = 4_000;
const DRAG_SETTLE_MS = 260;

type DragState = {
  pointerId: number;
  startX: number;
  startY: number;
  startTime: number;
  horizontal: boolean;
};

function HeroBackgroundImage({
  src,
  alt,
  priority,
  objectPosition,
}: {
  src: string;
  alt: string;
  priority: boolean;
  objectPosition: string;
}) {
  const responsive = responsiveImageManifest[src];

  if (!responsive) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={82}
        sizes="100vw"
        unoptimized
        className="object-cover"
        style={{ objectPosition }}
      />
    );
  }

  return (
    <picture className="absolute inset-0 block h-full w-full">
      <source type="image/avif" srcSet={responsive.avif.map((item) => `${item.src} ${item.width}w`).join(", ")} sizes="100vw" />
      <source type="image/webp" srcSet={responsive.webp.map((item) => `${item.src} ${item.width}w`).join(", ")} sizes="100vw" />
      <img
        src={responsive.fallback}
        alt={alt}
        width={responsive.width}
        height={responsive.height}
        sizes="100vw"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
        decoding="async"
        draggable={false}
        className="h-full w-full object-cover"
        style={{ objectPosition }}
      />
    </picture>
  );
}

export default function HomeHeroCarousel({ whatsappUrl }: HomeHeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [renderedSlides, setRenderedSlides] = useState(() => new Set([0]));
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [settling, setSettling] = useState(false);
  const dragStateRef = useRef<DragState | null>(null);
  const settleTimerRef = useRef<number | null>(null);
  const suppressBannerClickRef = useRef(false);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || dragging || settling) return;
    const timer = window.setTimeout(() => {
      const nextIndex = (activeIndex + 1) % slides.length;
      setRenderedSlides((current) => {
        if (current.has(nextIndex)) return current;
        const updated = new Set(current);
        updated.add(nextIndex);
        return updated;
      });
      setActiveIndex(nextIndex);
    }, ROTATION_MS);
    return () => window.clearTimeout(timer);
  }, [activeIndex, dragging, paused, reducedMotion, settling]);

  useEffect(() => {
    return () => {
      if (settleTimerRef.current !== null) window.clearTimeout(settleTimerRef.current);
    };
  }, []);

  const ensureSlideRendered = (index: number) => {
    const nextIndex = (index + slides.length) % slides.length;
    setRenderedSlides((current) => {
      if (current.has(nextIndex)) return current;
      const updated = new Set(current);
      updated.add(nextIndex);
      return updated;
    });
  };

  const showSlide = (index: number) => {
    const nextIndex = (index + slides.length) % slides.length;
    ensureSlideRendered(nextIndex);
    setActiveIndex(nextIndex);
  };

  const beginDrag = (event: ReactPointerEvent<HTMLElement>) => {
    if (!event.isPrimary || settling || (event.pointerType === "mouse" && event.button !== 0)) return;
    if (event.target instanceof Element && event.target.closest("[data-carousel-control]")) return;

    if (settleTimerRef.current !== null) {
      window.clearTimeout(settleTimerRef.current);
      settleTimerRef.current = null;
    }

    ensureSlideRendered(activeIndex - 1);
    ensureSlideRendered(activeIndex + 1);
    dragStateRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startTime: performance.now(),
      horizontal: false,
    };
    setDragOffset(0);
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event: ReactPointerEvent<HTMLElement>) => {
    const dragState = dragStateRef.current;
    if (!dragState || dragState.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - dragState.startX;
    const deltaY = event.clientY - dragState.startY;

    if (!dragState.horizontal) {
      if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) return;
      if (Math.abs(deltaY) >= Math.abs(deltaX)) {
        dragStateRef.current = null;
        setDragging(false);
        setDragOffset(0);
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
          event.currentTarget.releasePointerCapture(event.pointerId);
        }
        return;
      }
      dragState.horizontal = true;
    }

    event.preventDefault();
    const maxOffset = event.currentTarget.getBoundingClientRect().width * 0.72;
    setDragOffset(Math.max(-maxOffset, Math.min(maxOffset, deltaX)));
  };

  const finishDrag = (event: ReactPointerEvent<HTMLElement>, cancelled = false) => {
    const dragState = dragStateRef.current;
    if (!dragState || dragState.pointerId !== event.pointerId) return;

    dragStateRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const distance = event.clientX - dragState.startX;
    const elapsed = Math.max(1, performance.now() - dragState.startTime);
    const velocity = Math.abs(distance) / elapsed;
    const width = event.currentTarget.getBoundingClientRect().width;
    const threshold = Math.min(110, Math.max(48, width * 0.12));
    const shouldChange =
      !cancelled && dragState.horizontal && (Math.abs(distance) >= threshold || (Math.abs(distance) >= 24 && velocity >= 0.45));

    if (dragState.horizontal) {
      suppressBannerClickRef.current = true;
      window.setTimeout(() => {
        suppressBannerClickRef.current = false;
      }, DRAG_SETTLE_MS + 120);
    }

    setDragging(false);
    setSettling(true);
    setDragOffset(shouldChange ? (distance < 0 ? -width : width) : 0);

    settleTimerRef.current = window.setTimeout(() => {
      if (shouldChange) showSlide(activeIndex + (distance < 0 ? 1 : -1));
      setDragOffset(0);
      setSettling(false);
      settleTimerRef.current = null;
    }, DRAG_SETTLE_MS);
  };

  const slidePresentation = (index: number) => {
    const previousIndex = (activeIndex - 1 + slides.length) % slides.length;
    const nextIndex = (activeIndex + 1) % slides.length;
    const gestureActive = dragging || settling;

    if (gestureActive && index === activeIndex) {
      return { opacity: 1, pointerEvents: "auto" as const, transform: `translate3d(${dragOffset}px, 0, 0)`, zIndex: 2 };
    }
    if (gestureActive && dragOffset < 0 && index === nextIndex) {
      return { opacity: 1, pointerEvents: "none" as const, transform: `translate3d(calc(100% + ${dragOffset}px), 0, 0)`, zIndex: 1 };
    }
    if (gestureActive && dragOffset > 0 && index === previousIndex) {
      return { opacity: 1, pointerEvents: "none" as const, transform: `translate3d(calc(-100% + ${dragOffset}px), 0, 0)`, zIndex: 1 };
    }

    return index === activeIndex
      ? { opacity: 1, pointerEvents: "auto" as const, transform: "translate3d(0, 0, 0)", zIndex: 2 }
      : { opacity: 0, pointerEvents: "none" as const, transform: "translate3d(0, 0, 0)", zIndex: 1 };
  };

  return (
    <section
      className={`relative flex min-h-[calc(100svh-5rem)] touch-pan-y select-none items-center overflow-hidden bg-primary md:min-h-[650px] ${
        dragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      aria-roledescription="carousel"
      aria-label="Vishome carpet product highlights"
      onPointerDown={beginDrag}
      onPointerMove={moveDrag}
      onPointerUp={(event) => finishDrag(event)}
      onPointerCancel={(event) => finishDrag(event, true)}
      onDragStart={(event) => event.preventDefault()}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => renderedSlides.has(index) ? (
          <Link
            key={slide.image}
            href={slide.bannerHref}
            draggable={false}
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={(event) => {
              if (suppressBannerClickRef.current) {
                event.preventDefault();
                return;
              }
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
              event.preventDefault();
              window.location.assign(slide.bannerHref);
            }}
            className={`absolute inset-0 block will-change-transform ${
              dragging ? "transition-none" : "transition-[opacity,transform] duration-300 ease-out"
            }`}
            style={slidePresentation(index)}
            aria-label={`Open ${slide.title}`}
            aria-hidden={index !== activeIndex}
          >
            <HeroBackgroundImage
              src={slide.image}
              alt={index === activeIndex ? slide.alt : ""}
              priority={index === 0}
              objectPosition={slide.objectPosition}
            />
            <div className={`absolute inset-0 ${slide.overlay}`} />
          </Link>
        ) : null)}

        <Image
          src="/logo-mark.svg"
          alt=""
          width={550}
          height={550}
          className="pointer-events-none absolute bottom-[-60px] right-[-80px] h-auto w-[400px] select-none opacity-[0.06] md:w-[550px]"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
      </div>

      <div className="container-fox pointer-events-none relative z-10 py-12 pb-28 md:py-20 md:pb-28">
        <div className="max-w-4xl">
          <span className="mb-4 block border-l-4 border-accent pl-4 text-xs font-bold uppercase tracking-[0.16em] text-white/80 md:mb-6 md:tracking-[0.18em]">
            {activeSlide.eyebrow}
          </span>
          <h1 className="mb-5 text-3xl font-extrabold leading-[1.08] tracking-[-0.015em] text-white sm:text-4xl md:mb-7 md:text-5xl xl:text-[56px]">
            {activeSlide.title}
          </h1>
          <p className="mb-7 max-w-3xl text-base font-normal leading-relaxed text-white/85 md:mb-10 md:text-lg">
            {activeSlide.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:gap-4">
            <Link
              href="/contact#quote-form"
              data-home-primary-inquiry
              data-carousel-control
              className="pointer-events-auto inline-flex min-h-12 items-center justify-center rounded-sm bg-[#C8752A] px-6 py-3.5 text-center text-[13px] font-bold uppercase tracking-[0.06em] text-white shadow-lg transition-colors hover:bg-[#AD6424] md:min-h-14 md:px-8 md:py-4 md:text-sm"
            >
              Send Project Inquiry
            </Link>
            <Link
              href={activeSlide.productHref}
              data-carousel-control
              className="pointer-events-auto inline-flex min-h-12 items-center justify-center rounded-sm border border-white/65 bg-black/10 px-6 py-3.5 text-center text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-white hover:text-primary md:min-h-14 md:px-8 md:py-4 md:text-sm"
            >
              {activeSlide.productLabel}
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-carousel-control
              className="pointer-events-auto inline-flex min-h-12 items-center justify-center rounded-sm bg-[#25D366] px-6 py-3.5 text-center text-[13px] font-bold uppercase tracking-[0.06em] text-white shadow-lg transition-colors hover:bg-[#1ebe5d] md:min-h-14 md:px-8 md:py-4 md:text-sm"
            >
              WhatsApp Project Support
            </a>
          </div>
          <div className="mt-7 hidden gap-3 text-xs font-bold uppercase tracking-[0.08em] text-white/80 sm:grid sm:grid-cols-3 md:mt-8">
            {activeSlide.badges.map((badge) => (
              <div key={badge} className="border border-white/20 bg-black/10 px-4 py-3">
                {badge}
              </div>
            ))}
          </div>
          <div className="pointer-events-auto mt-5 flex h-5 items-center justify-center gap-1 sm:justify-start" role="group" aria-label="Choose banner">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => showSlide(index)}
                data-carousel-control
                className="group flex h-5 w-8 items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/80"
                aria-label={`Show banner ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              >
                <span
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-7 bg-[#F07A17] shadow-[0_0_8px_rgba(240,122,23,0.55)]"
                      : "w-3 bg-white/35 group-hover:bg-white/65"
                  }`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => showSlide(activeIndex - 1)}
        data-carousel-control
        className="absolute bottom-20 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#071829]/35 text-white/75 shadow-[0_8px_24px_rgba(0,0,0,0.16)] backdrop-blur-md transition-all hover:border-white/45 hover:bg-[#071829]/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:bottom-auto md:left-6 md:top-1/2 md:h-12 md:w-12 md:-translate-y-1/2"
        aria-label="Show previous banner"
      >
        <span className="h-2.5 w-2.5 rotate-45 border-b-2 border-l-2 border-current" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={() => showSlide(activeIndex + 1)}
        data-carousel-control
        className="absolute bottom-20 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#071829]/35 text-white/75 shadow-[0_8px_24px_rgba(0,0,0,0.16)] backdrop-blur-md transition-all hover:border-white/45 hover:bg-[#071829]/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:bottom-auto md:right-6 md:top-1/2 md:h-12 md:w-12 md:-translate-y-1/2"
        aria-label="Show next banner"
      >
        <span className="h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-current" aria-hidden="true" />
      </button>
    </section>
  );
}
