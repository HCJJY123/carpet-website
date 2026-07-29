import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { BuyerReasons, ProductConversionPanel } from "@/components/ProductConversion";
import { products } from "@/lib/data";
import {
  absoluteUrl,
  categoryName,
  categoryPath,
  productBreadcrumbJsonLd,
  productJsonLd,
  productPath,
  safeJsonLd,
} from "@/lib/seo";

type ApplicationProductPageProps = {
  productId: string;
  eyebrow: string;
  overview: string[];
  applications: Array<{ title: string; text: string }>;
  selectionChecks: string[];
  faqs: Array<{ q: string; a: string }>;
};

export default function ApplicationProductPage({
  productId,
  eyebrow,
  overview,
  applications,
  selectionChecks,
  faqs,
}: ApplicationProductPageProps) {
  const product = products.find((item) => item.id === productId);
  if (!product) return <div>Product Not Found</div>;

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
    "@id": `${absoluteUrl(productPath(product.id))}#webpage`,
    url: absoluteUrl(productPath(product.id)),
    name: product.name,
    description: product.description,
    mainEntity: { "@id": `${absoluteUrl(productPath(product.id))}#product` },
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd(product)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productBreadcrumbJsonLd(product)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(webPageJsonLd) }} />

      <nav className="border-b border-border bg-surface py-4">
        <div className="container-fox">
          <Link
            href={categoryPath(product.category)}
            className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted hover:text-primary"
          >
            Back to {categoryName(product.category)}
          </Link>
        </div>
      </nav>

      <section className="py-12 md:py-20">
        <div className="container-fox grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-16">
          <div className="aspect-[4/3] overflow-hidden border border-border bg-surface shadow-xl">
            <ProductImage
              src={product.image}
              alt={product.imageAlt || product.name}
              className="h-full w-full object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
            <h1 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
              {product.name}
            </h1>
            <p className="product-summary mb-8 text-base leading-relaxed text-muted md:text-lg">{product.description}</p>
            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div key={feature} className="border border-border bg-surface px-4 py-3 text-xs font-bold uppercase leading-relaxed text-primary">
                  {feature}
                </div>
              ))}
            </div>
            <ProductConversionPanel product={product} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-accent">Application Overview</p>
            <h2 className="text-3xl font-black uppercase leading-tight md:text-5xl">Match the Construction to the Space</h2>
          </div>
          <div className="space-y-5">
            {overview.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-white/75 md:text-lg">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-accent">Where It Fits</p>
            <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">Recommended Application Areas</h2>
          </div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {applications.map((item) => (
              <div key={item.title} className="bg-white p-6 md:p-8">
                <h3 className="mb-3 text-base font-black uppercase leading-tight text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="mb-8 text-2xl font-black uppercase text-primary md:text-4xl">Technical Specification</h2>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {Object.entries(product.technicalSpecs).map(([key, value]) => (
                <div key={key} className="bg-white p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.08em] text-muted">
                    {key.replace(/([A-Z])/g, " $1")}
                  </p>
                  <p className="text-sm font-bold leading-relaxed text-primary">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-8 text-2xl font-black uppercase text-primary md:text-4xl">Confirm Before Ordering</h2>
            <div className="border border-border bg-white">
              {selectionChecks.map((item, index) => (
                <div key={item} className="flex gap-4 border-b border-border p-5 last:border-b-0">
                  <span className="font-mono text-sm font-black text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm font-semibold leading-relaxed text-primary">{item}</p>
                </div>
              ))}
            </div>
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}#quote-form`}
              className="mt-6 flex min-h-12 items-center justify-center bg-[#d9480f] px-6 py-4 text-center text-xs font-black uppercase tracking-[0.08em] text-white hover:bg-[#b83a08]"
            >
              Request a Specification Review
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-black uppercase text-primary md:text-4xl">Buyer FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="border border-border bg-white p-6">
                <summary className="cursor-pointer font-black text-primary">{item.q}</summary>
                <p className="mt-4 leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BuyerReasons product={product} />
    </div>
  );
}
