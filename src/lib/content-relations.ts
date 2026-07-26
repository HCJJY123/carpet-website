import type { Product } from "@/lib/data";

export type ProductCategoryId = Product["category"];

export const caseProductRelations: Record<string, string[]> = {
  "case-1": ["luxury-hotel-broadloom", "3d-printed-hotel-carpet", "glitter-hotel-corridor-broadloom-carpet"],
  "case-2": ["commercial-nylon-tiles", "gray-line-nylon-office-hotel-carpet-tiles", "50x50-nylon-pp-office-carpet-tiles"],
  "case-3": ["3d-printed-hotel-carpet", "3d-printed-banquet-hall-carpet", "custom-floral-printed-hotel-carpet"],
  "case-4": ["public-area-heavy-duty"],
  "case-5": ["nylon-office-carpet-tile", "commercial-nylon-tiles", "ecocore-pe-backing-carpet-tiles"],
  "case-6": ["public-area-heavy-duty", "commercial-nylon-tiles"],
  "case-7": ["custom-luxury-hotel-room-carpet", "custom-floral-printed-hotel-carpet", "luxury-hotel-broadloom"],
  "case-8": ["commercial-nylon-tiles", "ecocore-pe-backing-carpet-tiles", "50x50-nylon-pp-office-carpet-tiles"],
  "case-9": ["luxury-hotel-carpet-tile-50x50cm", "gray-line-nylon-office-hotel-carpet-tiles", "custom-luxury-hotel-room-carpet"],
  "case-10": ["custom-floral-printed-hotel-carpet", "3d-printed-hotel-carpet", "custom-luxury-hotel-room-carpet"],
  "case-11": ["public-area-heavy-duty"],
  "case-12": ["gold-mining-carpet-mat"],
};

const fallbackProductRelations: Record<ProductCategoryId, string[]> = {
  "carpet-tiles": ["commercial-nylon-tiles", "nylon-office-carpet-tile", "ecocore-pe-backing-carpet-tiles"],
  "wall-to-wall": ["luxury-hotel-broadloom", "3d-printed-hotel-carpet", "custom-luxury-hotel-room-carpet"],
  "public-area": ["public-area-heavy-duty", "natural-sisal-carpet", "custom-sculpted-wool-lobby-rug"],
};

export const categoryDisplayCopy: Record<ProductCategoryId, string> = {
  "carpet-tiles": "Modular commercial carpet tiles for offices, hotels, corridors, education, and phased replacement programs.",
  "wall-to-wall": "Custom broadloom carpet for guestrooms, corridors, lobbies, ballrooms, and branded hospitality interiors.",
  "public-area": "Specialized carpet systems for airports, exhibition spaces, public circulation, feature rugs, and industrial applications.",
};

export function relatedProductIdsForCase(caseId: string, categoryId: ProductCategoryId, configuredIds?: string[]) {
  return caseProductRelations[caseId] ?? (configuredIds?.length ? configuredIds : fallbackProductRelations[categoryId]);
}

export function relatedCategoryIds(
  relatedProducts: Pick<Product, "category">[],
  primaryCategory?: ProductCategoryId,
) {
  return Array.from(new Set([primaryCategory, ...relatedProducts.map((product) => product.category)].filter(Boolean))) as ProductCategoryId[];
}
