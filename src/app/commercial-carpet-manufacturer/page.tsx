import type { Metadata } from "next";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import TechnicalSourcePanel from "@/components/TechnicalSourcePanel";
import { brandInfo, products } from "@/lib/data";
import { absoluteUrl, productItemListJsonLd, productPath, safeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Commercial Carpet Manufacturer in China | Carpet Tiles & Hotel Carpet | VISHOME",
  description:
    "Compare a China commercial carpet manufacturer by product fit, MOQ, price basis, lead time, samples, test documents, customization, and export support. Review VISHOME factory capabilities.",
  alternates: { canonical: "/commercial-carpet-manufacturer" },
  openGraph: {
    title: "Commercial Carpet Manufacturer in China | VISHOME",
    description:
      "Factory-direct commercial carpet tiles, hotel broadloom, public-area carpet, custom patterns, sampling, and export support for global B2B projects.",
    url: absoluteUrl("/commercial-carpet-manufacturer"),
    images: [{ url: absoluteUrl("/images/about/production-workshop.webp"), alt: "VISHOME commercial carpet production workshop" }],
    type: "website",
  },
};

const factoryFacts = [
  ["Factory Location", brandInfo.address],
  ["Factory Area", brandInfo.stats.area],
  ["Team Size", brandInfo.stats.employees],
  ["Export Markets", "Philippines / Malaysia / Bulgaria / Australia / New Zealand / South Africa / UAE"],
  ["Core Products", "Commercial carpet tiles, hotel broadloom, public-area carpet, custom printed carpet"],
  ["Project Support", "Samples, specification advice, custom colors, export packing, shipment coordination"],
];

const sourcingCriteria = [
  {
    criterion: "Product and application fit",
    verify: "Ask for the exact construction recommended for office, hotel, corridor, lobby, retail, or public-area traffic.",
    response: "Carpet tiles, hotel broadloom, public-area carpet, printed carpet, natural sisal, and custom rug programs.",
  },
  {
    criterion: "Comparable commercial terms",
    verify: "Compare the same fiber, pile weight, backing, dimensions, packing, Incoterm, and destination—not price alone.",
    response: "Product pages show indicative MOQ, lead time, and FOB range; the final quotation is matched to the approved construction.",
  },
  {
    criterion: "Samples and technical evidence",
    verify: "Request a physical sample, technical data sheet, construction details, and reports for the exact product being quoted.",
    response: "Sample-box support and project-specific technical-document review are available before bulk confirmation.",
  },
  {
    criterion: "Customization control",
    verify: "Confirm pattern repeat, color tolerance, strike-off process, backing, dimensions, and approval checkpoints.",
    response: "Custom color, pattern, size, material, printing, and hospitality design support are available by project.",
  },
  {
    criterion: "Production and delivery plan",
    verify: "Document sample approval, production window, inspection, packing, loading, shipping basis, and target arrival date.",
    response: "The export team supports production scheduling, export packing, container planning, and shipment coordination.",
  },
];

const quoteChecklist = [
  "Application area and project type",
  "Required quantity in square meters",
  "Destination country, city, or port",
  "Fiber, backing, size, and performance target",
  "Fire-rating or indoor-air-quality document requirement",
  "Color, pattern, drawing, or reference image",
  "Required sample and approval process",
  "Target shipment or installation date",
  "Preferred Incoterm such as FOB, CIF, or DAP",
];

const faqs = [
  {
    q: "What does VISHOME manufacture?",
    a: "VISHOME manufactures commercial carpet tiles, wall-to-wall hotel broadloom, public-area corridor carpet, natural sisal carpet, and custom printed carpet for B2B projects.",
  },
  {
    q: "Can VISHOME support custom carpet projects?",
    a: "Yes. The factory supports custom colors, custom patterns, hospitality designs, digital printing, project samples, and specification matching for contractors and designers.",
  },
  {
    q: "What information is needed for a quotation?",
    a: "Send product type, area quantity, project location, target specification, preferred color or pattern, delivery timeline, and any fire-rating or indoor-air-quality requirements.",
  },
  {
    q: "Does VISHOME export commercial carpet?",
    a: "Yes. VISHOME supports export packaging, FOB/CIF/DAP shipping coordination, documentation, sample dispatch, and container planning for global buyers. Available terms depend on the destination and shipment.",
  },
  {
    q: "How should buyers compare commercial carpet manufacturers in China?",
    a: "Compare the exact construction, fiber, pile weight, backing, test-document availability, MOQ, sample process, quality-control checkpoints, Incoterm, packing, and delivery plan. A low price is not comparable if the construction or commercial basis is different.",
  },
  {
    q: "What are typical MOQ and lead-time ranges?",
    a: "They vary by product and customization. Current product pages show indicative project ranges, while the final MOQ and schedule are confirmed after the construction, color, quantity, sample requirement, and delivery destination are reviewed.",
  },
  {
    q: "Can buyers request ASTM or EN fire-performance documents?",
    a: "Buyers can state the required test standard in the RFQ. Vishome will confirm which report is available for the quoted construction or whether project-specific testing is required. A report from a different construction should not be treated as equivalent.",
  },
];

export default function CommercialCarpetManufacturerPage() {
  const jsonLd = productItemListJsonLd({
    name: "VISHOME Commercial Carpet Manufacturer Product Range",
    description: "Commercial carpet products manufactured by VISHOME for global B2B flooring projects.",
    url: "/commercial-carpet-manufacturer",
    items: products,
  });

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl("/commercial-carpet-manufacturer#webpage"),
    url: absoluteUrl("/commercial-carpet-manufacturer"),
    name: "Commercial Carpet Manufacturer in China",
    description:
      "A buyer-oriented guide to comparing commercial carpet manufacturers by construction, MOQ, price basis, samples, technical evidence, customization, and export delivery support.",
    dateModified: "2026-07-28",
    reviewedBy: {
      "@type": "Organization",
      name: brandInfo.name,
      url: brandInfo.url,
    },
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(webPageJsonLd) }} />
      <section className="bg-primary py-20 md:py-28">
        <div className="container-fox grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-accent">Factory-Direct B2B Supply</p>
            <h1 className="mb-7 text-4xl font-black uppercase leading-tight text-white md:text-6xl">
              Commercial Carpet Manufacturer in China
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/75">
              VISHOME is a Tianjin-based B2B manufacturer of commercial carpet tiles, hotel broadloom, public-area carpet, and custom printed flooring. Buyers can compare product construction, MOQ, price basis, samples, technical documents, customization, packing, and delivery planning before confirming a project order.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-fox-orange">Request Factory Quote</Link>
              <Link href="/factory" className="btn-fox-outline">View Factory</Link>
            </div>
          </div>
          <ProductImage src="/images/about/production-workshop.webp" alt="VISHOME commercial carpet factory production workshop in Tianjin" className="aspect-[4/3] rounded-sm border border-white/10 shadow-2xl" />
        </div>
      </section>

      <section className="section-padding" data-funnel-section="manufacturer_direct_answer">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-accent">Direct Buyer Answer</p>
            <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
              How to Choose a Commercial Carpet Manufacturer in China
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg font-semibold leading-relaxed text-primary">
              Choose a manufacturer by matching the exact carpet construction to the application, then compare MOQ, sample approval, technical evidence, customization controls, production timing, packing, and the same shipping basis. Do not compare headline price per square meter until fiber, pile weight, backing, dimensions, performance requirements, and Incoterm are aligned.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              Vishome provides indicative commercial terms on product pages and confirms final terms after reviewing quantity, destination, construction, required documents, customization, and delivery date. Product claims and test reports should always be checked against the exact construction included in the quotation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-fox-orange">Send Comparable RFQ</Link>
              <Link href="/request-sample-box" className="btn-fox-outline !border-primary !text-primary hover:!bg-primary hover:!text-white">Request Samples</Link>
            </div>
          </div>
        </div>
      </section>

      <TechnicalSourcePanel
        title="Commercial Carpet Specification Documents"
        summary="Use these category-level planning guides to prepare a comparable RFQ. Product construction, performance documents, MOQ, lead time, price, and testing remain subject to the exact quotation."
        documents={[
          { label: "Commercial Carpet Tile Buying & Specification Guide", href: "/downloads/commercial-carpet-tile-buying-specification-guide.pdf" },
          { label: "Hotel Broadloom Procurement Guide", href: "/downloads/hotel-broadloom-procurement-guide.pdf" },
          { label: "Public Area Carpet Specification Guide", href: "/downloads/public-area-carpet-specification-guide.pdf" },
        ]}
        sources={[
          { label: "Factory Evidence", href: "/factory" },
          { label: "Product Catalog", href: "/products" },
          { label: "Technical Blog", href: "/blog" },
          { label: "Request Verification", href: "/contact#quote-form" },
        ]}
      />

      <section className="section-padding">
        <div className="container-fox">
          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {factoryFacts.map(([label, value]) => (
              <div key={label} className="bg-white p-6 md:p-8">
                <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-accent">{label}</p>
                <p className="text-sm font-semibold leading-relaxed text-primary">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            Factory area and team-size figures are current VISHOME company-profile figures. Buyers should reconfirm capacity, production scheduling, and the responsible manufacturing line for the quoted order during supplier verification.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface" data-funnel-section="manufacturer_comparison">
        <div className="container-fox">
          <div className="mb-10 max-w-4xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-accent">Supplier Comparison</p>
            <h2 className="text-3xl font-black uppercase text-primary md:text-5xl">
              Commercial Carpet Factory Evaluation Table
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Use the same checklist for every supplier so that price, performance, documents, and delivery commitments remain comparable.
            </p>
          </div>
          <div className="overflow-x-auto border border-border bg-white">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="w-[20%] px-5 py-4 text-xs font-black uppercase tracking-wider">Criterion</th>
                  <th className="w-[40%] px-5 py-4 text-xs font-black uppercase tracking-wider">What the Buyer Should Verify</th>
                  <th className="w-[40%] px-5 py-4 text-xs font-black uppercase tracking-wider">Vishome Response</th>
                </tr>
              </thead>
              <tbody>
                {sourcingCriteria.map((item) => (
                  <tr key={item.criterion} className="border-t border-border align-top">
                    <th scope="row" className="px-5 py-5 text-sm font-black text-primary">{item.criterion}</th>
                    <td className="px-5 py-5 text-sm leading-relaxed text-muted">{item.verify}</td>
                    <td className="px-5 py-5 text-sm leading-relaxed text-primary">{item.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-fox">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-accent">Product Range</p>
            <h2 className="text-3xl font-black uppercase text-primary md:text-5xl">Factory Product Lines for Commercial Projects</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link key={product.id} href={productPath(product.id)} className="group border border-border bg-white p-5 transition-all hover:shadow-xl">
                <div className="mb-6 aspect-square overflow-hidden border border-border">
                  <ProductImage src={product.image} alt={product.imageAlt || product.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <h3 className="mb-3 text-lg font-black uppercase leading-tight text-primary group-hover:text-accent">{product.name}</h3>
                <p className="mb-5 text-sm leading-relaxed text-muted">{product.description}</p>
                <div className="grid grid-cols-2 gap-3 border-t border-border pt-5 text-[10px] font-black uppercase tracking-widest text-primary">
                  <span>Project MOQ: {product.moqTiers.project}</span>
                  <span>Lead: {product.leadTime}</span>
                  {product.fobPrice && <span className="col-span-2 text-accent">{product.fobPrice.display}</span>}
                  <span className="col-span-2 text-muted">Availability: In Stock / Made to Order</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" data-funnel-section="manufacturer_rfq_checklist">
        <div className="container-fox grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="border border-border bg-primary p-7 text-white md:p-10">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-accent">Comparable RFQ</p>
            <h2 className="text-3xl font-black uppercase leading-tight md:text-4xl">
              Information to Send for an Accurate Quote
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Supplying these details reduces assumptions and makes quotations from different factories easier to compare.
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {quoteChecklist.map((item, index) => (
              <li key={item} className="flex gap-4 border border-border bg-white p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-black text-white">
                  {index + 1}
                </span>
                <span className="pt-1 text-sm font-semibold leading-relaxed text-primary">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-accent">Procurement Answers</p>
            <h2 className="text-3xl font-black uppercase text-primary md:text-4xl">What Buyers Usually Need to Know</h2>
          </div>
          <div className="space-y-5">
            {faqs.map((item) => (
              <div key={item.q} className="border border-border p-6">
                <h3 className="mb-3 text-base font-black uppercase text-primary">{item.q}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            ))}
            <div className="border border-accent/40 bg-accent/5 p-6">
              <h3 className="mb-3 text-base font-black uppercase text-primary">Evidence and Claim Check</h3>
              <p className="text-sm leading-relaxed text-muted">
                Final specifications, certifications, test results, commercial terms, and delivery dates are construction- and project-specific. Request the document that matches the quoted product and record approvals in the purchase specification.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
