import type { Metadata } from "next";
import Link from "next/link";
import AnswerFirst from "@/components/AnswerFirst";
import ProductImage from "@/components/ProductImage";
import ProductTrustLinks from "@/components/ProductTrustLinks";
import { BuyerReasons, ProductConversionPanel } from "@/components/ProductConversion";
import { products } from "@/lib/data";
import { absoluteUrl, productBreadcrumbJsonLd, productPath, safeJsonLd } from "@/lib/seo";

const productId = "nylon-office-carpet-tile";
const product = products.find((prod) => prod.id === productId);

const galleryImages = [
  {
    src: "/images/nylon-office-carpet-tile.webp",
    alt: "Nylon 50x50 commercial office carpet tile by Vishomecarpet",
  },
  {
    src: "/images/products/nylon-office-carpet-tile/02-corridor-gray-carpet-tiles.webp",
    alt: "Nylon carpet tiles in quarter-turn modular layout showing checkerboard pile",
  },
  {
    src: "/images/products/nylon-office-carpet-tile/03-office-hallway-blue-gray-carpet-tiles.webp",
    alt: "Nylon carpet tiles installed in a modern office corridor and hallway",
  },
  {
    src: "/images/products/nylon-office-carpet-tile/04-lobby-modular-carpet-tiles.webp",
    alt: "Commercial nylon carpet tiles in an office lobby and meeting area",
  },
];

const seoDescription =
  "Heavy-duty 100% nylon office carpet tiles in 50x50 format with Class 33 traffic rating, bitumen backing, antistatic protection, and custom colors.";

export const metadata: Metadata = product
  ? {
      title: "Heavy-Duty Nylon Office Carpet Tiles 50x50 | VISHOME",
      description: seoDescription,
      alternates: {
        canonical: productPath(product.id),
        languages: {
          en: absoluteUrl(productPath(product.id)),
          ru: absoluteUrl("/ru/products/carpet-tiles/nylon-office-carpet-tile"),
          "x-default": absoluteUrl(productPath(product.id)),
        },
      },
      openGraph: {
        title: "Heavy-Duty Nylon Office Carpet Tiles 50x50 | VISHOME",
        description: seoDescription,
        url: absoluteUrl(productPath(product.id)),
        type: "website",
        images: [
          {
            url: absoluteUrl("/images/nylon-office-carpet-tile.webp"),
            alt: "Nylon 50x50 commercial office carpet tile by Vishomecarpet",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Heavy-Duty Nylon Office Carpet Tiles 50x50 | VISHOME",
        description: seoDescription,
        images: [absoluteUrl("/images/nylon-office-carpet-tile.webp")],
      },
    }
  : { title: "Nylon 50x50 Commercial Office Carpet Tile | VISHOME" };

const descriptionParagraphs = [
  "Vishomecarpet's Nylon 50x50 Commercial Office Carpet Tile is a heavy-duty modular flooring system built for demanding workplaces. Each 50 x 50 cm tile is tufted from resilient 100% nylon in a dense loop pile that resists crushing, matting, and abrasion, keeping open-plan offices, corridors, and meeting rooms looking sharp under constant foot and chair-caster traffic.",
  "The tiles are rated for EN 1307 Class 33 heavy commercial traffic, carry a Class I fire rating (ASTM E648), and feature permanent antistatic protection under 2.0 kV. A dimensionally stable bitumen backing lies flat without adhesive creep and allows tile-by-tile replacement; PVC and cushioned backings are available on request. Solution-dyed and piece-dyed color options resist fading and bleach cleaning.",
  "Modular tiles cut installation waste and downtime, install in monolithic, quarter-turn, ashlar, or brick layouts, and let facility teams swap individual tiles instead of re-flooring a whole room. Supplied factory-direct from Vishomecarpet's Tianjin plant with custom colors, OEM design, export packing, and worldwide shipping. Request free samples and a project quote.",
];

const tds = [
  { label: "Fire Rating", value: "ASTM E648 Class I" },
  { label: "Traffic Class", value: "Class 33" },
  { label: "Fiber", value: "100% Nylon" },
  { label: "Yarn System", value: "Tufted Loop Pile" },
  { label: "Backing", value: "Bitumen (PVC / cushion available)" },
  { label: "Pile Weight", value: "24oz (680 g/sqm)" },
  { label: "Tile Size", value: "50x50 cm" },
  { label: "Total Thickness", value: "6.5mm" },
  { label: "Antistatic", value: "< 2.0 kV" },
];

const priceTiers = [
  { price: "US$6.30", quantity: "100-499 SQM" },
  { price: "US$5.90", quantity: "500-2,999 SQM" },
  { price: "US$5.10", quantity: ">=3,000 SQM" },
];

const faqs = [
  {
    q: "What size are the carpet tiles?",
    a: "Standard size is 50 x 50 cm; 25 x 100 cm plank format is available on request for directional and brick-lay designs.",
  },
  {
    q: "What fiber and backing are used?",
    a: "A 100% nylon loop pile on a dimensionally stable bitumen backing. PVC and cushioned comfort backings are available for acoustic or anti-fatigue requirements.",
  },
  {
    q: "Are they suitable for heavy office traffic?",
    a: "Yes. They are rated for EN 1307 Class 33 heavy commercial traffic, are permanently antistatic under 2.0 kV, and are engineered to resist chair-caster wear and matting.",
  },
  {
    q: "How are carpet tiles installed?",
    a: "Loose-lay with releasable adhesive or tabs over a clean, level subfloor, in monolithic, quarter-turn, ashlar, or brick layouts. Individual tiles can be lifted and replaced without disturbing the floor.",
  },
  {
    q: "Can I get custom colors or our brand design?",
    a: "Yes. Vishomecarpet offers custom colors and OEM designs; free samples are provided before production.",
  },
  {
    q: "What are the MOQ and lead time?",
    a: "MOQ is 300 SQM with typical production lead time of about 25 days. Samples are available on request.",
  },
];

const procurementGuideLinks = [
  {
    title: "Commercial carpet tile backing comparison",
    href: "/blog/commercial-carpet-tile-backing-comparison-guide",
    text: "Compare bitumen, PVC-free PE, and cushion-backed systems by chair-caster movement, concrete moisture risk, comfort, replacement, and RFQ documents.",
  },
  {
    title: "Fire rating and VOC document guide",
    href: "/blog/commercial-carpet-tile-fire-rating-voc-documents-guide",
    text: "Prepare fire-performance, low-emission, adhesive, subfloor, and technical submittal questions before approving an office carpet tile quote.",
  },
  {
    title: "Office carpet tiles renovation cycle guide",
    href: "/blog/office-carpet-tiles-renovation-cycle-procurement-guide",
    text: "Plan phased replacement, rolling-chair zones, spare stock, substrate review, and tenant handover before ordering modular carpet tiles.",
  },
  {
    title: "Office carpet tiles for rolling chairs",
    href: "/blog/office-carpet-tiles-rolling-chairs-fitout-guide",
    text: "Check pile height, backing stability, caster movement, adhesive route, and replacement stock for office fit-out projects.",
  },
  {
    title: "Commercial carpet tile MOQ guide",
    href: "/blog/commercial-carpet-tile-moq-sample-trial-project-guide",
    text: "Understand sample, trial-order, and project MOQ logic before comparing commercial carpet tile pricing.",
  },
];

export default function NylonOfficeCarpetTilePage() {
  const p = products.find((prod) => prod.id === productId);
  if (!p) return <div>Product Not Found</div>;

  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "@id": `${absoluteUrl(productPath(p.id))}#product`,
    name: "Nylon 50x50 Commercial Office Carpet Tile",
    sku: p.id,
    mpn: p.id,
    image: galleryImages.map((image) => absoluteUrl(image.src)),
    url: absoluteUrl(productPath(p.id)),
    mainEntityOfPage: absoluteUrl(productPath(p.id)),
    description:
      "Heavy-duty 100% nylon commercial carpet tiles in 50x50 cm modular format for offices, corridors, and high-traffic spaces. Bitumen-backed, Class I fire-rated, custom colors, factory-direct from Vishomecarpet.",
    brand: { "@type": "Brand", name: "Vishomecarpet" },
    category: "Commercial Carpet Tiles",
    material: "100% Nylon",
    manufacturer: {
      "@type": "Organization",
      name: "Vishome Global Commercial Carpet Co., Ltd.",
      url: "https://www.vishomecarpet.com",
    },
    offers: {
      "@type": "AggregateOffer",
      url: absoluteUrl(productPath(p.id)),
      availability: "https://schema.org/PreOrder",
      itemCondition: "https://schema.org/NewCondition",
      priceCurrency: "USD",
      lowPrice: "5.10",
      highPrice: "6.30",
      offerCount: 3,
      seller: {
        "@type": "Organization",
        name: "Vishome Global Commercial Carpet Co., Ltd.",
        url: "https://www.vishomecarpet.com",
      },
    },
    additionalProperty: [
      ...tds.map((item) => ({
        "@type": "PropertyValue",
        name: item.label,
        value: item.value,
      })),
      { "@type": "PropertyValue", name: "Availability", value: "Quotation required / made to order" },
      { "@type": "PropertyValue", name: "Sales Unit", value: "SQM" },
      { "@type": "PropertyValue", name: "Price Basis", value: "Reference FOB range; final price and validity require a written quotation" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbJsonLd = productBreadcrumbJsonLd(p);

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />

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
              <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border bg-white shadow-xl">
                <ProductImage src={galleryImages[0].src} alt={galleryImages[0].alt} className="h-full w-full" fit="cover" priority sizes="(max-width: 1024px) 100vw, 55vw" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-4">
                {galleryImages.slice(1).map((item) => (
                  <div key={item.src} className="aspect-square overflow-hidden rounded-sm border border-border bg-white">
                    <ProductImage src={item.src} alt={item.alt} className="h-full w-full" fit="cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Vishomecarpet Factory Supply</p>
              <h1 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
                Nylon 50x50 Commercial Office Carpet Tile
              </h1>
              <p className="product-summary mb-8 text-lg leading-relaxed text-muted">{p.description}</p>

              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {p.features.map((feature) => (
                  <div key={feature} className="border border-border bg-surface px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-primary">
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mb-8 space-y-4 border border-border bg-surface p-5 md:p-8">
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Project MOQ</span>
                  <span className="text-right font-bold">{p.moq}</span>
                </div>
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Lead Time</span>
                  <span className="text-right font-bold">{p.leadTime}</span>
                </div>
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>FOB Price</span>
                  <span className="text-right font-bold">{p.fobPrice?.display}</span>
                </div>
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Fiber</span>
                  <span className="text-right font-bold">100% Nylon</span>
                </div>
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Tile Size</span>
                  <span className="text-right font-bold">50x50 cm</span>
                </div>
              </div>

              <div className="mb-4">
                <Link
                  href={`/contact?product=${encodeURIComponent(p.name)}`}
                  className="flex min-h-12 items-center justify-center rounded-sm bg-primary px-5 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-md transition-all hover:bg-black"
                >
                  Request Technical Quote
                </Link>
              </div>
              <ProductConversionPanel product={p} />
            </div>
          </div>
        </div>
      </section>

      <AnswerFirst
        eyebrow="Office Carpet Tile Buying Answer"
        title="Choose nylon carpet tiles when replacement speed and heavy office traffic matter"
        answer="For offices, corridors and meeting areas, 50x50 nylon carpet tiles are usually the safer project choice when buyers need modular replacement, chair-caster resistance, antistatic performance and controlled installation downtime. Confirm backing, traffic rating, quantity, color approval and written quotation terms before comparing price by square metre."
        facts={[
          { label: "Best Use", value: "Office floors, corridors, meeting rooms and commercial fit-out projects" },
          { label: "Key Risk", value: "Comparing tile prices without matching backing, pile weight and installation method" },
          { label: "Document Check", value: "Request TDS, packing data, quotation unit and available project documents" },
          { label: "Quote Basis", value: "Reference FOB range only; final validity requires written quotation" },
        ]}
        moq={[
          { label: "Sample", value: p.moqTiers.sample },
          { label: "Trial Order", value: p.moqTiers.trialOrder },
          { label: "Project MOQ", value: p.moqTiers.project },
        ]}
        suitableFor={["Multi-room office renovation", "Corridors with frequent localized wear", "Projects requiring future tile-by-tile replacement"]}
        notSuitableFor={["Seamless luxury hotel broadloom look", "Wet or outdoor areas", "Projects needing confirmed stock without written availability"]}
        evidence="Specifications, FOB ranges and availability on this page are sourcing references. Request written confirmation for final backing, sales unit, lead time, documents and quotation validity."
        quoteHref={`/contact?product=${encodeURIComponent(p.name)}#quote-form`}
        quoteLabel="Request Office Tile Quote"
      />

      <ProductTrustLinks productName="nylon office carpet tiles" quoteHref={`/contact?product=${encodeURIComponent(p.name)}#quote-form`} />

      <section className="section-padding border-y border-border bg-white">
        <div className="container-fox">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">AI-Ready Procurement Links</p>
            <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
              Related Office Carpet Tile Buying Guides
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted md:text-base">
              These guides answer the follow-up questions buyers and AI search tools usually ask after finding this product: renovation timing, rolling-chair suitability, MOQ, samples, and project quotation scope.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {procurementGuideLinks.map((item) => (
              <Link key={item.href} href={item.href} className="group border border-border bg-surface p-6 transition hover:border-accent hover:bg-white hover:shadow-lg">
                <h3 className="text-sm font-black uppercase leading-snug text-primary group-hover:text-accent">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Reference FOB Price</p>
            <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
              Volume Pricing for Project Orders
            </h2>
          </div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {priceTiers.map((tier) => (
              <div key={tier.quantity} className="bg-white p-6 md:p-8">
                <p className="mb-3 text-3xl font-black uppercase text-primary md:text-4xl">{tier.price}</p>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">{tier.quantity}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Reference pricing is provided for comparable 50x50 cm nylon commercial carpet tile specifications. Final factory quotation depends on color, backing, quantity, packing, and delivery terms.
          </p>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Commercial Modular Carpet</p>
            <h2 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
              Heavy-Duty Anti-Static Nylon Office Carpet Tiles
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted">
            {descriptionParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase tracking-[0.08em] text-primary md:mb-12 md:text-3xl md:tracking-widest">
            Technical Data Sheet (TDS)
          </h2>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {tds.map((item) => (
              <div key={item.label} className="group bg-white p-5 transition-all hover:bg-primary md:p-8">
                <p className="mb-3 text-[10px] font-bold uppercase text-muted group-hover:text-white/50">{item.label}</p>
                <p className="text-sm font-black uppercase leading-relaxed text-primary group-hover:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Buyer FAQ</p>
            <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
              Project Questions for Nylon Carpet Tiles
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.q} className="border border-border bg-white p-6">
                <h3 className="mb-3 text-sm font-black uppercase tracking-[0.1em] text-primary">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-muted">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="grid gap-5 md:grid-cols-3">
            <Link href="/products/carpet-tiles" className="border border-border bg-white p-6 transition-all hover:border-primary hover:bg-surface">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent">Category</p>
              <h3 className="text-lg font-black uppercase text-primary">Commercial Carpet Tiles</h3>
            </Link>
            <Link href="/blog/carpet-tile-specifications-high-traffic-durability-guide" className="border border-border bg-white p-6 transition-all hover:border-primary hover:bg-surface">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent">Buying Guide</p>
              <h3 className="text-lg font-black uppercase text-primary">Carpet Tiles vs Broadloom</h3>
            </Link>
            <Link href="/projects" className="border border-border bg-white p-6 transition-all hover:border-primary hover:bg-surface">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent">Projects</p>
              <h3 className="text-lg font-black uppercase text-primary">Commercial Carpet Case Studies</h3>
            </Link>
          </div>
        </div>
      </section>

      <BuyerReasons product={p} />
    </div>
  );
}
