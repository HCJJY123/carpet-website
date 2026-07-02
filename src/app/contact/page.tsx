"use client";

import { useState } from "react";
import ProductImage from "@/components/ProductImage";

export default function ContactPage() {
  const [state, setState] = useState({
    submitting: false,
    submitted: false,
    error: null as string | null
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ ...state, submitting: true });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xlgkpkza", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setState({ submitting: false, submitted: true, error: null });
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setState({ submitting: false, submitted: false, error: "Oops! There was a problem with the submission. Please try again." });
    }
  }

  return (
    <div className="bg-white">
      {/* Targeted Hero */}
      <section className="relative bg-primary-light py-24 overflow-hidden">
        <div className="container-fox text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider">Start Your Procurement</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg opacity-90 leading-relaxed font-light">
            Request pricing, technical certificates, or professional sample matching for your commercial flooring project.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form Column */}
            <div className="lg:col-span-2">
              {state.submitted ? (
                <div className="bg-success/5 border border-success/20 rounded-2xl p-12 text-center animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
                  <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-widest">Inquiry Received</h3>
                  <p className="text-muted text-lg font-medium">Thank you for choosing Vishome. Our technical sales team will review your requirements and provide a preliminary quote within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 bg-surface p-10 md:p-12 rounded-2xl border border-border shadow-sm">
                  {state.error && <p className="text-red-600 font-bold text-center text-sm">{state.error}</p>}

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Full Name *</label>
                      <input name="name" type="text" required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Professional Email *</label>
                      <input name="email" type="email" required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="john@company.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Company Name *</label>
                      <input name="company" type="text" required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="Architecture / Hotel Group" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Country / Region *</label>
                      <input name="country" type="text" required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="United States, UK, etc." />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Project Type</label>
                      <select name="projectType" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all text-sm font-bold text-primary">
                        <option value="">Select Category</option>
                        <option value="hotel">Hotel / Hospitality</option>
                        <option value="office">Corporate Office</option>
                        <option value="retail">Retail / Showroom</option>
                        <option value="other">Other Commercial</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Estimated Area (SQM)</label>
                      <input name="quantity" type="number" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all" placeholder="e.g. 500" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-6">Technical Requirements</label>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "ASTM E648 Fire Rating",
                        "CRI Green Label Plus (Low VOC)",
                        "Custom Pantone Matching",
                        "Free Sample Swatches",
                        "DDP Logistics Support",
                        "Pattern Design Support"
                      ].map((req) => (
                        <label key={req} className="flex items-center gap-3 cursor-pointer group">
                          <input name="requirements" value={req} type="checkbox" className="w-5 h-5 border-border rounded text-primary focus:ring-primary transition-all" />
                          <span className="text-xs font-bold text-muted group-hover:text-primary transition-colors uppercase tracking-widest">{req}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Project Brief *</label>
                    <textarea name="message" rows={6} required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all resize-none" placeholder="Tell us about your installation timeline, specific pattern needs, or any technical questions..." />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full btn-fox-orange py-6 text-base tracking-[0.4em] disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-2xl"
                  >
                    {state.submitting ? "SENDING INQUIRY..." : "SUBMIT FORMAL INQUIRY"}
                  </button>
                </form>
              )}
            </div>

            {/* Info Column */}
            <div className="space-y-12">
              <div>
                <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6">Headquarters</h3>
                <div className="space-y-4 text-muted">
                  <p className="flex items-start gap-4">
                    <span className="text-accent font-bold">A</span>
                    Cuihuangkou Town, Wuqing District, Tianjin 301700, China
                  </p>
                  <p className="flex items-start gap-4">
                    <span className="text-accent font-bold">P</span>
                    +86 152 2288 5400
                  </p>
                  <p className="flex items-start gap-4">
                    <span className="text-accent font-bold">E</span>
                    zara@visfurn.com
                  </p>
                </div>
              </div>

              <div className="bg-primary p-8 rounded-xl text-white">
                <h3 className="font-bold text-lg mb-4 uppercase tracking-widest">Sourcing Hotline</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Direct connection for project managers and contractors. Get technical support via WhatsApp or Phone.</p>
                <div className="text-2xl font-bold text-accent">+86 152 2288 5400</div>
              </div>

              <div className="space-y-6">
                <ProductImage src="/images/samples-box.jpg" alt="Carpet Sample Box" className="rounded-lg shadow-md border border-border" />
                <p className="text-xs text-muted leading-relaxed uppercase tracking-wider font-semibold italic text-center">
                  Professional Sample Boxes shipped globally within 3-5 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
