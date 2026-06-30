import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { products } from "@/lib/data";
import { productPath } from "@/lib/seo";

export const metadata = {
  title: "50x50 Carpet Tiles | Standard Modular Flooring | Vishome",
  description: "Standardized 50x50cm commercial carpet tiles. Easy installation, rapid shipping, and superior durability for office and hotel projects.",
  keywords: "50x50 carpet tiles, carpet tiles 50x50, 50x50cm carpet tile supplier, standardized flooring"
};

export default function CarpetTiles50x50Page() {
  const products50x50 = products.filter(p => p.spec.size.includes("50*50") || p.spec.size.includes("50x50"));

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-primary-light py-24 border-b border-white/5 text-center">
        <div className="container-fox">
          <span className="text-accent font-bold tracking-[0.2em] text-sm uppercase mb-4 block">The Global Standard</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase leading-tight max-w-4xl mx-auto">
            50x50 cm Standardized Carpet Tiles
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto opacity-90">
            Maximizing installation efficiency and minimizing waste. Our 50x50 modular tiles are the industry standard for durability and design flexibility.
          </p>
          <Link href="/contact" className="btn-fox-orange">Check Ready-to-Ship Inventory</Link>
        </div>
      </section>

      {/* Why 50x50? - Benefits Grid */}
      <section className="section-padding">
        <div className="container-fox">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "EASY LOGISTICS",
                desc: "Packed in optimized cartons (5 sqm/box) for easy handling and vertical transport in buildings.",
                icon: "📦"
              },
              {
                title: "LOW WASTE",
                desc: "Modular 50x50cm format reduces cutting waste by 15-20% compared to broadloom rolls.",
                icon: "📉"
              },
              {
                title: "FAST INSTALLATION",
                desc: "Standardized dimensions allow for rapid laying with minimal professional training required.",
                icon: "⚡"
              }
            ].map((benefit) => (
              <div key={benefit.title} className="text-center group">
                <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">{benefit.icon}</div>
                <h3 className="font-bold text-primary mb-4 tracking-widest">{benefit.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Layouts */}
      <section className="section-padding bg-surface">
        <div className="container-fox">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 uppercase leading-tight">Unlimited Layout Possibilities</h2>
              <p className="text-muted mb-8 leading-relaxed">
                The beauty of 50x50cm tiles lies in their modularity. Depending on the laying direction, you can create entirely different visual textures with the same product.
              </p>
              <div className="space-y-4">
                {[
                  { name: "Monolithic", desc: "All tiles laid in the same direction for a seamless look." },
                  { name: "Ashlar / Brick", desc: "Offset tiles to create a linear, rhythmic pattern." },
                  { name: "Quarter-Turn", desc: "Rotate every other tile 90° to create a checkerboard effect." }
                ].map((type) => (
                  <div key={type.name} className="p-4 border-l-4 border-border hover:border-accent bg-white transition-all">
                    <span className="font-bold text-primary uppercase text-sm block mb-1">{type.name}</span>
                    <p className="text-xs text-muted">{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <ProductImage src="/images/carpet-tile-premium.jpg" alt="Installation patterns" className="rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Targeted Product List */}
      <section className="section-padding">
        <div className="container-fox">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">Featured 50x50 Collections</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products50x50.map((product) => (
              <Link key={product.id} href={productPath(product.id)} className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all border border-border">
                <div className="aspect-square overflow-hidden">
                  <ProductImage src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-lg text-primary mb-2 uppercase">{product.name}</h3>
                  <div className="flex justify-between items-center text-[10px] font-bold text-accent uppercase tracking-widest">
                    <span>50x50 cm</span>
                    <span>Ready to Ship</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="container-fox text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 uppercase tracking-widest">Ready for Your Office Fit-out?</h2>
          <p className="text-white/80 mb-12 max-w-2xl mx-auto text-lg">
            Standardized sourcing means faster delivery and simpler project management.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="bg-white text-accent font-bold px-12 py-4 rounded-md hover:bg-gray-100 transition-all uppercase tracking-widest shadow-lg">
              Get Instant Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
