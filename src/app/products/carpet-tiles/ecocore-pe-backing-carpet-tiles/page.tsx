import type { Metadata } from "next";
import Link from "next/link";
import { brandInfo, products } from "@/lib/data";
import { absoluteUrl, productPath, safeJsonLd } from "@/lib/seo";
import ProductImage from "@/components/ProductImage";

const productId = "ecocore-pe-backing-carpet-tiles";
const product = products.find((prod) => prod.id === productId);

const productImages = {
  hero: "/images/products/ecocore-pe-backing/01-hero-white-background.png",
  gallery: [
    { src: "/images/products/ecocore-pe-backing/02-perspective-hero-45-degree.png", title: "45-Degree Product View" },
    { src: "/images/products/ecocore-pe-backing/03-tile-corner-detail-pe-backing.png", title: "Lifted Corner PE Backing Detail" },
    { src: "/images/products/ecocore-pe-backing/06-tile-stack-pe-backing-layers.png", title: "Tile Stack and Backing Layers" },
  ],
  details: [
    { src: "/images/products/ecocore-pe-backing/07-texture-close-up-solution-dyed-nylon.png", title: "Solution-Dyed Loop Texture", text: "Dense loop pile surface supports color stability, commercial appearance retention, and daily office use." },
    { src: "/images/products/ecocore-pe-backing/08-pe-backing-close-up.png", title: "PVC-Free PE Backing", text: "PE backing is specified for projects that require a more environmentally responsible modular carpet tile option." },
    { src: "/images/products/ecocore-pe-backing/09-cross-section-layers.png", title: "Layered Construction", text: "The tile combines textile surface, primary backing, and PE backing support for stable commercial installation." },
    { src: "/images/products/ecocore-pe-backing/10-sound-absorption.png", title: "Acoustic Comfort", text: "Soft textile flooring helps reduce footfall noise and improve workplace acoustic comfort." },
    { src: "/images/products/ecocore-pe-backing/11-heavy-traffic-office.png", title: "Heavy Commercial Use", text: "Designed for open offices, corridors, meeting rooms, and high-frequency commercial areas." },
    { src: "/images/products/ecocore-pe-backing/12-easy-replacement.png", title: "Easy Tile Replacement", text: "Individual tiles can be replaced without removing the entire flooring area, reducing lifecycle waste and downtime." },
    { src: "/images/products/ecocore-pe-backing/13-raised-floor-system.png", title: "Raised Floor Friendly", text: "The modular format works well with access-floor commercial interiors and phased maintenance schedules." },
    { src: "/images/products/ecocore-pe-backing/14-rolling-chair-test.png", title: "Office Chair Resistance", text: "Suitable for rolling-chair zones when selected with proper traffic specification and maintenance planning." },
    { src: "/images/products/ecocore-pe-backing/15-eco-material-pvc-free-low-voc.png", title: "Green Building Ready", text: "A practical flooring option for low-VOC, PVC-free, and sustainability-oriented office projects." },
    { src: "/images/products/ecocore-pe-backing/16-installation-process.png", title: "Modular Installation", text: "Compatible with quarter-turn, ashlar, brick, and monolithic layouts for different design effects." },
    { src: "/images/products/ecocore-pe-backing/17-warehouse-packaging-export.png", title: "Export Packaging", text: "Project-based packaging and delivery support for international commercial flooring orders." },
  ],
  banner: "/images/products/ecocore-pe-backing/18-office-application-wide-banner.png",
  office: "/images/products/ecocore-pe-backing/04-lifestyle-office.png",
  green: "/images/products/ecocore-pe-backing/05-green-building-office.png",
};

export const metadata: Metadata = product
  ? {
      title: "PVC-Free PE Backing Carpet Tiles for Sustainable Office Projects | Vishomecarpet",
      description:
        "Vishomecarpet eco-friendly PE backing modular carpet tiles for offices, green buildings, and heavy commercial interiors. PVC-free backing, low VOC option, solution-dyed surface, and easy replacement.",
      keywords: [
        "PE backing carpet tiles",
        "PVC free carpet tiles",
        "eco friendly carpet tiles",
        "sustainable office carpet",
        "green building flooring",
        "low VOC carpet tiles",
        "modular carpet tiles",
        "solution dyed nylon carpet tiles",
        "commercial office carpet tiles",
      ],
      alternates: { canonical: productPath(product.id) },
      openGraph: {
        title: "PVC-Free PE Backing Carpet Tiles | Vishomecarpet",
        description: product.description,
        url: absoluteUrl(productPath(product.id)),
        type: "website",
        images: [{ url: absoluteUrl(productImages.hero), alt: product.name }],
      },
      twitter: {
        card: "summary_large_image",
        title: "PVC-Free PE Backing Carpet Tiles | Vishomecarpet",
        description: product.description,
        images: [absoluteUrl(productImages.hero)],
      },
    }
  : { title: "PVC-Free PE Backing Carpet Tiles | Vishomecarpet" };

export default function EcoCorePeBackingProductPage() {
  const p = products.find((prod) => prod.id === productId);
  if (!p) return <div>Product Not Found</div>;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    brand: { "@type": "Brand", name: "Vishomecarpet" },
    manufacturer: { "@type": "Organization", name: brandInfo.name, url: brandInfo.url },
    description: p.description,
    image: [productImages.hero, ...productImages.gallery.map((item) => item.src)].map(absoluteUrl),
    category: "Eco-friendly modular carpet tiles",
    material: p.spec.material,
    size: p.spec.size,
    additionalProperty: [
      ...Object.entries(p.technicalSpecs).map(([name, value]) => ({ "@type": "PropertyValue", name, value })),
      { "@type": "PropertyValue", name: "Backing", value: "PVC-Free PE Backing" },
      { "@type": "PropertyValue", name: "Application", value: "Office, Green Building, School, Coworking Space, Public Workspace" },
      { "@type": "PropertyValue", name: "Installation", value: "Quarter Turn, Ashlar, Brick, Monolithic" },
    ],
    offers: {
      "@type": "Offer",
      url: absoluteUrl(productPath(p.id)),
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      price: p.fobPrice?.lowPrice,
      highPrice: p.fobPrice?.highPrice,
      seller: { "@type": "Organization", name: brandInfo.name },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
      { "@type": "ListItem", position: 3, name: "Carpet Tiles", item: absoluteUrl("/products/carpet-tiles") },
      { "@type": "ListItem", position: 4, name: p.name, item: absoluteUrl(productPath(p.id)) },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is PE backing carpet tile?",
        acceptedAnswer: { "@type": "Answer", text: "PE backing carpet tile uses a polyethylene backing structure instead of conventional PVC backing, making it suitable for projects that prioritize PVC-free and sustainability-oriented flooring options." },
      },
      {
        "@type": "Question",
        name: "Where can Vishomecarpet EcoCore PE Backing Carpet Tiles be used?",
        acceptedAnswer: { "@type": "Answer", text: "They are suitable for offices, green buildings, coworking spaces, schools, public workspaces, corridors, and commercial interiors requiring modular replacement and low-maintenance flooring." },
      },
      {
        "@type": "Question",
        name: "Can individual carpet tiles be replaced?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. Modular 50x50cm carpet tiles can be replaced individually, helping reduce maintenance downtime and lifecycle waste." },
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd) }} />
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
              <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-white shadow-xl">
                <ProductImage src={productImages.hero} alt={p.name} className="h-full w-full" fit="contain" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-4">
                {productImages.gallery.map((item) => (
                  <div key={item.src} className="aspect-square overflow-hidden rounded-xl border border-border bg-white">
                    <ProductImage src={item.src} alt={item.title} className="h-full w-full" fit="contain" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Vishomecarpet Eco Flooring</p>
              <h1 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
                PVC-Free PE Backing Carpet Tiles for Sustainable Office Projects
              </h1>
              <p className="product-summary mb-8 text-lg leading-relaxed text-muted">
                {p.longDescription}
              </p>
              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {p.features.map((feature) => (
                  <div key={feature} className="rounded-xl border border-border bg-surface px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-primary">
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
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="btn-fox-orange flex-1 py-5 text-center text-sm uppercase tracking-[0.16em] shadow-lg">
                  Request Technical Quote
                </Link>
                <Link href="/projects" className="btn-fox-outline flex-1 py-5 text-center text-sm uppercase tracking-[0.16em]">
                  View Project Cases
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Office + Green Building</p>
            <h2 className="mb-6 text-3xl font-black uppercase leading-tight md:text-5xl">
              Built for Sustainable Commercial Interiors
            </h2>
            <p className="text-white/70 leading-relaxed">
              EcoCore is positioned for buyers searching for eco friendly carpet tiles, PVC free carpet tiles, PE backing carpet tiles, low VOC office flooring, and modular carpet tiles for green building projects.
            </p>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <ProductImage src={productImages.banner} alt="EcoCore carpet tiles in open office application" className="h-full w-full" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Product Details</p>
            <h2 className="text-3xl font-black uppercase text-primary md:text-5xl">Material, Performance and Application</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productImages.details.map((item) => (
              <article key={item.src} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] bg-surface">
                  <ProductImage src={item.src} alt={item.title} className="h-full w-full" fit="contain" />
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
                <p className="text-sm font-black uppercase leading-relaxed text-primary group-hover:text-white">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border">
            <ProductImage src={productImages.office} alt="Modern office with modular carpet tiles" className="aspect-[4/3] w-full" />
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <ProductImage src={productImages.green} alt="Green building office with eco carpet tiles" className="aspect-[4/3] w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
