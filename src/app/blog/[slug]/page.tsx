import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { brandInfo } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";
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
    description: post.seoDescription,
    alternates: { canonical: `https://www.vishomecarpet.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.seoDescription,
      url: absoluteUrl(`/blog/${post.slug}`),
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: absoluteUrl(post.image), alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    image: absoluteUrl(post.image),
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author || brandInfo.name,
      url: brandInfo.url,
    },
    publisher: {
      "@type": "Organization",
      name: brandInfo.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.svg"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    articleSection: post.category,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(`/blog/${post.slug}`) },
    ],
  };

  return (
    <article className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
      <header className="bg-[#102A43] py-20 text-center">
        <div className="container-fox">
          <Link href="/blog" className="text-accent font-bold text-xs uppercase mb-6 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-3xl md:text-5xl text-white font-black uppercase tracking-wider leading-tight">
            {post.title}
          </h1>
          <p className="article-summary text-gray-300 mt-6 max-w-3xl mx-auto text-base leading-relaxed italic">
            {post.subtitle}
          </p>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto px-4 -mt-16 pb-24">
        <figure className="mb-8">
          <div className="aspect-[16/9] rounded-xl overflow-hidden bg-white shadow-2xl border-8 border-white">
            <ProductImage src={post.image} alt={post.imageAlt || post.title} className="w-full h-full" fit="cover" />
          </div>
        </figure>

        <div className="mt-12 space-y-16">
          {post.content.map((section, idx) => (
            <section key={idx} className="article-section border-b border-border pb-12 last:border-0">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 uppercase tracking-tight">{section.title}</h2>
              <div className="space-y-6">
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p 
                    key={pIdx} 
                    className="text-muted text-lg leading-relaxed font-medium"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
              {section.image ? (
                <figure className="mt-10">
                  <div className="rounded-xl overflow-hidden border border-border bg-white shadow-md">
                    <ProductImage src={section.image} alt={section.imageAlt || section.title} className="w-full aspect-[16/10]" fit="contain" />
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

        <section className="mt-16 bg-surface border border-border rounded-2xl p-8 md:p-12 text-center">
          <span className="text-accent font-black tracking-[0.4em] text-[10px] uppercase mb-4 block italic">Ready to Upgrade Your Flooring?</span>
          <h3 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-tight mb-8">
            Expert Solution for Your Next Project
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="bg-primary text-white font-black px-12 py-5 uppercase tracking-[0.2em] text-[10px] hover:bg-primary-hover transition-all">
              Request Technical Quote
            </Link>
            <Link href="/projects" className="border-2 border-primary text-primary font-black px-12 py-5 uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-all">
              View Case Studies
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
