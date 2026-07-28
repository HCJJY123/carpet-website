import Link from "next/link";

type ContentTrustPanelProps =
  | {
      type: "blog";
      author: string;
      published: string;
      modified?: string;
    }
  | {
      type: "case";
    };

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export default function ContentTrustPanel(props: ContentTrustPanelProps) {
  const isBlog = props.type === "blog";

  return (
    <aside className="border-y border-border bg-surface px-5 py-6 md:px-7" aria-label="Content verification">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
            {isBlog ? "Technical Content Record" : "Application Planning Guide"}
          </p>
          <dl className="mt-4 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-black text-primary">{isBlog ? "Prepared by" : "Guide prepared by"}</dt>
              <dd className="mt-1 text-muted">{isBlog ? props.author : "VISHOME Technical Team"}</dd>
            </div>
            <div>
              <dt className="font-black text-primary">Content review</dt>
              <dd className="mt-1 text-muted">VISHOME Commercial Carpet Team</dd>
            </div>
            {isBlog ? (
              <>
                <div>
                  <dt className="font-black text-primary">Published</dt>
                  <dd className="mt-1 text-muted">{formatDate(props.published)}</dd>
                </div>
                {props.modified && props.modified !== props.published ? (
                  <div>
                    <dt className="font-black text-primary">Last reviewed</dt>
                    <dd className="mt-1 text-muted">{formatDate(props.modified)}</dd>
                  </div>
                ) : null}
              </>
            ) : (
              <div className="sm:col-span-2">
                <dt className="font-black text-primary">Reference scope</dt>
                <dd className="mt-1 leading-relaxed text-muted">
                  Specification and procurement guidance for similar applications, not an identified client endorsement.
                </dd>
              </div>
            )}
          </dl>
          <p className="mt-5 max-w-3xl text-xs leading-relaxed text-muted">
            Final construction, performance documents, test reports, commercial terms, and installation requirements
            are project-specific and must be confirmed against the quoted product.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3 text-[11px] font-black uppercase tracking-[0.1em] md:max-w-44 md:flex-col" aria-label="Verification sources">
          <Link href="/commercial-carpet-manufacturer" className="text-accent hover:text-primary">Manufacturer Profile</Link>
          <Link href="/factory" className="text-accent hover:text-primary">Factory &amp; Production</Link>
          <Link href="/products" className="text-accent hover:text-primary">Product Sources</Link>
          <Link href="/contact#quote-form" className="text-accent hover:text-primary">Verify a Specification</Link>
        </nav>
      </div>
    </aside>
  );
}
