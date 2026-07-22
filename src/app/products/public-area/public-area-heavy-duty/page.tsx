import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/data";
import { absoluteUrl, productBreadcrumbJsonLd, productJsonLd, productPath, safeJsonLd } from "@/lib/seo";
import ProductImage from "@/components/ProductImage";
import { BuyerReasons, ProductConversionPanel } from "@/components/ProductConversion";

const images = [
  {
    src: "/images/products/public-area/public-area-heavy-duty/01-main-public-area-heavy-duty-carpet.webp",
    alt: "High-traffic public area corridor carpet main view",
  },
  {
    src: "/images/products/public-area/public-area-heavy-duty/02-public-area-heavy-duty-installation.webp",
    alt: "Heavy-duty public area carpet installed in a commercial corridor",
  },
  {
    src: "/images/products/public-area/public-area-heavy-duty/03-public-area-heavy-duty-detail.webp",
    alt: "Public area heavy-duty carpet detail view",
  },
];

function getProduct() {
  return products.find((item) => item.id === "public-area-heavy-duty" && item.category === "public-area");
}

export function generateMetadata(): Metadata {
  const product = getProduct();
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | VISHOME Commercial Carpet`,
    description: product.description,
    alternates: { canonical: absoluteUrl(productPath(product.id)) },
    openGraph: {
      title: `${product.name} | VISHOME Commercial Carpet`,
      description: product.description,
      url: absoluteUrl(productPath(product.id)),
      type: "website",
      images: [{ url: absoluteUrl(images[0].src), alt: images[0].alt }],
    },
  };
}

export default function PublicAreaHeavyDutyPage() {
  const product = getProduct();
  if (!product) notFound();

  const productForSeo = { ...product, image: images[0].src, imageAlt: images[0].alt, gallery: images.slice(1) };

  return (
    <div className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd(productForSeo)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productBreadcrumbJsonLd(productForSeo)) }} />

      <section className="border-b border-border bg-slate-50 py-24">
        <div className="container-fox">
          <div className="grid items-start gap-20 lg:grid-cols-2">
            <div className="sticky top-24 space-y-8">
              <div className="aspect-square overflow-hidden rounded-sm border-8 border-white bg-white shadow-2xl">
                <ProductImage src={images[0].src} alt={images[0].alt} className="h-full w-full" fit="contain" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {images.slice(1).map((image) => (
                  <div key={image.src} className="aspect-square overflow-hidden rounded-sm border border-border bg-white shadow-sm">
                    <ProductImage src={image.src} alt={image.alt} className="h-full w-full" fit="cover" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-12 py-4">
              <div>
                <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.4em] text-accent">Premium Commercial Solution</span>
                <h1 className="mb-8 text-4xl font-black uppercase leading-[0.9] tracking-tight text-primary md:text-6xl">{product.name}</h1>
                <p className="text-xl font-medium italic leading-relaxed text-muted">{product.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-10 border-y border-border py-12">
                <div className="space-y-1"><span className="block text-[10px] font-black uppercase tracking-widest text-primary/30">Material</span><span className="font-bold text-primary">{product.spec.material}</span></div>
                <div className="space-y-1"><span className="block text-[10px] font-black uppercase tracking-widest text-primary/30">Format</span><span className="font-bold text-primary">{product.spec.size}</span></div>
                <div className="space-y-1"><span className="block text-[10px] font-black uppercase tracking-widest text-primary/30">MOQ</span><span className="font-bold text-accent">{product.moq}</span></div>
                <div className="space-y-1"><span className="block text-[10px] font-black uppercase tracking-widest text-primary/30">Lead Time</span><span className="font-bold text-primary">{product.leadTime}</span></div>
              </div>
              <ProductConversionPanel product={{ name: product.name }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-fox">
          <div className="grid gap-20 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="mb-8 text-3xl font-black uppercase tracking-tight text-primary">Technical <br /><span className="text-accent">Specifications</span></h2>
              <p className="text-base italic leading-relaxed text-muted">Engineered to meet the highest global commercial standards including ASTM E648 Fire Rating and Class 33 Heavy Traffic ratings.</p>
            </div>
            <div className="grid gap-x-12 gap-y-8 border border-border bg-surface p-12 shadow-sm md:grid-cols-2 lg:col-span-2">
              {Object.entries(product.technicalSpecs).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between border-b border-border pb-4 last:border-0">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary/40">{key.replace(/([A-Z])/g, " $1")}</span>
                  <span className="text-sm font-bold text-primary">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-12">
        <div className="container-fox flex justify-center">
          <Link href="/products/public-area" className="btn-fox-outline">Back to Public Area Carpets</Link>
        </div>
      </section>
      <BuyerReasons />
    </div>
  );
}
