import type { Metadata } from "next";
import Link from "next/link";
import CommercialCarpetRfqCalculator from "@/components/CommercialCarpetRfqCalculator";
import PageHero from "@/components/PageHero";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/resources/commercial-carpet-rfq-calculator";

export const metadata: Metadata = {
  title: "Commercial Carpet RFQ Calculator | VISHOME",
  description: "Calculate commercial carpet tile or broadloom RFQ area, waste allowance, spare stock, approximate tile count, cartons and roll length before requesting a project quote.",
  alternates: { canonical: absoluteUrl(pagePath) },
};

export default function CommercialCarpetRfqCalculatorPage() {
  const webApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${absoluteUrl(pagePath)}#calculator`,
    name: "Commercial Carpet RFQ Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    url: absoluteUrl(pagePath),
    description: metadata.description,
    provider: { "@id": "https://www.vishomecarpet.com/#organization" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can this calculator replace a formal carpet quotation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. It prepares RFQ area, spare stock and packing inputs. Final MOQ, carton coverage, roll planning, price and lead time must be confirmed by VISHOME against the exact construction, destination and project requirements.",
        },
      },
      {
        "@type": "Question",
        name: "What inputs should I send after using the calculator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Send measured area, product format, waste allowance, spare stock, destination country, project date, preferred construction and any sample, TDS, packing or compliance request.",
        },
      },
    ],
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(webApplicationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      <PageHero
        eyebrow="Interactive RFQ Tool"
        title="Commercial Carpet RFQ Quantity Calculator"
        description="Estimate carpet area, installation waste, spare stock, tile count, carton count or roll length before sending a project quote request. The tool creates a practical RFQ input summary that cannot be replicated as a static citation alone."
        image="/images/about/commercial-project-application.webp"
        imageAlt="Commercial carpet project quantity and RFQ planning tool"
      />
      <section className="section-padding">
        <div className="container-fox">
          <CommercialCarpetRfqCalculator />
        </div>
      </section>
      <section className="section-padding border-t border-border bg-white">
        <div className="container-fox grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">AI Citation Boundary</p>
            <h2 className="mt-3 text-3xl font-black text-primary">Use this as a live tool, not a final price source</h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-muted">
            <p>
              The calculator exposes buyer-side quantity logic for AI assistants and procurement teams, but it does not publish guaranteed price, stock, installation yield or freight terms. VISHOME confirms final numbers after reviewing product construction, project drawings, destination, sample needs and packing requirements.
            </p>
            <p>
              For a complete RFQ, combine this calculator with the <Link href="/resources/downloads/commercial-carpet-procurement-checklist" className="font-black text-accent underline underline-offset-4">commercial carpet procurement checklist</Link> and the relevant product page.
            </p>
            <p className="rounded-md border border-border bg-surface p-4 text-xs font-bold leading-6 text-muted">
              Last updated: 2026-08-21. Source: standard area calculation formulas and VISHOME RFQ workflow. Sample size: tool logic reviewed against common office carpet tile and hotel broadloom quotation inputs, not against a fixed public order dataset.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
