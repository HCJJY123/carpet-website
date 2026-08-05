import Link from "next/link";
import AnswerFirst from "@/components/AnswerFirst";
import ConversionLiftPanel from "@/components/ConversionLiftPanel";
import ProductImage from "@/components/ProductImage";
import { products } from "@/lib/data";
import { productPath, safeJsonLd } from "@/lib/seo";
import FactoryCtaBackground from "@/components/FactoryCtaBackground";

const hotelQuoteHref = "/contact?product=Hotel%20Carpet%20Project&source=%2Fhotel-carpet#quote-form";

const hotelFaqs = [
  {
    question: "What carpet is usually specified for hotel guestrooms and corridors?",
    answer: "Guestrooms often use comfort-oriented wall-to-wall carpet, while corridors need stronger appearance retention, pattern planning, and noise control. Final construction should be confirmed by traffic level, fire requirement, design intent, cleaning plan, and project budget.",
  },
  {
    question: "Can Vishomecarpet support custom hotel carpet patterns?",
    answer: "Yes. Vishomecarpet can discuss custom hospitality broadloom, printed designs, Axminster-style planning, color direction, strike-off samples, and project-specific roll planning. Final feasibility depends on construction, color count, pattern repeat, MOQ, and lead time.",
  },
  {
    question: "What should a hotel buyer send before asking for a quote?",
    answer: "Send the area, room type, corridor width or roll plan, design direction, destination country, required fire or test standard, sample requirement, and target installation date. These details help the factory quote a comparable construction instead of a generic carpet price.",
  },
  {
    question: "Are fire certificates and technical documents available?",
    answer: "Relevant technical documents can be reviewed for the quoted construction. Buyers should not treat documents from another material, backing, or pile weight as automatically equivalent. Required standards should be stated before order confirmation.",
  },
  {
    question: "How does hotel carpet MOQ work?",
    answer: "Sample or strike-off review is handled separately from bulk production. Trial and project MOQ depend on construction, color, pattern, roll width, and whether the carpet is custom made or selected from an existing option.",
  },
];

export const metadata = {
  title: "Hotel Carpet Supplier | Guestroom, Corridor & Lobby Broadloom | Vishome",
  description: "Source custom hotel carpet for guestrooms, corridors, lobbies and banquet halls. Compare broadloom, Axminster, printed designs, samples, MOQ and project quote support.",
  alternates: { canonical: "/hotel-carpet" },
};

export default function HotelCarpetPage() {
  const hotelProducts = products.filter(p => p.category === "wall-to-wall" || p.id.includes("luxury"));
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hotelFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      {/* Hospitality Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-primary-light py-24">
        <div className="absolute inset-0">
          <ProductImage
            src="/images/solutions/hotel-carpet-hero-c68765be.webp"
            alt="Luxury hotel lobby with custom patterned broadloom carpet"
            className="h-full w-full"
            priority
            quality={75}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-primary/76 md:bg-[linear-gradient(90deg,rgba(15,43,74,0.94)_0%,rgba(15,43,74,0.78)_44%,rgba(15,43,74,0.28)_72%,rgba(15,43,74,0.1)_100%)]" />
        <div className="container-fox relative">
          <div className="max-w-3xl">
              <span className="text-accent font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Elevating Guest Experience</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase leading-tight">
                Hotel Carpet Selection by Guest Area
              </h1>
              <p className="text-xl text-gray-300 mb-12 opacity-90 leading-relaxed">
                From luxury guest suites to high-traffic corridors and grand banquet halls. Vishomecarpet helps international hotel buyers compare construction, samples, fire documents, roll planning, and project quotations.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link
                  href={hotelQuoteHref}
                  data-track-event="hotel_carpet_hero_quote_click"
                  data-item-name="Hotel Carpet Project"
                  data-item-category="wall-to-wall"
                  className="btn-fox-orange"
                >
                  Request Hotel Carpet Quote
                </Link>
                <Link href="/products/wall-to-wall" className="btn-fox-outline">Compare Hotel Carpet Products</Link>
                <Link href="/projects" className="btn-fox-outline">View Hotel Projects</Link>
              </div>
          </div>
        </div>
      </section>

      <AnswerFirst
        eyebrow="Hotel Carpet Buying Answer"
        title="Which Hotel Carpet Should a Buyer Start With?"
        answer="Start from the guest area, not only the pattern. Guestrooms need comfort and acoustic support, corridors need durability and stain-hiding pattern planning, and lobbies or banquet areas need a stronger design and documentation review. Vishomecarpet can help compare hotel broadloom, printed carpet, wool-blend options, and project-specific constructions after the buyer confirms area, destination, traffic level, required documents, and sample stage."
        facts={[
          { label: "Main Applications", value: "Guestrooms, corridors, lobbies, ballrooms and public areas" },
          { label: "Quote Inputs", value: "Area, pattern, destination, fire standard and target date" },
          { label: "Sample Path", value: "Material swatch or strike-off before project production" },
          { label: "Document Review", value: "Confirmed by exact quoted construction" },
        ]}
        moq={[
          { label: "Sample", value: "Material swatch or strike-off available" },
          { label: "Trial Order", value: "Confirmed by design and construction" },
          { label: "Project MOQ", value: "Usually project-specific for custom hotel carpet" },
        ]}
        suitableFor={[
          "Hotel guestroom, corridor, lobby and banquet carpet sourcing",
          "Buyers comparing Axminster-style, printed and tufted hospitality carpet",
          "Projects needing sample review, roll planning and export quotation support",
        ]}
        notSuitableFor={[
          "Wet areas or outdoor areas without a confirmed flooring system",
          "Projects that require final compliance documents before construction is selected",
          "Retail one-piece orders without project quantity or specification details",
        ]}
        evidence="This page gives procurement guidance. Final price, MOQ, lead time, test documents, backing and material must be confirmed against the exact construction quoted by Vishomecarpet."
        quoteHref={hotelQuoteHref}
        quoteLabel="Request Hotel Carpet Quote"
      />

      <ConversionLiftPanel
        eyebrow="Procurement Shortcut"
        title="Send Area, Destination and Design Direction First"
        body="A hotel carpet quote depends on area, guest zone, pattern repeat, fire requirement, sample stage and delivery country. Submit the basics first so the factory can recommend the right product path and avoid a vague square-meter price."
        product="Hotel Carpet Project"
        quoteHref={hotelQuoteHref}
        compact
      />

      {/* Solutions by Zone */}
      <section className="section-padding bg-surface">
        <div className="container-fox">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">The Hospitality Selection Guide</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Guest Rooms",
                desc: "Focus on comfort and acoustics. Soft-touch broadloom with subtle patterns for a residential hospitality feel.",
                icon: "🛌"
              },
              {
                title: "Corridors",
                desc: "Durability is key. High-density patterns that hide traffic lanes and withstand heavy luggage movement.",
                icon: "🚶"
              },
              {
                title: "Public Areas",
                desc: "Grand design statements. Custom Axminster and patterned jacquard for ballrooms, lobbies, and restaurants.",
                icon: "🏛️"
              }
            ].map((zone) => (
              <div key={zone.title} className="bg-white p-10 rounded-xl shadow-sm border border-border hover:border-accent transition-all group">
                <div className="text-4xl mb-6">{zone.icon}</div>
                <h3 className="font-bold text-xl text-primary mb-4 uppercase tracking-wider">{zone.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{zone.desc}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted">
            For controlled-traffic lobby seating zones, interior designers can also specify a loose-laid{" "}
            <Link href="/products/public-area/custom-sculpted-wool-lobby-rug" className="font-bold text-accent hover:text-primary">
              custom wool rug for hotel lobbies
            </Link>{" "}
            instead of continuous broadloom.
          </p>
        </div>
      </section>

      {/* Custom Design Process */}
      <section className="section-padding">
        <div className="container-fox">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <ProductImage src="/images/blog-hotel-carpet.webp" alt="Custom design process" className="rounded-2xl shadow-2xl" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-10 uppercase leading-tight">Bespoke Pattern Development</h2>
              <div className="space-y-10">
                {[
                  { step: "01", title: "Reference Matching", desc: "Send us your project renderings or Pantone colors. Our design team creates a 3D visualization within 48 hours." },
                  { step: "02", title: "Strike-off Sampling", desc: "We produce a physical 'strike-off' sample for color and texture verification before bulk manufacturing." },
                  { step: "03", title: "Document Confirmation", desc: "Required fire-performance documents and testing options are confirmed for the quoted construction and destination standard." }
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-6">
                    <span className="text-4xl font-black text-accent/20 italic">{s.step}</span>
                    <div>
                      <h4 className="font-bold text-lg text-primary uppercase tracking-widest mb-2">{s.title}</h4>
                      <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="section-padding bg-primary">
        <div className="container-fox">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-widest">Hospitality Collections</h2>
            <p className="text-gray-400">Selected broadloom and tile solutions for 5-star environments.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelProducts.map((product) => (
              <Link key={product.id} href={productPath(product.id)} className="group bg-primary-light border border-white/5 p-4 rounded-xl">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
                  <ProductImage src={product.image} alt={product.imageAlt || product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2 uppercase group-hover:text-accent transition-colors">{product.name}</h3>
                <div className="space-y-2 border-t border-white/10 pt-4 text-[10px] font-bold text-accent uppercase tracking-widest">
                  <div className="flex justify-between gap-4">
                    <span>{product.id === "custom-luxury-hotel-room-carpet" ? "Reference FOB Price" : "FOB Price"}</span>
                    <span className="text-right">{product.fobPrice?.display}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Project MOQ</span>
                    <span className="text-right">{product.moq}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Availability</span>
                    <span className="text-right">{product.id === "custom-luxury-hotel-room-carpet" ? "Made to Order" : "In Stock / Made to Order"}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-surface" data-funnel-section="hotel_carpet_faq">
        <div className="container-fox max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-accent">Hotel Carpet FAQ</p>
            <h2 className="text-3xl font-black uppercase text-primary md:text-4xl">Procurement Questions Before Quotation</h2>
          </div>
          <div className="space-y-4">
            {hotelFaqs.map((item) => (
              <details key={item.question} className="border border-border bg-white p-6">
                <summary className="cursor-pointer font-black text-primary">{item.question}</summary>
                <p className="mt-4 leading-relaxed text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FactoryCtaBackground className="py-24" overlayClassName="bg-primary/68">
        <div className="container-fox text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 uppercase tracking-widest">Start Your Hotel Transformation</h2>
          <p className="text-white/80 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Partner with a factory that understands the complexities of international hospitality procurement.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact?product=Hotel%20Carpet%20Project&source=%2Fhotel-carpet#quote-form" className="bg-white text-accent font-bold px-12 py-5 rounded-md hover:bg-gray-100 transition-all uppercase tracking-widest shadow-xl">
              Get A Professional Quote
            </Link>
          </div>
        </div>
      </FactoryCtaBackground>
    </div>
  );
}
