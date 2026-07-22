import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { absoluteUrl, productJsonLd, productPath, safeJsonLd } from "@/lib/seo";
import ProductImage from "@/components/ProductImage";
import ProductGallery from "@/components/ProductGallery";
import { BuyerReasons, ProductConversionPanel } from "@/components/ProductConversion";

const productId = "3d-printed-banquet-hall-carpet";
const canonicalPath = "/products/wall-to-wall/3d-printed-banquet-hall-carpet";
const product = products.find((prod) => prod.id === productId);

const detailImage = {
  src: "/images/products/3d-printed-banquet-carpet/05-corridor-view.webp",
  alt: "Custom 3D printed wall-to-wall hotel corridor carpet in teal with gold line pattern, project detail view"
};

const descriptionParagraphs = [
  "Vishomecarpet's Custom 3D Printed Banquet Hall Carpet is a wall-to-wall hospitality broadloom engineered for banquet rooms, ballrooms, hotel corridors, and event venues. Advanced high-speed inkjet printing reproduces photo-realistic custom patterns with virtually unlimited colors - so designers can match brand artwork, murals, or bespoke motifs with a precision that traditional woven banquet carpet cannot reach, at a fraction of the setup cost and lead time.",
  "As a commercial carpet manufacturer supplying contract and hospitality projects worldwide, we build this printed broadloom on premium high-density nylon or soft synthetic blend pile with reinforced ActionBac or jute backing. It carries a Class I fire rating (ASTM E648 / Bfl-s1), a Class 33 heavy-commercial traffic rating, and permanent antistatic protection - the specification package banquet halls, casinos, and conference centers require. Standard 4 m roll width enables seamless wall-to-wall installation across large floor plates.",
  "Factory-direct from our Tianjin facility, the program supports a low 200 SQM MOQ, 15-25 day production, custom pile weight from 32 oz to 45 oz, and full design service: send your floor plan and artwork, and our studio returns a printed pattern proof before mass production. Export packing, documentation, and worldwide shipping are handled in-house, making Vishomecarpet a single-source hotel carpet supplier for multi-property rollouts."
];

const faqs = [
  {
    q: "What is 3D printed banquet hall carpet?",
    a: "It is a wall-to-wall broadloom carpet whose pattern is applied by high-definition digital printing onto a dense nylon pile. The process reproduces fully custom, photo-realistic banquet room designs with unlimited colors - a faster, more economical alternative to woven Axminster for banquet halls, ballrooms, and event spaces."
  },
  {
    q: "Is printed carpet durable enough for banquet halls and event venues?",
    a: "Yes. The high-density pile is rated Class 33 heavy commercial traffic with permanent antistatic protection, engineered for banquet seating turnover, service trolleys, and continuous event traffic, while hiding soil between deep cleans."
  },
  {
    q: "Can you print our own banquet room design or brand pattern?",
    a: "Yes. Custom pattern reproduction is the core of this program - send artwork, brand colors, or a reference photo and Vishomecarpet's design studio delivers a printed pattern proof for approval before production."
  },
  {
    q: "What roll width and sizes are available for wall-to-wall installation?",
    a: "Standard roll width is 4 m for seamless wall-to-wall coverage in large banquet floors; roll length, pile weight (32-45 oz), and total thickness (9-12 mm) are customizable to the project specification."
  },
  {
    q: "What are the MOQ and production lead time?",
    a: "MOQ is 200 SQM and typical production lead time is 15-25 days, making the program suitable for both single banquet hall refurbishments and multi-property hospitality rollouts."
  },
  {
    q: "Is the carpet fire-rated for commercial and hospitality projects?",
    a: "Yes. It meets Class I fire performance (ASTM E648) and Bfl-s1; test reports and compliance documentation are available on request for project submittals."
  }
];

const relatedLinks = [
  { label: "Wall-to-Wall Carpets", href: "/products/wall-to-wall" },
  { label: "3D Printed Hotel Carpet", href: "/products/wall-to-wall/3d-printed-hotel-carpet" },
  { label: "Carpet Printing Technology Guide", href: "/blog/carpet-printing-technology-design-to-installation-guide" }
];

export const metadata: Metadata = {
  title: "Custom 3D Printed Banquet Hall Carpet | Hotel Broadloom Wall-to-Wall | VISHOME",
  description: "Custom 3D printed banquet hall carpet from a hospitality carpet manufacturer: wall-to-wall broadloom for ballrooms, banquet rooms & hotel corridors. Class I fire rating, 4m width, MOQ 200 SQM, factory-direct.",
  keywords: "banquet hall carpet, banquet room carpet, banquet carpet, hotel broadloom carpet, wall to wall carpet, custom broadloom carpet, hospitality carpet manufacturer, commercial broadloom carpet, hotel carpet supplier, 3D printed carpet, Vishomecarpet",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Custom 3D Printed Banquet Hall Carpet | VISHOME",
    description: "Custom 3D printed wall-to-wall banquet hall carpet for ballrooms, banquet rooms, and hotel corridors. Class I fire rating, 4m width, low MOQ, factory-direct.",
    url: absoluteUrl(canonicalPath),
    images: [
      {
        url: absoluteUrl("/images/products/3d-printed-banquet-carpet/02-banquet-hall.webp"),
        alt: "Custom 3D Printed Banquet Hall Carpet by Vishomecarpet"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom 3D Printed Banquet Hall Carpet | VISHOME",
    description: "Custom 3D printed wall-to-wall banquet hall carpet for ballrooms, banquet rooms, and hotel corridors. Class I fire rating, 4m width, low MOQ, factory-direct.",
    images: [absoluteUrl("/images/products/3d-printed-banquet-carpet/02-banquet-hall.webp")]
  }
};

const productSchemaJsonLd = product ? productJsonLd(product) : null;

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
    { "@type": "ListItem", position: 3, name: "Wall-to-Wall Carpets", item: absoluteUrl("/products/wall-to-wall") },
    { "@type": "ListItem", position: 4, name: "Custom 3D Printed Banquet Hall Carpet", item: absoluteUrl(productPath(productId)) },
  ],
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
  if (!product) return <div>Product Not Found</div>;

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(productSchemaJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
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
              <ProductGallery mainImage={product.image} gallery={product.gallery} productName={product.name} />
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
                {product.fobPrice && (
                  <div className="flex justify-between uppercase text-xs gap-6">
                    <span>FOB PRICE</span>
                    <span className="text-right font-bold">{product.fobPrice.display}</span>
                  </div>
                )}
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
          <h2 className="text-3xl font-black text-primary uppercase tracking-widest mb-8">Banquet Hall Broadloom Built for Custom Hospitality Projects</h2>
          <div className="space-y-5">
            {descriptionParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 42)} className="text-muted text-lg leading-relaxed">{paragraph}</p>
            ))}
          </div>
          <figure className="mt-12 border border-border shadow-xl">
            <div className="aspect-[3/2] overflow-hidden">
              <ProductImage src={detailImage.src} alt={detailImage.alt} className="w-full h-full object-cover" />
            </div>
            <figcaption className="bg-surface px-6 py-4 text-xs font-bold text-muted uppercase tracking-widest">
              Project detail - custom printed wall-to-wall carpet, 4m seamless roll installation
            </figcaption>
          </figure>
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

      <BuyerReasons />

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
