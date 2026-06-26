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
  return { title: `${project.title} | Case Study | VISHOME` };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = caseStudies.find((c) => c.id === id);
  if (!project) notFound();

  return (
    <div className="bg-white min-h-screen">
      <nav className="bg-surface py-4 border-b border-border"><div className="container-fox"><Link href="/projects" className="text-[10px] font-black text-primary/50 uppercase hover:text-primary">← Back to All Projects</Link></div></nav>
      <section className="py-20"><div className="container-fox"><div className="max-w-5xl mx-auto"><h1 className="text-3xl md:text-5xl font-black text-primary mb-10 border-l-8 border-accent pl-8 uppercase leading-tight">{project.title}</h1><div className="aspect-[21/9] rounded-sm overflow-hidden shadow-2xl mb-16 border border-border"><ProductImage src={project.image} alt={project.title} className="w-full h-full object-cover" /></div><div className="grid lg:grid-cols-3 gap-16"><div className="lg:col-span-2"><h2 className="text-xl font-bold text-primary mb-6 uppercase border-b border-border pb-4">Project Overview</h2><p className="text-muted text-lg leading-relaxed mb-10 font-medium">{project.description}</p><div className="bg-surface p-10 border border-border"><p className="text-sm font-bold text-primary mb-4 italic uppercase">"Their expertise in fire-rated commercial flooring was critical for our project approval."</p></div></div><div className="p-8 bg-[#102A43] text-white rounded-sm h-fit"><h3 className="text-sm font-black uppercase mb-6 text-accent">Technical Specs</h3><ul className="space-y-6"><li className="border-b border-white/10 pb-4"><p className="text-[9px] text-white/50 uppercase">Standard</p><p className="text-xs font-bold uppercase">ASTM E648 Class I</p></li><li className="border-b border-white/10 pb-4"><p className="text-[9px] text-white/50 uppercase">Origin</p><p className="text-xs font-bold uppercase">Tianjin Factory Direct</p></li></ul><Link href="/contact" className="btn-fox-orange w-full py-4 text-center mt-8 inline-block">Request Similar Solution</Link></div></div></div></div></section>
    </div>
  );
}
