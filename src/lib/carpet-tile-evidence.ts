import type { Product } from "./data";
import type { ComparisonOption } from "./product-evidence-copy";

type TileProfile = { name: string; construction: string; application: string };

// Own specifications remain catalog references. Competitor data belong only to
// the named product and are not evidence for VCARPETS performance or supply.
const summaries: Record<string, string> = {
  "staggered-block-pp-office-carpet-tiles": "Review this gray linear-block carpet tile design for office layouts. The supplier reference specifies PP, PVC backing and a nominal 50×50 cm format; confirm the offered construction and sample before ordering. FOB price: Request a project quotation. Port: tianjingang.",
  "balance-polypropylene-carpet-tiles": "Balance is a 50×50 cm polypropylene loop-pile carpet tile with PVC backing for office layout planning. The catalog lists 20 tiles per carton, equivalent to 5 m² before cutting. Approve the sample, fixing method and project documents before ordering FOB Tianjin Port.",
  "gradient-accent-office-carpet-tiles": "This 50×50 cm office carpet tile has polypropylene loop pile, bitumen backing and a catalog pile weight of 420 g/m². Confirm the gray and accent-color sample, installation method and required project reports before ordering FOB Tianjin Port.",
  "linear-accent-commercial-carpet-tiles": "Linear Accent is an office carpet-tile design reference shown in 7 illustrations. Dimensions, fiber, backing and performance remain unconfirmed. Request a product sheet and physical sample before specifying coverage, installation or an order quantity.",
  "heathered-gray-modular-carpet-tiles": "Heathered Gray is an office modular-carpet design reference with 3 illustrated gray shades. Dimensions, fiber, backing and performance remain unconfirmed. Approve a physical sample and written specification before calculating coverage or ordering.",
  "pp-pvc-backed-office-carpet-tiles": "This polypropylene loop-pile office carpet tile has PVC backing and a nominal 50×50 cm format. Four uncut tiles cover 1 m². Confirm the striped sample, laying direction, fixing method and project requirements before ordering FOB Tianjin Port.",
  "luxury-hotel-carpet-tile-50x50cm": "This 50×50 cm hotel carpet tile is quoted with a selected nylon or polypropylene face and backing. Catalog pile-weight options are 500–780 g/m². Approve one construction, its physical sample and required test documents before placing a project order.",
  "ecocore-pe-backing-carpet-tiles": "EcoCore is a 50×50 cm loop-pile carpet tile with a PE backing option and catalog pile-weight options of 500–600 g/m². Confirm the face fiber, backing composition, sample and fixing system for the office or hotel project before ordering.",
  "50x50-nylon-pp-office-carpet-tiles": "This 50×50 cm office carpet tile is offered with a nylon or polypropylene face and selected backing. Catalog pile-weight options are 450–650 g/m². Specify one construction and approve the sample, laying direction and project documents before comparing quotations.",
  "pp-bitumen-backed-office-carpet-tiles": "This 50×50 cm office carpet tile uses polypropylene loop pile and bitumen backing. Catalog pile-weight options are 450–650 g/m². Confirm the selected weight, physical sample, fixing method and project reports before ordering FOB Tianjin Port.",
  "nylon-office-carpet-tile": "This 50×50 cm office carpet tile has a nylon loop-pile face and listed bitumen backing. Catalog references are 680 g/m² pile weight and 6.5 mm total thickness. Approve the sample, fixing system and project-specific reports before ordering.",
  "gray-line-nylon-office-hotel-carpet-tiles": "Gray Line is a 50×50 cm carpet tile with nylon or polypropylene face options for office and hotel layout planning. Catalog pile-weight options are 450–650 g/m². Confirm the selected fiber, backing, accent layout and physical sample before ordering.",
  "commercial-nylon-tiles": "This 50×50 cm commercial carpet tile has a nylon 6.6 loop-pile face and bitumen backing. The catalog lists 20 oz pile weight and 6.5 mm total thickness. Confirm the weight unit basis, physical sample and project-specific reports before ordering.",
  "healthcare-hospital-carpet-tiles": "This 50×50 cm carpet tile offers a nylon face option for healthcare support areas, with catalog pile-weight options of 500–700 g/m². Confirm the backing, cleaning chemicals, rolling loads and facility requirements before selection; no infection-control performance is established here.",
  "education-school-carpet-tiles": "This 50×50 cm school carpet tile offers nylon or polypropylene face options, with catalog pile weights of 450–650 g/m² and thicknesses of 5.5–7.0 mm. Confirm one construction, classroom or library layout, cleaning plan and required reports before ordering.",
};

const competitors: ComparisonOption[] = [
  { supplier: "Interface", product: "On Line", construction: "Nylon; tufted loop", format: "25×100 cm", nextStep: "Confirm the selected backing and current specification with the supplier.", source: "https://shop.interface.com/US/en-US/carpet-tile/on-line/7335C.html" },
  { supplier: "Judong", product: "Thunderclap", construction: "Nylon; PVC backing", format: "50×50 cm; 600 g/m² pile weight", nextStep: "Confirm the nominated product sheet, sample and installation requirements.", source: "https://www.judong-carpets.com/product/New-Special-Nylon-with-PVC-Backing-Carpet-Tile.html" },
];

const relatedGroups: Record<string, string[]> = {
  ppPvc: ["balance-polypropylene-carpet-tiles", "pp-pvc-backed-office-carpet-tiles", "pp-bitumen-backed-office-carpet-tiles", "gradient-accent-office-carpet-tiles"],
  ppBitumen: ["gradient-accent-office-carpet-tiles", "pp-bitumen-backed-office-carpet-tiles", "pp-pvc-backed-office-carpet-tiles", "balance-polypropylene-carpet-tiles"],
  nylon: ["nylon-office-carpet-tile", "commercial-nylon-tiles", "gray-line-nylon-office-hotel-carpet-tiles", "healthcare-hospital-carpet-tiles"],
  pe: ["ecocore-pe-backing-carpet-tiles", "healthcare-hospital-carpet-tiles", "50x50-nylon-pp-office-carpet-tiles", "gray-line-nylon-office-hotel-carpet-tiles"],
  options: ["50x50-nylon-pp-office-carpet-tiles", "gray-line-nylon-office-hotel-carpet-tiles", "luxury-hotel-carpet-tile-50x50cm", "education-school-carpet-tiles"],
  design: ["linear-accent-commercial-carpet-tiles", "heathered-gray-modular-carpet-tiles", "balance-polypropylene-carpet-tiles", "pp-pvc-backed-office-carpet-tiles"],
};

export const tileDocumentChecks = [
  { topic: "Dimensions and material", record: "Product sheet identifying tile dimensions, face fiber, backing, weight units and tolerances.", status: "Catalog references appear above; approve the order-specific sheet and sample." },
  { topic: "Fire classification", record: "Report identifying the tested tile, backing, substrate, fixing method, test method and result.", status: "No product-matched fire report is published on this page." },
  { topic: "Acoustic performance", record: "Report stating the measured metric, unit, test method and complete floor assembly.", status: "No product-matched acoustic result is published on this page." },
  { topic: "Rolling chairs and traffic", record: "Report or documented assessment for the nominated construction and intended chair or equipment loads.", status: "No traffic class or rolling-chair test result is established by the catalog dimensions." },
  { topic: "Emissions and installation", record: "Applicable emissions report plus fixing, substrate and cleaning instructions for the selected system.", status: "Confirm requirements for the destination and the actual installation." },
];

export function carpetTileEvidence(product: Product, profile: TileProfile) {
  if (product.id === "staggered-block-pp-office-carpet-tiles") return {
    summary: summaries[product.id], competitors: [] as ComparisonOption[],
    relatedIds: ["pp-pvc-backed-office-carpet-tiles", "pp-bitumen-backed-office-carpet-tiles", "heathered-gray-modular-carpet-tiles"],
    reviewedOn: "25 October 2026",
    faqs: [
      { q: "Which specifications are confirmed for these linear-block office carpet tiles?", a: "The supplier technical table lists a 100% PP face, PVC backing, nominal 50×50 cm format, 520 g/m² pile weight, 4.0±0.5 mm pile height and approximately 6.0 mm total thickness. Packing is 20 tiles / 5 m² per carton. These are supplier-reference specifications, not independent measurements. Approve the quoted SKU and physical sample; pile-construction labels on the source page conflict." },
      { q: "Can these PP office carpet tiles be washed or used as waterproof flooring?", a: "No washable or waterproof performance is established here. Ask for the approved cleaning method for the exact face, backing, adhesive and subfloor. Do not assume that machine washing, immersion or frequent wet cleaning is suitable from a supplier title or an illustration." },
      { q: "How many nominal 50×50 cm carpet tiles cover one square metre?", a: "At the supplier-listed nominal 50×50 cm format, one uncut tile covers 0.25 m² and four cover 1 m². The listed carton holds 20 tiles / 5 m². Add cutting allowance, retained spares and carton rounding separately after the installer approves the layout and dimensions." },
      { q: "Can the linear-block pattern be installed in a quarter-turn layout?", a: "The supplier table lists monolithic or quarter-turn installation. The illustrations show a planning composition, not an approved installation. Review a physical mock-up, pile direction, adjacent colour variation, edge alignment and the selected fixing system before agreeing the laying plan." },
      { q: "What is the FOB price and export port for this carpet tile project?", a: "FOB price: Request a project quotation. Port: tianjingang. Send the selected colour, net area, quantity, destination and required date. Confirm the exact construction, packing, sample charges, MOQ and schedule in the written quotation." },
      { q: "Do these images show a completed office installation or certified product?", a: "No. The four main images and three detail images are AI-edited design references based on the supplied appearance. They do not identify a delivered client project, exact production colour or tested performance. Approve a physical sample and product-matched documents." },
    ],
  };
  const summary = summaries[product.id];
  if (!summary) throw new Error(`Missing carpet tile evidence: ${product.id}`);
  const hasConfirmedFormat = !["linear-accent-commercial-carpet-tiles", "heathered-gray-modular-carpet-tiles"].includes(product.id);
  const group = !hasConfirmedFormat ? "design"
    : ["balance-polypropylene-carpet-tiles", "pp-pvc-backed-office-carpet-tiles"].includes(product.id) ? "ppPvc"
    : ["gradient-accent-office-carpet-tiles", "pp-bitumen-backed-office-carpet-tiles"].includes(product.id) ? "ppBitumen"
    : ["nylon-office-carpet-tile", "commercial-nylon-tiles"].includes(product.id) ? "nylon"
    : ["ecocore-pe-backing-carpet-tiles", "healthcare-hospital-carpet-tiles"].includes(product.id) ? "pe" : "options";
  const faqs = [
    { q: `What fiber, backing and dimensions are specified for ${profile.name.toLowerCase()}?`, a: profile.construction },
    { q: hasConfirmedFormat ? "How many 50×50 cm carpet tiles cover one square metre of office floor?" : "How do I calculate office carpet tile quantities when module dimensions are unconfirmed?", a: hasConfirmedFormat ? "A nominal 50×50 cm tile covers 0.25 m², so 4 uncut tiles cover 1 m². Calculate cutting losses, pattern direction, carton quantities and replacement stock separately. Confirm actual dimensions and packing before ordering." : "Confirm the physical module dimensions first. Divide the net floor area by the area of one tile, then allow for cutting, layout, packing and replacement stock. The design illustrations do not establish tile size or coverage." },
    { q: `What should a project buyer check before using ${profile.name.toLowerCase()} under rolling chairs or wheeled equipment?`, a: `${profile.application} Obtain evidence for the selected tile and floor assembly; fiber and pile weight alone do not verify rolling-load performance.` },
    { q: "Which fire and acoustic documents are needed for commercial office carpet tile approval?", a: "Request reports identifying the exact tile, face fiber, backing, substrate, fixing method, test method and result. Review the 5 document checks on this page. A competitor's certificate or another backing's result does not establish compliance for the quoted VCARPETS construction." },
    { q: "How do these carpet tiles compare with Interface On Line and Judong Thunderclap?", a: "Compare the stated dimensions and materials, then request each supplier's current product sheet and sample. Equal nominal tile area does not establish matching layout, backing, installation, fire or acoustic performance. The table compares published specifications; it does not rank quality or price." },
    { q: `How can a contractor request a paid sample and FOB Tianjin quote for ${profile.name.toLowerCase()}?`, a: "Send 5 inputs: application, floor area, quantity, destination and required date. Samples are paid; the agreed sample charge can be credited against a subsequent order. Confirm the selected construction, sample availability, courier cost, order quantity, FOB Tianjin Port price and production schedule in writing." },
  ];
  return { summary, competitors, faqs, relatedIds: relatedGroups[group].filter((id) => id !== product.id).slice(0, 3), reviewedOn: "24 October 2026" };
}
