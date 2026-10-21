import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "./ProductGallery";
import ProductImage from "@/components/ProductImage";
import { brandInfo, products } from "@/lib/data";
import { absoluteUrl, productBreadcrumbJsonLd, safeJsonLd } from "@/lib/seo";

const path = "/products/carpet-tiles/gradient-accent-office-carpet-tiles";
const product = products.find((item) => item.id === "gradient-accent-office-carpet-tiles");
const title = "50×50 Commercial PP Carpet Tiles | Bitumen Backing";
const description = "Gray office carpet tiles with colored gradient accents, a PP loop-pile face and bitumen backing. 50×50 cm format. Request a FOB Tianjin Port project quotation.";
const quoteHref = `/contact?product=${encodeURIComponent("50×50 cm Commercial PP Loop Pile Carpet Tiles with Bitumen Backing for Offices")}&source=product_gradient_accent_office_carpet_tiles#quote-form`;
const imageNote = "AI-edited imagery based on supplied references, not technical evidence. Approve color, texture and the 50×50 cm square format using physical samples. Interior views are planning references, not verified completed client projects.";
const specifications = [
  ["Nominal tile size", "50 × 50 cm / 500 × 500 mm"],
  ["Face fiber", "Polypropylene (PP)"],
  ["Construction", "Loop pile"],
  ["Backing", "Bitumen"],
  ["Pile weight", "420 g/m²"],
  ["Minimum order", "100 m² reference; confirm the selected color and order in the quotation"],
  ["Production lead time", "7–15 days reference; confirm the written schedule after sample and order approval"],
  ["Design", "Gray textured ground with colored gradient accents"],
  ["Total thickness", "Confirm in the nominated product sheet"],
  ["Performance documents", "Confirm traffic, fire, VOC, static and acoustic requirements for the selected construction"],
];
const faqs = [
  { question: "Are these 50×50 cm squares or carpet planks?", answer: "This design is offered in a 50×50 cm square format. The supplied design references also include elongated color samples; those sample shapes do not define the ordered tile size. Confirm the square sample, edge appearance and layout before ordering." },
  { question: "Is the face fiber polypropylene or nylon?", answer: "The construction specified on this page uses polypropylene (PP), loop pile and bitumen backing. Nylon is a different construction and must be quoted and documented separately; this page does not describe a PP–nylon blend." },
  { question: "What is the FOB price and shipment port?", answer: "FOB price: Request a project quotation. FOB port: Tianjin Port, China. The written quotation should identify the selected construction, color, quantity, sales unit, packing and validity. Freight and destination costs require separate coordination." },
  { question: "Are the office images completed VCARPETS projects?", answer: "No. The edited interior images are planning references showing a possible visual direction, not evidence of a delivered project. Digital images do not establish exact color, pile feel or performance. Approve the physical sample and final layout separately." },
  { question: "Can I specify fire, acoustic or rolling-chair performance from this page?", answer: "No performance class or test result is promised here. Request documents tied to the selected construction and check them against the project brief. A pile weight, fiber name or room illustration does not prove those requirements." },
  { question: "What are the MOQ, sample arrangement and lead time?", answer: "The reference minimum order is 100 m² and the listed lead time is 7–15 days. Reconfirm these for the selected color, construction and quantity in the written quotation, along with sample format, cost and timing. A production estimate is not a delivery-date guarantee." },
];
const resources = [
  { href: "/blog/commercial-carpet-sample-approval-checklist", title: "Sample approval checklist", text: "Record the square format, approved color, surface and conditions before bulk production." },
  { href: "/blog/commercial-carpet-tile-backing-comparison-guide", title: "Carpet tile backing comparison", text: "Review bitumen and alternative constructions without transferring test claims between products." },
  { href: "/blog/carpet-tiles-open-plan-office-acoustics-guide", title: "Open-plan office acoustics guide", text: "Separate visual floor planning from project-specific acoustic evidence." },
  { href: "/blog/commercial-carpet-fob-tianjin-port-buyer-checklist", title: "FOB Tianjin Port buyer checklist", text: "Prepare quotation, packing and shipping-document questions." },
];
export const metadata: Metadata = {
  title: { absolute: title }, description, alternates: { canonical: path },
  openGraph: { title, description, url: absoluteUrl(path), type: "website", images: [{ url: absoluteUrl("/images/products/gradient-accent-office-carpet-tiles/01-main-design.webp"), alt: "Gray carpet design with colored gradient accents; edited illustration" }] },
  twitter: { card: "summary_large_image", title, description, images: [absoluteUrl("/images/products/gradient-accent-office-carpet-tiles/01-main-design.webp")] },
};
export default function Page() {
  if (!product) notFound();
  // Quotation-only product: deliberately no Offer, price, availability, rating or certificate claims.
  const productSchema = {
    "@context": "https://schema.org", "@type": "Product", "@id": `${absoluteUrl(path)}#product`,
    name: product.name, description: product.longDescription, url: absoluteUrl(path), mainEntityOfPage: absoluteUrl(path),
    brand: { "@type": "Brand", name: "VCARPETS" }, category: "Commercial carpet tiles", material: "Polypropylene (PP) loop-pile face with bitumen backing", size: "50 × 50 cm",
    image: (product.gallery ?? []).map((item) => absoluteUrl(item.src)),
    additionalProperty: [
      { "@type": "PropertyValue", name: "Pile weight", value: "420 g/m²" },
      { "@type": "PropertyValue", name: "FOB price", value: "Request a project quotation" },
      { "@type": "PropertyValue", name: "FOB port", value: "Tianjin Port, China" },
      { "@type": "PropertyValue", name: "Image status", value: imageNote },
    ],
  };
  return <div className="min-h-screen bg-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productBreadcrumbJsonLd(product)) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }) }} />
    <nav aria-label="Product breadcrumb" className="border-b border-border bg-surface py-4"><div className="container-fox text-sm text-muted"><Link className="underline" href="/products/carpet-tiles">Carpet Tiles</Link><span aria-hidden="true"> / </span><span>Gradient Accent Office Tiles</span></div></nav>
    <section className="py-10 md:py-16"><div className="container-fox grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="min-w-0"><ProductGallery mainImage={product.image} gallery={product.gallery?.slice(0, 4)} productName={product.name} /><p className="mt-4 text-xs leading-6 text-muted">{imageNote}</p></div>
      <div className="min-w-0"><p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">VCARPETS · Gradient accent office tiles</p><h1 className="text-3xl font-black leading-tight text-primary md:text-4xl">50×50 cm Commercial PP Loop Pile Carpet Tiles with Bitumen Backing for Offices</h1><p className="mt-5 leading-8 text-muted">A gray textured ground with colored gradient accents creates a distinctive direction for office floors. This square carpet tile combines a polypropylene loop-pile face with bitumen backing. Review the color transition, adjoining edges and intended use before approving a physical sample.</p>
        <div className="mt-6 grid grid-cols-2 gap-3">{[["Format", "50×50 cm squares"], ["Face / backing", "PP / bitumen"], ["FOB price", "Request a project quotation"], ["FOB port", "Tianjin Port, China"]].map(([label, value]) => <div key={label} className="border border-border bg-surface p-4"><p className="text-xs text-muted">{label}</p><p className="mt-1 font-bold text-primary">{value}</p></div>)}</div>
        <Link href={quoteHref} className="mt-6 flex min-h-12 items-center justify-center rounded-sm bg-[#d9480f] px-6 py-4 text-center font-bold text-white hover:bg-[#b83a08]">Request a Project Quotation</Link><p className="mt-3 text-sm leading-6 text-muted">Send your area, preferred accent color, destination and target receiving date. MOQ, sample arrangements and lead time are confirmed by project.</p><a href={`mailto:${brandInfo.email}?subject=${encodeURIComponent("Gradient accent office carpet tile inquiry")}`} className="mt-4 inline-flex min-h-11 items-center font-semibold text-accent underline">Email {brandInfo.email}</a>
      </div>
    </div></section>
    <section className="section-padding border-y border-border bg-surface"><div className="container-fox"><p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">Specification snapshot</p><h2 className="text-2xl font-black text-primary md:text-3xl">PP loop pile with bitumen backing</h2><p className="mt-4 max-w-3xl leading-8 text-muted">Keep the selected construction connected to its sample and technical documents. Similar-looking nylon products or alternative backings are separate specifications, not automatic substitutions.</p><dl className="mt-8 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">{specifications.map(([label, value]) => <div key={label} className="bg-white p-5"><dt className="text-xs font-bold uppercase tracking-wide text-muted">{label}</dt><dd className="mt-2 text-sm font-semibold leading-7 text-primary">{value}</dd></div>)}</dl><p className="mt-4 text-sm leading-7 text-muted">The nominated product sheet, approved physical sample and written quotation define the order. No traffic class, fire rating, acoustic result, waterproof or washable claim is assigned without construction-specific evidence.</p></div></section>
    <section className="section-padding"><div className="container-fox"><h2 className="text-2xl font-black text-primary md:text-3xl">Review texture, transitions and layout</h2><p className="mt-4 max-w-3xl leading-8 text-muted">Use the illustrations to shortlist a visual direction, then compare several adjacent square samples under the project lighting. Record the chosen color, tile direction and acceptable variation.</p><div className="mt-8 grid gap-7 md:grid-cols-3">{(product.gallery ?? []).slice(4, 7).map((image, index) => <figure key={image.src} className="min-w-0"><div className="aspect-[3/2] overflow-hidden rounded-sm border border-border bg-surface"><ProductImage src={image.src} alt={image.alt} className="h-full w-full" fit="contain" sizes="(max-width: 768px) 100vw, 33vw" /></div><figcaption className="mt-4"><h3 className="font-bold text-primary">{["Surface appearance", "Accent transition", "Accent surface reference"][index]}</h3><p className="mt-2 text-sm leading-7 text-muted">{["Edited surface illustration, not a measured macro photograph. Check pile feel and exact color on the physical sample.", "Edited color-transition illustration. Confirm the actual transition and edge alignment on adjacent 50×50 cm samples.", "Edited red, blue and yellow surface crops, not physical tile edges or backing. Confirm the chosen color and pattern placement on a sample."][index]}</p></figcaption></figure>)}</div></div></section>
    <section className="section-padding border-y border-border bg-surface"><div className="container-fox grid gap-8 lg:grid-cols-2"><div><p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">Planning reference, not a completed case</p><h2 className="text-2xl font-black text-primary md:text-3xl">Plan an occupied-office refresh</h2><p className="mt-4 leading-8 text-muted">Separate desks, meeting rooms and circulation areas before deciding where to use colored accents. Agree access, installation phases, batch identification and spare tiles with the project team. This is a planning approach, not a claim that this product was used in a named client project.</p><Link href="/projects/case-14" className="mt-5 inline-flex min-h-11 items-center font-bold text-accent underline">Explore the office phased-renovation planning reference</Link></div><div><h3 className="text-xl font-bold text-primary">From square sample to order</h3><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-muted"><li>Approve the square tile format, accent direction and adjoining edges together.</li><li>Check rolling chairs, entrance soil, floor access and maintenance requirements for each zone.</li><li>Ask the installer to confirm subfloor condition and the fixing system; do not assume self-adhesive or loose-lay installation.</li><li>At nominal dimensions, one tile covers 0.25 m²; four tiles cover 1 m² before cutting and spare allowances. Agree allowances and packing separately.</li></ul></div></div></section>
    <section className="section-padding"><div className="container-fox max-w-5xl"><h2 className="text-2xl font-black text-primary md:text-3xl">Request a comparable FOB Tianjin Port quotation</h2><p className="mt-4 leading-8 text-muted">FOB price: <strong className="text-primary">Request a project quotation</strong>. FOB port: <strong className="text-primary">Tianjin Port, China</strong>. Include project area, selected accent, sample requirements, quantity by phase, destination and target receiving date.</p><p className="mt-4 leading-8 text-muted">Ask the quotation to confirm the PP loop-pile construction, bitumen backing, 50×50 cm format, packing, sales unit, MOQ, production schedule and quotation validity. Ocean freight, destination costs and delivery timing need separate coordination.</p><p className="mt-4 text-sm leading-7 text-muted">B2B supplier: Tianjin Vcarpets Global Commercial Carpet Co., Ltd. Review the <Link href="/commercial-terms" className="font-bold text-accent underline">commercial terms</Link> with your written quotation.</p><Link href={quoteHref} className="mt-6 inline-flex min-h-12 items-center justify-center rounded-sm bg-[#d9480f] px-6 py-4 font-bold text-white hover:bg-[#b83a08]">Send This Product RFQ</Link></div></section>
    <section className="section-padding border-y border-border bg-surface"><div className="container-fox max-w-5xl"><h2 className="mb-6 text-2xl font-black text-primary md:text-3xl">Gradient accent carpet tile FAQ</h2><div className="space-y-3">{faqs.map((item) => <details key={item.question} className="rounded-sm border border-border bg-white p-5"><summary className="cursor-pointer font-bold leading-7 text-primary">{item.question}</summary><p className="mt-3 leading-8 text-muted">{item.answer}</p></details>)}</div></div></section>
    <section className="section-padding"><div className="container-fox"><h2 className="mb-6 text-2xl font-black text-primary md:text-3xl">Buyer guides for sample and project approval</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{resources.map((item) => <Link key={item.href} href={item.href} className="rounded-sm border border-border bg-white p-5 hover:border-accent"><h3 className="font-bold leading-7 text-primary">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{item.text}</p></Link>)}</div><Link className="mt-6 inline-flex min-h-11 items-center font-semibold text-accent underline" href="/products/carpet-tiles">Explore the full carpet tile collection</Link></div></section>
  </div>;
}
