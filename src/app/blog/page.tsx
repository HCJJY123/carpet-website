import Link from "next/link";
import { blogPosts } from "@/lib/data";
import ProductImage from "@/components/ProductImage";

export default function BlogPage() {
  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Blog</h1>
          <p className="text-muted max-w-2xl">Industry insights, buying guides, and expert tips for commercial flooring projects.</p>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-surface rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all"
              >
                <ProductImage src={post.image} alt={post.title} className="h-44" />
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted mb-2">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.category}</span>
                  </div>
                  <h2 className="font-semibold text-primary group-hover:text-accent transition-colors mb-2">{post.title}</h2>
                  <p className="text-sm text-muted line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
