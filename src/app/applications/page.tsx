import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { applicationPages } from "@/lib/application-data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/applications";

export const metadata: Metadata = {
  title: "Commercial Carpet Applications | Vishome Carpet",
  description: "Explore commercial carpet application pages for offices, hotel guestrooms, hotel corridors, hotel ballrooms and public spaces.",
  alternates: { canonical: absoluteUrl(pagePath) },
};

export default function ApplicationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: absoluteUrl(pagePath),
    name: "Commercial Carpet Applications",
    mainEntity: { "@type": "ItemList", itemListElement: applicationPages.map((page, index) => ({ "@type": "ListItem", position: index + 1, name: page.title, url: absoluteUrl(`/applications/${page.slug}`) })) },
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <PageHero eyebrow="Applications" title="Commercial Carpet Applications" description="Choose carpet specifications by real project use: office, hotel guestrooms, corridors, ballrooms and public spaces." image="/images/about/commercial-project-application.webp" imageAlt="Commercial carpet applications for project interiors" />
      <section className="section-padding">
        <div className="container-fox grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {applicationPages.map((page) => (
            <Link key={page.slug} href={`/applications/${page.slug}`} className="rounded-md border border-border bg-white p-7 shadow-sm transition hover:border-accent hover:shadow-md">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">{page.eyebrow}</p>
              <h2 className="mt-3 text-xl font-black text-primary">{page.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{page.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
