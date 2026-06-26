import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import ProductImage from "@/components/ProductImage";

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Blog Header - Foxflor Style */}
      <section className="bg-primary-light py-20">
        <div className="container-fox text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-widest">B2B Sourcing Insights</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg opacity-90">
            Professional guides on carpet specifications, fire ratings, logistics, and procurement strategies for global projects.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-fox">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <ProductImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-border rounded-full"></span>
                    <span>{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted line-clamp-3 leading-relaxed mb-6">
                    {post.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Read Article</span>
                    <span className="text-accent group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
