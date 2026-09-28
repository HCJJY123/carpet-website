import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/resources/installation-guides";
const quoteHref = "/contact?resource=installation-guide#quote-form";

const handoffItems = [
  {
    owner: "Buyer or specifier",
    title: "Identify the product and areas",
    detail: "Share the selected product link or sample reference, construction and backing if known, estimated area by zone, floor plans and the intended traffic. Keep alternatives separate until their installation systems have been checked.",
  },
  {
    owner: "Site team and flooring installer",
    title: "Document the substrate and site",
    detail: "Record the existing floor, new-build or renovation status, access restrictions and site climate. Arrange substrate and concrete moisture or alkalinity testing where applicable; ask the installer to compare results with the selected product and adhesive instructions.",
  },
  {
    owner: "Designer and flooring installer",
    title: "Agree the layout before ordering",
    detail: "Mark tile direction or broadloom pile direction, pattern placement, seams, transitions and floor-by-floor sequencing on the drawings. Confirm quantities and spare material only after the layout and product format are agreed.",
  },
  {
    owner: "Supplier and project team",
    title: "Match documents to the construction",
    detail: "Request the installation and care documents for the exact product and backing being quoted. Confirm the proposed attachment system, required project standards and any local installer approval before work begins.",
  },
];

const buyerQuestions = [
  {
    question: "Is this page a product installation instruction?",
    answer: "No. It is a planning brief for procurement and installer coordination. The approved instructions for the exact carpet, backing, adhesive and site take precedence over this overview.",
  },
  {
    question: "Can we choose loose-lay tiles or an adhesive after ordering?",
    answer: "Do not assume that attachment methods are interchangeable. Send the tile and backing details, substrate report, traffic conditions and proposed method for product-specific confirmation before purchase.",
  },
  {
    question: "What if a concrete floor looks dry?",
    answer: "Appearance alone does not establish acceptable moisture or alkalinity conditions. Ask the responsible site team for the relevant test report and have the installer check it against the selected carpet and adhesive requirements.",
  },
  {
    question: "When should seams and pattern direction be agreed?",
    answer: "Before the order quantity and installation sequence are finalized. Share the floor plan, intended direction, transitions and any pattern repeat with the flooring installer and supplier.",
  },
];

export const metadata: Metadata = {
  title: "Commercial Carpet Installation Planning Guide | VCARPETS",
  description: "Prepare a commercial carpet installation brief for tiles or broadloom: product, subfloor reports, layout, site schedule and documents to request before ordering.",
  alternates: { canonical: absoluteUrl(pagePath) },
};

export default function InstallationGuidesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: absoluteUrl(pagePath),
    name: "Commercial Carpet Installation Planning Guide",
    description: metadata.description,
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <PageHero
        eyebrow="Installation Planning"
        title="Commercial Carpet Installation Planning Guide"
        description="Before requesting a project quotation, align the carpet construction, site condition, floor layout and installer requirements. Use this brief to ask for the right product-specific documents."
        image="/images/about/commercial-project-application.webp"
        imageAlt="Illustrative commercial interior for project installation planning"
      />

      <section className="section-padding">
        <div className="container-fox grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">The buyer&apos;s short answer</p>
            <h2 className="mt-3 text-3xl font-black text-primary">What belongs in an installation brief?</h2>
            <p className="mt-5 text-sm leading-8 text-muted">Identify the exact carpet and backing, the areas and quantities, the substrate and relevant test reports, the proposed attachment method, the drawing with direction and transitions, and the site handover dates. A flooring installer should review those inputs against the selected product instructions before installation is scheduled.</p>
            <p className="mt-4 text-sm leading-8 text-muted">This is a procurement checklist, not a universal installation method. Moisture limits, adhesives, acclimation, seam treatment and local code requirements cannot be confirmed without the actual product system and site.</p>
          </div>
          <aside className="rounded-md border border-border bg-white p-7 shadow-sm">
            <h2 className="text-xl font-black text-primary">Send a usable request</h2>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
              <li>Product link or approved sample, fiber and backing if known</li>
              <li>Area by zone and intended use; note if a floor plan is available</li>
              <li>Substrate type, relevant site test report and proposed method</li>
              <li>Destination, installation window and required documents</li>
            </ul>
            <p className="mt-4 text-xs leading-6 text-muted">The inquiry form has no drawing upload. Describe the layout in the optional project details and arrange file exchange after the team replies.</p>
            <Link href={quoteHref} className="btn-fox-orange mt-7 inline-flex min-h-11 items-center justify-center text-center">Request Matched Guidance &amp; Quote</Link>
          </aside>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Choose the right planning path</p>
          <h2 className="mt-3 text-3xl font-black text-primary">Tile and broadloom briefs are not interchangeable</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-md border border-border bg-white p-7">
              <h3 className="text-xl font-black text-primary">Commercial carpet tiles</h3>
              <p className="mt-4 text-sm leading-7 text-muted">Confirm tile format and backing, the substrate, tile direction, raised-floor access where relevant, replacement-stock strategy and the attachment system approved for that product. Do not treat all tiles as loose-lay or self-adhesive.</p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold text-accent">
                <Link href="/products/carpet-tiles" className="underline">Compare carpet tiles</Link>
                <Link href="/blog/carpet-tiles-over-concrete-installation-guide" className="underline">Review concrete-floor questions</Link>
              </div>
            </article>
            <article className="rounded-md border border-border bg-white p-7">
              <h3 className="text-xl font-black text-primary">Hotel and project broadloom</h3>
              <p className="mt-4 text-sm leading-7 text-muted">Share room and corridor plans, pattern direction, proposed seams and transitions, delivery access and the installer&apos;s sequence. The agreed roll plan and pattern layout affect the material calculation and should be resolved before ordering.</p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold text-accent">
                <Link href="/products/wall-to-wall" className="underline">Compare broadloom</Link>
                <Link href="/blog/climate-control-carpet-installation-stability-guide" className="underline">Review site-climate planning</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Project handoff</p>
          <h2 className="mt-3 text-3xl font-black text-primary">Who needs to confirm what?</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {handoffItems.map((item) => (
              <article key={item.title} className="rounded-md border border-border bg-white p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">{item.owner}</p>
                <h3 className="mt-3 text-lg font-black text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 max-w-4xl text-sm leading-7 text-muted">The Carpet and Rug Institute&apos;s <a href="https://carpet-rug.org/resources/installation-standards/" className="font-bold text-accent underline" target="_blank" rel="noopener noreferrer">CRI 104 commercial installation standard</a> is a U.S. industry reference for planning, testing and site conditions. It is not a VCARPETS product certificate, a substitute for the selected product instructions, or proof that a local project meets its requirements.</p>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-surface">
        <div className="container-fox grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-black text-primary">Questions before work starts</h2>
            <div className="mt-6 space-y-6">
              {buyerQuestions.map((item) => (
                <div key={item.question}>
                  <h3 className="font-black text-primary">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="self-start rounded-md border border-border bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black text-primary">Ready to check a project?</h2>
            <p className="mt-4 text-sm leading-7 text-muted">In the form, describe the product or sample reference, area, substrate information, destination and target installation window; mention if a floor plan is available to share later. Ask which construction-specific installation and care documents can be supplied for the quoted product. The project installer remains responsible for site testing and method approval.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href={quoteHref} className="btn-fox-orange text-center">Request Matched Guidance</Link>
              <Link href="/resources/technical-library" className="btn-fox-outline text-center">Technical Library</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
