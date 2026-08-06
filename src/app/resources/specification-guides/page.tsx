import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { technicalDocuments } from "@/lib/resource-data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/resources/specification-guides";
const guides = technicalDocuments.filter((document) => document.documentType === "Guide");

export const metadata: Metadata = {
  title: "Commercial Carpet Specification Guides | Vishome Carpet",
  description: "Specification guides for carpet tiles, hotel broadloom and public-area carpet procurement, with related product links and document request paths.",
  alternates: { canonical: absoluteUrl(pagePath) },
};

export default function SpecificationGuidesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: absoluteUrl(pagePath),
    name: "Commercial Carpet Specification Guides",
    mainEntity: { "@type": "ItemList", itemListElement: guides.map((guide, index) => ({ "@type": "ListItem", position: index + 1, name: guide.title, url: absoluteUrl(`/resources/downloads/${guide.slug}`) })) },
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <PageHero eyebrow="Specification Guides" title="Commercial Carpet Specification Guides" description="Use these guides to prepare a clearer RFQ before requesting construction-specific technical data." image="/images/about/custom-design-support.webp" imageAlt="Commercial carpet specification and custom design support" />
      <section className="section-padding">
        <div className="container-fox grid gap-5 md:grid-cols-3">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/resources/downloads/${guide.slug}`} className="rounded-md border border-border bg-white p-6 shadow-sm transition hover:border-accent hover:shadow-md">
              <h2 className="text-xl font-black text-primary">{guide.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
