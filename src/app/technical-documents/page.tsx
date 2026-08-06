import type { Metadata } from "next";
import Link from "next/link";
import { brandInfo } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/technical-documents";

const publishedGuides = [
  { title: "Commercial Carpet Tile Buying & Specification Guide", href: "/downloads/commercial-carpet-tile-buying-specification-guide.pdf", scope: "Office, retail, modular flooring and 50x50 carpet tile projects" },
  { title: "Hotel Broadloom Procurement Guide", href: "/downloads/hotel-broadloom-procurement-guide.pdf", scope: "Hotel corridors, guestrooms, banquet halls and wall-to-wall carpet projects" },
  { title: "Public Area Carpet Specification Guide", href: "/downloads/public-area-carpet-specification-guide.pdf", scope: "Lobby, public area, wool rug and heavy-traffic decorative carpet sourcing" },
  { title: "Commercial Carpet Procurement Checklist", href: "/downloads/commercial-carpet-procurement-checklist.pdf", scope: "RFQ preparation, sample review, packing and delivery coordination" },
  { title: "Gold Mining Mat RFQ Checklist", href: "/downloads/gold-mining-mat-rfq-checklist.pdf", scope: "Miners moss, sluice carpet mat dimensions, backing and trial order confirmation" },
];

const requestDocuments = [
  "Product technical data sheet matched to the selected construction",
  "Fire-rating, antistatic, acoustic or backing information where applicable",
  "Color, sample, strike-off or pattern approval record for custom projects",
  "Packing plan, roll or carton data and loading reference for freight estimates",
  "Project quotation sheet with confirmed MOQ, unit, lead time and validity",
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
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Technical Documents", item: absoluteUrl(pagePath) },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(webpageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />

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

      <section className="section-padding bg-surface">
        <div className="container-fox grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Published downloads</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">Buyer guides available now</h2>
            <p className="mt-5 leading-8 text-muted">These files are procurement guides and checklists. They are not product-specific certificates unless a document is explicitly issued for a confirmed project or sample.</p>
          </div>
          <div className="grid gap-4">
            {publishedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="block rounded-md border border-border bg-white p-5 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-card">
                <span className="text-lg font-black text-primary">{guide.title}</span>
                <span className="mt-2 block text-sm font-semibold leading-6 text-muted">{guide.scope}</span>
              </Link>
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
