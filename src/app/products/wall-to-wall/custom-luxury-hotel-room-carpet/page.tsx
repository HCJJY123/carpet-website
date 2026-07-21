import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductTrackedLink, ProductViewEvent } from "@/components/ProductAnalytics";
import { brandInfo, products } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";
import { getWhatsAppBusinessUrl } from "@/lib/whatsapp";

const productId = "custom-luxury-hotel-room-carpet";
const sku = "VHC-WTW-HRC-001";
const name = "Custom Luxury Hotel Room Carpet";
const path = `/products/wall-to-wall/${productId}`;
const imageBase = "/images/products/wall-to-wall/custom-luxury-hotel-room-carpet";
const product = products.find((item) => item.id === productId);

const images = [
  { src: `${imageBase}/01-main-luxury-hotel-room-carpet.webp`, alt: "Custom luxury wall-to-wall carpet installed in a five-star hotel guestroom" },
  { src: `${imageBase}/02-hotel-suite-custom-carpet.webp`, alt: "Custom wall-to-wall carpet for a luxury hotel suite and lounge area" },
  { src: `${imageBase}/03-hotel-corridor-carpet.webp`, alt: "Custom hospitality carpet installed in a luxury hotel corridor" },
  { src: `${imageBase}/04-boutique-hotel-bedroom-carpet.webp`, alt: "Made-to-order carpet for a boutique hotel bedroom renovation" },
  { src: `${imageBase}/05-hospitality-carpet-roll.webp`, alt: "Custom hotel room broadloom carpet roll with abstract pattern" },
  { src: `${imageBase}/06-custom-carpet-pile-closeup.webp`, alt: "Close-up texture of custom hotel room carpet pile and colors" },
];

const analyticsPayload = {
  item_id: sku,
  item_name: name,
  item_category: "Wall-to-Wall Carpets",
  price_low: 3.1,
  price_high: 9.7,
  currency: "USD",
};

const inquiryPrompt = "Send your hotel location, total carpet area, room quantity, preferred design, material requirement and target delivery date. Vishomecarpet will confirm the suitable construction, price, MOQ and production schedule.";

const whatsappHref = getWhatsAppBusinessUrl(
  `Hello, I am interested in ${name}. Please help confirm material options, reference price, MOQ and production schedule.`,
  { product: name, intent: "custom hotel room carpet inquiry", pagePath: path }
);

const tds = [
  ["PRODUCT TYPE", "Custom Wall-to-Wall Hotel Carpet"],
  ["CONSTRUCTION", "Machine-Made Cut-Pile Carpet, Final Construction Confirmed by Project"],
  ["YARN COMPOSITION", "Nylon or Wool-Nylon Project Options, Subject to Final Confirmation"],
  ["PATTERN", "Custom Abstract, Geometric or Hospitality Design"],
  ["PILE PROFILE", "Medium Pile, Custom Specification Available"],
  ["COLOR", "Custom Project Colorways"],
  ["SIZE", "Custom Roll and Cutting Plan"],
  ["MOQ", "100 SQM"],
  ["REFERENCE FOB PRICE", "US$3.10-9.70 / SQM"],
  ["APPLICATION", "Hotel Guestrooms, Suites, Corridors, Offices and Hospitality Public Areas"],
  ["CUSTOMIZATION", "Pattern, Color, Material, Pile Specification and Size"],
  ["BACKING", "Confirmed According to Project Requirement"],
  ["ROLL WIDTH", "Confirmed According to Project Requirement"],
  ["LEAD TIME", "Confirmed After Design and Technical Approval"],
];

const contentSections = [
  {
    heading: "Custom Carpet Designed Around the Hotel Guest Experience",
    paragraphs: [
      "Vishomecarpet Custom Luxury Hotel Room Carpet is developed for guestrooms, suites and hospitality renovation projects that require a coordinated floor design without relying on a standard stock pattern. The pattern scale, colors and visual direction can be adjusted to match the room layout, furniture palette and overall hotel design concept.",
      "Hotel guestroom carpet normally requires a more balanced visual scale than carpet used in ballrooms or large public areas. The design can therefore use softer transitions, controlled contrast and smaller pattern repeats to create a comfortable interior while helping conceal everyday marks between cleaning cycles.",
      "This made-to-order program is suitable for hotel owners, hospitality purchasing companies, interior designers, flooring contractors, carpet distributors and project sourcing teams.",
    ],
  },
  {
    heading: "Flexible Design for Guestrooms, Suites and Corridors",
    paragraphs: [
      "Buyers can send an interior rendering, reference photograph, CAD floor plan, color palette or existing carpet sample. Vishomecarpet will review the requested pattern direction, color balance, room dimensions and installation requirements before confirming the final specification.",
      "For guestrooms and suites, the pattern can be scaled to work around beds, seating zones and circulation paths. For hotel corridors, a directional design can help guide movement and coordinate with door positions, elevator halls and transition areas.",
      "The final material composition, pile specification, backing and roll plan are confirmed according to the required appearance, project budget, order quantity and local installation conditions.",
    ],
  },
  {
    heading: "Suitable for Hotel Renovation and Trial Projects",
    paragraphs: [
      "With an MOQ starting from 100 square meters, this product is suitable for individual hotel floors, guestroom renovation phases, boutique hotel projects, serviced apartments and trial installations before a wider property rollout.",
      "The reference FOB price is US$3.10-9.70 per square meter. Final pricing depends on the selected material, construction, pile specification, pattern complexity, total quantity and packing requirements.",
      "For an accurate quotation, provide the destination country, total carpet area, number of rooms, room dimensions, preferred material, design reference and required delivery date.",
    ],
  },
  {
    heading: "Project Review Before Mass Production",
    paragraphs: [
      "Because this carpet is made to order, the design and technical specification should be reviewed before bulk manufacturing. Vishomecarpet can evaluate pattern scale, color direction, cutting requirements and room layout information supplied by the buyer.",
      "Any requirement relating to fire performance, testing standards, backing construction or regional building regulations must be stated during the quotation stage. Compliance should only be confirmed after the relevant specification and documentation have been reviewed.",
    ],
  },
];

const options = [
  {
    title: "Custom Luxury Hotel Room Carpet",
    description: "A flexible made-to-order option for guestrooms, suites and renovation projects with an MOQ from 100 SQM and customizable pattern, color and material specifications.",
    href: path,
    cta: "View This Product",
  },
  {
    title: "Premium Wool-Blend Hotel Broadloom",
    description: "A premium wool-blend broadloom option for buyers comparing higher hospitality specifications and larger project requirements.",
    href: "/products/wall-to-wall/luxury-hotel-broadloom",
    cta: "View Hotel Broadloom Option",
  },
  {
    title: "3D HD Printed Nylon Hotel Carpet",
    description: "A digitally printed nylon broadloom option for projects requiring highly detailed artwork and extensive color flexibility.",
    href: "/products/wall-to-wall/3d-printed-hotel-carpet",
    cta: "View Printed Nylon Hotel Carpet",
  },
];

const applications = [
  ["Hotel guestrooms", "Balanced pattern scale for room layouts and daily housekeeping needs."],
  ["Hotel suites", "Coordinated carpet direction for bedroom and lounge zones."],
  ["Boutique hotels", "Custom visual direction for smaller hospitality properties."],
  ["Serviced apartments", "Flexible design for phased room refresh programs."],
  ["Hotel corridors", "Directional pattern planning for guest movement and door alignment."],
  ["Executive offices", "Soft hospitality styling for premium workspaces."],
  ["Hospitality lounges", "Comfortable broadloom appearance for guest-facing spaces."],
  ["Restaurant private rooms", "Custom colors for intimate dining interiors."],
  ["Small hotel renovation phases", "100 SQM MOQ supports partial floor updates."],
  ["Trial floors before full-property rollout", "Review material and design before wider purchasing."],
];

const advantages = [
  ["100 SQM Project MOQ", "Suitable for individual hotel floors, boutique properties and phased renovation projects."],
  ["Custom Guestroom Design", "Adjust pattern scale, color direction and visual density for bedrooms and suites."],
  ["Project-Based Specification", "Material, backing, pile and construction are confirmed according to the actual project."],
  ["B2B Export Support", "Receive quotation preparation, cutting-plan coordination, packing and shipping support."],
  ["Clear Product Selection", "Compare printed, custom and premium broadloom options before confirming the order."],
];

const faqs = [
  ["What is a custom hotel room carpet?", "A custom hotel room carpet is produced according to the project's required pattern, color palette, room layout and technical specification rather than being selected only from a standard stock design."],
  ["Can Vishomecarpet match our hotel interior design?", "Yes. Buyers can send interior renderings, reference images, color palettes, CAD drawings or an existing carpet sample. The pattern scale and color direction can then be reviewed for the guestroom or suite layout."],
  ["What is the minimum order quantity?", "The reference minimum order quantity is 100 SQM. Final MOQ may depend on the selected material, construction and number of custom colorways."],
  ["What is the price of custom hotel room carpet?", "The reference FOB price is US$3.10-9.70 per square meter. Final pricing depends on the material, construction, pile specification, pattern complexity, quantity and packing requirements."],
  ["Is the construction fixed before quotation?", "No. The final construction must be confirmed according to the selected project specification. Buyers with a specific construction requirement should state it when requesting a quotation."],
  ["Which materials are available?", "Nylon and wool-nylon project options may be available. The final yarn composition should be confirmed together with the construction, application and project budget before ordering."],
  ["Can the carpet be used in hotel corridors?", "Yes. The pattern direction and scale can be adjusted for corridors, guestrooms, suites and connected hospitality spaces, subject to the selected technical specification."],
  ["What information is required for a quotation?", "Please provide the destination country, total carpet area, number of rooms, room dimensions, design reference, preferred material and target delivery date."],
  ["Can we request a sample before production?", "Sample options can be discussed after the design, material and technical specification have been reviewed. Sample cost and preparation time must be confirmed with the sales team."],
  ["How long does production take?", "Production time is confirmed after the artwork, material, construction, quantity and technical requirements have been approved."],
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name,
  sku,
  brand: { "@type": "Brand", name: "Vishomecarpet" },
  category: "Wall-to-Wall Hotel Carpet",
  description: "Made-to-order wall-to-wall carpet for hotel guestrooms, suites, corridors and hospitality renovation projects.",
  url: absoluteUrl(path),
  image: images.map((item) => absoluteUrl(item.src)),
  material: "Project-specific nylon or wool-nylon options",
  additionalProperty: [
    { "@type": "PropertyValue", name: "MOQ", value: "100 SQM" },
    { "@type": "PropertyValue", name: "Pattern", value: "Custom" },
    { "@type": "PropertyValue", name: "Application", value: "Hotel guestrooms, suites and corridors" },
    { "@type": "PropertyValue", name: "Availability", value: "Made to Order" },
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "3.10",
    highPrice: "9.70",
    offerCount: "1",
    availability: "https://schema.org/PreOrder",
    seller: { "@type": "Organization", name: "Vishomecarpet" },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
    { "@type": "ListItem", position: 3, name: "Wall-to-Wall Carpets", item: absoluteUrl("/products/wall-to-wall") },
    { "@type": "ListItem", position: 4, name, item: absoluteUrl(path) },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export const metadata: Metadata = {
  title: "Custom Luxury Hotel Room Carpet | Vishomecarpet",
  description: "Custom wall-to-wall carpet for hotel guestrooms, suites and corridors. Personalized patterns, flexible material options and MOQ from 100 sqm.",
  keywords: null,
  alternates: { canonical: absoluteUrl(path) },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Custom Luxury Hotel Room Carpet | Vishomecarpet",
    description: "Made-to-order wall-to-wall carpet for hotel guestrooms, suites, corridors and hospitality renovation projects. MOQ from 100 SQM.",
    url: absoluteUrl(path),
    images: [{ url: absoluteUrl(images[0].src), width: 1000, height: 1000, alt: images[0].alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Luxury Hotel Room Carpet | Vishomecarpet",
    description: "Custom wall-to-wall carpet for hotel guestrooms, suites and corridors. Personalized patterns, flexible material options and MOQ from 100 sqm.",
    images: [absoluteUrl(images[0].src)],
  },
};

function InquiryButtons({ compact = false }: { compact?: boolean }) {
  const buttonBase = "flex min-h-12 items-center justify-center px-5 py-3 text-center text-[11px] font-black uppercase tracking-[0.16em] transition-colors";
  const leadPayload = { product_id: sku, lead_source: "product_page" };
  const contactPayload = { product_id: sku };

  return (
    <div className={`grid gap-3 ${compact ? "md:grid-cols-3" : "sm:grid-cols-3"}`}>
      <ProductTrackedLink href={`/contact?product=${encodeURIComponent(name)}`} event="generate_lead" payload={leadPayload} className={`${buttonBase} bg-primary text-white hover:bg-black`}>
        Get Factory Quote
      </ProductTrackedLink>
      <ProductTrackedLink href={whatsappHref} event="contact" payload={{ ...contactPayload, contact_method: "whatsapp" }} target="_blank" rel="noopener noreferrer" className={`${buttonBase} border border-border bg-white text-primary hover:border-accent hover:text-accent`}>
        Send Your Hotel Design
      </ProductTrackedLink>
      <ProductTrackedLink href={`mailto:${brandInfo.email}?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(inquiryPrompt)}`} event="contact" payload={{ ...contactPayload, contact_method: "email" }} className={`${buttonBase} border border-border bg-white text-primary hover:border-accent hover:text-accent`}>
        Request Material Options
      </ProductTrackedLink>
    </div>
  );
}

export default function CustomLuxuryHotelRoomCarpetPage() {
  if (!product) return null;

  return (
    <main className="min-h-screen bg-white font-sans text-primary">
      <ProductViewEvent payload={analyticsPayload} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />

      <nav aria-label="Breadcrumb" className="border-b border-border bg-white">
        <ol className="container-fox flex flex-wrap gap-2 py-5 text-xs font-bold uppercase tracking-widest text-muted">
          <li><Link href="/">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/products">Products</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/products/wall-to-wall">Wall-to-Wall Carpets</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary">{name}</li>
        </ol>
      </nav>

      <section className="border-b border-border bg-slate-50 py-14 md:py-24">
        <div className="container-fox grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="relative aspect-square overflow-hidden border-8 border-white bg-white shadow-2xl">
            <Image src={images[0].src} alt={images[0].alt} fill priority sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover" />
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.26em] text-accent">Vishomecarpet Custom Hospitality Broadloom</p>
              <h1 className="mb-6 text-4xl font-black uppercase leading-tight md:text-6xl">{name}</h1>
              <p className="text-lg leading-relaxed text-muted">Made-to-order wall-to-wall carpet developed for hotel guestrooms, suites, corridors and hospitality renovation projects, with customizable patterns, colors and project-based material specifications.</p>
            </div>
            <dl className="grid grid-cols-2 gap-px border border-border bg-border">
              {[
                ["MOQ", "100 SQM"],
                ["Reference FOB Price", "US$3.10-9.70 / SQM"],
                ["Availability", "Made to Order"],
                ["Lead Time", "Confirmed After Design and Specification Approval"],
                ["Sample", "Sample Option Available on Request"],
                ["Customization", "Pattern, Color, Material and Size"],
              ].map(([label, value]) => (
                <div key={label} className="bg-white p-5">
                  <dt className="mb-2 text-[10px] font-black uppercase tracking-widest text-primary/40">{label}</dt>
                  <dd className="text-sm font-bold leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>
            <InquiryButtons />
            <p className="text-sm leading-relaxed text-muted">{inquiryPrompt}</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-accent">Technical Data Sheet</p>
            <h2 className="mb-6 text-3xl font-black uppercase md:text-5xl">Project Specifications</h2>
            <p className="leading-relaxed text-muted">Final yarn composition, backing, roll plan and production timing are confirmed only after design and technical approval.</p>
          </div>
          <dl className="grid gap-x-10 border border-border bg-surface p-7 md:grid-cols-2 md:p-10">
            {tds.map(([label, value]) => (
              <div key={label} className="border-b border-border py-4">
                <dt className="mb-1 text-[10px] font-black uppercase tracking-widest text-primary/40">{label}</dt>
                <dd className="text-sm font-bold leading-relaxed">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="container-fox mt-10"><InquiryButtons compact /></div>
      </section>

      <section className="section-padding bg-surface border-y border-border">
        <div className="container-fox max-w-5xl space-y-14">
          {contentSections.map((section) => (
            <article key={section.heading}>
              <h2 className="mb-6 text-3xl font-black uppercase">{section.heading}</h2>
              <div className="space-y-5 text-base leading-8 text-muted">
                {section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 72)}>{paragraph}</p>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <h2 className="mb-10 text-3xl font-black uppercase md:text-5xl">Which Hotel Carpet Construction Fits Your Project?</h2>
          <div className="grid gap-px border border-border bg-border lg:grid-cols-3">
            {options.map((option) => (
              <div key={option.title} className="bg-white p-7">
                <h3 className="mb-4 text-lg font-black uppercase">{option.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted">{option.description}</p>
                <Link href={option.href} className="text-xs font-black uppercase tracking-[0.18em] text-accent hover:text-primary">{option.cta} <span aria-hidden="true">→</span></Link>
              </div>
            ))}
          </div>
          <div className="mt-10"><InquiryButtons compact /></div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-fox">
          <h2 className="mb-10 text-3xl font-black uppercase md:text-5xl">Recommended Hospitality Applications</h2>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {applications.map(([title, description]) => (
              <div key={title} className="bg-white p-6">
                <h3 className="mb-3 text-sm font-black uppercase">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <h2 className="mb-10 text-3xl font-black uppercase md:text-5xl">Project Gallery</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.slice(1).map((image) => (
              <figure key={image.src} className="relative aspect-square overflow-hidden bg-white">
                <Image src={image.src} alt={image.alt} fill loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface border-y border-border">
        <div className="container-fox">
          <h2 className="mb-10 text-3xl font-black uppercase md:text-5xl">Built for Flexible Hotel Carpet Procurement</h2>
          <div className="grid gap-px border border-border bg-border md:grid-cols-5">
            {advantages.map(([title, description]) => (
              <div key={title} className="bg-white p-6">
                <h3 className="mb-3 text-sm font-black uppercase">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox max-w-5xl">
          <h2 className="mb-10 text-3xl font-black uppercase md:text-5xl">Frequently Asked Questions</h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <details key={question} className="border border-border bg-white p-6">
                <summary className="cursor-pointer font-black">{question}</summary>
                <p className="mt-4 leading-relaxed text-muted">{answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-10"><InquiryButtons compact /></div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="mb-5 text-3xl font-black uppercase md:text-5xl">Prepare a Clear Hotel Carpet Quote</h2>
            <p className="leading-relaxed text-white/72">Include these details so Vishomecarpet can confirm the right custom broadloom carpet specification and reference quotation.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Destination country", "Total carpet area", "Number of rooms", "Typical room dimensions", "Application area", "Preferred material", "Pattern reference", "Local fire-standard requirement", "Target delivery date"].map((item) => (
              <div key={item} className="border border-white/15 bg-white/5 p-4 text-sm font-black uppercase tracking-wider">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <h2 className="mb-8 text-3xl font-black uppercase">Related Products and Resources</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Wall-to-Wall Carpets", "/products/wall-to-wall"],
              ["Premium Wool-Blend Hotel Broadloom", "/products/wall-to-wall/luxury-hotel-broadloom"],
              ["3D HD Printed Nylon Hotel Carpet", "/products/wall-to-wall/3d-printed-hotel-carpet"],
              ["Custom Floral Printed Hotel Carpet", "/products/wall-to-wall/custom-floral-printed-hotel-carpet"],
              ["Hotel Carpet Solutions", "/hotel-carpet"],
              ["Hospitality Carpet Construction Guide", "/blog/axminster-vs-wilton-vs-tufted-hospitality-guide"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="border border-border p-6 font-black uppercase transition-colors hover:border-accent hover:text-accent">{label} <span aria-hidden="true">→</span></Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
