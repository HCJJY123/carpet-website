import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { absoluteUrl, productBreadcrumbJsonLd, productJsonLd, productPath, safeJsonLd } from "@/lib/seo";
import ProductImage from "@/components/ProductImage";
import { BuyerReasons, ProductConversionPanel } from "@/components/ProductConversion";

const productId = "commercial-nylon-tiles";
const product = products.find((prod) => prod.id === productId);

const faqs = product
  ? [
      {
        q: "What is your sample policy for these carpet tiles?",
        a: "Samples are free of charge — you only cover the courier cost, usually around US$15 by UPS, delivered in 5-7 working days. Send us your delivery address and the color you're interested in and we'll arrange it."
      },
      {
        q: `What backing does the ${product.name} use?`,
        a: `This style is supplied with a ${product.technicalSpecs.backing} backing, a dense, dimensionally stable option commonly specified for commercial office and corridor installations. Other backing options may be available for project-specific requirements — let us know your application and we'll confirm.`
      },
      {
        q: "What is the MOQ and production lead time?",
        a: `MOQ for this style is ${product.moq}, with a production lead time of ${product.leadTime} from deposit confirmation.`
      },
      {
        q: "What fire and traffic ratings does it meet?",
        a: `This tile meets ${product.technicalSpecs.fireRating} fire rating and is rated for ${product.technicalSpecs.trafficClass} commercial traffic, suitable for corporate offices and hotel corridors.`
      },
      {
        q: "How long does shipping take?",
        a: "Sea freight transit is about 30 days after the vessel departs. Including customs clearance and local delivery, please allow approximately 40-45 days door to door. For smaller quantities, we can also advise on LCL (shared container) options to reduce freight cost."
      },
      {
        q: "Can you provide fire certification documents?",
        a: "We can provide ASTM E648 test reports on request. If your project requires a specific regional fire certificate (for example, a European standard), please tell us the exact standard required and we will confirm honestly whether we currently hold it or can arrange third-party testing."
      }
    ]
  : [];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a }
  }))
};

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
  const productId = "commercial-nylon-tiles";
  const p = products.find((prod) => prod.id === productId);
  if (!p) return <div>Product Not Found</div>;

  const jsonLd = productJsonLd(p);

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

  const breadcrumbJsonLd = productBreadcrumbJsonLd(p);

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(productWebPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
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
                <ProductImage src={p.image} alt={p.imageAlt || p.name} className="h-full w-full object-cover" priority sizes="(max-width: 1024px) 100vw, 55vw" />
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
                {p.fobPrice && (
                  <div className="flex justify-between gap-6 text-xs uppercase">
                    <span>FOB PRICE</span>
                    <span className="text-right font-bold">{p.fobPrice.display}</span>
                  </div>
                )}
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
      <section className="section-padding">
        <div className="container-fox max-w-4xl">
          <h2 className="mb-10 text-center text-2xl font-bold uppercase tracking-[0.08em] text-primary md:text-3xl md:tracking-widest">
            Buyer FAQ
          </h2>
          <div className="space-y-5">
            {faqs.map((item) => (
              <div key={item.q} className="border border-border bg-white p-6">
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
