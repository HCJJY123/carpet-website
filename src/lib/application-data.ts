import { products } from "@/lib/data";

export type ApplicationPage = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  summary: string;
  image: string;
  imageAlt: string;
  productIds: string[];
  buyingChecks: string[];
  riskNotes: string[];
};

export const applicationPages: ApplicationPage[] = [
  {
    slug: "office",
    title: "Office Carpet Specification for Commercial Workspaces",
    seoTitle: "Office Carpet Specification | Vishome Carpet",
    seoDescription: "Plan office carpet tiles for commercial workspaces with checks for traffic, replacement stock, installation method, backing, samples and project quotation.",
    eyebrow: "Office Application",
    summary: "Office carpet projects usually need modular replacement, acoustic comfort, practical color planning and predictable installation. Buyers should confirm backing, tile size, traffic class, attic stock and cleaning requirements before final quotation.",
    image: "/images/case-wework.webp",
    imageAlt: "Office workspace with commercial carpet tiles",
    productIds: ["50x50-nylon-pp-office-carpet-tiles", "nylon-office-carpet-tile", "pp-bitumen-backed-office-carpet-tiles"],
    buyingChecks: ["Confirm tile size and backing", "Plan phased installation", "Reserve attic stock", "Review cleaning schedule"],
    riskNotes: ["Do not choose color by screen image only.", "Check subfloor condition before installation.", "Confirm carton coverage and spare tiles before shipping."],
  },
  {
    slug: "hotel-guestroom",
    title: "Hotel Guestroom Carpet Specification Support",
    seoTitle: "Hotel Guestroom Carpet Specification | Vishome Carpet",
    seoDescription: "Plan hotel guestroom carpet by reviewing comfort, pattern scale, acoustic needs, broadloom roll planning, samples, maintenance and delivery timing.",
    eyebrow: "Hotel Guestroom Application",
    summary: "Hotel guestroom carpet must balance comfort, sound control, pattern coordination, maintenance and budget. Final material, backing, roll width and delivery plan should be confirmed after sample approval.",
    image: "/images/products/wall-to-wall/custom-luxury-hotel-room-carpet/01-main-luxury-hotel-room-carpet.webp",
    imageAlt: "Hotel guestroom with custom wall-to-wall carpet",
    productIds: ["custom-luxury-hotel-room-carpet", "3d-printed-hotel-carpet", "luxury-hotel-broadloom"],
    buyingChecks: ["Approve strike-off sample", "Confirm roll plan", "Review acoustic expectations", "Check maintenance route"],
    riskNotes: ["Avoid approving pattern scale without room layout.", "Confirm elevator and delivery access for broadloom rolls.", "Reserve matching material for later room repairs."],
  },
  {
    slug: "hotel-corridor",
    title: "Hotel Corridor Carpet Specification Support",
    seoTitle: "Hotel Corridor Carpet Specification | Vishome Carpet",
    seoDescription: "Plan hotel corridor carpet with checks for traffic, luggage-wheel wear, pattern direction, roll planning, fire documents and replacement material.",
    eyebrow: "Hotel Corridor Application",
    summary: "Hotel corridor carpet faces luggage wheels, long visual runs, cleaning pressure and guest noise concerns. Buyers should confirm pattern direction, seam plan, fire document availability and attic stock before production.",
    image: "/images/3d-printed-hotel-carpet-corridor.webp",
    imageAlt: "Hotel corridor with patterned commercial carpet",
    productIds: ["glitter-hotel-corridor-broadloom-carpet", "3d-printed-hotel-carpet", "luxury-hotel-broadloom"],
    buyingChecks: ["Check pattern repeat", "Confirm traffic construction", "Review fire document needs", "Plan roll direction"],
    riskNotes: ["Long corridors make pattern drift visible.", "Fire requirements depend on local project rules.", "Replacement stock should be ordered with the main batch."],
  },
  {
    slug: "hotel-ballroom",
    title: "Hotel Ballroom Carpet Specification Support",
    seoTitle: "Hotel Ballroom Carpet Specification | Vishome Carpet",
    seoDescription: "Plan hotel ballroom carpet for custom patterns, large-area coordination, sample approval, banquet traffic and installation sequencing.",
    eyebrow: "Hotel Ballroom Application",
    summary: "Ballroom carpet selection should consider large pattern scale, banquet traffic, event cleaning and installation sequencing. Custom designs require approved artwork, strike-off samples and coordinated roll planning.",
    image: "/images/3d-printed-hotel-carpet-ballroom.webp",
    imageAlt: "Hotel ballroom with custom patterned carpet",
    productIds: ["3d-printed-banquet-hall-carpet", "luxury-hotel-broadloom", "3d-printed-hotel-carpet"],
    buyingChecks: ["Approve artwork and sample", "Confirm large-area roll plan", "Review event cleaning", "Coordinate installation schedule"],
    riskNotes: ["Pattern scale should be reviewed at room size.", "Schedule changes can affect production and shipping.", "Final specification must match the approved construction."],
  },
  {
    slug: "public-space",
    title: "Public Space Carpet Specification Support",
    seoTitle: "Public Space Carpet Specification | Vishome Carpet",
    seoDescription: "Plan public-space carpet for lobbies, corridors, stairs and decorative commercial areas with checks for traffic, material, samples and maintenance.",
    eyebrow: "Public Space Application",
    summary: "Public spaces need clear material selection, traffic planning, maintenance access and visual coordination. Buyers should match carpet type to lobby, corridor, stair or decorative use rather than use one specification everywhere.",
    image: "/images/products/public-area/public-area-heavy-duty/01-main-public-area-heavy-duty-carpet.webp",
    imageAlt: "Public area commercial carpet for high-traffic interior spaces",
    productIds: ["public-area-heavy-duty", "custom-sculpted-wool-lobby-rug", "commercial-stair-carpet-runner"],
    buyingChecks: ["Match product to traffic zone", "Confirm sample and color", "Review cleaning access", "Plan project MOQ"],
    riskNotes: ["Lobby rugs, stairs and corridors should not share one generic specification.", "Check backing and installation details before ordering.", "Confirm final material before public document use."],
  },
];

export function getApplicationPage(slug: string) {
  return applicationPages.find((page) => page.slug === slug);
}

export function productsForApplication(page: ApplicationPage) {
  return page.productIds
    .map((productId) => products.find((product) => product.id === productId))
    .filter((product): product is (typeof products)[number] => Boolean(product));
}
