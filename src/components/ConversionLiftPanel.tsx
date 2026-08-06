import Link from "next/link";
import { brandInfo } from "@/lib/data";

type ConversionLiftPanelProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  product?: string;
  quoteHref?: string;
  className?: string;
  compact?: boolean;
};

function mailtoHref(product: string) {
  const subject = encodeURIComponent(`Project quote request - ${product}`);
  const body = encodeURIComponent(
    `Hello Vishome team,\n\nPlease help quote this carpet project.\n\nProduct / application:\nEstimated area:\nDestination country:\nTarget delivery date:\n\nThank you.`
  );

  return `mailto:${brandInfo.email}?subject=${subject}&body=${body}`;
}

export default function ConversionLiftPanel({
  eyebrow = "Recommended Inquiry Path",
  title = "Send Your Project Details for a Faster Quote",
  body = "Share carpet type, application area, destination, and timeline. The sales team can reply with MOQ, sample options, lead time, and a project-based quotation.",
  product = "Commercial Carpet Project",
  quoteHref = "/contact?product=Commercial%20Carpet%20Project#quote-form",
  className = "",
  compact = false,
}: ConversionLiftPanelProps) {
  const checklist = ["Carpet type", "Estimated area", "Destination", "Required date"];

  return (
    <section className={`border-y border-[#C8752A]/20 bg-[#FFF8F1] ${className}`} data-funnel-section="conversion_lift_panel">
      <div className={`container-fox ${compact ? "py-7" : "py-10 md:py-12"}`}>
        <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C8752A]">{eyebrow}</p>
            <h2 className={`mt-3 font-black uppercase leading-tight text-primary ${compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"}`}>
              {title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted md:text-base">{body}</p>
          </div>

          <div className="rounded-lg border border-[#C8752A]/25 bg-white p-4 shadow-[0_14px_35px_rgba(16,42,67,0.08)] md:p-5">
            <div className="grid grid-cols-2 gap-2">
              {checklist.map((item) => (
                <div key={item} className="border border-border bg-surface px-3 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-primary">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link href={quoteHref} className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#C8752A] px-5 py-3 text-center text-xs font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#AD6424]">
                Request Quote
              </Link>
              <a
                href={mailtoHref(product)}
                data-email-placement="conversion_lift_panel"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-primary/20 bg-white px-5 py-3 text-center text-xs font-black uppercase tracking-[0.12em] text-primary transition-colors hover:border-[#C8752A] hover:text-[#C8752A]"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                Email Sales
              </a>
            </div>
            <p className="mt-3 text-[11px] font-semibold leading-relaxed text-muted">
              Email: <span className="font-black text-primary">{brandInfo.email}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
