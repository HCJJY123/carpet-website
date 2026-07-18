import { Metadata } from "next";
import { faqSections } from "@/lib/data";

export const metadata: Metadata = {
  title: "B2B Carpet Sourcing FAQ | Project & Technical Support | VISHOME",
  description: "Expert answers on commercial carpet types, fire ratings (ASTM E648), project lead times, and global logistics for contractors.",
};

export default function FAQPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <section className="bg-[#102A43] py-20 text-center relative overflow-hidden">
        <div className="container-fox relative z-10">
          <span className="text-accent font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">B2B Knowledge Hub</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-widest leading-tight">
            Procurement & Project FAQ
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
             {faqSections.map((section) => (
               <div key={section.title} className="mb-20">
                 <div className="flex items-center gap-4 mb-10 border-b-4 border-primary pb-4">
                   <h2 className="text-2xl font-black text-primary uppercase tracking-widest">{section.title}</h2>
                 </div>
                 
                 <div className="space-y-12">
                   {section.questions.map((item) => (
                     <div key={item.q} className="group border-l-2 border-border pl-8 py-2 hover:border-accent transition-colors">
                       <h3 className="text-lg font-bold text-primary mb-4 leading-snug flex items-start gap-4">
                         <span className="text-accent italic font-black">Q.</span>
                         {item.q}
                       </h3>
                       <div className="flex items-start gap-4">
                         <span className="text-primary/10 font-black italic text-sm">A.</span>
                         <p className="text-muted text-base leading-relaxed font-medium">
                           {item.a}
                         </p>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
