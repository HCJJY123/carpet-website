import type { Metadata } from "next";
import Link from "next/link";
import { brandInfo } from "@/lib/data";
import { documentDownloadUrl, technicalDocuments } from "@/lib/resource-data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/technical-documents";

const requestDocuments = [
  "Product technical data sheet matched to the selected construction",
  "Fire-rating, antistatic, acoustic or backing information where applicable",
  "Color, sample, strike-off or pattern approval record for custom projects",
  "Packing plan, roll or carton data and loading reference for freight estimates",
  "Project quotation sheet with confirmed MOQ, unit, lead time and validity",
];

const documentUseCases: Record<string, { question: string; answer: string; primaryLink: string; linkLabel: string }> = {
  "commercial-carpet-tile-buying-specification-guide": {
    question: "Which file helps compare commercial carpet tile specifications?",
    answer: "Start with the carpet tile buying guide, then confirm fiber, backing, tile size, sample approval and MOQ on the related product page before quotation.",
    primaryLink: "/products/carpet-tiles",
    linkLabel: "View carpet tile category",
  },
  "hotel-broadloom-procurement-guide": {
    question: "Which guide should hotel buyers use for corridor or guestroom broadloom?",
    answer: "Use the hotel broadloom guide to prepare corridor, guestroom, ballroom and wall-to-wall carpet questions before requesting a project-specific quote.",
    primaryLink: "/products/wall-to-wall",
    linkLabel: "View wall-to-wall category",
  },
  "public-area-carpet-specification-guide": {
    question: "Which guide fits lobby, public-area or decorative rug sourcing?",
    answer: "Use the public-area specification guide to compare traffic zones, visual requirements, cleaning access and related public-space carpet options.",
    primaryLink: "/products/public-area",
    linkLabel: "View public-area category",
  },
  "commercial-carpet-procurement-checklist": {
    question: "What should be prepared before asking for a commercial carpet quote?",
    answer: "Use the procurement checklist to organize product type, quantity, target market, packing, delivery terms and document requirements before submitting an RFQ.",
    primaryLink: "/contact#quote-form",
    linkLabel: "Request project quote",
  },
  "gold-mining-mat-rfq-checklist": {
    question: "Which worksheet helps source gold mining carpet mat or sluice matting?",
    answer: "Use the gold mining mat RFQ checklist to confirm mat dimensions, backing, trial order scope and recovery-site requirements before sampling.",
    primaryLink: "/products/public-area/gold-mining-carpet-mat",
    linkLabel: "View gold mining mat",
  },
  "hotel-corridor-carpet-stain-hiding-checklist": {
    question: "Which checklist helps reduce visible hotel corridor stains before quotation?",
    answer: "Use the stain-hiding checklist to review lighting, traffic lanes, cleaning access, roll planning, spare material and corridor carpet pattern selection.",
    primaryLink: "/blog/hotel-corridor-carpet-stain-hiding-procurement-guide",
    linkLabel: "Read stain-hiding guide",
  },
  "office-carpet-tiles-renovation-rfq-template": {
    question: "Which template helps prepare an office carpet tile renovation RFQ?",
    answer: "Use the RFQ template to describe phased work, rolling-chair zones, substrate review, spare stock and handover timing for modular office flooring.",
    primaryLink: "/blog/office-carpet-tiles-renovation-cycle-procurement-guide",
    linkLabel: "Read renovation guide",
  },
};

const documentFaqs = [
  {
    q: "Can these downloads replace a final project quotation or certificate?",
    a: "No. They are procurement-planning references. Final MOQ, lead time, test reports, certificates, packing data and quotation validity must be confirmed for the selected construction and order scope.",
  },
  {
    q: "Which document should a buyer send before requesting a carpet quote?",
    a: "Send the relevant checklist or RFQ template together with product type, quantity, destination, required standard, target installation date and sample requirements.",
  },
  {
    q: "Why does VISHOME separate public guides from controlled project documents?",
    a: "Public guides help buyers prepare questions. Controlled project documents depend on the exact fiber, backing, color, quantity, destination and tender requirement, so they are confirmed after specification matching.",
  },
];

export const metadata: Metadata = {
  title: "Technical Documents & Buyer Guides | VISHOME Carpet",
  description: "Access VISHOME commercial carpet buyer guides and request project-controlled technical documents, product specifications, packing data and quotation records.",
  alternates: { canonical: absoluteUrl(pagePath) },
  openGraph: {
    title: "Technical Documents & Buyer Guides | VISHOME Carpet",
    description: "Published buyer guides plus project-controlled technical documents available after product and specification matching.",
    url: absoluteUrl(pagePath),
    type: "website",
  },
};

export default function TechnicalDocumentsPage() {
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(pagePath)}#webpage`,
    url: absoluteUrl(pagePath),
    name: "Technical Documents & Buyer Guides",
    description: metadata.description,
    inLanguage: "en",
    publisher: { "@type": "Organization", name: brandInfo.name, url: brandInfo.url, email: brandInfo.email },
    about: requestDocuments.map((name) => ({ "@type": "Thing", name })),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: technicalDocuments.map((document, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: document.title,
        url: absoluteUrl(`/resources/downloads/${document.slug}`),
        description: document.description,
      })),
    },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Technical Documents", item: absoluteUrl(pagePath) },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: documentFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(webpageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />

      <section className="bg-primary py-20 text-white md:py-28">
        <div className="container-fox max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">Buyer evidence center</p>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">Technical Documents & Buyer Guides</h1>
          <p className="mt-6 max-w-3xl text-base font-semibold leading-8 text-white/80 md:text-lg">
            Use this page to access published procurement guides and request project-controlled technical documents after the product, construction, quantity and destination are confirmed.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact#quote-form" className="btn-fox-orange text-center">Request project documents</Link>
            <Link href="/commercial-terms" className="btn-fox-outline border-white/45 text-center text-white hover:border-accent">View commercial terms</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-12">
        <div className="container-fox">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Answer-first document routing</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight md:text-4xl">
            Match the buyer question to the right carpet document
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {technicalDocuments.map((document) => {
              const useCase = documentUseCases[document.slug];
              return (
                <article key={document.slug} className="rounded-md border border-border bg-surface p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">{document.documentType}</p>
                  <h3 className="mt-3 text-lg font-black leading-snug text-primary">{useCase?.question ?? document.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-muted">{useCase?.answer ?? document.description}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link href={`/resources/downloads/${document.slug}`} className="text-xs font-black uppercase tracking-[0.12em] text-accent hover:text-primary">
                      View document page
                    </Link>
                    {useCase ? (
                      <Link href={useCase.primaryLink} className="text-xs font-black uppercase tracking-[0.12em] text-primary hover:text-accent">
                        {useCase.linkLabel}
                      </Link>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-fox grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Published downloads</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">Buyer guides available now</h2>
            <p className="mt-5 leading-8 text-muted">These files are procurement guides and checklists. They are not product-specific certificates unless a document is explicitly issued for a confirmed project or sample.</p>
          </div>
          <div className="grid gap-4">
            {technicalDocuments.map((document) => (
              <article key={document.slug} className="rounded-md border border-border bg-white p-5 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-card">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.16em] text-accent">{document.documentType}</p>
                    <h3 className="mt-2 text-lg font-black text-primary">{document.title}</h3>
                    <p className="mt-2 text-sm font-semibold leading-6 text-muted">{document.description}</p>
                  </div>
                  <span className="shrink-0 rounded-sm bg-surface px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-primary">
                    {document.fileFormat}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href={`/resources/downloads/${document.slug}`} className="text-xs font-black uppercase tracking-[0.12em] text-accent hover:text-primary">
                    Document page
                  </Link>
                  <a href={documentDownloadUrl(document)} className="text-xs font-black uppercase tracking-[0.12em] text-primary hover:text-accent">
                    Download PDF
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Controlled documents</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">Request documents after specification matching</h2>
            <p className="mt-5 leading-8 text-muted">Many carpet documents depend on the exact fiber, backing, pile weight, color, quantity, destination and tender requirement. VISHOME confirms the available document set in writing for each project.</p>
          </div>
          <ul className="grid gap-px border border-border bg-border">
            {requestDocuments.map((item) => (
              <li key={item} className="bg-white p-5 text-sm font-bold leading-6">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-fox grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Procurement FAQ</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">How to use these carpet documents</h2>
          </div>
          <div className="grid gap-4">
            {documentFaqs.map((item) => (
              <article key={item.q} className="rounded-md border border-border bg-white p-5">
                <h3 className="text-lg font-black leading-snug text-primary">{item.q}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-muted">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="container-fox flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-black md:text-3xl">Need documents for a tender or project approval?</h2>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-white/75">Send product type, quantity, target market, required standard and deadline. The sales team will confirm which documents can be issued for the selected construction.</p>
          </div>
          <Link href="/contact#quote-form" className="btn-fox-orange shrink-0 text-center">Send inquiry</Link>
        </div>
      </section>
    </main>
  );
}
