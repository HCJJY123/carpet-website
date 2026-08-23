import type { Metadata } from "next";
import Link from "next/link";
import { brandInfo } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/commercial-terms";

const terms = [
  { title: "Reference Price", body: "Published FOB ranges are non-binding sourcing references. Final price, currency, tax, packaging, freight, destination charges and validity must be confirmed in a written quotation." },
  { title: "Sales Unit", body: "Products may be quoted by square metre, roll, piece, carton or project lot depending on construction and packing. The sales unit in the final quotation controls the order." },
  { title: "Availability", body: "Most commercial carpet, hotel broadloom, public-area rug and mining mat orders are quotation-required or made to order. Stock, sample availability and lead time are confirmed case by case." },
  { title: "MOQ Levels", body: "Sample, trial order and project MOQ are handled separately. Custom colors, custom backing, artwork, OEM packing and unusual dimensions may require a higher project MOQ." },
  { title: "Returns & Cancellation", body: "Custom-made or project-specific goods are reviewed under the signed quotation, proforma invoice or contract. Cancellation, replacement or return handling must be confirmed in writing before order placement." },
  { title: "Quotation Validity", body: "Validity depends on raw material, exchange rate, production schedule and shipping conditions. Do not treat website price ranges as an active quotation." },
];

export const metadata: Metadata = {
  title: "Commercial Terms | VISHOME Carpet",
  description: "Reference pricing, sales units, availability, MOQ levels, quotation validity and return handling for VISHOME commercial carpet project inquiries.",
  alternates: { canonical: absoluteUrl(pagePath) },
  robots: { index: true, follow: true },
};

export default function CommercialTermsPage() {
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(pagePath)}#webpage`,
    url: absoluteUrl(pagePath),
    name: "Commercial Terms",
    description: metadata.description,
    publisher: { "@type": "Organization", name: brandInfo.name, url: brandInfo.url, email: brandInfo.email },
    mainEntity: terms.map((term) => ({ "@type": "DefinedTerm", name: term.title, description: term.body })),
  };

  return (
    <main className="min-h-screen bg-white text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(webpageJsonLd) }} />
      <section className="bg-primary py-20 text-white md:py-28">
        <div className="container-fox max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">Quotation basis</p>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">Commercial Terms</h1>
          <p className="mt-6 max-w-3xl text-base font-semibold leading-8 text-white/80 md:text-lg">
            This page explains how VISHOME handles reference prices, sales units, MOQ, availability and written quotation validity for B2B carpet projects.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-fox grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {terms.map((term) => (
            <article key={term.title} className="rounded-md border border-border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black">{term.title}</h2>
              <p className="mt-4 text-sm font-semibold leading-7 text-muted">{term.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox rounded-md border border-border bg-white p-8 md:p-10">
          <h2 className="text-3xl font-black">Before placing an order</h2>
          <p className="mt-5 max-w-4xl leading-8 text-muted">Confirm product construction, color, quantity, sales unit, payment schedule, production lead time, packing, delivery term, destination, document requirements and quotation validity with {brandInfo.name}. For questions, contact <a className="font-black text-accent" href={`mailto:${brandInfo.email}`}>{brandInfo.email}</a>.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact#quote-form" className="btn-fox-orange text-center">Request written quotation</Link>
            <Link href="/technical-documents" className="btn-fox-outline text-center">Technical documents</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
