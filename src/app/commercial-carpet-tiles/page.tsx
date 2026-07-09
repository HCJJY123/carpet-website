import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { products } from "@/lib/data";
import { productPath } from "@/lib/seo";

export const metadata = {
  title: "Commercial Carpet Tiles | Global B2B Supplier | Vishome",
  description: "High-performance commercial carpet tiles for offices, hotels, and retail. Fire-rated, stain-resistant, and low-VOC modular flooring solutions from China.",
  keywords: "commercial carpet tiles, modular carpet tiles, office carpet flooring, China carpet tile supplier"
};

export default function CommercialCarpetTilesPage() {
  const tileProducts = products.filter(p => p.category === "carpet-tiles");
  const featuredTile = products.find((p) => p.id === "luxury-hotel-carpet-tile-50x50cm");

  return (
    <div className="bg-white">
      {/* Targeted Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/commercial-carpet-tiles-office-hero.png')" }}
        />
        <div className="absolute inset-0 bg-[#15385d]/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#15385d]/90 via-[#15385d]/72 to-[#15385d]/38" />
        <div className="container-fox relative py-24 md:py-32">
          <div className="max-w-4xl">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-accent">Engineered for Performance</span>
            <h1 className="mb-8 text-4xl font-bold leading-tight text-white md:text-6xl">
              High-Performance Commercial Carpet Tiles
            </h1>
            <p className="mb-12 max-w-3xl text-xl text-gray-100/90">
              The preferred choice for modern office fit-outs and high-traffic commercial interiors. Fire-rated (ASTM E648) and low-VOC for maximum safety and compliance.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/contact" className="btn-fox-orange">Get Project Quotation</Link>
              <Link href="/contact" className="btn-fox-outline">Request Free Samples</Link>
            </div>
          </div>
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
                  src={featuredTile.image}
                  alt={featuredTile.imageAlt || featuredTile.name}
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
                  <span className="border border-border bg-white px-4 py-3">MOQ 1 Piece</span>
                  <span className="border border-border bg-white px-4 py-3">Sample Available</span>
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
              <Link key={product.id} href={productPath(product.id)} className="group block">
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
                    <span>MOQ</span>
                    <span className="text-right">{product.moq}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Availability</span>
                    <span className="text-right">In Stock / Made to Order</span>
                  </div>
                </div>
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
