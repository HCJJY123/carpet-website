import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import ProductImage from "@/components/ProductImage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.seoTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen">
      <header className="bg-[#102A43] py-20 text-center">
        <div className="container-fox">
          <Link href="/blog" className="text-accent font-bold text-xs uppercase mb-6 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-3xl md:text-5xl text-white font-black uppercase tracking-wider leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-base leading-relaxed">
            {post.subtitle}
          </p>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto px-4 -mt-16 pb-24">
        {post.h1Image ? (
          <figure className="mb-8">
            <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-2xl border-8 border-white">
              <ProductImage src={post.h1Image} alt={post.h1ImageAlt || post.title} className="w-full h-full object-cover" />
            </div>
            {post.h1ImageCaption ? (
              <figcaption className="text-xs text-muted mt-3 uppercase tracking-wider font-semibold">
                {post.h1ImageCaption}
              </figcaption>
            ) : null}
          </figure>
        ) : null}

        <div className="bg-surface border border-border rounded-xl p-6 md:p-8 mt-8">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary/60 mb-2">Pain Point Addressed</p>
          <p className="text-muted leading-relaxed">{post.painPoint}</p>
        </div>

        <div className="mt-10 space-y-12">
          {post.sections.map((section) => (
            <section key={section.title} className="border-b border-border pb-10">
              <h2 className="text-2xl font-bold text-primary mb-5 uppercase tracking-tight">{section.title}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.title}-${index}`} className="text-muted text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.image ? (
                <figure className="mt-8">
                  <div className="rounded-xl overflow-hidden border border-border shadow-md">
                    <ProductImage src={section.image} alt={section.imageAlt || section.title} className="w-full aspect-[16/10]" />
                  </div>
                  {section.imageCaption ? (
                    <figcaption className="text-xs text-muted mt-3 uppercase tracking-wider font-semibold">
                      {section.imageCaption}
                    </figcaption>
                  ) : null}
                </figure>
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-12 bg-primary rounded-xl p-8 md:p-10">
          <h3 className="text-xl font-black text-white uppercase tracking-wider mb-6">Related Next Steps</h3>
          <div className="flex flex-wrap gap-4">
            {post.suggestedLinks.map((item) => (
              <Link key={item.href} href={item.href} className="btn-fox-orange !text-xs !tracking-[0.2em] !px-8 !py-4">
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
