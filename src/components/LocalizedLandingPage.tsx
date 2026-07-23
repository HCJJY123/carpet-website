import type { Metadata } from "next";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { brandInfo, products, type Product } from "@/lib/data";
import {
  localizedLandingLabels,
  type LocalizedLanding,
} from "@/lib/localized-landings";
import { absoluteUrl, productPath, safeJsonLd } from "@/lib/seo";

function resolveProducts(page: LocalizedLanding) {
  return page.productCards
    .map((card) => {
      const product = products.find((item) => item.id === card.id);
      return product ? { ...card, product } : null;
    })
    .filter((item): item is { id: string; name: string; description: string; product: Product } => Boolean(item));
}

export function localizedLandingMetadata(page: LocalizedLanding): Metadata {
  const heroProduct = products.find((product) => product.id === page.primaryProductId);

  return {
    title: page.metadataTitle,
    description: page.metadataDescription,
    keywords: page.keywords,
    alternates: {
      canonical: absoluteUrl(page.path),
      languages: Object.fromEntries(
        Object.entries(page.alternates).map(([language, path]) => [language, absoluteUrl(path)])
      ),
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: page.metadataTitle,
      description: page.metadataDescription,
      url: absoluteUrl(page.path),
      type: "website",
      locale: page.openGraphLocale,
      images: heroProduct
        ? [{ url: absoluteUrl(heroProduct.image), alt: page.heroAlt }]
        : [{ url: absoluteUrl("/images/og-cover.webp"), alt: page.title }],
    },
  };
}

export default function LocalizedLandingPage({ page }: { page: LocalizedLanding }) {
  const labels = localizedLandingLabels[page.locale];
  const resolvedProducts = resolveProducts(page);
  const heroProduct = products.find((product) => product.id === page.primaryProductId);
  const quoteHref = `/contact?product=${encodeURIComponent(page.quoteProduct)}#quote-form`;
  const emailHref = `mailto:${brandInfo.email}?subject=${encodeURIComponent(page.emailSubject)}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: brandInfo.shortName, item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: page.title, item: absoluteUrl(page.path) },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: page.locale,
    mainEntity: page.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(page.path)}#webpage`,
    url: absoluteUrl(page.path),
    name: page.metadataTitle,
    description: page.metadataDescription,
    inLanguage: page.locale,
    primaryImageOfPage: heroProduct
      ? { "@type": "ImageObject", url: absoluteUrl(heroProduct.image) }
      : undefined,
    about: resolvedProducts.map(({ product, name }) => ({
      "@type": "Product",
      name,
      url: absoluteUrl(productPath(product.id)),
      image: absoluteUrl(product.image),
      brand: { "@type": "Brand", name: "VISHOME" },
    })),
    provider: {
      "@type": "Organization",
      name: brandInfo.name,
      url: brandInfo.url,
      email: brandInfo.email,
    },
  };

  const productGridClass =
    resolvedProducts.length === 1
      ? "max-w-xl"
      : resolvedProducts.length === 2
        ? "max-w-4xl md:grid-cols-2"
        : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <article lang={page.locale} dir={page.direction} className="min-h-screen bg-white text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(webpageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />

      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0">
          <ProductImage
            src={heroProduct?.image || "/images/hero-home.webp"}
            alt={page.heroAlt}
            className="h-full w-full"
            fit="cover"
            priority
            quality={88}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-primary/60" />
        <div className="container-fox relative z-10 w-full py-20">
          <div className={`max-w-4xl ${page.direction === "rtl" ? "ml-auto" : ""}`}>
            <p className="mb-5 text-xs font-black text-accent">{page.eyebrow}</p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">{page.title}</h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/85 md:text-lg">{page.introduction}</p>
            <p className="mt-6 max-w-3xl border-s-2 border-accent ps-4 text-sm leading-6 text-white/70">
              <strong className="text-white">{labels.targetMarkets}:</strong> {page.targetMarkets}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={quoteHref}
                className="inline-flex min-h-13 items-center justify-center rounded-sm bg-[#d9480f] px-7 py-4 text-sm font-black text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#b83a08]"
              >
                {labels.quoteButton}
              </Link>
              <a
                href={emailHref}
                className="inline-flex min-h-13 items-center justify-center rounded-sm border border-white/55 bg-white/10 px-7 py-4 text-sm font-black text-white transition-all hover:border-white hover:bg-white hover:text-primary"
              >
                {labels.emailButton}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-fox grid grid-cols-2 md:grid-cols-4">
          {page.stats.map((stat) => (
            <div key={`${stat.value}-${stat.label}`} className="border-e border-border px-4 py-7 last:border-e-0 md:px-7">
              <p className="text-xl font-black text-primary md:text-2xl" dir="auto">{stat.value}</p>
              <p className="mt-2 text-xs leading-5 text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="localized-products" className="section-padding" aria-labelledby="localized-products-heading">
        <div className="container-fox">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black text-accent">{labels.productsEyebrow}</p>
            <h2 id="localized-products-heading" className="text-3xl font-black leading-tight md:text-5xl">{labels.productsHeading}</h2>
            <p className="mt-5 leading-7 text-muted">{page.productsIntro}</p>
          </div>
          <div className={`grid gap-6 ${productGridClass}`}>
            {resolvedProducts.map(({ product, name, description }) => (
              <Link
                key={product.id}
                href={productPath(product.id)}
                className="group overflow-hidden rounded-md border border-border bg-white transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden bg-surface">
                  <ProductImage
                    src={product.image}
                    alt={product.imageAlt || name}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                    fit="cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black leading-snug text-primary group-hover:text-accent">{name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
                  <dl className="mt-5 space-y-2 border-t border-border pt-4 text-xs">
                    <div className="flex justify-between gap-5">
                      <dt className="text-muted">{labels.moq}</dt>
                      <dd className="text-end font-bold text-primary" dir="ltr">{product.moq}</dd>
                    </div>
                    <div className="flex justify-between gap-5">
                      <dt className="text-muted">{labels.leadTime}</dt>
                      <dd className="text-end font-bold text-primary" dir="ltr">{product.leadTime}</dd>
                    </div>
                    {product.fobPrice ? (
                      <div className="flex justify-between gap-5">
                        <dt className="text-muted">{labels.price}</dt>
                        <dd className="text-end font-bold text-primary" dir="ltr">{product.fobPrice.display}</dd>
                      </div>
                    ) : null}
                  </dl>
                  <p className="mt-5 text-xs font-black text-accent">{labels.productDetails} →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <h2 className="max-w-3xl text-3xl font-black leading-tight md:text-5xl">{labels.benefitsHeading}</h2>
          <div className="mt-10 grid border-t border-border md:grid-cols-2">
            {page.benefits.map((benefit, index) => (
              <div key={benefit.title} className="border-b border-border py-7 md:px-7 md:first:ps-0 md:even:border-s">
                <p className="text-xs font-black text-accent">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl font-black">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-fox grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <h2 className="text-3xl font-black leading-tight md:text-5xl">{labels.applicationsHeading}</h2>
          <div className="grid sm:grid-cols-2">
            {page.applications.map((application) => (
              <p key={application} className="border-b border-white/15 py-5 text-base font-bold text-white/90">
                {application}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <h2 className="text-3xl font-black leading-tight md:text-5xl">{labels.processHeading}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {page.process.map((step) => (
              <div key={step.title} className="border-t-4 border-accent pt-6">
                <h3 className="text-lg font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox max-w-4xl">
          <h2 className="text-3xl font-black leading-tight md:text-5xl">{labels.faqHeading}</h2>
          <div className="mt-9 divide-y divide-border border-y border-border">
            {page.faqs.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="cursor-pointer list-none pe-8 text-lg font-black marker:hidden">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#102A43] py-16 text-white md:py-20">
        <div className="container-fox text-center">
          <h2 className="mx-auto max-w-4xl text-3xl font-black leading-tight md:text-5xl">{page.finalTitle}</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-7 text-white/75">{page.finalText}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={quoteHref} className="inline-flex min-h-13 items-center justify-center rounded-sm bg-[#d9480f] px-7 py-4 text-sm font-black text-white hover:bg-[#b83a08]">
              {labels.quoteButton}
            </Link>
            <a href={emailHref} className="inline-flex min-h-13 items-center justify-center rounded-sm border border-white/45 px-7 py-4 text-sm font-black text-white hover:bg-white hover:text-primary">
              {brandInfo.email}
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
