import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { resourceCategories, technicalDocuments } from "@/lib/resource-data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/resources";

export const metadata: Metadata = {
  title: "Commercial Carpet Resources | Vishome Carpet",
  description: "Access Vishome Carpet technical library, specification guides, installation and maintenance resources, downloads, project sheets and BIM/CAD readiness information.",
  alternates: { canonical: absoluteUrl(pagePath) },
  openGraph: {
    title: "Commercial Carpet Resources | Vishome Carpet",
    description: "Buyer resources for commercial carpet specification, installation, maintenance, downloads and project documentation.",
    url: absoluteUrl(pagePath),
    type: "website",
  },
};

export default function ResourcesPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl(pagePath)}#webpage`,
    url: absoluteUrl(pagePath),
    name: "Commercial Carpet Resources",
    description: metadata.description,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: resourceCategories.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: absoluteUrl(item.href),
      })),
    },
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(collectionJsonLd) }} />
      <PageHero
        eyebrow="Resource Center"
        title="Commercial Carpet Resources for Project Buyers"
        description="Find buyer guides, download pages, installation and maintenance resources, BIM/CAD readiness notes and project documentation request paths."
        image="/images/about/commercial-project-application.webp"
        imageAlt="Commercial carpet project resources and specification support"
      />
      <section className="section-padding">
        <div className="container-fox grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resourceCategories.map((category) => (
            <Link key={category.href} href={category.href} className="rounded-md border border-border bg-white p-7 shadow-sm transition hover:border-accent hover:shadow-md">
              <h2 className="text-xl font-black text-primary">{category.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="section-padding border-t border-border bg-surface">
        <div className="container-fox rounded-md border border-border bg-white p-8 md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">Published Downloads</p>
          <h2 className="mt-4 text-3xl font-black text-primary">Current document inventory</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {technicalDocuments.map((document) => (
              <Link key={document.slug} href={`/resources/downloads/${document.slug}`} className="rounded-md border border-border p-5 transition hover:border-accent">
                <h3 className="font-black text-primary">{document.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{document.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
