"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    badges: ["Factory Direct Pricing", "Sample Box Available", "Custom Project Support"],
    overlay: "bg-[#102A43]/65",
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
    badges: ["Custom Printed Patterns", "Contract Grade Construction", "Hotel Project Support"],
    overlay: "bg-[#102A43]/42",
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
    badges: ["Custom Sizes & Colors", "Sculpted Wool Surface", "Project-Made Production"],
    overlay: "bg-[#102A43]/38",
    objectPosition: "center 62%",
    quality: 75,
  },
];

const ROTATION_MS = 4_000;

export default function HomeHeroCarousel({ whatsappUrl }: HomeHeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, ROTATION_MS);
    return () => window.clearTimeout(timer);
  }, [activeIndex, paused, reducedMotion]);

  const showSlide = (index: number) => setActiveIndex((index + slides.length) % slides.length);

  return (
    <section
      className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-primary md:min-h-[650px]"
      aria-roledescription="carousel"
      aria-label="Vishome carpet product highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.image}
              alt={index === activeIndex ? slide.alt : ""}
              fill
              priority={index === 0}
              loading={index === 0 ? undefined : "eager"}
              fetchPriority={index === 0 ? "high" : "low"}
              quality={slide.quality}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: slide.objectPosition }}
            />
            <div className={`absolute inset-0 ${slide.overlay}`} />
          </div>
        ))}

        <Image
          src="/logo-mark.svg"
          alt=""
          width={550}
          height={550}
          className="pointer-events-none absolute bottom-[-60px] right-[-80px] h-auto w-[400px] select-none opacity-[0.06] md:w-[550px]"
          priority
        />
      </div>

      <div className="container-fox relative z-10 py-12 pb-28 md:py-20 md:pb-28">
        <div className="max-w-4xl">
          <span className="mb-4 block border-l-4 border-accent pl-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white/80 md:mb-6 md:text-xs md:tracking-[0.3em]">
            {activeSlide.eyebrow}
          </span>
          <h1 className="mb-5 text-3xl font-extrabold uppercase leading-[1.08] text-white sm:text-4xl md:mb-7 md:text-5xl xl:text-6xl">
            {activeSlide.title}
          </h1>
          <p className="mb-7 max-w-3xl text-sm font-light leading-relaxed text-white/85 sm:text-base md:mb-10 md:text-lg">
            {activeSlide.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:gap-4">
            <Link
              href="/contact#quote-form"
              data-home-primary-inquiry
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#C8752A] px-6 py-3.5 text-center text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg transition-colors hover:bg-[#AD6424] md:min-h-14 md:px-8 md:py-4 md:text-sm"
            >
              Send Project Inquiry
            </Link>
            <Link
              href={activeSlide.productHref}
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/65 bg-black/10 px-6 py-3.5 text-center text-xs font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-primary md:min-h-14 md:px-8 md:py-4"
            >
              {activeSlide.productLabel}
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#25D366] px-6 py-3.5 text-center text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg transition-colors hover:bg-[#1ebe5d] md:min-h-14 md:px-8 md:py-4 md:text-sm"
            >
              WhatsApp Project Support
            </a>
          </div>
          <div className="mt-7 hidden gap-3 text-[10px] font-black uppercase tracking-[0.16em] text-white/80 sm:grid sm:grid-cols-3 md:mt-8 md:tracking-[0.18em]">
            {activeSlide.badges.map((badge) => (
              <div key={badge} className="border border-white/20 bg-black/10 px-4 py-3">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-4 z-20 flex items-center justify-center md:bottom-6">
        <div className="flex items-center gap-0.5 rounded-[6px] border border-white/15 bg-[#071A29]/30 p-0.5 shadow-[0_8px_24px_rgba(0,0,0,0.14)] backdrop-blur-md">
          <button
            type="button"
            onClick={() => showSlide(activeIndex - 1)}
            className="flex h-8 w-8 items-center justify-center rounded-[4px] text-white/65 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/70"
            aria-label="Show previous banner"
          >
            <span className="h-2 w-2 rotate-45 border-b border-l border-current" aria-hidden="true" />
          </button>

          <div className="flex h-8 items-center" role="group" aria-label="Choose banner">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => showSlide(index)}
                className="group flex h-8 w-5 items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/70"
                aria-label={`Show banner ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              >
                <span
                  className={`h-px transition-all duration-300 ${
                    index === activeIndex
                      ? "w-4 bg-[#E0A05A] shadow-[0_0_8px_rgba(224,160,90,0.75)]"
                      : "w-2 bg-white/40 group-hover:bg-white/70"
                  }`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => showSlide(activeIndex + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-[4px] text-white/65 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/70"
            aria-label="Show next banner"
          >
            <span className="h-2 w-2 rotate-45 border-r border-t border-current" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
