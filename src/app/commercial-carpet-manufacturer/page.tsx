import type { Metadata } from "next";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { brandInfo, products } from "@/lib/data";
import { absoluteUrl, productItemListJsonLd, productPath, safeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Commercial Carpet Manufacturer in China | Carpet Tiles & Hotel Carpet | VISHOME",
  description:
    "VISHOME is a Tianjin commercial carpet manufacturer supplying carpet tiles, hotel broadloom, public-area carpet, custom patterns, samples, FOB pricing, and export packaging for B2B projects.",
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
    a: "Yes. VISHOME supports export packaging, FOB/CIF/DDP shipping coordination, documentation, sample dispatch, and container planning for global buyers.",
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

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      <section className="bg-primary py-20 md:py-28">
        <div className="container-fox grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-accent">Factory-Direct B2B Supply</p>
            <h1 className="mb-7 text-4xl font-black uppercase leading-tight text-white md:text-6xl">
              Commercial Carpet Manufacturer in China
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/75">
              VISHOME manufactures commercial carpet tiles, wall-to-wall hotel broadloom, public-area carpet, and custom printed flooring from Tianjin for contractors, distributors, hotels, and project procurement teams.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-fox-orange">Request Factory Quote</Link>
              <Link href="/factory" className="btn-fox-outline">View Factory</Link>
            </div>
          </div>
          <ProductImage src="/images/about/production-workshop.webp" alt="VISHOME commercial carpet factory production workshop in Tianjin" className="aspect-[4/3] rounded-sm border border-white/10 shadow-2xl" />
        </div>
      </section>

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
                  <span>MOQ: {product.moq}</span>
                  <span>Lead: {product.leadTime}</span>
                  {product.fobPrice && <span className="col-span-2 text-accent">{product.fobPrice.display}</span>}
                  <span className="col-span-2 text-muted">Availability: In Stock / Made to Order</span>
                </div>
              </Link>
            ))}
          </div>
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
          </div>
        </div>
      </section>
    </div>
  );
}
