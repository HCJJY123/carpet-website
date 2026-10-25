import type { Metadata } from "next";
import { brandInfo, products } from "@/lib/data";
import { evidenceCopy } from "@/lib/product-evidence-copy";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import AnswerFirst from "@/components/AnswerFirst";
import ConversionLiftPanel from "@/components/ConversionLiftPanel";
import ProcurementSnapshot from "@/components/ProcurementSnapshot";
import TechnicalSourcePanel from "@/components/TechnicalSourcePanel";
import FactoryCtaBackground from "@/components/FactoryCtaBackground";
import { absoluteUrl, categoryBreadcrumbJsonLd, productItemListJsonLd, safeJsonLd } from "@/lib/seo";

const categoryPath = "/products/carpet-tiles";

// Use the same product records as the cards; these are model-specific examples,
// not a category-wide minimum or prices converted into a different quoting unit.
const priceExampleIds = [
  "luxury-hotel-carpet-tile-50x50cm",
  "pp-bitumen-backed-office-carpet-tiles",
  "50x50-nylon-pp-office-carpet-tiles",
];
const priceExamples = priceExampleIds.map((id) => {
  const product = products.find((item) => item.id === id);
  return product?.fobPrice ? `${product.name}: ${product.fobPrice.display}` : null;
}).filter(Boolean).join("; ");
const priceUnitDisclosure = "Piece means one tile; SQM means one square meter. One 50x50 cm tile covers 0.25 m², so four tiles cover 1 m² before cutting waste or spare stock. Compare the same model, fiber, backing, size and pricing unit; confirm these together in the written quotation.";

const categoryFaqs = [
  {
    question: "What commercial carpet tiles does VCARPETS supply?",
    answer: "VCARPETS supplies 50x50 carpet tiles in nylon, Nylon 6.6, polypropylene, and project-specific fiber options. Available ranges include office carpet tiles, hotel carpet tiles, heavy-duty commercial carpet tiles, patterned modular tiles, PVC-free PE backing tiles, and bitumen-backed carpet tiles."
  },
  {
    question: "Do you supply wholesale carpet tiles to distributors and contractors?",
    answer: "Yes. VCARPETS supports carpet tile distributors, commercial flooring contractors, importers, and project buyers with wholesale carpet tiles, bulk quotations, samples, project color review, backing selection, export packing, and international delivery planning."
  },
  {
    question: "What is the wholesale price for carpet tiles?",
    answer: `Listed FOB reference ranges are model-specific: ${priceExamples}. These ranges cover different products and configuration options, not one universal starting price. ${priceUnitDisclosure} Final quotation depends on the selected fiber, backing, pile weight, thickness, quantity, color, packing and destination.`
  },
  {
    question: "Are 50x50cm carpet tiles the same as 24x24 carpet tiles?",
    answer: "No. A 50x50cm tile is approximately 19.7 x 19.7 inches. Buyers requiring 24x24 carpet tiles should state the exact inch or millimeter size so the carpet tile factory can confirm production feasibility and pricing."
  },
  {
    question: "Can carpet tiles be installed loose lay or glue down?",
    answer: "Commercial carpet tile flooring is commonly installed with releasable adhesive or approved tabs over a clean, level subfloor. Loose lay carpet tiles and glue down carpet tiles require the correct backing, floor condition, traffic level, and installation system to be confirmed before ordering."
  },
  {
    question: "Which backing options are available?",
    answer: "Product options include bitumen backed carpet tiles, PVC backing, cushioned backing, and PVC-free PE backing. The best choice depends on dimensional stability, raised floor access, acoustic requirements, sustainability targets, and local installation practice."
  },
  {
    question: "Can these tiles be used in offices, hotels, schools, gyms, airports, or exhibitions?",
    answer: "Yes, selected commercial grade carpet tiles can be specified for offices, hotels, schools, gyms, airports, exhibition spaces, corridors, and public interiors. Traffic class, fire rating, antistatic performance, backing, and maintenance requirements must be confirmed for each application."
  },
  {
    question: "Do you make waterproof, washable, self-adhesive, wool, or polyester carpet tiles?",
    answer: "These terms describe different constructions that are not automatically interchangeable with the listed products. Send the required fiber, backing, cleaning method, installation system, and test standard for separate confirmation of waterproof carpet tiles, washable carpet tiles, self adhesive carpet tiles, wool carpet tiles, polyester carpet tiles, or cut pile carpet tiles."
  }
];

const productOptions = [
  { title: "Linear Block PP Carpet Tiles 50×50 cm for Offices", text: "Gray fine-line and staggered-block appearance. Confirm the requested format, physical sample and project quotation.", href: "/products/carpet-tiles/staggered-block-pp-office-carpet-tiles" },
  { title: "Balance 50×50 cm Polypropylene Loop Pile Carpet Tiles with PVC Backing for Home & Office", text: "Machine-made polypropylene for home and office floor planning. Review samples and request a FOB Tianjin Port project quotation.", href: "/products/carpet-tiles/balance-polypropylene-carpet-tiles" },
  { title: "50×50 cm Commercial PP Loop Pile Carpet Tiles with Bitumen Backing for Offices", text: "Gray with colored gradient accents, PP loop pile and bitumen backing. Review samples and request a FOB Tianjin Port project quotation.", href: "/products/carpet-tiles/gradient-accent-office-carpet-tiles" },
  { title: "Linear Accent Commercial Carpet Tiles", text: "Charcoal and gray linear texture with red accents; sample-led design review and specification confirmation.", href: "/products/carpet-tiles/linear-accent-commercial-carpet-tiles" },
  { title: "Heathered Gray Modular Carpet Tiles", text: "Heathered light, mid-gray and charcoal modular design with sample-led specification review.", href: "/products/carpet-tiles/heathered-gray-modular-carpet-tiles" },
  {
    title: "Luxury Hotel Carpet Tile 50x50cm",
    text: "Nylon or PP modular carpet squares for hotel rooms, corridors, lobbies, meeting rooms, and hospitality renovation projects.",
    href: "/products/carpet-tiles/luxury-hotel-carpet-tile-50x50cm"
  },
  {
    title: "EcoCore PE Backing Carpet Tiles",
    text: "PVC-free 50x50 modular carpet flooring for green offices, raised floors, schools, and sustainability-oriented commercial projects.",
    href: "/products/carpet-tiles/ecocore-pe-backing-carpet-tiles"
  },
  {
    title: "50x50 Nylon PP Office Carpet Tiles",
    text: "Flexible nylon or polypropylene carpet tiles for offices, retail, corridors, and wholesale modular flooring programs.",
    href: "/products/carpet-tiles/50x50-nylon-pp-office-carpet-tiles"
  },
  {
    title: "PP Bitumen Backed Office Carpet Tiles",
    text: "100% PP fiber 50x50cm carpet squares with bitumen backing for office, meeting room, home office, and OEM flooring projects.",
    href: "/products/carpet-tiles/pp-bitumen-backed-office-carpet-tiles"
  },
  {
    title: "Vcarpets PP PVC-Backed Office Carpet Tiles",
    text: "50x50cm PP loop-pile tiles with PVC backing. Review the gray striped appearance, physical sample and office project requirements.",
    href: "/products/carpet-tiles/pp-pvc-backed-office-carpet-tiles"
  },
  {
    title: "100% Nylon Office Carpet Tile",
    text: "Nylon loop-pile face with listed bitumen backing. Confirm the selected construction and product-matched traffic, fire and antistatic evidence before approval.",
    href: "/products/carpet-tiles/nylon-office-carpet-tile"
  },
  {
    title: "Gray Line Patterned Carpet Tiles",
    text: "Modern gray, charcoal, blue-accent, and custom-color carpet squares for office and hotel commercial interiors.",
    href: "/products/carpet-tiles/gray-line-nylon-office-hotel-carpet-tiles"
  },
  {
    title: "Premium Nylon 6.6 Carpet Tiles",
    text: "Heavy-duty 50x50 commercial modular tiles for corporate offices, corridors, airports, schools, and contract projects.",
    href: "/products/carpet-tiles/commercial-nylon-tiles"
  },
  {
    title: "Healthcare Hospital Carpet Tiles",
    text: "Low-pile modular flooring for non-clinical waiting, consultation, administration, and senior-care areas.",
    href: "/products/carpet-tiles/healthcare-hospital-carpet-tiles"
  },
  {
    title: "Education School Carpet Tiles",
    text: "Replaceable commercial carpet tiles for classrooms, libraries, student centers, and campus interiors.",
    href: "/products/carpet-tiles/education-school-carpet-tiles"
  }
];

const buyerIntentPaths = [
  {
    title: "Office and rolling-chair areas",
    text: "Start with the measured office area, traffic zones, caster movement, maintenance and selected construction. Fibre alone does not establish a traffic class.",
    links: [
      { label: "Nylon office carpet tile", href: "/products/carpet-tiles/nylon-office-carpet-tile" },
      { label: "Rolling-chair specification guide", href: "/blog/specify-commercial-carpet-tiles-chair-wheel-areas" },
      { label: "500 m² office quantity and specification guide", href: "/blog/500-sqm-office-carpet-tiles-specification-guide" },
    ],
  },
  {
    title: "Hotels, corridors and guestrooms",
    text: "Compare hospitality tile options by visual continuity, traffic, pattern approval, maintenance, spare stock and project documents.",
    links: [
      { label: "Luxury hotel carpet tile", href: "/products/carpet-tiles/luxury-hotel-carpet-tile-50x50cm" },
      { label: "Hotel procurement documents", href: "/blog/hotel-carpet-procurement-documents-checklist" },
    ],
  },
  {
    title: "Schools and universities",
    text: "Separate classrooms, libraries, corridors and student areas before comparing traffic, cleaning, phased installation and spare stock.",
    links: [
      { label: "Education school carpet tiles", href: "/products/carpet-tiles/education-school-carpet-tiles" },
      { label: "UK education procurement guide", href: "/blog/uk-school-university-carpet-tile-procurement-guide" },
    ],
  },
  {
    title: "Backing and sustainability review",
    text: "Use the exact subfloor, installation, access-floor and sustainability brief to compare bitumen, PVC-free PE and other backing systems.",
    links: [
      { label: "EcoCore PE backing tiles", href: "/products/carpet-tiles/ecocore-pe-backing-carpet-tiles" },
      { label: "Backing comparison guide", href: "/blog/commercial-carpet-tile-backing-comparison-guide" },
    ],
  },
  {
    title: "Healthcare and high-traffic support areas",
    text: "Confirm traffic class, cleaning route, antistatic needs, fire documents and replacement controls for demanding commercial interiors.",
    links: [
      { label: "Healthcare carpet tiles", href: "/products/carpet-tiles/healthcare-hospital-carpet-tiles" },
      { label: "Fire and VOC document guide", href: "/blog/commercial-carpet-tile-fire-rating-voc-documents-guide" },
    ],
  },
  {
    title: "Samples, quantity and RFQ planning",
    text: "Prepare area, waste, spare stock, tile format, destination and document requirements before asking for a comparable quotation.",
    links: [
      { label: "RFQ quantity calculator", href: "/resources/commercial-carpet-rfq-calculator" },
      { label: "Supplier verification checklist", href: "/blog/commercial-carpet-supplier-verification-checklist-b2b-buyers" },
      { label: "Request project quote", href: "/contact?product=Commercial%20Carpet%20Tiles#quote-form" },
    ],
  },
];

const evidenceExamples = [
  { id: "staggered-block-pp-office-carpet-tiles", status: "Supplier-reference construction", check: "Match the quoted SKU to the supplier table and physical sample. The source has conflicting pile-construction labels; no product-matched performance report is established." },
  { id: "nylon-office-carpet-tile", status: "Catalog-reference construction", check: "Ask for the exact tile, backing, substrate and fixing method covered by each required report. Catalog dimensions do not establish Class 33, fire, acoustic or antistatic performance." },
  { id: "linear-accent-commercial-carpet-tiles", status: "Appearance-led design reference", check: "Confirm dimensions, fibre and backing before calculating coverage or comparing price. AI illustrations are not a supplied installation or product test." },
];

export const metadata: Metadata = {
  title: "Commercial Carpet Tiles 50x50 | Wholesale & Samples",
  description: "Compare 50x50 nylon and polypropylene commercial carpet tiles for offices and hotels. Review wholesale quotation factors, backing, samples and export terms.",
  alternates: { canonical: categoryPath },
  openGraph: {
    title: "Commercial Carpet Tiles 50x50 | Wholesale & Samples",
    description: "Compare commercial carpet tile products by fiber, backing, factory price, MOQ, samples, and office, hotel, healthcare, or education application.",
    url: absoluteUrl(categoryPath),
    type: "website",
    images: [{ url: absoluteUrl("/images/category-tiles.webp"), alt: "Commercial modular carpet tiles supplied by VCARPETS" }]
  }
};
export default function CategoryPage() {
  const categoryId = "carpet-tiles";
  // One evidence summary feeds both visible cards and their structured list.
  // Keep the original records untouched; catalog claims on other pages are not broadened here.
  const categoryProducts = products.filter((p) => p.category === categoryId)
    .map((product) => ({ ...product, description: evidenceCopy(product).summary }));
  const jsonLd = {
    ...productItemListJsonLd({
      name: "Commercial Carpet Tiles and Modular Office Carpet Flooring",
      description: "Commercial carpet tile products for offices, hotels, schools, healthcare support areas, corridors, airports, and contract flooring projects.",
      url: categoryPath,
      items: categoryProducts,
    }),
    "@id": `${absoluteUrl(categoryPath)}#webpage`,
    isPartOf: { "@id": `${brandInfo.url}/#website` },
    publisher: { "@id": `${brandInfo.url}/#organization` },
  };
  const breadcrumbJsonLd = categoryBreadcrumbJsonLd(categoryId);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categoryFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      <section className="relative isolate overflow-hidden bg-[#102A43] py-20 text-center md:py-24">
        <picture className="absolute inset-0 -z-20 block h-full w-full">
          <source
            srcSet="/images/category/carpet-tiles-hero-factory/carpet-tiles-factory-hero-640.webp 640w, /images/category/carpet-tiles-hero-factory/carpet-tiles-factory-hero-960.webp 960w, /images/category/carpet-tiles-hero-factory/carpet-tiles-factory-hero-1440.webp 1440w, /images/category/carpet-tiles-hero-factory/carpet-tiles-factory-hero-1920.webp 1920w"
            sizes="100vw"
            type="image/webp"
          />
          <img
            src="/images/category/carpet-tiles-hero-factory/carpet-tiles-factory-hero-1440.webp"
            alt=""
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 -z-10 bg-[#102A43]/72" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-[#102A43] to-transparent" />
        <div className="container-fox relative z-10">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-[#f0a23a]">Commercial Carpet Tile Supplier & Distributor Support</p>
          <h1 className="text-4xl font-black uppercase text-white md:text-6xl">Commercial Carpet Tiles & Modular Flooring</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300">50x50 nylon and polypropylene carpet tiles for offices, hotels, corridors, schools, healthcare support areas, airports, and commercial projects. Compare wholesale price, backing, thickness, MOQ, and technical performance across the listed range.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/contact?product=Commercial%20Carpet%20Tiles#quote-form" className="btn-fox-orange">Request Price & Samples</Link>
            <Link href="#carpet-tile-products" className="inline-flex min-h-12 items-center justify-center border border-white/40 px-7 py-3 text-xs font-black uppercase tracking-widest text-white transition-colors hover:border-white">Compare Products</Link>
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-white/65">B2B supply · FOB Tianjin Port · Sample costs and timing confirmed by project</p>
        </div>
      </section>
      <AnswerFirst
        title="Which Commercial Carpet Tile Should a Project Buyer Choose?"
        answer="Shortlist carpet tiles by the intended room, traffic, chair use, subfloor and maintenance plan; then compare one specified fibre and backing combination at a time. A nylon, polypropylene or PE-backing label alone does not establish traffic class, fire, acoustic or antistatic performance. Match the quotation, physical sample and required reports to the same product code and construction before approval."
        facts={[
          { label: "Listed Formats", value: "50 x 50 cm on specified models; design-only formats need confirmation" },
          { label: "Fiber Options", value: "Nylon, Nylon 6.6 and polypropylene" },
          { label: "Backing Options", value: "Bitumen, PVC, cushion and PVC-free PE" },
          { label: "Buyer Checks", value: "Traffic, fire, subfloor, adhesive and spare-tile plan" },
        ]}
        moq={[
          { label: "Sample", value: "Confirm color, texture, fiber and backing" },
          { label: "Trial Order", value: "Confirmed by product, color and production feasibility" },
          { label: "Project MOQ", value: "Confirm the selected model, colour and quantity in writing" },
        ]}
        suitableFor={[
          "Offices, hotels, education, healthcare support areas and phased renovation",
          "Projects that value individual-tile replacement and access-floor flexibility",
        ]}
        notSuitableFor={[
          "Wet or outdoor areas without a purpose-built flooring system",
          "Buying by appearance alone without traffic, fire and installation requirements",
        ]}
        evidence="The comparison is based on the products listed on this category page. Final construction, test documents, price, availability, MOQ and lead time are confirmed against the selected product and project specification."
        quoteHref="/contact?product=Commercial%20Carpet%20Tiles#quote-form"
        quoteLabel="Request a Tile Recommendation"
      />

      <ConversionLiftPanel
        eyebrow="Quote Before Final Selection"
        title="Ask for the Right Carpet Tile Specification by Project Use"
        body="Tell us the office, hotel, school, healthcare, corridor, or retail application, then add area and destination. This helps the factory recommend the tile construction, backing, MOQ, and sample path before you spend time comparing every style."
        product="Commercial Carpet Tiles"
        quoteHref="/contact?product=Commercial%20Carpet%20Tiles#quote-form"
        compact
      />

      <ProcurementSnapshot
        title="Commercial Carpet Tile Buying Facts"
        facts={[
          { label: "Project MOQ", value: "Model-specific", detail: "Confirm the chosen construction, colour and order quantity; samples and trial orders are separate." },
          { label: "Production", value: "Confirm in quotation", detail: "Agree the production start conditions and schedule. Shipping transit is separate." },
          { label: "Samples", value: "Available", detail: "Confirm surface, backing, color, and specification before bulk order." },
          { label: "Trade Terms", value: "FOB Tianjin Port", detail: "Confirm the nominated product, quantity and supply scope in the written quotation." },
        ]}
        quoteHref="/contact?product=Commercial%20Carpet%20Tiles#quote-form"
        downloadHref="/downloads/commercial-carpet-tile-buying-specification-guide.pdf"
        downloadName="Carpet Tile Buying & Specification Guide"
      />
      <TechnicalSourcePanel
        title="Verify Carpet Tile Construction Before Ordering"
        summary="Compare the exact fiber, backing, pile weight, tile size, traffic requirement, installation system, MOQ, and Incoterm. The guide is a procurement reference; the quoted construction and project documents control the final order."
        documents={[
          { label: "Commercial Carpet Tile Buying & Specification Guide", href: "/downloads/commercial-carpet-tile-buying-specification-guide.pdf" },
        ]}
        sources={[
          { label: "Manufacturer Profile", href: "/commercial-carpet-manufacturer" },
          { label: "Factory & Production", href: "/factory" },
          { label: "Concrete Installation Guide", href: "/blog/carpet-tiles-over-concrete-installation-guide" },
          { label: "Rolling Chair Fit-Out Guide", href: "/blog/office-carpet-tiles-rolling-chairs-fitout-guide" },
          { label: "Request a Quote", href: "/contact?product=Commercial%20Carpet%20Tiles#quote-form" },
        ]}
      />
      <section className="section-padding scroll-mt-24 border-b border-border bg-white" data-funnel-section="carpet_tile_procurement_decisions" id="product-evidence" aria-labelledby="product-evidence-heading">
        <div className="container-fox">
          <div className="mb-8 max-w-4xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">Product Evidence, Not Category-Wide Promises</p>
            <h2 id="product-evidence-heading" className="text-3xl font-black text-primary md:text-4xl">What is documented for the carpet tile you are comparing?</h2>
            <p className="mt-5 leading-8 text-muted">VCARPETS is the trading brand of {brandInfo.name}. These three examples have different evidence levels. Each specification belongs only to the named model; it is not a shared specification for this collection.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {evidenceExamples.map((example) => {
              const product = categoryProducts.find((item) => item.id === example.id)!;
              return <article key={example.id} className="min-w-0 rounded-lg border border-border bg-surface p-6">
                <p className="text-xs font-black uppercase tracking-wider text-accent">{example.status}</p>
                <h3 className="mt-3 text-xl font-black leading-7 text-primary"><Link href={`/products/${categoryId}/${product.id}`} className="underline underline-offset-4">{product.name}</Link></h3>
                <p className="mt-4 text-sm leading-7 text-muted">{product.description}</p>
                <p className="mt-4 border-t border-border pt-4 text-sm leading-7 text-muted"><strong className="text-primary">Before approval:</strong> {example.check}</p>
              </article>;
            })}
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-7 text-muted">For a hypothetical 500 m² carpeted office, nominal 50×50 cm tiles give 2,000 net tiles before cutting allowance, retained spares and carton rounding. This is geometry, not a product recommendation or completed project. Use the <Link href="/blog/500-sqm-office-carpet-tiles-specification-guide" className="font-bold text-accent underline">500 m² office specification and quantity guide</Link> to separate the calculation from construction and document approval.</p>
          <p className="mt-4 text-sm leading-7 text-muted">Evidence review: 25 October 2026. Product pages identify catalog or supplier references and document gaps; the <Link href="/resources/ai-commercial-carpet-source-guide" className="font-bold text-accent underline">procurement resource directory</Link> connects the supporting decision guides.</p>
          <p className="mt-6 text-sm leading-7 text-muted">Compare the <Link href="/products/carpet-tiles/nylon-office-carpet-tile#size-layout-backing" className="font-bold text-accent underline">50x50 cm nylon commercial carpet tile size, layout and backing checks</Link> and use the <Link href="/resources/installation-guides" className="font-bold text-accent underline">installation planning brief</Link> to align the site and product details before requesting a quote. Plan spare tiles and cleaning responsibilities with the <Link href="/resources/maintenance-guides" className="font-bold text-accent underline">maintenance handoff brief</Link>. For a concrete substrate, review the <Link href="/blog/carpet-tiles-over-concrete-installation-guide" className="font-bold text-accent underline">concrete-floor guide</Link>; send the complete scope through the <Link href="/contact?product=Commercial%20Carpet%20Tiles#quote-form" className="font-bold text-accent underline">commercial carpet tile RFQ form</Link>.</p>
          <p className="mt-5 text-sm leading-7 text-muted">Still deciding between modules and roll carpet? Use the <Link href="/blog/carpet-tiles-vs-broadloom-commercial-projects-guide" className="font-bold text-accent underline">carpet tiles vs broadloom buyer comparison</Link> to review repair access, zone layout and the same installed scope before comparing quotations.</p>
          <p className="mt-4 text-sm leading-7 text-muted">Specifying a removable panel floor? Use the <Link href="/blog/carpet-tiles-raised-access-floor-procurement-guide" className="font-bold text-accent underline">raised-access-floor carpet tile procurement checklist</Link> to record panel information, fixing review and future service access before releasing the finish order. Suitability must be confirmed for the exact product and floor system.</p>
        </div>
      </section>
      <section className="border-y border-border bg-surface py-8">
        <div className="container-fox max-w-4xl">
          <h2 className="text-xl font-black text-primary">Choosing Carpet Tiles for an Open-Plan Office?</h2>
          <p className="mt-3 text-sm leading-7 text-muted">Review absorption, impact-transmission evidence, chair use and the proposed floor assembly in the <Link href="/blog/carpet-tiles-open-plan-office-acoustics-guide" className="font-bold text-accent underline">open-plan office carpet tile acoustic selection guide</Link>. Turn the noise concern and product shortlist into a clear sample and quotation brief.</p>
        </div>
      </section>
      <section id="carpet-tile-products" className="section-padding scroll-mt-24">
        <div className="container-fox">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-black uppercase text-primary md:text-4xl">Commercial Carpet Tile Products</h2>
            <p className="leading-relaxed text-muted">Compare material, backing, traffic class, price, minimum order, and application. Review each product’s confirmed details, illustrated or photographed appearance, specification needs and inquiry path.</p>
            <p className="mt-4 text-sm leading-7 text-muted"><strong className="text-primary">Read the FOB pricing unit:</strong> {priceUnitDisclosure}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categoryProducts.map((p) => (
              <Link key={p.id} href={`/products/${categoryId}/${p.id}`} className="group flex h-full flex-col rounded-lg border border-border bg-white p-6 transition-all duration-300 hover:border-accent hover:shadow-xl">
                <div className="aspect-square overflow-hidden mb-8 shadow-md border border-border">
                   <ProductImage src={p.image} alt={p.imageAlt || p.name} fit={p.id === "pp-pvc-backed-office-carpet-tiles" ? "contain" : "cover"} className="w-full h-full object-cover transition-transform group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                {["gradient-accent-office-carpet-tiles", "balance-polypropylene-carpet-tiles"].includes(p.id) && <p className="mb-4 text-xs leading-6 text-muted">AI-edited planning visualization. Confirm the physical sample.</p>}
                {p.id === "pp-pvc-backed-office-carpet-tiles" ? <p className="mb-4 text-xs leading-6 text-muted">AI-generated appearance illustration. Approve a physical sample.</p> : null}
                {["heathered-gray-modular-carpet-tiles", "linear-accent-commercial-carpet-tiles"].includes(p.id) && <p className="mb-2 text-xs text-muted">AI-generated design illustration · Specification pending</p>}
                {p.id === "staggered-block-pp-office-carpet-tiles" && <p className="mb-2 text-xs text-muted">AI-edited design reference · Supplier-reference construction; approve the sample</p>}
                <h3 className="mb-6 min-h-20 text-xl font-bold uppercase leading-tight text-primary transition-colors group-hover:text-accent">{p.name}</h3>
                <p className="mb-6 min-h-20 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mb-6 space-y-2 border-t border-border pt-5 text-[11px] uppercase">
                  <div className="flex justify-between gap-4">
                    <span className="text-muted">FOB Price</span>
                    <span className="text-right font-black text-primary">{p.fobPrice?.display ?? (["gradient-accent-office-carpet-tiles", "balance-polypropylene-carpet-tiles", "staggered-block-pp-office-carpet-tiles"].includes(p.id) ? "Request a project quotation" : "Quote by project")}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted">Project MOQ</span>
                    <span className="text-right font-black text-primary">{p.moqTiers.project}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted">Availability</span>
                    <span className="text-right font-black text-primary">{p.availability === "preorder" ? "Pre-order; confirm lead time" : "Confirm by color & quantity"}</span>
                  </div>
                </div>
                <div className="mt-auto flex min-h-11 items-center justify-between rounded-sm bg-primary px-4 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-white transition-colors group-hover:bg-[#C8752A]">
                   <span>{["heathered-gray-modular-carpet-tiles", "linear-accent-commercial-carpet-tiles", "staggered-block-pp-office-carpet-tiles"].includes(p.id) ? "View Design & Specification" : "View Product & Pricing"}</span>
                   <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <div className="max-w-4xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">Commercial Modular Flooring Guide</p>
            <h2 className="mb-7 text-3xl font-black uppercase text-primary md:text-5xl">Carpet Tile Manufacturer for Office & Contract Projects</h2>
            <div className="space-y-5 text-base leading-8 text-muted">
              <p>VCARPETS manufactures commercial carpet tiles for wholesale buyers, carpet tile distributors, office carpet suppliers, flooring contractors, hotels, and project procurement teams. The collection includes nylon carpet tiles, polypropylene carpet tiles, modular carpet squares, bitumen backed carpet tiles, and PVC-free PE backing options.</p>
              <p>Applications include office floor carpet tiles, commercial office carpet, hotel carpet tiles, raised floor carpet tiles, acoustic carpet tiles, school carpet tiles, gym carpet tiles, airport carpet tiles, exhibition carpet tiles, and heavy-duty commercial carpet tiles. The required traffic class, fire rating, antistatic performance, backing, and installation system must be confirmed for each project.</p>
              <p>Available visual directions include black carpet tiles, blue carpet tiles, navy carpet tiles, green carpet tiles, grey carpet tiles, beige carpet tiles, and patterned carpet tiles. Actual colors depend on the selected product, yarn, MOQ, sample approval, and custom production feasibility.</p>
            </div>
          </div>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {productOptions.map((option) => (
              <Link key={option.href} href={option.href} className="group bg-white p-7 transition-colors hover:bg-primary">
                <h3 className="mb-3 text-base font-black uppercase text-primary group-hover:text-white">{option.title}</h3>
                <p className="text-sm leading-relaxed text-muted group-hover:text-white/75">{categoryProducts.find((product) => option.href.endsWith(`/${product.id}`))?.description ?? option.text}</p>
                <span className="mt-5 inline-block text-[10px] font-black uppercase tracking-widest text-accent">View Product →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding" data-funnel-section="buyer_intent_paths" aria-labelledby="buyer-intent-paths-heading">
        <div className="container-fox">
          <div className="max-w-4xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">Choose by project question</p>
            <h2 id="buyer-intent-paths-heading" className="mb-6 text-3xl font-black uppercase text-primary md:text-5xl">Start With the Carpet Tile Procurement Path That Matches Your Project</h2>
            <p className="leading-8 text-muted">A useful comparison starts with the application and approval risk. Select the path closest to your project to review the relevant product construction, buyer guide and quotation inputs before contacting the factory.</p>
          </div>
          <nav className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3" aria-label="Commercial carpet tile procurement paths">
            {buyerIntentPaths.map((path) => (
              <article key={path.title} className="bg-white p-6">
                <h3 className="text-lg font-black leading-tight text-primary">{path.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{path.text}</p>
                <div className="mt-5 flex flex-col gap-2 border-t border-border pt-4">
                  {path.links.map((link) => (
                    <Link key={link.href} href={link.href} className="text-xs font-black uppercase tracking-[0.08em] text-accent underline-offset-4 hover:text-primary hover:underline">
                      {link.label} →
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </nav>
        </div>
      </section>
      <section className="section-padding" data-funnel-section="quote_requirements">
        <div className="container-fox grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">Wholesale Buying Information</p>
            <h2 className="mb-6 text-3xl font-black uppercase text-primary md:text-5xl">Carpet Tiles Wholesale Price & Quote Requirements</h2>
            <p className="leading-8 text-muted">Prices are quoted per piece or per square meter depending on the product. Send the information below so the factory can compare bulk carpet tile options on the same commercial basis.</p>
          </div>
          <dl className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {[
              ["Project Area", "Total SQM, floor plan, waste allowance, and phased delivery needs"],
              ["Application", "Office, hotel, school, gym, airport, exhibition, or other space"],
              ["Material", "Nylon, Nylon 6.6, polypropylene, or specified alternative"],
              ["Backing", "Bitumen, PVC, cushion, PVC-free PE, or raised floor requirement"],
              ["Installation", "Releasable adhesive, tabs, loose-lay system, and layout direction"],
              ["Performance", "Traffic class, fire rating, antistatic, acoustic, and cleaning needs"]
            ].map(([term, detail]) => (
              <div key={term} className="bg-white p-6">
                <dt className="mb-2 text-xs font-black uppercase text-primary">{term}</dt>
                <dd className="text-sm leading-relaxed text-muted">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section id="batch-zone-spare-record" className="section-padding scroll-mt-24 border-b border-border bg-surface" aria-labelledby="batch-record-heading">
        <div className="container-fox max-w-5xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">Receiving &amp; Installation Handoff</p>
          <h2 id="batch-record-heading" className="text-3xl font-black uppercase text-primary md:text-4xl">Carpet Tile Batch, Zone &amp; Spare Record</h2>
          <p className="mt-5 leading-8 text-muted">Use one record for each SKU, color, batch and installation zone. Copy the carton labels on arrival, reconcile quantities with the order, and identify the cartons reserved for later replacement before releasing material to the installer.</p>
          <p id="batch-record-note" className="mt-3 text-sm leading-7 text-muted">Blank planning template only, not a completed inspection or acceptance certificate. Agree the project acceptance criteria and authorized approver in advance. Confirm the selected product instructions; this record sets no installation tolerance or guarantee that future orders will use the same batch.</p>
          <div className="mt-7 border border-border bg-white">
            <table className="w-full table-fixed text-left text-sm" aria-describedby="batch-record-note">
              <caption className="border-b border-border px-5 py-4 text-left font-bold text-primary">Blank receiving record: copy or download and complete for your project</caption>
              <thead className="bg-primary text-white">
                <tr><th scope="col" className="w-2/5 px-4 py-3">Record field</th><th scope="col" className="px-4 py-3">Entry to complete</th></tr>
              </thead>
              <tbody>
                {[
                  ["SKU / product reference", "________________"],
                  ["Color / approved sample reference", "________________"],
                  ["Batch / dye-lot label", "________________"],
                  ["Installation zone / floor / room", "________________"],
                  ["Carton quantity received", "________________"],
                  ["Spare allocation", "Cartons or tiles: ______; storage location: ______"],
                  ["Arrival photo reference", "Carton label and material / damage photos: ______"],
                  ["Checker / inspection date", "________________"],
                  ["Approval / hold decision", "Decision, approver, date and open actions: ______"],
                ].map(([field, entry]) => (
                  <tr key={field} className="border-t border-border">
                    <th scope="row" className="break-words px-4 py-4 align-top font-bold text-primary">{field}</th>
                    <td className="break-words px-4 py-4 align-top text-muted">{entry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="/downloads/carpet-tile-batch-zone-spare-record.csv" download className="btn-fox-orange">Download Blank Record (CSV)</a>
            <Link href="/contact?product=Commercial%20Carpet%20Tiles#quote-form" className="inline-flex min-h-12 items-center px-4 py-3 text-sm font-bold text-primary underline underline-offset-4">Discuss Your Tile Order</Link>
          </div>
          <p className="mt-6 text-sm leading-7 text-muted">If labels, quantities or visible condition do not match the agreed order, mark the affected cartons and zone as on hold and resolve the issue with the supplier and project approver before installation. Record any agreed split between installation stock and spare stock; do not assume a fixed spare percentage.</p>
          <p className="mt-4 text-sm leading-7 text-muted">Use the complete <Link href="/blog/carpet-tile-delivery-inspection-site-storage-checklist" className="font-bold text-accent underline">carpet tile delivery inspection and site storage checklist</Link> to prepare the arrival pack, visible-condition record, hold or release decision and installer handoff before cartons enter a project zone.</p>
          <p className="mt-4 text-sm leading-7 text-muted">For B2B orders from Tianjin Vcarpets Global Commercial Carpet Co., Ltd., use the <Link href="/blog/commercial-carpet-fob-tianjin-port-buyer-checklist" className="font-bold text-accent underline">FOB Tianjin Port buyer checklist</Link> for shipment and export-document coordination. Shipping paperwork and this site receiving record serve different purposes: the record connects the delivered labels, installation zones, spare allocation and project approval.</p>
          <p className="mt-4 text-xs leading-6 text-muted">Reference for checking product, color, quantity and carton batch labels: <a href="https://www.interface.com/content/dam/interfaceinc/interface/technical/apac/apac-shared-assets/installation/CarpetTileInstallationInstructions_APAC.pdf" className="underline underline-offset-4">Interface Carpet Tile Installation Guide, page 3 (PDF)</a>. Its instructions apply to Interface products; its product-specific limits and installation systems are not VCARPETS specifications.</p>
        </div>
      </section>
      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox max-w-5xl">
          <h2 className="mb-10 text-3xl font-black uppercase text-primary md:text-5xl">Commercial Carpet Tiles FAQ</h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {categoryFaqs.map((item) => (
              <details key={item.question} className="border border-border bg-white p-6">
                <summary className="cursor-pointer font-black text-primary">{item.question}</summary>
                <p className="mt-4 leading-relaxed text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <FactoryCtaBackground className="py-16 text-center">
        <div className="container-fox">
          <h2 className="text-2xl font-black uppercase text-white md:text-4xl">Request a Bulk Carpet Tile Quotation</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/70">Send your area, application, material, backing, destination, and required date for a product recommendation and wholesale price.</p>
          <Link href="/contact?product=Commercial%20Carpet%20Tiles#quote-form" className="btn-fox-orange mt-8">Send Inquiry</Link>
        </div>
      </FactoryCtaBackground>
    </div>
  );
}
