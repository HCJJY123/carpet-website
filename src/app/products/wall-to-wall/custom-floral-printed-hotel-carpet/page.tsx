import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";
import { getWhatsAppBusinessUrl } from "@/lib/whatsapp";

const path = "/products/wall-to-wall/custom-floral-printed-hotel-carpet";
const name = "Custom Floral Printed Wall-to-Wall Hotel Carpet";
const imageBase = "/images/products/wall-to-wall/custom-floral-printed-hotel-carpet";

const images = [
  { src: `${imageBase}/01-main-custom-floral-hotel-corridor.webp`, alt: "Custom floral printed wall-to-wall hotel carpet installed in a luxury corridor" },
  { src: `${imageBase}/02-banquet-hall-floral-carpet.webp`, alt: "Custom floral printed broadloom carpet for a hotel banquet hall" },
  { src: `${imageBase}/03-hotel-guestroom-printed-carpet.webp`, alt: "Floral printed wall-to-wall carpet in a luxury hotel guestroom" },
  { src: `${imageBase}/04-office-lobby-custom-carpet.webp`, alt: "Custom printed commercial carpet for a premium reception space" },
  { src: `${imageBase}/05-banquet-hall-project-view.webp`, alt: "Floral printed hotel carpet in a bright banquet and conference hall" },
  { src: `${imageBase}/06-hotel-corridor-project-view.webp`, alt: "Custom printed broadloom carpet installed along a hotel guestroom corridor" },
];

const specs = [
  ["Product Type", "Printed Tufted Wall-to-Wall Carpet"],
  ["Pattern", "Custom Floral Pattern / Customer Artwork"],
  ["Material Options", "Polypropylene, Nylon, Polyester or Wool-Blend Options"],
  ["Pile Height", "Custom-Made"],
  ["Gauge", "1/8 Inch"],
  ["Color", "Custom Colorways"],
  ["MOQ", "100 SQM"],
  ["Price Range", "US$3.60-6.40 / SQM"],
  ["Application", "Hotel Corridors, Guestrooms, Banquet Halls, Lobbies and Offices"],
  ["Customization", "Pattern, Color, Material and Pile Height"],
  ["Backing", "Confirmed According to Project Specification"],
  ["Roll Width", "Confirmed According to Project Specification"],
  ["Lead Time", "Confirmed After Artwork and Specification Review"],
];

const faqs = [
  ["What is custom floral printed wall-to-wall carpet?", "It is a tufted broadloom carpet with a printed decorative pattern applied to the carpet surface. Floral motifs, colors and pattern scale can be adjusted for hotel, banquet, corridor, lobby and office projects."],
  ["Can Vishomecarpet produce my own carpet pattern?", "Yes. Buyers can provide artwork, interior renderings, color references or an existing design concept. Vishomecarpet will review the pattern repeat, direction, scale and color requirements before confirming production."],
  ["Which carpet materials are available?", "Available project options may include polypropylene, nylon, polyester and wool-blend constructions. The recommended material depends on the application, required appearance, traffic conditions and budget."],
  ["What is the minimum order quantity?", "The minimum order quantity for this custom printed carpet program is 100 SQM. The final order requirement may depend on the selected material and specification."],
  ["What is the price of custom printed hotel carpet?", "The reference FOB price is US$3.60-6.40 per square meter. Final pricing depends on material, pile height, pattern complexity, total quantity and project requirements."],
  ["How long does custom carpet production take?", "Production time is confirmed after the artwork, material, quantity and technical specification have been approved. Buyers should provide the required delivery date when requesting a quotation."],
  ["What information is needed for a quotation?", "Please provide the destination country, total carpet area, application space, preferred material, pattern reference, room dimensions and target delivery date."],
  ["Can the pile height and colors be customized?", "Yes. Pile height and colorways can be adjusted according to project requirements, subject to material selection and production confirmation."],
];

export const metadata: Metadata = {
  title: "Custom Printed Carpet | Floral Hotel Broadloom | VISHOME",
  description: "Custom floral printed carpet for hotel lobbies, corridors, guestrooms, restaurants and offices. Patterned wall-to-wall broadloom, MOQ 100 SQM.",
  alternates: { canonical: absoluteUrl(path) },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Custom Printed Carpet | Floral Hotel Broadloom | VISHOME",
    description: "Made-to-order floral patterned broadloom for hotel lobbies, corridors, guestrooms, restaurants, showrooms, and offices.",
    url: absoluteUrl(path),
    images: [{ url: absoluteUrl(images[0].src), width: 1000, height: 1000, alt: images[0].alt }],
  },
};

function InquiryActions() {
  const message = (request: string) => getWhatsAppBusinessUrl(`Hello Zara, I am interested in ${name}. ${request}. My country, total area, application, material preference, pattern reference and target delivery date are:`);
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <Link href={`/contact?product=${encodeURIComponent(name)}#quote-form`} className="flex min-h-12 items-center justify-center bg-[#d9480f] px-4 py-3 text-center text-[11px] font-black uppercase tracking-wider text-white transition-colors hover:bg-[#b83a08]">Send Inquiry</Link>
      <a href={message("I want to send my design or pattern reference")} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center border border-border bg-white px-4 py-3 text-center text-[11px] font-black uppercase tracking-wider transition-colors hover:border-accent">Send Your Design</a>
      <a href={message("Please recommend suitable material options for my project")} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center border border-border bg-white px-4 py-3 text-center text-[11px] font-black uppercase tracking-wider transition-colors hover:border-accent">Request Material Options</a>
    </div>
  );
}

export default function CustomFloralPrintedHotelCarpetPage() {
  const productJsonLd = {
    "@context": "https://schema.org", "@type": "Product", name, sku: "VHC-WTW-FPC-001",
    brand: { "@type": "Brand", name: "Vishomecarpet" }, category: "Wall-to-Wall Carpet",
    description: "Made-to-order custom floral printed wall-to-wall carpet for hotel corridors, guestrooms, banquet halls, lobbies and office projects.",
    material: "Polypropylene, nylon, polyester or wool-blend options", url: absoluteUrl(path), image: images.map((item) => absoluteUrl(item.src)),
    offers: { "@type": "AggregateOffer", priceCurrency: "USD", lowPrice: "3.60", highPrice: "6.40", offerCount: "1", availability: "https://schema.org/PreOrder", seller: { "@type": "Organization", name: "Vishomecarpet" } },
  };
  const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
    { "@type": "ListItem", position: 3, name: "Wall-to-Wall Carpets", item: absoluteUrl("/products/wall-to-wall") },
    { "@type": "ListItem", position: 4, name, item: absoluteUrl(path) },
  ] };
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

  return (
    <main className="min-h-screen bg-white font-sans text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />

      <nav aria-label="Breadcrumb" className="border-b border-border bg-white">
        <ol className="container-fox flex flex-wrap gap-2 py-5 text-xs font-bold uppercase tracking-widest text-muted">
          <li><Link href="/">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/products">Products</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/products/wall-to-wall">Wall-to-Wall Carpets</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="text-primary">{name}</li>
        </ol>
      </nav>

      <section className="border-b border-border bg-slate-50 py-16 md:py-24">
        <div className="container-fox grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden border-8 border-white bg-white shadow-2xl">
              <Image src={images[0].src} alt={images[0].alt} fill priority quality={82} sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {images.slice(1, 4).map((image) => (
                <figure key={image.src} className="relative aspect-square overflow-hidden border border-border bg-white shadow-sm">
                  <Image src={image.src} alt={image.alt} fill loading="lazy" quality={82} sizes="(max-width: 1024px) 33vw, 16vw" className="object-cover" />
                </figure>
              ))}
            </div>
          </div>
          <div className="space-y-8 py-2">
            <div><p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-accent">Vishomecarpet Custom Printed Broadloom</p>
              <h1 className="mb-7 text-4xl font-black uppercase leading-tight md:text-6xl">{name}</h1>
              <p className="text-lg leading-relaxed text-muted">Made-to-order custom printed carpet with floral patterns, project colorways, material options, and adjustable pile height for hotel lobbies, corridors, guestrooms, banquet halls, restaurants, showrooms, and offices.</p>
            </div>
            <dl className="grid grid-cols-2 gap-px border border-border bg-border">
              {[["MOQ", "100 SQM"], ["FOB Price", "US$3.60-6.40 / SQM"], ["Availability", "Made to Order"], ["Sample", "Sample Option Available on Request"], ["Lead Time", "Confirmed After Artwork and Specification Review"], ["Customization", "Pattern, Color, Material and Pile Height"]].map(([label, value]) => <div key={label} className="bg-white p-5"><dt className="mb-2 text-[10px] font-black uppercase tracking-widest text-primary/40">{label}</dt><dd className="text-sm font-bold">{value}</dd></div>)}
            </dl>
            <InquiryActions />
            <p className="text-sm leading-relaxed text-muted">Send your project area, required quantity, destination country, application area, preferred material and pattern reference. Vishomecarpet will confirm the suitable specification, artwork process, price and production schedule.</p>
          </div>
        </div>
      </section>

      <section className="section-padding"><div className="container-fox grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div><p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-accent">Technical Data Sheet</p><h2 className="mb-6 text-3xl font-black uppercase md:text-5xl">Project Specifications</h2><p className="leading-relaxed text-muted">Final backing, roll width and production timing are confirmed only after artwork and project specifications are reviewed.</p></div>
        <dl className="grid gap-x-10 border border-border bg-surface p-7 md:grid-cols-2 md:p-10">{specs.map(([label, value]) => <div key={label} className="border-b border-border py-4"><dt className="mb-1 text-[10px] font-black uppercase tracking-widest text-primary/40">{label}</dt><dd className="text-sm font-bold leading-relaxed">{value}</dd></div>)}</dl>
      </div><div className="container-fox mt-10"><InquiryActions /></div></section>

      <section className="section-padding bg-surface"><div className="container-fox max-w-5xl space-y-14">
        <article><h2 className="mb-6 text-3xl font-black uppercase">Custom Printed Wall-to-Wall Carpet for Commercial Interiors</h2><div className="space-y-5 text-base leading-8 text-muted"><p>Vishomecarpet Custom Floral Printed Wall-to-Wall Hotel Carpet is developed for hospitality and commercial buyers who require a distinctive floor design without committing to a woven pattern program. The patterned broadloom surface supports floral motifs, decorative linework and project-specific color combinations for hotel corridors, guestrooms, banquet halls, lobbies, restaurants, showrooms and office interiors.</p><p>The product is supplied as made-to-order tufted broadloom. Buyers can select from polypropylene, nylon, polyester or wool-blend material options according to the required appearance, budget and application. Pile height, pattern scale and colorway can also be adjusted after the project requirements have been reviewed.</p><p>With an MOQ of 100 square meters, this custom printed carpet program is suitable for individual hotel renovations, sample commercial spaces, smaller banquet projects and trial orders before a larger rollout. Final pricing depends on material, pile specification, total quantity, pattern complexity and required finishing.</p></div></article>
        <article><h2 className="mb-6 text-3xl font-black uppercase">Custom Pattern and Color Development</h2><div className="space-y-5 text-base leading-8 text-muted"><p>Send Vishomecarpet a reference image, interior rendering, color palette or original artwork. The design team will review the pattern repeat, visual scale, color balance and installation direction before confirming production specifications.</p><p>For corridor projects, the pattern can be adjusted to create a directional layout that visually guides movement through the space. For guestrooms and offices, the design scale can be reduced to create a quieter and more balanced interior. Banquet halls and lobbies can use larger floral elements and stronger color contrast to create a more decorative public-area appearance.</p><p>Pattern approval, material selection and final color confirmation should be completed before mass production. Buyers should provide the total floor area, room dimensions and installation drawings whenever available.</p></div></article>
        <article><h2 className="mb-6 text-3xl font-black uppercase">Designed for Project-Based B2B Procurement</h2><div className="space-y-5 text-base leading-8 text-muted"><p>This product is intended for professional carpet distributors, hotel purchasing teams, commercial flooring contractors and interior design companies. Vishomecarpet can support specification review, pattern adjustment, quotation preparation, export packing and shipping coordination.</p><p>For an accurate quotation, provide the destination country, total required area, preferred material, application space, target delivery date and any pattern reference. The sales team will then confirm the suitable product specification, MOQ, price range and production schedule.</p></div></article>
      </div></section>

      <section className="section-padding"><div className="container-fox"><h2 className="mb-9 text-3xl font-black uppercase">Recommended Applications</h2><div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{["Hotel corridors", "Hotel guestrooms", "Banquet halls", "Hotel lobbies", "Serviced apartments", "Executive offices", "Commercial reception areas", "Hospitality renovation projects"].map((item) => <div key={item} className="bg-white p-6 text-sm font-black uppercase tracking-wider">{item}</div>)}</div></div></section>

      <section className="section-padding bg-surface"><div className="container-fox"><h2 className="mb-10 text-3xl font-black uppercase md:text-5xl">Project Gallery</h2><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{images.slice(1).map((image) => <figure key={image.src} className="relative aspect-square overflow-hidden bg-white"><Image src={image.src} alt={image.alt} fill loading="lazy" quality={82} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" /></figure>)}</div></div></section>

      <section className="section-padding border-y border-border"><div className="container-fox"><p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-accent">Why buyers choose Vishomecarpet</p><h2 className="mb-10 text-3xl font-black uppercase md:text-5xl">Built for Flexible Custom Carpet Procurement</h2><div className="grid gap-px border border-border bg-border md:grid-cols-4">{[["Low Project MOQ", "Start custom floral printed carpet projects from 100 SQM."], ["Custom Pattern Development", "Adjust pattern scale, direction and colors to match interior drawings."], ["Multiple Material Options", "Select PP, nylon, polyester or wool-blend options according to the project."], ["B2B Project Support", "Receive specification review, quotation support and export coordination."]].map(([title, text]) => <div key={title} className="bg-white p-7"><h3 className="mb-3 text-sm font-black uppercase">{title}</h3><p className="text-sm leading-relaxed text-muted">{text}</p></div>)}</div></div></section>

      <section className="section-padding bg-surface"><div className="container-fox"><h2 className="mb-10 text-3xl font-black uppercase md:text-5xl">Frequently Asked Questions</h2><div className="grid gap-5 lg:grid-cols-2">{faqs.map(([question, answer]) => <details key={question} className="border border-border bg-white p-6"><summary className="cursor-pointer font-black">{question}</summary><p className="mt-4 leading-relaxed text-muted">{answer}</p></details>)}</div></div></section>

      <section className="section-padding"><div className="container-fox"><h2 className="mb-8 text-3xl font-black uppercase">Related Products and Resources</h2><div className="grid gap-4 md:grid-cols-2">{[["Wall-to-Wall Carpets", "/products/wall-to-wall"], ["3D HD Printed Nylon Hotel Carpet", "/products/wall-to-wall/3d-printed-hotel-carpet"], ["Custom 3D Printed Banquet Hall Carpet", "/products/wall-to-wall/3d-printed-banquet-hall-carpet"], ["Custom Luxury Hotel Room Carpet", "/products/wall-to-wall/custom-luxury-hotel-room-carpet"], ["Carpet Printing Technology Guide", "/blog/carpet-printing-technology-design-to-installation-guide"], ["Hospitality Carpet Construction Guide", "/blog/axminster-vs-wilton-vs-tufted-hospitality-guide"]].map(([label, href]) => <Link key={href} href={href} className="border border-border p-6 font-black uppercase transition-colors hover:border-accent hover:text-accent">{label} <span aria-hidden="true">→</span></Link>)}</div><div className="mt-12"><InquiryActions /></div><p className="mt-6 text-center text-sm text-muted">Include your country, total area, application, material preference, pattern reference and target delivery date.</p></div></section>
    </main>
  );
}
