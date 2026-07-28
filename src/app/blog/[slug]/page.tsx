import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, type BlogContentBlock } from "@/lib/blog-data";
import { brandInfo, products } from "@/lib/data";
import { absoluteUrl, productPath, safeJsonLd } from "@/lib/seo";
import { relatedCategoryIds } from "@/lib/content-relations";
import ProductImage from "@/components/ProductImage";
import RelatedCategoryLinks from "@/components/RelatedCategoryLinks";
import ContentTrustPanel from "@/components/ContentTrustPanel";

interface Props {
  params: Promise<{ slug: string }>;
}

function RichBlogBlock({ block, index }: { block: BlogContentBlock; index: number }) {
  if (block.type === "paragraph") {
    return <p className="text-lg leading-relaxed text-muted">{block.text}</p>;
  }

  if (block.type === "subheading") {
    return <h3 className="pt-3 text-xl font-black leading-tight text-primary md:text-2xl">{block.title}</h3>;
  }

  if (block.type === "table") {
    return (
      <div className="my-7">
        <div className="overflow-x-auto rounded-lg border border-border bg-white shadow-sm">
          <table className="min-w-[680px] w-full border-collapse text-left">
            <thead className="bg-primary text-white">
              <tr>
                {block.headers.map((header) => (
                  <th key={header} className="px-5 py-4 text-xs font-black uppercase tracking-[0.12em]">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {block.rows.map((row, rowIndex) => (
                <tr key={`${index}-${rowIndex}`} className="odd:bg-surface/55">
                  {row.map((cell, cellIndex) => (
                    <td key={`${index}-${rowIndex}-${cellIndex}`} className="px-5 py-4 text-sm leading-relaxed text-muted">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {block.note ? <p className="mt-3 text-xs leading-relaxed text-muted">{block.note}</p> : null}
      </div>
    );
  }

  if (block.type === "list") {
    const items = block.items.map((item, itemIndex) => (
      <li key={`${index}-${itemIndex}`} className="pl-2 text-base leading-relaxed text-muted md:text-lg">
        {item.title ? <strong className="font-black text-primary">{item.title} </strong> : null}
        {item.text}
      </li>
    ));

    return block.ordered ? (
      <ol className="ml-6 space-y-4 marker:font-black marker:text-accent list-decimal">{items}</ol>
    ) : (
      <ul className="ml-6 space-y-4 marker:text-accent list-disc">{items}</ul>
    );
  }

  if (block.type === "callout") {
    return (
      <aside className="my-7 border-l-4 border-accent bg-surface px-6 py-5">
        {block.label ? <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent">{block.label}</p> : null}
        <p className="text-base font-semibold leading-relaxed text-primary md:text-lg">{block.text}</p>
      </aside>
    );
  }

  return (
    <figure className="my-8">
      <div className="aspect-[16/9] overflow-hidden rounded-xl border border-border bg-white shadow-md">
        <ProductImage
          src={block.src}
          alt={block.alt}
          className="h-full w-full"
          fit="cover"
          sizes="(max-width: 1000px) 100vw, 1000px"
        />
      </div>
      {block.caption ? (
        <figcaption className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted">{block.caption}</figcaption>
      ) : null}
    </figure>
  );
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
  const relatedCategories = relatedCategoryIds(relatedProducts);
  const relatedProductPaths = new Set(relatedProducts.map((product) => productPath(product.id)));
  const nextStepLinks = post.suggestedLinks.filter((item) => !relatedProductPaths.has(item.href));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(`/blog/${post.slug}`)}#article`,
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.image),
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      "@id": `${brandInfo.url}/#technical-content-team`,
      name: post.author || brandInfo.name,
      url: brandInfo.url,
      parentOrganization: { "@id": `${brandInfo.url}/#organization` },
    },
    reviewedBy: {
      "@type": "Organization",
      "@id": `${brandInfo.url}/#commercial-carpet-team`,
      name: "VISHOME Commercial Carpet Team",
      parentOrganization: { "@id": `${brandInfo.url}/#organization` },
    },
    publisher: {
      "@type": "Organization",
      "@id": `${brandInfo.url}/#organization`,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.svg"),
      },
    },
    isPartOf: { "@id": `${brandInfo.url}/#website` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    articleSection: post.category,
    mentions: relatedProducts.map((product) => ({
      "@type": "Thing",
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
              <ProductImage src={post.h1Image} alt={post.h1ImageAlt || post.title} className="w-full h-full" fit={post.h1ImageFit || "contain"} priority sizes="(max-width: 1000px) 100vw, 1000px" />
            </div>
            {post.h1ImageCaption ? (
              <figcaption className="text-xs text-muted mt-3 uppercase tracking-wider font-semibold">
                {post.h1ImageCaption}
              </figcaption>
            ) : null}
          </figure>
        ) : null}

        <ContentTrustPanel
          type="blog"
          author={post.author}
          published={post.date}
          modified={post.dateModified}
        />

        <div className="bg-surface border border-border rounded-xl p-6 md:p-8 mt-8">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary/60 mb-2">Pain Point Addressed</p>
          <p className="text-muted leading-relaxed">{post.painPoint}</p>
        </div>

        <div className="mt-10 space-y-12">
          {post.sections.map((section) => (
            <section key={section.title} className="article-section border-b border-border pb-10">
              <h2 className="text-2xl font-bold text-primary mb-5 uppercase tracking-tight">{section.title}</h2>
              {section.blocks ? (
                <div className="space-y-5">
                  {section.blocks.map((block, index) => (
                    <RichBlogBlock key={`${section.title}-${block.type}-${index}`} block={block} index={index} />
                  ))}
                </div>
              ) : (
                <>
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
                </>
              )}
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

        <RelatedCategoryLinks categoryIds={relatedCategories} className="mt-12" />

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
