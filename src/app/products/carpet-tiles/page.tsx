import Link from "next/link";
import { products } from "@/lib/data";
import ProductImage from "@/components/ProductImage";

export default function CarpetTilesPage() {
  const categoryProducts = products.filter((p) => p.category === "carpet-tiles");
  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Link href="/products" className="text-sm text-accent hover:text-accent-light mb-4 inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Products
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Carpet Tiles</h1>
          <p className="text-muted max-w-2xl">
            Modular carpet tiles for flexible, durable commercial flooring. Easy to install, replace, and customize.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/carpet-tiles/${product.id}`}
                className="group bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all">
                <ProductImage src={product.image} alt={product.name} className="h-48" />
                <div className="p-5">
                  <h3 className="font-semibold text-primary group-hover:text-accent transition-colors mb-2">{product.name}</h3>
                  <p className="text-sm text-muted line-clamp-2 mb-3">{product.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-muted">
                    <span className="bg-white px-2 py-1 rounded border border-border">{product.spec.material}</span>
                    <span className="bg-white px-2 py-1 rounded border border-border">{product.spec.size}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
