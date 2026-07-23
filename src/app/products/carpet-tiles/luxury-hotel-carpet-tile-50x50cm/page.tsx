import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { absoluteUrl, productBreadcrumbJsonLd, productJsonLd, productPath, safeJsonLd } from "@/lib/seo";
import ProductImage from "@/components/ProductImage";
import { BuyerReasons, ProductConversionPanel } from "@/components/ProductConversion";

const productId = "luxury-hotel-carpet-tile-50x50cm";
const product = products.find((prod) => prod.id === productId);
const imageBase = "/images/products/luxury-hotel-carpet-tile-50x50cm";

const mainImages = [
  {
    src: `${imageBase}/01-main-carpet-tile-top-view.webp`,
    title: "Top View",
    alt: "Vishomecarpet luxury hotel carpet tile 50x50cm commercial nylon carpet tiles top view",
    fit: "contain",
  },
  {
    src: `${imageBase}/02-close-up-pile-texture.webp`,
    title: "Pile Texture",
    alt: "Close-up pile texture of commercial nylon carpet tiles for office carpet and hotel carpet floor projects",
    fit: "cover",
  },
  {
    src: `${imageBase}/03-hotel-corridor-installed-scene.webp`,
    title: "Hotel Corridor",
    alt: "Hotel corridor installed with modular carpet tiles for commercial carpet floor projects",
    fit: "cover",
  },
  {
    src: `${imageBase}/04-carpet-tile-backing-underside.webp`,
    title: "Backing Detail",
    alt: "Backing underside detail of 50x50cm commercial carpet tile for modular flooring projects",
    fit: "contain",
  },
] as const;

const detailImages = [
  {
    src: `${imageBase}/05-color-range-swatches.webp`,
    title: "Color Range for Project Matching",
    alt: "Color range swatches for tile decor carpet and commercial carpet tile projects",
    text: "Neutral gray, taupe, charcoal, and custom color options support hotel, office, and distributor flooring programs.",
    fit: "cover",
  },
  {
    src: `${imageBase}/06-hotel-guest-room-application.webp`,
    title: "Hotel Guest Room Flooring",
    alt: "Hotel guest room with Vishomecarpet 50x50cm modular carpet tiles",
    text: "A practical hotel carpet floor option for guest rooms that need comfort, easy maintenance, and repeatable supply.",
    fit: "cover",
  },
  {
    src: `${imageBase}/07-hotel-lobby-corridor-application.webp`,
    title: "Lobby and Corridor Use",
    alt: "Hotel lobby and corridor application using commercial carpet tiles for heavy traffic areas",
    text: "Heavy commercial tile carpet floor design for corridors, elevator landings, reception areas, and public circulation zones.",
    fit: "cover",
  },
  {
    src: `${imageBase}/08-conference-room-carpet-tiles.webp`,
    title: "Meeting Room Office Carpet",
    alt: "Conference room tile office carpet with modular commercial carpet tiles",
    text: "The modular tile format works well for meeting rooms, corporate floors, coworking spaces, and phased renovations.",
    fit: "cover",
  },
  {
    src: `${imageBase}/09-executive-office-carpet-tiles.webp`,
    title: "Executive Office Application",
    alt: "Executive office carpet tiles for commercial office carpet projects",
    text: "Refined office carpet appearance with project-based options for backing, color, quantity, samples, and export packaging.",
    fit: "cover",
  },
] as const;

const priceTiers = [
  { price: "US$2.20", quantity: "200-1,999 pieces (trial order)" },
  { price: "US$1.80", quantity: "2,000-3,999 pieces" },
  { price: "US$1.60", quantity: "4,000-7,999 pieces" },
  { price: "US$1.40", quantity: ">=8,000 pieces" },
] as const;

const procurementFaqs = [
  {
    question: "What are 50x50cm carpet tiles used for?",
    answer:
      "Vishomecarpet 50x50cm carpet tiles are used for hotel carpet floors, office carpet projects, corridors, lobbies, meeting rooms, and commercial renovation programs where modular replacement and project-scale supply are important.",
  },
  {
    question: "How should buyers compare carpet tile price per piece and per square meter?",
    answer:
      "One 50x50cm carpet tile covers 0.25 square meters, so four pieces equal one square meter. The displayed US$1.40-2.20 price is a per-piece reference; final project quotes depend on quantity, material, backing, color, packaging, and shipping terms.",
  },
  {
    question: "Can Vishomecarpet supply nylon carpet tiles and PP carpet tiles?",
    answer:
      "Yes. Vishomecarpet can supply nylon or PP carpet tile options with project-based color, backing, packaging, and sample support for contractors, distributors, hotels, offices, and commercial buyers.",
  },
  {
    question: "Can I request samples before bulk order?",
    answer:
      "Yes. A 1-3 piece sample set is available, with a free sample box option. Trial orders start from 200 pieces (50 SQM), while custom colors and patterns normally start from a 500 SQM project MOQ.",
  },
  {
    question: "What are the trial order and custom project minimums?",
    answer:
      "The trial order starts from 200 pieces, equal to 50 SQM for 50x50cm tiles. The standard project MOQ is 500 SQM when custom color or pattern development is required.",
  },
] as const;

export const metadata: Metadata = product
  ? {
      title: "Luxury Hotel Carpet Tiles 50x50 | Nylon Modular | VISHOME",
      description:
        "Source luxury 50x50 hotel carpet tiles in nylon or PP options for guestrooms, corridors, lobbies, meeting rooms, and wholesale modular projects.",
      alternates: { canonical: productPath(product.id) },
      openGraph: {
        title: "Luxury Hotel Carpet Tiles 50x50 | Nylon Modular | VISHOME",
        description: "Luxury 50x50 hotel carpet tiles in nylon or PP options for guestrooms, corridors, lobbies, meeting rooms, and modular flooring projects.",
        url: absoluteUrl(productPath(product.id)),
        type: "website",
        images: [{ url: absoluteUrl(mainImages[0].src), alt: mainImages[0].alt }],
      },
      twitter: {
        card: "summary_large_image",
        title: "Luxury Hotel Carpet Tiles 50x50 | Nylon Modular | VISHOME",
        description: "Luxury 50x50 hotel carpet tiles in nylon or PP options for guestrooms, corridors, lobbies, meeting rooms, and modular flooring projects.",
        images: [absoluteUrl(mainImages[0].src)],
      },
    }
  : { title: "Luxury Hotel Carpet Tile 50x50cm | Vishomecarpet" };

export default function LuxuryHotelCarpetTileProductPage() {
  const p = products.find((prod) => prod.id === productId);
  if (!p) return <div>Product Not Found</div>;

  const productSchemaJsonLd = productJsonLd(p);
  const breadcrumbJsonLd = productBreadcrumbJsonLd(p);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: procurementFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
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
                <ProductImage src={mainImages[0].src} alt={mainImages[0].alt} className="h-full w-full" fit={mainImages[0].fit} priority sizes="(max-width: 1024px) 100vw, 55vw" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-4">
                {mainImages.slice(1).map((item) => (
                  <div key={item.src} className="aspect-square overflow-hidden rounded-xl border border-border bg-white">
                    <ProductImage src={item.src} alt={item.alt} className="h-full w-full" fit={item.fit} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Vishomecarpet Factory Supply</p>
              <h1 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
                Luxury Hotel Carpet Tile 50x50cm
              </h1>
              <p className="product-summary mb-8 text-lg leading-relaxed text-muted">{p.longDescription}</p>

              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {p.features.map((feature) => (
                  <div key={feature} className="rounded-xl border border-border bg-surface px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-primary">
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mb-8 border border-border bg-white p-5 shadow-sm md:p-6">
                <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
                  <div>
                    <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent">Volume Price Reference</p>
                    <p className="text-sm font-bold uppercase text-primary">50x50cm Carpet Tile · Per Piece</p>
                  </div>
                  <span className="rounded-sm bg-red-600 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-white">
                    Lower price by quantity
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {priceTiers.map((tier) => (
                    <div key={tier.quantity}>
                      <p className="mb-2 text-2xl font-black tracking-tight text-primary md:text-3xl">{tier.price}</p>
                      <p className="text-xs font-semibold text-muted">{tier.quantity}</p>
                    </div>
                  ))}
                </div>
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
                  <span>Sample</span>
                  <span className="text-right font-bold">1-3 pcs (Free Sample Box)</span>
                </div>
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Trial Order</span>
                  <span className="text-right font-bold">200 pcs / 50 SQM</span>
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
              </div>

              <ProductConversionPanel product={p} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Hotel and Office Carpet Tiles</p>
            <h2 className="mb-6 text-3xl font-black uppercase leading-tight md:text-5xl">
              Luxury 50x50 Hotel Carpet Tiles for Modular Projects
            </h2>
            <p className="text-white/70 leading-relaxed">
              Specified for hotel guestrooms, corridors, lobbies, meeting rooms, and phased office renovations where modular replacement and repeatable supply matter.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
            <ProductImage src={detailImages[2].src} alt={detailImages[2].alt} className="h-full w-full" fit={detailImages[2].fit} />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Product Details</p>
            <h2 className="text-3xl font-black uppercase text-primary md:text-5xl">Colors, Applications and Project Support</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {detailImages.map((item) => (
              <article key={item.src} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] bg-surface">
                  <ProductImage src={item.src} alt={item.alt} className="h-full w-full" fit={item.fit} />
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
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Procurement Answers</p>
            <h2 className="text-3xl font-black uppercase text-primary md:text-5xl">50x50 Carpet Tile Buying Guide</h2>
          </div>
          <div className="mb-16 grid gap-5 md:grid-cols-2">
            {procurementFaqs.map((item) => (
              <article key={item.question} className="border border-border bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-base font-black uppercase leading-snug text-primary">{item.question}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.answer}</p>
              </article>
            ))}
          </div>

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
