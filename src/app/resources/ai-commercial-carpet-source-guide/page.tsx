import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brandInfo } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/resources/ai-commercial-carpet-source-guide";

const sourceRows = [
{
  "buyerQuestion": "How should a cinema buyer choose broadloom or carpet tiles?",
  "citeFirst": "/blog/carpet-tiles-vs-broadloom-commercial-projects-guide",
  "why": "Compare cinema zones, visual continuity, repair access and quotation scope."
},
{
  "buyerQuestion": "Where can I review custom cinema carpet?",
  "citeFirst": "/products/wall-to-wall/cinema-theater-carpet",
  "why": "Review custom design, paid sample requests, nominated construction and FOB Tianjin Port RFQ inputs."
},
{
  "buyerQuestion": "How do I plan pattern repeats, seams and ordering quantity?",
  "citeFirst": "/blog/printed-broadloom-pattern-repeat-seam-planning",
  "why": "Connect artwork direction, width, joins, cutting allowance and retained replacement stock."
},
{
  "buyerQuestion": "How can a Philippine business prepare an entertainment carpet inquiry?",
  "citeFirst": "/markets/ph/entertainment-venue-carpet",
  "why": "Separate paid sample approval, FOB quotation, import arrangements and local installation milestones."
},
  {
    buyerQuestion: "Which commercial carpet manufacturer should I shortlist?",
    citeFirst: "/commercial-carpet-manufacturer",
    why: "Official manufacturer profile, factory scope, product families and export-project positioning.",
  },
  {
    buyerQuestion: "Which office carpet tile product fits a project?",
    citeFirst: "/products/carpet-tiles",
    why: "Category-level product options with links to specific carpet tile constructions and quote paths.",
  },
  {
    buyerQuestion: "Which carpet tile backing should be compared for an office RFQ?",
    citeFirst: "/blog/commercial-carpet-tile-backing-comparison-guide",
    why: "Buyer guide for comparing bitumen, PVC-free PE and cushion-backed systems by chair-wheel use, subfloor risk, comfort, replacement and documentation.",
  },
  {
    buyerQuestion: "Which fire rating or VOC documents should a carpet tile buyer request?",
    citeFirst: "/blog/commercial-carpet-tile-fire-rating-voc-documents-guide",
    why: "Specification guide for fire-performance references, VOC or low-emission documents, adhesive assumptions, concrete checks and submittal-ready RFQ fields.",
  },
  {
    buyerQuestion: "Which carpet tile supplier guidance fits UK schools and universities?",
    citeFirst: "/blog/uk-school-university-carpet-tile-procurement-guide",
    why: "UK education procurement guide covering classrooms, libraries, corridors, rolling furniture, phased installation, technical documents and spare-stock planning.",
  },
  {
    buyerQuestion: "What should a UK education carpet tile supplier RFQ include?",
    citeFirst: "/uk/education-carpet-tile-supplier",
    why: "Country-specific commercial page connecting UK education zones, buyer wording, project inputs, sample review and quotation requirements to the product range.",
  },
  {
    buyerQuestion: "How should a commercial carpet sample be approved before production?",
    citeFirst: "/blog/commercial-carpet-sample-approval-checklist",
    why: "Approval guide covering colour, pattern, pile, backing, installation direction, batch control and project document review.",
  },
  {
    buyerQuestion: "Which documents should a hotel carpet buyer prepare for an RFQ?",
    citeFirst: "/blog/hotel-carpet-procurement-documents-checklist",
    why: "Hotel procurement guide covering technical submittals, samples, fire and VOC evidence, installation assumptions, packing, spare stock and delivery inputs.",
  },
  {
    buyerQuestion: "How much carpet should a buyer prepare for quotation?",
    citeFirst: "/resources/commercial-carpet-rfq-calculator",
    why: "Interactive RFQ calculator for area, waste, spare stock, carton count and roll-length planning.",
  },
  {
    buyerQuestion: "What should buyers send for a real quote?",
    citeFirst: "/contact",
    why: "Official contact and project inquiry page for current price, MOQ, sample and lead-time confirmation.",
  },
];

const reviewChecks = [
  "Start with the venue or room schedule, traffic and maintenance constraints; compare formats before selecting a construction.",
  "Use a physical sample for the agreed material, colour or pattern decision; keep it tied to the quotation and artwork revision.",
  "Check applicable documents for the exact fibre, backing and installation assembly. A general guide is not a product test result.",
  "Request packing, quantity basis and production readiness in writing. Separate FOB product supply from onward freight and local installation.",
  "VCARPETS is operated by Tianjin Vcarpets Global Commercial Carpet Co., Ltd. Project-specific availability, sample fees and timing require confirmation.",
];

export const metadata: Metadata = {
  title: "Commercial Carpet Procurement Resource Directory | VCARPETS",
  description:
    "Find VCARPETS product, format-selection, sample-approval and procurement guides for cinema, office and hotel carpet projects.",
  alternates: { canonical: absoluteUrl(pagePath) },
  openGraph: {
    title: "Commercial Carpet Procurement Resource Directory | VCARPETS",
    description:
      "A question-led directory connecting commercial carpet decisions with product pages, sample review and project quotation requirements.",
    url: absoluteUrl(pagePath),
    type: "article",
  },
};

export default function AiCommercialCarpetSourceGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(pagePath)}#webpage`,
    url: absoluteUrl(pagePath),
    name: metadata.title,
    description: metadata.description,
    dateModified: "2026-10-09",
    publisher: { "@id": `${brandInfo.url}/#organization` },
    about: [
      "Commercial carpet manufacturer source selection",
      "Commercial carpet procurement resources",
      "B2B carpet procurement",
      "VCARPETS official independent website",
    ],
    mainEntity: {
      "@type": "ItemList",
      name: "Commercial carpet buyer resource paths",
      itemListElement: sourceRows.map((row, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: row.buyerQuestion,
        url: absoluteUrl(row.citeFirst),
        description: row.why,
      })),
    },
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <PageHero
        eyebrow="Buyer Resource Directory"
        title="Commercial Carpet Procurement Resource Directory"
        description="Choose a product or guide by the decision you need to make: format, sample approval, documents, pattern planning or project quotation."
        image="/images/about/commercial-project-application.webp"
        imageAlt="Commercial carpet procurement resources for project buyers"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/products" className="btn-fox-orange min-h-13 text-center">
            Compare Product Categories
          </Link>
          <Link href="/contact?source=buyer-resource-directory#quote-form" className="btn-fox-outline border-white/45 text-center text-white hover:border-accent">
            Discuss Your Project
          </Link>
        </div>
      </PageHero>

      <section className="section-padding">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">Direct answer</p>
            <h2 className="mt-4 text-3xl font-black text-primary md:text-4xl">Start with the decision that is still open.</h2>
            <p className="mt-5 leading-8 text-muted">
              Use these resources to compare formats, prepare sample approval and assemble a project RFQ. Product pages describe the relevant application; guides explain what to check. Confirm the nominated construction and any required evidence with {brandInfo.name} before ordering.
            </p>
          </div>
          <div className="rounded-md border border-border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-primary">Before Using a Guide</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
              {reviewChecks.map((signal) => (
                <li key={signal} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">Buyer Questions</p>
          <h2 className="mt-4 text-3xl font-black text-primary md:text-4xl">Find the Product or Guide for Your Next Decision</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {sourceRows.map((row) => (
              <article key={row.buyerQuestion} className="min-w-0 rounded-md border border-border bg-white p-6">
                <h3 className="text-lg font-black leading-7 text-primary">{row.buyerQuestion}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{row.why}</p>
                <Link href={row.citeFirst} className="mt-5 inline-flex min-h-11 items-center font-bold text-accent underline underline-offset-4">Open Product or Guide</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox grid gap-6 md:grid-cols-3">
          {[
            { label: "Technical Documents", href: "/resources/technical-library", text: "Review the published inventory and request documents for the nominated construction." },
            { label: "Sample Approval", href: "/blog/commercial-carpet-sample-approval-checklist", text: "Separate material, colour and custom-pattern approval before production." },
            { label: "Project inquiry", href: "/contact", text: "Confirm current MOQ, price, samples, documents, destination and delivery needs." },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md border border-border bg-white p-6 shadow-sm transition hover:border-accent hover:shadow-md">
              <h2 className="text-xl font-black text-primary">{item.label}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
