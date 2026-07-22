import type { Metadata } from "next";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { solutionPages } from "@/lib/solution-data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Commercial Carpet Solutions by Application | Hotel, Office & Public Area | VISHOME",
  description:
    "Commercial carpet solutions for hotels, offices, airports, casinos, retail stores, and public-area projects. Compare carpet tiles, broadloom, MOQ, samples, and specification support.",
  keywords:
    "commercial carpet solutions, hotel carpet manufacturer, office carpet tiles supplier, airport carpet flooring, casino carpet supplier, retail store carpet flooring",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Commercial Carpet Solutions by Application | VISHOME",
    description:
      "Application-based commercial carpet solutions for B2B buyers comparing products, MOQ, samples, and technical documents.",
    url: "https://www.vishomecarpet.com/solutions",
    type: "website",
    images: [
      {
        url: "https://www.vishomecarpet.com/images/about/commercial-project-application.webp",
        width: 1200,
        height: 630,
        alt: "Commercial carpet application solutions for B2B projects",
      },
    ],
  },
};

export default function SolutionsPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Commercial Carpet Solutions by Application",
    description: metadata.description,
    url: absoluteUrl("/solutions"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          url: absoluteUrl("/solutions/hotel-hospitality"),
          name: "Hotel & Hospitality Carpet Solutions",
        },
        ...solutionPages.map((page, index) => ({
          "@type": "ListItem",
          position: index + 2,
          url: absoluteUrl(`/solutions/${page.slug}`),
          name: page.title,
          description: page.description,
        })),
      ],
    },
  };

  return (
    <div className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(collectionJsonLd) }} />

      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-35">
          <ProductImage
            src="/images/about/commercial-project-application.webp"
            alt="Commercial carpet applications for hotels offices airports and retail projects"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary/86" />
        <div className="container-fox relative py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Project-Based Carpet Specification</p>
            <h1 className="mb-6 text-4xl font-black uppercase leading-tight md:text-6xl">
              Commercial Carpet Solutions by Application
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-white/76 md:text-lg">
              Choose carpet tiles, hotel broadloom, public-area carpet, and natural sisal systems by project type,
              MOQ, sample needs, technical documents, and delivery schedule.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/solutions/hotel-hospitality" className="btn-fox-orange !px-8 !py-4">
                Hotel & Hospitality
              </Link>
              <Link href="/contact" className="btn-fox-outline !border-white !px-8 !py-4 !text-white hover:!bg-white hover:!text-primary">
                Contact Technical Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="mb-12 max-w-4xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Linked Solution Pages</p>
            <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
              Buyer Pages for High-Intent Search Terms
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
              Each page links to recommended products and answers procurement questions about MOQ, samples, backing,
              fire-rating documents, packing, lead time, and WhatsApp quotation support.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <Link href="/solutions/hotel-hospitality" className="group border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
              <h3 className="mb-3 text-lg font-black uppercase leading-tight text-primary group-hover:text-accent">Hotel & Hospitality Carpet Solutions</h3>
              <p className="text-sm leading-relaxed text-muted">
                Wall-to-wall and modular systems for lobby, guestroom, corridor, ballroom, and hotel tender packages.
              </p>
            </Link>
            {solutionPages.map((page) => (
              <Link key={page.slug} href={`/solutions/${page.slug}`} className="group border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-3 text-lg font-black uppercase leading-tight text-primary group-hover:text-accent">{page.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-muted">{page.description}</p>
                <p className="border-t border-border pt-4 text-[10px] font-black uppercase tracking-[0.14em] text-primary/55">{page.buyerIntent}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
