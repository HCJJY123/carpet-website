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
      { href: "/blog/commercial-carpet-tile-moq-guide", label: "Commercial carpet MOQ guide", description: "Use this when comparing sample, trial and project order levels." },
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
      { href: "/blog/office-carpet-tiles-vs-hard-flooring-guide", label: "Carpet tiles vs hard flooring", description: "Useful when the buyer compares noise, comfort and maintenance." },
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
      { href: "/blog/office-carpet-tiles-vs-hard-flooring-guide", label: "Carpet tiles vs hard flooring", description: "Good for buying teams weighing noise, comfort and maintenance." },
      { href: "/blog/office-carpet-tiles-renovation-cycle-procurement-guide", label: "Office carpet renovation cycle", description: "Useful for phased procurement and project timing." },
      { href: "/blog/commercial-carpet-tile-moq-guide", label: "Commercial carpet MOQ guide", description: "Use this for sample and project order planning." },
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
];

export const countryApplicationPageMap = Object.fromEntries(
  countryApplicationPages.map((page) => [`${page.market}/${page.slug}`, page] as const),
) as Record<string, CountryApplicationPage>;

