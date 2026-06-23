import { products, productCategories } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props) {
  const category = productCategories.find((c) => c.id === params.id);
  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.name} | Commercial Flooring | Vishome`,
    description: category.description,
  };
}

export default function CategoryProductsPage({ params }: Props) {
  const category = productCategories.find((c) => c.id === params.id);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.category === params.id);

  return (
    <div className="bg-white min-h-screen">
      {/* Category Header */}
      <section className="bg-primary-light py-20">
        <div className="container-fox text-center">
          <Link href="/products" className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 inline-block hover:opacity-80 transition-all">
            ← Back to All Products
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-widest leading-tight">
            {category.name}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg opacity-90">
            {category.description}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding">
        <div className="container-fox">
          {categoryProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {categoryProducts.map((product) => (
                <div key={product.id} className="group bg-white border border-border overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 flex flex-col">
                  <div className="aspect-square overflow-hidden relative">
                    <ProductImage
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors"></div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-primary mb-3 uppercase tracking-wide group-hover:text-accent transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted mb-6 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="mt-auto pt-6 border-t border-border flex justify-between items-center">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Material</p>
                        <p className="text-xs font-bold text-primary">{product.spec.material}</p>
                      </div>
                      <Link href="/contact" className="text-xs font-bold text-primary uppercase tracking-widest bg-surface px-4 py-2 rounded hover:bg-accent hover:text-white transition-all">
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted italic">Coming soon: More collections are being added to our {category.name} portfolio.</p>
              <Link href="/contact" className="btn-fox-orange mt-8 inline-block">Request Full Catalogue</Link>
            </div>
          )}
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="section-padding bg-surface border-t border-border">
        <div className="container-fox text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 uppercase tracking-widest">Global Logistics & DDP Delivery</h2>
          <p className="text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            We support door-to-door delivery with full customs support for commercial projects in the US, Europe, and Middle East.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="btn-fox-orange">Get Project Shipping Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
