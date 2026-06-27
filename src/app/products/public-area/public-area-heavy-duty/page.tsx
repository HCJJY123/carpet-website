import type { Metadata } from "next";
import Link from "next/link";
import { brandInfo, products } from "@/lib/data";
import { absoluteUrl, productPath, safeJsonLd } from "@/lib/seo";
import ProductImage from "@/components/ProductImage";

const productId = "public-area-heavy-duty";
const product = products.find((prod) => prod.id === productId);

export const metadata: Metadata = product
  ? {
      title: `${product.name} | Commercial Carpet Product | VISHOME`,
      description: product.description,
      alternates: { canonical: productPath(product.id) },
      openGraph: {
        title: `${product.name} | VISHOME`,
        description: product.description,
        url: absoluteUrl(productPath(product.id)),
        type: "website",
        images: [{ url: absoluteUrl(product.image), alt: product.name }],
      },
    }
  : { title: "Commercial Carpet Product | VISHOME" };

export default function ProductDetailPage() {
  const productId = "public-area-heavy-duty";
  const p = products.find((prod) => prod.id === productId);
  if (!p) return <div>Product Not Found</div>;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: absoluteUrl(p.image),
    brand: {
      "@type": "Brand",
      name: brandInfo.shortName,
    },
    manufacturer: {
      "@type": "Organization",
      name: brandInfo.name,
      url: brandInfo.url,
    },
    category: p.category,
    material: p.spec.material,
    size: p.spec.size,
    additionalProperty: Object.entries(p.technicalSpecs).map(([name, value]) => ({
      "@type": "PropertyValue",
      name,
      value,
    })),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".product-summary"],
    },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(productPath(p.id)),
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: {
        "@type": "Organization",
        name: brandInfo.name,
      },
    },
  };

  const productWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: p.name,
    description: p.description,
    url: absoluteUrl(productPath(p.id)),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".product-summary"],
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
      { "@type": "ListItem", position: 3, name: p.name, item: absoluteUrl(productPath(p.id)) },
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(productWebPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
      <nav className="border-b border-border bg-surface py-3 md:py-4">
        <div className="container-fox">
          <Link href="/products" className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted hover:text-primary">
            ← Back to Products
          </Link>
        </div>
      </nav>
      <section className="py-12 md:py-20">
        <div className="container-fox">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
            <div className="lg:w-3/5">
              <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border shadow-xl md:aspect-square">
                <ProductImage src={p.image} alt={p.name} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-center lg:w-2/5">
              <h1 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:mb-8 md:text-5xl">
                {p.name}
              </h1>
              <p className="product-summary mb-6 text-muted leading-relaxed">{p.description}</p>
              <div className="mb-8 space-y-4 border border-border bg-surface p-5 md:mb-10 md:p-8">
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>MOQ</span>
                  <span className="text-right font-bold">{p.moq}</span>
                </div>
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>LEAD TIME</span>
                  <span className="text-right font-bold">{p.leadTime}</span>
                </div>
              </div>
              <Link href="/contact" className="btn-fox-orange w-full py-5 text-center text-sm uppercase tracking-[0.16em] shadow-lg md:tracking-widest">
                Request Technical Quote
              </Link>
            </div>
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
                <p className="text-sm font-black uppercase leading-relaxed text-primary group-hover:text-white">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
