import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/lib/data";
import ProductImage from "@/components/ProductImage";

interface Props { params: Promise<{ id: string }>; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = caseStudies.find((c) => c.id === id);
  if (!project) return { title: "Project Not Found" };
  return { title: `${project.title} | B2B Case Study | VISHOME` };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = caseStudies.find((c) => c.id === id);
  if (!project) notFound();

  return (
    <div className="bg-white min-h-screen font-sans">
      <nav className="bg-surface py-4 border-b border-border">
        <div className="container-fox">
          <Link href="/projects" className="text-[10px] font-black text-primary/50 uppercase tracking-[0.2em] hover:text-primary transition-all">
            ← Back to Global Projects
          </Link>
        </div>
      </nav>

      <section className="py-20">
        <div className="container-fox">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-black text-primary mb-12 uppercase leading-tight border-l-8 border-accent pl-8">
              {project.title}
            </h1>
            
            <div className="aspect-[21/9] overflow-hidden rounded-sm shadow-2xl mb-16 border border-border">
              <ProductImage src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold text-primary mb-8 uppercase tracking-widest border-b border-border pb-4">Project Overview</h2>
                <div className="prose prose-slate max-w-none text-muted leading-relaxed text-lg font-medium mb-12">
                   <p>{project.description}</p>
                </div>
                
                <div className="bg-surface p-10 border border-border">
                   <p className="text-sm font-bold text-primary mb-4 italic uppercase leading-loose">
                     "THE VISOME TEAM PROVIDED UNPARALLELED TECHNICAL SUPPORT FROM PATTERN MATCHING TO GLOBAL DDP DELIVERY. THEIR EXPERTISE IN FIRE-RATED COMMERCIAL FLOORING WAS CRITICAL FOR OUR PROJECT APPROVAL."
                   </p>
                   <p className="text-[10px] font-black text-accent uppercase tracking-widest">— Project Lead Consultant</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-8 bg-[#102A43] text-white rounded-sm shadow-xl">
                  <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-accent border-b border-white/10 pb-4">Technical Details</h3>
                  <ul className="space-y-6">
                    {project.projectSpecs.map((spec, i) => (
                      <li key={i} className="flex flex-col gap-1 border-b border-white/5 pb-4 last:border-0">
                         <span className="text-[9px] text-white/40 uppercase tracking-[0.2em]">{spec.label}</span>
                         <span className="text-xs font-bold uppercase tracking-wide">{spec.value}</span>
                      </li>
                    ))}
                    <li className="flex flex-col gap-1">
                       <span className="text-[9px] text-white/40 uppercase tracking-[0.2em]">Compliance</span>
                       <span className="text-xs font-bold uppercase tracking-wide">ASTM E648 Class I</span>
                    </li>
                  </ul>
                </div>
                
                <Link href="/contact" className="btn-fox-orange w-full py-5 text-center text-xs tracking-[0.3em] shadow-lg">
                   Inquire Similar Solution
                </Link>
                
                <div className="text-center">
                   <p className="text-[10px] text-muted font-bold uppercase tracking-widest italic">100% Fully Delivered & Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
