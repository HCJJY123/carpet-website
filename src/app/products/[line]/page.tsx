import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { getProductLinePage, productLinePages, productsForLine } from "@/lib/product-line-data";
import { absoluteUrl, productPath, safeJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ line: string }> };

export function generateStaticParams() {
  return productLinePages.map((page) => ({ line: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { line } = await params;
  const page = getProductLinePage(line);
  if (!page) return { title: "Product Line Not Found" };
  const canonical = `/products/${page.slug}`;
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: { canonical: absoluteUrl(canonical) },
    openGraph: { title: page.seoTitle, description: page.seoDescription, url: absoluteUrl(canonical), type: "website", images: [{ url: absoluteUrl(page.image), alt: page.imageAlt }] },
  };
}

export default async function ProductLinePage({ params }: Props) {
  const { line } = await params;
  const page = getProductLinePage(line);
  if (!page) notFound();
  const relatedProducts = productsForLine(page);
  const pagePath = `/products/${page.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: absoluteUrl(pagePath),
    name: page.title,
    description: page.seoDescription,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: relatedProducts.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name, url: absoluteUrl(productPath(product.id)) })),
    },
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.summary} image={page.image} imageAlt={page.imageAlt} />
      <section className="section-padding">
        <div className="container-fox grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-md border border-border bg-white p-7 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Buyer Checks</p>
            <h2 className="mt-3 text-3xl font-black text-primary">Confirm these points before quotation</h2>
            <ul className="mt-6 space-y-3">
              {page.buyerChecks.map((check) => <li key={check} className="text-sm font-bold leading-7 text-muted">• {check}</li>)}
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href={`/contact?product=${encodeURIComponent(page.title)}#quote-form`} className="btn-fox-orange text-center">Request Project Quote</Link>
              <Link href={page.parentCategoryHref} className="btn-fox-outline text-center">View Parent Category</Link>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedProducts.map((product) => (
              <Link key={product.id} href={productPath(product.id)} className="rounded-md border border-border bg-white p-5 shadow-sm transition hover:border-accent">
                <h3 className="text-sm font-black text-primary">{product.name}</h3>
                <p className="mt-2 text-xs leading-6 text-muted">{product.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
