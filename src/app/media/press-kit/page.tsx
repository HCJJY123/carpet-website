import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brandInfo, productCategories } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/media/press-kit";

const companyFacts = [
  { label: "Company", value: brandInfo.name },
  { label: "Brand", value: brandInfo.shortName },
  { label: "Business focus", value: "Commercial carpet manufacturing for B2B project procurement" },
  { label: "Main product groups", value: "Commercial carpet tiles, hotel broadloom, public-area carpet and custom carpet solutions" },
  { label: "Location", value: brandInfo.address },
  { label: "Contact email", value: brandInfo.email },
];

const descriptions = [
  {
    label: "50-word profile",
    text: "Vishome Carpet supplies commercial carpet tiles, hotel broadloom, public-area carpets and custom carpet solutions for international B2B projects. The company supports contractors, distributors, hotels, offices and commercial renovation teams with product selection, samples, project quotation, packing coordination and technical document requests.",
  },
  {
    label: "100-word profile",
    text: "Vishome Carpet is the commercial carpet brand of Vishome Global Commercial Carpet Co., Ltd., serving project buyers that need carpet tiles, hospitality broadloom, public-area carpets and custom carpet specifications. The website provides product categories, project references, buyer guides, technical document request paths and quote forms for contractors, distributors, hotels, offices, designers and renovation teams. Product performance, testing, MOQ, lead time and pricing are confirmed by exact construction and written quotation rather than generic claims.",
  },
];

export const metadata: Metadata = {
  title: "Press Kit & Company Facts | Vishome Carpet",
  description: "Company facts, product category overview, media-safe descriptions and contact details for Vishome Carpet platform submissions, trade media and project references.",
  alternates: { canonical: absoluteUrl(pagePath) },
  openGraph: {
    title: "Press Kit & Company Facts | Vishome Carpet",
    description: "Media-safe Vishome Carpet company information for legitimate platform submissions and trade references.",
    url: absoluteUrl(pagePath),
    type: "website",
  },
};

export default function PressKitPage() {
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${absoluteUrl(pagePath)}#webpage`,
    url: absoluteUrl(pagePath),
    name: "Press Kit & Company Facts",
    description: metadata.description,
    inLanguage: "en",
    publisher: { "@id": `${brandInfo.url}/#organization` },
    about: { "@id": `${brandInfo.url}/#organization` },
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(webpageJsonLd) }} />
      <PageHero
        eyebrow="Media Kit"
        title="Vishome Carpet Press Kit and Company Facts"
        description="A media-safe reference page for platform submissions, trade-media research, product profile reviews and project partner documentation."
        image="/images/about/global-export-container-loading.webp"
        imageAlt="Vishome Carpet export packing and commercial carpet logistics"
      />

      <section className="section-padding">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">Company Facts</p>
            <h2 className="mt-4 text-3xl font-black text-primary md:text-5xl">Use verified public facts first.</h2>
            <p className="mt-5 text-sm leading-7 text-muted">
              This page is designed for reviewers and editors who need concise company information. Any certification, factory figure, named project or test result should be checked against current documents before third-party publication.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?source=press-kit#quote-form" className="btn-fox-orange text-center">Contact Vishome Carpet</Link>
              <Link href="/resources/technical-library" className="btn-fox-outline text-center">Technical Library</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-border bg-white shadow-sm">
            {companyFacts.map((fact) => (
              <div key={fact.label} className="grid gap-2 border-b border-border p-5 last:border-b-0 sm:grid-cols-[180px_1fr]">
                <dt className="text-xs font-black uppercase tracking-[0.16em] text-primary/50">{fact.label}</dt>
                <dd className="text-sm font-bold leading-7 text-primary">{fact.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">Product Scope</p>
            <h2 className="mt-4 text-3xl font-black text-primary md:text-4xl">Product categories for platform reviewers</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {productCategories.map((category) => (
              <Link key={category.id} href={`/products/${category.slug}`} className="rounded-md border border-border bg-white p-6 shadow-sm transition hover:border-accent hover:shadow-md">
                <h3 className="text-lg font-black text-primary">{category.name}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox grid gap-5 md:grid-cols-2">
          {descriptions.map((item) => (
            <article key={item.label} className="rounded-md border border-border bg-white p-7 shadow-sm">
              <h2 className="text-xl font-black text-primary">{item.label}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
