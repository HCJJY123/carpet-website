import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { absoluteUrl, productBreadcrumbJsonLd, productJsonLd, productPath, safeJsonLd } from "@/lib/seo";
import ProductImage from "@/components/ProductImage";
import { BuyerReasons, ProductConversionPanel } from "@/components/ProductConversion";

const productId = "50x50-nylon-pp-office-carpet-tiles";
const product = products.find((prod) => prod.id === productId);

const imageBase = "/images/products/50x50-nylon-pp-office-carpet-tiles";

const mainImages = [
  {
    src: `${imageBase}/01-hero-product.webp`,
    title: "Color Stack",
    alt: "Vishomecarpet 50x50 nylon PP office carpet tiles for commercial carpet tile floor projects",
  },
  {
    src: `${imageBase}/02-top-view.webp`,
    title: "Top View",
    alt: "Top view tile carpet floor pattern for office carpet and hotel carpet floor projects",
  },
  {
    src: `${imageBase}/03-stack-display.webp`,
    title: "Stack Display",
    alt: "Stack display of nylon carpet tiles and PP carpet tiles for commercial carpet flooring",
  },
  {
    src: `${imageBase}/04-texture-close-up.webp`,
    title: "Texture Close-up",
    alt: "Texture close up of tile nylon carpet for office carpet and commercial carpet tiles",
  },
];

const detailImages = [
  {
    src: `${imageBase}/05-modern-office-application.webp`,
    title: "Modern Office Application",
    alt: "Modern office application with 50x50 commercial carpet tiles and modular floor carpets",
    text: "Designed for open offices, meeting rooms, corridors, retail stores, and hotel carpet floor renovation projects.",
  },
  {
    src: `${imageBase}/06-installation-demonstration.webp`,
    title: "Fast Modular Installation",
    alt: "Installation demonstration of interlocking carpet tiles for tile office carpet projects",
    text: "The 50x50cm tile format supports quarter-turn, ashlar, brick, and monolithic layouts for efficient commercial installation.",
  },
  {
    src: `${imageBase}/07-product-structure.webp`,
    title: "Stable Tile Structure",
    alt: "Product structure of 50x50 nylon PP carpet tiles with backing layer for commercial carpet",
    text: "Available with nylon or PP surface options and project backing choices including PVC, bitumen, or PE backing.",
  },
  {
    src: `${imageBase}/08-wear-resistance.webp`,
    title: "Commercial Wear Resistance",
    alt: "Wear resistance detail for nylon carpet tiles used in high traffic office carpet floors",
    text: "Built for daily office traffic, rolling chair zones, corridors, and B2B buyers who need durable commercial carpet tiles.",
  },
  {
    src: `${imageBase}/09-oem-odm-custom-options.webp`,
    title: "OEM / ODM Options",
    alt: "OEM ODM custom tile carpet options for office carpet and hotel carpet floor projects",
    text: "Custom colors, backing, packaging, logo support, and project specification matching are available for wholesale orders.",
  },
  {
    src: `${imageBase}/10-factory-qc.webp`,
    title: "Factory QC Support",
    alt: "Factory quality control for Vishomecarpet commercial carpet tiles and floor carpets",
    text: "Factory supply with QC inspection, sample support, and export packaging for contractors, distributors, and project buyers.",
  },
];

export const metadata: Metadata = product
  ? {
      title: "50x50 Nylon & Polypropylene Office Carpet Tiles | VISHOME",
      description:
        "Source 50x50 nylon or polypropylene office carpet tiles for commercial floors, corridors, retail, hotels, and wholesale modular carpet projects.",
      alternates: { canonical: productPath(product.id) },
      openGraph: {
        title: "50x50 Nylon & Polypropylene Office Carpet Tiles | VISHOME",
        description: "50x50 nylon or polypropylene office carpet tiles for commercial floors, corridors, retail, hotels, and wholesale modular carpet projects.",
        url: absoluteUrl(productPath(product.id)),
        type: "website",
        images: [{ url: absoluteUrl(mainImages[0].src), alt: mainImages[0].alt }],
      },
      twitter: {
        card: "summary_large_image",
        title: "50x50 Nylon & Polypropylene Office Carpet Tiles | VISHOME",
        description: "50x50 nylon or polypropylene office carpet tiles for commercial floors, corridors, retail, hotels, and wholesale modular carpet projects.",
        images: [absoluteUrl(mainImages[0].src)],
      },
    }
  : { title: "50x50 Nylon PP Office Carpet Tiles | Vishomecarpet" };

export default function OfficeCarpetTilesProductPage() {
  const p = products.find((prod) => prod.id === productId);
  if (!p) return <div>Product Not Found</div>;

  const productSchemaJsonLd = productJsonLd(p);
  const breadcrumbJsonLd = productBreadcrumbJsonLd(p);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What size are Vishomecarpet office carpet tiles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The standard size is 50x50cm, suitable for modular office carpet, commercial carpet, hotel carpet floor, and tile floor carpet projects.",
        },
      },
      {
        "@type": "Question",
        name: "Can I order nylon carpet tiles or PP carpet tiles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Vishomecarpet can supply nylon or PP carpet tile options with project-based backing, color, and packaging requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Are these carpet tiles suitable for B2B commercial projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The product is positioned for offices, hotels, corridors, retail spaces, distributors, contractors, and commercial flooring project buyers.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productSchemaJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />

      <nav className="border-b border-border bg-surface py-3 md:py-4">
        <div className="container-fox">
          <Link href="/products/carpet-tiles" className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted hover:text-primary">
            Back to Carpet Tiles
          </Link>
        </div>
      </nav>

      <section className="py-12 md:py-20">
        <div className="container-fox">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white shadow-xl">
                <ProductImage src={mainImages[0].src} alt={mainImages[0].alt} className="h-full w-full" fit="contain" priority sizes="(max-width: 1024px) 100vw, 55vw" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-4">
                {mainImages.slice(1).map((item) => (
                  <div key={item.src} className="aspect-square overflow-hidden rounded-xl border border-border bg-white">
                    <ProductImage src={item.src} alt={item.alt} className="h-full w-full" fit="contain" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Vishomecarpet Factory Supply</p>
              <h1 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
                50x50 Nylon PP Office Carpet Tiles
              </h1>
              <p className="product-summary mb-8 text-lg leading-relaxed text-muted">{p.longDescription}</p>

              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {p.features.map((feature) => (
                  <div key={feature} className="rounded-xl border border-border bg-surface px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-primary">
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mb-8 space-y-4 border border-border bg-surface p-5 md:p-8">
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Tile Size</span>
                  <span className="text-right font-bold">{p.spec.size}</span>
                </div>
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Material</span>
                  <span className="text-right font-bold">{p.spec.material}</span>
                </div>
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Project MOQ</span>
                  <span className="text-right font-bold">{p.moq}</span>
                </div>
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Lead Time</span>
                  <span className="text-right font-bold">{p.leadTime}</span>
                </div>
                {p.fobPrice && (
                  <div className="flex justify-between gap-6 text-xs uppercase">
                    <span>FOB Price</span>
                    <span className="text-right font-bold">{p.fobPrice.display}</span>
                  </div>
                )}
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Availability</span>
                  <span className="text-right font-bold">In Stock / Made to Order</span>
                </div>
              </div>

              <ProductConversionPanel product={p} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Commercial Tile Carpet</p>
            <h2 className="mb-6 text-3xl font-black uppercase leading-tight md:text-5xl">
              50x50 Nylon & Polypropylene Carpet Squares
            </h2>
            <p className="text-white/70 leading-relaxed">
              A practical carpet tile floor solution for buyers searching for office carpet, commercial carpet, nylon carpet tiles, tile nylon carpet, tile office carpet, tile floor carpet, tile decor carpet, and interlocking carpet tiles.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
            <ProductImage src={detailImages[0].src} alt={detailImages[0].alt} className="h-full w-full" fit="contain" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Product Details</p>
            <h2 className="text-3xl font-black uppercase text-primary md:text-5xl">Structure, Installation and Factory Support</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {detailImages.map((item) => (
              <article key={item.src} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] bg-surface">
                  <ProductImage src={item.src} alt={item.alt} className="h-full w-full" fit="contain" />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-lg font-black uppercase text-primary">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase tracking-[0.08em] text-primary md:mb-12 md:text-3xl md:tracking-widest">
            Technical Specifications
          </h2>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(p.technicalSpecs).map(([k, v]) => (
              <div key={k} className="group bg-white p-5 transition-all hover:bg-primary md:p-8">
                <p className="mb-3 text-[10px] font-bold uppercase text-muted group-hover:text-white/50">
                  {k.replace(/([A-Z])/g, " $1").toUpperCase()}
                </p>
                <p className="text-sm font-black uppercase leading-relaxed text-primary group-hover:text-white">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BuyerReasons product={p} />
    </div>
  );
}
