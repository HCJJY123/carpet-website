import type { Metadata } from "next";
import Link from "next/link";
import { productCategories as categories } from "@/lib/data";
import ProductImage from "@/components/ProductImage";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Commercial Carpet Products | Carpet Tiles, Broadloom & Public Area Carpet | VISHOME",
  description: "Explore VISHOME commercial carpet products including modular carpet tiles, wall-to-wall hotel broadloom, and heavy-duty public area carpet systems for global B2B projects.",
  alternates: { canonical: "/products" },
};
export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Our Products"
        eyebrow="Commercial Carpet Systems"
        description="Explore modular carpet tiles, wall-to-wall broadloom, and heavy-duty public area carpet systems for global B2B projects."
        image="/images/carpet-tile-premium.jpg"
        imageAlt="Commercial carpet tiles product background"
        objectPosition="center 58%"
      />
      <section className="section-padding">
        <div className="container-fox">
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/products/${cat.id}`} className="group relative block bg-surface rounded-xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden"><ProductImage src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
                <div className="p-8"><h2 className="text-2xl font-bold uppercase">{cat.name}</h2></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
