import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { brandInfo, products } from "@/lib/data";
import { absoluteUrl, productPath, safeJsonLd } from "@/lib/seo";
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
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.dateModified ?? post.date,
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

  const relatedProducts = post.relatedProductIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));
  const relatedProductPaths = new Set(relatedProducts.map((product) => productPath(product.id)));
  const nextStepLinks = post.suggestedLinks.filter((item) => !relatedProductPaths.has(item.href));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.image),
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
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
    mentions: relatedProducts.map((product) => ({
      "@type": "Product",
      name: product.name,
      url: absoluteUrl(productPath(product.id)),
      image: absoluteUrl(product.image),
    })),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article h1", ".article-summary", ".article-section h2"],
    },
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
          <p className="article-summary text-gray-300 mt-6 max-w-3xl mx-auto text-base leading-relaxed">
            {post.subtitle}
          </p>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto px-4 -mt-16 pb-24">
        {post.h1Image ? (
          <figure className="mb-8">
            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-white shadow-2xl border-8 border-white">
              <ProductImage src={post.h1Image} alt={post.h1ImageAlt || post.title} className="w-full h-full" fit="contain" priority sizes="(max-width: 1000px) 100vw, 1000px" />
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
            <section key={section.title} className="article-section border-b border-border pb-10">
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

        <section className="mt-12" aria-labelledby="related-products-heading">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-accent">Continue Your Specification</p>
          <h2 id="related-products-heading" className="mb-6 text-2xl font-black uppercase tracking-tight text-primary md:text-3xl">
            Related Products
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                href={productPath(product.id)}
                className="group overflow-hidden rounded-lg border border-border bg-white transition-all hover:border-accent hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden bg-surface">
                  <ProductImage
                    src={product.image}
                    alt={product.imageAlt || product.name}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                    fit="cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-black uppercase leading-snug text-primary transition-colors group-hover:text-accent">
                    {product.name}
                  </h3>
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-accent">View Product →</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-primary rounded-xl p-8 md:p-10">
          <h3 className="text-xl font-black text-white uppercase tracking-wider mb-6">Related Next Steps</h3>
          <div className="flex flex-wrap gap-4">
            {nextStepLinks.map((item) => (
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
