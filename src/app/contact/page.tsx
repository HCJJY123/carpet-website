"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-muted max-w-2xl">Get a free quote or ask us anything about our products. We typically respond within 24 hours.</p>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-sm text-green-600">Your inquiry has been received. Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">Name *</label>
                      <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">Email *</label>
                      <input type="email" required className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">Company</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm" placeholder="Company name (optional)" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">Phone</label>
                      <input type="tel" className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm" placeholder="+86 138 xxxx xxxx" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">Product Interest</label>
                      <select className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm text-muted">
                        <option value="">Select a product</option>
                        <option value="carpet-tiles">Carpet Tiles</option>
                        <option value="broadloom">Broadloom Carpet</option>
                        <option value="custom">Custom Order</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">Quantity (m²)</label>
                    <input type="number" className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm" placeholder="Approximate area needed" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">Message *</label>
                    <textarea rows={5} required className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm resize-none" placeholder="Tell us about your project requirements, timeline, and any specific questions..." />
                  </div>
                  <button type="submit" className="w-full bg-accent text-white font-medium px-6 py-3 rounded-lg hover:bg-accent-light transition-colors text-sm">
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
            <div>
              <div className="bg-surface rounded-xl p-6 border border-border mb-6">
                <h3 className="font-semibold text-primary mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm text-muted">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>info@carpetpro.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>+86 21 6888 1234</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>1238 Huaihai Rd, Shanghai, China</span>
                  </div>
                </div>
              </div>
              <div className="bg-primary rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-2">Need a Quick Quote?</h3>
                <p className="text-sm text-gray-300 mb-4">Send us your requirements and area size, and we'll get back to you with a competitive quote within 24 hours.</p>
                <p className="text-xs text-gray-400">Office hours: Mon-Fri, 9:00 - 18:00 (UTC+8)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
