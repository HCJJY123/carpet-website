import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import ProductImage from "@/components/ProductImage";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.seoTitle} | Vishome`,
    description: post.description,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      type: "article",
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen">
      {/* Article Header */}
      <header className="bg-primary-light py-20">
        <div className="container-fox">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/blog" className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-6 inline-block hover:opacity-80 transition-all">
              ← Back to Insights
            </Link>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-gray-400 text-sm uppercase tracking-widest font-semibold">
              <span>{post.date}</span>
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
              <span>{post.category}</span>
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="container-fox -mt-12 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <ProductImage
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container-fox pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-slate max-w-none">
            {/* Split content by double newlines for basic paragraph handling */}
            {post.content.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed mb-8 text-lg md:text-xl font-light">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Resources / CTAs */}
          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="text-2xl font-bold text-primary mb-8 uppercase tracking-wide">
              Procurement Resources
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {post.suggestedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between p-6 bg-surface border border-border rounded-lg hover:border-accent hover:shadow-md transition-all group"
                >
                  <span className="font-bold text-primary uppercase text-sm tracking-widest">{link.label}</span>
                  <span className="text-accent group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              ))}
            </div>

            {/* Direct Conversion Card */}
            <div className="bg-primary p-10 rounded-2xl text-center shadow-xl">
              <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">
                Need Project Assistance?
              </h4>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Get free technical support and sample matching for your commercial flooring project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-fox-orange">
                  Request Free Samples
                </Link>
                <Link href="/contact?subject=Quotation" className="btn-fox-outline">
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
