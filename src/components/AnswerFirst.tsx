import Link from "next/link";

type DecisionFact = {
  label: string;
  value: string;
};

type MoqTier = {
  label: "Sample" | "Trial Order" | "Project MOQ";
  value: string;
};

type AnswerFirstProps = {
  eyebrow?: string;
  title: string;
  answer: string;
  facts: DecisionFact[];
  moq: MoqTier[];
  suitableFor: string[];
  notSuitableFor: string[];
  evidence: string;
  quoteHref: string;
  quoteLabel?: string;
};

export default function AnswerFirst({
  eyebrow = "Buyer Answer",
  title,
  answer,
  facts,
  moq,
  suitableFor,
  notSuitableFor,
  evidence,
  quoteHref,
  quoteLabel = "Request a Project Quote",
}: AnswerFirstProps) {
  return (
    <section
      className="border-y border-border bg-white"
      data-funnel-section="answer_first"
      aria-labelledby="answer-first-title"
    >
      <div className="container-fox py-12 md:py-16 lg:pr-36">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
            <h2 id="answer-first-title" className="text-2xl font-black uppercase leading-tight text-primary md:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-7 text-muted md:text-lg md:leading-8">{answer}</p>
            <Link
              href={quoteHref}
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-6 py-3 text-center text-[11px] font-black uppercase tracking-[0.14em] text-white transition-colors hover:bg-black"
            >
              {quoteLabel}
            </Link>
          </div>

          <div className="space-y-8">
            <dl className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-surface px-5 py-4">
                  <dt className="text-[9px] font-black uppercase tracking-[0.16em] text-muted">{fact.label}</dt>
                  <dd className="mt-2 text-sm font-black leading-snug text-primary">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">Order Path</h3>
              <dl className="mt-3 grid gap-px border border-border bg-border sm:grid-cols-3">
                {moq.map((tier) => (
                  <div key={tier.label} className="bg-white px-4 py-4">
                    <dt className="text-[9px] font-black uppercase tracking-[0.14em] text-accent">{tier.label}</dt>
                    <dd className="mt-2 text-xs font-bold leading-relaxed text-primary">{tier.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">Suitable For</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                  {suitableFor.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">Not the Default Choice For</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                  {notSuitableFor.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            </div>

            <p className="border-l-2 border-accent pl-4 text-xs leading-relaxed text-muted">
              <strong className="font-black uppercase text-primary">Evidence & limitation: </strong>
              {evidence}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
