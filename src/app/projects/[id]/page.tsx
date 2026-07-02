import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/lib/data";
import ProductImage from "@/components/ProductImage";

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
    title: `${project.title} | Project Case Study | VISHOME`,
    description: project.description,
    alternates: { canonical: `/projects/${project.id}` }
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = caseStudies.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <nav className="bg-surface py-4 border-b border-border">
        <div className="container-fox">
          <Link href="/projects" className="text-[10px] font-black text-primary/50 uppercase hover:text-primary">
            ← Back to Projects
          </Link>
        </div>
      </nav>

      <section className="py-16 md:py-20">
        <div className="container-fox max-w-6xl">
          <h1 className="text-3xl md:text-5xl font-black text-primary mb-4 uppercase leading-tight">
            {project.title}
          </h1>
          {project.subtitle ? (
            <p className="text-muted text-lg leading-relaxed max-w-4xl mb-10">{project.subtitle}</p>
          ) : null}

          <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-2xl border border-border mb-10">
            <ProductImage src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="grid lg:grid-cols-3 gap-10 mb-14">
            {project.projectSpecs.map((item) => (
              <div key={item.label} className="border border-border rounded-lg p-5 bg-surface">
                <p className="text-[10px] font-black text-primary/60 uppercase tracking-[0.2em] mb-2">{item.label}</p>
                <p className="text-sm text-primary font-semibold leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-12 mb-14">
            {project.sections.map((section) => (
              <section key={section.title} className="border-b border-border pb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5 uppercase tracking-tight">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, index) => (
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

          <div className="grid lg:grid-cols-2 gap-10 mb-14">
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
          </div>

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

          <section className="mb-14 border border-border rounded-xl p-8 bg-surface">
            <h3 className="text-xl font-black text-primary uppercase tracking-wider mb-6">Results & Feedback</h3>
            <ul className="space-y-3">
              {project.results.map((item) => (
                <li key={item} className="text-muted leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-primary rounded-xl p-10 text-center text-white">
            <h3 className="text-3xl font-black uppercase tracking-wider mb-4">Need a Similar Rollout?</h3>
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
