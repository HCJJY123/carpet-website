import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { brandInfo, caseStudies, products } from "@/lib/data";
import { absoluteUrl, productPath, safeJsonLd } from "@/lib/seo";
import { relatedCategoryIds, relatedProductIdsForCase } from "@/lib/content-relations";
import ProductImage from "@/components/ProductImage";
import RelatedCategoryLinks from "@/components/RelatedCategoryLinks";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = caseStudies.find((item) => item.id === id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.metadataTitle ?? `${project.title} | Commercial Carpet Guide | VISHOME`,
    description: project.description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: project.metadataTitle ?? `${project.title} | VISHOME Commercial Carpet Guide`,
      description: project.description,
      url: absoluteUrl(`/projects/${project.id}`),
      type: "article",
      images: [{ url: absoluteUrl(project.image), alt: project.imageAlt ?? project.title }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = caseStudies.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  const recommendedProductIds = relatedProductIdsForCase(project.id, project.category, project.recommendedProductIds);
  const recommendedProducts = recommendedProductIds
    .flatMap((productId) => {
        const product = products.find((item) => item.id === productId);
        return product ? [product] : [];
      });
  const relatedCategories = relatedCategoryIds(recommendedProducts, project.category);

  const caseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.h1 ?? project.title,
    description: project.description,
    image: absoluteUrl(project.image),
    author: {
      "@type": "Organization",
      name: brandInfo.name,
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
    mainEntityOfPage: absoluteUrl(`/projects/${project.id}`),
    articleSection: project.tag ?? "Commercial Carpet Specification Guide",
    about: project.category,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Projects", item: absoluteUrl("/projects") },
      { "@type": "ListItem", position: 3, name: project.title, item: absoluteUrl(`/projects/${project.id}`) },
    ],
  };

  const faqJsonLd = project.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: project.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(caseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
        />
      ) : null}
      <nav className="bg-surface py-4 border-b border-border">
        <div className="container-fox">
          <Link href="/projects" className="text-[10px] font-black text-primary/50 uppercase hover:text-primary">
            ← Back to Projects
          </Link>
        </div>
      </nav>

      <section className="py-16 md:py-20">
        <div className="container-fox max-w-6xl">
          {project.tag ? (
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-accent">{project.tag}</p>
          ) : null}
          <h1 className="text-3xl md:text-5xl font-black text-primary mb-4 uppercase leading-tight">
            {project.h1 ?? project.title}
          </h1>
          {project.subtitle ? (
            <p className="text-muted text-lg leading-relaxed max-w-4xl mb-10">{project.subtitle}</p>
          ) : null}
          <div className="mb-8 border border-border bg-surface p-5">
            <p className="text-sm leading-relaxed text-muted">
              This guide explains specification logic, design direction, and procurement considerations for similar commercial flooring projects. Confirm final construction, testing, and installation details against your own project requirements.
            </p>
          </div>

          <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-2xl border border-border mb-10">
            <ProductImage src={project.image} alt={project.imageAlt ?? project.title} className="w-full h-full object-cover" priority sizes="100vw" />
          </div>

          {project.specificationTitle ? (
            <section className="mb-14">
              <h2 className="mb-7 text-2xl font-black uppercase tracking-tight text-primary md:text-3xl">
                {project.specificationTitle}
              </h2>
              <div className="overflow-x-auto border border-border">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-5 py-4 font-black uppercase">Parameter</th>
                      <th className="px-5 py-4 font-black uppercase">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.projectSpecs.map((item) => (
                      <tr key={item.label} className="border-t border-border">
                        <th className="w-1/3 bg-surface px-5 py-4 font-black text-primary">{item.label}</th>
                        <td className="px-5 py-4 font-semibold leading-relaxed text-primary">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10 mb-14">
              {project.projectSpecs.map((item) => (
                <div key={item.label} className="border border-border rounded-lg p-5 bg-surface">
                  <p className="text-[10px] font-black text-primary/60 uppercase tracking-[0.2em] mb-2">{item.label}</p>
                  <p className="text-sm text-primary font-semibold leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-12 mb-14">
            {project.sections.map((section) => (
              <section key={section.title} className="border-b border-border pb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5 uppercase tracking-tight">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.blocks
                    ? section.blocks.map((block, index) =>
                        block.type === "paragraph" ? (
                          <p key={`${section.title}-paragraph-${index}`} className="text-lg text-muted leading-relaxed">
                            {block.text}
                          </p>
                        ) : (
                          <ul key={`${section.title}-list-${index}`} className="space-y-3 pl-6 text-lg leading-relaxed text-muted">
                            {block.items.map((item) => (
                              <li key={item.label} className="list-disc">
                                <strong className="text-primary">{item.label}</strong> — {item.text}
                              </li>
                            ))}
                          </ul>
                        )
                      )
                    : section.paragraphs.map((paragraph, index) => (
                        <p key={`${section.title}-${index}`} className="text-lg text-muted leading-relaxed">
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

          {project.technicalDetails.length || project.designHighlights.length ? (
            <div className="grid lg:grid-cols-2 gap-10 mb-14">
              {project.technicalDetails.length ? (
                <section className="border border-border rounded-xl p-8">
                  <h3 className="text-xl font-black text-primary uppercase tracking-wider mb-6">Technical Details</h3>
                  <ul className="space-y-3">
                    {project.technicalDetails.map((item) => (
                      <li key={item} className="text-muted leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {project.designHighlights.length ? (
                <section className="border border-border rounded-xl p-8">
                  <h3 className="text-xl font-black text-primary uppercase tracking-wider mb-6">Design Highlights</h3>
                  <ul className="space-y-3">
                    {project.designHighlights.map((item) => (
                      <li key={item} className="text-muted leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>
          ) : null}

          {project.costAnalysis?.length ? (
            <section className="mb-14 border border-border rounded-xl overflow-hidden">
              <h3 className="text-xl font-black text-primary uppercase tracking-wider p-6 bg-surface border-b border-border">
                Cost Analysis Snapshot
              </h3>
              <div className="divide-y divide-border">
                {project.costAnalysis.map((item) => (
                  <div key={item.item} className="flex items-start justify-between gap-6 p-5">
                    <p className="text-muted">{item.item}</p>
                    <p className="text-primary font-black">{item.amount}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {project.results.length ? (
            <section className="mb-14 border border-border rounded-xl p-8 bg-surface">
              <h3 className="text-xl font-black text-primary uppercase tracking-wider mb-6">Planning Outcomes</h3>
              <ul className="space-y-3">
                {project.results.map((item) => (
                  <li key={item} className="text-muted leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.faqs?.length ? (
            <section className="mb-14">
              <h2 className="mb-8 text-2xl font-black uppercase tracking-tight text-primary md:text-3xl">
                FAQ
              </h2>
              <div className="space-y-4">
                {project.faqs.map((item) => (
                  <details key={item.question} className="border border-border bg-white p-6">
                    <summary className="cursor-pointer font-black text-primary">{item.question}</summary>
                    <p className="mt-4 text-base leading-relaxed text-muted">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          {recommendedProducts.length ? (
            <section className="mb-14">
              <h3 className="mb-6 text-xl font-black uppercase tracking-wider text-primary">Products for Similar Projects</h3>
              <div className="grid gap-6 sm:grid-cols-3">
                {recommendedProducts.map((item) => (
                  <Link key={item.id} href={productPath(item.id)} className="group border border-border bg-white p-4 transition-all hover:border-accent hover:shadow-lg">
                    <div className="mb-4 aspect-square overflow-hidden bg-surface">
                      <ProductImage src={item.image} alt={item.imageAlt || item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <p className="text-sm font-black uppercase leading-snug text-primary group-hover:text-accent">{item.name}</p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <RelatedCategoryLinks categoryIds={relatedCategories} className="mb-14" />

          <section className="bg-primary rounded-xl p-10 text-center text-white">
            <h3 className="text-3xl font-black uppercase tracking-wider mb-4">Need a Similar Project Solution?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Share your floor plan and timeline. We can build a solution package covering design, technical specification, and phased delivery strategy.
            </p>
            <Link href="/contact" className="btn-fox-orange !px-10 !py-5">
              Request Similar Solution
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
}
