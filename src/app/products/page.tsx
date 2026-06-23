import Link from "next/link";
import { productCategories as categories } from "@/lib/data";
import ProductImage from "@/components/ProductImage";

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-primary-light py-20">
        <div className="container-fox text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-widest">Our Products</h1>
          <p className="text-gray-400 max-w-2xl mx-auto opacity-90">
            Professional flooring solutions for global commercial and hospitality projects.
          </p>
        </div>
      </section>

      {/* Category Grid - Foxflor Style */}
      <section className="section-padding">
        <div className="container-fox">
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <Link
                key={cat.id}
                href={`/products/${cat.id}`}
                className="group relative block bg-surface rounded-xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <ProductImage
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-2 block">Category 0{index + 1}</span>
                    <h2 className="text-2xl font-bold uppercase mb-4">{cat.name}</h2>
                    <p className="text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                      {cat.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
                      Browse More <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing CTA */}
      <section className="py-20 bg-primary border-t border-white/5">
        <div className="container-fox text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 uppercase tracking-widest">Looking for Custom Pattern Design?</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Our Tianjin facility provides full bespoke services including Pantone color matching and strike-off sampling.
          </p>
          <Link href="/contact" className="btn-fox-orange inline-block">
            Consult With Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
