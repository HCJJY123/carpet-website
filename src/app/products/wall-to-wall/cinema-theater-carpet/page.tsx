import type { Metadata } from "next";
import Link from "next/link";
import ApplicationProductPage from "@/components/ApplicationProductPage";
import ProductImage from "@/components/ProductImage";
import { products } from "@/lib/data";
import { illustrationCaption } from "@/lib/content-growth-assets";
import { absoluteUrl, productPath } from "@/lib/seo";

const productId = "cinema-theater-carpet";
const patternIllustrations = [
  {
    "src": "/images/optimized/cinema-20261009/cinema-lobby.webp",
    "title": "Lobby Pattern Concept",
    "alt": "AI-generated cinema lobby concept with grey taupe geometric carpet and muted gold accents"
  },
  {
    "src": "/images/optimized/cinema-20261009/cinema-circulation.webp",
    "title": "Circulation Pattern Concept",
    "alt": "AI-generated level cinema corridor concept with the matching angular grey taupe carpet pattern"
  },
  {
    "src": "/images/optimized/cinema-20261009/pattern-detail.webp",
    "title": "Pattern Detail Concept",
    "alt": "AI-generated close view of angular ivory linework across grey taupe and muted gold carpet fields"
  },
  {
    "src": "/images/optimized/cinema-20261009/sample-review.webp",
    "title": "Sample Review Concept",
    "alt": "AI-generated carpet swatch concept showing the matching grey taupe geometric pattern on a neutral desk"
  }
];
const product = products.find((item) => item.id === productId)!;
export const metadata: Metadata = {
  title: "Cinema & Theater Carpet | Custom Printed Broadloom | Vcarpets",
  description: "Source custom cinema and theater carpet from Vcarpets. Review zones, patterns, paid samples and configuration details for a FOB Tianjin Port quotation.",
  alternates: { canonical: productPath(productId) },
  openGraph: { title: "Custom Cinema and Theater Carpet | Vcarpets", description: product.description, url: absoluteUrl(productPath(productId)), images: [{ url: absoluteUrl(product.image), alt: product.imageAlt }], type: "website" },
};
const faqs = [
  { q: "Can the pattern and colours be customised?", a: "Yes. Vcarpets supplies cinema and theater carpet with custom patterns and colours. Send artwork or a reference, floor plan and quantity; confirm scale, repeat, direction and the physical approval sample before bulk production." },
  { q: "Which materials, backings and widths are available?", a: "The exact fibre, production route, backing, pile details and roll width are confirmed for the selected configuration in the written quotation. Provide the application and requirements so alternatives can be reviewed without assuming one specification suits every venue." },
  { q: "Can I request a sample?", a: "Paid sample requests are accepted, including for Philippine B2B buyers. State whether the purpose is material, colour or custom pattern approval. Sample format and availability, development and courier fees, and preparation time are confirmed for each project." },
  { q: "Is cinema carpet automatically fire-rated or soundproof?", a: "No. Provide the required test method and project criteria. Available reports must match the nominated construction; acoustic results depend on the relevant floor assembly. A product description or illustration is not certification evidence." },
  { q: "Can I order from square metres alone?", a: "Area can start an estimate. Final quantity also depends on confirmed width, repeat, direction, geometry, joins, cutting allowance and separately retained replacement stock. Have the installer review the floor plan." },
  { q: "How are MOQ, price and production timing confirmed?", a: "They are confirmed for the selected construction, design, quantity, sample and artwork approvals. Distinguish the production-ready date from required arrival and local installation dates. Bulk quotations are FOB Tianjin Port." },
  { q: "Does FOB include overseas freight or local installation?", a: "Bulk quotations are FOB Tianjin Port. The buyer's appointed partners confirm onward freight, import clearance, duties, taxes, local delivery and installation. This page does not promise local stock or venue approvals." },
];
const sections = [
  { title: "Approve the Design at Floor Scale", paragraphs: [
    "A small image shows the motif but not how it reads across a long aisle or wide lobby. Provide artwork or a reference, colour direction and the room plan so scale and orientation can be reviewed together. Record the repeat across and along the roll, the principal sightlines and proposed joins before approving artwork.",
    "For a directional design, agree whether it continues through doorways or changes at defined transitions. A digital rendering supports discussion; a physical sample and written specification record what is approved. Review colour, pile, backing, pattern scale and construction under representative lighting.",
  ] },
  { title: "Review Maintenance and Installation Before Ordering", paragraphs: [
    "Describe vacuuming, spot cleaning, access around seats and the renovation window. High-use paths, concession zones and entrances may need different maintenance or flooring decisions. Assess spill-prone areas before assuming carpet is suitable throughout the venue.",
    "Ask the local installer to review substrate and moisture conditions, attachment system, seams, edges and transitions. Steps and nosings require a local project review. Decorative graphics do not replace required exit signage, step markings or lighting. Product selection does not include local installation or venue approval.",
  ] },
  { title: "Paid Samples: Define the Approval Purpose", paragraphs: [
    "Tell Vcarpets whether the review concerns material, colour or a custom pattern. We confirm the suitable sample format and availability before proceeding. Sample or development fees, courier charges and preparation time are agreed per project; no fixed dispatch window is promised on this page.",
    "Keep the sample reference, quoted construction and artwork revision together. A small swatch may not show a complete motif or how adjacent strips align. Agree the sample scope and record any approval conditions before production release.",
  ] },
  { title: "Prepare a FOB Tianjin Port Quotation Brief", paragraphs: [
    "Send company, business email, venue type, estimated area by zone, destination city or port and desired arrival or installation date. Include design references, the current drawing revision, document requirements and sample needs. Label preliminary drawings and undecided specifications so an estimate is not mistaken for an approved purchase basis.",
    "Request a written FOB Tianjin Port quotation identifying fibre, backing, roll width, construction, design, quantity basis, MOQ, packing, approval steps and production timing. Keep production readiness separate from overseas freight, import clearance and local installation, which your appointed partners should assess.",
    "The project form has no file-upload field. Summarise the drawing and artwork in the message, then arrange supporting-file transfer through the sales conversation or sales@vcarpets.com. You can start with the application and area even when the design is not final.",
  ] },
];
export default function Page() {
  return <ApplicationProductPage productId={productId} eyebrow="Entertainment Venue Broadloom" imageCaption={illustrationCaption} paidSamples
    overview={[
      "Vcarpets supplies custom cinema and theater carpet for commercial venue projects. Patterns and colours can be customised. Choose the nominated construction with the venue zones, maintenance routine, installer and required documents in view.",
      "Material, backing, pile and roll width are confirmed for each configuration. Separate auditorium seating, circulation, arrival, concession and step areas before comparing proposals. Bulk quotations are FOB Tianjin Port; paid sample requests and their costs and timing are confirmed per project.",
    ]}
    applications={[
      { title: "Auditoriums", text: "Send seating and access plans; review scale, cleaning access, attachment and required documents." },
      { title: "Aisles and Circulation", text: "Mark turns, doorways and steps; agree seams, direction, edge finishes and transitions with the installer." },
      { title: "Lobbies and Waiting Areas", text: "Provide traffic routes, furnishings and lighting references for physical sample and full-floor design review." },
      { title: "Concession Areas", text: "Describe spills and cleaning; review whether carpet is suitable and how the zone should be maintained." },
    ]}
    selectionChecks={[
      "Send dimensioned venue plans and label the drawing revision.",
      "Confirm fibre, backing, pile and available roll width in the quotation.",
      "Record artwork, repeat in both directions, orientation and sample approval.",
      "Have the local installer review cuts, seams, substrate, steps and transitions.",
      "Provide required test methods and check documents for the nominated construction.",
      "Separate installation allowance, replacement stock and production/arrival milestones.",
    ]} faqs={faqs}>
    <section className="section-padding border-t border-border bg-surface" aria-labelledby="pattern-illustrations-title">
      <div className="container-fox max-w-5xl">
        <h2 id="pattern-illustrations-title" className="mb-5 text-3xl font-black leading-tight text-primary md:text-4xl">Pattern and Application Illustrations</h2>
        <p className="mb-8 max-w-3xl leading-8 text-muted">Explore a consistent geometric design across lobby, circulation, detail and sample-review concepts. These AI-generated illustrations support design discussion; they are not product photographs, delivered projects or specification evidence. Confirm the actual pattern, colour, scale and construction with an approved physical sample.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {patternIllustrations.map((item) => (
            <figure key={item.src} className="min-w-0 overflow-hidden border border-border bg-white">
              <div className="aspect-[3/2]">
                <ProductImage src={item.src} alt={item.alt} className="h-full w-full" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px" loading="lazy" />
              </div>
              <figcaption className="p-5">
                <h3 className="mb-2 text-base font-black text-primary">{item.title}</h3>
                <p className="text-xs leading-6 text-muted">AI-generated illustration. Actual product and sample details require confirmation.</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
    {sections.map(section => <section key={section.title} className="section-padding border-t border-border"><div className="container-fox max-w-5xl"><h2 className="mb-6 text-3xl font-black leading-tight text-primary md:text-4xl">{section.title}</h2><div className="space-y-5">{section.paragraphs.map(text => <p key={text.slice(0,64)} className="leading-8 text-muted">{text}</p>)}</div></div></section>)}
    <section className="section-padding bg-surface"><div className="container-fox max-w-5xl"><h2 className="mb-6 text-3xl font-black text-primary">Continue Your Project Review</h2><div className="grid gap-4 sm:grid-cols-2">{[
      { href: "/blog/printed-broadloom-pattern-repeat-seam-planning", label: "Pattern Repeat and Seam Planning Guide" },
      { href: "/markets/ph/entertainment-venue-carpet", label: "Philippines Cinema and Entertainment Procurement" },
      { href: "/products/printed-carpet", label: "Compare Printed Carpet Options" },
      { href: "/products/carpet-tiles", label: "Compare Modular Carpet Tiles" },
      { href: "/blog/carpet-tiles-vs-broadloom-commercial-projects-guide", label: "Compare Formats by Cinema Zone" },
      { href: "/blog/commercial-carpet-sample-approval-checklist", label: "Separate Material, Colour and Pattern Approval" },
    ].map(link => <Link key={link.href} href={link.href} className="border border-border bg-white p-5 font-bold text-primary hover:border-accent">{link.label}</Link>)}</div></div></section>
  </ApplicationProductPage>;
}
