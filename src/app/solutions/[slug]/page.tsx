import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductImage from "@/components/ProductImage";
import { getWhatsAppBusinessUrl } from "@/lib/whatsapp";
import { getSolutionPage, solutionPages } from "@/lib/solution-data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return solutionPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSolutionPage(slug);

  if (!page) return { title: "Solution Not Found" };

  return {
    title: page.seoTitle,
    description: page.description,
    alternates: { canonical: absoluteUrl(`/solutions/${page.slug}`) },
    openGraph: {
      title: page.seoTitle,
      description: page.description,
      url: absoluteUrl(`/solutions/${page.slug}`),
      type: "website",
      images: [{ url: absoluteUrl(page.image), alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.description,
      images: [absoluteUrl(page.image)],
    },
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getSolutionPage(slug);

  if (!page) notFound();

  const usesOfficeCarpetTileHero = page.slug === "office-carpet-tiles-supplier";
  const pageUrl = absoluteUrl(`/solutions/${page.slug}`);
  const whatsappMessage = `Hello, I am interested in ${page.title}. Please recommend products, MOQ, sample options, price range, lead time, fire-rating documents, packing, and shipping support.`;
  const whatsappUrl = getWhatsAppBusinessUrl(whatsappMessage, {
    placement: `solution_${page.slug}`,
    product: page.title,
    intent: "solution_page_quote",
    pagePath: `/solutions/${page.slug}`,
  });

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Solutions", item: absoluteUrl("/solutions") },
      { "@type": "ListItem", position: 3, name: page.title, item: pageUrl },
    ],
  };

  const productListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Recommended Products for ${page.title}`,
    itemListElement: page.recommendedProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      description: product.fit,
      url: absoluteUrl(product.href),
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />

      <section className="relative overflow-hidden bg-primary text-white">
        <div className={`absolute inset-0 ${usesOfficeCarpetTileHero ? "opacity-100" : "opacity-30"}`}>
          <ProductImage
            src={page.image}
            alt={usesOfficeCarpetTileHero ? "Modern office with blue and gray 50x50 commercial carpet tiles" : page.title}
            className="h-full w-full object-cover"
            priority
            quality={usesOfficeCarpetTileHero ? 75 : 82}
            sizes="100vw"
          />
        </div>
        <div
          className={`absolute inset-0 ${
            usesOfficeCarpetTileHero
              ? "bg-primary/72 md:bg-[linear-gradient(90deg,rgba(15,43,74,0.94)_0%,rgba(15,43,74,0.8)_44%,rgba(15,43,74,0.28)_72%,rgba(15,43,74,0.12)_100%)]"
              : "bg-primary/86"
          }`}
        />
        <div className="container-fox relative py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Application Solution</p>
            <h1 className="mb-6 text-4xl font-black uppercase leading-tight md:text-6xl">{page.title}</h1>
            <p className="max-w-3xl text-base leading-relaxed text-white/78 md:text-lg">{page.description}</p>
            <p className="mt-5 max-w-3xl text-sm font-semibold leading-relaxed text-white/70">{page.buyerIntent}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-whatsapp-placement={`solution_${page.slug}`}
                data-whatsapp-product={page.title}
                data-whatsapp-intent="solution_page_quote"
                className="btn-fox-orange !px-8 !py-4"
              >
                WhatsApp Project Quote
              </a>
              <Link href={`/contact?product=${encodeURIComponent(page.title)}`} className="btn-fox-outline !border-white !px-8 !py-4 !text-white hover:!bg-white hover:!text-primary">
                Send Project Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Buyer Problems</p>
            <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-4xl">What This Page Helps You Decide</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {page.painPoints.map((item) => (
              <article key={item} className="border border-border bg-surface p-6">
                <p className="text-sm font-semibold leading-relaxed text-primary">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface section-padding">
        <div className="container-fox">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Recommended Products</p>
            <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">Product Systems for {page.title}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {page.recommendedProducts.map((product) => (
              <Link key={product.href} href={product.href} className="group border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-4 text-lg font-black uppercase leading-tight text-primary group-hover:text-accent">{product.name}</h3>
                <p className="text-sm font-medium leading-relaxed text-muted">{product.fit}</p>
                <p className="mt-6 text-[10px] font-black uppercase tracking-[0.18em] text-accent">View product details</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div className={`border border-border bg-white p-6 md:p-8 ${usesOfficeCarpetTileHero ? "min-w-0" : ""}`}>
            <h2 className="mb-6 text-2xl font-black uppercase leading-tight text-primary">Specification Snapshot</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm">
                <tbody>
                  {page.specs.map((item) => (
                    <tr key={item.label} className="border-t border-border first:border-t-0">
                      <th className="w-40 p-4 text-left text-[10px] font-black uppercase tracking-[0.16em] text-primary/55">{item.label}</th>
                      <td className="p-4 font-medium leading-relaxed text-primary">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="border border-border bg-primary p-6 text-white md:p-8">
            <h2 className="mb-6 text-2xl font-black uppercase leading-tight">Procurement Checklist</h2>
            <ul className="space-y-4">
              {["Project area and destination country", "Preferred product type and backing", "Sample or strike-off requirement", "Fire-rating or tender document needs", "Target delivery date and shipping terms"].map((item) => (
                <li key={item} className="text-sm font-medium leading-relaxed text-white/76">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface section-padding">
        <div className="container-fox">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Procurement FAQ</p>
            <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-4xl">Fast Answers Before You Send an Inquiry</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {page.faqs.map((item) => (
              <article key={item.q} className="border border-border bg-white p-6">
                <h3 className="mb-3 text-sm font-black uppercase leading-snug text-primary">{item.q}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
