import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import ProductImage from "@/components/ProductImage";
import { brandInfo, products } from "@/lib/data";
import { absoluteUrl, productBreadcrumbJsonLd, safeJsonLd } from "@/lib/seo";

// Deployable product-page master: keep Product, metadata and visible specifications aligned.
// JSON-LD extension slot: add an Offer only after a valid written price, currency,
// sales unit and availability are approved and displayed on this page. Omit absent
// values; never publish placeholder tokens, supplier marketplace prices or ratings.
const path = "/products/carpet-tiles/pp-pvc-backed-office-carpet-tiles";
const product = products.find((item) => item.id === "pp-pvc-backed-office-carpet-tiles");
const title = "50x50 PP PVC-Backed Office Carpet Tiles | Vcarpets";
const description = "Compare 50x50 PP loop-pile office carpet tiles with PVC backing. Review striped layouts, sample approval and specifications; request a FOB Tianjin Port quote.";
const quoteHref = `/contact?product=${encodeURIComponent("Vcarpets 50x50 PP PVC-Backed Office Carpet Tiles")}&source=product_pp_pvc_office_carpet_tiles#quote-form`;
const faqs = [
  { question: "Is this PVC flooring or a textile carpet tile?", answer: "It is a textile carpet tile: polypropylene is the face fiber, while PVC describes the backing. It is not a solid vinyl floor tile. Confirm the complete construction on the selected product sheet." },
  { question: "Can I use the same specification as a nylon or bitumen-backed tile?", answer: "No. Similar-looking carpet tiles can use different fibers and backings. Compare the exact PP/PVC configuration with its own sample and project documents; do not transfer another product’s traffic, fire or installation claims." },
  { question: "Is the quarter-turn layout approved for every project?", answer: "The images show an appearance concept. Review several physical tiles together, agree the direction and adjoining edges, and follow the nominated product and fixing-system instructions before installation." },
  { question: "Are these tiles waterproof, washable, antimicrobial or fire certified?", answer: "No blanket claim is made. Request construction-specific test documents and maintenance instructions for the performance required by your project. A fiber or backing name does not establish these results." },
  { question: "What are the MOQ, sample cost and lead time?", answer: "They are confirmed for the selected color, construction and order quantity. Send the project area, sample requirements, destination and target date. The written quotation will identify the sample arrangement, MOQ, packing and production schedule." },
];
const resources = [
  { href: "/blog/commercial-carpet-sample-approval-checklist", title: "Sample approval checklist", text: "Record sample origin, accepted decisions and open conditions before releasing a bulk order." },
  { href: "/blog/commercial-carpet-tile-backing-comparison-guide", title: "Backing comparison and approval", text: "Compare PVC, bitumen and PE paths; review evidence before accepting a backing substitution." },
  { href: "/products/carpet-tiles/pp-bitumen-backed-office-carpet-tiles", title: "Compare PP bitumen-backed tiles", text: "Compare a different backing as a separate construction." },
  { href: "/products/carpet-tiles/nylon-office-carpet-tile", title: "Compare nylon office carpet tiles", text: "Review a different face fiber against your office specification." },
  { href: "/blog/office-carpet-tile-layout-approval-bulk-order", title: "Tile layout approval guide", text: "Connect sample direction and visual approval to the order." },
  { href: "/blog/commercial-carpet-tile-rfq-checklist-b2b-buyers", title: "Carpet tile RFQ checklist", text: "Prepare area, allowances, packing and quotation inputs." },
];

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path },
  openGraph: { title, description, url: absoluteUrl(path), type: "website", images: [{ url: absoluteUrl("/images/products/pp-pvc-office-carpet-tiles/01-quarter-turn-panel.webp"), alt: "Gray striped carpet tile appearance illustration" }] },
  twitter: { card: "summary_large_image", title, description, images: [absoluteUrl("/images/products/pp-pvc-office-carpet-tiles/01-quarter-turn-panel.webp")] },
};

export default function Page() {
  if (!product) notFound();
  const specifications = [
    ["Brand", "Vcarpets"], ["Face fiber", "Polypropylene (PP)"],
    ["Backing", "PVC"], ["Nominal tile size", "50 × 50 cm / square"],
    ["Surface", "Loop pile / striped appearance"], ["Color direction", "Gray and charcoal with fine accent lines; approve physical sample"],
    ["Pile weight and total thickness", "Confirm in the nominated product sheet"],
    ["Project performance", "Traffic, fire, VOC, static and acoustic evidence by selected construction"],
  ];
  const productSchema = {
    "@context": "https://schema.org", "@type": "Product", "@id": `${absoluteUrl(path)}#product`,
    name: product.name, description: product.longDescription, url: absoluteUrl(path), mainEntityOfPage: absoluteUrl(path),
    brand: { "@type": "Brand", name: "Vcarpets" }, category: "Commercial carpet tiles",
    material: "Polypropylene (PP) face with PVC backing", size: "50x50 cm nominal",
    image: (product.gallery ?? []).map((item) => absoluteUrl(item.src)),
    additionalProperty: [
      { "@type": "PropertyValue", name: "Surface", value: "Loop pile / striped appearance" },
      { "@type": "PropertyValue", name: "Trade basis", value: "Bulk B2B orders: FOB Tianjin Port; written project quotation required" },
      { "@type": "PropertyValue", name: "Image status", value: "AI-generated appearance and layout illustrations; physical sample governs approval" },
    ],
  };
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productBreadcrumbJsonLd(product)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }) }} />
      <nav aria-label="Product breadcrumb" className="border-b border-border bg-surface py-4">
        <div className="container-fox text-sm text-muted"><Link className="underline" href="/products/carpet-tiles">Carpet Tiles</Link><span aria-hidden="true"> / </span><span>PP PVC-Backed Office Tiles</span></div>
      </nav>
      <section className="py-10 md:py-16">
        <div className="container-fox grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <ProductGallery mainImage={product.image} gallery={product.gallery} productName={product.name} />
            <p className="mt-4 text-xs leading-6 text-muted">AI-generated appearance and layout illustrations based on supplied references. These are not product photographs or completed customer projects. Approve color, texture and layout using physical samples.</p>
          </div>
          <div className="min-w-0">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">Vcarpets · B2B office flooring</p>
            <h1 className="text-3xl font-black leading-tight text-primary md:text-4xl">50×50 PP PVC-Backed Office Carpet Tiles</h1>
            <p className="mt-5 leading-8 text-muted">A polypropylene loop-pile face, PVC backing and gray striped design in a modular square format. Compare this construction for office, meeting-room and reception projects before approving a sample and bulk order.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[["Face", "Polypropylene"], ["Backing", "PVC"], ["Format", "50×50 cm"], ["Trade basis", "FOB Tianjin Port"]].map(([label, value]) => <div key={label} className="border border-border bg-surface p-4"><p className="text-xs text-muted">{label}</p><p className="mt-1 font-bold text-primary">{value}</p></div>)}
            </div>
            <Link href={quoteHref} className="mt-6 flex min-h-12 items-center justify-center rounded-sm bg-[#d9480f] px-6 py-4 text-center font-bold text-white hover:bg-[#b83a08]">Request Price & Sample Options</Link>
            <p className="mt-3 text-sm leading-6 text-muted">Send area, destination and target date. Price, MOQ, sample format/cost and production timing are confirmed by project.</p>
            <a href={`mailto:${brandInfo.email}?subject=${encodeURIComponent("PP PVC-backed office carpet tile inquiry")}`} className="mt-4 inline-flex min-h-11 items-center font-semibold text-accent underline">Email {brandInfo.email}</a>
          </div>
        </div>
      </section>
      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">Construction before color</p>
          <h2 className="text-2xl font-black text-primary md:text-3xl">PP face, PVC backing: what buyers should compare</h2>
          <p className="mt-4 max-w-3xl leading-8 text-muted">PVC identifies the backing, not the face fiber. This configuration differs from the nylon and PP bitumen-backed ranges. A similar stripe pattern does not make their performance documents, fixing systems or order conditions interchangeable.</p>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {specifications.map(([label, value]) => <div key={label} className="bg-white p-5"><dt className="text-xs font-bold uppercase tracking-wide text-muted">{label}</dt><dd className="mt-2 text-sm font-semibold leading-7 text-primary">{value}</dd></div>)}
          </dl>
          <p className="mt-4 text-sm leading-7 text-muted">The selected product sheet, approved physical sample and written quotation define the order. This page does not assign a fire class, traffic rating or maintenance performance without construction-specific evidence.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-fox grid gap-8 md:grid-cols-2">
          <figure className="min-w-0"><div className="aspect-[3/2] overflow-hidden rounded-sm"><ProductImage src={product.gallery![1].src} alt={product.gallery![1].alt} className="h-full w-full" sizes="(max-width: 768px) 100vw, 50vw" /></div><figcaption className="mt-3 text-xs leading-6 text-muted">AI-generated office layout concept. Quarter-turn appearance requires physical sample and installation-direction approval.</figcaption></figure>
          <div className="space-y-4 leading-8 text-muted"><h2 className="text-2xl font-black leading-tight text-primary md:text-3xl">Plan office zones and tile direction</h2><p>Identify desk areas, meeting rooms, reception and circulation separately. Tell us about rolling chairs, entrance soil, cleaning routines and floor access so the proposed construction can be evaluated against actual use.</p><p>Review several adjacent tiles under the project lighting. Compare parallel stripes and quarter-turn layouts, record the approved arrangement and keep it connected to the chosen color reference.</p><p>Ask the installer to confirm substrate condition, fixing-system compatibility and thresholds. Do not assume that PVC backing means self-adhesive, loose-lay, waterproof or outdoor suitability.</p>
            <p>For a concrete slab, use the <Link href="/blog/carpet-tiles-over-concrete-installation-guide" className="text-accent underline underline-offset-4">concrete subfloor and underlay review</Link> to separate preparation layers from a soft cushion, record unresolved site conditions and distinguish tile selection from installation release.</p></div>
          <div className="space-y-4 leading-8 text-muted"><h2 className="text-2xl font-black leading-tight text-primary md:text-3xl">Approve a physical sample and one order record</h2><p>Digital images help shortlist a visual direction; they cannot establish exact color, pile feel, thickness or backing composition. Request the sample format, cost and dispatch timing for your project.</p><p>Connect the sample reference to the product designation, PP face, PVC backing, nominal size, layout and required technical documents. Keep any alternative construction separate.</p><p>Nominal 50×50 cm coverage is 0.25 m² per tile, or four tiles per m² before cutting and spare allowances. Agree those allowances and carton quantities separately; do not double-count replacement stock.</p></div>
          <figure className="min-w-0"><div className="aspect-[3/2] overflow-hidden rounded-sm"><ProductImage src={product.gallery![2].src} alt={product.gallery![2].alt} className="h-full w-full" sizes="(max-width: 768px) 100vw, 50vw" /></div><figcaption className="mt-3 text-xs leading-6 text-muted">AI-generated stripe and adjoining-face illustration. It is not a measured macro photograph or technical test result.</figcaption></figure>
        </div>
      </section>
      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox max-w-5xl">
          <h2 className="text-2xl font-black text-primary md:text-3xl">Prepare a comparable FOB Tianjin Port quotation</h2>
          <p className="mt-4 leading-8 text-muted">For distributors, importers, contractors and office project buyers, include:</p>
          <ul className="mt-5 grid list-disc gap-3 pl-5 text-sm leading-7 text-primary sm:grid-cols-2">
            { ["Application and area by zone, with floor plan if available", "Preferred color reference and tile direction", "Destination country/city and target receiving date", "Sample format and technical-document requirements", "Installation system and substrate information", "Cutting allowance, spare stock and phased order quantities"].map((item) => <li key={item}>{item}</li>) }
          </ul>
          <p className="mt-5 leading-8 text-muted">The quotation should identify the construction, quantity, sales unit, sample arrangement, MOQ, packing and production schedule. Bulk trade basis: FOB Tianjin Port. Freight coordination and the receiving date require separate planning; a production estimate is not an arrival guarantee.</p>
          <p className="mt-3 text-sm leading-7 text-muted">B2B supplier: Tianjin Vcarpets Global Commercial Carpet Co., Ltd. Review the <Link href="/commercial-terms" className="font-bold text-accent underline">commercial terms</Link> alongside the written quotation.</p>
          <Link href={quoteHref} className="mt-6 inline-flex min-h-12 items-center justify-center rounded-sm bg-[#d9480f] px-6 py-4 font-bold text-white hover:bg-[#b83a08]">Send This Product RFQ</Link>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-fox max-w-5xl"><h2 className="mb-6 text-2xl font-black text-primary md:text-3xl">Office carpet tile buyer FAQ</h2><div className="space-y-3">{faqs.map((item) => <details key={item.question} className="rounded-sm border border-border p-5"><summary className="cursor-pointer font-bold leading-7 text-primary">{item.question}</summary><p className="mt-3 leading-8 text-muted">{item.answer}</p></details>)}</div></div>
      </section>
      <section className="section-padding border-t border-border bg-surface">
        <div className="container-fox"><h2 className="mb-6 text-2xl font-black text-primary md:text-3xl">Compare constructions and prepare your order</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{resources.map((item) => <Link key={item.href} href={item.href} className="rounded-sm border border-border bg-white p-5 hover:border-accent"><h3 className="font-bold leading-7 text-primary">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{item.text}</p></Link>)}</div><Link className="mt-6 inline-flex min-h-11 items-center font-semibold text-accent underline" href="/products/carpet-tiles">Explore the full commercial carpet tile collection</Link></div>
      </section>
    </div>
  );
}
