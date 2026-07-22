import type { Metadata } from "next";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { getWhatsAppBusinessUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Hotel & Hospitality Carpet Solutions | Wall-to-Wall Broadloom | VISHOME",
  description:
    "End-to-end hotel carpet solutions for lobby, corridor, guestroom, and ballroom projects. ASTM/EN compliant broadloom and carpet tile systems with custom pattern development and global delivery support.",
  keywords:
    "hotel carpet solution, hospitality carpet supplier, wall to wall hotel carpet, broadloom carpet manufacturer, hotel corridor carpet, ballroom carpet, custom hospitality carpet",
  alternates: {
    canonical: "/solutions/hotel-hospitality",
  },
  openGraph: {
    title: "Hotel & Hospitality Carpet Solutions | VISHOME",
    description:
      "Commercial hotel carpet systems for luxury hospitality projects, from design and sampling to production and delivery.",
    url: "https://www.vishomecarpet.com/solutions/hotel-hospitality",
    type: "website",
  },
};

const applicationZones = [
  {
    name: "Lobby & Reception",
    details:
      "Statement broadloom patterns with strong dimensional stability and premium visual texture for first-impression areas.",
  },
  {
    name: "Guestroom",
    details:
      "Comfort-focused construction with acoustic support, stain resistance, and brand-aligned pattern options for room categories.",
  },
  {
    name: "Corridor & Elevator Hall",
    details:
      "Heavy-traffic wear layers and practical maintenance strategy for continuous circulation zones with frequent cleaning cycles.",
  },
  {
    name: "Ballroom & Function Space",
    details:
      "Custom motif repeat and high-density structure to support event turnover, furniture movement, and long service life.",
  },
];

const featuredSystems = [
  {
    name: "Solution-Dyed Nylon Broadloom",
    material: "100% SDN",
    gauge: "1/10",
    fire: "ASTM E648 Class I",
    use: "Lobby / Corridor",
    image: "/images/broadloom-commercial.webp",
  },
  {
    name: "Hospitality Pattern Broadloom",
    material: "SDN + PP Blend",
    gauge: "1/12",
    fire: "EN 13501 Bfl-s1",
    use: "Guestroom / Ballroom",
    image: "/images/broadloom-patterned.webp",
  },
  {
    name: "Modular Transition Carpet Tile",
    material: "Solution-Dyed Nylon",
    gauge: "1/10",
    fire: "ASTM E648 Class I",
    use: "Back-of-House / Service Areas",
    image: "/images/carpet-tile-premium.webp",
  },
];

const faqItems = [
  {
    q: "What is the typical MOQ for hospitality carpet programs?",
    a: "MOQ depends on construction and pattern complexity. For stock constructions, MOQ can start from smaller project quantities; custom hospitality patterns follow project-specific MOQ based on color count and loom setup.",
  },
  {
    q: "Can you support custom guestroom and corridor pattern development?",
    a: "Yes. We provide design translation from moodboard/CAD into loom-ready pattern options and can produce strike-offs before bulk production.",
  },
  {
    q: "Which fire standards are available for hotel projects?",
    a: "We can support ASTM E648, EN 13501 Bfl-s1, and related project-specific compliance requirements with documentation for tender files.",
  },
  {
    q: "How long is the normal lead time?",
    a: "Lead time varies by quantity and customization depth. Typical timeline includes design confirmation, sample approval, production, and shipping scheduling.",
  },
  {
    q: "Do you support phased delivery for opening schedules?",
    a: "Yes. We can split production and shipment by area or floor plan to align with interior fit-out milestones and opening dates.",
  },
  {
    q: "Can your team provide installation guidance?",
    a: "Yes. We provide installation recommendations, seam direction guidance, adhesive notes, and maintenance handover suggestions for project teams.",
  },
];

export default function HotelHospitalitySolutionPage() {
  const whatsappUrl = getWhatsAppBusinessUrl(
    "Hello, I am interested in hotel and hospitality commercial carpet solutions. Please help me with a project quote, sample options, MOQ, lead time, and technical data sheet.",
    {
      placement: "hotel_hospitality_cta",
      product: "Hotel and hospitality carpet solutions",
      intent: "hotel_project_quote",
      pagePath: "/solutions/hotel-hospitality",
    }
  );

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.vishomecarpet.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solutions",
        item: "https://www.vishomecarpet.com/solutions",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Hotel & Hospitality",
        item: "https://www.vishomecarpet.com/solutions/hotel-hospitality",
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hotel & Hospitality Carpet Solution",
    provider: {
      "@type": "Organization",
      name: "Vishome Global Commercial Carpet Co., Ltd.",
      url: "https://www.vishomecarpet.com",
    },
    areaServed: ["North America", "Europe", "Australia", "Middle East", "Asia"],
    serviceType: "Commercial hospitality carpet solution and supply",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hospitality Carpet Systems",
      itemListElement: featuredSystems.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: item.name,
        },
      })),
    },
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ProductImage
            src="/images/blog-hotel-carpet.webp"
            alt="Hotel hospitality carpet background"
            className="w-full h-full object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container-fox relative z-10">
          <div className="max-w-3xl text-white">
            <p className="text-accent text-[10px] font-black uppercase tracking-[0.35em] mb-5">
              Hospitality Solutions
            </p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider leading-tight mb-8">
              Hotel & Hospitality Carpet Solutions
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed mb-10">
              Complete wall-to-wall and modular flooring systems for luxury hotels, resorts, serviced apartments, and mixed-use hospitality projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-fox-orange !px-10 !py-5">
                Request Project Quotation
              </Link>
              <Link
                href="/products/broadloom"
                className="btn-fox-outline !border-white !text-white hover:!bg-white hover:!text-primary !px-10 !py-5"
              >
                Explore Broadloom Systems
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-fox">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-tight mb-4">
              Application by Hospitality Area
            </h2>
            <p className="text-muted max-w-3xl mx-auto leading-relaxed">
              Each area requires different performance logic. We build specifications by traffic level, comfort target, and design language.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {applicationZones.map((zone) => (
              <div key={zone.name} className="border border-border rounded-xl p-8 bg-surface">
                <h3 className="text-base font-black text-primary uppercase tracking-[0.15em] mb-4">
                  {zone.name}
                </h3>
                <p className="text-muted leading-relaxed">{zone.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F8FA] border-y border-border">
        <div className="container-fox">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-tight mb-4">
              Recommended Product Systems
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredSystems.map((item) => (
              <article key={item.name} className="bg-white border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <ProductImage src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-7">
                  <h3 className="text-sm font-black text-primary uppercase tracking-[0.12em] mb-4 leading-snug">
                    {item.name}
                  </h3>
                  <div className="space-y-2 text-sm text-muted">
                    <p><span className="font-bold text-primary">Material:</span> {item.material}</p>
                    <p><span className="font-bold text-primary">Gauge:</span> {item.gauge}</p>
                    <p><span className="font-bold text-primary">Fire:</span> {item.fire}</p>
                    <p><span className="font-bold text-primary">Best For:</span> {item.use}</p>
                  </div>
                  <Link href="/contact" className="mt-6 inline-flex text-xs font-black uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors">
                    Request This System →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-fox">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-tight mb-8">
                Technical Data Snapshot
              </h2>
              <div className="overflow-x-auto border border-border rounded-xl">
                <table className="w-full min-w-[620px] text-sm">
                  <thead className="bg-surface">
                    <tr>
                      <th className="text-left p-4 font-black text-primary uppercase tracking-wider">Parameter</th>
                      <th className="text-left p-4 font-black text-primary uppercase tracking-wider">Standard Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Pile Fiber", "100% Solution-Dyed Nylon / Blend"],
                      ["Construction", "Tufted Loop or Cut-Loop Broadloom"],
                      ["Width", "3.66m / 4m Roll"],
                      ["Fire Performance", "ASTM E648 Class I / Bfl-s1"],
                      ["Wear Classification", "Class 33 Heavy Commercial"],
                      ["Backing", "Action Bac / Cushion Back / PVC Optional"],
                      ["Acoustic", "Enhanced impact sound absorption"],
                      ["Installation", "Direct glue-down with seam plan"],
                    ].map((row) => (
                      <tr key={row[0]} className="border-t border-border">
                        <td className="p-4 text-primary font-semibold">{row[0]}</td>
                        <td className="p-4 text-muted">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-fox-orange !px-10">
                  Request Full Technical Datasheet
                </Link>
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-primary uppercase">Delivery Workflow</h3>
              {[
                "Design Brief & Floor Plan Intake",
                "Pattern Simulation & Material Recommendation",
                "Strike-Off Sampling & Approval",
                "Mass Production with QC Milestones",
                "Export Packing, Loading, and Delivery Coordination",
              ].map((step, index) => (
                <div key={step} className="flex items-start gap-4 p-5 bg-surface border border-border rounded-lg">
                  <span className="w-8 h-8 rounded-full bg-primary text-white text-xs font-black flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="text-primary font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#102A43] text-white">
        <div className="container-fox">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
              Hospitality Project FAQ
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item) => (
              <article key={item.q} className="border border-white/10 rounded-lg p-7 bg-white/5">
                <h3 className="text-sm font-black uppercase tracking-[0.12em] mb-3 text-accent">{item.q}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-fox">
          <div className="rounded-2xl bg-primary p-10 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest leading-tight mb-6">
              Ready for Your Hotel Tender Package?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10">
              Send floor plan, target budget, and opening timeline. We return a specification-ready recommendation and quote support package.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-fox-orange !px-10 !py-5">
                Contact Project Team
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                data-whatsapp-placement="hotel_hospitality_cta"
                data-whatsapp-product="Hotel and hospitality carpet solutions"
                data-whatsapp-intent="hotel_project_quote"
                className="btn-fox-outline !border-white !text-white hover:!bg-white hover:!text-primary !px-10 !py-5"
              >
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
