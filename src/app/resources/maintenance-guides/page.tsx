import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/resources/maintenance-guides";
const topics = ["Entrance soil control", "Vacuum schedule", "Spot cleaning process", "Periodic deep cleaning", "Replacement stock planning", "Construction-specific care notes"];

export const metadata: Metadata = {
  title: "Commercial Carpet Maintenance Guides | Vishome Carpet",
  description: "Maintenance planning resources for commercial carpet projects, including cleaning schedules, replacement stock and construction-specific care document requests.",
  alternates: { canonical: absoluteUrl(pagePath) },
};

export default function MaintenanceGuidesPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "WebPage", url: absoluteUrl(pagePath), name: "Commercial Carpet Maintenance Guides", description: metadata.description };
  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <PageHero eyebrow="Maintenance Resources" title="Commercial Carpet Maintenance Guide Request" description="Maintenance instructions should match the selected carpet construction, traffic level and cleaning method. Use this page to prepare the required care questions." image="/images/about/quality-control-inspection.webp" imageAlt="Commercial carpet maintenance and quality control document review" />
      <section className="section-padding">
        <div className="container-fox rounded-md border border-border bg-white p-8 md:p-10">
          <h2 className="text-3xl font-black text-primary">Maintenance topics to confirm</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {topics.map((topic) => <div key={topic} className="rounded-sm border border-border bg-surface p-5 text-sm font-black text-primary">{topic}</div>)}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact?resource=maintenance-guide#quote-form" className="btn-fox-orange text-center">Request Maintenance Guide</Link>
            <Link href="/products" className="btn-fox-outline text-center">View Products</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
