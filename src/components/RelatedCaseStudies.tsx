import Link from "next/link";
import { caseStudies } from "@/lib/data";
import ProductImage from "./ProductImage";

interface RelatedCaseStudiesProps {
  category: string;
}

export default function RelatedCaseStudies({ category }: RelatedCaseStudiesProps) {
  // Filter cases by the same category
  const relatedCases = caseStudies.filter((cs) => cs.category === category);

  if (relatedCases.length === 0) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-fox">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-accent font-black tracking-[0.4em] text-[10px] uppercase mb-3 block italic">Proven Performance</span>
            <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tight leading-none">
              Real-World Project <br /><span className="text-accent">Applications</span>
            </h2>
          </div>
          <Link href="/projects" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 hover:text-primary transition-all border-b-2 border-primary/10 pb-2">
            View All Global Projects →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedCases.slice(0, 3).map((cs) => (
            <div key={cs.id} className="group flex flex-col">
              <Link 
                href={`/projects/${cs.id}`} 
                className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border shadow-lg mb-6 block"
              >
                <ProductImage 
                  src={cs.image} 
                  alt={cs.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
              </Link>
              <h3 className="font-bold text-primary text-sm uppercase leading-tight mb-4 group-hover:text-accent transition-colors">
                {cs.title}
              </h3>
              <p className="text-xs text-muted line-clamp-2 leading-relaxed mb-6 font-medium italic">
                {cs.description}
              </p>
              <Link 
                href={`/projects/${cs.id}`}
                className="mt-auto text-[10px] font-black uppercase tracking-[0.2em] text-primary/50 group-hover:text-primary transition-all flex items-center gap-2"
              >
                Technical Overview <span className="text-accent">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
