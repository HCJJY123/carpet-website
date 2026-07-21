import type { Metadata } from "next";
import { products, productCategories } from "@/lib/data";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";

export const metadata: Metadata = {
  title: "Wall-to-Wall Hotel Broadloom Carpet | Hospitality Carpet Supplier | VISHOME",
  description: "Wall-to-wall broadloom carpet systems for hotel guestrooms, corridors, lobbies, and hospitality projects with custom pattern and export support.",
  alternates: { canonical: "/products/wall-to-wall" },
};

export default function CategoryPage() {
  const categoryId = "wall-to-wall";
  const currentCategory = productCategories.find((c) => c.id === categoryId);
  const categoryProducts = products.filter((p) => p.category === categoryId);

  return (
    <div className="bg-white min-h-screen font-sans">
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
                {p.fobPrice && (
                  <div className="mb-6 grid grid-cols-2 gap-4 text-xs">
                    <div><span className="block text-[9px] font-black uppercase tracking-widest text-primary/40">FOB Price</span><span className="font-bold text-primary">{p.fobPrice.display}</span></div>
                    <div><span className="block text-[9px] font-black uppercase tracking-widest text-primary/40">MOQ</span><span className="font-bold text-primary">{p.moq}</span></div>
                    {p.id === "custom-floral-printed-hotel-carpet" && <div className="col-span-2"><span className="block text-[9px] font-black uppercase tracking-widest text-primary/40">Availability</span><span className="font-bold text-primary">Made to Order</span></div>}
                  </div>
                )}
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
