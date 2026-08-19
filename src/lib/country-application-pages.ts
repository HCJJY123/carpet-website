export type CountryApplicationPage = {
  market: string;
  slug: string;
  path: string;
  language: string;
  hreflang: string;
  openGraphLocale: string;
  countryName: string;
  countryNameLocal: string;
  applicationName: string;
  title: string;
  metadataTitle: string;
  metadataDescription: string;
  directAnswer: string;
  marketNote: string;
  applicationRisks: string[];
  buyerChecklist: string[];
  decisionRows: { zone: string; issue: string; recommendation: string }[];
  quoteInputs: string[];
  localTerms: string[];
  heroProductId: string;
  productIds: string[];
  guideLinks: { href: string; label: string; description: string }[];
  faq: { question: string; answer: string }[];
};

function createPage(page: Omit<CountryApplicationPage, "path">): CountryApplicationPage {
  return { ...page, path: `/markets/${page.market}/${page.slug}` };
}

export const countryApplicationPages: CountryApplicationPage[] = [
  createPage({
    market: "ro",
    slug: "office-carpet-tiles",
    language: "en",
    hreflang: "en-RO",
    openGraphLocale: "en_RO",
    countryName: "Romania",
    countryNameLocal: "Romania",
    applicationName: "Office Carpet Tiles",
    title: "Office Carpet Tiles in Romania: Chair Wheels, Phased Replacement and Spare Stock",
    metadataTitle: "Office Carpet Tiles in Romania | Vishomecarpet",
    metadataDescription: "Plan office carpet tiles for Romania by chair-wheel wear, phased refurbishment, spare stock, samples and project quotation inputs.",
    directAnswer: "For Romania office projects, the most useful specification is the one that balances chair-wheel wear, phased replacement, spare tile stock and the actual maintenance route. Vishomecarpet can support project buyers with office carpet tile options, samples and technical records, while the final construction must still match the approved office fit-out scope.",
    marketNote: "Bucharest, Cluj-Napoca and Timișoara office projects often need phased quantities and a clear approval path before production.",
    applicationRisks: ["Chair-wheel traffic can wear a weak backing quickly.", "Phased refurbishment needs spare stock and matching batch control.", "A colour-only approval can miss maintenance and cleaning issues."],
    buyerChecklist: ["Office area and zone plan", "Chair-wheel traffic zones", "Sample and color approval", "Required technical documents", "Target delivery date"],
    decisionRows: [
      { zone: "Workstations", issue: "Rolling chair wear", recommendation: "Use a tile construction with stable backing and easy replacement planning." },
      { zone: "Corridors", issue: "Higher traffic and visible seams", recommendation: "Check pattern continuity and maintain spare pieces from the same batch." },
      { zone: "Reception / break areas", issue: "First impression and cleaning", recommendation: "Confirm the visual sample and the maintenance route before ordering." },
    ],
    quoteInputs: ["Country and city", "Office area by zone", "Sample requirement", "Technical document list", "Target installation date"],
    localTerms: ["office carpet tiles Romania", "commercial carpet Romania", "Romania office flooring supplier"],
    heroProductId: "nylon-office-carpet-tile",
    productIds: ["nylon-office-carpet-tile", "pp-bitumen-backed-office-carpet-tiles", "commercial-nylon-tiles"],
    guideLinks: [
      { href: "/blog/office-carpet-tiles-romania-chair-wheel-replacement-guide", label: "Romania office carpet guide", description: "Chair-wheel wear, spare stock and phased replacement planning." },
      { href: "/blog/carpet-tiles-vs-broadloom-commercial-projects-guide", label: "Carpet tiles vs broadloom", description: "Useful when buyers are deciding between modular and roll flooring." },
      { href: "/blog/commercial-carpet-tile-moq-sample-trial-project-guide", label: "Commercial carpet MOQ guide", description: "Use this when comparing sample, trial and project order levels." },
    ],
    faq: [
      { question: "What should Romanian office buyers send first?", answer: "Send the city, office area by zone, chair-wheel traffic level, sample requirement and target installation date so the quotation can match the real project scope." },
      { question: "Can office carpet tiles help with phased refurbishment?", answer: "Yes. Modular tiles are easier to replace in zones, but only if the buyer keeps batch and spare-stock planning in the project record." },
      { question: "Should the buyer approve color before technical details?", answer: "No. Color, backing, maintenance route and sample should be reviewed together because office use changes the value of each option." },
      { question: "What is the main quotation risk?", answer: "An area-only RFQ often misses chair-wheel zones, spare stock and delivery timing, which can lead to incomplete pricing." },
    ],
  }),
  createPage({
    market: "ca",
    slug: "office-carpet-tiles",
    language: "en",
    hreflang: "en-CA",
    openGraphLocale: "en_CA",
    countryName: "Canada",
    countryNameLocal: "Canada",
    applicationName: "Office Carpet Tiles",
    title: "Office Carpet Tiles in Canada: Snow, Salt, Chair Wheels and Replacement Planning",
    metadataTitle: "Office Carpet Tiles in Canada | Vishomecarpet",
    metadataDescription: "Plan office carpet tiles for Canada with snow and salt ingress, chair-wheel wear, phased renovation and sample approval checks.",
    directAnswer: "Canada office carpet projects should be specified around winter moisture, entrance contamination, rolling-chair wear and phased replacement. Vishomecarpet supports office carpet tile sourcing with verified product records, but the final choice should match the project zone plan and the quotation record.",
    marketNote: "Toronto, Vancouver, Calgary and Montreal offices often need entrance-to-workstation zoning and spare tile planning.",
    applicationRisks: ["Snow and salt can make entrance areas look worn faster.", "Chair-wheel zones need stable construction and reliable replacement stock.", "One quote without zones can hide real project quantity differences."],
    buyerChecklist: ["Entrance and workstation zones", "Snow / salt contamination points", "Sample approval", "Spare tile strategy", "Delivery and acclimation plan"],
    decisionRows: [
      { zone: "Entrances", issue: "Moisture and dirt tracking", recommendation: "Plan a durable entrance transition and confirm cleaning access." },
      { zone: "Workstations", issue: "Chair wheels and repeated load", recommendation: "Use a stable modular tile with matching spare stock." },
      { zone: "Phased renovation zones", issue: "Occupied office downtime", recommendation: "Confirm sequencing, sample approval and batch continuity before production." },
    ],
    quoteInputs: ["Country and city", "Area by zone", "Winter ingress risk", "Sample requirement", "Installation phase date"],
    localTerms: ["office carpet tiles Canada", "commercial carpet Canada", "Canada office flooring supplier"],
    heroProductId: "nylon-office-carpet-tile",
    productIds: ["nylon-office-carpet-tile", "pp-bitumen-backed-office-carpet-tiles", "ecocore-pe-backing-carpet-tiles"],
    guideLinks: [
      { href: "/blog/office-carpet-tiles-canada-phased-renovation-reddit-guide", label: "Canada office carpet guide", description: "Winter moisture, phased renovation and spare-stock planning." },
      { href: "/blog/carpet-tiles-vs-broadloom-commercial-projects-guide", label: "Carpet tiles vs broadloom", description: "Compare replacement risk and maintenance planning." },
      { href: "/blog/office-carpet-tiles-vs-hard-flooring-maintenance", label: "Carpet tiles vs hard flooring", description: "Useful when the buyer compares noise, comfort and maintenance." },
    ],
    faq: [
      { question: "What should Canadian buyers mention in the RFQ?", answer: "Send city, office area by zone, winter ingress risk, sample needs and target delivery date so the quote reflects the real office conditions." },
      { question: "Why does phased replacement matter in Canada?", answer: "Occupied offices often replace flooring zone by zone, so batch continuity and spare tiles matter as much as the initial order." },
      { question: "Should the same tile be used from entrance to workstation?", answer: "Not always. Entrance and workstation zones often face different wear and contamination patterns, so the specification should be checked by zone." },
      { question: "Can sample approval come before quantity planning?", answer: "The sample can come first, but the quotation should still include area, zones and delivery sequence so the final order is accurate." },
    ],
  }),
  createPage({
    market: "pl",
    slug: "office-carpet-tiles",
    language: "en",
    hreflang: "en-PL",
    openGraphLocale: "en_PL",
    countryName: "Poland",
    countryNameLocal: "Poland",
    applicationName: "Office Carpet Tiles",
    title: "Office Carpet Tiles in Poland: Phased Renovation, Chair Wheels and Spare Stock",
    metadataTitle: "Office Carpet Tiles in Poland | Vishomecarpet",
    metadataDescription: "Plan office carpet tiles for Poland with phased refurbishment, chair-wheel traffic, spare stock and project quotation inputs.",
    directAnswer: "For Poland office projects, buyers should compare modular replacement, chair-wheel wear, spare stock and phased installation before choosing a tile construction. Vishomecarpet provides office carpet tile options and product records, but the final specification should still match the actual project zones and delivery schedule.",
    marketNote: "Warsaw, Kraków and Wrocław office refurbishments often combine occupied workspaces with corridor and reception zones.",
    applicationRisks: ["Occupied offices need a phased replacement plan.", "Chair-wheel traffic can expose weak backing choices.", "Spare-stock planning must match the same batch or production record."],
    buyerChecklist: ["Area by zone", "Phase schedule", "Chair-wheel exposure", "Sample requirement", "Spare stock request"],
    decisionRows: [
      { zone: "Open offices", issue: "Rolling-chair wear", recommendation: "Choose a modular tile planned for replacement in later phases." },
      { zone: "Corridors", issue: "Traffic and maintenance", recommendation: "Use a pattern or color family that supports visual wear control." },
      { zone: "Reception zones", issue: "Approval and first impression", recommendation: "Confirm the approved sample, not just the headline color." },
    ],
    quoteInputs: ["Country and city", "Area per zone", "Phased schedule", "Sample request", "Target completion date"],
    localTerms: ["office carpet tiles Poland", "commercial carpet Poland", "Poland office refurbishment carpet"],
    heroProductId: "nylon-office-carpet-tile",
    productIds: ["nylon-office-carpet-tile", "commercial-nylon-tiles", "pp-bitumen-backed-office-carpet-tiles"],
    guideLinks: [
      { href: "/blog/office-carpet-tiles-vs-hard-flooring-maintenance", label: "Carpet tiles vs hard flooring", description: "Good for buying teams weighing noise, comfort and maintenance." },
      { href: "/blog/office-carpet-tiles-renovation-cycle-procurement-guide", label: "Office carpet renovation cycle", description: "Useful for phased procurement and project timing." },
      { href: "/blog/commercial-carpet-tile-moq-sample-trial-project-guide", label: "Commercial carpet MOQ guide", description: "Use this for sample and project order planning." },
    ],
    faq: [
      { question: "What should Polish office teams send first?", answer: "Send the city, area by zone, phase schedule, chair-wheel exposure and sample requirement to keep the quotation tied to the real project." },
      { question: "Why are spare tiles important?", answer: "Occupied offices often need later replacements, so the batch record and spare stock need to be planned at the same time." },
      { question: "Do corridors and open offices need the same specification?", answer: "Not necessarily. Corridors and open offices can carry different wear and maintenance expectations, so the answer should be zone-based." },
      { question: "Can the quote be based only on square metres?", answer: "It can start there, but a useful RFQ needs zones, phase order and timing so the supplier can provide a complete project quotation." },
    ],
  }),
  createPage({
    market: "sg",
    slug: "casino-carpet",
    language: "en",
    hreflang: "en-SG",
    openGraphLocale: "en_SG",
    countryName: "Singapore",
    countryNameLocal: "Singapore",
    applicationName: "Casino Carpet",
    title: "Casino Carpet in Singapore: Gaming Floors, VIP Rooms and Entertainment Zones",
    metadataTitle: "Casino Carpet in Singapore | Vishomecarpet",
    metadataDescription: "Plan casino carpet for Singapore gaming floors, VIP rooms and entertainment zones with samples, MOQ and project quotation inputs.",
    directAnswer: "For Singapore casino projects, the key questions are traffic, pattern approval, cleaning access, indoor humidity, replacement strategy and delivery staging. Vishomecarpet supplies casino carpet options with project records and samples, but the final purchase still depends on the gaming floor specification and written quotation.",
    marketNote: "Singapore projects often combine gaming floors, VIP rooms, hotel entertainment areas and lift lobbies in one procurement package.",
    applicationRisks: ["High chair and foot traffic can reveal weak backing choices.", "Pattern approval needs to happen before production.", "Cleaning access and phased delivery must be clear before quantity is fixed."],
    buyerChecklist: ["Gaming floor area", "VIP room or corridor zone", "Pattern approval", "Sample and MOQ", "Delivery floor and staging"],
    decisionRows: [
      { zone: "Gaming floor", issue: "Continuous traffic and visual continuity", recommendation: "Confirm pattern direction, sample approval and maintenance access before production." },
      { zone: "VIP rooms", issue: "Design consistency", recommendation: "Use the approved sample as the reference for colour and construction." },
      { zone: "Corridors and lobbies", issue: "Wear and cleaning pressure", recommendation: "Plan a matching backing and delivery sequence for the project phases." },
    ],
    quoteInputs: ["Singapore site address", "Delivery floor and access", "Project phase", "Sample date", "Target installation date"],
    localTerms: ["Singapore casino carpet", "casino carpet supplier Singapore", "gaming floor carpet Singapore"],
    heroProductId: "singapore-casino-carpet",
    productIds: ["singapore-casino-carpet", "3d-printed-banquet-hall-carpet", "glitter-hotel-corridor-broadloom-carpet"],
    guideLinks: [
      { href: "/blog/casino-carpet-singapore-gaming-floor-buying-guide", label: "Singapore casino carpet guide", description: "Gaming-floor priorities, traffic and quotation planning." },
      { href: "/blog/singapore-casino-carpet-procurement-checklist", label: "Singapore casino carpet checklist", description: "A RFQ checklist for buyers, contractors and distributors." },
      { href: "/solutions/hotel-hospitality", label: "Hotel & hospitality solution", description: "Useful for entertainment, lobby and hospitality-linked procurement." },
    ],
    faq: [
      { question: "What should Singapore casino buyers send first?", answer: "Send the site address, delivery floor, access details, project phase, sample date and target installation date so the quotation can be practical." },
      { question: "Why does pattern approval matter so much?", answer: "Casino flooring is highly visible, so pattern direction and sample approval should happen before production begins." },
      { question: "Can the same specification cover gaming floors and corridors?", answer: "Not always. The traffic pattern and maintenance pressure can differ, so the RFQ should separate the zones." },
      { question: "What is the biggest sourcing mistake?", answer: "Treating a casino carpet order as a simple area quote instead of a staged project with sample, MOQ, access and delivery planning." },
    ],
  }),
  createPage({
    market: "ph",
    slug: "hotel-carpet-philippines",
    language: "en",
    hreflang: "en-PH",
    openGraphLocale: "en_PH",
    countryName: "Philippines",
    countryNameLocal: "Philippines",
    applicationName: "Hotel Carpet",
    title: "Hotel Carpet in the Philippines: Guestrooms, Corridors and Service Areas",
    metadataTitle: "Hotel Carpet in the Philippines | Vishomecarpet",
    metadataDescription: "Plan hotel carpet for the Philippines with guestroom, corridor and service-area choices, sample approval, MOQ, lead time and RFQ inputs.",
    directAnswer: "For Philippines hotel projects, the best starting point is zone-based planning. Guestrooms, corridors and service areas often need different wear, cleaning and replacement expectations. Vishomecarpet can support hotel carpet options, samples and project quotation inputs, while the final specification should still follow the approved room schedule and maintenance route.",
    marketNote: "Manila, Cebu and Davao hospitality projects often combine guestroom, corridor and service-area quantities in one procurement package.",
    applicationRisks: ["Humidity and cleaning pressure can affect backing and maintenance choices.", "Corridor zones usually wear faster than guestrooms.", "Pattern and colour approval should be locked before production."],
    buyerChecklist: ["Room schedule and corridor area", "Guestroom and corridor traffic level", "Sample and colour approval", "Required document list", "Target installation date"],
    decisionRows: [
      { zone: "Guestrooms", issue: "Comfort and design consistency", recommendation: "Confirm the approved sample, room schedule and replacement allowance before ordering." },
      { zone: "Corridors", issue: "Foot traffic, stains and noise", recommendation: "Use a corridor-focused construction and check cleaning access by floor." },
      { zone: "Service areas", issue: "Utility traffic and faster wear", recommendation: "Separate service-area quantities from decorative guest-facing zones in the RFQ." },
    ],
    quoteInputs: ["Philippines city and hotel zone", "Room schedule or floor plan", "Sample requirement", "Document list", "Target installation date"],
    localTerms: ["hotel carpet Philippines", "hospitality carpet Philippines", "Philippines hotel flooring supplier"],
    heroProductId: "custom-luxury-hotel-room-carpet",
    productIds: ["custom-luxury-hotel-room-carpet", "glitter-hotel-corridor-broadloom-carpet", "luxury-hotel-broadloom"],
    guideLinks: [
      { href: "/blog/hotel-carpet-philippines-pattern-stain-maintenance-guide", label: "Philippines hotel carpet guide", description: "Pattern, stain and maintenance planning for humid hotel environments." },
      { href: "/blog/hotel-corridor-carpet-design-noise-stain-maintenance", label: "Hotel corridor carpet guide", description: "Noise, stain hiding and traffic questions for corridor projects." },
      { href: "/blog/hotel-carpet-supplier-checklist-project-order-guide", label: "Hotel carpet supplier checklist", description: "Use this before requesting samples and project quotations." },
    ],
    faq: [
      { question: "What should a Philippines hotel buyer send first?", answer: "Send the city, room schedule, corridor area, sample requirement, document list and target installation date so the quote can be prepared by zone." },
      { question: "Should guestrooms and corridors use the same carpet?", answer: "Not always. Corridors usually carry higher traffic and cleaning pressure, so they should be checked separately from guestrooms." },
      { question: "Why is sample approval important?", answer: "Hotel carpet is visible across repeated rooms and corridors, so colour, pattern and construction should be approved before production." },
      { question: "Can Vishomecarpet confirm local installation rules?", answer: "No. Vishomecarpet can support product and quotation information, while local installation and project compliance should be confirmed by the project team." },
    ],
  }),
  createPage({
    market: "au",
    slug: "hotel-carpet-australia",
    language: "en",
    hreflang: "en-AU",
    openGraphLocale: "en_AU",
    countryName: "Australia",
    countryNameLocal: "Australia",
    applicationName: "Hotel Carpet",
    title: "Hotel Carpet in Australia: Guestrooms, Corridors and Refurbishment Cycles",
    metadataTitle: "Hotel Carpet in Australia | Vishomecarpet",
    metadataDescription: "Plan hotel carpet for Australia hospitality refurbishment with acoustic comfort, corridor wear, samples, MOQ and project quotation inputs.",
    directAnswer: "For Australia hotel refurbishment, buyers should separate guestroom comfort, corridor wear, acoustic expectations, cleaning access and delivery timing before comparing carpet options. Vishomecarpet can provide hospitality carpet options and samples for project review, but the final specification should match the approved design brief and local project requirements.",
    marketNote: "Sydney, Melbourne, Brisbane and resort refurbishment projects often need clear phasing so rooms can return to service without confusion over batches or spare material.",
    applicationRisks: ["A room-only area estimate can miss corridor and spare-stock needs.", "Acoustic comfort and cleaning access should be reviewed before pattern approval.", "Refurbishment phases need batch records and delivery timing."],
    buyerChecklist: ["Hotel area by zone", "Refurbishment phase plan", "Acoustic or comfort target", "Sample and colour approval", "Required delivery window"],
    decisionRows: [
      { zone: "Guestrooms", issue: "Comfort, quietness and design repeat", recommendation: "Review sample texture, pattern scale and replacement allowance with the room schedule." },
      { zone: "Corridors", issue: "Rolling luggage, stains and noise", recommendation: "Use a corridor-specific review for wear, stain hiding and acoustic comfort." },
      { zone: "Refurbishment phases", issue: "Occupied hotel operation", recommendation: "Confirm phases, batch control and spare material before the purchase order." },
    ],
    quoteInputs: ["Australia city", "Zone quantity and floor plan", "Refurbishment phase schedule", "Sample requirement", "Target delivery window"],
    localTerms: ["hotel carpet Australia", "hospitality carpet Australia", "Australia hotel flooring supplier"],
    heroProductId: "luxury-hotel-broadloom",
    productIds: ["luxury-hotel-broadloom", "custom-luxury-hotel-room-carpet", "glitter-hotel-corridor-broadloom-carpet"],
    guideLinks: [
      { href: "/blog/hotel-carpet-renovation-hard-flooring-decision-guide", label: "Hotel renovation flooring guide", description: "Use this when deciding carpet versus hard flooring for refurbishments." },
      { href: "/blog/hotel-corridor-carpet-design-noise-stain-maintenance", label: "Hotel corridor carpet guide", description: "Noise, stain and maintenance points for corridor planning." },
      { href: "/blog/hotel-carpet-supplier-checklist-project-order-guide", label: "Hotel carpet supplier checklist", description: "A buyer checklist before sample and quotation requests." },
    ],
    faq: [
      { question: "What should Australian hotel buyers confirm first?", answer: "Confirm the city, hotel zones, room schedule, refurbishment phases, sample requirement and delivery window before asking for a full quotation." },
      { question: "Why separate guestrooms and corridors?", answer: "Guestrooms focus more on comfort and design consistency, while corridors usually need stronger wear and stain-hiding planning." },
      { question: "How should phased refurbishment be handled?", answer: "Record each phase, batch, spare allowance and delivery timing so replacement material does not become difficult to match later." },
      { question: "Does this page promise local stock in Australia?", answer: "No. It is a sourcing and planning page. Current availability, shipping and documents must be confirmed by quotation." },
    ],
  }),
  createPage({
    market: "mx",
    slug: "hotel-corridor-carpet",
    language: "en",
    hreflang: "en-MX",
    openGraphLocale: "en_MX",
    countryName: "Mexico",
    countryNameLocal: "México",
    applicationName: "Hotel Corridor Carpet",
    title: "Hotel Corridor Carpet in Mexico: Noise Control, Stain Hiding and Phased Refurbishment",
    metadataTitle: "Hotel Corridor Carpet in Mexico | Vishomecarpet",
    metadataDescription: "Plan hotel corridor carpet in Mexico with noise control, stain-hiding patterns, sample approval, MOQ and project RFQ inputs.",
    directAnswer: "For Mexico hotel corridor projects, the key decision is not only the pattern. Buyers should confirm corridor traffic, noise comfort, stain-hiding design, elevator lobby wear, spare material and refurbishment phasing. Vishomecarpet can support corridor carpet options and samples, while final installation and compliance should be checked against the project brief.",
    marketNote: "Mexico City, Monterrey, Guadalajara and resort hotel projects can have different corridor traffic and refurbishment schedules, so RFQs should separate zones.",
    applicationRisks: ["Busy corridors reveal poor stain-hiding and weak seams quickly.", "Elevator lobbies can need a stronger wear plan than guest corridors.", "Phased refurbishment needs batch and spare-material control."],
    buyerChecklist: ["Corridor length and width", "Elevator lobby area", "Pattern and sample approval", "Refurbishment phase plan", "Spare material requirement"],
    decisionRows: [
      { zone: "Guest corridors", issue: "Noise, luggage traffic and stains", recommendation: "Choose a corridor carpet with suitable visual pattern and maintenance planning." },
      { zone: "Elevator lobbies", issue: "Concentrated foot traffic", recommendation: "Check wear expectations and spare pieces separately from corridor runs." },
      { zone: "Refurbishment phases", issue: "Batch matching", recommendation: "Record phase quantities and spare material before production." },
    ],
    quoteInputs: ["Mexico city and hotel type", "Corridor and lobby areas", "Pattern sample requirement", "Phase schedule", "Target delivery date"],
    localTerms: ["hotel corridor carpet Mexico", "Mexico hotel carpet supplier", "hospitality corridor carpet Mexico"],
    heroProductId: "glitter-hotel-corridor-broadloom-carpet",
    productIds: ["glitter-hotel-corridor-broadloom-carpet", "3d-printed-hotel-carpet", "luxury-hotel-broadloom"],
    guideLinks: [
      { href: "/blog/hotel-corridor-carpet-in-mexico", label: "Mexico hotel corridor guide", description: "Country-specific corridor procurement and maintenance planning." },
      { href: "/blog/hotel-corridor-carpet-stain-hiding-procurement-guide", label: "Stain-hiding corridor guide", description: "Use this for pattern, cleaning and lifecycle risk checks." },
      { href: "/blog/hotel-corridor-carpet-design-noise-stain-maintenance", label: "Hotel corridor carpet design guide", description: "Noise, stains and maintenance questions for corridor carpet." },
    ],
    faq: [
      { question: "What should Mexico hotel corridor buyers send first?", answer: "Send the city, corridor area, elevator lobby area, sample requirement, phase schedule and target delivery date." },
      { question: "Why is stain hiding important in corridors?", answer: "Corridors carry luggage, cleaning carts and repeated foot traffic, so visible stains can affect guest perception quickly." },
      { question: "Should elevator lobbies be quoted separately?", answer: "Yes. Elevator lobbies often carry more concentrated wear and should be separated in the RFQ." },
      { question: "Can one sample confirm the full project?", answer: "A sample is essential, but the buyer should also confirm area, phase, spare material and document needs before ordering." },
    ],
  }),
  createPage({
    market: "kz",
    slug: "gold-mining-carpet-kazakhstan",
    language: "en",
    hreflang: "en-KZ",
    openGraphLocale: "en_KZ",
    countryName: "Kazakhstan",
    countryNameLocal: "Қазақстан",
    applicationName: "Gold Mining Carpet",
    title: "Gold Mining Carpet in Kazakhstan: Sluice Recovery, Fine Gold Capture and Mat Planning",
    metadataTitle: "Gold Mining Carpet in Kazakhstan | Vishomecarpet",
    metadataDescription: "Plan gold mining carpet for Kazakhstan sluice recovery with mat size, fine-gold capture, sample checks, packing and quotation inputs.",
    directAnswer: "For Kazakhstan gold recovery projects, buyers should compare sluice width, feed size, water flow, fine-gold retention target, cleanup method and packing needs before ordering. Vishomecarpet can support gold mining carpet mat sourcing and technical discussions, while the final choice must match the buyer's sluice or wash-plant setup.",
    marketNote: "Kazakhstan mining and prospecting projects often need clear mat sizing, replacement planning and packing data before shipment is arranged.",
    applicationRisks: ["The wrong mat structure can miss fine-gold recovery targets.", "Poor cleanup access can slow site operation.", "Packing size and replacement quantity should be confirmed before shipping."],
    buyerChecklist: ["Sluice width and length", "Feed size and water flow", "Fine-gold recovery target", "Sample or trial order need", "Packing and destination details"],
    decisionRows: [
      { zone: "Primary sluice", issue: "Material flow and capture stability", recommendation: "Match mat structure to sluice size, feed and water conditions." },
      { zone: "Fine recovery section", issue: "Small particle retention", recommendation: "Review vortex or miner-moss style performance needs before ordering." },
      { zone: "Cleanup and replacement", issue: "Downtime and spare material", recommendation: "Plan cleaning frequency, spare length and packing quantity together." },
    ],
    quoteInputs: ["Kazakhstan destination", "Sluice width and required mat length", "Expected feed and recovery target", "Sample or trial order request", "Packing and shipping terms"],
    localTerms: ["gold mining carpet Kazakhstan", "sluice carpet Kazakhstan", "gold recovery mat supplier"],
    heroProductId: "gold-mining-carpet-mat",
    productIds: ["gold-mining-carpet-mat"],
    guideLinks: [
      { href: "/products/public-area/gold-mining-carpet-mat", label: "Gold mining carpet mat", description: "Main product page for mat features, MOQ tiers and quotation path." },
      { href: "/blog/gold-mining-carpet-kazakhstan-fine-gold-recovery-guide", label: "Kazakhstan gold mining carpet guide", description: "Country-focused planning for fine gold recovery and mat selection." },
      { href: "/blog/sluice-carpet-miners-moss-vortex-mat-gold-recovery-guide", label: "Sluice carpet technical guide", description: "Comparison notes for sluice carpet, miners moss and vortex mat questions." },
    ],
    faq: [
      { question: "What should a Kazakhstan gold mining buyer send first?", answer: "Send the destination, sluice width, required mat length, feed condition, recovery target, sample requirement and shipping terms." },
      { question: "Is gold mining carpet chosen only by price?", answer: "No. Mat structure, fine-gold retention, cleanup access, replacement planning and shipping size can affect the real project cost." },
      { question: "Can Vishomecarpet decide the final sluice setup?", answer: "No. Vishomecarpet can support product sourcing and technical discussion, while the buyer should confirm the final setup against their own equipment and process." },
      { question: "Why mention packing in the RFQ?", answer: "Packing dimensions and roll length affect shipment planning, replacement quantity and receiving arrangements at the destination." },
    ],
  }),
];

export const countryApplicationPageMap = Object.fromEntries(
  countryApplicationPages.map((page) => [`${page.market}/${page.slug}`, page] as const),
) as Record<string, CountryApplicationPage>;
