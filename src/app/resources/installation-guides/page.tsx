import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brandInfo } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/resources/installation-guides";

const checks = [
  "Confirm subfloor condition, moisture, flatness and site access before installation planning.",
  "Use installation instructions matched to the exact carpet construction and backing.",
  "Review roll direction, tile direction, pattern repeat and attic-stock needs before cutting or laying.",
  "Confirm adhesive, seaming method and site temperature with the installer before work starts.",
];

export const metadata: Metadata = {
  title: "Commercial Carpet Installation Guides | Vishome Carpet",
  description: "Installation planning resources for commercial carpet tiles, hotel broadloom and public-area carpet projects. Request construction-specific installation documents.",
  alternates: { canonical: absoluteUrl(pagePath) },
};

export default function InstallationGuidesPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "WebPage", url: absoluteUrl(pagePath), name: "Commercial Carpet Installation Guides", description: metadata.description };
  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <PageHero eyebrow="Installation Resources" title="Commercial Carpet Installation Guide Request" description="Installation requirements vary by product construction, backing and site condition. Use this page to prepare installation questions before requesting matched documents." image="/images/about/commercial-project-application.webp" imageAlt="Commercial carpet installation planning for project spaces" />
      <section className="section-padding">
        <div className="container-fox grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-black text-primary">Before installation documents are issued</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{brandInfo.name} should confirm the selected construction, backing, installation method and project site requirements before giving final installation guidance.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?resource=installation-guide#quote-form" className="btn-fox-orange text-center">Request Installation Guide</Link>
              <Link href="/resources/technical-library" className="btn-fox-outline text-center">Technical Library</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {checks.map((check) => <div key={check} className="rounded-md border border-border bg-white p-5 shadow-sm"><p className="text-sm font-bold leading-7 text-primary">{check}</p></div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
