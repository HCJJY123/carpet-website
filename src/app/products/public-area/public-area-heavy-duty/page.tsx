import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { absoluteUrl, productBreadcrumbJsonLd, productJsonLd, productPath, safeJsonLd } from "@/lib/seo";
import ProductImage from "@/components/ProductImage";
import AnswerFirst from "@/components/AnswerFirst";
import { BuyerReasons, ProductConversionPanel } from "@/components/ProductConversion";

const productId = "public-area-heavy-duty";
const product = products.find((prod) => prod.id === productId);
const pageImages = [
  {
    src: "/images/products/public-area/public-area-heavy-duty/01-main-public-area-heavy-duty-carpet.webp",
    alt: "High-traffic public area carpet main view",
  },
  {
    src: "/images/products/public-area/public-area-heavy-duty/02-public-area-heavy-duty-installation.webp",
    alt: "Heavy-duty public area carpet installed in a commercial space",
  },
  {
    src: "/images/products/public-area/public-area-heavy-duty/03-public-area-heavy-duty-detail.webp",
    alt: "Public area heavy-duty carpet detail view",
  },
];

const faqs = product
  ? [
      {
        q: "What makes this carpet suitable for airports and exhibition centers?",
        a: `Built with ${product.spec.material} and a ${product.technicalSpecs.backing} backing, this roll is engineered for continuous foot and luggage-wheel traffic, rated ${product.technicalSpecs.trafficClass} for extra-heavy commercial use.`
      },
      {
        q: "What is the roll width and length?",
        a: "Standard roll width is 4m. For wall-to-wall installation, roll length is typically 22-33m (about 90-130 sqm per roll). Share your floor plan and we'll confirm the cutting layout to minimize waste."
      },
      {
        q: "What is the MOQ and production lead time?",
        a: `MOQ for this style is ${product.moq}, with a production lead time of ${product.leadTime} from deposit confirmation.`
      },
      {
        q: "What fire rating does it meet?",
        a: `This carpet meets ${product.technicalSpecs.fireRating} fire rating, suitable for public-area projects such as airports, exhibition centers, and transit facilities where fire compliance is required.`
      },
      {
        q: "How long does shipping take?",
        a: "Sea freight transit is about 30 days after the vessel departs. Including customs clearance and local delivery, please allow approximately 40-45 days door to door. For smaller quantities, we can also advise on LCL (shared container) options."
      },
      {
        q: "Can you provide fire certification documents?",
        a: "We can provide ASTM E648 test reports on request. If your project requires a specific regional fire certificate, please tell us the exact standard required and we will confirm honestly whether we currently hold it or can arrange third-party testing."
      }
    ]
  : [];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a }
  }))
};

export const metadata: Metadata = product
  ? {
      title: `${product.name} | Commercial Carpet Product | VISHOME`,
      description: product.description,
      alternates: {
        canonical: productPath(product.id),
        languages: {
          en: absoluteUrl(productPath(product.id)),
          ru: absoluteUrl("/ru/products/public-area/public-area-heavy-duty"),
          "x-default": absoluteUrl(productPath(product.id)),
        },
      },
      openGraph: {
        title: `${product.name} | VISHOME`,
        description: product.description,
        url: absoluteUrl(productPath(product.id)),
        type: "website",
        images: [{ url: absoluteUrl(pageImages[0].src), alt: pageImages[0].alt }],
      },
    }
  : { title: "Commercial Carpet Product | VISHOME" };

export default function ProductDetailPage() {
  const productId = "public-area-heavy-duty";
  const p = products.find((prod) => prod.id === productId);
  if (!p) return <div>Product Not Found</div>;

  const productForJsonLd = { ...p, image: pageImages[0].src, imageAlt: pageImages[0].alt, gallery: pageImages.slice(1) };
  const jsonLd = productJsonLd(productForJsonLd);

  const productWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: p.name,
    description: p.description,
    url: absoluteUrl(productPath(p.id)),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".product-summary"],
    },
  };

  const breadcrumbJsonLd = productBreadcrumbJsonLd(productForJsonLd);

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(productWebPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
      <nav className="border-b border-border bg-surface py-3 md:py-4">
        <div className="container-fox">
          <Link href="/products" className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted hover:text-primary">
            ← Back to Products
          </Link>
        </div>
      </nav>
      <section className="py-12 md:py-20">
        <div className="container-fox">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
            <div className="lg:w-3/5">
              <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border shadow-xl md:aspect-square">
                <ProductImage src={pageImages[0].src} alt={pageImages[0].alt} className="h-full w-full object-cover" priority sizes="(max-width: 1024px) 100vw, 55vw" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                {pageImages.slice(1).map((image) => (
                  <div key={image.src} className="aspect-square overflow-hidden rounded-sm border border-border bg-white shadow-md">
                    <ProductImage src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center lg:w-2/5">
              <h1 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:mb-8 md:text-5xl">
                {p.name}
              </h1>
              <p className="product-summary mb-6 text-muted leading-relaxed">{p.description}</p>
              <div className="mb-8 space-y-4 border border-border bg-surface p-5 md:mb-10 md:p-8">
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Project MOQ</span>
                  <span className="text-right font-bold">{p.moq}</span>
                </div>
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>LEAD TIME</span>
                  <span className="text-right font-bold">{p.leadTime}</span>
                </div>
                {p.fobPrice && (
                  <div className="flex justify-between gap-6 text-xs uppercase">
                    <span>FOB PRICE</span>
                    <span className="text-right font-bold">{p.fobPrice.display}</span>
                  </div>
                )}
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Availability</span>
                  <span className="text-right font-bold">In Stock / Made to Order</span>
                </div>
              </div>
              <ProductConversionPanel product={p} />
            </div>
          </div>
        </div>
      </section>
      <AnswerFirst
        title="Is This Heavy-Duty Carpet Suitable for a High-Traffic Public Area?"
        answer="Use this roll carpet when the project requires continuous indoor coverage for busy circulation areas and the quoted construction matches the traffic, fire, subfloor, cleaning, and installation requirements. It is a stronger fit for airports, exhibition halls, transit support areas, and commercial corridors than a decorative loose rug, but approval should be based on project documents and samples rather than the product name alone."
        facts={[
          { label: "Format", value: "4 m commercial carpet roll" },
          { label: "Primary Use", value: "High-traffic indoor public circulation" },
          { label: "Planning Inputs", value: "Floor plan, roll layout, waste and installation sequence" },
          { label: "Buyer Checks", value: "Traffic, fire standard, backing, subfloor and cleaning method" },
        ]}
        moq={[
          { label: "Sample", value: p.moqTiers.sample },
          { label: "Trial Order", value: p.moqTiers.trialOrder },
          { label: "Project MOQ", value: p.moqTiers.project },
        ]}
        suitableFor={[
          "Airports, exhibition centers, commercial corridors and dry indoor circulation zones",
          "Projects requiring roll planning and continuous wall-to-wall coverage",
        ]}
        notSuitableFor={[
          "Wet, exterior or permanently damp areas without a purpose-built system",
          "Decorative feature-rug zones or projects with an unconfirmed local fire standard",
        ]}
        evidence="Product data and listed project documents were reviewed on July 31, 2026. Final traffic suitability, fire documentation, roll length, availability, price and lead time remain subject to the confirmed quotation and destination requirements."
        quoteHref="/contact?product=Public%20Area%20Heavy%20Duty%20Carpet#quote-form"
        quoteLabel="Request a Public-Area Specification"
      />
      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase tracking-[0.08em] text-primary md:mb-12 md:text-3xl md:tracking-widest">
            Technical Data Sheet (TDS)
          </h2>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(p.technicalSpecs).map(([k, v]) => (
              <div key={k} className="group bg-white p-5 transition-all hover:bg-primary md:p-8">
                <p className="mb-3 text-[10px] font-bold uppercase text-muted group-hover:text-white/50">
                  {k.replace(/([A-Z])/g, " $1").toUpperCase()}
                </p>
                <p className="text-sm font-black uppercase leading-relaxed text-primary group-hover:text-white">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-fox max-w-4xl">
          <h2 className="mb-10 text-center text-2xl font-bold uppercase tracking-[0.08em] text-primary md:text-3xl md:tracking-widest">
            Buyer FAQ
          </h2>
          <div className="space-y-5">
            {faqs.map((item) => (
              <div key={item.q} className="border border-border bg-white p-6">
                <h3 className="mb-3 text-base font-black uppercase tracking-wide text-primary">{item.q}</h3>
                <p className="leading-relaxed text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BuyerReasons product={p} />
      <section className="section-padding bg-surface">
        <div className="container-fox">
          <h2 className="mb-8 text-3xl font-black uppercase text-primary">Related Products and Buying Guides</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Public Area Carpet Collection", "/products/public-area"],
              ["Custom Hotel Broadloom", "/products/wall-to-wall"],
              ["Sculpted Wool Lobby Rug", "/products/public-area/custom-sculpted-wool-lobby-rug"],
              ["Hospitality Lifecycle Cost Guide", "/blog/hidden-cost-of-cheap-carpets-hospitality-roi-guide"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="border border-border bg-white p-6 font-black uppercase transition-colors hover:border-accent hover:text-accent">
                {label} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
