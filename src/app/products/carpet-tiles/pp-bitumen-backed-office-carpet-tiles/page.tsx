import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnswerFirst from "@/components/AnswerFirst";
import ProductImage from "@/components/ProductImage";
import ProductTrustLinks from "@/components/ProductTrustLinks";
import { BuyerReasons, ProductConversionPanel } from "@/components/ProductConversion";
import { products } from "@/lib/data";
import { absoluteUrl, productBreadcrumbJsonLd, productJsonLd, productPath, safeJsonLd } from "@/lib/seo";

const productId = "pp-bitumen-backed-office-carpet-tiles";
const product = products.find((item) => item.id === productId);
const imageBase = "/images/products/pp-bitumen-backed-office-carpet-tiles";

const galleryImages = [
  {
    src: `${imageBase}/01-hero-office-meeting-room.webp`,
    title: "Meeting Room Installation",
    alt: "Vishomecarpet PP bitumen backed office carpet tiles 50x50cm installed in a modern meeting room",
  },
  {
    src: `${imageBase}/02-blue-meeting-room-carpet-tiles.webp`,
    title: "Blue Gray Layout",
    alt: "Blue and gray PP office carpet tiles with bitumen backing in a meeting room",
  },
  {
    src: `${imageBase}/03-executive-office-carpet-tiles.webp`,
    title: "Executive Office Floor",
    alt: "Gray 50x50cm polypropylene carpet tiles for executive office flooring",
  },
  {
    src: `${imageBase}/04-open-office-lounge-carpet-tiles.webp`,
    title: "Open Office Lounge",
    alt: "Modular PP carpet tiles for open office lounge and commercial flooring projects",
  },
];

const faqs = [
  {
    question: "Are these PP bitumen backed carpet tiles suitable for commercial offices?",
    answer: "Yes. They are positioned for offices, meeting rooms, home offices, retail spaces, corridors, and light-to-medium commercial interiors. Final suitability should be confirmed against traffic level, chair-caster use, fire rating, backing, adhesive, and maintenance requirements.",
  },
  {
    question: "What size are the office carpet tiles?",
    answer: "The standard modular size is 50x50cm. This format supports flexible installation patterns, selective tile replacement, carton-based logistics, and easier maintenance planning for B2B projects.",
  },
  {
    question: "What is the backing construction?",
    answer: "This product uses bitumen backing. Bitumen backed carpet tiles are commonly selected for dimensional stability, practical commercial installation, and replacement-friendly office flooring projects.",
  },
  {
    question: "Can Vishomecarpet support OEM colors or project packaging?",
    answer: "Yes. OEM color coordination, carton marks, project packing, samples, and specification confirmation can be discussed before quotation. Buyers should provide quantity, destination, preferred color direction, and required test standards.",
  },
];

const procurementGuideLinks = [
  {
    title: "Commercial carpet tile backing comparison",
    href: "/blog/commercial-carpet-tile-backing-comparison-guide",
    text: "Compare bitumen, PVC-free PE, and cushion-backed systems before approving a tile specification or RFQ.",
  },
  {
    title: "Commercial carpet tile MOQ guide",
    href: "/blog/commercial-carpet-tile-moq-sample-trial-project-guide",
    text: "Check sample, trial-order, and project MOQ logic before comparing square-metre prices.",
  },
];

export const metadata: Metadata = product
  ? {
      title: "PP Bitumen Backed Office Carpet Tiles 50x50cm | Vishomecarpet",
      description:
        "Source 100% PP fiber bitumen backed office carpet tiles 50x50cm from Vishomecarpet for commercial offices, meeting rooms, home offices and OEM flooring projects.",
      alternates: { canonical: productPath(product.id) },
      openGraph: {
        title: "PP Bitumen Backed Office Carpet Tiles 50x50cm | Vishomecarpet",
        description: product.description,
        url: absoluteUrl(productPath(product.id)),
        type: "website",
        images: [{ url: absoluteUrl(product.image), alt: product.imageAlt || product.name }],
      },
      twitter: {
        card: "summary_large_image",
        title: "PP Bitumen Backed Office Carpet Tiles 50x50cm | Vishomecarpet",
        description: product.description,
        images: [absoluteUrl(product.image)],
      },
    }
  : { title: "PP Bitumen Backed Office Carpet Tiles | Vishomecarpet" };

export default function Page() {
  if (!product) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd(product)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productBreadcrumbJsonLd(product)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />

      <nav className="border-b border-border bg-surface py-3 md:py-4">
        <div className="container-fox">
          <Link href="/products/carpet-tiles" className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted hover:text-primary">
            Back to Carpet Tiles
          </Link>
        </div>
      </nav>

      <section className="py-12 md:py-20">
        <div className="container-fox grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-16">
          <div>
            <div className="aspect-[4/3] overflow-hidden border border-border bg-surface shadow-xl">
              <ProductImage src={galleryImages[0].src} alt={galleryImages[0].alt} className="h-full w-full" priority sizes="(max-width: 1024px) 100vw, 55vw" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
              {galleryImages.slice(1).map((item) => (
                <div key={item.src} className="aspect-[4/3] overflow-hidden border border-border bg-surface">
                  <ProductImage src={item.src} alt={item.alt} className="h-full w-full" sizes="(max-width: 768px) 33vw, 18vw" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-accent">Vishomecarpet OEM Factory Supply</p>
            <h1 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">{product.name}</h1>
            <p className="product-summary mb-8 text-base leading-relaxed text-muted md:text-lg">{product.longDescription}</p>
            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div key={feature} className="border border-border bg-surface px-4 py-3 text-xs font-bold uppercase leading-relaxed text-primary">
                  {feature}
                </div>
              ))}
            </div>
            <ProductConversionPanel product={product} />
          </div>
        </div>
      </section>

      <AnswerFirst
        eyebrow="Office Carpet Tile Buying Answer"
        title="When Should Buyers Choose PP Bitumen Backed Office Carpet Tiles?"
        answer="Choose PP bitumen backed office carpet tiles when the project needs a practical 50x50cm modular floor, controlled square-meter cost, replaceable maintenance, and OEM-friendly commercial supply. Confirm the exact fiber, backing, color, traffic level, fire requirement, adhesive system, and project MOQ before comparing quotations."
        facts={[
          { label: "Fiber", value: product.spec.material },
          { label: "Tile Size", value: product.spec.size },
          { label: "Backing", value: product.technicalSpecs.backing },
          { label: "Project MOQ", value: product.moqTiers.project },
        ]}
        moq={[
          { label: "Sample", value: product.moqTiers.sample },
          { label: "Trial Order", value: product.moqTiers.trialOrder },
          { label: "Project MOQ", value: product.moqTiers.project },
        ]}
        suitableFor={[
          "Office and meeting room renovation projects",
          "Budget-conscious commercial carpet tile programs",
          "OEM color and carton-based distributor orders",
        ]}
        notSuitableFor={[
          "Luxury wool or Axminster hospitality corridors",
          "Wet areas or rooms requiring resilient clinical flooring",
          "Projects that require nylon-only Class 33 construction",
        ]}
        evidence="Specifications, price range, MOQ, fire rating, and availability must be verified against the final construction, color, backing, and test documents quoted by Vishomecarpet."
        quoteHref={`/contact?product=${encodeURIComponent(product.name)}#quote-form`}
      />

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-accent">Technical Specification</p>
            <h2 className="mb-8 text-2xl font-black uppercase text-primary md:text-4xl">Confirm Construction Before Ordering</h2>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {Object.entries(product.technicalSpecs).map(([key, value]) => (
                <div key={key} className="bg-white p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.08em] text-muted">{key.replace(/([A-Z])/g, " $1")}</p>
                  <p className="text-sm font-bold leading-relaxed text-primary">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-accent">Procurement Notes</p>
            <h2 className="mb-8 text-2xl font-black uppercase text-primary md:text-4xl">Good Fit For These Orders</h2>
            <div className="border border-border bg-white">
              {[
                "Office renovation projects needing modular 50x50cm carpet squares.",
                "Buyers comparing PP carpet tiles against nylon carpet tiles by budget and traffic level.",
                "Distributors or contractors needing samples, cartons, OEM colors, and export packing.",
                "Meeting room, home office, retail, and corridor floors where selective replacement is useful.",
              ].map((item, index) => (
                <div key={item} className="flex gap-4 border-b border-border p-5 last:border-b-0">
                  <span className="font-mono text-sm font-black text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm font-semibold leading-relaxed text-primary">{item}</p>
                </div>
              ))}
            </div>
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}#quote-form`}
              className="mt-6 flex min-h-12 items-center justify-center bg-[#d9480f] px-6 py-4 text-center text-xs font-black uppercase tracking-[0.08em] text-white hover:bg-[#b83a08]"
            >
              Request Project Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-accent">Product Views</p>
            <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">Office Carpet Tile Application Gallery</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {galleryImages.map((item) => (
              <figure key={item.src} className="border border-border bg-white">
                <div className="aspect-[4/3] overflow-hidden bg-surface">
                  <ProductImage src={item.src} alt={item.alt} className="h-full w-full" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <figcaption className="px-5 py-4 text-xs font-black uppercase tracking-[0.12em] text-primary">{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-surface">
        <div className="container-fox max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-black uppercase text-primary md:text-4xl">Buyer FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.question} className="border border-border bg-white p-6">
                <summary className="cursor-pointer font-black text-primary">{item.question}</summary>
                <p className="mt-4 leading-relaxed text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-fox max-w-5xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-accent">AI-Ready Procurement Links</p>
          <h2 className="mb-8 text-3xl font-black uppercase text-primary md:text-4xl">Compare Backing Before Quotation</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {procurementGuideLinks.map((item) => (
              <Link key={item.href} href={item.href} className="border border-border bg-surface p-6 transition-colors hover:border-accent hover:bg-white">
                <span className="block text-sm font-black uppercase leading-snug text-primary">{item.title}</span>
                <span className="mt-3 block text-sm leading-6 text-muted">{item.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProductTrustLinks productName="PP bitumen backed office carpet tiles" quoteHref={`/contact?product=${encodeURIComponent(product.name)}#quote-form`} />

      <BuyerReasons product={product} />
    </div>
  );
}
