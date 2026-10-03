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
const galleryTitles = ["Striped Carpet Tile Product View", "Alternating Tile Directions", "Lounge Application View", "Office Application View"];
const galleryImages = (product?.gallery ?? []).map((image, index) => ({ ...image, title: galleryTitles[index] }));

const faqs = [
  {
    question: "Are PP, nylon and polyester blended together?",
    answer: "Not simply because several names appear in a listing. The selected configuration must state its composition. Evaluate a nylon or polyester alternative separately rather than relabeling the PP proposal.",
  },
  {
    question: "Can I select a different backing?",
    answer: "Discuss alternatives through the 50x50 carpet tile options page linked below. A different backing is a different configuration that needs its own sample and specification review.",
  },
  {
    question: "Does loop pile establish the manufacturing method?",
    answer: "Loop pile describes the surface structure. It does not by itself prove a particular weaving or other manufacturing process. Request the construction record where that distinction matters.",
  },
  {
    question: "Are the tiles washable, antimicrobial or approved for outdoor use?",
    answer: "No such blanket promise is made here. Request the maintenance instructions and evidence for any specific performance requirement before including it in the project specification.",
  },
  {
    question: "How much replacement stock should be retained?",
    answer: "Agree it with the buyer and installer based on maintenance needs, layout and the replacement strategy. Do not apply an unexplained universal percentage or count the same material as both cutting allowance and spare stock.",
  },
  {
    question: "What should be included in an RFQ?",
    answer: "Provide the country and destination, application, approximate area by zone, selected color and configuration, layout preference, sample requirements, technical-document needs and target receiving date. State whether quantities are preliminary or approved.",
  },
];

const procurementGuideLinks = [
  {
    title: "Commercial carpet tile RFQ checklist",
    href: "/blog/commercial-carpet-tile-rfq-checklist-b2b-buyers",
    text: "Connect area, tile direction, packing and retained replacement stock before comparing project quotations.",
  },
  {
    title: "Hotel carpet procurement documents",
    href: "/blog/hotel-carpet-procurement-documents-checklist",
    text: "Separate sample appearance approval from construction-specific performance evidence for hotel zones.",
  },
  {
    title: "50x50 carpet tile configuration options",
    href: "/products/carpet-tiles/50x50-nylon-pp-office-carpet-tiles",
    text: "Evaluate a different fiber or backing as a separate configuration, with its own sample and specification review.",
  },
  {
    title: "Commercial carpet tile backing comparison",
    href: "/blog/commercial-carpet-tile-backing-comparison-guide",
    text: "Compare bitumen, PVC-free PE, and cushion-backed systems before approving a tile specification or RFQ.",
  },
  {
    title: "Fire rating and VOC document guide",
    href: "/blog/commercial-carpet-tile-fire-rating-voc-documents-guide",
    text: "Check fire-performance references, low-VOC expectations, adhesive assumptions and technical submittal fields before purchase.",
  },
  {
    title: "Commercial carpet tile MOQ guide",
    href: "/blog/commercial-carpet-tile-moq-sample-trial-project-guide",
    text: "Check sample, trial-order, and project MOQ logic before comparing square-metre prices.",
  },
];

export const metadata: Metadata = product
  ? {
      title: "50x50 PP Bitumen Backed Carpet Tiles | VCARPETS",
      description:
        "Review 50x50 PP carpet tiles with bitumen backing for commercial interiors. Confirm loop-pile construction, layout, samples and project quotation requirements.",
      alternates: { canonical: productPath(product.id) },
      openGraph: {
        title: "50x50 PP Bitumen Backed Carpet Tiles | VCARPETS",
        description: product.description,
        url: absoluteUrl(productPath(product.id)),
        type: "website",
        images: [{ url: absoluteUrl(product.image), alt: product.imageAlt || product.name }],
      },
      twitter: {
        card: "summary_large_image",
        title: "50x50 PP Bitumen Backed Carpet Tiles | VCARPETS",
        description: product.description,
        images: [absoluteUrl(product.image)],
      },
    }
  : { title: "PP Bitumen Backed Office Carpet Tiles | VCARPETS" };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd({ ...productJsonLd(product), brand: { "@type": "Brand", name: "Vcarpets" } }) }} />
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
            <div className="aspect-square overflow-hidden border border-border bg-white shadow-xl">
              <ProductImage src={product.image} alt={product.imageAlt || product.name} className="h-full w-full" fit="contain" priority sizes="(max-width: 1024px) calc(100vw - 32px), 55vw" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
              {galleryImages.slice(1).map((item) => (
                <div key={item.src} className="aspect-square overflow-hidden border border-border bg-surface">
                  <ProductImage src={item.src} alt={item.alt} className="h-full w-full" fit="contain" sizes="(max-width: 768px) 33vw, 18vw" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-accent">VCARPETS Commercial Carpet Tiles</p>
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
        eyebrow="Carpet Tile Buying Answer"
        title="What Are 50x50 PP Bitumen Backed Carpet Tiles?"
        answer="This is a square carpet tile option, not wall-to-wall roll carpet. The 50x50cm format can be evaluated for room-by-room or zone-based layouts. A striped, multi-level loop appearance should be reviewed together with tile orientation, color and the intended installation system."
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
        evidence="Specifications, price range, MOQ, fire rating, and availability must be verified against the final construction, color, backing, and test documents quoted by VCARPETS."
        quoteHref={`/contact?product=${encodeURIComponent(product.name)}#quote-form`}
      />

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-accent">Technical Specification</p>
            <h2 className="mb-8 text-2xl font-black uppercase text-primary md:text-4xl">Confirm Construction Before Ordering</h2>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {Object.entries({ brandName: "Vcarpets", format: "Square Carpet Tile", nominalSize: product.spec.size, ...product.technicalSpecs }).map(([key, value]) => (
                <div key={key} className="bg-white p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.08em] text-muted">{key === "brandName" ? "Brand Name" : key.replace(/([A-Z])/g, " $1")}</p>
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
                  "Commercial interior projects evaluating modular 50x50cm carpet squares.",
                "Buyers comparing PP carpet tiles against nylon carpet tiles by budget and traffic level.",
                "Distributors or contractors needing samples, cartons, OEM colors, and export packing.",
                "Hotel meeting spaces and selected zones requiring a separate construction and installation review.",
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
        <div className="container-fox max-w-5xl space-y-12">
          <div className="max-w-3xl space-y-5 text-base leading-8 text-muted">
            <h2 className="text-2xl font-black text-primary md:text-3xl">Product and Configuration Review</h2>
            <p>A product title that lists several fibers or backings does not establish a blended construction. Use the specific proposal to identify the face fiber and backing being ordered. For this configuration, the comparison starts with PP and bitumen backing.</p>
            <p>The nominated product sheet and quotation should identify the exact configuration. Fiber names and photographs do not establish a fire rating, slip result, antimicrobial treatment, acoustic result or outdoor suitability. Published specification ranges are configuration references, not measurements certified by these images.</p>
          </div>

          <div className="max-w-3xl space-y-5 text-base leading-8 text-muted">
            <h2 className="text-2xl font-black text-primary md:text-3xl">Where Should a Hotel Buyer Consider Carpet Tiles?</h2>
            <p>Consider the format where the project needs a modular layout and a defined replacement-stock plan. Hotel offices, meeting rooms and selected circulation areas can present different operating conditions; ask the designer or installer to review each zone separately.</p>
            <p>Guestrooms, corridors and public areas should not automatically share the same specification. Identify luggage routes, wheeled equipment, entrance soil, cleaning procedures and floor interfaces in the brief. Do not infer suitability for a wet area, exterior installation or unusually demanding traffic from a generic listing.</p>
            <p>Compare the wider <Link href="/products/carpet-tiles" className="font-bold text-accent underline">carpet tile collection</Link> and <Link href="/hotel-carpet" className="font-bold text-accent underline">hotel carpet options</Link> if the project includes different flooring formats.</p>
          </div>

          <div className="max-w-3xl space-y-5 text-base leading-8 text-muted">
            <h2 className="text-2xl font-black text-primary md:text-3xl">Review the Loop-Pile Surface and Installation Direction</h2>
            <p>Use several physical tiles to review the appearance of adjoining edges and directional stripes. Agree whether the proposed layout uses a single direction, alternating directions or another arrangement supported by the product instructions. A quarter-turn example in a photograph is not an installation instruction for every design.</p>
            <p>Ask the installer to assess the substrate, adhesive or fixing system and thresholds against the nominated construction. Bitumen backing alone does not prove compatibility with any floor or installation method. This product page does not offer on-site measurement or installation.</p>
          </div>

          <div className="max-w-3xl space-y-5 text-base leading-8 text-muted">
            <h2 className="text-2xl font-black text-primary md:text-3xl">Approve One Sample and Specification Record</h2>
            <p>Record the carpet designation, colorway, construction and intended layout on the sample approval. Keep the appearance reference connected to the quotation so a similar photograph cannot become the standard for a different fiber or backing.</p>
            <p>For a hotel project, separate physical appearance approval from technical-document review. Use the <Link href="/blog/hotel-carpet-procurement-documents-checklist" className="font-bold text-accent underline">hotel carpet procurement documents checklist</Link> when the consultant requires construction-specific evidence.</p>
            <Link href="/request-sample-box" className="inline-flex min-h-12 items-center border border-primary px-6 py-3 text-sm font-bold text-primary hover:bg-surface">Request Carpet Tile Sample Options</Link>
          </div>

          <div className="max-w-3xl space-y-5 text-base leading-8 text-muted">
            <h2 className="text-2xl font-black text-primary md:text-3xl">Quantity, Packing and Quotation Basis</h2>
            <p>Measure net coverage by zone, then agree the installation allowance, retained replacement tiles and packing basis. Keep these lines distinct. A standard nominal 50x50cm square covers 0.25m², so four nominal tiles correspond to 1m² before layout allowances; this arithmetic is not a final ordering quantity.</p>
            <p>Confirm pieces per carton, carton dimensions and gross weight for the actual shipment. Do not use a generic single-item packaging field to calculate a multi-piece carton or shipping total. Where different colors or phases are involved, identify their quantities separately.</p>
            <p>Price and order conditions depend on the selected configuration, quantity, design, packing and approved commercial terms. Request a written project quotation rather than treating a marketplace price, lead time or sample offer as a Vcarpets commitment. Review the existing <Link href="/commercial-terms" className="font-bold text-accent underline">commercial terms</Link>.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-accent">Product Views</p>
            <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">Product and Application Views</h2>
            <p className="mt-5 text-sm leading-7 text-muted">Product images supplied by the owner for selection reference. Application views are not documented customer installations or evidence of product performance.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {galleryImages.map((item) => (
              <figure key={item.src} className="border border-border bg-white">
                <div className="aspect-square overflow-hidden bg-white">
                  <ProductImage src={item.src} alt={item.alt} className="h-full w-full" fit="contain" sizes="(max-width: 768px) calc(100vw - 32px), 50vw" />
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
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-accent">Procurement Resources</p>
          <h2 className="mb-8 text-3xl font-black uppercase text-primary md:text-4xl">Prepare Your Carpet Tile Project</h2>
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
