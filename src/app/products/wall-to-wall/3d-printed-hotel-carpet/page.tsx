import type { Metadata } from "next";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";

const siteUrl = "https://www.vishomecarpet.com";
const canonicalPath = "/products/wall-to-wall/3d-printed-hotel-carpet";

const product = {
  name: "3D HD Printed Nylon Hotel Carpet",
  description: "High-definition 3D-printed nylon broadloom for hotel guestrooms, corridors, and lobbies - fully custom patterns, fast 25-day production.",
  image: "/images/3d-printed-hotel-carpet.jpg",
  imageAlt: "3D HD printed nylon hotel carpet swatch with elegant gold and burgundy pattern by Vishomecarpet",
  moq: "300 SQM",
  leadTime: "25 Days",
  technicalSpecs: {
    fireRating: "Class I (ASTM E648)",
    trafficClass: "33",
    yarnSystem: "100% Nylon (HD Printed)",
    backing: "ActionBac (PP + Latex)",
    pileWeight: "32oz",
    totalThickness: "9mm",
    rollWidth: "4m",
    soundInsulation: "25dB",
    antistatic: "Permanent"
  },
  gallery: [
    { src: "/images/3d-printed-hotel-carpet-roll.jpg", alt: "Wall-to-wall printed hotel broadloom carpet roll, 4m width, Vishomecarpet" },
    { src: "/images/3d-printed-hotel-carpet-guestroom.jpg", alt: "Printed nylon broadloom carpet installed in a luxury hotel guestroom" },
    { src: "/images/3d-printed-hotel-carpet-corridor.jpg", alt: "Seamless wall-to-wall printed hotel corridor carpet with ornamental pattern" },
    { src: "/images/3d-printed-hotel-carpet-ballroom.jpg", alt: "Large-scale printed broadloom carpet in a grand hotel lobby and ballroom" },
    { src: "/images/3d-printed-hotel-carpet-macro.jpg", alt: "Close-up macro of dense printed nylon hotel carpet pile texture" },
    { src: "/images/3d-printed-hotel-carpet-backing.jpg", alt: "ActionBac backing detail of printed nylon hotel broadloom carpet" },
    { src: "/images/3d-printed-hotel-carpet-colorways.jpg", alt: "Hotel printed broadloom carpet pattern shown in four custom colorways" }
  ]
};

const descriptionParagraphs = [
  "Vishomecarpet's 3D HD Printed Nylon Hotel Carpet is a wall-to-wall broadloom flooring solution engineered for hospitality interiors. Using high-definition digital printing on a durable 100% nylon surface, it reproduces intricate, photo-realistic patterns and rich color depth that conventional dyed carpets cannot match - at a lower setup cost and faster lead time than woven Axminster or Wilton broadloom.",
  "Built for high-traffic commercial environments, the carpet carries a Class I fire rating (ASTM E648), an EN 1307 Class 33 heavy-traffic rating, permanent antistatic protection, and a reinforced ActionBac backing for dimensional stability. Standard production is 4 m wide for seamless guestroom and corridor installation, with customizable pile weight, thickness, pattern, and colorway to match any brand standard or interior design scheme.",
  "Ideal for hotel guestrooms, corridors, lobbies, ballrooms, casinos, and restaurants, this printed broadloom is supplied factory-direct from Vishomecarpet's Tianjin facility with full custom-design service, export packing, and worldwide shipping. Request a free pattern proof and project quote to specify your own design."
];

const faqs = [
  {
    q: "What is 3D printed hotel carpet?",
    a: "It is a broadloom carpet whose pattern is applied by high-definition digital printing onto a nylon pile surface, allowing photo-realistic, fully custom designs with sharp detail and virtually unlimited colors - a faster, more cost-effective alternative to woven Axminster for hotel interiors."
  },
  {
    q: "Is printed nylon carpet durable enough for hotels?",
    a: "Yes. The 100% nylon pile is rated for Class 33 heavy commercial traffic, with permanent antistatic treatment and optional stain-resist finishing, making it suitable for guestrooms, corridors, and busy public areas."
  },
  {
    q: "Can you produce a custom pattern or our brand design?",
    a: "Yes. Vishomecarpet provides full custom-design service - send your artwork, brand colors, or a reference image and we deliver a printed pattern proof before mass production."
  },
  {
    q: "What roll width and sizes are available?",
    a: "Standard width is 4 m for seamless wall-to-wall installation; roll length, pile weight, and thickness are all customizable to project requirements."
  },
  {
    q: "What are the MOQ and lead time?",
    a: "MOQ is 300 SQM (no MOQ for in-stock designs), with typical production lead time of about 25 days. Free samples are available on request."
  },
  {
    q: "Is it fire-rated and certified?",
    a: "The carpet meets Class I fire performance (ASTM E648); additional test reports and certifications are available on request for project compliance."
  }
];

const relatedLinks = [
  { label: "Wall-to-Wall Carpets", href: "/products/wall-to-wall" },
  { label: "Broadloom Decision Guide", href: "/blog/modular-carpet-tiles-vs-broadloom-property-decision-framework" },
  { label: "Seaming Excellence Guide", href: "/blog/seaming-excellence-invisible-commercial-carpet-seams-guide" }
];

export const metadata: Metadata = {
  title: "3D HD Printed Nylon Hotel Carpet | Commercial Carpet Product | VISHOME",
  description: "High-definition 3D-printed nylon broadloom carpet for hotel guestrooms, corridors, and lobbies. Custom patterns, Class I fire rating, 4m width, factory-direct.",
  keywords: "3D printed hotel carpet, printed nylon broadloom, wall-to-wall hotel carpet, custom hotel carpet, hospitality broadloom, commercial printed carpet, Vishomecarpet",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "3D HD Printed Nylon Hotel Carpet | VISHOME",
    description: "High-definition 3D-printed nylon broadloom carpet for hotel guestrooms, corridors, and lobbies. Custom patterns, Class I fire rating, 4m width.",
    url: `${siteUrl}${canonicalPath}`,
    images: [
      {
        url: `${siteUrl}/images/3d-printed-hotel-carpet-corridor.jpg`,
        alt: "3D HD Printed Nylon Hotel Carpet by Vishomecarpet"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "3D HD Printed Nylon Hotel Carpet | VISHOME",
    description: "High-definition 3D-printed nylon broadloom carpet for hotel guestrooms, corridors, and lobbies. Custom patterns, Class I fire rating, 4m width.",
    images: [`${siteUrl}/images/3d-printed-hotel-carpet-corridor.jpg`]
  }
};

const productJsonLd = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "3D HD Printed Nylon Hotel Carpet",
  "image": [
    `${siteUrl}/images/3d-printed-hotel-carpet-corridor.jpg`,
    `${siteUrl}/images/3d-printed-hotel-carpet-guestroom.jpg`,
    `${siteUrl}/images/3d-printed-hotel-carpet.jpg`
  ],
  "description": "High-definition 3D-printed nylon broadloom carpet for hotel guestrooms, corridors, and lobbies. Fully custom patterns, Class I fire rating, 4m width, factory-direct from Vishomecarpet.",
  "brand": { "@type": "Brand", "name": "Vishomecarpet" },
  "category": "Wall-to-Wall Broadloom Carpet",
  "material": "100% Nylon",
  "manufacturer": {
    "@type": "Organization",
    "name": "Vishome Global Commercial Carpet Co. Ltd.",
    "url": siteUrl
  },
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Fire Rating", "value": "Class I (ASTM E648)" },
    { "@type": "PropertyValue", "name": "Traffic Class", "value": "33" },
    { "@type": "PropertyValue", "name": "Yarn System", "value": "100% Nylon (HD Printed)" },
    { "@type": "PropertyValue", "name": "Backing", "value": "ActionBac (PP + Latex)" },
    { "@type": "PropertyValue", "name": "Pile Weight", "value": "32oz" },
    { "@type": "PropertyValue", "name": "Total Thickness", "value": "9mm" },
    { "@type": "PropertyValue", "name": "Roll Width", "value": "4m" },
    { "@type": "PropertyValue", "name": "Sound Insulation", "value": "25dB" },
    { "@type": "PropertyValue", "name": "Antistatic", "value": "Permanent" }
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

const specLabels: Record<string, string> = {
  fireRating: "FIRE RATING",
  trafficClass: "TRAFFIC CLASS",
  yarnSystem: "YARN SYSTEM",
  backing: "BACKING",
  pileWeight: "PILE WEIGHT",
  totalThickness: "TOTAL THICKNESS",
  rollWidth: "ROLL WIDTH",
  soundInsulation: "SOUND INSULATION",
  antistatic: "ANTISTATIC"
};

export default function ProductDetailPage() {
  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
                <ProductImage src={product.image} alt={product.imageAlt} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:w-2/5 flex flex-col justify-center">
              <h1 className="text-3xl md:text-5xl font-black text-primary mb-6 uppercase leading-tight">{product.name}</h1>
              <p className="text-muted text-base leading-relaxed mb-8">{product.description}</p>
              <div className="bg-surface p-8 border border-border space-y-4 mb-10">
                <div className="flex justify-between uppercase text-xs gap-6">
                  <span>MOQ</span>
                  <span className="font-bold">{product.moq}</span>
                </div>
                <div className="flex justify-between uppercase text-xs gap-6">
                  <span>LEAD TIME</span>
                  <span className="font-bold">{product.leadTime}</span>
                </div>
              </div>
              <Link href="/contact" className="btn-fox-orange w-full py-5 text-center text-sm uppercase tracking-widest shadow-lg">Request Technical Quote</Link>
            </div>
          </div>
        </div>
      </section>

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
          <h2 className="text-3xl font-black text-primary uppercase tracking-widest mb-8">Hospitality Printed Broadloom Built for Custom Projects</h2>
          <div className="space-y-5">
            {descriptionParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 42)} className="text-muted text-lg leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface border-y border-border">
        <div className="container-fox">
          <h2 className="text-3xl font-bold text-primary mb-12 uppercase text-center tracking-widest">Project Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.gallery.map((image) => (
              <figure key={image.src} className="bg-white border border-border">
                <div className="aspect-[3/2] overflow-hidden">
                  <ProductImage src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
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

      <section className="pb-24">
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
