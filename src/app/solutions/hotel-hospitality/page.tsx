import type { Metadata } from "next";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const path = "/solutions/hotel-hospitality";
const quoteHref = "/contact?product=Hotel%20wall-to-wall%20carpet&source=%2Fsolutions%2Fhotel-hospitality#quote-form";

const zones = [
  { zone: "Guestrooms & suites", route: "Custom room carpet", decision: "Separate room types, measured areas, comfort brief and replacement phases.", href: "/products/wall-to-wall/custom-luxury-hotel-room-carpet" },
  { zone: "Corridors & lift lobbies", route: "Patterned broadloom", decision: "Record direction, turns, doors, repeat, joins and retained repair material.", href: "/products/wall-to-wall/glitter-hotel-corridor-broadloom-carpet" },
  { zone: "Ballrooms & function rooms", route: "Custom printed broadloom", decision: "Coordinate artwork scale, partitions, furniture movement and the installation drawing.", href: "/products/wall-to-wall/3d-printed-banquet-hall-carpet" },
  { zone: "Lobby & public areas", route: "Project-selected construction", decision: "Confirm traffic, cleaning, entrance exposure and the documents required by the reviewer.", href: "/products/wall-to-wall" },
  { zone: "Back-of-house & offices", route: "Carpet tile option", decision: "Compare selective replacement, floor access, module layout and the nominated fixing system.", href: "/products/carpet-tiles" },
];

const faqs = [
  { q: "Does VCARPETS supply custom hotel carpet patterns and colours?", a: "Custom pattern and colour requests can be reviewed for hotel broadloom projects. Send the zone, artwork or references, area and destination. Feasibility, sample route, minimum quantity, cost and timing are confirmed for the selected proposal." },
  { q: "Which hotel carpet construction should a buyer request?", a: "Start with the hotel zone and operating brief, then compare the nominated Axminster, printed or tufted construction. The words hotel carpet do not establish fibre, backing, fire performance, width or service life; verify the physical sample and applicable product documents." },
  { q: "What information is needed for an FOB Tianjin quotation?", a: "Provide the hotel zone, net area, drawing revision, room or corridor dimensions, design reference, destination, required documents and target site date. The written quotation confirms the selected construction, quantity basis, packing, sample terms, minimum order and production timing." },
  { q: "Can carpet tiles and broadloom be used in the same hotel?", a: "They can be compared by zone. Broadloom may support a continuous patterned layout in guest-facing areas, while carpet tiles may suit selected service or office zones where modular replacement matters. The project team must review transitions, floor build-up and installation details." },
  { q: "Are samples available before a hotel order?", a: "Paid samples may be arranged by project. Confirm whether the review needs a construction sample, colour reference or custom strike-off, together with its fee, preparation time and courier scope." },
];

export const metadata: Metadata = {
  title: "Hotel Carpet Supplier | Hospitality Broadloom Projects",
  description: "Source hotel wall-to-wall carpet by guestroom, corridor, ballroom and lobby zone. Compare samples, patterns, roll plans and request a B2B FOB Tianjin quote.",
  alternates: { canonical: path },
  openGraph: {
    title: "Hotel Carpet Supplier | Hospitality Broadloom Projects",
    description: "Compare hotel broadloom by zone, construction, sample, pattern and roll plan before requesting an FOB Tianjin quotation.",
    url: absoluteUrl(path),
    type: "website",
    images: [{ url: absoluteUrl("/images/blog-hotel-carpet.webp"), alt: "Illustrative hotel corridor with patterned wall-to-wall carpet" }],
  },
};

export default function HotelHospitalitySolutionPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Solutions", item: absoluteUrl("/solutions") },
      { "@type": "ListItem", position: 3, name: "Hotel & Hospitality Carpet", item: absoluteUrl(path) },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />

      <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
        <div className="absolute inset-0 opacity-35"><ProductImage src="/images/blog-hotel-carpet.webp" alt="Illustrative hotel corridor with patterned wall-to-wall carpet" className="h-full w-full object-cover" priority sizes="100vw" /></div>
        <div className="absolute inset-0 bg-primary/78" />
        <div className="container-fox relative max-w-5xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">B2B Hotel Carpet Procurement</p>
          <h1 className="max-w-4xl text-4xl font-black uppercase leading-tight md:text-6xl">Hotel Carpet Supplier for Wall-to-Wall Projects</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">VCARPETS supplies project-based hotel broadloom for guestrooms, corridors, ballrooms and public areas. Compare the nominated construction, physical sample, pattern and roll plan, then request a written bulk quotation on an FOB Tianjin Port basis.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href={quoteHref} className="btn-fox-orange !px-9 !py-4">Request Hotel Carpet Quote</Link>
            <Link href="/products/wall-to-wall" className="btn-fox-outline !border-white !px-9 !py-4 !text-white hover:!bg-white hover:!text-primary">Compare Broadloom Options</Link>
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-white/65">Custom pattern and colour requests · Paid samples by project · FOB Tianjin Port</p>
        </div>
      </section>

      <section className="section-padding border-b border-border">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div><p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">Direct Buyer Answer</p><h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-4xl">Specify Hotel Carpet by Zone Before Choosing a Pattern</h2></div>
          <div className="space-y-5 text-base leading-8 text-muted"><p>A hotel may need different carpet decisions for guestrooms, corridors, ballrooms, lobbies and back-of-house areas. Start with the use conditions and measured layout for each zone. Then identify the proposed construction and review the sample, pattern repeat, backing, roll direction, seam plan and project-required documents.</p><p>A rendering or colour reference approves appearance only. It does not establish fibre, backing, width, fire performance, minimum order or production time. Those items remain product and project specific until they appear in the selected evidence and written quotation.</p></div>
        </div>
      </section>

      <section className="section-padding border-b border-border bg-surface">
        <div className="container-fox">
          <div className="mb-10 max-w-3xl"><p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">Hotel Zone Shortlist</p><h2 className="text-3xl font-black uppercase text-primary md:text-5xl">Match the Product Route to the Space</h2></div>
          <div className="overflow-x-auto border border-border bg-white"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-primary text-white"><tr><th className="p-5">Hotel zone</th><th className="p-5">Product route</th><th className="p-5">Decision before quotation</th><th className="p-5">Review</th></tr></thead><tbody>{zones.map((item) => <tr key={item.zone} className="border-t border-border align-top"><th className="p-5 font-black text-primary">{item.zone}</th><td className="p-5 text-muted">{item.route}</td><td className="p-5 leading-7 text-muted">{item.decision}</td><td className="p-5"><Link href={item.href} className="font-black text-accent underline">View option</Link></td></tr>)}</tbody></table></div>
        </div>
      </section>

      <section className="section-padding border-b border-border">
        <div className="container-fox grid gap-8 lg:grid-cols-2">
          <div className="border border-border p-7 md:p-9"><p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">Quotation Inputs</p><h2 className="text-3xl font-black uppercase text-primary">Send Enough Detail to Compare Like with Like</h2><ul className="mt-7 space-y-4 text-sm leading-7 text-muted"><li><strong className="text-primary">Project:</strong> hotel type, buyer role, destination and new-build or renovation status.</li><li><strong className="text-primary">Zones:</strong> net area, room count, corridor dimensions and current drawing revision.</li><li><strong className="text-primary">Design:</strong> artwork, colour references, repeat preference and approved alternatives.</li><li><strong className="text-primary">Evidence:</strong> required material, fire, emissions or tender documents for the proposed product.</li><li><strong className="text-primary">Delivery:</strong> target site date, packing needs and buyer-managed freight after FOB Tianjin Port.</li></ul></div>
          <div className="border border-border bg-primary p-7 text-white md:p-9"><p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">Approval Sequence</p><h2 className="text-3xl font-black uppercase">Keep Five Decisions Separate</h2><ol className="mt-7 space-y-4 text-sm leading-7 text-white/75"><li><strong className="text-white">1. Zone brief:</strong> use, traffic, cleaning and design intent.</li><li><strong className="text-white">2. Product shortlist:</strong> named construction and evidence gaps.</li><li><strong className="text-white">3. Sample approval:</strong> appearance and construction reference.</li><li><strong className="text-white">4. Layout approval:</strong> measured quantity, direction, repeat and joins.</li><li><strong className="text-white">5. Commercial release:</strong> written scope, MOQ, timing, packing and FOB price.</li></ol></div>
        </div>
      </section>

      <section className="section-padding border-b border-border bg-surface"><div className="container-fox"><div className="mb-10 max-w-3xl"><p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">Decision Support</p><h2 className="text-3xl font-black uppercase text-primary md:text-4xl">Continue the Procurement Review</h2></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[["Broadloom product category", "/products/wall-to-wall"],["Axminster, Wilton and tufted comparison", "/blog/axminster-vs-wilton-vs-tufted-hospitality-guide"],["Pattern repeat and seam planning", "/blog/printed-broadloom-pattern-repeat-seam-planning"],["Carpet tiles vs broadloom", "/blog/carpet-tiles-vs-broadloom-commercial-projects-guide"]].map(([label, href]) => <Link key={href} href={href} className="border border-border bg-white p-6 font-black text-primary transition-colors hover:border-accent hover:text-accent">{label} →</Link>)}</div></div></section>

      <section className="section-padding bg-white"><div className="container-fox"><h2 className="mb-10 text-3xl font-black uppercase text-primary md:text-5xl">Hotel Carpet Procurement FAQ</h2><div className="grid gap-5 lg:grid-cols-2">{faqs.map((item) => <details key={item.q} className="border border-border p-6"><summary className="cursor-pointer font-black text-primary">{item.q}</summary><p className="mt-4 leading-7 text-muted">{item.a}</p></details>)}</div></div></section>

      <section className="bg-primary py-16 text-center text-white"><div className="container-fox"><h2 className="text-3xl font-black uppercase md:text-4xl">Request a Hotel Broadloom Quotation</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-white/72">Send the zone, area, drawings or design reference, destination and target site date. Unknown specifications can remain open for review.</p><Link href={quoteHref} className="btn-fox-orange mt-8">Send Project Details</Link></div></section>
    </div>
  );
}
