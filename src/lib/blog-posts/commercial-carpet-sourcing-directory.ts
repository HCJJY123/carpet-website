import type { BlogPost, BlogSection } from "@/lib/blog-data";

const buyerQuestions: { title: string; answer: string; check: string }[] = [
  {
    title: "What is the best carpet for a commercial office?",
    answer: "For many high-traffic offices, modular carpet tiles are a useful starting point because individual modules can be replaced and the floor can often be installed in phases. Nylon is commonly considered where resilience matters, but a suitable polypropylene or other construction may fit a different budget or traffic zone. There is no universally best fiber or format.",
    check: "Map rolling-chair zones, traffic, cleaning, backing, subfloor, fire documentation and the replacement plan before requesting samples.",
  },
  {
    title: "Are carpet tiles better than broadloom carpet?",
    answer: "Neither is better in every setting. Tiles support modular replacement and staged office renovation. Broadloom can offer continuous pattern flow and fewer visible seams in hotel rooms, corridors and public interiors. The installation system, project layout, waste, maintenance access and approved sample all affect the decision.",
    check: "Compare the two formats against the same use areas, floor plan, traffic, installation window and maintenance brief.",
  },
  {
    title: "What size carpet tile is commonly used in offices?",
    answer: "A 50 × 50 cm tile is a common modular format in office sourcing, but projects may use other sizes. It is not interchangeable with a 24 × 24 inch tile. The size specifies only the module, not its performance or suitability for rolling chairs, traffic or a particular substrate.",
    check: "Confirm dimensions in millimetres along with fiber, pile, backing, thickness, carton quantity and installation direction.",
  },
  {
    title: "What is the difference between nylon and polypropylene carpet tiles?",
    answer: "Nylon is frequently considered for demanding traffic and resilience. Polypropylene can be a value-oriented choice for suitable zones. Neither fiber name by itself establishes performance: pile construction and weight, backing, installation, cleaning and product-specific testing matter as much as the headline material.",
    check: "Ask suppliers to quote comparable constructions for the same traffic zone rather than comparing two fibers at different pile weights.",
  },
  {
    title: "What is the best carpet for a hotel corridor?",
    answer: "Choose by the corridor's traffic, soil exposure, rolling luggage, maintenance access, acoustic brief, design continuity and fire-document requirements. Broadloom can support a continuous hospitality pattern; carpet tiles may simplify localized replacement. Neither format should be specified solely from an interior photograph.",
    check: "Share the corridor plan, transitions, cleaning regime, desired pattern and destination-market standards for a product-matched proposal.",
  },
  {
    title: "What information should I send a carpet manufacturer for a quote?",
    answer: "Start with the application, destination, estimated floor area, product type and desired delivery date. Add drawings, construction or backing, color references, required testing and sample needs where known. An early budget conversation needs fewer details than a binding project comparison, but missing inputs must be listed as assumptions.",
    check: "Use the procurement FAQ checklist, and ask each supplier to identify quantity, unit basis, packing, trade term and validity in writing.",
  },
  {
    title: "Can a carpet manufacturer match a custom color?",
    answer: "A color request can start from a physical sample, artwork or color reference. Feasibility depends on fiber, construction, production method and quantity. A screen image is not a final approval reference; a physical sample or strike-off and an agreed tolerance should be reviewed before production.",
    check: "Send the reference, target construction, area and schedule, then record which physical sample governs the bulk order.",
  },
  {
    title: "How long does custom commercial carpet production take?",
    answer: "No fixed number of days applies across stock items, custom colors and printed broadloom. The timeline includes specification review, sample development, buyer approval, material availability, production, inspection and packing; transit is a separate leg. A firm ready date can only be confirmed against the final construction and quantity.",
    check: "Request a dated approval milestone, production-ready date and delivery estimate for the stated destination.",
  },
  {
    title: "What is the MOQ for commercial carpet?",
    answer: "There is no single minimum for all commercial carpet. An available standard color may support a smaller trial, while a custom yarn, backing, colorway or printed pattern can require a dedicated production run. MOQ should be confirmed per product and color, not inferred from a category-wide marketing claim.",
    check: "State sample, trial and final project quantities separately and ask which construction each minimum applies to.",
  },
  {
    title: "How much carpet should I order for a project?",
    answer: "Start from measured floor area, then allow for pattern matching, cutting and layout waste and an agreed quantity of future replacement material. There is no universal waste percentage: tile direction, roll width, room geometry, seams and the installer's plan change the calculation.",
    check: "Ask the installer to approve the take-off and spare-stock strategy before fixing the order quantity.",
  },
  {
    title: "What carpet backing is best for office carpet tiles?",
    answer: "The appropriate bitumen, PVC, PE, cushion or other backing depends on the product construction and project requirements. Consider stability, attachment method, acoustic and material goals, weight, substrate and maintenance access. A backing label alone is not proof of environmental performance or compatibility.",
    check: "Request construction-specific test documents and written installation guidance matched to the selected backing.",
  },
  {
    title: "What documents should a commercial carpet supplier provide?",
    answer: "Ask for a product specification and the packing and commercial documents needed for the order. If a project requires fire, emissions, acoustic or other tests, identify the method and destination so the supplier can verify which report applies to the exact construction. An inspection document should be agreed where needed.",
    check: "Keep the approved sample, written specification, quotation, invoice and packing list tied to the same product and order.",
  },
  {
    title: "How can I compare carpet quotations from different suppliers?",
    answer: "Use a single comparison sheet rather than comparing only USD per square metre. Align fiber, pile construction and weight, backing, dimensions, quantity, sample approval, testing, packing, Incoterm, lead time and freight inclusions. A lower number with different specifications is not a like-for-like offer.",
    check: "Request written clarification for every missing line and compare landed scope only after exclusions are visible.",
  },
  {
    title: "Is the cheapest carpet tile always the lowest-cost option?",
    answer: "No. Installed cost can also include material waste, adhesive or attachment, spare stock, cleaning, replacement labor, downtime and logistics. These costs vary by project, and no single tile has a guaranteed best return. Assess the options against the same expected traffic and operating plan.",
    check: "Separate purchase price from installation and facilities costs before selecting a shortlist.",
  },
  {
    title: "Should I request samples before placing a commercial carpet order?",
    answer: "For custom or large projects, a physical sample is generally valuable for checking color, texture, backing and construction. A stock swatch answers different questions from a custom strike-off. Approve the sample and record how it relates to the bulk specification before confirming production.",
    check: "Ask which sample type is available, what it represents, its cost and timing, and what written approval is required.",
  },
];

const questions: BlogSection[] = buyerQuestions.map(({ title, answer, check }) => ({
  title,
  paragraphs: [answer, `Buyer check: ${check}`],
}));

export const commercialCarpetSourcingDirectory: BlogPost = {
  slug: "commercial-carpet-sourcing-directory",
  title: "Commercial Carpet Sourcing Directory for B2B Buyers",
  subtitle: "A practical directory for contractors, distributors, hotel buyers and commercial flooring procurement teams, from product shortlist to written RFQ.",
  seoTitle: "Commercial Carpet Sourcing Directory: Products, Specifications & Buyer Questions | VCARPETS",
  description: "Compare commercial carpet products, buyer requirements, supplier checks and 15 common procurement questions before preparing a project RFQ.",
  date: "2026-09-29",
  dateModified: "2026-09-29",
  author: "VCARPETS Technical Team",
  category: "Buying Guide",
  image: "/images/about/quality-control-inspection.webp",
  imageAlt: "Illustrative commercial carpet sample and specification review",
  h1Image: "/images/about/quality-control-inspection.webp",
  h1ImageAlt: "Illustrative commercial carpet samples and specification workspace",
  h1ImageCaption: "Illustrative procurement-planning image; request physical samples for construction and color approval.",
  relatedProductIds: ["nylon-office-carpet-tile", "pp-bitumen-backed-office-carpet-tiles", "luxury-hotel-broadloom"],
  suggestedLinks: [
    { label: "Browse Procurement FAQ", href: "/faq" },
    { label: "Commercial Carpet Tiles", href: "/products/carpet-tiles" },
    { label: "Hotel Broadloom", href: "/products/wall-to-wall" },
    { label: "Public-Area Carpet", href: "/products/public-area" },
    { label: "Natural Sisal", href: "/products/public-area/natural-sisal-carpet" },
    { label: "Stair Carpet", href: "/products/public-area/commercial-stair-carpet-runner" },
    { label: "Carpet Tiles vs Broadloom", href: "/blog/carpet-tiles-vs-broadloom-commercial-projects-guide" },
    { label: "Backing Comparison", href: "/blog/commercial-carpet-tile-backing-comparison-guide" },
    { label: "Sample Approval", href: "/blog/commercial-carpet-sample-approval-checklist" },
    { label: "Project RFQ", href: "/contact?source=%2Fblog%2Fcommercial-carpet-sourcing-directory#quote-form" },
  ],
  sections: [
    {
      title: "Start with the buying decision, not a product label",
      paragraphs: ["A commercial carpet purchase often spans several project teams: the specifier chooses a construction, the contractor checks the site, the buyer compares quotations and the facilities team inherits maintenance. This directory connects those decisions. It is not a substitute for a product-specific technical data sheet or local code review.", "Describe the area, expected traffic and budget before choosing a tile, broadloom or specialist floor covering. Ask for a physical sample and applicable documents for the exact fiber and backing. Then compare suppliers on the same written specification."],
    },
    {
      title: "Commercial Carpet Product Directory",
      paragraphs: [],
      blocks: [{ type: "paragraph", text: "Each row is a starting point, not a claim that every product is suitable for every site. Follow the related product links below for available constructions and request confirmation of specifications before procurement." }, { type: "table", headers: ["Buyer need", "Carpet type", "Common application", "Confirm before RFQ"], rows: [
        ["Modular flooring", "Carpet tiles", "Office, school, commercial", "Fiber, backing, tile size, traffic"],
        ["Continuous hospitality finish", "Hotel broadloom", "Guest room, corridor, ballroom", "Construction, pattern, test method"],
        ["Custom graphic floor", "Printed carpet", "Hospitality or venue", "Artwork, repeat, sample feasibility"],
        ["Natural texture", "Sisal or sisal-look", "Controlled hospitality and boutique areas", "Fiber, moisture limits, edging"],
        ["Temporary application", "Event-flooring option", "Exhibition and temporary areas", "Availability, duration, roll size, installation"],
        ["Stair installation", "Stair carpet", "Hotel and public-building stairs", "Stair geometry, edge finish, local requirements"],
      ], note: "Availability and suitable construction are confirmed against each project; this table is not a catalogue of guaranteed stock." }],
    },
    {
      title: "The buyer-by-buyer directory",
      paragraphs: [],
      blocks: [
        { type: "subheading", title: "For flooring distributors" },
        { type: "paragraph", text: "Separate repeatable standard colors from project-only custom constructions. Ask for per-color MOQ, sample sets, carton quantity, packing and replenishment assumptions. Do not treat a project quotation as a promise of permanent stock. Share destination and the intended sales mix before discussing distributor supply." },
        { type: "subheading", title: "For flooring contractors" },
        { type: "paragraph", text: "Match product and backing to substrate condition, attachment method, direction plan and handover sequence. Quantity should be based on the floor plan, not an automatic waste percentage. Ask for documents matching the selected construction and plan spare material before installation begins." },
        { type: "subheading", title: "For hotel procurement teams" },
        { type: "paragraph", text: "Split guestrooms, corridors, ballrooms and lobbies into distinct zones. Compare carpet format, pattern continuity, rolling luggage, cleaning access and project document requirements. Approve the physical color and pattern reference and record the accepted construction before a bulk order." },
        { type: "subheading", title: "For architects and designers" },
        { type: "paragraph", text: "A beautiful rendering is not a production specification. Provide artwork, color reference, pattern repeat, dimensions and intended material; then discuss sampling feasibility, seam planning, fire-test needs and installer constraints. The final physical sample should be traceable to the written schedule." },
        { type: "subheading", title: "For project owners" },
        { type: "paragraph", text: "Look beyond the initial price to installation downtime, maintenance access, spare-stock planning and replacement costs. Ask each bidder to state the Incoterm, freight scope, packing, lead time and quote validity. A clear comparison reduces approval changes after order placement." },
      ],
    },
    {
      title: "How to move from a shortlist to a project RFQ",
      paragraphs: ["An early budget request may start with product type, area, destination and application. A complete project quote also needs construction and backing, dimensions, color or artwork, zone quantities, applicable tests, packing, sample approval and delivery schedule. Unknown inputs should remain open questions rather than invented specifications.", "Use the existing procurement FAQ to assemble the RFQ, then send it through the project form. Keep attachments such as floor plans out of a public URL; mention that the files are available and arrange exchange with the sales team after they reply. Available trade and delivery terms are confirmed by destination and project."],
    },
    ...questions,
    {
      title: "How Should a B2B Buyer Evaluate a Commercial Carpet Supplier?",
      paragraphs: [],
      blocks: [{ type: "paragraph", text: "Compare suppliers using the same written specification. A supplier should identify the quoted construction, sample approval reference, project-specific MOQ, lead time and Incoterm, rather than relying on an unqualified per-square-metre figure. Confirm that required test methods and reports correspond to the exact product and destination." }, { type: "paragraph", text: "Ask who records artwork approvals, packing assumptions and inspection requirements. Check the legal company identity and how disagreements between sample, order and delivered batch would be documented. An independent review of the product and order documents is more useful than an unverifiable claim to be the best supplier." }, { type: "list", items: [
        { text: "Application and construction clearly identified?" },
        { text: "Physical sample linked to bulk specification?" },
        { text: "MOQ, lead time, test method and document availability confirmed?" },
        { text: "Quote states packing, freight inclusion, Incoterm and validity?" },
        { text: "Custom design approvals and inspection requirements written down?" },
        { text: "Legal company identity and contact details clear?" },
      ] }],
    },
  ],
};
