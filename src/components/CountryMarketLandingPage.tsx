import type { Metadata } from "next";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { brandInfo, products, type Product } from "@/lib/data";
import type { CountryMarketPage } from "@/lib/country-market-pages";
import { absoluteUrl, productPath, safeJsonLd } from "@/lib/seo";

const UPDATED_DATE = "2026-08-19";

function resolveProducts(page: CountryMarketPage) {
  return page.productIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));
}

function defaultPath(page: CountryMarketPage) {
  return page.kind === "gold"
    ? "/products/public-area/gold-mining-carpet-mat"
    : "/commercial-carpet-manufacturer";
}

function commercialFaqs(page: CountryMarketPage) {
  return [
    {
      question: `Which commercial carpet format is suitable for a project in ${page.countryName}?`,
      answer: "Carpet tiles are useful where selective replacement and phased installation matter. Broadloom is often considered for guestrooms, corridors, ballrooms and continuous patterned areas. The decision should follow the room schedule, traffic, maintenance plan and approved construction rather than appearance alone.",
    },
    {
      question: "Can we request samples before placing a project order?",
      answer: "Yes. The product records on this page show whether a material swatch or cut sample is available. A sample confirms color and texture, but the quoted construction, backing and technical documents must also match the final order.",
    },
    {
      question: "What information is needed for a useful quotation?",
      answer: `Provide the project country and city in ${page.countryName}, application, estimated area, product format, target delivery date, drawing or room schedule, sample requirement and any mandatory technical documents. This prevents an incomplete area-only quotation.`,
    },
    {
      question: "Does the product automatically comply with every local project standard?",
      answer: "No. Standards, test reports and submittal formats vary by project. Vishomecarpet can provide the available product documents for review, but the buyer, consultant or contractor must confirm that the nominated specification satisfies the actual tender and local requirements.",
    },
    {
      question: "How should freight and delivery be compared?",
      answer: "Compare freight only after the roll or pallet plan, gross weight, destination, Incoterm and delivery stages are known. A rate based only on square metres can be misleading because packing density differs by carpet format and backing.",
    },
  ];
}

function goldFaqs(page: CountryMarketPage) {
  return [
    {
      question: `¿Qué datos se necesitan para cotizar alfombra minera para ${page.countryNameLocal}?`,
      answer: "Indique ancho y longitud de la canaleta, espesor disponible, cantidad, color, respaldo, tipo de equipo, ciudad de entrega y si requiere muestra o empaque OEM.",
    },
    {
      question: "¿Una alfombra miners moss garantiza un porcentaje de recuperación?",
      answer: "No. La recuperación depende también del caudal, riffles, clasificación del material, pendiente, limpieza y operación. La muestra debe probarse en la configuración real antes de una compra mayor.",
    },
    {
      question: "¿Qué espesores están disponibles?",
      answer: "El producto publicado incluye opciones de 10 mm, 15 mm y 20 mm. La compatibilidad depende de la altura disponible y del sistema de retención instalado en la canaleta.",
    },
    {
      question: "¿Se puede pedir un rollo de prueba?",
      answer: "Sí. El nivel Trial Order publicado es un rollo estándar. Confirme medida, color, empaque y transporte en la cotización antes del pago.",
    },
    {
      question: "¿Vishomecarpet puede fabricar medidas o empaque OEM?",
      answer: "Hay opciones de medidas y empaque personalizados, sujetas a revisión técnica, cantidad y confirmación escrita en la oferta del proyecto.",
    },
  ];
}

function pageFaqs(page: CountryMarketPage) {
  return page.kind === "gold" ? goldFaqs(page) : commercialFaqs(page);
}

function supportingApplicationLinks(page: CountryMarketPage) {
  if (page.kind === "gold") {
    return [
      { href: "/applications/public-space", label: "Public Space Carpet Specification", description: "Use this for public interiors where heavy-duty project planning and maintenance access matter." },
      { href: "/products/public-area/gold-mining-carpet-mat", label: "Gold Mining Carpet Mat", description: "Review the product record, available sizes and trial order options before the RFQ." },
    ];
  }

  const shared = [
    { href: "/applications/office", label: "Office Carpet Specification", description: "Useful for workstations, phased refurbishment and rolling-chair areas." },
    { href: "/applications/hotel-corridor", label: "Hotel Corridor Carpet Support", description: "Useful for luggage-wheel wear, long visual runs and replacement planning." },
    { href: "/applications/hotel-guestroom", label: "Hotel Guestroom Carpet Support", description: "Useful where comfort, acoustic feel and room coordination matter." },
  ];

  if (page.countryName === "Singapore") {
    return [
      { href: "/solutions/hotel-hospitality", label: "Hotel & Hospitality Solution", description: "Use this for casino-adjacent, hospitality and public interior project planning." },
      { href: "/applications/hotel-corridor", label: "Hotel Corridor Carpet Support", description: "Useful for long runs, luggage traffic and maintenance planning." },
      { href: "/applications/public-space", label: "Public Space Carpet Specification", description: "Useful for lobby, event and shared interior circulation areas." },
    ];
  }

  return shared;
}

function supportingGuideLinks(page: CountryMarketPage) {
  if (page.kind === "gold") {
    if (page.market === "au") {
      return [
        { href: "/blog/gold-mining-carpet-mat-australia-fine-gold-recovery", label: "Australia Gold Mining Carpet Guide", description: "Buyer questions about sluice width, fine-gold recovery and roll planning." },
        { href: "/blog/sluice-carpet-miners-moss-vortex-mat-gold-recovery-guide", label: "Gold Recovery Matting Guide", description: "Compare sluice carpet, miners moss and vortex matting by recovery and cleanup." },
      ];
    }
    if (page.market === "kz") {
      return [
        { href: "/blog/gold-mining-carpet-kazakhstan-fine-gold-recovery-guide", label: "Kazakhstan Gold Mining Carpet Guide", description: "A practical gold-recovery guide for Kazakhstan buyers and distributors." },
        { href: "/blog/sluice-carpet-miners-moss-vortex-mat-gold-recovery-guide", label: "Gold Recovery Matting Guide", description: "Compare recovery behavior, cleanup and bulk-buyer quality testing." },
      ];
    }
    return [
      { href: "/blog/sluice-carpet-miners-moss-vortex-mat-gold-recovery-guide", label: "Gold Recovery Matting Guide", description: "Compare sluice carpet, miners moss and vortex matting for fine-gold recovery." },
      { href: "/blog/gold-mining-carpet-kazakhstan-fine-gold-recovery-guide", label: "Gold Mining Carpet Buying Guide", description: "Use this for roll planning, clean-out logic and sample testing." },
    ];
  }

  if (page.market === "ro") {
    return [
      { href: "/blog/office-carpet-tiles-romania-chair-wheel-replacement-guide", label: "Romania Office Carpet Guide", description: "Chair-wheel wear, phased replacement and spare tile planning." },
      { href: "/blog/office-carpet-tiles-vs-hard-flooring-guide", label: "Carpet Tiles vs Hard Flooring", description: "A useful comparison when buyers are weighing maintenance and noise." },
    ];
  }
  if (page.market === "ca") {
    return [
      { href: "/blog/office-carpet-tiles-canada-phased-renovation-reddit-guide", label: "Canada Office Carpet Guide", description: "Winter moisture, phased renovation and spare-stock planning." },
      { href: "/blog/carpet-tiles-vs-broadloom-commercial-projects-guide", label: "Carpet Tiles vs Broadloom", description: "Buyer-level comparison of maintenance, replacement and quotation risk." },
    ];
  }
  if (page.market === "ph") {
    return [
      { href: "/blog/hotel-carpet-philippines-pattern-stain-maintenance-guide", label: "Philippines Hotel Carpet Guide", description: "Pattern, stain maintenance and humid-market procurement issues." },
      { href: "/blog/hotel-carpet-supplier-checklist-guide", label: "Hotel Carpet Supplier Checklist", description: "A buyer checklist for samples, lead time, MOQ and technical documents." },
    ];
  }
  if (page.market === "sg") {
    return [
      { href: "/blog/casino-carpet-singapore-gaming-floor-buying-guide", label: "Singapore Casino Carpet Guide", description: "Gaming-floor specification, traffic and design continuity." },
      { href: "/blog/singapore-casino-carpet-procurement-checklist", label: "Singapore Casino Carpet Checklist", description: "RFQ questions for casino and hospitality procurement teams." },
    ];
  }
  return [
    { href: "/blog/carpet-tiles-vs-broadloom-commercial-projects-guide", label: "Carpet Tiles vs Broadloom", description: "A buying guide for offices, hotels and corridors." },
    { href: "/blog/commercial-carpet-tile-moq-guide", label: "Commercial Carpet MOQ Guide", description: "How to plan samples, trial orders and project MOQ." },
  ];
}

export function countryMarketMetadata(page: CountryMarketPage): Metadata {
  const hero = products.find((product) => product.id === page.primaryProductId);
  const fallback = defaultPath(page);

  return {
    title: page.metadataTitle,
    description: page.metadataDescription,
    alternates: {
      canonical: absoluteUrl(page.path),
      languages: {
        [page.hreflang]: absoluteUrl(page.path),
        en: absoluteUrl(fallback),
        "x-default": absoluteUrl(fallback),
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: page.metadataTitle,
      description: page.metadataDescription,
      url: absoluteUrl(page.path),
      type: "website",
      locale: page.openGraphLocale,
      images: hero ? [{ url: absoluteUrl(hero.image), alt: page.title }] : undefined,
    },
  };
}

export default function CountryMarketLandingPage({ page }: { page: CountryMarketPage }) {
  const resolvedProducts = resolveProducts(page);
  const heroProduct = resolvedProducts[0];
  const faqs = pageFaqs(page);
  const quoteProduct = page.kind === "gold" ? `Gold mining carpet mat - ${page.countryName}` : `Commercial carpet project - ${page.countryName}`;
  const quoteHref = `/contact?product=${encodeURIComponent(quoteProduct)}&country=${encodeURIComponent(page.countryName)}#quote-form`;
  const emailHref = `mailto:${brandInfo.email}?subject=${encodeURIComponent(`Vishomecarpet ${quoteProduct} inquiry`)}`;

  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(page.path)}#webpage`,
    url: absoluteUrl(page.path),
    name: page.metadataTitle,
    description: page.metadataDescription,
    inLanguage: page.language,
    dateModified: UPDATED_DATE,
    primaryImageOfPage: heroProduct
      ? { "@type": "ImageObject", url: absoluteUrl(heroProduct.image) }
      : undefined,
    about: resolvedProducts.map((product) => ({
      "@type": "Thing",
      name: product.name,
      url: absoluteUrl(productPath(product.id)),
      description: product.description,
    })),
    publisher: {
      "@type": "Organization",
      name: brandInfo.name,
      url: brandInfo.url,
      email: brandInfo.email,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Vishomecarpet", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Global Markets", item: absoluteUrl("/markets") },
      { "@type": "ListItem", position: 3, name: page.countryName, item: absoluteUrl(page.path) },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: page.language,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${page.countryName} project product shortlist`,
    itemListElement: resolvedProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(productPath(product.id)),
      name: product.name,
    })),
  };

  const takeaways = page.kind === "gold"
    ? [
        "Confirm sluice width, available mat thickness and retention system before selecting a roll.",
        "Test a cut sample or trial roll in the actual equipment; recovery cannot be guaranteed by the mat alone.",
        "Define quantity, dimensions, backing and destination before comparing freight.",
        "Keep the final quoted construction, color and packaging in the purchase record.",
      ]
    : [
        `Select by application and traffic in ${page.countryName}, not by colour alone.`,
        "Approve both the visual sample and the quoted backing or construction.",
        "Confirm mandatory project documents before production, because requirements differ by tender.",
        "Compare freight using final roll or pallet data and the actual destination.",
      ];

  const commonMistakes = page.kind === "gold"
    ? [
        "Ordering by a generic product photo without confirming thickness and coil structure.",
        "Assuming one mat produces the same recovery result in every sluice and feed condition.",
        "Ignoring cleaning access, riffle clearance or the effect of clay-rich material.",
        "Comparing roll prices without matching dimensions, backing and freight volume.",
      ]
    : [
        "Using one carpet specification for guestrooms, corridors, offices and entrances without checking traffic differences.",
        "Approving colour but not recording fibre, backing, pile weight and ordered construction.",
        "Booking installation before the substrate, storage and acclimation conditions are ready.",
        "Requesting freight from area alone without a confirmed packing plan and delivery stage.",
      ];

  return (
    <article lang={page.language} className="min-h-screen bg-white text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(webpageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(itemListJsonLd) }} />

      <section className="relative flex min-h-[620px] items-end overflow-hidden bg-primary text-white">
        <div className="absolute inset-0">
          <ProductImage
            src={heroProduct?.image || "/images/hero-home.webp"}
            alt={page.title}
            className="h-full w-full"
            fit="cover"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-primary/65" />
        <div className="container-fox relative z-10 w-full pb-32 pt-28 sm:pb-16 md:pb-20">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold text-white/65" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Vishomecarpet</Link>
            <span>/</span>
            <Link href="/markets" className="hover:text-white">Global Markets</Link>
            <span>/</span>
            <span>{page.countryNameLocal}</span>
          </nav>
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.14em] text-accent">
            {page.kind === "gold" ? "Gold recovery mat sourcing" : "Commercial carpet project sourcing"} · {page.countryNameLocal}
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">{page.title}</h1>
            <p className="mt-6 max-w-3xl text-base font-semibold leading-8 text-white/85 md:text-lg">{page.directAnswer}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={quoteHref} data-track-event="country_market_quote_click" className="btn-fox-orange text-center">
                Request project quotation
              </Link>
              <Link href="/request-sample-box" data-track-event="request_sample_box_click" className="btn-fox-outline border-white/45 text-center text-white hover:border-accent">
                Request sample
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-12" data-funnel-section="country_market_answer">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Direct answer</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">What should a buyer confirm first?</h2>
            <p className="mt-5 leading-8 text-muted">{page.marketContext}</p>
          </div>
          <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {takeaways.map((item) => (
              <li key={item} className="bg-white p-5 text-sm font-bold leading-6">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding" data-funnel-section="country_market_products">
        <div className="container-fox">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Verified product records</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
            {page.kind === "gold" ? "Gold recovery mat specification" : "Project carpet options to compare"}
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-muted">
            The values below come from the current Vishomecarpet product records. Final colour, construction, documentation,
            packing and commercial terms must match the written quotation.
          </p>

          <div className={`mt-10 grid gap-6 ${resolvedProducts.length > 1 ? "lg:grid-cols-3" : "max-w-2xl"}`}>
            {resolvedProducts.map((product, index) => (
              <Link key={product.id} href={productPath(product.id)} className="group overflow-hidden rounded-md border border-border bg-white transition hover:border-accent hover:shadow-xl">
                <ProductImage
                  src={product.image}
                  alt={product.imageAlt || product.name}
                  className="aspect-[4/3] w-full bg-surface"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="p-6">
                  <p className="text-xs font-black text-accent">0{index + 1}</p>
                  <h3 className="mt-3 text-lg font-black leading-snug group-hover:text-accent">{product.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 overflow-x-auto border border-border">
            <table className="min-w-[900px] w-full border-collapse text-left text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-4 font-black">Product</th>
                  <th className="p-4 font-black">Material</th>
                  <th className="p-4 font-black">Size / format</th>
                  <th className="p-4 font-black">Sample</th>
                  <th className="p-4 font-black">Trial order</th>
                  <th className="p-4 font-black">Project MOQ</th>
                  <th className="p-4 font-black">Production lead time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {resolvedProducts.map((product) => (
                  <tr key={product.id} className="align-top">
                    <td className="p-4 font-black"><Link href={productPath(product.id)} className="hover:text-accent">{product.name}</Link></td>
                    <td className="p-4 text-muted">{product.spec.material}</td>
                    <td className="p-4 text-muted">{product.spec.size}</td>
                    <td className="p-4 text-muted">{product.moqTiers.sample}</td>
                    <td className="p-4 text-muted">{product.moqTiers.trialOrder}</td>
                    <td className="p-4 text-muted">{product.moqTiers.project}</td>
                    <td className="p-4 text-muted">{product.leadTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Local project planning</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Conditions that affect the specification</h2>
            <div className="mt-8 space-y-7">
              <div className="border-l-2 border-accent pl-5">
                <h3 className="font-black">Environment and installation</h3>
                <p className="mt-2 leading-7 text-muted">{page.environmentNote}</p>
              </div>
              <div className="border-l-2 border-accent pl-5">
                <h3 className="font-black">Packing and delivery</h3>
                <p className="mt-2 leading-7 text-muted">{page.deliveryNote}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Typical applications</p>
            <div className="mt-8 grid grid-cols-2 gap-px border border-border bg-border">
              {page.applications.map((application) => (
                <p key={application} className="bg-white p-5 text-sm font-black leading-6">{application}</p>
              ))}
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <h3 className="font-black">Local search terminology</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{page.localTerms.join(" · ")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox grid gap-6 lg:grid-cols-3">
          <div className="rounded-md border border-border bg-white p-6 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Who we serve</p>
            <h2 className="mt-3 text-2xl font-black leading-tight">Project buyers, contractors and distributors</h2>
            <p className="mt-4 leading-7 text-muted">
              Vishomecarpet supports import-capable project buyers, flooring contractors, fit-out teams and distributors who need a manufacturer-exporter partner for commercial carpet projects in {page.countryName}.
            </p>
          </div>
          <div className="rounded-md border border-border bg-white p-6 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Supply scope</p>
            <h2 className="mt-3 text-2xl font-black leading-tight">China manufacturer, samples and export delivery</h2>
            <p className="mt-4 leading-7 text-muted">
              Supply scope includes verified product records, samples or trial orders where published, technical data for review, project quantities and export delivery. Local installation and removal are normally handled by the buyer&apos;s local contractor unless a verified arrangement exists.
            </p>
          </div>
          <div className="rounded-md border border-border bg-white p-6 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">What to send for a quote</p>
            <h2 className="mt-3 text-2xl font-black leading-tight">Country, application, quantity and timing</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              <li>Country and city</li>
              <li>Application and project type</li>
              <li>Estimated area or quantity</li>
              <li>Target delivery date</li>
              <li>Sample and technical document requirements</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Supporting application pages</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Route this market to the right application page</h2>
            <div className="mt-8 grid gap-4">
              {supportingApplicationLinks(page).map((link) => (
                <Link key={link.href} href={link.href} className="block rounded-md border border-border bg-white p-5 transition hover:border-accent hover:shadow-md">
                  <h3 className="text-base font-black leading-snug text-primary">{link.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Supporting guides</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Buyer questions and decision guides</h2>
            <div className="mt-8 grid gap-4">
              {supportingGuideLinks(page).map((link) => (
                <Link key={link.href} href={link.href} className="block rounded-md border border-border bg-white p-5 transition hover:border-accent hover:shadow-md">
                  <h3 className="text-base font-black leading-snug text-primary">{link.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-fox grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Buyer risk check</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Common sourcing mistakes</h2>
          </div>
          <ol className="grid gap-px bg-white/15 sm:grid-cols-2">
            {commonMistakes.map((mistake, index) => (
              <li key={mistake} className="bg-primary-light p-6">
                <span className="text-xs font-black text-accent">0{index + 1}</span>
                <p className="mt-3 text-sm font-bold leading-7 text-white/90">{mistake}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding" data-funnel-section="country_market_faq">
        <div className="container-fox max-w-5xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.14em] text-accent">Answer-first buyer FAQ</p>
          <h2 className="mt-3 text-center text-3xl font-black md:text-4xl">Questions to resolve before ordering</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-black marker:hidden">{faq.question}</summary>
                <p className="mt-4 max-w-4xl leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-10">
        <div className="container-fox grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Content and evidence record</p>
            <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
              <div><dt className="font-black">Published by</dt><dd className="mt-1 text-muted">{brandInfo.name}</dd></div>
              <div><dt className="font-black">Last reviewed</dt><dd className="mt-1 text-muted">August 2, 2026</dd></div>
              <div><dt className="font-black">Product facts</dt><dd className="mt-1 text-muted">Current Vishomecarpet product records linked above</dd></div>
              <div><dt className="font-black">Limitations</dt><dd className="mt-1 text-muted">Final compliance, freight and installation are project-specific</dd></div>
            </dl>
          </div>
          <nav className="flex flex-wrap gap-4 text-xs font-black uppercase tracking-[0.08em] md:max-w-56 md:flex-col" aria-label="Evidence sources">
            <Link href="/commercial-carpet-manufacturer" className="text-accent hover:text-primary">Manufacturer profile</Link>
            <Link href="/factory" className="text-accent hover:text-primary">Factory and production</Link>
            <Link href="/products" className="text-accent hover:text-primary">All product records</Link>
            <Link href="/privacy-policy" className="text-accent hover:text-primary">Privacy policy</Link>
          </nav>
        </div>
      </section>

      <section className="bg-[#102A43] py-16 text-white md:py-20" data-funnel-section="country_market_quote">
        <div className="container-fox text-center">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Project inquiry</p>
          <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
            Send the project country, application, quantity and target delivery date
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-7 text-white/75">
            Vishomecarpet will respond using the current product specification and available project information. No price,
            document or delivery promise is final until it appears in the written quotation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={quoteHref} data-track-event="country_market_quote_click" className="inline-flex min-h-13 items-center justify-center rounded-sm bg-[#d9480f] px-7 py-4 text-sm font-black text-white hover:bg-[#b83a08]">
              Open quotation form
            </Link>
            <a href={emailHref} data-track-event="email_click" className="inline-flex min-h-13 items-center justify-center rounded-sm border border-white/45 px-7 py-4 text-sm font-black text-white hover:bg-white hover:text-primary">
              {brandInfo.email}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-bold text-white/60">
            <Link href="/markets" className="hover:text-white">All country markets</Link>
            <Link href="/products/carpet-tiles" className="hover:text-white">Carpet tiles</Link>
            <Link href="/products/wall-to-wall" className="hover:text-white">Hotel broadloom</Link>
            <Link href="/products/public-area" className="hover:text-white">Public-area products</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
