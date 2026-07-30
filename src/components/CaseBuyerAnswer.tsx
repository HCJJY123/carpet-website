import Link from "next/link";
import type { CaseSeoProfile } from "@/lib/case-seo";

type CaseBuyerAnswerProps = {
  profile: CaseSeoProfile;
  quoteHref: string;
};

export default function CaseBuyerAnswer({ profile, quoteHref }: CaseBuyerAnswerProps) {
  return (
    <section className="mb-14 border-y border-border bg-surface" aria-labelledby="case-buyer-answer">
      <div className="py-10 md:py-14 lg:pr-36">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-accent">Direct Buyer Answer</p>
            <h2 id="case-buyer-answer" className="text-2xl font-black uppercase leading-tight text-primary md:text-3xl">
              What This Application Guide Recommends
            </h2>
            <p className="case-answer mt-5 text-[15px] leading-7 text-muted md:text-base md:leading-8">{profile.directAnswer}</p>
            <Link
              href={quoteHref}
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-6 py-3 text-center text-[11px] font-black uppercase tracking-[0.14em] text-white transition-colors hover:bg-black"
            >
              Request a Project Specification
            </Link>
          </div>

          <div className="space-y-8">
            <dl className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {profile.decisionFacts.map((fact) => (
                <div key={fact.label} className="bg-white px-5 py-4">
                  <dt className="text-[9px] font-black uppercase tracking-[0.15em] text-muted">{fact.label}</dt>
                  <dd className="mt-2 text-sm font-black leading-relaxed text-primary">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">Buyer Checks Before Approval</h3>
              <ul className="mt-3 grid gap-3 text-sm leading-relaxed text-muted sm:grid-cols-2">
                {profile.buyerChecks.map((item) => (
                  <li key={item} className="border-l-2 border-accent pl-3">{item}</li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">Suitable For</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                  {profile.suitableFor.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">Limitations</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                  {profile.limitations.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-muted">
              <strong className="font-black uppercase text-primary">Evidence note: </strong>
              {profile.evidenceNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
