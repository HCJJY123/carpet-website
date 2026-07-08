import type { Metadata } from "next";
import { products, productCategories } from "@/lib/data";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { productItemListJsonLd, safeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Wall-to-Wall Hotel Broadloom Carpet | Hospitality Carpet Supplier | VISHOME",
  description: "Wall-to-wall broadloom carpet systems for hotel guestrooms, corridors, lobbies, and hospitality projects with custom pattern and export support.",
  alternates: { canonical: "/products/wall-to-wall" },
};

export default function CategoryPage() {
  const categoryId = "wall-to-wall";
  const currentCategory = productCategories.find((c) => c.id === categoryId);
  const categoryProducts = products.filter((p) => p.category === categoryId);
  const jsonLd = productItemListJsonLd({
    name: "Wall-to-Wall Hotel Broadloom Carpet",
    description: "Wall-to-wall broadloom carpet systems for hotel guestrooms, corridors, lobbies, and hospitality projects.",
    url: "/products/wall-to-wall",
    items: categoryProducts,
  });

  return (
    <div className="bg-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <section className="bg-[#102A43] py-24 text-center">
        <div className="container-fox">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest">{currentCategory?.name}</h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm font-bold uppercase tracking-widest">{currentCategory?.description}</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-fox">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categoryProducts.map((p) => (
              <Link key={p.id} href={`/products/${categoryId}/${p.id}`} className="group block bg-white border border-border p-8 hover:shadow-2xl transition-all duration-500 rounded-sm">
                <div className="aspect-square overflow-hidden mb-8 shadow-md border border-border">
                  <ProductImage src={p.image} alt={p.imageAlt || p.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                </div>
                <h3 className="font-bold text-xl text-primary uppercase mb-6 h-14 leading-tight group-hover:text-accent transition-colors">{p.name}</h3>
                <div className="mb-6 space-y-2 border-t border-border pt-5 text-[11px] uppercase">
                  <div className="flex justify-between gap-4">
                    <span className="text-muted">FOB Price</span>
                    <span className="text-right font-black text-primary">{p.fobPrice?.display}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted">MOQ</span>
                    <span className="text-right font-black text-primary">{p.moq}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted">Availability</span>
                    <span className="text-right font-black text-primary">In Stock / Made to Order</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[10px] font-black text-accent uppercase tracking-widest border-t border-border pt-6">
                  <span>Technical Details</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
