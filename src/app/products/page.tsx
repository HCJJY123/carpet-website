import Link from "next/link";
import { productCategories as categories } from "@/lib/data";

export default function ProductsPage() {
  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Products</h1>
          <p className="text-muted max-w-2xl">
            Explore our complete range of commercial carpet tiles and broadloom carpets.
            Every product is engineered for durability, aesthetics, and ease of installation.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products/${cat.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-gray-50 border border-border hover:border-accent/50 transition-all"
              >
                <div className="p-8 md:p-10">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {cat.subtitle}
                  </span>
                  <h2 className="text-2xl font-bold text-primary mt-1 mb-3 group-hover:text-accent transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Browse Products
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
