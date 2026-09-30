import Link from "next/link";

const profiles = {
  nylon: {
    title: "Specify Nylon Carpet Tiles for an Office Project",
    answer: "Start with the traffic zones, rolling-chair use and maintenance plan, then compare the complete tile construction rather than nylon content alone. Confirm the quoted backing, layout direction and construction-specific test documents before sample approval.",
    checks: ["Office zones, traffic and chair movement", "Tile format, pile construction and backing", "Subfloor, adhesive and replacement strategy", "Required documents, destination and installation date"],
    links: [
      ["Nylon, polyester and polypropylene comparison", "/blog/nylon-vs-polyester-vs-polypropylene-carpet-tiles"],
      ["Backing comparison", "/blog/commercial-carpet-tile-backing-comparison-guide"],
      ["Office renovation planning reference", "/projects/office-carpet-tile-renovation"],
    ],
  },
  modular: {
    title: "Build a Comparable 50x50 Carpet Tile Specification",
    answer: "A 50x50 format identifies the module, not the performance. Compare fiber, backing and installation requirements together. PVC, bitumen or PE options must be confirmed for the chosen construction; the sample illustration cannot identify a backing chemistry or prove its dimensions.",
    checks: ["Area by room and intended tile layout", "Nylon or PP preference and budget scope", "Backing, total build-up and substrate compatibility", "Color approval, spare stock and technical requirements"],
    links: [
      ["Carpet tile specification checklist", "/blog/commercial-carpet-tile-specification-checklist-b2b-buyers"],
      ["PVC, bitumen and PE backing review", "/blog/commercial-carpet-tile-backing-comparison-guide"],
      ["Office renovation planning reference", "/projects/office-carpet-tile-renovation"],
    ],
  },
  hotel: {
    title: "Plan Hotel Wall-to-Wall Carpet by Guest Area",
    answer: "Separate corridors, guestrooms and public areas before requesting a hotel carpet quote. Their traffic, cleaning access, comfort priorities and pattern layouts differ. A common design palette does not mean every area needs the same construction.",
    checks: ["Country and hotel areas being refurbished", "Floor plans, corridor widths and room quantities", "Pattern direction, roll plan and technical requirements", "Sample approval milestones and phased access"],
    links: [
      ["Hotel carpet procurement documents", "/blog/hotel-carpet-procurement-documents-checklist"],
      ["Hotel broadloom planning reference — Oceania", "/projects/hotel-wall-to-wall-carpet-project-oceania"],
      ["Custom printed nylon hotel carpet", "/products/wall-to-wall/3d-printed-hotel-carpet"],
    ],
  },
  corridor: {
    title: "Review Corridor Pattern, Seams and Service Access",
    answer: "For a corridor, review the carpet in the direction guests walk and compare it under the proposed lighting. Coordinate the pattern repeat, seam positions, door thresholds and trolley routes with the installer. The blue-gray scene is an application illustration, not a photograph of this glitter-pattern SKU.",
    checks: ["Corridor widths, turns, lift lobbies and door clearances", "Pattern scale, repeat and pile direction", "Cleaning access and wheeled service traffic", "Quoted construction documents and installation sequence"],
    links: [
      ["Hotel corridor carpet selection guide", "/blog/hotel-corridor-carpet-design-noise-stain-maintenance"],
      ["Hotel broadloom planning reference — Oceania", "/projects/hotel-wall-to-wall-carpet-project-oceania"],
      ["Hotel carpet by guest area", "/hotel-carpet"],
    ],
  },
  printed: {
    title: "Turn Custom Carpet Artwork into a Project Brief",
    answer: "Send the floor plan together with the artwork or color reference. Confirm intended pattern scale, repeat, orientation and construction before comparing printed broadloom proposals. An on-screen design is not a physical color approval or a promise that every artwork can be produced unchanged.",
    checks: ["Application, destination and total area", "Artwork ownership, scale and color reference", "Roll layout, joins and installation environment", "Physical sample review and required delivery milestone"],
    links: [
      ["Carpet sample approval checklist", "/blog/commercial-carpet-sample-approval-checklist"],
      ["Hotel broadloom planning reference — Oceania", "/projects/hotel-wall-to-wall-carpet-project-oceania"],
      ["Hotel carpet procurement documents", "/blog/hotel-carpet-procurement-documents-checklist"],
    ],
  },
} as const;

export default function ProjectProcurementLinks({ kind }: { kind: keyof typeof profiles }) {
  const profile = profiles[kind];
  const quoteHref = `/contact?product=${encodeURIComponent(profile.title)}#quote-form`;
  return (
    <section className="border-y border-border bg-surface py-12 md:py-16">
      <div className="container-fox grid gap-10 lg:grid-cols-2">
        <div className="min-w-0">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Project selection and RFQ</p>
          <h2 className="mb-5 text-2xl font-bold leading-tight text-primary md:text-3xl">{profile.title}</h2>
          <p className="mb-6 leading-7 text-muted">{profile.answer}</p>
          <ul className="space-y-3 text-sm leading-6 text-muted">
            {profile.checks.map((check) => <li key={check} className="border-l border-accent pl-4">{check}</li>)}
          </ul>
          <p className="mt-6 text-sm leading-6 text-muted">Sample availability, MOQ, lead time and trade terms: confirm for the project specification. Use the physical sample and documents for the quoted construction, not the generated scene, as the approval basis.</p>
        </div>
        <div className="min-w-0">
          <h3 className="mb-4 text-lg font-bold text-primary">Compare before you approve</h3>
          <ul className="mb-8 divide-y divide-border">
            {profile.links.map(([label, href]) => <li key={href}><Link href={href} className="block py-4 text-primary underline underline-offset-4 hover:text-accent">{label}</Link></li>)}
          </ul>
          <p className="mb-5 text-sm leading-6 text-muted">For a comparable quotation, include your country, application, total area, required size, material preference, color or pattern, installation environment, technical requirements and delivery date.</p>
          <div className="flex flex-wrap gap-4">
            <Link href={quoteHref} className="inline-flex min-h-12 items-center bg-accent px-6 py-3 font-bold text-primary hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Request Project Quote</Link>
            <Link href="/request-sample-box" className="inline-flex min-h-12 items-center border border-primary px-6 py-3 font-bold text-primary">Request Carpet Samples</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
