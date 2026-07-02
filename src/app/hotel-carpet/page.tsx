import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { products } from "@/lib/data";

export const metadata = {
  title: "Hotel Carpet Supplier | Luxury Hospitality Flooring | Vishome",
  description: "Premier supplier of luxury hotel carpets, guest room broadloom, and corridor carpets. Custom Axminster and jacquard designs with international fire ratings.",
  keywords: "hotel carpet, hotel carpet supplier, hospitality flooring, guest room carpet, Axminster carpet China"
};

export default function HotelCarpetPage() {
  const hotelProducts = products.filter(p => p.category === "wall-to-wall" || p.id.includes("luxury"));

  return (
    <div className="bg-white">
      {/* Hospitality Hero */}
      <section className="bg-primary-light py-24 border-b border-white/5 overflow-hidden">
        <div className="container-fox">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5">
              <span className="text-accent font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Elevating Guest Experience</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase leading-tight">
                Premium Hotel & Hospitality Carpet
              </h1>
              <p className="text-xl text-gray-300 mb-12 opacity-90 leading-relaxed">
                From luxury guest suites to high-traffic corridors and grand banquet halls. We provide fire-rated, bespoke flooring solutions trusted by 5-star hotel chains globally.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/contact" className="btn-fox-orange">Request Design Proposal</Link>
                <Link href="/projects" className="btn-fox-outline">View Hotel Projects</Link>
              </div>
            </div>
            <div className="lg:w-2/5 relative">
              <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full"></div>
              <ProductImage src="/images/case-hilton.jpg" alt="Hotel luxury scene" className="relative rounded-2xl shadow-2xl z-10 border border-white/10" />
            </div>
          </div>
        </div>
      </section>

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
        </div>
      </section>

      {/* Custom Design Process */}
      <section className="section-padding">
        <div className="container-fox">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <ProductImage src="/images/blog-hotel-carpet.jpg" alt="Custom design process" className="rounded-2xl shadow-2xl" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-10 uppercase leading-tight">Bespoke Pattern Development</h2>
              <div className="space-y-10">
                {[
                  { step: "01", title: "Reference Matching", desc: "Send us your project renderings or Pantone colors. Our design team creates a 3D visualization within 48 hours." },
                  { step: "02", title: "Strike-off Sampling", desc: "We produce a physical 'strike-off' sample for color and texture verification before bulk manufacturing." },
                  { step: "03", title: "Global Compliance", desc: "Every custom order is tested for ASTM E648 fire ratings and certified for hospitality use." }
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
              <Link key={product.id} href={`/products/${product.id}`} className="group bg-primary-light border border-white/5 p-4 rounded-xl">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
                  <ProductImage src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2 uppercase group-hover:text-accent transition-colors">{product.name}</h3>
                <div className="flex justify-between items-center text-[10px] font-bold text-accent uppercase tracking-widest">
                  <span>Axminster Grade</span>
                  <span>Fire Rated</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-accent">
        <div className="container-fox text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 uppercase tracking-widest">Start Your Hotel Transformation</h2>
          <p className="text-white/80 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Partner with a factory that understands the complexities of international hospitality procurement.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="bg-white text-accent font-bold px-12 py-5 rounded-md hover:bg-gray-100 transition-all uppercase tracking-widest shadow-xl">
              Get A Professional Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
