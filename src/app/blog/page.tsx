import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import ProductImage from "@/components/ProductImage";

export const metadata: Metadata = {
  title: "Commercial Carpet B2B Blog | Sourcing & Design Guides | VISHOME",
  description: "Industry insights on hotel broadloom, commercial carpet tiles, project maintenance, and global flooring logistics.",
};

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#102A43] py-24 text-center">
        <div className="container-fox">
          <span className="text-accent font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">Knowledge Center</span>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest leading-tight">Industry Insights</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {blogPosts.map((post) => (
              <div key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-sm mb-6 shadow-xl relative aspect-[16/10]">
                  <ProductImage src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute top-4 left-4 bg-accent text-white text-[10px] font-black px-4 py-1 uppercase tracking-widest">
                    {post.category}
                  </div>
                </Link>
                
                <div className="space-y-4">
                  <div className="text-[10px] font-black text-primary/30 uppercase tracking-widest">{post.date}</div>
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="font-bold text-primary text-xl uppercase leading-tight hover:text-accent transition-colors min-h-[3.5rem] line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-muted line-clamp-3 leading-relaxed mb-6 italic">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-accent transition-all flex items-center gap-2"
                  >
                    Read Article <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
