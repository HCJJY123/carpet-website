import type { Metadata } from "next";
import Link from "next/link";
import { productCategories as categories, products } from "@/lib/data";
import { collectionItemListJsonLd, productPath, safeJsonLd } from "@/lib/seo";
import ProductImage from "@/components/ProductImage";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Commercial Carpet Products | Carpet Tiles, Broadloom & Public Area Carpet | VISHOME",
  description: "Explore VISHOME commercial carpet products including modular carpet tiles, wall-to-wall hotel broadloom, and heavy-duty public area carpet systems for global B2B projects.",
  alternates: { canonical: "/products" },
};
export default function ProductsPage() {
  const jsonLd = collectionItemListJsonLd({
    name: "VISHOME Commercial Carpet Products",
    description: "Commercial carpet tiles, hotel broadloom, and public-area carpet systems for global B2B flooring projects.",
    url: "/products",
    items: categories.map((category) => ({
      name: category.name,
      description: category.description,
      url: `/products/${category.id}`,
    })),
  });

  return (
    <div className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <PageHero
        title="Our Products"
        eyebrow="Commercial Carpet Systems"
        description="Explore modular carpet tiles, wall-to-wall broadloom, and heavy-duty public area carpet systems for global B2B projects."
        image="/images/carpet-tile-premium.webp"
        imageAlt="Commercial carpet tiles product background"
        objectPosition="center 58%"
      />
      <section className="section-padding">
        <div className="container-fox">
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/products/${cat.id}`} className="group relative block bg-surface rounded-xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden"><ProductImage src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" /></div>
                <div className="p-8"><h2 className="text-2xl font-bold uppercase">{cat.name}</h2></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding border-t border-border bg-surface">
        <div className="container-fox">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-accent">Complete Product Directory</p>
            <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">Browse Every Commercial Carpet Product</h2>
          </div>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={productPath(product.id)}
                className="bg-white p-5 text-sm font-bold leading-snug text-primary transition-colors hover:bg-primary hover:text-white"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
