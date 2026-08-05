import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brandInfo } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/resources/technical-library";

const documents = [
  { title: "Commercial Carpet Tile Buying & Specification Guide", type: "Guide", category: "Carpet Tiles", application: "Office, retail and modular commercial flooring", href: "/downloads/commercial-carpet-tile-buying-specification-guide.pdf" },
  { title: "Hotel Broadloom Procurement Guide", type: "Guide", category: "Wall-to-Wall", application: "Hotel corridors, guestrooms and banquet halls", href: "/downloads/hotel-broadloom-procurement-guide.pdf" },
  { title: "Public Area Carpet Specification Guide", type: "Guide", category: "Public Area", application: "Lobbies, corridors and decorative public zones", href: "/downloads/public-area-carpet-specification-guide.pdf" },
  { title: "Commercial Carpet Procurement Checklist", type: "Checklist", category: "Multiple", application: "RFQ, samples, packing and delivery planning", href: "/downloads/commercial-carpet-procurement-checklist.pdf" },
  { title: "Gold Mining Mat RFQ Checklist", type: "Checklist", category: "Gold Mining Mat", application: "Sluice matting and trial order confirmation", href: "/downloads/gold-mining-mat-rfq-checklist.pdf" },
];

const filters = ["Product category", "Document type", "Application", "Language", "File format"];

export const metadata: Metadata = {
  title: "Commercial Carpet Technical Library | Vishome Carpet",
  description: "Download Vishome Carpet buyer guides and request project-specific technical data sheets, installation guides, maintenance guidance, packing data and sample documents.",
  alternates: { canonical: absoluteUrl(pagePath) },
  openGraph: {
    title: "Commercial Carpet Technical Library | Vishome Carpet",
    description: "Verified buyer guides and project document request paths for commercial carpet specifications.",
    url: absoluteUrl(pagePath),
    type: "website",
  },
};

export default function TechnicalLibraryPage() {
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl(pagePath)}#webpage`,
    url: absoluteUrl(pagePath),
    name: "Commercial Carpet Technical Library",
    description: metadata.description,
    inLanguage: "en",
    publisher: { "@id": `${brandInfo.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: documents.map((document, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: document.title,
        url: absoluteUrl(document.href),
      })),
    },
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(webpageJsonLd) }} />
      <PageHero
        eyebrow="Technical Library"
        title="Commercial Carpet Technical Library"
        description="Download published buyer guides and request project-controlled data sheets, installation guidance, maintenance documents and packing references."
        image="/images/about/quality-control-inspection.webp"
        imageAlt="Commercial carpet quality control and technical document review"
      />

      <section className="section-padding">
        <div className="container-fox">
          <div className="grid gap-4 md:grid-cols-5">
            {filters.map((filter) => (
              <div key={filter} className="rounded-md border border-border bg-white p-4 text-sm font-black uppercase tracking-[0.12em] text-primary shadow-sm">
                {filter}
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-border bg-white shadow-sm">
            <div className="grid grid-cols-12 gap-0 border-b border-border bg-surface px-5 py-4 text-xs font-black uppercase tracking-[0.14em] text-primary/60">
              <span className="col-span-5">Document</span>
              <span className="col-span-2">Type</span>
              <span className="col-span-2">Category</span>
              <span className="col-span-3">Action</span>
            </div>
            {documents.map((document) => (
              <article key={document.href} className="grid grid-cols-1 gap-4 border-b border-border px-5 py-5 last:border-b-0 md:grid-cols-12 md:items-center">
                <div className="md:col-span-5">
                  <h2 className="font-black text-primary">{document.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">{document.application}</p>
                </div>
                <p className="text-sm font-bold text-primary md:col-span-2">{document.type}</p>
                <p className="text-sm font-bold text-muted md:col-span-2">{document.category}</p>
                <div className="flex flex-col gap-2 sm:flex-row md:col-span-3">
                  <a href={document.href} className="btn-fox-orange text-center" data-track-event="technical_document_download" data-document-type={document.type}>Download</a>
                  <Link href={`/contact?document=${encodeURIComponent(document.title)}#quote-form`} className="btn-fox-outline text-center">Request matched TDS</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-surface">
        <div className="container-fox rounded-md border border-border bg-white p-8 md:p-10">
          <h2 className="text-3xl font-black text-primary">Need a construction-specific document?</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
            Fire, acoustic, antistatic, backing, packing and maintenance details depend on the exact product construction quoted for the project. Send product type, area, destination and required standards so the team can confirm which documents are available.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact?source=technical-library#quote-form" className="btn-fox-orange text-center">Request Technical Documents</Link>
            <Link href="/products" className="btn-fox-outline text-center">View Product Categories</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
