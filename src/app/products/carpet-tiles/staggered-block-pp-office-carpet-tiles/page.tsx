import Link from "next/link";
import EvidenceProductPage, { evidenceProductMetadata } from "@/components/EvidenceProductPage";

export const metadata = evidenceProductMetadata("staggered-block-pp-office-carpet-tiles");

export default function Page() {
  return <EvidenceProductPage productId="staggered-block-pp-office-carpet-tiles"
    includeManufacturer={false}
    sourceNote="Source: supplier listing 1600981735446 and its technical table, reviewed 25 October 2026. Values are supplier references, not independently tested VCARPETS performance. Approve the quoted SKU and physical sample; the supplier page has conflicting pile-construction labels. No product-matched performance report is established here."
    supplement={<section className="border-y border-border bg-surface py-10 md:py-14" id="project-quotation">
      <div className="container-fox max-w-5xl">
        <h2 className="mb-5 text-2xl font-black text-primary md:text-3xl">FOB Quotation and Office Planning References</h2>
        <dl className="grid gap-4 border border-border bg-white p-6 sm:grid-cols-2">
          <div><dt className="text-sm text-muted">FOB price</dt><dd className="mt-2 font-bold text-primary">Request a project quotation</dd></div>
          <div><dt className="text-sm text-muted">Port</dt><dd className="mt-2 font-bold text-primary">tianjingang</dd></div>
        </dl>
        <p className="mt-5 leading-8 text-muted">Confirm the selected construction, colour, carton quantity, order quantity and schedule before approving the quotation. The seven AI-edited images support design discussion only; sample approval controls the supplied appearance.</p>
        <div className="mt-6 space-y-4 leading-7">
          <p><Link href="/products/carpet-tiles" className="font-bold text-primary underline">Commercial carpet tile collection</Link> — compare other constructions separately.</p>
          <p><Link href="/blog/500-sqm-office-carpet-tiles-specification-guide" className="font-bold text-primary underline">500 m² office specification and quantity guide</Link> — a hypothetical calculation method, not a supplied project.</p>
          <p><Link href="/projects/office-carpet-tile-renovation" className="font-bold text-primary underline">Office carpet tile renovation planning reference</Link> — a clearly labelled scenario for phased works, not an installation record for this product.</p>
          <p><Link href="/blog/commercial-carpet-tile-backing-comparison-guide" className="font-bold text-primary underline">Backing selection guide</Link> — confirm the actual backing and fixing system before specifying care or replacement.</p>
        </div>
      </div>
    </section>} />;
}
