import type { Metadata } from "next";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { products } from "@/lib/data";
import { absoluteUrl, productJsonLd, productPath, safeJsonLd } from "@/lib/seo";

const product = products.find((item) => item.id === "natural-sisal-carpet");

export const metadata: Metadata = {
  title: "Natural Sisal Carpet for Offices, Retail & Public Areas | VISHOME",
  description:
    "Natural sisal carpet supplier for offices, retail, galleries, hospitality public areas, and sustainable commercial interiors. Linen-weave texture, 4m width, MOQ 300 SQM.",
  keywords: [
    "natural sisal carpet",
    "sisal carpet supplier",
    "commercial sisal carpet",
    "sisal office carpet",
    "natural fiber carpet",
    "linen weave sisal carpet",
  ],
  alternates: { canonical: "/natural-sisal-carpet" },
  openGraph: {
    title: "Natural Sisal Carpet for Commercial Interiors | VISHOME",
    description:
      "100% natural sisal linen-weave carpet for offices, retail, galleries, hotel public areas, and biophilic commercial interiors.",
    url: absoluteUrl("/natural-sisal-carpet"),
    images: [{ url: absoluteUrl("/images/natural-sisal-carpet-office.jpg"), alt: "Natural sisal carpet in a modern office reception" }],
    type: "website",
  },
};

const answers = [
  ["Best Applications", "Offices, reception areas, boutique retail, galleries, exhibition halls, hotel public spaces, and low-to-medium moisture commercial interiors."],
  ["Material", "100% natural sisal from agave sisalana fiber, woven into a refined linen-weave flatweave texture."],
  ["Standard Width", "4m broadloom rolls, with custom-cut bound rugs and runners available by project request."],
  ["Commercial Specs", "ASTM E648 Class I fire-retardant option, Class 32 commercial traffic, natural latex and jute backing, permanent antistatic behavior."],
  ["MOQ and Lead Time", "MOQ 300 SQM with typical production lead time of about 30 days. Free samples are available on request."],
  ["FOB Price Signal", product?.fobPrice?.display ?? "Project quotation depends on specification, color, quantity, and backing option."],
];

const faqs = [
  {
    q: "Is natural sisal carpet good for commercial use?",
    a: "Yes. Natural sisal carpet is suitable for offices, retail, galleries, exhibition halls, and hotel public areas when specified with the right backing, fire-retardant treatment, and maintenance plan.",
  },
  {
    q: "What is the advantage of sisal carpet for office interiors?",
    a: "Sisal adds a warm natural texture, supports biophilic interior concepts, and provides a durable flatweave surface for commercial spaces that want a more natural alternative to synthetic carpet.",
  },
  {
    q: "Can VISHOME supply custom sisal rugs and runners?",
    a: "Yes. VISHOME can supply 4m broadloom rolls, custom-cut rugs, bound edges, runners, and project-specific sizes for offices, retail, hospitality, and public spaces.",
  },
  {
    q: "Is sisal carpet waterproof?",
    a: "Natural sisal is not waterproof and should not be saturated with water. For high-moisture or stain-sensitive environments, a synthetic sisal-look option may be more practical.",
  },
];

export default function NaturalSisalCarpetLandingPage() {
  const productLd = product ? productJsonLd(product) : null;
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
      {productLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      <section className="bg-primary py-20 md:py-28">
        <div className="container-fox grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-accent">Natural Fiber Commercial Flooring</p>
            <h1 className="mb-7 text-4xl font-black uppercase leading-tight text-white md:text-6xl">
              Natural Sisal Carpet for Offices, Retail and Public Areas
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/75">
              VISHOME supplies 100% natural sisal linen-weave carpet for commercial interiors that need a warm, sustainable, biophilic floor finish with project-based sizing and export support.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href={product ? productPath(product.id) : "/products/public-area"} className="btn-fox-orange">View Product Specs</Link>
              <Link href="/contact" className="btn-fox-outline">Request Sisal Samples</Link>
            </div>
          </div>
          <ProductImage src="/images/natural-sisal-carpet-office.jpg" alt="Natural sisal carpet installed in a modern office reception" className="aspect-[4/3] rounded-sm border border-white/10 shadow-2xl" />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {answers.map(([label, value]) => (
              <div key={label} className="bg-white p-6 md:p-8">
                <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-accent">{label}</p>
                <p className="text-sm font-semibold leading-relaxed text-primary">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-fox grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-accent">Specification Guidance</p>
            <h2 className="mb-6 text-3xl font-black uppercase text-primary md:text-5xl">When to Choose Natural Sisal</h2>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              Natural sisal is best for dry commercial interiors where texture, sustainability, and a premium natural look matter. It is especially effective in office receptions, retail showrooms, galleries, hospitality public zones, and design-led workspace projects.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              For spaces with frequent spills or moisture, VISHOME can also discuss synthetic sisal-look alternatives that keep the woven aesthetic while improving cleanability.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <ProductImage src="/images/natural-sisal-carpet.jpg" alt="Natural sisal linen-weave carpet swatch" className="aspect-square border border-border" />
            <ProductImage src="/images/natural-sisal-carpet-roll.jpg" alt="Natural sisal broadloom carpet roll" className="aspect-square border border-border" />
            <ProductImage src="/images/natural-sisal-carpet-retail.jpg" alt="Natural sisal carpet in boutique retail interior" className="aspect-square border border-border" />
            <ProductImage src="/images/natural-sisal-carpet-macro.jpg" alt="Close-up macro of natural sisal woven texture" className="aspect-square border border-border" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-accent">Buyer FAQ</p>
            <h2 className="text-3xl font-black uppercase text-primary md:text-4xl">Natural Sisal Carpet Questions</h2>
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
