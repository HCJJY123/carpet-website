import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { absoluteUrl, productBreadcrumbJsonLd, productJsonLd, productPath, safeJsonLd } from "@/lib/seo";
import ProductImage from "@/components/ProductImage";
import { BuyerReasons, ProductConversionPanel } from "@/components/ProductConversion";

const productId = "gold-mining-carpet-mat";
const product = products.find((prod) => prod.id === productId);

const mainImages = [
  {
    src: "/images/products/gold-mining-carpet-mat/01-hero-45-degree.webp",
    alt: "Vishomecarpet gold mining carpet mat PVC miners moss for sluice box gold recovery",
  },
  {
    src: "/images/products/gold-mining-carpet-mat/02-full-texture-top-view.webp",
    alt: "Gold panning mat full texture top view for gold washing carpet and mining carpet",
  },
  {
    src: "/images/products/gold-mining-carpet-mat/03-rolled-edge-thickness-backing.webp",
    alt: "Rolled edge gold mining carpet mat showing thickness backing and PVC ribbed structure",
  },
  {
    src: "/images/products/gold-mining-carpet-mat/04-pvc-ribbed-miners-moss-texture.webp",
    alt: "PVC ribbed miners moss texture close up for high recovery rate gold carpet",
  },
];

const detailImages = [
  {
    src: "/images/products/gold-mining-carpet-mat/05-product-overview-detail.webp",
    title: "Gold Recovery Mat Overview",
    alt: "Gold mining mat moss product overview for sluice box matting and gold recovery",
  },
  {
    src: "/images/products/gold-mining-carpet-mat/06-layer-structure-drainage-groove.webp",
    title: "Layer Structure and Drainage Groove",
    alt: "Gold mining rubber mat layer structure with drainage groove for sand discharge",
  },
  {
    src: "/images/products/gold-mining-carpet-mat/07-oem-odm-custom-size-logo-package.webp",
    title: "OEM and ODM Custom Options",
    alt: "OEM ODM custom gold mining carpet mat size logo color and package options",
  },
  {
    src: "/images/products/gold-mining-carpet-mat/08-pvc-ribbed-wear-resistant-anti-slip.webp",
    title: "PVC Ribbed Miners Moss Texture",
    alt: "PVC miners moss gold washing mat wear resistant anti slip ribbed texture",
  },
  {
    src: "/images/products/gold-mining-carpet-mat/09-wash-cleaning-sand-discharge.webp",
    title: "Wash Cleaning and Sand Discharge",
    alt: "Gold washing carpet cleaning and sand discharge performance for mining use",
  },
  {
    src: "/images/products/gold-mining-carpet-mat/10-gold-washing-mining-site-application.webp",
    title: "River Gold Mining Application",
    alt: "Gold mining carpet applied in river gold washing and placer gold recovery site",
  },
];

const descriptionParagraphs = [
  "Vishomecarpet Gold Mining Carpet Mat for Sluice Box is designed for gold panning, river gold mining, placer gold recovery, and alluvial gold washing equipment. The PVC ribbed miners moss surface helps catch fine gold particles while water flow carries away sand and mud.",
  "The product is supplied as roll-format mining carpet for sluice boxes, gold washing machines, recovery trays, and field washing systems. Standard options include 1m x 15m rolls with 10mm, 15mm, and 20mm thickness choices, while color, width, package, and logo service can be customized for distributors and equipment manufacturers.",
  "For buyers comparing gold mining mat moss, gold recovery mat, miners moss, gold mining carpet, and sluice box matting, this page provides factory-direct specifications, MOQ, lead time, pricing guidance, and fast quote channels from Vishomecarpet.",
];

const faqs = [
  {
    q: "What is this gold mining carpet mat used for?",
    a: "It is used inside sluice boxes, gold washing machines, gold panning systems, and placer gold recovery equipment to help trap fine gold during water washing.",
  },
  {
    q: "Is this the same as miners moss or sluice box matting?",
    a: "Yes. Buyers also search this product as PVC miners moss, gold mining mat moss, gold sluice mat, gold recovery mat, gold washing carpet, and mining carpet.",
  },
  {
    q: "What sizes and thicknesses are available?",
    a: "Common roll size is 1m x 15m, with 10mm, 15mm, and 20mm thickness options. Width, roll length, color, and backing can be customized for project orders.",
  },
  {
    q: "Can Vishomecarpet provide OEM or ODM service?",
    a: "Yes. Vishomecarpet supports custom color, size, thickness, logo, packaging, and bulk supply for distributors and gold mining equipment manufacturers.",
  },
  {
    q: "What is the MOQ and lead time?",
    a: "Typical MOQ is 100 rolls, with normal production lead time around 15-25 days after order confirmation and packaging details.",
  },
];

export const metadata: Metadata = product
  ? {
      title: "Gold Mining Carpet Mat | PVC Miners Moss Sluice Box Matting",
      description:
        "Vishomecarpet gold mining carpet mat for sluice box, gold panning, miners moss, placer gold recovery, river gold washing, and gold mining equipment.",
      keywords: [
        "gold mining carpet mat",
        "gold mining mat moss",
        "gold panning mat",
        "sluice box matting",
        "gold recovery mat",
        "miners moss",
        "PVC miners moss",
        "gold washing carpet",
        "gold mining sluice mat",
        "gold mining rubber mat",
        "placer gold recovery matting",
        "river gold mining mat",
        "Vishomecarpet",
      ],
      alternates: {
        canonical: productPath(product.id),
        languages: {
          en: absoluteUrl(productPath(product.id)),
          ru: absoluteUrl("/ru/products/public-area/gold-mining-carpet-mat"),
          "x-default": absoluteUrl(productPath(product.id)),
        },
      },
      openGraph: {
        title: "Gold Mining Carpet Mat for Sluice Box | Vishomecarpet",
        description: product.description,
        url: absoluteUrl(productPath(product.id)),
        type: "website",
        images: [{ url: absoluteUrl(product.image), alt: product.imageAlt || product.name }],
      },
      twitter: {
        card: "summary_large_image",
        title: "Gold Mining Carpet Mat for Sluice Box | Vishomecarpet",
        description: product.description,
        images: [absoluteUrl(product.image)],
      },
    }
  : { title: "Gold Mining Carpet Mat | Vishomecarpet" };

export default function GoldMiningCarpetMatPage() {
  const p = products.find((prod) => prod.id === productId);
  if (!p) return <div>Product Not Found</div>;

  const jsonLd = productJsonLd(p);
  const breadcrumbJsonLd = productBreadcrumbJsonLd(p);
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
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
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white shadow-xl">
                <ProductImage src={mainImages[0].src} alt={mainImages[0].alt} className="h-full w-full" fit="contain" priority sizes="(max-width: 1024px) 100vw, 55vw" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-4">
                {mainImages.slice(1).map((image) => (
                  <div key={image.src} className="aspect-square overflow-hidden rounded-xl border border-border bg-white">
                    <ProductImage src={image.src} alt={image.alt} className="h-full w-full" fit="contain" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Vishomecarpet Gold Recovery Matting</p>
              <h1 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
                Gold Mining Carpet Mat for Sluice Box
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
                  <span>Roll Size</span>
                  <span className="text-right font-bold">1m x 15m</span>
                </div>
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
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Mining Carpet and Miners Moss</p>
            <h2 className="mb-6 text-3xl font-black uppercase leading-tight md:text-5xl">
              Built for Gold Washing, Sluice Boxes and Placer Recovery
            </h2>
            <div className="space-y-5 text-white/72">
              {descriptionParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 52)} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
            <ProductImage src="/images/products/gold-mining-carpet-mat/02-full-texture-top-view.webp" alt="Gold mining carpet mat full texture for sluice box and gold washing carpet" className="h-full w-full" fit="contain" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Product Detail Images</p>
            <h2 className="text-3xl font-black uppercase text-primary md:text-5xl">Structure, Texture, Cleaning and Application</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {detailImages.map((item) => (
              <article key={item.src} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] bg-surface">
                  <ProductImage src={item.src} alt={item.alt} className="h-full w-full" fit="contain" />
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

      <BuyerReasons />
    </div>
  );
}
