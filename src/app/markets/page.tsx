import type { Metadata } from "next";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { countryApplicationPages } from "@/lib/country-application-pages";
import { countryMarketPages } from "@/lib/country-market-pages";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Global Commercial Carpet Market Pages | VISHOME",
  description: "Country-specific commercial carpet procurement pages from VISHOME, including priority rollout markets, local search terminology, product specifications, MOQ, samples and project inquiry routes.",
  alternates: { canonical: absoluteUrl("/markets") },
  openGraph: {
    title: "VISHOME Global Commercial Carpet Markets",
    description: "Country-specific commercial carpet and gold mining mat sourcing pages for international B2B buyers.",
    url: absoluteUrl("/markets"),
    type: "website",
    images: [{ url: absoluteUrl("/images/hero-home.webp"), alt: "VISHOME commercial carpet project markets" }],
  },
};

export default function MarketsPage() {
  const commercialPages = countryMarketPages.filter((page) => page.kind === "commercial");
  const goldPages = countryMarketPages.filter((page) => page.kind === "gold");
  const allMarketItems = [
    ...countryMarketPages.map((page) => ({ title: page.title, path: page.path })),
    ...countryApplicationPages.map((page) => ({ title: page.title, path: page.path })),
  ];
  const priorityMarkets = ["ro", "pl", "ca", "cz", "hu", "bg", "sg"];
  const featuredCommercialPages = priorityMarkets
    .map((market) => commercialPages.find((page) => page.market === market))
    .filter((page): page is (typeof commercialPages)[number] => Boolean(page));
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "VISHOME country market procurement pages",
    numberOfItems: allMarketItems.length,
    itemListElement: allMarketItems.map((page, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: page.title,
      url: absoluteUrl(page.path),
    })),
  };

  return (
    <main className="min-h-screen bg-white text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(itemListJsonLd) }} />
      <section className="relative flex min-h-[520px] items-end overflow-hidden bg-primary text-white">
        <div className="absolute inset-0">
          <ProductImage src="/images/hero-home.webp" alt="VISHOME global commercial carpet projects" className="h-full w-full" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-primary/70" />
        <div className="container-fox relative z-10 pb-16 pt-28 md:pb-20">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Global market directory</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">Country-specific commercial carpet sourcing pages</h1>
          <p className="mt-6 max-w-3xl text-base font-semibold leading-8 text-white/85 md:text-lg">
            Each page combines a local-language direct answer with verified VISHOME product records, sample and MOQ tiers,
            project risks, delivery inputs and a country-specific inquiry route. These pages do not replace tender or local compliance review.
          </p>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Priority rollout</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Wave 1 markets to review first</h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-muted md:text-base">
            These markets already have the strongest buyer-intent structure for commercial carpet, hotel carpet or casino carpet sourcing. Start here when you want the fastest route to qualified B2B inquiries.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {featuredCommercialPages.map((page) => (
              <Link key={page.path} href={page.path} className="group overflow-hidden rounded-md border border-border bg-white p-6 transition hover:border-accent hover:shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.1em] text-accent">{page.hreflang}</p>
                <h3 className="mt-3 text-2xl font-black leading-tight group-hover:text-accent">{page.countryNameLocal}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{page.directAnswer}</p>
                <span className="mt-6 inline-block text-xs font-black uppercase tracking-[0.08em]">Open priority market →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Country × application pages</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">High-intent pages by market and project type</h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-muted md:text-base">
            These pages go deeper than a country hub by answering one application-specific procurement problem and routing the buyer to product records, guides and RFQ inputs.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {countryApplicationPages.map((page) => (
              <Link key={page.path} href={page.path} className="group rounded-md border border-border bg-white p-6 transition hover:border-accent hover:shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.1em] text-accent">{page.countryName} · {page.applicationName}</p>
                <h3 className="mt-3 text-xl font-black leading-tight group-hover:text-accent">{page.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{page.metadataDescription}</p>
                <span className="mt-5 inline-block text-xs font-black uppercase tracking-[0.08em]">Open application page →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Commercial carpet markets</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Project sourcing by destination country</h2>
          <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {commercialPages.map((page) => (
              <Link key={page.path} href={page.path} className="group min-h-44 bg-white p-6 transition hover:bg-surface">
                <p className="text-xs font-black uppercase tracking-[0.1em] text-accent">{page.hreflang}</p>
                <h3 className="mt-3 text-xl font-black leading-tight group-hover:text-accent">{page.countryNameLocal}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{page.countryName} commercial carpet project guide</p>
                <span className="mt-5 inline-block text-xs font-black uppercase tracking-[0.08em]">Open market page →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Special product markets</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Gold mining carpet pages for Latin America</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {goldPages.map((page) => (
              <Link key={page.path} href={page.path} className="group grid overflow-hidden rounded-md border border-border bg-white sm:grid-cols-[180px_1fr] hover:border-accent hover:shadow-xl">
                <ProductImage src="/images/products/gold-mining-carpet-mat/01-hero-45-degree.webp" alt={page.title} className="aspect-[4/3] h-full min-h-44 w-full bg-surface sm:aspect-auto" sizes="(max-width: 768px) 100vw, 180px" />
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.1em] text-accent">{page.hreflang}</p>
                  <h3 className="mt-3 text-xl font-black leading-tight group-hover:text-accent">{page.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{page.metadataDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#102A43] py-16 text-white md:py-20">
        <div className="container-fox text-center">
          <h2 className="text-3xl font-black md:text-5xl">A market page is a starting point, not a final specification</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-7 text-white/75">Send the destination, application, quantity, drawings and required documents so the quotation can be checked against the actual project.</p>
          <Link href="/contact#quote-form" className="mt-8 inline-flex min-h-13 items-center justify-center rounded-sm bg-[#d9480f] px-7 py-4 text-sm font-black text-white hover:bg-[#b83a08]">Request a project quotation</Link>
        </div>
      </section>
    </main>
  );
}
