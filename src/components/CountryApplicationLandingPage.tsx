import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProductImage from "@/components/ProductImage";
import { brandInfo, products, type Product } from "@/lib/data";
import type { CountryApplicationPage } from "@/lib/country-application-pages";
import { absoluteUrl, productPath, safeJsonLd } from "@/lib/seo";

function resolveProducts(page: CountryApplicationPage) {
  return page.productIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));
}

export function countryApplicationMetadata(page: CountryApplicationPage): Metadata {
  const hero = products.find((product) => product.id === page.heroProductId) ?? products.find((product) => product.id === page.productIds[0]);
  const heroImage = page.heroImage ?? hero?.image;
  const heroImageAlt = page.heroImageAlt ?? page.title;

  return {
    title: page.metadataTitle,
    description: page.metadataDescription,
    alternates: {
      canonical: absoluteUrl(page.path),
      languages: {
        [page.hreflang]: absoluteUrl(page.path),
        en: absoluteUrl(page.path),
        "x-default": absoluteUrl(page.path),
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: page.metadataTitle,
      description: page.metadataDescription,
      url: absoluteUrl(page.path),
      type: "website",
      locale: page.openGraphLocale,
      images: heroImage ? [{ url: absoluteUrl(heroImage), alt: heroImageAlt }] : undefined,
    },
  };
}

export default function CountryApplicationLandingPage({ page }: { page: CountryApplicationPage }) {
  const resolvedProducts = resolveProducts(page);
  const heroProduct = products.find((product) => product.id === page.heroProductId) ?? resolvedProducts[0];
  const heroImage = page.heroImage ?? heroProduct?.image ?? "/images/hero-home.webp";
  const heroImageAlt = page.heroImageAlt ?? page.title;
  const quoteHref = `/contact?country=${encodeURIComponent(page.countryName)}&application=${encodeURIComponent(page.applicationName)}#quote-form`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Vishomecarpet", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Markets", item: absoluteUrl("/markets") },
      { "@type": "ListItem", position: 3, name: page.countryName, item: absoluteUrl(`/markets/${page.market}`) },
      { "@type": "ListItem", position: 4, name: page.applicationName, item: absoluteUrl(page.path) },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: page.language,
    mainEntity: page.faq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${page.countryName} ${page.applicationName} product shortlist`,
    itemListElement: resolvedProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(productPath(product.id)),
      name: product.name,
    })),
  };

  return (
    <main className="bg-white text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(itemListJsonLd) }} />

      <PageHero
        eyebrow={`${page.countryNameLocal} · ${page.applicationName}`}
        title={page.title}
        description={page.metadataDescription}
        image={heroImage}
        imageAlt={heroImageAlt}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={quoteHref} className="btn-fox-orange min-h-13 text-center">
            Request Project Quotation
          </Link>
          <Link href="/request-sample-box" className="btn-fox-outline border-white/45 text-center text-white hover:border-accent">
            Request Sample
          </Link>
        </div>
      </PageHero>

      <section className="section-padding">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Direct answer</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">What should buyers confirm first?</h2>
            <p className="mt-5 leading-8 text-muted">{page.directAnswer}</p>
          </div>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {page.applicationRisks.map((risk) => (
              <div key={risk} className="bg-surface p-5 text-sm font-bold leading-7 text-primary">{risk}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Market context</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Why this application matters in {page.countryName}</h2>
            <p className="mt-5 leading-8 text-muted">{page.marketNote}</p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Buyer checklist</p>
            <div className="mt-5 grid gap-px border border-border bg-border sm:grid-cols-2">
              {page.buyerChecklist.map((item) => (
                <div key={item} className="bg-white p-5 text-sm font-bold leading-7">{item}</div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-muted">Local terms: {page.localTerms.join(" · ")}</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Zone-by-zone guidance</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">How to map the specification</h2>
          <div className="mt-10 overflow-x-auto border border-border">
            <table className="min-w-[900px] w-full border-collapse text-left text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-4 font-black">Zone</th>
                  <th className="p-4 font-black">Buyer issue</th>
                  <th className="p-4 font-black">Practical recommendation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {page.decisionRows.map((row) => (
                  <tr key={row.zone} className="align-top">
                    <td className="p-4 font-black">{row.zone}</td>
                    <td className="p-4 text-muted">{row.issue}</td>
                    <td className="p-4 text-muted">{row.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Supported products</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Product families to compare</h2>
            <div className={`mt-8 grid gap-6 ${resolvedProducts.length > 1 ? "md:grid-cols-2 xl:grid-cols-3" : "max-w-2xl"}`}>
              {resolvedProducts.map((product) => (
                <Link key={product.id} href={productPath(product.id)} className="group overflow-hidden rounded-md border border-border bg-white transition hover:border-accent hover:shadow-xl">
                  <ProductImage src={product.image} alt={product.imageAlt || product.name} className="aspect-[4/3] w-full bg-surface" sizes="(max-width: 1024px) 100vw, 33vw" />
                  <div className="p-6">
                    <h3 className="text-lg font-black leading-snug group-hover:text-accent">{product.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{product.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Supporting guides</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Buyer research and RFQ support</h2>
            <div className="mt-8 grid gap-4">
              {page.guideLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-md border border-border bg-white p-5 transition hover:border-accent hover:shadow-md">
                  <h3 className="text-base font-black leading-snug text-primary">{link.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{link.description}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8 rounded-md border border-border bg-white p-5">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">What to send for a quote</p>
              <ul className="mt-4 list-inside list-disc space-y-3 text-sm leading-7 text-muted">
                {page.quoteInputs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" data-funnel-section="country_application_faq">
        <div className="container-fox max-w-5xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.14em] text-accent">Answer-first buyer FAQ</p>
          <h2 className="mt-3 text-center text-3xl font-black md:text-4xl">Questions to resolve before ordering</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {page.faq.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-black marker:hidden">{faq.question}</summary>
                <p className="mt-4 max-w-4xl leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#102A43] py-16 text-white md:py-20" data-funnel-section="country_application_quote">
        <div className="container-fox text-center">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Project inquiry</p>
          <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
            Send the country, application, quantity and target delivery date
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-7 text-white/75">
            Vishomecarpet will respond using the current product record and the application context on this page. No price, document or delivery promise is final until it appears in the written quotation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={quoteHref} className="inline-flex min-h-13 items-center justify-center rounded-sm bg-[#d9480f] px-7 py-4 text-sm font-black text-white hover:bg-[#b83a08]">
              Open quotation form
            </Link>
            <a href={`mailto:${brandInfo.email}`} className="inline-flex min-h-13 items-center justify-center rounded-sm border border-white/45 px-7 py-4 text-sm font-black text-white hover:bg-white hover:text-primary">
              {brandInfo.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
