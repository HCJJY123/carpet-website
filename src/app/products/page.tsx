import Link from "next/link";
import { productCategories as categories } from "@/lib/data";
import ProductImage from "@/components/ProductImage";

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-primary-light py-20">
        <div className="container-fox text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-widest">Our Collections</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our professional range of high-performance carpet tiles and luxury hotel broadloom carpets.
          </p>
        </div>
      </section>

      {/* Category Selection - Foxflor Banner Style */}
      <section className="section-padding">
        <div className="container-fox">
          <div className="space-y-12">
            {categories.map((cat, index) => (
              <Link
                key={cat.id}
                href={`/products/${cat.slug}`}
                className={`group flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-surface rounded-xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500`}
              >
                <div className="lg:w-3/5 overflow-hidden">
                  <ProductImage
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover min-h-[350px] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="lg:w-2/5 p-10 md:p-16 flex flex-col justify-center">
                  <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Collection 0{index + 1}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 uppercase">{cat.name}</h2>
                  <p className="text-muted leading-relaxed mb-10">{cat.description}</p>
                  <div className="flex">
                    <span className="btn-fox-orange">
                      View Products <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Supply CTA */}
      <section className="py-24 bg-primary border-t border-white/5">
        <div className="container-fox flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">Looking for Custom Solutions?</h2>
            <p className="text-gray-400 text-lg">
              We provide tailored carpet designs for hotels, casinos, and corporate offices worldwide. Factory direct supply with rapid global delivery.
            </p>
          </div>
          <Link href="/contact" className="btn-fox-outline px-12 py-5 whitespace-nowrap">
            Send Project Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
