import Link from "next/link";
import { productCategories } from "@/lib/data";
import { categoryPath } from "@/lib/seo";
import { categoryDisplayCopy, type ProductCategoryId } from "@/lib/content-relations";

export default function RelatedCategoryLinks({
  categoryIds,
  className = "",
}: {
  categoryIds: ProductCategoryId[];
  className?: string;
}) {
  const categories = Array.from(new Set(categoryIds)).flatMap((categoryId) => {
    const category = productCategories.find((item) => item.id === categoryId);
    return category ? [{ ...category, id: categoryId }] : [];
  });

  if (!categories.length) return null;

  return (
    <section className={className} aria-labelledby="related-categories-heading">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-accent">Browse the Full Range</p>
      <h2 id="related-categories-heading" className="mb-6 text-2xl font-black uppercase tracking-tight text-primary md:text-3xl">
        Related Product Categories
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={categoryPath(category.id)}
            className="group flex min-h-40 flex-col justify-between rounded-lg border border-border bg-surface p-6 transition-all hover:border-accent hover:bg-white hover:shadow-md"
          >
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-accent">Product Category</p>
              <h3 className="text-lg font-black uppercase leading-tight text-primary transition-colors group-hover:text-accent">
                {category.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{categoryDisplayCopy[category.id]}</p>
            </div>
            <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-primary group-hover:text-accent">
              View Category →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
