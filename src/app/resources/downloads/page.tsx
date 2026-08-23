import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { technicalDocuments } from "@/lib/resource-data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/resources/downloads";

export const metadata: Metadata = {
  title: "Commercial Carpet Downloads | Vishome Carpet",
  description: "Download Vishome Carpet published PDF buyer guides and checklists with related product links and technical document request options.",
  alternates: { canonical: absoluteUrl(pagePath) },
};

export default function DownloadsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: absoluteUrl(pagePath),
    name: "Commercial Carpet Downloads",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: technicalDocuments.map((document, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: document.title,
        url: absoluteUrl(`/resources/downloads/${document.slug}`),
      })),
    },
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <PageHero
        eyebrow="Downloads"
        title="Commercial Carpet PDF Downloads"
        description="Use these landing pages to review document scope, related products and download the current PDF files."
        image="/images/about/custom-design-support.webp"
        imageAlt="Commercial carpet document and custom design support"
      />
      <section className="section-padding">
        <div className="container-fox grid gap-4 md:grid-cols-2">
          {technicalDocuments.map((document) => (
            <Link key={document.slug} href={`/resources/downloads/${document.slug}`} className="rounded-md border border-border bg-white p-6 shadow-sm transition hover:border-accent hover:shadow-md">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">{document.documentType}</p>
              <h2 className="mt-3 text-xl font-black text-primary">{document.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{document.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
