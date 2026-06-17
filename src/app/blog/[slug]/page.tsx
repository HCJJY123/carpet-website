import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import ProductImage from "@/components/ProductImage";
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Link href="/blog" className="text-sm text-accent hover:text-accent-light mb-4 inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-2 text-xs text-muted mt-4 mb-3">
            <span>{post.date}</span>
            <span>·</span>
            <span className="text-accent font-medium">{post.category}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary leading-tight">{post.title}</h1>
          <p className="text-muted mt-4">{post.excerpt}</p>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm max-w-none text-muted">
            <p>
              This is a placeholder article. In a production site, this would contain the full blog post content with
              sections, images, and expert insights. The structure below demonstrates how content would be organized.
            </p>
            <h2 className="text-xl font-bold text-primary mt-8 mb-4">Introduction</h2>
            <p>
              Every commercial flooring project comes with unique requirements and challenges. Whether you're
              outfitting a new hotel, renovating an office tower, or selecting materials for a healthcare facility,
              the right carpet choice can make a significant difference in aesthetics, performance, and long-term value.
            </p>
            <h2 className="text-xl font-bold text-primary mt-8 mb-4">Key Considerations</h2>
            <p>
              When selecting commercial carpet, several factors come into play: traffic levels, maintenance
              requirements, acoustic performance, indoor air quality, and of course, visual appeal. Understanding
              how these factors interact will help you make the best choice for your specific project.
            </p>
            <h2 className="text-xl font-bold text-primary mt-8 mb-4">Conclusion</h2>
            <p>
              The commercial flooring market continues to evolve with new materials, technologies, and design
              possibilities. Stay tuned for more in-depth articles covering specific topics related to carpet
              selection, installation, and maintenance.
            </p>
          </div>
        </div>
      </section>
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-surface border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-primary mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all">
                  <ProductImage src={rp.image} alt={rp.title} className="h-32" />
                  <div className="p-4">
                    <div className="text-xs text-muted mb-1">{rp.date}</div>
                    <h3 className="font-semibold text-sm text-primary group-hover:text-accent transition-colors">{rp.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
