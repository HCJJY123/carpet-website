import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { caseStudies } from "@/lib/data";
import { projectPath } from "@/lib/case-seo";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/resources/project-sheets";

export const metadata: Metadata = {
  title: "Commercial Carpet Project Sheets | Vishome Carpet",
  description: "Request project sheet references for commercial carpet case studies. Public naming, project area and partner details require approval before external use.",
  alternates: { canonical: absoluteUrl(pagePath) },
};

export default function ProjectSheetsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: absoluteUrl(pagePath),
    name: "Commercial Carpet Project Sheets",
    description: metadata.description,
    mainEntity: { "@type": "ItemList", itemListElement: caseStudies.slice(0, 8).map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: absoluteUrl(projectPath(item.id)) })) },
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <PageHero eyebrow="Project Sheets" title="Commercial Carpet Project Sheet Requests" description="Use case pages as public references and request approved project sheets where client naming, project area and images are cleared for external use." image="/images/about/global-export-container-loading.webp" imageAlt="Commercial carpet project packing and export coordination" />
      <section className="section-padding">
        <div className="container-fox grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-black text-primary">Project sheets require approval.</h2>
            <p className="mt-4 text-sm leading-7 text-muted">A case page can be used as a general reference, but named clients, exact areas, hotel brands, designers, installers and project photography should only be used after approval.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/projects" className="btn-fox-outline text-center">View Case Studies</Link>
              <Link href="/contact?resource=project-sheet#quote-form" className="btn-fox-orange text-center">Request Project Sheet</Link>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {caseStudies.slice(0, 6).map((item) => (
              <Link key={item.id} href={projectPath(item.id)} className="rounded-md border border-border bg-white p-5 shadow-sm transition hover:border-accent">
                <h3 className="text-sm font-black text-primary">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-muted">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
