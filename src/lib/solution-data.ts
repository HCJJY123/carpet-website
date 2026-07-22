export interface SolutionPageData {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  image: string;
  buyerIntent: string;
  painPoints: string[];
  recommendedProducts: { name: string; href: string; fit: string }[];
  specs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
}

export const solutionPages: SolutionPageData[] = [
  {
    slug: "hotel-carpet-manufacturer",
    title: "Hotel Carpet Manufacturer",
    seoTitle: "Hotel Carpet Manufacturer | Custom Broadloom & Carpet Tiles | VISHOME",
    description:
      "China hotel carpet manufacturer for guestrooms, corridors, lobbies, ballrooms, banquet halls, and hospitality renovation projects.",
    image: "/images/3d-printed-hotel-carpet-corridor.webp",
    buyerIntent: "For hotel owners, interior designers, contractors, and procurement teams comparing custom hotel carpet suppliers.",
    painPoints: [
      "Custom patterns and color matching for different hotel zones.",
      "Fire-rating documents and samples before tender submission.",
      "Stable production schedule for opening or renovation deadlines.",
    ],
    recommendedProducts: [
      { name: "3D HD Printed Nylon Hotel Carpet", href: "/products/wall-to-wall/3d-printed-hotel-carpet", fit: "Fast custom pattern and lower MOQ" },
      { name: "Custom 3D Printed Banquet Hall Carpet", href: "/products/wall-to-wall/3d-printed-banquet-hall-carpet", fit: "Ballrooms, banquet halls, and luxury hospitality spaces" },
      { name: "Luxury Hotel Broadloom", href: "/products/wall-to-wall/luxury-hotel-broadloom", fit: "Premium guest-facing hotel areas" },
    ],
    specs: [
      { label: "MOQ", value: "200-500 SQM by construction" },
      { label: "Width", value: "4m roll / project custom" },
      { label: "Lead Time", value: "15-35 days after sample approval" },
      { label: "Documents", value: "TDS, fire rating reference, packing list, invoice" },
    ],
    faqs: [
      { q: "Can you make custom hotel carpet patterns?", a: "Yes. VISHOME can develop patterns from moodboards, CAD files, brand colors, or reference samples before bulk production." },
      { q: "Do you support hotel corridor and guestroom samples?", a: "Yes. Strike-off samples, color references, and construction samples can be shipped internationally." },
      { q: "What should I send for a hotel carpet quote?", a: "Send floor area, hotel zone, pattern reference, destination country, target budget, fire-rating need, and opening schedule." },
    ],
  },
  {
    slug: "office-carpet-tiles-supplier",
    title: "Office Carpet Tiles Supplier",
    seoTitle: "Office Carpet Tiles Supplier | 50x50 Modular Carpet Tiles | VISHOME",
    description:
      "Office carpet tiles supplier for corporate offices, coworking spaces, raised floors, meeting rooms, and rolling-chair traffic areas.",
    image: "/images/products/nylon-office-carpet-tile/01-hero-commercial-office.webp",
    buyerIntent: "For office fit-out contractors, facility managers, distributors, and commercial flooring buyers.",
    painPoints: [
      "50x50 modular flooring that is easy to replace after local damage.",
      "Backing guidance for dimensional stability and acoustic comfort.",
      "Clear carton packing, MOQ, and sample shipment before order.",
    ],
    recommendedProducts: [
      { name: "Nylon 50x50 Commercial Office Carpet Tile", href: "/products/carpet-tiles/nylon-office-carpet-tile", fit: "Heavy office traffic and appearance retention" },
      { name: "EcoCore PVC-Free PE Backing Carpet Tiles", href: "/products/carpet-tiles/ecocore-pe-backing-carpet-tiles", fit: "Green building and PVC-free projects" },
      { name: "50x50 Nylon PP Office Carpet Tiles", href: "/products/carpet-tiles/50x50-nylon-pp-office-carpet-tiles", fit: "Cost-controlled office and corridor flooring" },
    ],
    specs: [
      { label: "Size", value: "50x50 cm" },
      { label: "MOQ", value: "200-500 SQM" },
      { label: "Backing", value: "Bitumen, PVC, PE, or cushion options" },
      { label: "Install", value: "Quarter-turn, monolithic, ashlar, or brick" },
    ],
    faqs: [
      { q: "Which backing is best for office carpet tiles?", a: "PVC and bitumen offer strong dimensional stability; PVC-free PE is better for projects with sustainability requirements." },
      { q: "How many square meters are in one carton?", a: "Carton quantity depends on thickness and backing. VISHOME confirms carton packing after the exact construction is selected." },
      { q: "Can you ship office carpet tile samples overseas?", a: "Yes. Samples can be shipped to the USA, UK, Australia, Europe, Middle East, and Asia." },
    ],
  },
  {
    slug: "airport-carpet-flooring",
    title: "Airport Carpet Flooring",
    seoTitle: "Airport Carpet Flooring | Heavy-Traffic Public Area Carpet | VISHOME",
    description:
      "Airport carpet flooring for terminals, lounges, corridors, waiting areas, and high-footfall transport interiors.",
    image: "/images/public-area-carpets.webp",
    buyerIntent: "For airport contractors, transport facility buyers, and public-area flooring specifiers.",
    painPoints: [
      "Wheel resistance for luggage and transport carts.",
      "Heavy-traffic durability with practical maintenance.",
      "Fire-rating and technical files for public-building approval.",
    ],
    recommendedProducts: [
      { name: "High-Traffic Public Area Corridor Carpet", href: "/products/public-area/public-area-heavy-duty", fit: "Airport terminals and circulation corridors" },
      { name: "Public Area Carpets", href: "/products/public-area", fit: "Heavy-footfall public facilities" },
      { name: "Nylon Commercial Carpet Tiles", href: "/products/carpet-tiles/nylon-office-carpet-tile", fit: "Replaceable lounge and office zones" },
    ],
    specs: [
      { label: "Traffic Class", value: "Class 33 heavy commercial recommended" },
      { label: "Fire", value: "ASTM E648 Class I / Bfl-s1 by construction" },
      { label: "Backing", value: "Stable backing for wheel traffic" },
      { label: "Cleaning", value: "Routine vacuuming and periodic extraction" },
    ],
    faqs: [
      { q: "What carpet is suitable for airport flooring?", a: "Heavy commercial nylon broadloom or modular carpet with stable backing is usually recommended for airport footfall and luggage-wheel traffic." },
      { q: "Can you provide public-area technical documents?", a: "Yes. VISHOME can prepare technical data, packing details, and fire-rating references by selected construction." },
      { q: "Can airport carpet be delivered in phases?", a: "Yes. Production and shipment can be arranged by terminal area, floor, or renovation phase." },
    ],
  },
  {
    slug: "casino-carpet-supplier",
    title: "Casino Carpet Supplier",
    seoTitle: "Casino Carpet Supplier | Custom Printed & Broadloom Carpet | VISHOME",
    description:
      "Casino carpet supplier for gaming floors, hotel corridors, VIP rooms, restaurants, and entertainment public areas.",
    image: "/images/products/3d-printed-banquet-carpet/02-banquet-hall.webp",
    buyerIntent: "For casino developers, hospitality designers, and contractors needing custom pattern carpet with commercial durability.",
    painPoints: [
      "Dramatic custom designs without losing durability.",
      "Strong stain resistance and patterns that hide heavy use.",
      "Strike-off samples before final design approval.",
    ],
    recommendedProducts: [
      { name: "Custom 3D Printed Banquet Hall Carpet", href: "/products/wall-to-wall/3d-printed-banquet-hall-carpet", fit: "Custom casino and entertainment patterns" },
      { name: "3D HD Printed Nylon Hotel Carpet", href: "/products/wall-to-wall/3d-printed-hotel-carpet", fit: "Fast design iteration and corridor use" },
      { name: "Glitter Hotel Corridor Broadloom Carpet", href: "/products/wall-to-wall/glitter-hotel-corridor-broadloom-carpet", fit: "Luxury corridor and public-area effects" },
    ],
    specs: [
      { label: "Design", value: "Custom print or patterned broadloom" },
      { label: "MOQ", value: "Project-based from selected construction" },
      { label: "Sample", value: "Strike-off before production" },
      { label: "Use", value: "Gaming floor, corridor, VIP, public area" },
    ],
    faqs: [
      { q: "Can you make custom casino carpet designs?", a: "Yes. Digital printing and custom broadloom options can be developed from design files or reference patterns." },
      { q: "Can I approve a sample first?", a: "Yes. Strike-off or product samples can be prepared before bulk production." },
      { q: "What details are needed for a casino carpet quote?", a: "Send area, design file, application zone, destination country, fire-rating need, and opening schedule." },
    ],
  },
  {
    slug: "retail-store-carpet-flooring",
    title: "Retail Store Carpet Flooring",
    seoTitle: "Retail Store Carpet Flooring | Commercial Carpet Tiles & Broadloom | VISHOME",
    description:
      "Retail store carpet flooring for boutiques, showrooms, corridors, brand zones, fitting rooms, and commercial shopping interiors.",
    image: "/images/about/custom-design-support.webp",
    buyerIntent: "For retail chains, boutique owners, store designers, and contractors comparing commercial carpet options.",
    painPoints: [
      "Flooring that supports brand atmosphere and repeated maintenance.",
      "Replaceable areas for high-traffic entrances and checkout zones.",
      "Color and pattern options that match visual merchandising.",
    ],
    recommendedProducts: [
      { name: "Gray Line Nylon Carpet Tiles", href: "/products/carpet-tiles/gray-line-nylon-office-hotel-carpet-tiles", fit: "Retail feature zones and easy replacement" },
      { name: "Natural Sisal Commercial Carpet", href: "/products/public-area/natural-sisal-carpet", fit: "Premium boutiques and natural interiors" },
      { name: "Commercial Carpet Tiles", href: "/products/carpet-tiles", fit: "Multi-store rollout and maintenance" },
    ],
    specs: [
      { label: "Best Formats", value: "Carpet tiles or patterned broadloom" },
      { label: "MOQ", value: "Project-based by product type" },
      { label: "Color", value: "Custom color and pattern support" },
      { label: "Delivery", value: "Store opening schedule support" },
    ],
    faqs: [
      { q: "Are carpet tiles good for retail stores?", a: "Yes. Carpet tiles are practical for stores because damaged areas can be replaced quickly and layout changes are easier." },
      { q: "Can carpet match a retail brand color?", a: "Yes. VISHOME can support color matching and custom pattern development depending on MOQ and construction." },
      { q: "Can you support multiple store rollouts?", a: "Yes. Project packing and delivery can be planned by store, phase, or country." },
    ],
  },
];

export function getSolutionPage(slug: string) {
  return solutionPages.find((page) => page.slug === slug);
}
