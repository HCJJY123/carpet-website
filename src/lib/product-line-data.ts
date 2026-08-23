import { products } from "@/lib/data";

export type ProductLinePage = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  summary: string;
  image: string;
  imageAlt: string;
  parentCategoryHref: string;
  productIds: string[];
  buyerChecks: string[];
};

export const productLinePages: ProductLinePage[] = [
  {
    slug: "office-carpet-tiles",
    title: "Office Carpet Tiles for Commercial Workspaces",
    seoTitle: "Office Carpet Tiles for Commercial Projects | Vishome Carpet",
    seoDescription: "Office carpet tile options for commercial projects, including 50x50 modular tiles, nylon and PP options, backing, MOQ, samples and quotation support.",
    eyebrow: "Office Carpet Tiles",
    summary: "Office carpet tile buyers usually need modular replacement, practical color planning, stable backing, clear MOQ tiers and predictable installation. Vishome Carpet connects office application requirements with existing commercial carpet tile products.",
    image: "/images/case-wework.webp",
    imageAlt: "Office carpet tiles installed in a commercial workspace",
    parentCategoryHref: "/products/carpet-tiles",
    productIds: ["50x50-nylon-pp-office-carpet-tiles", "nylon-office-carpet-tile", "pp-bitumen-backed-office-carpet-tiles", "commercial-nylon-tiles"],
    buyerChecks: ["Tile size and carton coverage", "Backing and installation method", "Attic stock for later replacement", "Sample, MOQ and lead time"],
  },
  {
    slug: "hospitality-carpet",
    title: "Hospitality Carpet for Hotels and Public Areas",
    seoTitle: "Hospitality Carpet for Hotel Projects | Vishome Carpet",
    seoDescription: "Hospitality carpet options for hotel guestrooms, corridors, lobbies and banquet spaces, with custom broadloom, printed carpet and project document support.",
    eyebrow: "Hospitality Carpet",
    summary: "Hospitality carpet projects need comfort, visual coordination, acoustic planning, traffic resistance and installation sequencing. Final specifications should follow sample approval and written quotation.",
    image: "/images/3d-printed-hotel-carpet-corridor.webp",
    imageAlt: "Hospitality carpet installed in a hotel corridor",
    parentCategoryHref: "/products/wall-to-wall",
    productIds: ["luxury-hotel-broadloom", "3d-printed-hotel-carpet", "custom-luxury-hotel-room-carpet", "glitter-hotel-corridor-broadloom-carpet"],
    buyerChecks: ["Application area and traffic level", "Pattern scale and roll plan", "Fire or performance document needs", "Sample approval route"],
  },
  {
    slug: "custom-axminster-carpet",
    title: "Custom Axminster Carpet Planning for Hospitality Projects",
    seoTitle: "Custom Axminster Carpet Planning | Vishome Carpet",
    seoDescription: "Custom Axminster carpet planning for hotels, corridors, lobbies and ballrooms, including pattern approval, strike-off samples and quotation inputs.",
    eyebrow: "Custom Axminster Carpet",
    summary: "Custom Axminster-style hospitality carpet planning should start with artwork, yarn/color approval, sample route, pattern repeat, roll plan and project documentation. Public project names require approval before external use.",
    image: "/images/broadloom-premium.webp",
    imageAlt: "Custom Axminster style broadloom carpet for hotel projects",
    parentCategoryHref: "/products/wall-to-wall",
    productIds: ["luxury-hotel-broadloom", "3d-printed-banquet-hall-carpet", "custom-luxury-hotel-room-carpet"],
    buyerChecks: ["Artwork and pattern repeat", "Strike-off sample approval", "Roll width and waste planning", "Current technical document availability"],
  },
  {
    slug: "printed-carpet",
    title: "Printed Carpet for Hotel Guestrooms and Banquet Areas",
    seoTitle: "Printed Carpet for Hotel Projects | Vishome Carpet",
    seoDescription: "Printed carpet options for hotel guestrooms, corridors and banquet spaces, with custom design, sample review, MOQ and project quotation support.",
    eyebrow: "Printed Carpet",
    summary: "Printed carpet can support flexible hospitality patterns when artwork, color tolerance, material route, sample approval and installation plan are confirmed before production.",
    image: "/images/3d-printed-hotel-carpet-ballroom.webp",
    imageAlt: "Printed hotel carpet in a hospitality interior",
    parentCategoryHref: "/products/wall-to-wall",
    productIds: ["3d-printed-hotel-carpet", "3d-printed-banquet-hall-carpet", "custom-floral-printed-hotel-carpet"],
    buyerChecks: ["Artwork quality", "Sample route", "Color tolerance", "Lead time after approval"],
  },
  {
    slug: "wool-carpet",
    title: "Wool Carpet and Custom Lobby Rug Planning",
    seoTitle: "Wool Carpet and Custom Lobby Rug Planning | Vishome Carpet",
    seoDescription: "Wool carpet and custom lobby rug planning for public-area projects, including custom dimensions, sample approval, material confirmation and quotation support.",
    eyebrow: "Wool Carpet",
    summary: "Wool and wool-style public-area carpets require careful confirmation of fiber composition, size, sculpting, edge finish, sample route and maintenance expectations before quotation.",
    image: "/images/products/public-area/custom-sculpted-wool-lobby-rug/04-commercial-showroom-custom-rug.webp",
    imageAlt: "Custom sculpted wool lobby rug for public area projects",
    parentCategoryHref: "/products/public-area",
    productIds: ["custom-sculpted-wool-lobby-rug", "public-area-heavy-duty", "natural-sisal-carpet"],
    buyerChecks: ["Fiber composition confirmation", "Custom size and edge finish", "Sample and color approval", "Maintenance route"],
  },
];

export function getProductLinePage(slug: string) {
  return productLinePages.find((page) => page.slug === slug);
}

export function productsForLine(page: ProductLinePage) {
  return page.productIds
    .map((productId) => products.find((product) => product.id === productId))
    .filter((product): product is (typeof products)[number] => Boolean(product));
}
