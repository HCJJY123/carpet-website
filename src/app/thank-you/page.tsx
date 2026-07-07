import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inquiry Received | Thank You | VISHOME",
  description: "Thank you for your inquiry. Our B2B project team will contact you within 24 hours.",
  robots: { index: false, follow: false }, // Prevent SEO indexing
};

export default function ThankYouPage() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-widest mb-6">
          Inquiry <span className="text-accent">Received</span>
        </h1>
        
        <p className="text-xl text-muted leading-relaxed mb-12 font-medium italic">
          Thank you for reaching out to VISHOME. Our specialized B2B project management team has received your request and will provide a detailed technical quote within <span className="text-primary font-bold">24 hours</span>.
        </p>

        <div className="bg-surface border border-border p-8 mb-12 text-left rounded-sm">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6 border-b border-border pb-4">What's Next?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="w-6 h-6 rounded-full bg-primary text-white text-[10px] flex items-center justify-center flex-shrink-0 font-bold">01</span>
              <p className="text-sm text-muted">A dedicated account manager will review your project requirements and technical drawings.</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-6 h-6 rounded-full bg-primary text-white text-[10px] flex items-center justify-center flex-shrink-0 font-bold">02</span>
              <p className="text-sm text-muted">We will arrange high-resolution pattern proofs or physical sample boxes if requested.</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-6 h-6 rounded-full bg-primary text-white text-[10px] flex items-center justify-center flex-shrink-0 font-bold">03</span>
              <p className="text-sm text-muted">For urgent project needs, please contact our experts directly via WhatsApp below.</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/" className="bg-primary text-white font-black px-12 py-5 uppercase tracking-[0.2em] text-[10px] hover:bg-primary-hover transition-all">
            Return to Home
          </Link>
          <Link href="/projects" className="border-2 border-primary text-primary font-black px-12 py-5 uppercase tracking-[0.2em] text-[10px] hover:bg-surface transition-all">
            View Project Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}
