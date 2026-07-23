import Link from "next/link";

type ProcurementFact = {
  label: string;
  value: string;
  detail: string;
};

type ProcurementSnapshotProps = {
  title: string;
  facts: ProcurementFact[];
  quoteHref: string;
  downloadHref: string;
  downloadName: string;
};

export default function ProcurementSnapshot({
  title,
  facts,
  quoteHref,
  downloadHref,
  downloadName,
}: ProcurementSnapshotProps) {
  return (
    <section
      className="border-b border-border bg-surface"
      data-funnel-section="procurement_snapshot"
      aria-labelledby="procurement-snapshot-title"
    >
      <div className="container-fox py-9 md:py-12">
        <div className="grid gap-8 xl:grid-cols-[0.72fr_2.28fr] xl:items-center">
          <div>
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent">
              B2B Procurement Snapshot
            </p>
            <h2 id="procurement-snapshot-title" className="text-xl font-black uppercase leading-tight text-primary md:text-2xl">
              {title}
            </h2>
          </div>

          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="min-w-0 bg-white p-5">
                <p className="text-[9px] font-black uppercase tracking-[0.16em] text-muted">{fact.label}</p>
                <p className="mt-2 text-sm font-black uppercase leading-snug text-primary">{fact.value}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">{fact.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-muted">
            Send the project area or quantity, application, destination, required date, and technical standard for an accurate factory quotation.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={downloadHref}
              download
              data-track-event="technical_document_download"
              data-item-name={downloadName}
              data-item-category="buyer_document"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-primary bg-white px-5 py-3 text-center text-[10px] font-black uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Download Buyer Checklist
            </a>
            <Link
              href={quoteHref}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-3 text-center text-[10px] font-black uppercase tracking-[0.14em] text-white transition-colors hover:bg-black"
            >
              Request Project Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
