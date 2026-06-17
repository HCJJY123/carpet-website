import { faqItems } from "@/lib/data";

export default function FAQPage() {
  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
          <p className="text-muted max-w-2xl">Answers to common questions about our products, ordering, and services.</p>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group bg-surface rounded-xl border border-border overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-primary hover:bg-gray-50 transition-colors">
                  {item.q}
                  <svg className="w-5 h-5 text-muted shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted leading-relaxed border-t border-border pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
