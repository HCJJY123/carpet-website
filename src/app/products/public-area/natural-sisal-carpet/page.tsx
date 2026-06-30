import type { Metadata } from "next";
import Link from "next/link";
import { brandInfo, products } from "@/lib/data";
import { absoluteUrl, productPath, safeJsonLd } from "@/lib/seo";
import ProductImage from "@/components/ProductImage";

const productId = "natural-sisal-carpet";
const product = products.find((prod) => prod.id === productId);

const productImages = {
  hero: "/images/natural-sisal-carpet-office.jpg",
  gallery: [
    { src: "/images/natural-sisal-carpet-roll.jpg", alt: "Natural sisal broadloom carpet roll, 4m width, with jute backing", title: "Broadloom Roll" },
    { src: "/images/natural-sisal-carpet.jpg", alt: "Natural sisal linen-weave commercial carpet swatch in warm wheat tone by Vishomecarpet", title: "Linen-Weave Swatch" },
    { src: "/images/natural-sisal-carpet-retail.jpg", alt: "Sisal commercial carpet flooring in an upscale boutique retail interior", title: "Boutique Retail" },
    { src: "/images/natural-sisal-carpet-lobby.jpg", alt: "Natural sisal broadloom in a hotel lobby and exhibition public area", title: "Lobby and Exhibition" },
    { src: "/images/natural-sisal-carpet-macro.jpg", alt: "Macro close-up of woven natural sisal linen-weave fiber texture", title: "Linen-Weave Macro" },
    { src: "/images/natural-sisal-carpet-backing.jpg", alt: "Non-slip natural latex and jute backing of sisal commercial carpet", title: "Latex and Jute Backing" },
    { src: "/images/natural-sisal-carpet-colorways.jpg", alt: "Natural sisal carpet shown in four neutral colorways", title: "Neutral Colorways" },
  ],
};

const descriptionParagraphs = [
  "Vishomecarpet's Natural Sisal Linen-Weave Commercial Carpet is a 100% plant-fiber flooring crafted from durable agave sisalana sisal, woven into a refined linen-look flatweave. Its fine, even ribbing brings warm, biophilic character to commercial interiors while delivering the natural strength sisal is known for - an authentic, sustainable alternative to synthetic carpet.",
  "Engineered for contract use, the carpet is fire-retardant treated to Class I (ASTM E648), rated for EN 1307 Class 32 medium-to-heavy commercial traffic, and finished with a non-slip natural-latex backing over a jute secondary for dimensional stability. Standard roll width is 4 m for broadloom installation, with custom widths, bound area rugs, and stair runners available. A stain-resistant synthetic sisal-look (PP) version is offered for higher-maintenance environments.",
  "Ideal for offices, reception areas, boutique retail, galleries, exhibition halls, and hotel public spaces seeking a natural aesthetic, this sisal carpet ships factory-direct from Vishomecarpet with custom sizing, binding, export packing, and worldwide delivery. Request free samples and a project quote to match your specification.",
];

const faqs = [
  {
    q: "Is sisal carpet suitable for commercial spaces?",
    a: "Yes. Sisal is a strong natural fiber rated for EN 1307 Class 32 medium-to-heavy commercial traffic and fire-retardant treated to Class I (ASTM E648), making it well suited to offices, retail, galleries, exhibition halls, and hotel public areas.",
  },
  {
    q: "What is the difference between natural sisal and sisal-look carpet?",
    a: "Natural sisal is 100% plant fiber with authentic texture and tonal variation. Sisal-look carpet is woven from synthetic fiber (PP) to mimic the appearance while offering easier stain cleaning and moisture resistance. Vishomecarpet supplies both.",
  },
  {
    q: "Is sisal carpet eco-friendly?",
    a: "Yes. Sisal is a renewable, biodegradable plant fiber, and the natural-latex and jute backing options keep the product low-VOC - a strong fit for sustainable and green-building projects.",
  },
  {
    q: "What widths and sizes are available?",
    a: "Standard production is 4 m broadloom rolls; custom-cut and bound area rugs, runners, and made-to-size pieces are available to project specification.",
  },
  {
    q: "How do you clean and maintain sisal carpet?",
    a: "Vacuum regularly and treat spills promptly with dry cleaning methods; avoid saturating natural sisal with water. The synthetic sisal-look version tolerates moisture and stains far better for high-traffic sites.",
  },
  {
    q: "What are the MOQ and lead time?",
    a: "MOQ is 300 SQM (no MOQ for in-stock items), with typical production lead time of about 30 days. Free samples are available on request.",
  },
];

export const metadata: Metadata = product
  ? {
      title: "Natural Sisal Linen-Weave Commercial Carpet | Commercial Carpet Product | VISHOME",
      description:
        "Natural 100% sisal commercial carpet with a linen-weave texture for offices, retail, exhibitions, and hotel public areas. Eco-friendly, custom widths, factory-direct.",
      keywords: [
        "natural sisal carpet",
        "sisal commercial carpet",
        "sisal look carpet",
        "linen weave carpet",
        "natural fiber carpet",
        "eco friendly carpet",
        "sisal broadloom",
        "Vishomecarpet",
      ],
      alternates: { canonical: productPath(product.id) },
      openGraph: {
        title: "Natural Sisal Linen-Weave Commercial Carpet | VISHOME",
        description:
          "Natural 100% sisal commercial carpet with a linen-weave texture for offices, retail, exhibitions, and hotel public areas. Eco-friendly, custom widths.",
        url: absoluteUrl(productPath(product.id)),
        type: "website",
        images: [{ url: absoluteUrl(productImages.hero), alt: "Natural sisal carpet in a modern biophilic office reception by Vishomecarpet" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "Natural Sisal Linen-Weave Commercial Carpet | VISHOME",
        description:
          "Natural 100% sisal commercial carpet with a linen-weave texture for offices, retail, exhibitions, and hotel public areas. Eco-friendly, custom widths.",
        images: [absoluteUrl(productImages.hero)],
      },
    }
  : { title: "Natural Sisal Linen-Weave Commercial Carpet | VISHOME" };

export default function NaturalSisalCarpetPage() {
  const p = products.find((prod) => prod.id === productId);
  if (!p) return <div>Product Not Found</div>;

  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: p.name,
    image: [productImages.hero, "/images/natural-sisal-carpet.jpg", "/images/natural-sisal-carpet-macro.jpg"].map(absoluteUrl),
    description:
      "Natural 100% sisal commercial carpet with a refined linen-weave texture for offices, retail, exhibitions, and hotel public areas. Eco-friendly, FR-treated to Class I, custom widths, factory-direct from Vishomecarpet.",
    brand: { "@type": "Brand", name: "Vishomecarpet" },
    category: "Public Area Commercial Carpet",
    material: "100% Sisal (Natural Fiber)",
    manufacturer: { "@type": "Organization", name: brandInfo.name, url: brandInfo.url },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Fire Rating", value: "ASTM E648 Class I (FR-treated)" },
      { "@type": "PropertyValue", name: "Traffic Class", value: "EN 1307 Class 32" },
      { "@type": "PropertyValue", name: "Fiber", value: "100% Natural Sisal" },
      { "@type": "PropertyValue", name: "Construction", value: "Woven Flatweave" },
      { "@type": "PropertyValue", name: "Backing", value: "Natural Latex + Jute (Non-Slip)" },
      { "@type": "PropertyValue", name: "Pile Weight", value: "56oz (1,900 g/m²)" },
      { "@type": "PropertyValue", name: "Total Thickness", value: "7mm" },
      { "@type": "PropertyValue", name: "Roll Width", value: "4m" },
      { "@type": "PropertyValue", name: "Antistatic", value: "Permanent (Natural Fiber)" },
    ],
    offers: p.fobPrice
      ? {
          "@type": "AggregateOffer",
          url: absoluteUrl(productPath(p.id)),
          availability: "https://schema.org/InStock",
          priceCurrency: p.fobPrice.currency,
          lowPrice: p.fobPrice.lowPrice,
          highPrice: p.fobPrice.highPrice,
          offerCount: "1",
          seller: { "@type": "Organization", name: brandInfo.name },
        }
      : undefined,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
      { "@type": "ListItem", position: 3, name: "Public Area Carpets", item: absoluteUrl("/products/public-area") },
      { "@type": "ListItem", position: 4, name: p.name, item: absoluteUrl(productPath(p.id)) },
    ],
  };

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
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />

      <nav className="border-b border-border bg-surface py-3 md:py-4">
        <div className="container-fox">
          <Link href="/products/public-area" className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted hover:text-primary">
            Back to Public Area Carpets
          </Link>
        </div>
      </nav>

      <section className="py-12 md:py-20">
        <div className="container-fox">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div>
              <div className="aspect-[3/2] overflow-hidden rounded-2xl border border-border bg-white shadow-xl">
                <ProductImage
                  src={productImages.hero}
                  alt="Natural sisal carpet in a modern biophilic office reception"
                  className="h-full w-full"
                />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-4">
                {productImages.gallery.slice(0, 3).map((item) => (
                  <div key={item.src} className="aspect-square overflow-hidden rounded-xl border border-border bg-white">
                    <ProductImage src={item.src} alt={item.alt} className="h-full w-full" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Vishomecarpet Natural Fiber Flooring</p>
              <h1 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
                Natural Sisal Linen-Weave Commercial Carpet
              </h1>
              <p className="product-summary mb-8 text-lg leading-relaxed text-muted">{p.description}</p>
              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {p.features.map((feature) => (
                  <div key={feature} className="rounded-xl border border-border bg-surface px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-primary">
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mb-8 space-y-4 border border-border bg-surface p-5 md:p-8">
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
                  <span>Roll Width</span>
                  <span className="text-right font-bold">4m</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="btn-fox-orange flex-1 py-5 text-center text-sm uppercase tracking-[0.16em] shadow-lg">
                  Request Technical Quote
                </Link>
                <Link href="/products/public-area" className="btn-fox-outline flex-1 py-5 text-center text-sm uppercase tracking-[0.16em]">
                  Public Area Carpets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Biophilic Public Space Flooring</p>
            <h2 className="mb-6 text-3xl font-black uppercase leading-tight md:text-5xl">
              100% Natural Sisal with a Refined Linen-Weave Texture
            </h2>
            <div className="space-y-5 text-white/72">
              {descriptionParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <ProductImage src="/images/natural-sisal-carpet-office.jpg" alt="Natural sisal carpet in a modern biophilic office reception" className="h-full w-full" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Project Gallery</p>
            <h2 className="text-3xl font-black uppercase text-primary md:text-5xl">Commercial Sisal Applications and Details</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productImages.gallery.map((item) => (
              <article key={item.src} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] bg-surface">
                  <ProductImage src={item.src} alt={item.alt} className="h-full w-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black uppercase text-primary">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase tracking-[0.08em] text-primary md:mb-12 md:text-3xl md:tracking-widest">
            Technical Data Sheet (TDS)
          </h2>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="section-padding">
        <div className="container-fox max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-black uppercase text-primary md:text-5xl">FAQ</h2>
          <div className="space-y-5">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-base font-black uppercase tracking-wide text-primary">{item.q}</h3>
                <p className="leading-relaxed text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
