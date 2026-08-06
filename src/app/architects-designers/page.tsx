import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brandInfo, productCategories } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/architects-designers";

const supportItems = [
  "Specification review for commercial carpet tiles, hospitality broadloom and public-area carpets",
  "Custom pattern development with strike-off sample workflow before project production",
  "Color matching support based on approved references and realistic production tolerance",
  "Technical data sheets, packing information and quotation records for project files",
  "CAD/PDF pattern references where verified assets are available",
  "Sample request support for designers, contractors and project procurement teams",
];

const workflow = [
  { title: "Share project inputs", text: "Send the application area, floor plan, traffic level, target construction, color direction, quantity, destination and required documents." },
  { title: "Review specification route", text: "The team checks whether stock carpet tile, custom broadloom, printed carpet, Axminster or public-area carpet is a better fit." },
  { title: "Approve sample or strike-off", text: "For custom work, production should follow approved sample, color reference, pattern scale and written project specification." },
  { title: "Confirm documents and delivery", text: "Final quotation confirms MOQ, lead time, packing, delivery term and available technical documents for the selected construction." },
];

export const metadata: Metadata = {
  title: "Carpet Specification Support | VISHOME",
  description: "Specification support for architects and interior designers sourcing commercial carpet tiles, hotel broadloom, custom carpet patterns, samples and technical documents.",
  alternates: { canonical: absoluteUrl(pagePath) },
  openGraph: {
    title: "Carpet Specification Support | VISHOME",
    description: "Request carpet samples, technical documents, custom pattern support and project quotation guidance for commercial carpet specifications.",
    url: absoluteUrl(pagePath),
    type: "website",
  },
};

export default function ArchitectsDesignersPage() {
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(pagePath)}#webpage`,
    url: absoluteUrl(pagePath),
    name: "Architects & Designers Carpet Specification Support",
    description: metadata.description,
    inLanguage: "en",
    publisher: { "@id": `${brandInfo.url}/#organization` },
    about: productCategories.map((category) => ({ "@type": "Thing", name: category.name, url: absoluteUrl(`/products/${category.slug}`) })),
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(webpageJsonLd) }} />
      <PageHero
        eyebrow="Specification Support"
        title="Carpet Specification Support for Architects and Designers"
        description="Use Vishome Carpet as a technical source for commercial carpet selection, custom pattern workflow, samples, project documents and quotation inputs."
        image="/images/about/production-workshop.webp"
        imageAlt="Commercial carpet production workshop for architectural specification support"
      />

      <section className="section-padding">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">Design Team Resources</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-primary md:text-5xl">Specify carpet with samples, documents and project context.</h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Vishome supports B2B project teams that need comparable carpet specifications before confirming production. Final performance, testing and price remain tied to the exact construction confirmed in the quotation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?source=architects-designers#quote-form" className="btn-fox-orange text-center">Discuss a Project Specification</Link>
              <Link href="/technical-documents" className="btn-fox-outline text-center">Request Technical Documents</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {supportItems.map((item) => (
              <div key={item} className="rounded-md border border-border bg-white p-5 shadow-sm">
                <p className="text-sm font-bold leading-7 text-primary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">Workflow</p>
            <h2 className="mt-4 text-3xl font-black text-primary md:text-4xl">A practical route from design idea to production specification</h2>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-4">
            {workflow.map((step, index) => (
              <article key={step.title} className="bg-white p-6">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-accent">Step {index + 1}</span>
                <h3 className="mt-3 text-lg font-black text-primary">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox rounded-md border border-border bg-white p-8 md:p-10">
          <h2 className="text-3xl font-black text-primary">Product groups for project specifications</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {productCategories.map((category) => (
              <Link key={category.id} href={`/products/${category.slug}`} className="rounded-md border border-border p-5 transition hover:border-accent hover:shadow-md">
                <h3 className="font-black text-primary">{category.name}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
