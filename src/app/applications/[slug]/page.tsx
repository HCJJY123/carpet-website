import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { applicationPages, getApplicationPage, productsForApplication } from "@/lib/application-data";
import { absoluteUrl, productPath, safeJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return applicationPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getApplicationPage(slug);
  if (!page) return { title: "Application Not Found" };
  const canonical = `/applications/${page.slug}`;
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: { canonical: absoluteUrl(canonical) },
    openGraph: { title: page.seoTitle, description: page.seoDescription, url: absoluteUrl(canonical), type: "website", images: [{ url: absoluteUrl(page.image), alt: page.imageAlt }] },
  };
}

export default async function ApplicationDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getApplicationPage(slug);
  if (!page) notFound();
  const relatedProducts = productsForApplication(page);
  const pagePath = `/applications/${page.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: absoluteUrl(pagePath),
    name: page.title,
    description: page.seoDescription,
    about: relatedProducts.map((product) => ({ "@type": "Product", name: product.name, url: absoluteUrl(productPath(product.id)) })),
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.summary} image={page.image} imageAlt={page.imageAlt} />
      <section className="section-padding">
        <div className="container-fox grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-md border border-border bg-white p-7 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Buyer Checks</p>
            <h2 className="mt-3 text-3xl font-black text-primary">What to confirm before quotation</h2>
            <ul className="mt-6 space-y-3">
              {page.buyingChecks.map((check) => <li key={check} className="text-sm font-bold leading-7 text-muted">• {check}</li>)}
            </ul>
          </div>
          <div className="rounded-md border border-border bg-surface p-7">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Risk Control</p>
            <h2 className="mt-3 text-3xl font-black text-primary">Avoid common specification gaps</h2>
            <ul className="mt-6 space-y-3">
              {page.riskNotes.map((note) => <li key={note} className="text-sm font-bold leading-7 text-muted">• {note}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <h2 className="text-3xl font-black text-primary">Related product options</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedProducts.map((product) => (
              <Link key={product.id} href={productPath(product.id)} className="rounded-md border border-border bg-white p-5 shadow-sm transition hover:border-accent">
                <h3 className="text-sm font-black text-primary">{product.name}</h3>
                <p className="mt-2 text-xs leading-6 text-muted">{product.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={`/contact?application=${encodeURIComponent(page.title)}#quote-form`} className="btn-fox-orange text-center">Request Project Quotation</Link>
            <Link href="/resources/technical-library" className="btn-fox-outline text-center">Technical Library</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
