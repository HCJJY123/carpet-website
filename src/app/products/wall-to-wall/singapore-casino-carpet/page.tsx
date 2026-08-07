import type { Metadata } from "next";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { BuyerReasons, ProductConversionPanel, ProductSpecCards } from "@/components/ProductConversion";
import { products } from "@/lib/data";
import { absoluteUrl, productBreadcrumbJsonLd, productJsonLd, productPath, safeJsonLd } from "@/lib/seo";

const product = products.find((item) => item.id === "singapore-casino-carpet")!;
const path = productPath(product.id);
const images = product.gallery ?? [{ src: product.image, alt: product.imageAlt || product.name }];

const faqs = [
  {
    question: "What is the best carpet type for a casino project in Singapore?",
    answer: "A Singapore casino carpet should be specified around continuous foot traffic, visual soil-hiding, pattern approval, backing stability, cleaning access, sample timing, and the fire or technical documents required by the project. Vishomecarpet can quote a custom oriental flower luxury casino carpet after reviewing area, pattern, backing, delivery address, and sample requirements.",
  },
  {
    question: "Can the casino carpet pattern and colors be customized?",
    answer: "Yes. Oriental flower pattern scale, gold accent direction, logo-related artwork, border effects, grey or beige colorways, and OEM packing can be reviewed. Bulk production should start only after the buyer approves the sample or strike-off.",
  },
  {
    question: "Is this product only for gaming floors?",
    answer: "No. It can also be reviewed for hotel entertainment zones, VIP rooms, clubs, lounges, lift lobbies, gaming corridors, and connected public areas where a casino-style commercial carpet is needed.",
  },
  {
    question: "What information should a Singapore buyer send for quotation?",
    answer: "Send the Singapore project location, total square meters, application zone, pattern reference, preferred backing, sample request, delivery floor or loading limit, target schedule, and any required technical document list. This allows Vishomecarpet to quote the correct construction, sample plan, packing method and freight basis rather than a generic carpet price.",
  },
  {
    question: "Can Vishomecarpet ship samples or project orders to Singapore?",
    answer: "Yes. For samples, the buyer should confirm sample size, courier address, contact phone and required arrival date. For project orders, Vishomecarpet should confirm packing dimensions, roll or pallet plan, gross weight, loading access, delivery stage and trade terms before freight is compared.",
  },
];

const specificationRows = [
  ["Primary search intent", "Singapore casino carpet supplier for custom oriental flower gaming floor and hotel entertainment projects"],
  ["Recommended buyer", "Casino developers, hospitality designers, flooring contractors, procurement teams and distributors"],
  ["High-intent buyer questions", "Price per SQM, sample speed, Singapore shipping, MOQ, backing, pattern approval and delivery schedule"],
  ["Main construction", product.technicalSpecs.yarnSystem],
  ["Backing", product.technicalSpecs.backing],
  ["Design approval", "Pattern artwork, color direction and sample approval before project production"],
  ["Quotation basis", "Area, pattern, backing, packing, delivery schedule and required documents"],
];

const relatedLinks = [
  { label: "Singapore Casino Carpet Supplier", href: "/sg/singapore-casino-carpet-supplier" },
  { label: "Casino Carpet Solution", href: "/solutions/casino-carpet-supplier" },
  { label: "Wall-to-Wall Carpets", href: "/products/wall-to-wall" },
  { label: "Request Quote", href: `/contact?product=${encodeURIComponent(product.name)}#quote-form` },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export const metadata: Metadata = {
  title: "Custom Oriental Flower Casino Carpet Singapore | Vishomecarpet",
  description: "Custom oriental flower luxury casino carpet for Singapore gaming floors, VIP rooms, clubs and hotel entertainment zones. OEM pattern support, samples and quote.",
  alternates: { canonical: absoluteUrl(path) },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Custom Oriental Flower Casino Carpet Singapore | Vishomecarpet",
    description: "Custom casino carpet for Singapore gaming floors, VIP rooms and hospitality entertainment projects.",
    url: absoluteUrl(path),
    type: "website",
    images: [{ url: absoluteUrl(product.image), alt: product.imageAlt || product.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Oriental Flower Casino Carpet Singapore",
    description: "Made-to-order casino carpet with oriental flower pattern, OEM support and project quotation support.",
    images: [absoluteUrl(product.image)],
  },
};

export default function SingaporeCasinoCarpetPage() {
  return (
    <main className="min-h-screen bg-white text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd(product)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productBreadcrumbJsonLd(product)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />

      <nav aria-label="Breadcrumb" className="border-b border-border bg-white">
        <ol className="container-fox flex flex-wrap gap-2 py-5 text-xs font-bold uppercase tracking-widest text-muted">
          <li><Link href="/">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/products">Products</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/products/wall-to-wall">Wall-to-Wall Carpets</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary">Oriental Flower Casino Carpet</li>
        </ol>
      </nav>

      <section className="border-b border-border bg-slate-50 py-14 md:py-22">
        <div className="container-fox grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-4">
            <ProductImage
              src={images[0].src}
              alt={images[0].alt}
              className="aspect-square w-full border-8 border-white bg-white shadow-2xl"
              priority
              quality={86}
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
            <div className="grid grid-cols-3 gap-4">
              {images.slice(1, 4).map((image) => (
                <ProductImage key={image.src} src={image.src} alt={image.alt} className="aspect-square w-full border border-border bg-white shadow-sm" sizes="(max-width: 1024px) 33vw, 16vw" />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-accent">Singapore casino carpet supplier</p>
            <h1 className="text-4xl font-black uppercase leading-tight md:text-6xl">Custom Oriental Flower Casino Carpet for Singapore Gaming Floors</h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Answer first: a casino carpet for Singapore should be selected by traffic, visual soil control, sample approval speed, backing stability, cleaning plan, delivery access and project documents, not by pattern alone. Vishomecarpet supplies custom oriental flower luxury casino carpet with OEM pattern support for gaming floors, VIP rooms, clubs and hotel entertainment spaces.
            </p>
            <div className="mt-8">
              <ProductSpecCards product={product} />
            </div>
            <div className="mt-8">
              <ProductConversionPanel product={product} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" data-funnel-section="singapore_casino_specification">
        <div className="container-fox grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-accent">AEO / AI-readable buying answer</p>
            <h2 className="text-3xl font-black uppercase leading-tight md:text-5xl">How to Specify Casino Carpet for Singapore Projects</h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-muted">
              <p>For a Singapore casino carpet project, start with the area schedule: gaming floor, slot area, VIP room, lift lobby, corridor, club, or hotel entertainment zone. Each space may need a different pattern scale, backing, seam plan, cleaning access, replacement reserve and delivery stage.</p>
              <p>High-quality B2B buyers usually ask first about price per SQM, sample lead time, shipping to Singapore, MOQ, exact quantity, backing, pattern approval, and whether the supplier can support distributors or installation teams. This page is structured around those purchasing questions.</p>
              <p>This product is positioned for buyers who want a custom casino carpet supplier rather than a stock decorative floor covering. The oriental flower, beige, grey, charcoal and gold visual direction can be adjusted for interior concepts, while the final construction is confirmed through sample approval and written quotation.</p>
              <p>Vishomecarpet can support Singapore procurement teams with sample discussion, OEM pattern review, packing information and export supply. Final fire, antistatic, backing and installation requirements should be checked against the project specification before ordering.</p>
            </div>
          </div>
          <div className="overflow-x-auto border border-border bg-white">
            <table className="min-w-[680px] w-full border-collapse text-left text-sm">
              <tbody className="divide-y divide-border">
                {specificationRows.map(([label, value]) => (
                  <tr key={label} className="align-top">
                    <th className="w-56 bg-primary px-5 py-4 text-xs font-black uppercase tracking-[0.08em] text-white">{label}</th>
                    <td className="px-5 py-4 leading-7 text-muted">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <div className="mb-10 max-w-4xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-accent">Product gallery</p>
            <h2 className="text-3xl font-black uppercase leading-tight md:text-5xl">Casino Carpet Images, Backing and OEM Details</h2>
            <p className="mt-5 leading-8 text-muted">The gallery keeps the provided casino carpet visuals in one product record: artistic pattern options, gaming floor scenes, non-slip backing details, loop pile close-ups, OEM support and source-factory supply views. All product text is presented under the Vishomecarpet brand.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {images.slice(4).map((image) => (
              <figure key={image.src} className="border border-border bg-white p-3 shadow-sm">
                <ProductImage src={image.src} alt={image.alt} className="aspect-square w-full bg-surface" sizes="(max-width: 768px) 100vw, 33vw" fit="contain" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" data-funnel-section="casino_carpet_quote_requirements">
        <div className="container-fox grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-accent">RFQ checklist</p>
            <h2 className="text-3xl font-black uppercase leading-tight md:text-5xl">What to Send for a Fast Casino Carpet Quote</h2>
            <p className="mt-5 leading-8 text-muted">A useful Singapore casino carpet RFQ should include total area, application zone, oriental flower or custom pattern reference, target opening schedule, sample requirement, backing preference, Singapore delivery address, delivery floor, loading restrictions and required documentation. This helps avoid a generic quote that does not match the gaming floor use case.</p>
          </div>
          <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {["Singapore project address and contact phone", "Gaming floor, VIP room, club or corridor area", "Total SQM, room schedule and floor plan", "Pattern artwork or reference image", "Backing, cleaning and installation preference", "Sample deadline, packing plan and delivery floor"].map((item) => (
              <li key={item} className="bg-white p-5 text-sm font-black leading-6">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox max-w-5xl">
          <h2 className="mb-10 text-3xl font-black uppercase text-primary md:text-5xl">Singapore Casino Carpet FAQ</h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {faqs.map((item) => (
              <details key={item.question} className="border border-border bg-white p-6">
                <summary className="cursor-pointer font-black text-primary">{item.question}</summary>
                <p className="mt-4 leading-7 text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BuyerReasons product={product} />

      <section className="py-20">
        <div className="container-fox">
          <div className="bg-primary p-8 text-white md:p-10">
            <h2 className="text-2xl font-black uppercase md:text-4xl">Request Singapore Casino Carpet Specification Support</h2>
            <p className="mt-4 max-w-3xl leading-8 text-white/75">Send your area, oriental flower or custom pattern reference, sample request, Singapore delivery details and target delivery schedule. Vishomecarpet will confirm the suitable construction, MOQ, packing and written quotation.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} className="btn-fox-orange !text-xs !tracking-[0.16em]">{item.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
