import Image from "next/image";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import AnswerFirst from "@/components/AnswerFirst";
import ConversionLiftPanel from "@/components/ConversionLiftPanel";
import { products } from "@/lib/data";
import { productPath } from "@/lib/seo";

export const metadata = {
  title: "Commercial Carpet Tiles | Global B2B Supplier | Vishome",
  description: "High-performance commercial carpet tiles for offices, hotels, and retail. Fire-rated, stain-resistant, and low-VOC modular flooring solutions from China.",
  alternates: { canonical: "/products/carpet-tiles" },
};

export default function CommercialCarpetTilesPage() {
  const tileProducts = products.filter(p => p.category === "carpet-tiles");
  const featuredTile = products.find((p) => p.id === "luxury-hotel-carpet-tile-50x50cm");

  return (
    <div className="bg-white">
      {/* Targeted Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <Image
          src="/images/commercial-carpet-tiles-office-hero.webp"
          alt=""
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#15385d]/82" />
        <div className="container-fox relative py-20 md:py-28">
          <div className="max-w-4xl">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-accent">Engineered for Performance</span>
            <h1 className="mb-8 text-4xl font-bold leading-tight text-white md:text-6xl">
              High-Performance Commercial Carpet Tiles
            </h1>
            <p className="mb-9 max-w-3xl text-lg leading-relaxed text-gray-100/90 md:text-xl">
              Factory-direct 50x50 modular carpet tiles for offices, hotels, retail, schools, and commercial fit-outs. Compare nylon or polypropylene fiber, backing, fire-rating, MOQ, and delivery terms before ordering.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#quick-quote" className="btn-fox-orange">Get Factory Quote</Link>
              <Link href="/request-sample-box?product=Commercial%20Carpet%20Tiles" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/55 px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-primary">Request Samples</Link>
            </div>
            <div className="mt-8 grid gap-px border border-white/20 bg-white/20 text-white sm:grid-cols-4">
              {[
                ["Reference Price", "From US$3.80 / SQM"],
                ["Typical MOQ", "200-500 SQM"],
                ["Production", "7-25 Days"],
                ["Trade Terms", "FOB / CIF / DAP"],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#15385d]/85 px-4 py-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/60">{label}</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.06em]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnswerFirst
        title="Are Commercial Carpet Tiles the Right Choice for Your Project?"
        answer="Commercial carpet tiles are a practical choice for offices, hotels, retail, schools, and phased renovations where damaged areas may need individual replacement. Vishomecarpet supplies 50x50 modular tiles in nylon or polypropylene options with project-specific backing. Compare traffic level, fire requirement, rolling-chair use, maintenance plan, sample approval, and total delivered cost before choosing a style."
        facts={[
          { label: "Common Format", value: "50x50 cm modular carpet tiles" },
          { label: "Fiber Options", value: "Nylon or polypropylene by product" },
          { label: "Reference Price", value: "From US$3.80 / SQM; final quote varies" },
          { label: "Typical Production", value: "7-25 days after order confirmation" },
        ]}
        moq={[
          { label: "Sample", value: "Material or color swatch available" },
          { label: "Trial Order", value: "Typically from 100 SQM in a standard color" },
          { label: "Project MOQ", value: "Usually 200-500 SQM depending on style and backing" },
        ]}
        suitableFor={[
          "Open offices, meeting rooms, corridors and commercial fit-outs",
          "Projects needing phased installation or easy tile replacement",
        ]}
        notSuitableFor={[
          "Wet areas or outdoor exposure without a confirmed system",
          "Specifications selected before subfloor and fire requirements are checked",
        ]}
        evidence="The ranges above summarize current published product data. Exact construction, stock status, price, certification document, packing, and delivery time must be confirmed for the selected tile and destination before purchase."
        quoteHref="#quick-quote"
        quoteLabel="Get Carpet Tile Recommendation"
      />

      <ConversionLiftPanel
        eyebrow="High-Intent Buyer Shortcut"
        title="Send Area and Destination Before Comparing Every Tile"
        body="Commercial carpet tile buyers usually need a fast match between fiber, backing, quantity, and delivery country. Submit the basics first and the factory can narrow the choices instead of making you compare every option manually."
        product="Commercial Carpet Tiles"
        quoteHref="#quick-quote"
        compact
      />

      <section id="quick-quote" className="scroll-mt-24 border-b border-border bg-white py-12 md:py-16" data-funnel-section="carpet_tile_quick_quote">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
          <div className="lg:sticky lg:top-28">
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-accent">Factory Quote Without Leaving This Page</p>
            <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-4xl">Get Price, MOQ, Sample and Lead Time</h2>
            <p className="mt-5 leading-relaxed text-muted">Send the destination and estimated area. The export team will match a suitable fiber and backing, then reply with comparable project pricing.</p>
            <dl className="mt-8 divide-y divide-border border-y border-border">
              {[
                ["What to send", "Area, application, destination, and required date"],
                ["What you receive", "Recommended construction, price range, MOQ, and lead time"],
                ["Sample support", "Available color and backing samples with courier confirmation"],
                ["Response", "Export sales review within one business day"],
              ].map(([term, detail]) => (
                <div key={term} className="py-4">
                  <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-primary">{term}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
          <LeadCaptureForm
            formName="carpet_tiles_quick_quote"
            productDefault="Commercial Carpet Tiles"
            projectTypeDefault="Office / commercial carpet tile project"
            submitLabel="GET FACTORY QUOTE"
            introText="Only contact details and destination are required. Quantity and buying stage can be added when available."
            variant="quick"
          />
        </div>
      </section>

      {/* Decision Support: Material & Backing Matrix */}
      <section className="section-padding bg-surface">
        <div className="container-fox">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">Procurement Decision Matrix</h2>
            <p className="text-muted max-w-2xl mx-auto">Compare materials and backings to find the right specification for your project budget and traffic needs.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-accent"></span> Fiber Comparison
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-border pb-3">
                  <span className="font-bold text-sm uppercase">Nylon 6.6</span>
                  <span className="text-xs font-semibold bg-success/10 text-success px-2 py-1 rounded">Best Durability</span>
                </li>
                <li className="flex justify-between border-b border-border pb-3">
                  <span className="font-bold text-sm uppercase">PP (Polypropylene)</span>
                  <span className="text-xs font-semibold bg-primary/5 text-muted px-2 py-1 rounded">Cost Effective</span>
                </li>
                <li className="flex justify-between border-b border-border pb-3">
                  <span className="font-bold text-sm uppercase">Solution Dyed</span>
                  <span className="text-xs font-semibold bg-accent/10 text-accent px-2 py-1 rounded">Top Stain Resistance</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-accent"></span> Backing Options
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-border pb-3">
                  <span className="font-bold text-sm uppercase">PVC + Glass Fiber</span>
                  <span className="text-muted text-xs uppercase">Elite Stability</span>
                </li>
                <li className="flex justify-between border-b border-border pb-3">
                  <span className="font-bold text-sm uppercase">Bitumen Backing</span>
                  <span className="text-muted text-xs uppercase">Standard Project</span>
                </li>
                <li className="flex justify-between border-b border-border pb-3">
                  <span className="font-bold text-sm uppercase">Eco-Cushion</span>
                  <span className="text-muted text-xs uppercase">Acoustic Comfort</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {featuredTile && (
        <section className="border-y border-border bg-white">
          <div className="container-fox py-10 md:py-14">
            <Link
              href={productPath(featuredTile.id)}
              className="group grid gap-8 overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-all hover:border-accent hover:bg-white hover:shadow-2xl md:grid-cols-[0.9fr_1.1fr] md:p-8 lg:gap-12"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border bg-white">
                <ProductImage
                  src="/images/products/luxury-hotel-carpet-tile-50x50cm/10-featured-commercial-carpet-tile-office-stack.webp"
                  alt="Gray commercial carpet tile stack and office floor samples for hotel and office projects"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-accent">
                  Recommended 50x50 Commercial Carpet Tile
                </p>
                <h2 className="mb-4 text-2xl font-black uppercase leading-tight text-primary md:text-4xl">
                  50x50 Carpet Tiles for Hotel Carpet Floor and Office Projects
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-muted md:text-base">
                  View Vishomecarpet 50x50 commercial carpet tiles with volume pricing, MOQ, sample support,
                  technical data, and application images for hotel corridors, guest rooms, meeting rooms, and office carpet projects.
                </p>
                <div className="grid gap-3 text-[10px] font-black uppercase tracking-[0.14em] text-primary sm:grid-cols-3">
                  <span className="border border-border bg-white px-4 py-3">US$1.40-2.20 / Piece</span>
                  <span className="border border-border bg-white px-4 py-3">Trial Order 200 Pieces</span>
                  <span className="border border-border bg-white px-4 py-3">Free Sample Box</span>
                </div>
                <span className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-accent">
                  View Product Details →
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Product Grid */}
      <section className="section-padding">
        <div className="container-fox">
          <div className="grid md:grid-cols-3 gap-8">
            {tileProducts.map((product) => (
              <Link key={product.id} href={productPath(product.id)} className="group flex h-full flex-col rounded-lg border border-border bg-white p-5 transition-all hover:border-accent hover:shadow-xl">
                <div className="aspect-square overflow-hidden rounded-lg mb-6 border border-border">
                  <ProductImage src={product.image} alt={product.imageAlt || product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="font-bold text-xl text-primary mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
                <p className="text-sm text-muted line-clamp-2 mb-4">{product.description}</p>
                <div className="space-y-2 border-t border-border pt-4 text-[10px] font-bold uppercase tracking-widest text-accent">
                  <div className="flex justify-between gap-4">
                    <span>FOB Price</span>
                    <span className="text-right">{product.fobPrice?.display}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Project MOQ</span>
                    <span className="text-right">{product.moq}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Availability</span>
                    <span className="text-right">In Stock / Made to Order</span>
                  </div>
                </div>
                <span className="mt-5 flex min-h-11 items-center justify-between rounded-sm bg-primary px-4 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-white transition-colors group-hover:bg-[#C8752A]">
                  View Product & Pricing <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Export Section */}
      <section className="section-padding bg-primary">
        <div className="container-fox">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 uppercase leading-tight">Exporting Quality to Global Standards</h2>
              <div className="space-y-6">
                {[
                  { q: "ASTM E648 Fire Rating", a: "Standard compliance for US hospitality and commercial buildings." },
                  { q: "CRI Green Label Plus", a: "Low VOC emissions for superior indoor air quality (IAQ)." },
                  { q: "ISO 9001:2015", a: "Rigorous quality management from production to packaging." },
                  { q: "Global DDP Delivery", a: "Direct door-to-door delivery with customs cleared in 40+ countries." }
                ].map((item) => (
                  <div key={item.q} className="border-l-4 border-accent pl-6 py-2">
                    <h4 className="text-white font-bold text-lg mb-1 uppercase tracking-wide">{item.q}</h4>
                    <p className="text-gray-400 text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 p-12 rounded-2xl border border-white/10 text-center">
              <h3 className="text-2xl font-bold text-white mb-6 uppercase">Ready to Start?</h3>
              <p className="text-gray-400 mb-10">Get a professional technical assessment and sample matched to your project requirements within 24 hours.</p>
              <Link href="/contact" className="btn-fox-orange w-full py-5 text-center">Start Your Inquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
