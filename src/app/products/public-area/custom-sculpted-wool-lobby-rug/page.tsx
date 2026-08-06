import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brandInfo, products } from "@/lib/data";
import ProductImage from "@/components/ProductImage";
import AnswerFirst from "@/components/AnswerFirst";
import ProductTrustLinks from "@/components/ProductTrustLinks";
import { ProductTrackedLink, ProductViewEvent } from "@/components/ProductAnalytics";
import { ProductSpecCards } from "@/components/ProductConversion";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";
import { getContactBridgeUrl } from "@/lib/whatsapp";

const productId = "custom-sculpted-wool-lobby-rug";
const product = products.find((item) => item.id === productId);
const path = "/products/public-area/custom-sculpted-wool-lobby-rug";
const canonical = absoluteUrl(path);
const imageBase = "/images/products/public-area/custom-sculpted-wool-lobby-rug";
const sku = "VHC-PA-SWR-001";

const images = [
  { src: `${imageBase}/04-commercial-showroom-custom-rug.webp`, alt: "Custom sculpted wool rug in a premium commercial showroom", title: "Commercial Showroom" },
  { src: `${imageBase}/01-main-hotel-lobby-wool-rug.webp`, alt: "Custom sculpted wool lobby rug with sand beige concentric square pattern", title: "Hotel Lobby Feature Rug" },
  { src: `${imageBase}/02-executive-lounge-sculpted-rug.webp`, alt: "Custom wool area rug for an executive hotel lounge", title: "Executive Lounge" },
  { src: `${imageBase}/03-reception-area-geometric-wool-rug.webp`, alt: "Geometric wool rug for a luxury commercial reception area", title: "Reception Area" },
  { src: `${imageBase}/05-private-club-lounge-wool-rug.webp`, alt: "Sand beige sculpted wool rug in a private club lounge", title: "Private Club Lounge" },
];

const heroFacts = [
  ["Product Type", "Decorative Area Rug"],
  ["Starting Price", "US$500 / Piece"],
  ["Availability", "Made to Order"],
  ["Lead Time", "Confirmed After Size and Specification Approval"],
  ["Customization", "Size, Color, Material and Pattern Scale"],
];

const sections = [
  {
    heading: "A Sculpted Wool Feature Rug for Refined Public Interiors",
    body: [
      "Vishomecarpet Custom Sculpted Wool Lobby Rug is a made-to-order decorative area rug developed for hotel lobbies, executive lounges, reception areas, private clubs, villas and premium commercial showrooms.",
      "The neutral sand-beige palette creates a calm foundation for stone, timber, leather and upholstered furniture. Its concentric-square design uses a dimensional sculpted surface to introduce visual depth without relying on strong colors or highly decorative motifs.",
      "Unlike wall-to-wall broadloom, this product is designed as a separate feature rug. It can be positioned beneath a lobby seating group, reception lounge, executive waiting area or display zone to define the space while leaving the surrounding architectural floor visible.",
    ],
  },
  {
    heading: "Dimensional Concentric-Square Design",
    body: [
      "The design is based on a sequence of nested square forms arranged around a shared center. Differences in surface height create a layered geometric effect that changes subtly with viewing angle and interior lighting.",
      "The pattern can be scaled according to the finished rug dimensions. Larger rugs can use wider spacing and broader sculpted bands, while smaller reception rugs can use a tighter pattern repeat. The final carving depth, pile profile and production construction must be confirmed before ordering.",
      "The standard visual direction uses a sand or warm beige neutral tone. Alternative colors can be reviewed to coordinate with a hotel material board, furniture scheme, stone finish or interior rendering.",
    ],
  },
  {
    heading: "Custom Sizing for Lobby and Lounge Layouts",
    body: [
      "Buyers can provide a floor plan, furniture layout, interior rendering or target dimensions. Vishomecarpet will review the relationship between the rug size, seating group, circulation route and pattern scale before confirming the quotation.",
      "For hotel lobbies and executive lounges, the rug should normally extend beneath the primary furniture group to create a visually connected seating zone. For reception spaces or showrooms, custom dimensions can be developed around counters, display furniture or architectural features.",
      "Final size, shape, edge finish, backing and packing method must be confirmed according to the installation environment and project requirements.",
    ],
  },
  {
    heading: "Specify the Project Requirements Before Ordering",
    body: [
      "Wool rugs can provide a warm and premium appearance, but commercial buyers must evaluate the intended traffic level, cleaning program, entrance conditions and local fire requirements before approval.",
      "This product should not automatically be specified for wet entrances, airport corridors, continuous luggage-wheel routes or other extra-heavy traffic areas unless suitable performance testing and construction details have been confirmed.",
      "For high-traffic wall-to-wall applications, buyers should compare this decorative area rug with Vishomecarpet's dedicated High-Traffic Public Area Corridor Carpet.",
    ],
  },
  {
    heading: "B2B Custom Rug Procurement",
    body: [
      "This product is intended for interior design studios, hotel purchasing teams, hospitality contractors, furniture project suppliers, rug distributors and commercial sourcing companies.",
      "The reference starting price is US$500 per piece, with a minimum order quantity of 10 pieces. Final pricing depends on the finished dimensions, material composition, pile profile, sculpting complexity, quantity, edge finishing and packing requirements.",
      "For an accurate quotation, provide the destination country, required quantity, dimensions, application space, preferred colors, material expectations and target delivery date.",
    ],
  },
];

const tds = [
  ["Product Type", "Custom Decorative Area Rug"],
  ["Material", "Wool Material; Exact Fiber Composition Confirmed Before Order"],
  ["Design", "Concentric Square Geometric Pattern"],
  ["Surface", "Sculpted Dimensional Texture"],
  ["Color", "Sand Beige / Custom Color Options"],
  ["Construction", "Final Production Construction Confirmed by Specification"],
  ["Pile Profile", "High-Low Sculpted Pile; Exact Height Confirmed Before Order"],
  ["Shape", "Rectangular Standard / Custom Shape by Review"],
  ["Size", "Custom Dimensions"],
  ["Edge Finish", "Confirmed According to Final Design"],
  ["Backing", "Confirmed According to Project Requirement"],
  ["Project MOQ", "10 Pieces"],
  ["Starting Price", "US$500 / Piece"],
  ["Availability", "Made to Order"],
  ["Application", "Hotel Lobbies, Executive Lounges, Reception Areas, Clubs, Villas and Showrooms"],
  ["Traffic Use", "Decorative Indoor Public Spaces; Traffic Rating Must Be Confirmed"],
  ["Fire Rating", "Not Claimed Until Required Standard and Product Test Are Confirmed"],
  ["Lead Time", "Confirmed After Size, Material and Specification Approval"],
];

const applications = [
  ["Hotel Lobby Seating Area", "Use the rug to define a central seating group within a stone or timber lobby floor."],
  ["Executive Lounge", "Add a quiet geometric focal point beneath lounge chairs and coffee tables."],
  ["Reception Waiting Area", "Create a visually connected waiting zone in offices, clubs or hospitality spaces."],
  ["Luxury Commercial Showroom", "Coordinate the sand-beige wool texture with furniture and material displays."],
  ["Private Club Lounge", "Introduce a warm residential character into controlled-traffic hospitality interiors."],
  ["Villa and Serviced Residence", "Use a custom-size feature rug in formal living areas and shared residential lounges."],
  ["Interior Design Sample Project", "Develop custom dimensions and colors for designer-led furniture and hospitality projects."],
];

const comparisons = [
  {
    title: "Custom Sculpted Wool Lobby Rug",
    href: path,
    description: "A decorative loose-laid feature rug for controlled-traffic hotel lobbies, lounges, reception areas and luxury commercial interiors.",
    best: "Design-focused seating zones and premium interior projects.",
    cta: "View This Product",
  },
  {
    title: "High-Traffic Public Area Corridor Carpet",
    href: "/products/public-area/public-area-heavy-duty",
    description: "Heavy-duty wall-to-wall broadloom developed for continuous foot traffic, luggage routes and large commercial public areas.",
    best: "Airports, exhibition centers, corridors and transport facilities.",
    cta: "View Heavy-Duty Carpet",
  },
  {
    title: "Natural Sisal Linen-Weave Commercial Carpet",
    href: "/products/public-area/natural-sisal-carpet",
    description: "Natural woven flooring for offices, boutique retail, reception spaces and biophilic commercial interiors.",
    best: "Natural-texture design projects and controlled indoor commercial spaces.",
    cta: "View Natural Sisal Carpet",
  },
];

const advantages = [
  ["Custom Dimensions", "Adjust the finished size to match furniture layouts, lobby seating groups and reception zones."],
  ["Sculpted Geometric Surface", "Create dimensional visual depth through a layered concentric-square design."],
  ["Neutral Project Palette", "Coordinate sand, beige and other custom colors with stone, timber and furniture finishes."],
  ["B2B Quantity Supply", "MOQ starts from 10 pieces for hotel, showroom, distributor and design-studio orders."],
  ["Project Specification Review", "Confirm material, pile profile, backing, edge finish and packing before production."],
  ["Export Coordination", "Receive quotation, packing and shipping support based on destination and order quantity."],
];

const quoteItems = [
  "Destination country",
  "Required quantity",
  "Finished rug dimensions",
  "Application area",
  "Furniture layout",
  "Preferred color palette",
  "Required material composition",
  "Expected pile profile",
  "Edge-finishing requirement",
  "Backing requirement",
  "Local fire-standard requirement",
  "Project delivery date",
  "Packing requirement",
];

const faqs = [
  ["What is a sculpted wool lobby rug?", "A sculpted wool lobby rug is a decorative area rug with differences in surface height that create a dimensional pattern. This product uses a concentric-square design intended for hotel lobbies, lounges, reception areas and other design-focused indoor spaces."],
  ["Is this a wall-to-wall carpet?", "No. This product is designed as a separate area rug rather than wall-to-wall broadloom. Buyers requiring continuous corridor or airport flooring should review Vishomecarpet's high-traffic public area carpet."],
  ["Is the rug made from 100% wool?", "The reference product is described as using wool material. The exact fiber composition must be confirmed together with the required construction, size and project specification before ordering."],
  ["Can the rug size be customized?", "Yes. Buyers can provide finished dimensions, floor plans or furniture layouts. The rug size and pattern scale can then be reviewed for the intended lobby, lounge or reception space."],
  ["Can the sand color be changed?", "Yes. Custom color options can be reviewed using an interior rendering, material board, color reference or physical sample. Final color approval should be completed before production."],
  ["What is the minimum order quantity?", "The reference minimum order quantity is 10 pieces. Final MOQ may depend on the rug dimensions, material, number of colorways and construction requirements."],
  ["What is the price of the rug?", "The reference starting price is US$500 per piece. Final pricing depends on the dimensions, material composition, pile profile, sculpting complexity, quantity, edge finishing and packing requirements."],
  ["Is this rug suitable for high-traffic public areas?", "It is intended primarily as a decorative feature rug for controlled indoor public spaces. Traffic classification, fire performance, backing and maintenance requirements must be confirmed before use in a commercial project."],
  ["Can the rug be used at a hotel entrance?", "Wet entrances and continuously trafficked entrance zones require careful specification. The buyer should confirm moisture exposure, soil control, cleaning methods, backing and slip requirements before selecting this product."],
  ["Can Vishomecarpet produce a different geometric pattern?", "Custom pattern scale, color and design options can be reviewed according to the project. Buyers should provide artwork, interior renderings or reference images for evaluation."],
  ["What information is needed for a quotation?", "Please provide the destination country, quantity, finished dimensions, application space, preferred colors, material requirement, target delivery date and any required testing standard."],
  ["How long does production take?", "Production time is confirmed after the size, material, construction, color, quantity and technical specification have been approved."],
];

const inquiryText =
  "Hello, I am interested in Custom Sculpted Wool Lobby Rug. Please help confirm size options, material options, MOQ, starting price and project quotation.\n\nProduct / Topic: Custom Sculpted Wool Lobby Rug\nInquiry Type: custom wool lobby rug inquiry\nSource Page: /products/public-area/custom-sculpted-wool-lobby-rug"
;

const mailBody = encodeURIComponent(
  "Send the destination country, required rug quantity, target dimensions, application space, preferred color, material requirement and project delivery date. Vishomecarpet will confirm the suitable specification, sample option, packing method and final quotation."
);

function cta(location: string) {
  return (
    <div className="mt-8 grid gap-3 md:grid-cols-3">
      <ProductTrackedLink
        href="/contact?product=Custom%20Sculpted%20Wool%20Lobby%20Rug"
        event="generate_lead"
        payload={{ product_id: sku, product_name: "Custom Sculpted Wool Lobby Rug", lead_source: "product_page", cta_location: location }}
        className="flex min-h-12 items-center justify-center bg-primary px-5 py-3 text-center text-[11px] font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-black"
      >
        Get Project Quote
      </ProductTrackedLink>
      <ProductTrackedLink
        href={getContactBridgeUrl(inquiryText, {
          placement: "custom_wool_rug_product_cta",
          product: "Custom Sculpted Wool Lobby Rug",
          intent: "floor_plan_review",
          pagePath: path,
        })}
        event="contact"
        payload={{ contact_method: "whatsapp", product_id: sku }}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 items-center justify-center border border-border bg-white px-5 py-3 text-center text-[11px] font-black uppercase tracking-[0.16em] text-primary transition-colors hover:border-accent hover:text-accent"
      >
        Send Your Floor Plan
      </ProductTrackedLink>
      <ProductTrackedLink
        href={`mailto:${brandInfo.email}?subject=Custom%20Sculpted%20Wool%20Lobby%20Rug&body=${mailBody}`}
        event="contact"
        payload={{ contact_method: "email", product_id: sku }}
        className="flex min-h-12 items-center justify-center border border-border bg-white px-5 py-3 text-center text-[11px] font-black uppercase tracking-[0.16em] text-primary transition-colors hover:border-accent hover:text-accent"
      >
        Request Color Options
      </ProductTrackedLink>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Custom Sculpted Wool Lobby Rug | Vishomecarpet",
  description: "Custom sand-beige wool lobby rug with sculpted concentric-square texture for hotels, lounges and reception areas. Custom size and color, MOQ 10 pieces.",
  robots: { index: true, follow: true },
  alternates: { canonical },
  openGraph: {
    title: "Custom Sculpted Wool Lobby Rug | Vishomecarpet",
    description: "Made-to-order sculpted wool area rug for hotel lobbies, executive lounges, reception spaces and luxury commercial interiors.",
    url: canonical,
    type: "website",
    images: [{ url: absoluteUrl(images[0].src), alt: images[0].alt, width: 1000, height: 1000 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Sculpted Wool Lobby Rug | Vishomecarpet",
    description: "Custom wool feature rug with dimensional concentric-square texture for hotel and commercial interior projects.",
    images: [absoluteUrl(images[0].src)],
  },
};

export default function CustomSculptedWoolLobbyRugPage() {
  if (!product) return <div>Product Not Found</div>;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Custom Sculpted Wool Lobby Rug",
    sku,
    brand: { "@type": "Brand", name: "Vishomecarpet" },
    category: "Decorative Public Area Rug",
    description: "Made-to-order sand-beige wool area rug with a sculpted concentric-square texture for hotel lobbies, executive lounges, reception areas and luxury commercial interiors.",
    url: canonical,
    material: "Wool material; exact fiber composition confirmed before order",
    color: "Sand Beige / Custom",
    pattern: "Concentric Square Geometric Pattern",
    image: images.map((image) => absoluteUrl(image.src)),
    additionalProperty: [
      { "@type": "PropertyValue", name: "Sample", value: product.moqTiers.sample },
      { "@type": "PropertyValue", name: "Trial Order", value: product.moqTiers.trialOrder },
      { "@type": "PropertyValue", name: "Project MOQ", value: product.moqTiers.project },
      { "@type": "PropertyValue", name: "Sales Unit", value: product.fobPrice?.unit ?? "Project" },
      { "@type": "PropertyValue", name: "Price Basis", value: "Reference FOB range; final price and validity require a written quotation" },
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: product.fobPrice?.lowPrice,
      highPrice: product.fobPrice?.highPrice,
      offerCount: 1,
      url: canonical,
      availability: "https://schema.org/PreOrder",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: "Vishomecarpet", url: brandInfo.url },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
      { "@type": "ListItem", position: 3, name: "Public Area Carpets", item: absoluteUrl("/products/public-area") },
      { "@type": "ListItem", position: 4, name: "Custom Sculpted Wool Lobby Rug", item: canonical },
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

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      <ProductViewEvent payload={{ item_id: sku, item_name: "Custom Sculpted Wool Lobby Rug", item_category: "Public Area Carpets", item_variant: "Sand Beige Concentric Square", price: 500, currency: "USD" }} />

      <nav className="border-b border-border bg-surface py-3 md:py-4">
        <div className="container-fox flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-[0.16em]">
          <Link href="/" className="text-muted hover:text-primary">Home</Link>
          <span className="text-muted">/</span>
          <Link href="/products" className="text-muted hover:text-primary">Products</Link>
          <span className="text-muted">/</span>
          <Link href="/products/public-area" className="text-muted hover:text-primary">Public Area Carpets</Link>
          <span className="text-primary">/ Custom Sculpted Wool Lobby Rug</span>
        </div>
      </nav>

      <section className="py-12 md:py-20">
        <div className="container-fox grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <div className="relative aspect-square overflow-hidden border border-border bg-surface shadow-xl">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                priority
                quality={82}
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {images.slice(1).map((image) => (
                <div key={image.src} className="aspect-square overflow-hidden border border-border bg-surface">
                  <ProductImage src={image.src} alt={image.alt} className="h-full w-full" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Vishomecarpet Custom Feature Rugs</p>
            <h1 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">Custom Sculpted Wool Lobby Rug</h1>
            <p className="mb-8 text-lg leading-relaxed text-muted">
              Made-to-order sand-beige wool area rug featuring a dimensional concentric-square texture for hotel lobbies, executive lounges, reception areas, luxury clubs and commercial showrooms.
            </p>
            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {["Wool Material", "Sculpted Geometric Texture", "Custom Size and Color", "B2B Project Supply"].map((item) => (
                <div key={item} className="border border-border bg-surface px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-primary">{item}</div>
              ))}
            </div>
            <div className="mb-8">
              <ProductSpecCards product={product} />
            </div>
            <div className="space-y-4 border border-border bg-surface p-5 md:p-8">
              {heroFacts.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-6 text-xs uppercase">
                  <span className="text-muted">{label}</span>
                  <span className="text-right font-black text-primary">{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Starting from US$500 / Piece. Final price depends on dimensions and specification.
            </p>
            {cta("hero")}
          </div>
        </div>
      </section>

      <AnswerFirst
        title="When Is a Custom Sculpted Wool Rug the Right Lobby Choice?"
        answer="Specify this product as a made-to-order feature rug for a controlled indoor seating, reception, lounge, or display zone where the rug can be sized around furniture and circulation. It is not a substitute for continuous wall-to-wall public-area carpet. Buyers should review traffic, entrance moisture, cleaning, backing, edge finish, local fire requirements, and the relationship between rug dimensions and the furniture plan before approval."
        facts={[
          { label: "Product Type", value: "Separate decorative feature rug" },
          { label: "Customization", value: "Size, color, material and pattern scale" },
          { label: "Quote Inputs", value: "Floor plan, furniture layout, dimensions, quantity and destination" },
          { label: "Buyer Checks", value: "Traffic, cleaning, edge finish, backing and local fire requirements" },
        ]}
        moq={[
          { label: "Sample", value: product.moqTiers.sample },
          { label: "Trial Order", value: product.moqTiers.trialOrder },
          { label: "Project MOQ", value: product.moqTiers.project },
        ]}
        suitableFor={[
          "Hotel lobbies, executive lounges, reception seating and premium showrooms",
          "Designer-led projects with approved dimensions, colors and furniture layouts",
        ]}
        notSuitableFor={[
          "Wet entrances, airport corridors or continuous luggage-wheel circulation by default",
          "Wall-to-wall coverage or projects without confirmed cleaning and fire requirements",
        ]}
        evidence="The product page was reviewed on July 31, 2026. Final material composition, pile profile, sculpting depth, commercial suitability, price and lead time are confirmed only after the size and project specification are approved."
        quoteHref="/contact?product=Custom%20Sculpted%20Wool%20Lobby%20Rug#quote-form"
        quoteLabel="Request a Rug Specification Review"
      />
      <ProductTrustLinks productName="custom sculpted wool lobby rug" quoteHref="/contact?product=Custom%20Sculpted%20Wool%20Lobby%20Rug#quote-form" />

      <section className="section-padding bg-primary text-white">
        <div className="container-fox">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Decorative Area Rug, Not Broadloom</p>
              <h2 className="text-3xl font-black uppercase leading-tight md:text-5xl">Built for Controlled Indoor Feature Zones</h2>
            </div>
            <div className="space-y-10">
              {sections.map((section) => (
                <article key={section.heading}>
                  <h2 className="mb-4 text-2xl font-black uppercase">{section.heading}</h2>
                  <div className="space-y-4 text-white/74">
                    {section.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 52)} className="leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Project Images</p>
            <h2 className="text-3xl font-black uppercase text-primary md:text-5xl">Sculpted Rug Applications</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <article key={image.src} className="border border-border bg-white">
                <div className="aspect-square bg-surface">
                  <ProductImage src={image.src} alt={image.alt} className="h-full w-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black uppercase text-primary">{image.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <h2 className="mb-10 text-center text-3xl font-black uppercase text-primary md:text-5xl">Technical Data Sheet</h2>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {tds.map(([label, value]) => (
              <div key={label} className="bg-white p-6">
                <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-muted">{label}</p>
                <p className="text-sm font-black uppercase leading-relaxed text-primary">{value}</p>
              </div>
            ))}
          </div>
          {cta("tds")}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <h2 className="mb-10 text-center text-3xl font-black uppercase text-primary md:text-5xl">Recommended Decorative Public-Space Applications</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {applications.map(([title, description]) => (
              <article key={title} className="border border-border p-6">
                <h3 className="mb-3 text-lg font-black uppercase text-primary">{title}</h3>
                <p className="leading-relaxed text-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-fox">
          <h2 className="mb-4 text-center text-3xl font-black uppercase text-primary md:text-5xl">Choose the Right Carpet for Your Public Space</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center leading-relaxed text-muted">
            This product is an area rug. High-Traffic Public Area Corridor Carpet is broadloom. Natural Sisal Linen-Weave Commercial Carpet is a natural woven flooring option. The three products should not be specified as the same structure.
          </p>
          <div className="grid gap-4 lg:grid-cols-3">
            {comparisons.map((item) => (
              <article key={item.title} className="border border-border bg-white p-6">
                <h3 className="mb-4 text-xl font-black uppercase text-primary">{item.title}</h3>
                <p className="mb-4 leading-relaxed text-muted">{item.description}</p>
                <p className="mb-6 text-sm font-bold uppercase tracking-[0.12em] text-primary">Best for: {item.best}</p>
                <Link href={item.href} className="text-xs font-black uppercase tracking-[0.16em] text-accent hover:text-primary">{item.cta} <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
          {cta("comparison")}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <h2 className="mb-10 text-center text-3xl font-black uppercase text-primary md:text-5xl">Made for Designer-Led Rug Projects</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map(([title, description]) => (
              <article key={title} className="border border-border p-6">
                <h3 className="mb-3 text-lg font-black uppercase text-primary">{title}</h3>
                <p className="leading-relaxed text-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-fox">
          <h2 className="mb-6 text-3xl font-black uppercase md:text-5xl">What to Send for an Accurate Rug Quote</h2>
          <p className="mb-8 max-w-4xl leading-relaxed text-white/74">
            Send the destination country, required rug quantity, target dimensions, application space, preferred color, material requirement and project delivery date. Vishomecarpet will confirm the suitable specification, sample option, packing method and final quotation.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quoteItems.map((item) => (
              <div key={item} className="border border-white/15 bg-white/5 p-4 text-sm font-black uppercase tracking-wider">{item}</div>
            ))}
          </div>
          <div className="mt-8">
            <ProductTrackedLink
              href="/contact?product=Custom%20Sculpted%20Wool%20Lobby%20Rug"
              event="generate_lead"
              payload={{ product_id: sku, product_name: "Custom Sculpted Wool Lobby Rug", lead_source: "product_page", cta_location: "quote_requirements", lead_type: "floor_plan_review" }}
              className="inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-primary transition-colors hover:bg-accent hover:text-white"
            >
              Send Project Requirements
            </ProductTrackedLink>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-black uppercase text-primary md:text-5xl">FAQ</h2>
          <div className="space-y-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="border border-border bg-white p-6">
                <summary className="cursor-pointer font-black text-primary">{question}</summary>
                <p className="mt-4 leading-relaxed text-muted">{answer}</p>
              </details>
            ))}
          </div>
          {cta("faq")}
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-fox">
          <h2 className="mb-8 text-3xl font-black uppercase text-primary">Related Products and Resources</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Public Area Carpets", "/products/public-area"],
              ["High-Traffic Public Area Corridor Carpet", "/products/public-area/public-area-heavy-duty"],
              ["Natural Sisal Commercial Carpet", "/products/public-area/natural-sisal-carpet"],
              ["Gold Mining Carpet Mat", "/products/public-area/gold-mining-carpet-mat"],
              ["Hospitality Carpet Lifecycle Guide", "/blog/hidden-cost-of-cheap-carpets-hospitality-roi-guide"],
              ["Carpet Installation Climate Guide", "/blog/climate-control-carpet-installation-stability-guide"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="border border-border bg-white p-6 font-black uppercase transition-colors hover:border-accent hover:text-accent">{label} <span aria-hidden="true">→</span></Link>
            ))}
          </div>
          {cta("bottom")}
        </div>
      </section>
    </div>
  );
}
