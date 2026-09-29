import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/resources/maintenance-guides";
const quoteHref = "/contact?resource=maintenance-guide#quote-form";

const handoffItems = [
  {
    owner: "Buyer and supplier",
    title: "Identify the exact carpet",
    detail: "Share the product link or sample reference, fiber, backing and any approved alternatives. Request the care document that applies to the construction being quoted rather than treating a general guide as a product instruction.",
  },
  {
    owner: "Facilities team",
    title: "Map the operating conditions",
    detail: "Separate entrances, corridors, work areas and guest rooms. Record foot traffic, tracked-in soil, spill exposure, furniture movement, access windows and the existing cleaning equipment.",
  },
  {
    owner: "Cleaning contractor",
    title: "Check methods before use",
    detail: "Compare proposed vacuum equipment, spot treatment and periodic cleaning with the approved care instructions. Agree how to test a small, inconspicuous area and how to document an incident before treating a wider area.",
  },
  {
    owner: "Project team",
    title: "Plan replacement and handover",
    detail: "Confirm spare material, batch or dye-lot identification, storage responsibility and a contact route for future repairs. Record who signs off the maintenance plan after installation.",
  },
];

const buyerQuestions = [
  {
    question: "Is this a cleaning instruction for every VCARPETS product?",
    answer: "No. It is a planning brief. Cleaning chemistry, equipment, moisture exposure and method must be checked against the instructions for the exact fiber and backing supplied for the project.",
  },
  {
    question: "Can a carpet tile be replaced without changing the whole floor?",
    answer: "That depends on the installed system, damage and available spare tiles. Confirm the removal method with the installer and retain matching material from the approved order where practical.",
  },
  {
    question: "Should a hotel use the same plan for every area?",
    answer: "Not automatically. Entrance soil, corridor traffic and guest-room access differ. Ask the facilities and cleaning teams to define zones and then confirm compatible methods for the selected broadloom or tile construction.",
  },
];

export const metadata: Metadata = {
  title: "Commercial Carpet Maintenance Planning Guide | VCARPETS",
  description: "Prepare a commercial carpet care handoff for tiles or broadloom: product construction, traffic zones, cleaning-method approval, spare stock and documents to request.",
  alternates: { canonical: absoluteUrl(pagePath) },
};

export default function MaintenanceGuidesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: absoluteUrl(pagePath),
    name: "Commercial Carpet Maintenance Planning Guide",
    description: metadata.description,
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <PageHero
        eyebrow="Maintenance Planning"
        title="Commercial Carpet Maintenance Planning Guide"
        description="Before handover, agree who will care for each floor area, which methods need product-specific approval and what records the facilities team should retain."
        image="/images/about/quality-control-inspection.webp"
        imageAlt="Illustrative commercial carpet inspection for facilities planning"
      />

      <section className="section-padding">
        <div className="container-fox grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">The buyer&apos;s short answer</p>
            <h2 className="mt-3 text-3xl font-black text-primary">What belongs in a carpet care handoff?</h2>
            <p className="mt-5 text-sm leading-8 text-muted">Identify the exact carpet and backing, the traffic and soil conditions by zone, the cleaning team and its equipment, the product-matched care instructions, and the spare-material plan. Agree who can approve a cleaning method and who records incidents before the building is occupied.</p>
            <p className="mt-4 text-sm leading-8 text-muted">This page helps buyers prepare questions; it does not specify a universal cleaning frequency, chemical, extraction method or warranty condition. Obtain the instructions for the construction actually supplied, and have the responsible facilities team review them with its cleaning contractor.</p>
          </div>
          <aside className="rounded-md border border-border bg-white p-7 shadow-sm">
            <h2 className="text-xl font-black text-primary">Send with your document request</h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-muted">
              <li>Product link or sample reference, fiber and backing if known.</li>
              <li>Floor area by zone, use, traffic and typical soil or spill exposure.</li>
              <li>Destination and any project-specific cleaning or handover requirements.</li>
              <li>Proposed equipment and cleaning method, if already selected.</li>
              <li>Spare-stock and replacement questions for the facilities team.</li>
            </ul>
            <Link href={quoteHref} className="btn-fox-orange mt-7 block text-center">Request Matched Care Documents</Link>
          </aside>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Choose the right discussion</p>
          <h2 className="mt-3 text-3xl font-black text-primary">Tiles and broadloom need different handover questions</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-md border border-border bg-white p-7 shadow-sm">
              <h3 className="text-xl font-black text-primary">Modular carpet tiles</h3>
              <p className="mt-4 text-sm leading-7 text-muted">Ask how damaged modules can be identified and replaced under the approved installation system. Keep the product, color and batch record with any reserved tiles; confirm storage and future matching before the order is finalized.</p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold text-accent">
                <Link href="/products/carpet-tiles" className="underline">Compare carpet tiles</Link>
                <Link href="/blog/commercial-space-carpet-tiles-maintenance-cost-guide" className="underline">Review replacement planning</Link>
              </div>
            </article>
            <article className="rounded-md border border-border bg-white p-7 shadow-sm">
              <h3 className="text-xl font-black text-primary">Hotel and contract broadloom</h3>
              <p className="mt-4 text-sm leading-7 text-muted">Map entrances, corridors, guest rooms and transition areas separately. Ask the installer and cleaning contractor how the selected fiber, backing, seams and access schedule affect the proposed care plan before specifying a method.</p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold text-accent">
                <Link href="/products/wall-to-wall" className="underline">Compare broadloom</Link>
                <Link href="/blog/hotel-corridor-carpet-design-noise-stain-maintenance" className="underline">Review corridor decisions</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Project handoff</p>
          <h2 className="mt-3 text-3xl font-black text-primary">Who confirms the maintenance plan?</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {handoffItems.map((item) => (
              <article key={item.title} className="rounded-md border border-border bg-white p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">{item.owner}</p>
                <h3 className="mt-3 text-lg font-black text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 max-w-4xl text-sm leading-7 text-muted">The Carpet and Rug Institute&apos;s <a href="https://carpet-rug.org/carpet-for-business/cleaning-and-maintenance/" className="font-bold text-accent underline" target="_blank" rel="noopener noreferrer">business cleaning and maintenance resource</a> is a general industry reference for soil control, vacuuming and spot response. It does not establish instructions, certification or a cleaning schedule for a particular VCARPETS construction.</p>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-surface">
        <div className="container-fox grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-black text-primary">Questions before handover</h2>
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
            <h2 className="text-2xl font-black text-primary">Request the right care file</h2>
            <p className="mt-4 text-sm leading-7 text-muted">In the form, describe the product or sample, floor area, traffic zones, destination and proposed cleaning method. Ask which construction-specific care documents are available for the quoted product. If plans or equipment lists are available, mention them so the team can arrange an exchange after replying; this form does not upload files.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href={quoteHref} className="btn-fox-orange text-center">Request Matched Care Documents</Link>
              <Link href="/resources/technical-library" className="btn-fox-outline text-center">Technical Library</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
