import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { absoluteUrl, productBreadcrumbJsonLd, productJsonLd, productPath, safeJsonLd } from "@/lib/seo";
import ProductImage from "@/components/ProductImage";
import { BuyerReasons, ProductConversionPanel } from "@/components/ProductConversion";

const productId = "gray-line-nylon-office-hotel-carpet-tiles";
const product = products.find((prod) => prod.id === productId);

const imageBase = "/images/products/gray-line-nylon-office-carpet-tiles";

const mainImages = [
  {
    src: `${imageBase}/01-office-workspace-carpet-tiles.webp`,
    title: "Office Workspace",
    alt: "Vishomecarpet gray line nylon carpet tiles installed in modern office carpet and hotel carpet floor project",
  },
  {
    src: `${imageBase}/02-hotel-lounge-carpet-tiles.webp`,
    title: "Hotel Lounge",
    alt: "Hotel lounge and public area with commercial carpet tiles in gray textured pattern",
  },
  {
    src: `${imageBase}/03-open-office-carpet-tiles.webp`,
    title: "Open Office",
    alt: "Open office carpet using gray nylon carpet tiles with tile decor carpet accents",
  },
  {
    src: `${imageBase}/04-meeting-room-carpet-tiles.webp`,
    title: "Meeting Room",
    alt: "Meeting room tile floor carpet with gray modular office carpet tiles",
  },
];

const detailImages = [
  {
    src: `${imageBase}/05-commercial-office-detail.webp`,
    title: "Commercial Office Application",
    alt: "Commercial office detail image showing gray tile nylon carpet and office carpet floor",
    text: "A practical floor carpets solution for workstations, reception areas, corridors, and daily rolling-chair traffic zones.",
  },
  {
    src: `${imageBase}/06-conference-room-detail.webp`,
    title: "Hotel and Conference Flooring",
    alt: "Conference room hotel carpet floor application with interlocking carpet tiles",
    text: "The gray modular pattern gives hotel carpet floor, conference room, and tile office carpet projects a calm professional look.",
  },
];

export const metadata: Metadata = product
  ? {
      title: "Gray Patterned Carpet Tiles for Office & Hotel | VISHOME",
      description:
        "Modern gray patterned nylon carpet tiles with charcoal, blue, navy, black, beige, or custom accents for office, hotel, and commercial floors.",
      alternates: { canonical: productPath(product.id) },
      openGraph: {
        title: "Gray Patterned Carpet Tiles for Office & Hotel | VISHOME",
        description: "Modern gray patterned nylon carpet tiles with charcoal, blue, navy, black, beige, or custom accents for office, hotel, and commercial floors.",
        url: absoluteUrl(productPath(product.id)),
        type: "website",
        images: [{ url: absoluteUrl(mainImages[0].src), alt: mainImages[0].alt }],
      },
      twitter: {
        card: "summary_large_image",
        title: "Gray Patterned Carpet Tiles for Office & Hotel | VISHOME",
        description: "Modern gray patterned nylon carpet tiles with charcoal, blue, navy, black, beige, or custom accents for office, hotel, and commercial floors.",
        images: [absoluteUrl(mainImages[0].src)],
      },
    }
  : { title: "Gray Line Nylon Carpet Tiles | Vishomecarpet" };

export default function GrayLineNylonCarpetTilesPage() {
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
        name: "What projects are these gray nylon carpet tiles used for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They are suitable for office carpet, hotel carpet floor, meeting rooms, corridors, reception areas, public workspaces, and commercial carpet tile floor projects.",
        },
      },
      {
        "@type": "Question",
        name: "Can Vishomecarpet customize backing and project specifications?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Vishomecarpet can support project-based material, backing, color, packaging, and sample confirmation requirements for commercial carpet tile orders.",
        },
      },
      {
        "@type": "Question",
        name: "Are these interlocking carpet tiles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They are modular 50x50cm carpet tiles designed for efficient tile carpet installation and easy replacement. Installation method and adhesive system can be confirmed by project requirement.",
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
              <div className="aspect-[4/3] overflow-hidden border border-border bg-white shadow-xl">
                <ProductImage src={mainImages[0].src} alt={mainImages[0].alt} className="h-full w-full" priority sizes="(max-width: 1024px) 100vw, 55vw" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-4">
                {mainImages.slice(1).map((item) => (
                  <div key={item.src} className="aspect-square overflow-hidden border border-border bg-white">
                    <ProductImage src={item.src} alt={item.alt} className="h-full w-full" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Vishomecarpet Factory Supply</p>
              <h1 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
                Vishomecarpet Gray Line Nylon Carpet Tiles for Office and Hotel Carpet Floors
              </h1>
              <p className="product-summary mb-8 text-lg leading-relaxed text-muted">{p.longDescription}</p>

              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {p.features.map((feature) => (
                  <div key={feature} className="border border-border bg-surface px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-primary">
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
                  <span>MOQ</span>
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
              Gray & Patterned Carpet Tiles for Office and Hotel Floors
            </h2>
            <p className="leading-relaxed text-white/70">
              Built for buyers comparing nylon carpet tiles, tile nylon carpet, tile office carpet, tile floor carpet, tile carpet floor, commercial carpet, floor carpets, and interlocking carpet tiles for modern B2B interiors.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden border border-white/10 bg-white shadow-2xl">
            <ProductImage src={detailImages[0].src} alt={detailImages[0].alt} className="h-full w-full" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Product Details</p>
            <h2 className="text-3xl font-black uppercase text-primary md:text-5xl">Application Views and Project Support</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {detailImages.map((item) => (
              <article key={item.src} className="overflow-hidden border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] bg-surface">
                  <ProductImage src={item.src} alt={item.alt} className="h-full w-full" />
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
