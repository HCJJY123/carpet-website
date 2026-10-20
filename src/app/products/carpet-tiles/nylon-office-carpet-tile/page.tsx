import type { Metadata } from "next";
import Link from "next/link";
import ProjectProcurementLinks from "@/components/ProjectProcurementLinks";
import { contentGrowthAssets, illustrationCaption } from "@/lib/content-growth-assets";

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
    alt: "Nylon 50x50 commercial office carpet tile by VCARPETS",
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
  "Compare 50x50 cm nylon commercial carpet tiles for offices: backing, layout, sample approval and project RFQ requirements. B2B supply on FOB Tianjin terms.";

export const metadata: Metadata = product
  ? {
      title: "Nylon Commercial Carpet Tiles 50x50 cm | VCARPETS",
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
        title: "Nylon Commercial Carpet Tiles 50x50 cm | VCARPETS",
        description: seoDescription,
        url: absoluteUrl(productPath(product.id)),
        type: "website",
        images: [
          {
            url: absoluteUrl(contentGrowthAssets.P01.src),
            alt: contentGrowthAssets.P01.alt,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Nylon Commercial Carpet Tiles 50x50 cm | VCARPETS",
        description: seoDescription,
        images: [absoluteUrl(contentGrowthAssets.P01.src)],
      },
    }
  : { title: "Nylon 50x50 Commercial Office Carpet Tile | VCARPETS" };

const descriptionParagraphs = [
  "This VCARPETS nylon commercial carpet tile listing identifies a 100% nylon tufted loop-pile face, a nominal 50 x 50 cm square format and bitumen backing. It is a sourcing starting point for office floors, corridors and meeting rooms, not approval for every commercial use zone.",
  "Review the complete quoted construction before specifying it. The reference data below lists traffic, fire and antistatic values, but the buyer should request the applicable product sheet and available reports for the exact fiber, backing and installation system. Do not transfer a result from a different backing or assume that a sample proves a test rating.",
  "Agree the tile layout, pile direction, fixing method and replacement-stock plan with the installer. PVC or cushion backing is a separate configuration to confirm in writing, not an automatic substitution for the bitumen-backed listing. B2B export quotations are prepared on FOB Tianjin Port terms; confirm product, quantity, packing and production timing in the written offer.",
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
    q: "What are the dimensions of this nylon commercial carpet tile?",
    a: "The listed square format is 50 x 50 cm, or 500 x 500 mm. One nominal tile covers 0.25 square metre, so four tiles cover one square metre before cuts or spare stock. Confirm actual dimensions and carton coverage on the quoted product sheet. Do not assume a plank format is included in this listing.",
  },
  {
    q: "Which backing is listed, and can it be changed?",
    a: "The listed construction is 100% nylon loop pile with bitumen backing. PVC and cushion configurations can be discussed, but availability, thickness, fixing method and supporting documents must be confirmed for the selected version. A similar-looking face does not make different backings interchangeable.",
    guide: {
      href: "/blog/commercial-carpet-tile-backing-comparison-guide",
      label: "Compare backing approval checks",
    },
  },
  {
    q: "How do I check suitability for rolling chairs and heavy office traffic?",
    a: "Identify workstation, corridor and meeting-room zones in the brief. Request the technical data and available evidence for the quoted construction, including any required traffic, chair-use, fire or antistatic criteria. Nylon fiber alone, a color sample or a reference value on a listing does not establish project compliance.",
  },
  {
    q: "Can I choose a monolithic or quarter-turn layout?",
    a: "Use those as layout proposals for the sample review, not as guaranteed installation options. Ask for the permitted layout directions for the selected pattern and backing. Place adjacent full tiles in the proposed orientation and approve the visible seams and pile direction before ordering. Confirm any offset or plank layout separately.",
  },
  {
    q: "How are carpet tiles installed?",
    a: "Confirm the installation method for the quoted tile backing and site conditions before ordering. Releasable adhesive, tabs or another system should be used only when approved for that construction, subfloor and traffic conditions. Agree substrate preparation, moisture and pH checks, layout direction and replacement access with the installer and supplier. Do not assume that loose-lay installation or corner tabs are suitable for every backing.",
    guide: {
      href: "/blog/commercial-carpet-tile-adhesive-subfloor-compatibility-guide",
      label: "Review adhesive and subfloor compatibility",
    },
  },
  {
    q: "What should I request with a nylon carpet tile sample?",
    a: "Request the product and color reference, face fiber, backing identification, nominal size, thickness, pile direction, installation guidance and available technical documents. A swatch helps with color and texture; ask whether full tiles can be supplied for the layout review. Confirm custom-color feasibility, sample charges and dispatch terms before proceeding.",
  },
  {
    q: "What are the MOQ and production lead time?",
    a: "The listing shows a 300 SQM project MOQ, a 100 SQM standard-color trial tier and a 25-day production reference. These are not a confirmed stock or delivery commitment. Reconfirm the selected color, backing, quantity, sample approval and production schedule in the written quotation.",
  },
  {
    q: "What information is needed for a B2B FOB Tianjin quotation?",
    a: "Send area by zone, tile format, color reference, backing requirement, proposed layout, substrate condition, required performance documents, spare-stock needs and target installation date. Include destination country and port and your forwarder’s shipping plan. Request price per SQM, carton coverage, packing, sample terms, production timing and quotation validity on FOB Tianjin Port terms; ocean freight, import clearance and destination delivery need separate planning.",
  },
];

const sizeLayoutBackingChecks = [
  {
    title: "50 x 50 cm square format",
    detail: "The listed 500 x 500 mm tile has a nominal area of 0.25 m². Four tiles equal 1 m² before cutting or spare allocation. Ask for tiles per carton and net carton coverage; the floor area alone is not the order quantity.",
  },
  {
    title: "Approve the layout with full tiles",
    detail: "Review adjacent tiles in the intended pile direction. Ask whether monolithic, quarter-turn or an offset layout is permitted for the selected pattern. Confirm edge appearance, transitions and room-by-room direction with the installer instead of relying on a room illustration.",
  },
  {
    title: "Treat each backing as a separate option",
    detail: "Bitumen is the listed backing. If requesting PVC or cushion, obtain a separate construction reference, physical sample and installation guidance. Confirm availability and project evidence before substituting; a backing name alone is not a traffic or acoustic rating.",
  },
];

const nylonBuyerChecks = [
  {
    title: "Rolling-chair and heavy-traffic fit",
    detail: "For open-plan offices, corridors and meeting rooms, compare loop-pile density, traffic class, caster-chair exposure, seam stability and cleaning plan. A color sample cannot confirm performance by itself.",
  },
  {
    title: "Backing, subfloor and replacement plan",
    detail: "Bitumen, PVC and cushioned backings solve different project needs. Confirm subfloor condition, adhesive system, raised-floor access, acoustic targets and the number of spare tiles to hold for localized replacement.",
  },
  {
    title: "Sample approval that procurement can record",
    detail: "Approve the actual 50x50 cm tile, pile direction, color, backing, thickness, carton label and installation layout. Record the approved sample reference before releasing bulk production.",
  },
  {
    title: "RFQ fields for a factory comparison",
    detail: "Send area by zone, country and city, required tile format, fiber, backing, traffic target, fire or antistatic documents, installation date, packing preference and delivery term. This produces a more useful quotation than asking for a unit price only.",
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
      seoDescription,
    brand: { "@type": "Brand", name: "VCARPETS" },
    category: "Commercial Carpet Tiles",
    material: "100% Nylon",
    manufacturer: {
      "@type": "Organization",
      name: "Tianjin Vcarpets Global Commercial Carpet Co., Ltd.",
      url: "https://www.vcarpets.com",
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
        name: "Tianjin Vcarpets Global Commercial Carpet Co., Ltd.",
        url: "https://www.vcarpets.com",
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
              <div className="aspect-[1600/896] overflow-hidden rounded-sm border border-border bg-white shadow-xl">
                <ProductImage src={contentGrowthAssets.P01.src} alt={contentGrowthAssets.P01.alt} className="h-full w-full" fit="contain" priority unoptimized={false} sizes="(max-width: 1024px) 100vw, 55vw" />
              </div>
              <p className="mt-3 text-xs leading-5 text-muted">{illustrationCaption}</p>
              <div className="mt-5 grid grid-cols-3 gap-4">
                {galleryImages.map((item) => (
                  <div key={item.src} className="aspect-square overflow-hidden rounded-sm border border-border bg-white">
                    <ProductImage src={item.src} alt={item.alt} className="h-full w-full" fit="cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">VCARPETS Factory Supply</p>
              <h1 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
                Nylon 50x50 Commercial Office Carpet Tile
              </h1>
              <p className="product-summary mb-8 text-lg leading-relaxed text-muted">Nylon commercial carpet tiles in a nominal 50 x 50 cm square format for office project sourcing. Review the listed bitumen-backed construction, sample layout and project documents before approving a B2B order.</p>

              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {["100% Nylon Face", "50 x 50 cm Format", "Listed Bitumen Backing", "Project Sample Review"].map((feature) => (
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

      <ProjectProcurementLinks kind="nylon" />

      <AnswerFirst
        eyebrow="Office Carpet Tile Buying Answer"
        title="Specify nylon commercial carpet tiles by construction, layout and project evidence"
        answer="For an office project, start with the listed 50x50 cm nylon loop-pile tile and identify the exact backing, sample reference and permitted layout. Match the technical documents and installation system to the use zones before approval. Compare quotations on the same SQM, carton coverage, spare-stock and FOB Tianjin basis, not on fiber name or unit price alone."
        facts={[
          { label: "Best Use", value: "Office floors, corridors, meeting rooms and commercial fit-out projects" },
          { label: "Key Risk", value: "Comparing tile prices without matching backing, pile weight and installation method" },
          { label: "Document Check", value: "Request TDS, packing data, quotation unit and available project documents" },
          { label: "Quote Basis", value: "B2B FOB Tianjin Port; final validity requires written quotation" },
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

      <section id="size-layout-backing" className="section-padding scroll-mt-24 border-y border-border bg-surface" aria-labelledby="size-layout-backing-heading">
        <div className="container-fox">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">Format &amp; Configuration</p>
            <h2 id="size-layout-backing-heading" className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">Nylon Carpet Tile Size, Layout &amp; Backing</h2>
            <p className="mt-5 leading-8 text-muted">Keep these three decisions separate in the RFQ. The listed size identifies the module; it does not confirm every layout, backing alternative or installation system.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {sizeLayoutBackingChecks.map((item) => (
              <article key={item.title} className="border border-border bg-white p-6">
                <h3 className="text-lg font-black leading-tight text-primary">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-muted">Record the approved sample, color, batch and spare allocation in the <Link href="/products/carpet-tiles#batch-zone-spare-record" className="font-bold text-accent underline">carpet tile receiving and spare-stock record</Link>. For a backing alternative, use the <Link href="/blog/commercial-carpet-tile-backing-comparison-guide" className="font-bold text-accent underline">backing comparison and approval guide</Link>.</p>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-white" data-funnel-section="nylon_buyer_decisions">
        <div className="container-fox">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Nylon Carpet Tile Buying Guide</p>
            <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">Is This Nylon Carpet Tile Right for Your Office Project?</h2>
            <p className="mt-5 leading-8 text-muted">The most useful comparison is between the operating conditions and the approved construction. Use these checks when reviewing samples, technical documents and replacement stock.</p>
          </div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            {nylonBuyerChecks.map((item) => (
              <article key={item.title} className="bg-white p-7">
                <h3 className="mb-3 text-lg font-black uppercase leading-tight text-primary">{item.title}</h3>
                <p className="text-sm leading-7 text-muted">{item.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-muted">Need a broader comparison? Start with <Link href="/products/carpet-tiles" className="font-bold text-accent underline">commercial carpet tile options</Link>, compare <Link href="/blog/office-carpet-tiles-rolling-chairs-fitout-guide" className="font-bold text-accent underline">high-traffic rolling-chair specifications</Link>, or <Link href={`/contact?product=${encodeURIComponent(p.name)}#quote-form`} className="font-bold text-accent underline">request a nylon tile sample and quote</Link>.</p>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-white">
        <div className="container-fox">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Project Procurement Guides</p>
            <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
              Related Office Carpet Tile Buying Guides
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted md:text-base">
              Use these guides to prepare the next decisions in your procurement review: renovation timing, rolling-chair suitability, MOQ, samples, and project quotation scope.
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
            Reference pricing is provided for comparable 50x50 cm nylon commercial carpet tile specifications. Prices are per SQM on a reference FOB Tianjin Port basis. Final factory quotation depends on color, backing, quantity, packing and written validity; confirm trial-order and project MOQ separately.
          </p>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Commercial Modular Carpet</p>
            <h2 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
              Review the Complete Nylon Office Tile Construction
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
            Listed Technical References
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-7 text-muted">These values reproduce the existing product listing, not a downloadable test report or project approval. Request the current TDS and available supporting documents for the exact quoted construction, especially when the backing changes.</p>
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
                {faq.guide && (
                  <Link href={faq.guide.href} className="mt-4 inline-block text-sm font-bold text-primary underline underline-offset-4 hover:text-accent">
                    {faq.guide.label}
                  </Link>
                )}
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
            <Link href="/blog/carpet-tiles-vs-broadloom-commercial-projects-guide" className="border border-border bg-white p-6 transition-all hover:border-primary hover:bg-surface">
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
