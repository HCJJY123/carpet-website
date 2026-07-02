import type { Metadata } from "next";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";

const siteUrl = "https://www.vishomecarpet.com";
const canonicalPath = "/products/public-area/natural-sisal-carpet";

const product = {
  name: "Natural Sisal Linen-Weave Commercial Carpet",
  description: "100% natural sisal carpet with a refined linen-weave texture for offices, retail, and hospitality public spaces.",
  image: "/images/natural-sisal-carpet.jpg",
  imageAlt: "Natural sisal linen-weave commercial carpet swatch in warm wheat tone by Vishomecarpet",
  moq: "300 SQM",
  leadTime: "30 Days",
  technicalSpecs: {
    fireRating: "ASTM E648 Class I (FR-treated)",
    trafficClass: "Class 32",
    fiber: "100% Natural Sisal",
    yarnSystem: "Woven Flatweave",
    backing: "Natural Latex + Jute (Non-Slip)",
    pileWeight: "56oz (≈1,900 g/m²)",
    totalThickness: "7mm",
    rollWidth: "4m",
    antistatic: "Permanent (Natural Fiber)"
  },
  gallery: [
    { src: "/images/natural-sisal-carpet-roll.jpg", alt: "Natural sisal broadloom carpet roll, 4m width, with jute backing" },
    { src: "/images/natural-sisal-carpet-office.jpg", alt: "Natural sisal carpet in a modern biophilic office reception" },
    { src: "/images/natural-sisal-carpet-retail.jpg", alt: "Sisal commercial carpet flooring in an upscale boutique retail interior" },
    { src: "/images/natural-sisal-carpet-lobby.jpg", alt: "Natural sisal broadloom in a hotel lobby and exhibition public area" },
    { src: "/images/natural-sisal-carpet-macro.jpg", alt: "Macro close-up of woven natural sisal linen-weave fiber texture" },
    { src: "/images/natural-sisal-carpet-backing.jpg", alt: "Non-slip natural latex and jute backing of sisal commercial carpet" },
    { src: "/images/natural-sisal-carpet-colorways.jpg", alt: "Natural sisal carpet shown in four neutral colorways" }
  ]
};

const descriptionParagraphs = [
  "Vishomecarpet's Natural Sisal Linen-Weave Commercial Carpet is a 100% plant-fiber flooring crafted from durable agave sisalana sisal, woven into a refined linen-look flatweave. Its fine, even ribbing brings warm, biophilic character to commercial interiors while delivering the natural strength sisal is known for - an authentic, sustainable alternative to synthetic carpet.",
  "Engineered for contract use, the carpet is fire-retardant treated to Class I (ASTM E648), rated for EN 1307 Class 32 medium-to-heavy commercial traffic, and finished with a non-slip natural-latex backing over a jute secondary for dimensional stability. Standard roll width is 4 m for broadloom installation, with custom widths, bound area rugs, and stair runners available. A stain-resistant synthetic sisal-look (PP) version is offered for higher-maintenance environments.",
  "Ideal for offices, reception areas, boutique retail, galleries, exhibition halls, and hotel public spaces seeking a natural aesthetic, this sisal carpet ships factory-direct from Vishomecarpet with custom sizing, binding, export packing, and worldwide delivery. Request free samples and a project quote to match your specification."
];

const faqs = [
  {
    q: "Is sisal carpet suitable for commercial spaces?",
    a: "Yes. Sisal is a strong natural fiber rated for EN 1307 Class 32 medium-to-heavy commercial traffic and fire-retardant treated to Class I (ASTM E648), making it well suited to offices, retail, galleries, exhibition halls, and hotel public areas."
  },
  {
    q: "What is the difference between natural sisal and sisal-look carpet?",
    a: "Natural sisal is 100% plant fiber with authentic texture and tonal variation. Sisal-look carpet is woven from synthetic fiber (PP) to mimic the appearance while offering easier stain cleaning and moisture resistance. Vishomecarpet supplies both."
  },
  {
    q: "Is sisal carpet eco-friendly?",
    a: "Yes. Sisal is a renewable, biodegradable plant fiber, and the natural-latex and jute backing options keep the product low-VOC - a strong fit for sustainable and green-building projects."
  },
  {
    q: "What widths and sizes are available?",
    a: "Standard production is 4 m broadloom rolls; custom-cut and bound area rugs, runners, and made-to-size pieces are available to project specification."
  },
  {
    q: "How do you clean and maintain sisal carpet?",
    a: "Vacuum regularly and treat spills promptly with dry cleaning methods; avoid saturating natural sisal with water. The synthetic sisal-look version tolerates moisture and stains far better for high-traffic sites."
  },
  {
    q: "What are the MOQ and lead time?",
    a: "MOQ is 300 SQM (no MOQ for in-stock items), with typical production lead time of about 30 days. Free samples are available on request."
  }
];

const relatedLinks = [
  { label: "Public Area Carpets", href: "/products/public-area" },
  { label: "Sustainable Carpet Guide", href: "/blog/sustainable-carpet-manufacturing-eco-friendly-options-guide" },
  { label: "Request Free Samples", href: "/contact" }
];

export const metadata: Metadata = {
  title: "Natural Sisal Linen-Weave Commercial Carpet | Commercial Carpet Product | VISHOME",
  description: "Natural 100% sisal commercial carpet with a linen-weave texture for offices, retail, exhibitions, and hotel public areas. Eco-friendly, custom widths, factory-direct.",
  keywords: "natural sisal carpet, sisal commercial carpet, sisal look carpet, linen weave carpet, natural fiber carpet, eco friendly carpet, sisal broadloom, Vishomecarpet",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Natural Sisal Linen-Weave Commercial Carpet | VISHOME",
    description: "Natural 100% sisal commercial carpet with a linen-weave texture for offices, retail, exhibitions, and hotel public areas. Eco-friendly, custom widths.",
    url: `${siteUrl}${canonicalPath}`,
    images: [
      {
        url: `${siteUrl}/images/natural-sisal-carpet.jpg`,
        alt: "Natural sisal linen-weave commercial carpet by Vishomecarpet"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural Sisal Linen-Weave Commercial Carpet | VISHOME",
    description: "Natural 100% sisal commercial carpet with a linen-weave texture for offices, retail, exhibitions, and hotel public areas. Eco-friendly, custom widths.",
    images: [`${siteUrl}/images/natural-sisal-carpet.jpg`]
  }
};

const productJsonLd = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Natural Sisal Linen-Weave Commercial Carpet",
  "image": [
    `${siteUrl}/images/natural-sisal-carpet.jpg`,
    `${siteUrl}/images/natural-sisal-carpet-office.jpg`,
    `${siteUrl}/images/natural-sisal-carpet-macro.jpg`
  ],
  "description": "Natural 100% sisal commercial carpet with a refined linen-weave texture for offices, retail, exhibitions, and hotel public areas. Eco-friendly, FR-treated to Class I, custom widths, factory-direct from Vishomecarpet.",
  "brand": { "@type": "Brand", "name": "Vishomecarpet" },
  "category": "Public Area Commercial Carpet",
  "material": "100% Sisal (Natural Fiber)",
  "manufacturer": {
    "@type": "Organization",
    "name": "Vishome Global Commercial Carpet Co. Ltd.",
    "url": siteUrl
  },
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Fire Rating", "value": "ASTM E648 Class I (FR-treated)" },
    { "@type": "PropertyValue", "name": "Traffic Class", "value": "EN 1307 Class 32" },
    { "@type": "PropertyValue", "name": "Fiber", "value": "100% Natural Sisal" },
    { "@type": "PropertyValue", "name": "Construction", "value": "Woven Flatweave" },
    { "@type": "PropertyValue", "name": "Backing", "value": "Natural Latex + Jute (Non-Slip)" },
    { "@type": "PropertyValue", "name": "Pile Weight", "value": "56oz (1,900 g/m²)" },
    { "@type": "PropertyValue", "name": "Total Thickness", "value": "7mm" },
    { "@type": "PropertyValue", "name": "Roll Width", "value": "4m" },
    { "@type": "PropertyValue", "name": "Antistatic", "value": "Permanent (Natural Fiber)" }
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
  fiber: "FIBER",
  yarnSystem: "YARN SYSTEM",
  backing: "BACKING",
  pileWeight: "PILE WEIGHT",
  totalThickness: "TOTAL THICKNESS",
  rollWidth: "ROLL WIDTH",
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
          <Link href="/products/public-area" className="text-[10px] font-bold text-muted uppercase tracking-widest hover:text-primary">
            Back to Public Area Carpets
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
          <h2 className="text-3xl font-black text-primary uppercase tracking-widest mb-8">Natural Sisal Broadloom for Biophilic Public Spaces</h2>
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
