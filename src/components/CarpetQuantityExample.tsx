import Link from "next/link";

const guides = {
  tiles: {
    title: "How many 50×50 cm carpet tiles do you need?",
    answer: "One nominal 50×50 cm tile covers 0.25 m², so four uncut tiles cover 1 m². Calculate the net tile count first, add separately agreed cutting and spare quantities, then round to full cartons using the packing of the actual quoted product.",
    example: "Worked planning example, not a project quotation: 500 m² ÷ 0.25 m² = 2,000 tiles before cutting and spares. If the project team selects a 5% combined allowance, the planning quantity becomes 2,100 tiles / 525 m². The 5% is an example assumption, not a recommended allowance for every layout.",
    rows: [
      ["Net floor area", "Measure each room or zone; separate areas receiving another floor finish."],
      ["Layout and cutting", "Approve tile direction, borders, access-floor interfaces and the treatment of offcuts."],
      ["Replacement tiles", "List the agreed spare quantity separately and retain the production-lot reference."],
      ["Carton rounding", "Request pieces, m², gross weight and dimensions per carton for this construction."],
    ],
    href: "/blog/commercial-carpet-tile-rfq-checklist-b2b-buyers", label: "Prepare a tile quantity and RFQ schedule",
  },
  printed: {
    title: "Why can hotel carpet order area exceed the room area?",
    answer: "Broadloom is ordered in roll width and cut length. Floor area alone does not account for the roll width, print orientation, pattern repeat, seam placement or trimming. Start with a dimensioned plan and a cut-and-seam layout before confirming the order quantity.",
    example: "Illustrative layout using the listed 4 m width: a rectangular 3.6 × 5.0 m room has a net area of 18 m². One 4 × 5 m cut uses 20 m² before end trimming or pattern matching. The difference is 2 m². An actual cutting plan may require more; this is not a universal wastage percentage or a production cut length.",
    rows: [
      ["Drawing", "Show room dimensions, alcoves, doors, fixed joinery and the intended pile or print direction."],
      ["Pattern", "Identify the repeat and which elements must align at doors, borders and seams."],
      ["Cut schedule", "Record roll width, each cut length, seam locations and the allowance for matching and trimming."],
      ["Room labels", "Connect each approved cut and package label to the room or installation zone."],
    ],
    href: "/blog/commercial-carpet-sample-approval-checklist", label: "Connect the approved layout to the physical sample",
  },
  broadloom: {
    title: "Should a hotel compare carpet quotations by price per m² alone?",
    answer: "Compare the cost of the approved cut schedule and construction, then identify underlay, fixing materials, freight and installation separately. Two equal prices per m² can produce different project totals when roll width, pattern matching or included work differs.",
    example: "For a like-for-like comparison, ask each proposal to show the net floor area, chargeable carpet area, roll width, cut plan and all included items. Keep material price and installed-floor price in separate columns; do not multiply net room area by a rate that applies to a different supply scope.",
    rows: [
      ["Construction", "Compare the selected fiber, pile, backing and physical sample as one offered product."],
      ["Chargeable area", "Use the approved roll and cut schedule rather than assuming net room area."],
      ["Included items", "Separate carpet, underlay, adhesive, trims, packing and delivery."],
      ["Installation", "Name the party measuring, cutting, installing and accepting the completed floor."],
    ],
    href: "/blog/hotel-ballroom-carpet-rfq-checklist", label: "Review hotel carpet scope and layout inputs",
  },
};

export default function CarpetQuantityExample({ kind }: { kind: keyof typeof guides }) {
  const item = guides[kind];
  return <section id="quantity-planning-example" className="border-y border-border bg-surface py-10 md:py-14" data-ai-growth="20261108">
    <div className="container-fox max-w-5xl">
      <h2 className="mb-5 text-2xl font-black leading-tight text-primary md:text-3xl">{item.title}</h2>
      <p className="leading-8 text-muted">{item.answer}</p>
      <p className="mt-5 border-l-4 border-accent bg-white p-5 text-sm leading-7 text-primary">{item.example}</p>
      <dl className="mt-6 grid gap-4 sm:grid-cols-2">{item.rows.map(([label, value]) => <div key={label} className="min-w-0 border border-border bg-white p-5"><dt className="font-bold text-primary">{label}</dt><dd className="mt-2 text-sm leading-7 text-muted">{value}</dd></div>)}</dl>
      <Link href={item.href} className="mt-6 inline-block font-bold text-primary underline">{item.label}</Link>
    </div>
  </section>;
}
