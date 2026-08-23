import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brandInfo } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/quality-control";
const controls = [
  "Confirm construction, backing, color and sample route before production.",
  "Review batch consistency, pattern direction and packing plan for project orders.",
  "Match technical documents to the quoted construction instead of using generic claims.",
  "Keep quotation, sample approval and delivery terms together for project records.",
];

export const metadata: Metadata = {
  title: "Commercial Carpet Quality Control | Vishome Carpet",
  description: "Quality-control workflow for commercial carpet projects: sample approval, construction confirmation, batch consistency, packing and document review.",
  alternates: { canonical: absoluteUrl(pagePath) },
};

export default function QualityControlPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "WebPage", url: absoluteUrl(pagePath), name: "Commercial Carpet Quality Control", description: metadata.description, publisher: { "@id": `${brandInfo.url}/#organization` } };
  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <PageHero eyebrow="Quality Control" title="Commercial Carpet Quality Control Workflow" description="Project carpet quality depends on sample approval, construction confirmation, batch control, packing coordination and document matching." image="/images/about/quality-control-inspection.webp" imageAlt="Commercial carpet quality control inspection" />
      <section className="section-padding">
        <div className="container-fox grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-black text-primary">Control the specification before controlling the shipment.</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{brandInfo.name} treats product selection, sample approval, production route, packing and document review as connected steps. Final performance and compliance must be checked against the exact construction quoted for the project.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?source=quality-control#quote-form" className="btn-fox-orange text-center">Request QC Documents</Link>
              <Link href="/resources/technical-library" className="btn-fox-outline text-center">Technical Library</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {controls.map((control) => <div key={control} className="rounded-md border border-border bg-white p-5 shadow-sm"><p className="text-sm font-bold leading-7 text-primary">{control}</p></div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
