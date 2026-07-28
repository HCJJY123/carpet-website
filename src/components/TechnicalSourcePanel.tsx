import Link from "next/link";

type ResourceLink = {
  label: string;
  href: string;
};

type TechnicalSourcePanelProps = {
  title: string;
  summary: string;
  documents: ResourceLink[];
  sources: ResourceLink[];
};

export default function TechnicalSourcePanel({
  title,
  summary,
  documents,
  sources,
}: TechnicalSourcePanelProps) {
  return (
    <section className="border-y border-border bg-surface py-12" aria-labelledby="technical-source-heading">
      <div className="container-fox grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:pr-40 2xl:pr-0">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-accent">Verification &amp; Source Pathways</p>
          <h2 id="technical-source-heading" className="text-2xl font-black uppercase leading-tight text-primary md:text-3xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{summary}</p>
        </div>
        <div>
          <div className="grid gap-3 sm:grid-cols-2">
            {documents.map((document) => (
              <a
                key={document.href}
                href={document.href}
                className="border border-border bg-white px-5 py-4 text-sm font-black leading-snug text-primary transition-colors hover:border-accent hover:text-accent"
              >
                {document.label}
                <span className="mt-2 block text-[10px] uppercase tracking-[0.14em] text-accent">Open Technical PDF</span>
              </a>
            ))}
          </div>
          <nav className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-xs font-black uppercase tracking-[0.08em]" aria-label="Related source pages">
            {sources.map((source) => (
              <Link key={source.href} href={source.href} className="text-accent hover:text-primary">
                {source.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
