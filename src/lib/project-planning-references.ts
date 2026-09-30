import { contentGrowthAssets } from "@/lib/content-growth-assets";

export const projectPlanningReferences = [
  {
    slug: "hotel-wall-to-wall-carpet-project-oceania",
    title: "Hotel Wall-to-Wall Carpet Planning Reference — Oceania",
    description: "Plan hotel broadloom procurement in Oceania: corridor and guestroom zoning, pattern layout, sample approval, documentation and staged delivery.",
    image: contentGrowthAssets.C01,
    buyer: "Hotel developers, hospitality contractors and specification buyers planning an Oceania delivery destination.",
    context: "Consider a hotel refurbishment in which corridors must remain accessible while guestrooms are released in stages. This is a hypothetical procurement scenario, not a record of a supplied hotel or an installed project. Oceania describes the market-planning scope, not a verified project location.",
    requirements: ["Separate the area schedule into corridors, guestrooms, lift lobbies and public spaces.", "Provide dimensioned plans with turns, thresholds, transitions and proposed installation stages.", "Define pattern direction, repeat, color reference and cleaning arrangements by zone.", "State the destination, applicable project standards and target site-delivery milestone."],
    selection: "Compare wall-to-wall construction where a continuous design and room-by-room roll plan are important. Review a modular alternative if individual replacement or subfloor access is a dominant requirement. Do not infer suitability for service trolleys, fire performance or acoustics from a patterned scene; assess the actual quoted construction and required evidence.",
    specification: "Ask the designer and installer to review the roll width, pattern repeat, seam positions, pile direction and floor build-up together. Corridor turns and door recesses can change cutting requirements. Separate installed area from ordered area; have the installer calculate cuts and any agreed spare material instead of applying a universal waste percentage.",
    approval: "Agree which physical sample is being reviewed: material, color or a custom pattern strike-off where feasible. Compare it under the intended lighting and retain an identified reference. Record the construction, backing, approved color reference and agreed exceptions. An illustration or digital artwork alone cannot approve the material supplied.",
    production: "Plan backward from site access and delivery: specification agreement, artwork review, physical sample approval, order confirmation, production planning and transport. Confirm each interval in the quotation. This reference does not publish a production duration, guaranteed deadline or available capacity.",
    shipping: "Discuss roll identification, room or zone allocation, protective wrapping, shipment sequencing and receiving access. Ask for the proposed packing dimensions and weights before arranging transport. Destination requirements and unloading conditions need review; no local installation service or fixed freight term is implied.",
    lessons: ["A corridor and a guestroom can share a visual palette without sharing one technical specification.", "A pattern approval must also consider the roll layout and proposed seams.", "Review documents for the exact construction being quoted, not a visually similar sample.", "Clarify who calculates cutting allowances and who retains replacement material."],
    links: [
      { label: "Hotel carpet selection by guest area", href: "/hotel-carpet" },
      { label: "Hotel corridor broadloom product", href: "/products/wall-to-wall/glitter-hotel-corridor-broadloom-carpet" },
      { label: "Custom printed hotel carpet", href: "/products/wall-to-wall/3d-printed-hotel-carpet" },
      { label: "Hotel carpet procurement documents checklist", href: "/blog/hotel-carpet-procurement-documents-checklist" },
      { label: "Carpet tiles versus broadloom", href: "/blog/carpet-tiles-vs-broadloom-commercial-projects-guide" },
      { label: "Sample approval checklist", href: "/blog/commercial-carpet-sample-approval-checklist" },
    ],
  },
  {
    slug: "office-carpet-tile-renovation",
    title: "Office Carpet Tile Renovation Planning Reference",
    description: "Plan a phased commercial office carpet tile renovation: fiber, backing, subfloor review, sample layout, spare stock and a project-ready RFQ.",
    image: contentGrowthAssets.C03,
    buyer: "Office renovation contractors, facility teams and commercial flooring procurement companies.",
    context: "Consider an occupied office that needs carpet replacement by work zone while some desks remain in use. This is a typical procurement scenario, not a completed VCARPETS contract. No client, installation date, location or supplied quantity is claimed.",
    requirements: ["Identify circulation routes, desk zones, meeting rooms and heavier service areas separately.", "Record furniture movement, rolling-chair use, access-floor needs and working-hour restrictions.", "Share the substrate condition and the installer's proposed adhesive or fixing system.", "Confirm the area by phase, color reference, spare-stock strategy and receiving schedule."],
    selection: "Modular carpet tiles are worth reviewing when local replacement and phased access matter. Compare nylon and PP options against the actual use conditions; include a polyester proposal only where a supplier can document a suitable commercial construction. Material names and 50x50 dimensions alone do not establish traffic suitability, chair-castor performance or emissions compliance.",
    specification: "Agree the backing and installed floor build-up with the installer before approval. Review subfloor moisture, level and existing adhesive residues using the selected system's instructions. Check transitions and access panels. Any chair-use, fire or emissions requirement needs evidence for the exact tile and installation arrangement being proposed.",
    approval: "Review a physical tile sample, face direction and the intended monolithic, quarter-turn or other approved layout. Compare adjacent modules under office lighting and establish the identified retained sample. Agree acceptable color variation, batch allocation and spare tiles before ordering; a computer-rendered office cannot settle these decisions.",
    production: "Divide the schedule into sample review, specification freeze, order confirmation, batch allocation and delivery by phase. Ask whether the proposed order is an existing construction or a customized run. Confirm MOQ and lead time in writing; this reference does not assume stock availability or a fixed dispatch date.",
    shipping: "Request carton quantities, labeling, proposed pallet dimensions and gross weights for the receiving plan. Allocate material by phase without mixing approved color references or unidentified batches. Confirm storage and handling instructions for the selected construction, and coordinate site access with the contractor rather than promising installation services.",
    lessons: ["A phased renovation plan should identify the material and batch for each zone.", "The lowest tile price may omit substrate preparation, furniture handling or spare stock.", "Approve the installation direction as well as the individual tile sample.", "Confirm replacement access and retained spares before the initial purchase."],
    links: [
      { label: "Commercial nylon office carpet tiles", href: "/products/carpet-tiles/nylon-office-carpet-tile" },
      { label: "50x50 nylon and PP office carpet tiles", href: "/products/carpet-tiles/50x50-nylon-pp-office-carpet-tiles" },
      { label: "Fiber comparison for commercial carpet tiles", href: "/blog/nylon-vs-polyester-vs-polypropylene-carpet-tiles" },
      { label: "Carpet tile backing comparison", href: "/blog/commercial-carpet-tile-backing-comparison-guide" },
      { label: "Specification checklist", href: "/blog/commercial-carpet-tile-specification-checklist-b2b-buyers" },
      { label: "Commercial carpet tile RFQ checklist", href: "/blog/commercial-carpet-tile-rfq-checklist-b2b-buyers" },
    ],
  },
] as const;

export type ProjectPlanningData = (typeof projectPlanningReferences)[number];
