import type { Metadata } from "next";
import { products } from "@/lib/data";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import ProcurementSnapshot from "@/components/ProcurementSnapshot";
import ConversionLiftPanel from "@/components/ConversionLiftPanel";
import TechnicalSourcePanel from "@/components/TechnicalSourcePanel";
import AnswerFirst from "@/components/AnswerFirst";
import FactoryCtaBackground from "@/components/FactoryCtaBackground";
import { absoluteUrl, categoryBreadcrumbJsonLd, productItemListJsonLd, safeJsonLd } from "@/lib/seo";

const categoryPath = "/products/wall-to-wall";

const categoryFaqs = [
  {
    question: "What commercial wall-to-wall carpet does Vishomecarpet supply?",
    answer: "Vishomecarpet supplies project-based commercial broadloom carpet for hotels, corridors, guestrooms, ballrooms, banquet rooms, casinos, restaurants, conference rooms, clubs, cinemas, theatres, showrooms, offices, churches, and mosques. Construction and compliance requirements are confirmed for each contract carpet project."
  },
  {
    question: "Are you a wall-to-wall carpet manufacturer and supplier?",
    answer: "Yes. Vishomecarpet is a commercial carpet manufacturer and export supplier supporting custom design, specification review, samples, production, export packing, and international delivery for hotel and contract flooring projects."
  },
  {
    question: "What is the wall-to-wall carpet price?",
    answer: "The seven products on this page currently show reference FOB prices from US$3.10 to US$38.00 per square meter. Final commercial carpet price depends on yarn, construction, pile weight, pattern, quantity, backing, testing, and delivery requirements."
  },
  {
    question: "Which carpet is suitable for hotel rooms and corridors?",
    answer: "Hotel room carpet usually uses a quieter custom pattern and comfortable cut-pile or wool-blend construction. Hotel corridor carpet needs stronger appearance retention, directional pattern planning, stain-resistance options, and a roll plan designed for long circulation areas."
  },
  {
    question: "What is the difference between Axminster, Wilton, and printed broadloom carpet?",
    answer: "Axminster carpet is a woven construction commonly specified as an 80% wool and 20% nylon blend for premium hospitality projects. Wilton carpet is also woven but uses a different yarn and pattern structure. Printed broadloom applies custom artwork to a tufted surface and is often selected for lower setup cost, detailed patterns, and faster production."
  },
  {
    question: "Can I order custom hotel carpet or patterned wall-to-wall carpet?",
    answer: "Yes. Send your floor plan, total area, application, artwork, color references, destination country, and required date. The team can review custom printed carpet, patterned broadloom carpet, wool-blend carpet, and project-specific hotel carpet options before quoting."
  },
  {
    question: "Do you supply carpet for exhibitions, trade shows, or temporary events?",
    answer: "These uses often require a different construction from permanent hotel broadloom. Share the expected service life, installation method, fire standard, and quantity so Vishomecarpet can confirm whether exhibition carpet flooring, trade show carpet, expo carpet, event carpet, or red carpet for events is suitable."
  }
];

const constructionOptions = [
  {
    title: "Axminster Wool-Blend Carpet",
    text: "Woven 80% wool and 20% nylon broadloom for five-star hotels, luxury corridors, casino areas, and premium hospitality interiors.",
    href: "/products/wall-to-wall/luxury-hotel-broadloom"
  },
  {
    title: "Custom Printed Nylon Carpet",
    text: "High-definition patterned wall-to-wall carpet for hotel lobbies, guestrooms, restaurants, corridors, and branded commercial interiors.",
    href: "/products/wall-to-wall/3d-printed-hotel-carpet"
  },
  {
    title: "Hotel Room Cut-Pile Carpet",
    text: "Made-to-order hotel carpet flooring with project-specific nylon or wool-nylon options for guestrooms, suites, and renovation phases.",
    href: "/products/wall-to-wall/custom-luxury-hotel-room-carpet"
  },
  {
    title: "Banquet and Ballroom Carpet",
    text: "Heavy-commercial printed broadloom for banquet halls, ballrooms, conference rooms, event venues, and hospitality public areas.",
    href: "/products/wall-to-wall/3d-printed-banquet-hall-carpet"
  },
  {
    title: "Hotel Corridor Broadloom",
    text: "Patterned commercial carpet rolls for hotel hallways, elevator lobbies, long corridors, and high-traffic guest circulation.",
    href: "/products/wall-to-wall/glitter-hotel-corridor-broadloom-carpet"
  },
  {
    title: "Custom Floral Printed Carpet",
    text: "Low-MOQ custom printed carpet for corridors, guestrooms, banquet halls, hotel lobbies, offices, and reception spaces.",
    href: "/products/wall-to-wall/custom-floral-printed-hotel-carpet"
  },
  {
    title: "Cinema and Theater Carpet",
    text: "Custom patterned broadloom for auditoriums, aisles, theater lobbies, concession areas, and entertainment venues.",
    href: "/products/wall-to-wall/cinema-theater-carpet"
  }
];

const contractCarpetSelector = [
  {
    area: "Hotel Guestrooms & Suites",
    construction: "Custom cut-pile or printed broadloom",
    buyingRange: "MOQ from 100 SQM · FOB from US$3.10/SQM",
    href: "/products/wall-to-wall/custom-luxury-hotel-room-carpet"
  },
  {
    area: "Hotel Corridors & Lift Lobbies",
    construction: "Patterned high-traffic corridor broadloom",
    buyingRange: "MOQ from 300 SQM · FOB from US$4.20/SQM",
    href: "/products/wall-to-wall/glitter-hotel-corridor-broadloom-carpet"
  },
  {
    area: "Ballrooms & Banquet Halls",
    construction: "Dense custom printed contract carpet",
    buyingRange: "MOQ from 200 SQM · FOB from US$3.80/SQM",
    href: "/products/wall-to-wall/3d-printed-banquet-hall-carpet"
  },
  {
    area: "Luxury Hotels & Casinos",
    construction: "Woven 80% wool / 20% nylon Axminster",
    buyingRange: "MOQ from 500 SQM · FOB from US$18.00/SQM",
    href: "/products/wall-to-wall/luxury-hotel-broadloom"
  },
  {
    area: "Cinemas & Theaters",
    construction: "Custom printed entertainment-venue broadloom",
    buyingRange: "MOQ from 300 SQM · FOB from US$4.20/SQM",
    href: "/products/wall-to-wall/cinema-theater-carpet"
  }
];

export const metadata: Metadata = {
  title: "Contract Carpet Supplier | Hotel Wall-to-Wall Broadloom",
  description: "Compare contract carpet for hotel rooms, corridors, ballrooms and casinos. Review Axminster, printed broadloom, MOQ, samples, lead time and factory FOB pricing.",
  alternates: { canonical: categoryPath },
  openGraph: {
    title: "Contract Carpet Supplier | Hotel Wall-to-Wall Broadloom",
    description: "Compare seven contract carpet and broadloom options by construction, factory price, MOQ, samples, and hospitality or entertainment application.",
    url: absoluteUrl(categoryPath),
    type: "website",
    images: [{ url: absoluteUrl("/images/category-broadloom.webp"), alt: "Commercial wall-to-wall hotel broadloom carpet by Vishomecarpet" }]
  }
};

export default function CategoryPage() {
  const categoryId = "wall-to-wall";
  const categoryProducts = products.filter((p) => p.category === categoryId);
  const jsonLd = productItemListJsonLd({
    name: "Commercial Wall-to-Wall Carpet and Hotel Broadloom",
    description: "Custom commercial broadloom carpet for hotel guestrooms, corridors, lobbies, ballrooms, banquet halls, and contract flooring projects.",
    url: categoryPath,
    items: categoryProducts,
  });
  const breadcrumbJsonLd = categoryBreadcrumbJsonLd(categoryId);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categoryFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      <section className="relative overflow-hidden bg-[#102A43] py-20 text-center md:py-24">
        <div className="absolute inset-0">
          <ProductImage
            src="/images/solutions/hotel-carpet-hero-c68765be.webp"
            alt="Luxury hotel lobby with custom patterned wall-to-wall broadloom carpet"
            className="h-full w-full"
            priority
            quality={75}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/52 md:bg-black/36" />
        <div className="container-fox relative">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-[#f0a23a]">Commercial Carpet Manufacturer & Export Supplier</p>
          <h1 className="text-4xl font-black uppercase text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.72)] md:text-6xl">Contract Carpet & Hotel Broadloom</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/82 drop-shadow-[0_1px_5px_rgba(0,0,0,0.72)]">
            Custom commercial wall-to-wall carpet for hotel rooms, corridors, lobbies, ballrooms, casinos, cinemas, theaters, restaurants, and contract interiors. Compare construction, FOB price, MOQ, and lead time across seven project-ready broadloom options.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/contact?product=Wall-to-Wall%20Carpet#quote-form" className="btn-fox-orange">Get Project Quote in 24 Hours</Link>
            <Link href="#wall-to-wall-products" className="inline-flex min-h-12 items-center justify-center border border-white/40 px-7 py-3 text-xs font-black uppercase tracking-widest text-white transition-colors hover:border-white">Compare Products</Link>
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-white/65">Specification review · Samples / strike-offs · FOB / CIF / DAP</p>
        </div>
      </section>
      <AnswerFirst
        title="Which Wall-to-Wall Carpet Should a Hotel Buyer Specify?"
        answer="Choose hotel wall-to-wall carpet by area and construction, not pattern alone. Guestrooms usually prioritize comfort and design flexibility; corridors need appearance retention and a coordinated roll plan; ballrooms need dense project-grade broadloom; premium hotels and casinos may specify woven wool-nylon Axminster. Confirm traffic, fire standard, acoustics, cleaning method, pattern repeat, waste allowance, and installation schedule before ordering."
        facts={[
          { label: "Construction Options", value: "Printed, cut-pile, Axminster and project broadloom" },
          { label: "Published FOB Range", value: "US$3.10-38.00 / SQM across current products" },
          { label: "Typical Production", value: "15-35 days after approvals" },
          { label: "Buyer Checks", value: "Floor plan, fire requirement, roll plan, repeat and waste allowance" },
        ]}
        moq={[
          { label: "Sample", value: "Material swatch or printed strike-off by construction" },
          { label: "Trial Order", value: "Generally 50-100 SQM after design or construction approval" },
          { label: "Project MOQ", value: "Generally 100-500 SQM depending on construction" },
        ]}
        suitableFor={[
          "Hotel rooms, corridors, lobbies, ballrooms, casinos and cinemas",
          "Custom pattern, coordinated roll planning and contract installation",
        ]}
        notSuitableFor={[
          "Wet or outdoor areas without a purpose-built flooring system",
          "Ordering from artwork alone without site measurements and fire requirements",
        ]}
        evidence="The ranges are derived from the seven products currently listed on this category page and were reviewed on July 31, 2026. Final price, availability, fire documentation, pattern feasibility, roll planning, and lead time are confirmed only after specification and sample review."
        quoteHref="/contact?product=Wall-to-Wall%20Carpet#quote-form"
        quoteLabel="Request Broadloom Recommendation"
      />

      <ConversionLiftPanel
        eyebrow="Hotel Project Inquiry Shortcut"
        title="Send Room Area, Corridor Length, Pattern Need and Destination"
        body="Hotel broadloom buyers often need a roll plan, pattern repeat check, sample or strike-off, fire document review, and export packing. Submit these basics early so the quote can match your actual project instead of a generic carpet price."
        product="Wall-to-Wall Carpet"
        quoteHref="/contact?product=Wall-to-Wall%20Carpet#quote-form"
        compact
      />

      <ProcurementSnapshot
        title="Hotel Broadloom Buying Facts"
        facts={[
          { label: "Project MOQ", value: "100-500 SQM", detail: "Samples and trial orders vary by construction." },
          { label: "Production", value: "15-35 Days", detail: "Custom artwork and specification approval affect timing." },
          { label: "Samples", value: "Sample / Strike-Off", detail: "Color, pattern scale, pile, and backing are confirmed by project." },
          { label: "Trade Terms", value: "FOB / CIF / DAP", detail: "Roll plan, packing, and freight depend on destination." },
        ]}
        quoteHref="/contact?product=Wall-to-Wall%20Carpet#quote-form"
        downloadHref="/downloads/hotel-broadloom-procurement-guide.pdf"
        downloadName="Hotel Broadloom Procurement Guide"
      />
      <TechnicalSourcePanel
        title="Verify Hotel Broadloom Before Design Approval"
        summary="Confirm application area, fiber and construction, pile weight, roll width, pattern repeat, fire-performance requirement, sample or strike-off approval, packing, and delivery basis before production."
        documents={[
          { label: "Hotel Broadloom Procurement Guide", href: "/downloads/hotel-broadloom-procurement-guide.pdf" },
        ]}
        sources={[
          { label: "Manufacturer Profile", href: "/commercial-carpet-manufacturer" },
          { label: "Factory & Production", href: "/factory" },
          { label: "Hotel Acoustic Guide", href: "/blog/hotel-noise-acoustic-carpet-specification-guide" },
          { label: "Hotel Pattern Guide", href: "/blog/why-hotel-carpet-patterns-look-busy" },
          { label: "Request a Quote", href: "/contact?product=Wall-to-Wall%20Carpet#quote-form" },
        ]}
      />
      <section className="border-b border-border bg-white py-14 md:py-18" data-funnel-section="contract_carpet_selector">
        <div className="container-fox">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">Direct Contract Carpet Answer</p>
              <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-4xl">Choose by Area, Traffic and Construction</h2>
              <p className="mt-5 leading-8 text-muted">
                For hotel contract carpet, choose the construction by application before comparing price. Guestrooms prioritize comfort and design flexibility; corridors need appearance retention; ballrooms need dense project-grade broadloom; premium hotels and casinos commonly specify woven wool-nylon Axminster.
              </p>
              <Link href="/contact?product=Contract%20Carpet#quote-form" className="btn-fox-orange mt-7">Request Contract Carpet Quote</Link>
            </div>
            <div className="overflow-x-auto border border-border">
              <table className="w-full min-w-[700px] border-collapse text-left">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-5 py-4 text-xs font-black uppercase">Project Area</th>
                    <th className="px-5 py-4 text-xs font-black uppercase">Recommended Construction</th>
                    <th className="px-5 py-4 text-xs font-black uppercase">Reference Buying Range</th>
                    <th className="px-5 py-4 text-xs font-black uppercase">Product</th>
                  </tr>
                </thead>
                <tbody>
                  {contractCarpetSelector.map((item) => (
                    <tr key={item.area} className="border-t border-border align-top">
                      <td className="px-5 py-5 text-sm font-black text-primary">{item.area}</td>
                      <td className="px-5 py-5 text-sm leading-relaxed text-muted">{item.construction}</td>
                      <td className="px-5 py-5 text-sm leading-relaxed text-muted">{item.buyingRange}</td>
                      <td className="px-5 py-5">
                        <Link href={item.href} className="text-xs font-black uppercase text-accent hover:text-primary">View →</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section id="wall-to-wall-products" className="section-padding scroll-mt-24">
        <div className="container-fox">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-black uppercase text-primary md:text-4xl">Seven Commercial Broadloom Carpet Options</h2>
            <p className="leading-relaxed text-muted">Select a product by construction and application. Each page includes reference pricing, minimum order quantity, technical data, project images, and a direct inquiry form.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categoryProducts.map((p) => (
              <Link
                key={p.id}
                href={`/products/${categoryId}/${p.id}`}
                className="group flex h-full flex-col rounded-lg border border-border bg-white p-6 transition-all duration-300 hover:border-accent hover:shadow-xl"
                data-track-event={p.id === "custom-luxury-hotel-room-carpet" ? "select_item" : undefined}
                data-item-id={p.id === "custom-luxury-hotel-room-carpet" ? "VHC-WTW-HRC-001" : undefined}
                data-item-name={p.id === "custom-luxury-hotel-room-carpet" ? p.name : undefined}
                data-item-category={p.id === "custom-luxury-hotel-room-carpet" ? "Wall-to-Wall Carpets" : undefined}
              >
                <div className="aspect-square overflow-hidden mb-8 shadow-md border border-border">
                  <ProductImage src={p.image} alt={p.imageAlt || p.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <h3 className="mb-6 min-h-20 text-xl font-bold uppercase leading-tight text-primary transition-colors group-hover:text-accent">{p.name}</h3>
                <p className="mb-6 min-h-20 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mb-6 space-y-2 border-t border-border pt-5 text-[11px] uppercase">
                  <div className="flex justify-between gap-4">
                    <span className="text-muted">{["custom-luxury-hotel-room-carpet", "custom-floral-printed-hotel-carpet"].includes(p.id) ? "Reference FOB Price" : "FOB Price"}</span>
                    <span className="text-right font-black text-primary">{p.fobPrice?.display}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted">Project MOQ</span>
                    <span className="text-right font-black text-primary">{p.moqTiers.project}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted">Availability</span>
                    <span className="text-right font-black text-primary">{["custom-luxury-hotel-room-carpet", "custom-floral-printed-hotel-carpet"].includes(p.id) ? "Made to Order" : "In Stock / Made to Order"}</span>
                  </div>
                </div>
                <div className="mt-auto flex min-h-11 items-center justify-between rounded-sm bg-primary px-4 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-white transition-colors group-hover:bg-[#C8752A]">
                  <span>View Product & Pricing</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <div className="max-w-4xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">Contract Carpet Buying Guide</p>
            <h2 className="mb-7 text-3xl font-black uppercase text-primary md:text-5xl">Commercial Wall-to-Wall Carpet Supplier for Project Buyers</h2>
            <div className="space-y-5 text-base leading-8 text-muted">
              <p>Vishomecarpet manufactures and supplies commercial carpet rolls for hospitality and contract projects. The collection covers woven Axminster carpet, 80 wool 20 nylon carpet, custom printed carpet, patterned broadloom carpet, machine-tufted hotel room carpet, and high-traffic corridor carpet.</p>
              <p>Project applications include carpet for hotel rooms, hotel hallway carpet, hotel lobby carpet, banquet room carpet, ballroom carpet, casino style carpet, restaurant carpet, conference room carpet, club carpet, cinema carpet, theatre carpet, showroom carpet, office carpet rolls, church carpet, mosque carpet, and mosque carpet rolls. Final construction, fire performance, and installation requirements must be confirmed for the intended building.</p>
              <p>For Wilton carpet, solution dyed nylon carpet, Saxony carpet rolls, machine tufted carpet, cut pile carpet rolls, polyester carpet rolls, wool carpet wholesale, exhibition carpet flooring, needle punch carpet, marine carpet rolls, or another construction not shown in the seven products, send the exact specification. The factory will confirm feasibility rather than substituting a different product without approval.</p>
              <p>Vishomecarpet supports wholesale hotel carpet orders as a commercial carpet manufacturer, broadloom carpet manufacturer, hospitality carpet manufacturer, and export supplier. Buyers comparing commercial carpet suppliers or hotel carpet suppliers can review product-level prices and specifications before requesting a factory quotation.</p>
            </div>
          </div>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {constructionOptions.map((option) => (
              <Link key={option.href} href={option.href} className="group bg-white p-7 transition-colors hover:bg-primary">
                <h3 className="mb-3 text-base font-black uppercase text-primary group-hover:text-white">{option.title}</h3>
                <p className="text-sm leading-relaxed text-muted group-hover:text-white/75">{option.text}</p>
                <span className="mt-5 inline-block text-[10px] font-black uppercase tracking-widest text-accent">View Product →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding" data-funnel-section="quote_requirements">
        <div className="container-fox grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">Transparent Buying Information</p>
            <h2 className="mb-6 text-3xl font-black uppercase text-primary md:text-5xl">Wall-to-Wall Carpet Price & Quote Requirements</h2>
            <p className="leading-8 text-muted">Reference FOB prices across the seven products range from US$3.10 to US$38.00 per square meter. Send the information below for an accurate commercial carpet quotation and cutting plan.</p>
          </div>
          <dl className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {[
              ["Project Area", "Total SQM, room count, and floor plans"],
              ["Application", "Guestroom, corridor, ballroom, lobby, or other space"],
              ["Construction", "Axminster, printed, tufted, wool-blend, or specified alternative"],
              ["Performance", "Traffic class, fire standard, stain resistance, and antistatic needs"],
              ["Design", "Artwork, pattern repeat, colors, and brand references"],
              ["Delivery", "Destination country, target date, and packing requirements"]
            ].map(([term, detail]) => (
              <div key={term} className="bg-white p-6">
                <dt className="mb-2 text-xs font-black uppercase text-primary">{term}</dt>
                <dd className="text-sm leading-relaxed text-muted">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox max-w-5xl">
          <h2 className="mb-10 text-3xl font-black uppercase text-primary md:text-5xl">Wall-to-Wall Carpet FAQ</h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {categoryFaqs.map((item) => (
              <details key={item.question} className="border border-border bg-white p-6">
                <summary className="cursor-pointer font-black text-primary">{item.question}</summary>
                <p className="mt-4 leading-relaxed text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <FactoryCtaBackground className="py-16 text-center">
        <div className="container-fox">
          <h2 className="text-2xl font-black uppercase text-white md:text-4xl">Request a Contract Carpet Quotation</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/70">Send your carpet area, application, construction, destination, and required date for a product recommendation and project price.</p>
          <Link href="/contact?product=Wall-to-Wall%20Carpet#quote-form" className="btn-fox-orange mt-8">Send Inquiry</Link>
        </div>
      </FactoryCtaBackground>
    </div>
  );
}
