import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { absoluteUrl, productBreadcrumbJsonLd, productJsonLd, productPath, safeJsonLd } from "@/lib/seo";
import ProductImage from "@/components/ProductImage";
import { BuyerReasons, ProductConversionPanel } from "@/components/ProductConversion";

const productId = "ecocore-pe-backing-carpet-tiles";
const product = products.find((prod) => prod.id === productId);

const productImages = {
  hero: "/images/products/ecocore-pe-backing/01-hero-white-background.webp",
  gallery: [
    { src: "/images/products/ecocore-pe-backing/02-perspective-hero-45-degree.webp", title: "45-Degree Product View", alt: "Vishomecarpet EcoCore PVC-free PE backing carpet tile in 45-degree product view" },
    { src: "/images/products/ecocore-pe-backing/03-tile-corner-detail-pe-backing.webp", title: "Lifted Corner PE Backing Detail", alt: "Lifted corner detail of PVC-free PE backing commercial carpet tile" },
    { src: "/images/products/ecocore-pe-backing/06-tile-stack-pe-backing-layers.webp", title: "Tile Stack and Backing Layers", alt: "Stacked EcoCore PE backing modular carpet tiles showing layered construction" },
  ],
  details: [
    { src: "/images/products/ecocore-pe-backing/07-texture-close-up-solution-dyed-nylon.webp", title: "Solution-Dyed Loop Texture", alt: "Close-up of solution-dyed loop pile texture on EcoCore commercial carpet tile", text: "Dense loop pile surface supports color stability, commercial appearance retention, and daily office use." },
    { src: "/images/products/ecocore-pe-backing/08-pe-backing-close-up.webp", title: "PVC-Free PE Backing", alt: "Close-up of PVC-free PE backing on Vishomecarpet modular carpet tile", text: "PE backing is specified for projects that require a more environmentally responsible modular carpet tile option." },
    { src: "/images/products/ecocore-pe-backing/09-cross-section-layers.webp", title: "Layered Construction", alt: "Cross-section layers of EcoCore PE backing commercial carpet tile", text: "The tile combines textile surface, primary backing, and PE backing support for stable commercial installation." },
    { src: "/images/products/ecocore-pe-backing/10-sound-absorption.webp", title: "Acoustic Comfort", alt: "EcoCore carpet tile acoustic comfort detail for office flooring projects", text: "Soft textile flooring helps reduce footfall noise and improve workplace acoustic comfort." },
    { src: "/images/products/ecocore-pe-backing/11-heavy-traffic-office.webp", title: "Heavy Commercial Use", alt: "Heavy-traffic office application for EcoCore commercial modular carpet tiles", text: "Designed for open offices, corridors, meeting rooms, and high-frequency commercial areas." },
    { src: "/images/products/ecocore-pe-backing/12-easy-replacement.webp", title: "Easy Tile Replacement", alt: "Individual replacement of EcoCore 50x50cm modular carpet tiles", text: "Individual tiles can be replaced without removing the entire flooring area, reducing lifecycle waste and downtime." },
    { src: "/images/products/ecocore-pe-backing/13-raised-floor-system.webp", title: "Raised Floor Friendly", alt: "EcoCore modular carpet tiles installed on commercial raised floor system", text: "The modular format works well with access-floor commercial interiors and phased maintenance schedules." },
    { src: "/images/products/ecocore-pe-backing/14-rolling-chair-test.webp", title: "Office Chair Resistance", alt: "Rolling chair resistance detail for EcoCore office carpet tiles", text: "Suitable for rolling-chair zones when selected with proper traffic specification and maintenance planning." },
    { src: "/images/products/ecocore-pe-backing/15-eco-material-pvc-free-low-voc.webp", title: "Green Building Ready", alt: "PVC-free low-VOC EcoCore carpet tile material for green building projects", text: "A practical flooring option for low-VOC, PVC-free, and sustainability-oriented office projects." },
    { src: "/images/products/ecocore-pe-backing/16-installation-process.webp", title: "Modular Installation", alt: "Modular installation process for EcoCore PE backing carpet tiles", text: "Compatible with quarter-turn, ashlar, brick, and monolithic layouts for different design effects." },
    { src: "/images/products/ecocore-pe-backing/17-warehouse-packaging-export.webp", title: "Export Packaging", alt: "Export packaging for Vishomecarpet EcoCore commercial carpet tile orders", text: "Project-based packaging and delivery support for international commercial flooring orders." },
  ],
  banner: "/images/products/ecocore-pe-backing/18-office-application-wide-banner.webp",
  office: "/images/products/ecocore-pe-backing/04-lifestyle-office.webp",
  green: "/images/products/ecocore-pe-backing/05-green-building-office.webp",
};

export const metadata: Metadata = product
  ? {
      title: "Green Carpet Tiles | PVC-Free PE Backing 50x50 | VISHOME",
      description:
        "PVC-free PE backing 50x50 carpet tiles for green offices, raised floors, acoustic comfort, schools, and sustainability-led commercial projects.",
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
        "green carpet tiles",
        "raised floor carpet tiles",
        "acoustic carpet tiles",
        "school carpet tiles",
        "removable carpet tiles",
      ],
      alternates: { canonical: productPath(product.id) },
      openGraph: {
        title: "Green Carpet Tiles | PVC-Free PE Backing 50x50 | VISHOME",
        description: "PVC-free PE backing 50x50 carpet tiles for green offices, raised floors, acoustic comfort, schools, and sustainable commercial interiors.",
        url: absoluteUrl(productPath(product.id)),
        type: "website",
        images: [{ url: absoluteUrl(productImages.hero), alt: product.name }],
      },
      twitter: {
        card: "summary_large_image",
        title: "Green Carpet Tiles | PVC-Free PE Backing 50x50 | VISHOME",
        description: "PVC-free PE backing 50x50 carpet tiles for green offices, raised floors, acoustic comfort, schools, and sustainable commercial interiors.",
        images: [absoluteUrl(productImages.hero)],
      },
    }
  : { title: "PVC-Free PE Backing Carpet Tiles | Vishomecarpet" };

export default function EcoCorePeBackingProductPage() {
  const p = products.find((prod) => prod.id === productId);
  if (!p) return <div>Product Not Found</div>;

  const productSchemaJsonLd = productJsonLd(p);

  const breadcrumbJsonLd = productBreadcrumbJsonLd(p);

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
              <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-white shadow-xl">
                <ProductImage src={productImages.hero} alt={p.imageAlt || p.name} className="h-full w-full" fit="contain" priority sizes="(max-width: 1024px) 100vw, 55vw" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-4">
                {productImages.gallery.map((item) => (
                  <div key={item.src} className="aspect-square overflow-hidden rounded-xl border border-border bg-white">
                    <ProductImage src={item.src} alt={item.alt} className="h-full w-full" fit="contain" />
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
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Availability</span>
                  <span className="text-right font-bold">In Stock / Made to Order</span>
                </div>
              </div>
              <ProductConversionPanel product={p} />
              <Link href="/projects" className="mt-4 block w-full border border-border px-5 py-4 text-center text-xs font-black uppercase tracking-[0.16em] text-primary transition-all hover:border-primary hover:bg-surface">
                View Project Cases
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Office + Green Building</p>
            <h2 className="mb-6 text-3xl font-black uppercase leading-tight md:text-5xl">
              Green Carpet Tiles for Raised Floors & Acoustic Offices
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
                  <ProductImage src={item.src} alt={item.alt} className="h-full w-full" fit="contain" />
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

      <BuyerReasons />

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
