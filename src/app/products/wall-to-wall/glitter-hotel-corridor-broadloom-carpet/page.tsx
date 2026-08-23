import type { Metadata } from "next";
import Link from "next/link";
import AnswerFirst from "@/components/AnswerFirst";
import ProductImage from "@/components/ProductImage";
import { BuyerReasons, ProductConversionPanel } from "@/components/ProductConversion";

const siteUrl = "https://www.vishomecarpet.com";
const canonicalPath = "/products/wall-to-wall/glitter-hotel-corridor-broadloom-carpet";

const product = {
  id: "glitter-hotel-corridor-broadloom-carpet",
  name: "Glitter Hotel Corridor Broadloom Carpet",
  category: "wall-to-wall" as const,
  description: "Blue and gold glitter-pattern wall-to-wall broadloom carpet for hotel corridors, lobbies, ballrooms, and luxury hospitality projects.",
  image: "/images/products/hotel-glitter-broadloom/1.webp",
  imageAlt: "Blue and gold glitter hotel corridor broadloom carpet installed in a luxury hotel by Vishomecarpet",
  moq: "300 SQM",
  moqTiers: { sample: "Material Swatch Available", trialOrder: "100 SQM Approved Design", project: "300 SQM" },
  leadTime: "25-35 Days",
  fobPrice: { display: "US$4.20-8.60 / SQM", lowPrice: "4.20", highPrice: "8.60", currency: "USD", unit: "SQM" },
  technicalSpecs: {
    fireRating: "Bfl-s1 (EN 13501-1)",
    trafficClass: "High-Traffic Commercial",
    yarnSystem: "Patterned Tufted Broadloom",
    backing: "Commercial Woven Backing",
    pileWeight: "Customizable by Project",
    totalThickness: "Customizable by Project",
    rollWidth: "4m",
    stainResistance: "Available on Request",
    antistatic: "Available on Request"
  },
  mainImages: [
    { src: "/images/products/hotel-glitter-broadloom/1.webp", alt: "Luxury hotel corridor with blue and gold glitter wall-to-wall broadloom carpet" },
    { src: "/images/products/hotel-glitter-broadloom/2.webp", alt: "Hotel lobby corridor carpet with glitter gold pattern and navy background" },
    { src: "/images/products/hotel-glitter-broadloom/3.webp", alt: "Custom hospitality broadloom carpet design in blue and gold glitter style" },
    { src: "/images/products/hotel-glitter-broadloom/4.webp", alt: "Wall-to-wall hotel carpet main view for corridor and public area projects" }
  ],
  detailImages: [
    { src: "/images/products/hotel-glitter-broadloom/5.webp", alt: "Glitter hotel carpet roll detail showing pile texture and backing" },
    { src: "/images/products/hotel-glitter-broadloom/6.webp", alt: "Close-up of blue gold hotel broadloom carpet texture and pattern" },
    { src: "/images/products/hotel-glitter-broadloom/7.webp", alt: "Hospitality carpet detail image for custom corridor broadloom project" },
    { src: "/images/products/hotel-glitter-broadloom/8.webp", alt: "Hotel carpet detail page image showing pattern color and project use" },
    { src: "/images/products/hotel-glitter-broadloom/9.webp", alt: "Commercial wall-to-wall carpet detail for hotel corridor and lobby flooring" },
    { src: "/images/products/hotel-glitter-broadloom/10.webp", alt: "Hotel carpet testing and durability detail image for high-traffic projects" }
  ]
};

const descriptionParagraphs = [
  "Vishomecarpet's Glitter Hotel Corridor Broadloom Carpet is a patterned hotel hallway carpet for hospitality buyers who need a floor finish that guides guest movement and supports daily commercial traffic. The navy base, gold effect, and flowing directional pattern create a premium corridor experience for hotels, serviced apartments, casinos, banquet halls, and high-end public spaces.",
  "The product is supplied as wall-to-wall broadloom carpet for seamless installation in long corridors and large hospitality zones. Pattern, color direction, roll length, pile specification, backing, and edge finishing can be adjusted for project drawings, brand palettes, and procurement budgets.",
  "The commercial carpet roll is suited to hotel corridors, elevator halls, lobbies, and connected public areas. Optional stain-resistance treatment can be reviewed with the required traffic level, fire standard, antistatic performance, and cleaning plan before quotation."
];

const faqs = [
  {
    q: "What spaces is this glitter hotel carpet designed for?",
    a: "It is best suited for hotel corridors, elevator halls, lobbies, banquet spaces, casino walkways, serviced apartments, and other hospitality areas where a premium blue-gold carpet pattern is needed."
  },
  {
    q: "Can Vishomecarpet customize the pattern and color?",
    a: "Yes. Vishomecarpet can adjust the glitter effect, base color, pattern scale, direction, and repeat to match drawings, interior design boards, or brand color references."
  },
  {
    q: "Is this a wall-to-wall broadloom carpet?",
    a: "Yes. The standard product is supplied as broadloom roll carpet for wall-to-wall installation, with 4m roll width and project-specific roll length."
  },
  {
    q: "What technical information is available for project buyers?",
    a: "Available project information includes fire performance reference, traffic-use guidance, backing choice, roll width, pile and thickness options, stain resistance options, and sample confirmation before production."
  },
  {
    q: "What is the MOQ and lead time?",
    a: "Typical MOQ is 300 SQM, with normal production lead time around 25-35 days after artwork, specification, and sample confirmation."
  },
  {
    q: "Can I request a sample before ordering?",
    a: "Yes. Samples and pattern proofs are available so designers and procurement teams can confirm color, texture, and backing before bulk production."
  }
];

const relatedLinks = [
  { label: "Wall-to-Wall Carpets", href: "/products/wall-to-wall" },
  { label: "Hotel Carpet Solutions", href: "/solutions/hotel-hospitality" },
  { label: "Stain-Hiding Corridor Guide", href: "/blog/hotel-corridor-carpet-stain-hiding-procurement-guide" },
  { label: "Mexico Corridor Carpet Guide", href: "/blog/hotel-corridor-carpet-in-mexico" },
  { label: "Contact Vishomecarpet", href: "/contact" }
];

const procurementGuideLinks = [
  {
    title: "Hotel corridor carpet that hides stains without looking dirty",
    href: "/blog/hotel-corridor-carpet-stain-hiding-procurement-guide",
    text: "Use this guide to compare color depth, pattern scale, cleaning access, and replacement stock before approving a corridor carpet order.",
  },
  {
    title: "Hotel corridor carpet in Mexico",
    href: "/blog/hotel-corridor-carpet-in-mexico",
    text: "A country-focused corridor carpet buying guide covering guest traffic, lighting, broadloom planning, and maintenance-ready procurement.",
  },
  {
    title: "Hotel carpet supplier checklist",
    href: "/blog/hotel-carpet-supplier-checklist-project-order-guide",
    text: "A supplier-verification checklist for sample approval, roll planning, documents, MOQ, lead time, and quotation control.",
  },
];

export const metadata: Metadata = {
  title: "Hotel Corridor Carpet | Patterned Broadloom | VISHOME",
  description: "Patterned hotel corridor and hallway carpet in blue and gold. Custom 4m wall-to-wall broadloom for lobbies and high-traffic hospitality projects.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Hotel Corridor Carpet | Patterned Broadloom | VISHOME",
    description: "Patterned blue and gold hotel hallway carpet for corridors, elevator lobbies, and high-traffic hospitality projects.",
    url: `${siteUrl}${canonicalPath}`,
    images: [
      {
        url: `${siteUrl}/images/products/hotel-glitter-broadloom/1.webp`,
        alt: "Glitter Hotel Corridor Broadloom Carpet by Vishomecarpet"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Corridor Carpet | Patterned Broadloom | VISHOME",
    description: "Patterned blue and gold wall-to-wall broadloom for hotel corridors, lobbies, and hospitality projects.",
    images: [`${siteUrl}/images/products/hotel-glitter-broadloom/1.webp`]
  }
};

const productJsonLd = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "@id": `${siteUrl}${canonicalPath}#product`,
  "name": "Glitter Hotel Corridor Broadloom Carpet",
  "sku": product.id,
  "mpn": product.id,
  "image": product.mainImages.map((image) => `${siteUrl}${image.src}`),
  "url": `${siteUrl}${canonicalPath}`,
  "mainEntityOfPage": `${siteUrl}${canonicalPath}`,
  "description": "Custom blue and gold glitter-pattern wall-to-wall broadloom carpet for hotel corridors, lobbies, ballrooms, and luxury hospitality projects.",
  "brand": { "@type": "Brand", "name": "Vishomecarpet" },
  "category": "Wall-to-Wall Hotel Broadloom Carpet",
  "material": "Commercial Synthetic Fiber",
  "offers": {
    "@type": "AggregateOffer",
    "url": `${siteUrl}${canonicalPath}`,
    "priceCurrency": product.fobPrice.currency,
    "lowPrice": product.fobPrice.lowPrice,
    "highPrice": product.fobPrice.highPrice,
    "offerCount": 1,
    "availability": "https://schema.org/PreOrder",
    "itemCondition": "https://schema.org/NewCondition",
    "seller": { "@type": "Organization", "name": "Vishome Global Commercial Carpet Co., Ltd.", "url": siteUrl }
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Vishome Global Commercial Carpet Co., Ltd.",
    "url": siteUrl
  },
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Fire Rating", "value": "Bfl-s1 (EN 13501-1)" },
    { "@type": "PropertyValue", "name": "Traffic Class", "value": "High-Traffic Commercial" },
    { "@type": "PropertyValue", "name": "Yarn System", "value": "Patterned Tufted Broadloom" },
    { "@type": "PropertyValue", "name": "Backing", "value": "Commercial Woven Backing" },
    { "@type": "PropertyValue", "name": "Availability", "value": "Quotation required / made to order" },
    { "@type": "PropertyValue", "name": "Sales Unit", "value": product.fobPrice.unit },
    { "@type": "PropertyValue", "name": "Price Basis", "value": "Reference FOB range; final price and validity require a written quotation" },
    { "@type": "PropertyValue", "name": "Roll Width", "value": "4m" },
    { "@type": "PropertyValue", "name": "FOB Price Range", "value": "US$4.20-8.60 / SQM" },
    { "@type": "PropertyValue", "name": "Project MOQ", "value": "300 SQM" },
    { "@type": "PropertyValue", "name": "Lead Time", "value": "25-35 Days" },
    { "@type": "PropertyValue", "name": "Availability", "value": "InStock" }
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((item) => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a
    }
  }))
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
    { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` },
    { "@type": "ListItem", position: 3, name: "Wall-to-Wall Carpets", item: `${siteUrl}/products/wall-to-wall` },
    { "@type": "ListItem", position: 4, name: product.name, item: `${siteUrl}${canonicalPath}` },
  ],
};

const specLabels: Record<string, string> = {
  fireRating: "FIRE RATING",
  trafficClass: "TRAFFIC CLASS",
  yarnSystem: "YARN SYSTEM",
  backing: "BACKING",
  pileWeight: "PILE WEIGHT",
  totalThickness: "TOTAL THICKNESS",
  rollWidth: "ROLL WIDTH",
  stainResistance: "STAIN RESISTANCE",
  antistatic: "ANTISTATIC"
};

export default function ProductDetailPage() {
  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />

      <nav className="bg-surface py-4 border-b border-border">
        <div className="container-fox">
          <Link href="/products/wall-to-wall" className="text-[10px] font-bold text-muted uppercase tracking-widest hover:text-primary">
            Back to Wall-to-Wall Carpets
          </Link>
        </div>
      </nav>

      <section className="py-20">
        <div className="container-fox">
          <div className="flex flex-col lg:flex-row gap-16 xl:gap-20">
            <div className="lg:w-3/5">
              <div className="aspect-[3/2] rounded-sm overflow-hidden border border-border shadow-xl">
                <ProductImage src={product.image} alt={product.imageAlt} className="w-full h-full object-cover" priority sizes="(max-width: 1024px) 100vw, 60vw" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-4">
                {product.mainImages.slice(1).map((image) => (
                  <figure key={image.src} className="aspect-[4/3] overflow-hidden border border-border bg-white">
                    <ProductImage src={image.src} alt={image.alt} className="w-full h-full" fit="contain" />
                  </figure>
                ))}
              </div>
            </div>
            <div className="lg:w-2/5 flex flex-col justify-center">
              <p className="text-[11px] font-black text-accent uppercase tracking-[0.28em] mb-4">Vishomecarpet Wall-to-Wall Hotel Carpet</p>
              <h1 className="text-3xl md:text-5xl font-black text-primary mb-6 uppercase leading-tight">{product.name}</h1>
              <p className="text-muted text-base leading-relaxed mb-8">{product.description}</p>
              <div className="bg-surface p-8 border border-border space-y-4 mb-10">
                <div className="flex justify-between uppercase text-xs gap-6">
                  <span>Project MOQ</span>
                  <span className="font-bold">{product.moq}</span>
                </div>
                <div className="flex justify-between uppercase text-xs gap-6">
                  <span>LEAD TIME</span>
                  <span className="font-bold">{product.leadTime}</span>
                </div>
                <div className="flex justify-between uppercase text-xs gap-6">
                  <span>FOB PRICE</span>
                  <span className="text-right font-bold">{product.fobPrice.display}</span>
                </div>
                <div className="flex justify-between uppercase text-xs gap-6">
                  <span>ROLL WIDTH</span>
                  <span className="font-bold">{product.technicalSpecs.rollWidth}</span>
                </div>
                <div className="flex justify-between uppercase text-xs gap-6">
                  <span>AVAILABILITY</span>
                  <span className="text-right font-bold">In Stock / Made to Order</span>
                </div>
              </div>
              <ProductConversionPanel product={product} />
            </div>
          </div>
        </div>
      </section>

      <AnswerFirst
        eyebrow="Hotel Corridor Carpet Buying Answer"
        title="Choose patterned broadloom when guest corridors need a premium look and controlled stain visibility"
        answer="For hotel corridors, patterned wall-to-wall broadloom is usually the stronger choice when the buyer wants a continuous hospitality look, softer guest footfall, and better visual control of luggage-wheel paths, small spills, and daily soil. Confirm corridor width, lighting, roll plan, cleaning method, spare material, and written quotation terms before comparing only color or square-metre price."
        facts={[
          { label: "Best Use", value: "Hotel corridors, elevator halls, casino walkways, lobbies, and connected public areas" },
          { label: "Key Risk", value: "Approving a sample without checking lighting, pattern scale, seam plan, and cleaning access" },
          { label: "Document Check", value: "Request TDS, roll width, backing, fire requirement, packing data, and quotation validity" },
          { label: "Quote Basis", value: "Reference FOB range only; final validity requires a written quotation" },
        ]}
        moq={[
          { label: "Sample", value: product.moqTiers.sample },
          { label: "Trial Order", value: product.moqTiers.trialOrder },
          { label: "Project MOQ", value: product.moqTiers.project },
        ]}
        suitableFor={["Long hotel corridors needing a continuous broadloom look", "Hospitality zones where pattern can reduce visible daily soil", "Projects that can plan roll direction, seams, and spare stock before ordering"]}
        notSuitableFor={["Wet or outdoor areas", "Projects requiring tile-by-tile replacement as the main priority", "Orders needing confirmed stock or final compliance documents without written confirmation"]}
        evidence="Specifications, FOB ranges, availability, and optional treatments on this page are sourcing references. Request written confirmation for final construction, fire requirement, stock or production status, lead time, and quotation validity."
        quoteHref={`/contact?product=${encodeURIComponent(product.name)}#quote-form`}
        quoteLabel="Request Corridor Carpet Quote"
      />

      <section className="section-padding bg-surface border-y border-border">
        <div className="container-fox">
          <h2 className="text-3xl font-bold text-primary mb-12 uppercase text-center tracking-widest">Technical Data Sheet (TDS)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {Object.entries(product.technicalSpecs).map(([k, v]) => (
              <div key={k} className="bg-white p-8 group hover:bg-primary transition-all">
                <p className="text-[10px] font-bold text-muted uppercase mb-3 group-hover:text-white/50">{specLabels[k] || k.replace(/([A-Z])/g, " $1").toUpperCase()}</p>
                <p className="text-sm font-black text-primary group-hover:text-white uppercase leading-relaxed">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox max-w-5xl">
          <h2 className="text-3xl font-black text-primary uppercase tracking-widest mb-8">Patterned Hotel Corridor & Hallway Carpet</h2>
          <div className="space-y-5">
            {descriptionParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 42)} className="text-muted text-lg leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface border-y border-border">
        <div className="container-fox">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">AI-Ready Procurement Links</p>
            <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
              Related Hotel Carpet Buying Guides
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted md:text-base">
              These supporting guides explain the purchase questions behind this corridor broadloom product: stain visibility, supplier verification, roll planning, and maintenance-ready approval.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {procurementGuideLinks.map((item) => (
              <Link key={item.href} href={item.href} className="group border border-border bg-white p-6 transition hover:border-accent hover:shadow-lg">
                <h3 className="text-sm font-black uppercase leading-snug text-primary group-hover:text-accent">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface border-y border-border">
        <div className="container-fox">
          <h2 className="text-3xl font-bold text-primary mb-12 uppercase text-center tracking-widest">Main Product Images</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {product.mainImages.map((image) => (
              <figure key={image.src} className="bg-white border border-border">
                <div className="aspect-[3/2] overflow-hidden bg-white">
                  <ProductImage src={image.src} alt={image.alt} className="w-full h-full" fit="contain" />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <h2 className="text-3xl font-bold text-primary mb-12 uppercase text-center tracking-widest">Product Detail Images</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {product.detailImages.map((image) => (
              <figure key={image.src} className="bg-white border border-border">
                <div className="aspect-[16/9] overflow-hidden bg-white">
                  <ProductImage src={image.src} alt={image.alt} className="w-full h-full" fit="contain" />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface border-y border-border">
        <div className="container-fox max-w-5xl">
          <h2 className="text-3xl font-bold text-primary mb-10 uppercase text-center tracking-widest">FAQ</h2>
          <div className="space-y-5">
            {faqs.map((item) => (
              <div key={item.q} className="border border-border bg-white p-6">
                <h3 className="text-base font-black text-primary uppercase tracking-wide mb-3">{item.q}</h3>
                <p className="text-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BuyerReasons product={product} />

      <section className="py-24">
        <div className="container-fox">
          <div className="bg-primary p-8 md:p-10">
            <h2 className="text-xl font-black text-white uppercase tracking-wider mb-6">Related Next Steps</h2>
            <div className="flex flex-wrap gap-4">
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} className="btn-fox-orange !text-xs !tracking-[0.2em] !px-8 !py-4">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
