import { brandInfo, products, type Product } from "@/lib/data";

export type TechnicalDocument = {
  slug: string;
  title: string;
  description: string;
  documentType: "Guide" | "Checklist";
  relatedProductIds: string[];
  relatedCategory: Product["category"] | "multiple";
  version: string;
  issueDate: string;
  reviewDate: string;
  filePath: string;
  fileSizeBytes: number;
  fileFormat: "PDF";
  language: "English";
  publicStatus: "published";
  downloadEventName: "technical_document_download";
};

export const technicalDocuments: TechnicalDocument[] = [
  {
    slug: "hotel-corridor-carpet-stain-hiding-checklist",
    title: "Hotel Corridor Carpet Stain-Hiding Checklist",
    description: "A practical hotel corridor carpet checklist for stain visibility, lighting, traffic zones, cleaning access, roll planning and spare material before quotation.",
    documentType: "Checklist",
    relatedProductIds: ["glitter-hotel-corridor-broadloom-carpet", "luxury-hotel-broadloom", "custom-luxury-hotel-room-carpet"],
    relatedCategory: "wall-to-wall",
    version: "CONFIRM_DOCUMENT_VERSION",
    issueDate: "CONFIRM_DOCUMENT_ISSUE_DATE",
    reviewDate: "2026-08-14",
    filePath: "/downloads/hotel-corridor-carpet-stain-hiding-checklist.pdf",
    fileSizeBytes: 2720,
    fileFormat: "PDF",
    language: "English",
    publicStatus: "published",
    downloadEventName: "technical_document_download",
  },
  {
    slug: "office-carpet-tiles-renovation-rfq-template",
    title: "Office Carpet Tiles Renovation RFQ Template",
    description: "An office carpet tile renovation RFQ template covering phased work, rolling-chair zones, substrate review, spare stock and handover timing.",
    documentType: "Checklist",
    relatedProductIds: ["nylon-office-carpet-tile", "pp-bitumen-backed-office-carpet-tiles", "50x50-nylon-pp-office-carpet-tiles"],
    relatedCategory: "carpet-tiles",
    version: "CONFIRM_DOCUMENT_VERSION",
    issueDate: "CONFIRM_DOCUMENT_ISSUE_DATE",
    reviewDate: "2026-08-14",
    filePath: "/downloads/office-carpet-tiles-renovation-rfq-template.pdf",
    fileSizeBytes: 2822,
    fileFormat: "PDF",
    language: "English",
    publicStatus: "published",
    downloadEventName: "technical_document_download",
  },
  {
    slug: "commercial-carpet-tile-buying-specification-guide",
    title: "Commercial Carpet Tile Buying Guide",
    description: "A procurement guide for office, retail and modular commercial carpet tile projects covering specification inputs, samples and buying checks.",
    documentType: "Guide",
    relatedProductIds: ["50x50-nylon-pp-office-carpet-tiles", "nylon-office-carpet-tile", "pp-bitumen-backed-office-carpet-tiles"],
    relatedCategory: "carpet-tiles",
    version: "CONFIRM_DOCUMENT_VERSION",
    issueDate: "CONFIRM_DOCUMENT_ISSUE_DATE",
    reviewDate: "2026-08-06",
    filePath: "/downloads/commercial-carpet-tile-buying-specification-guide.pdf",
    fileSizeBytes: 8212,
    fileFormat: "PDF",
    language: "English",
    publicStatus: "published",
    downloadEventName: "technical_document_download",
  },
  {
    slug: "hotel-broadloom-procurement-guide",
    title: "Hotel Broadloom Procurement Guide",
    description: "A hotel carpet sourcing guide for guestrooms, corridors and public hospitality spaces where roll planning, samples and documentation matter.",
    documentType: "Guide",
    relatedProductIds: ["luxury-hotel-broadloom", "3d-printed-hotel-carpet", "custom-luxury-hotel-room-carpet"],
    relatedCategory: "wall-to-wall",
    version: "CONFIRM_DOCUMENT_VERSION",
    issueDate: "CONFIRM_DOCUMENT_ISSUE_DATE",
    reviewDate: "2026-08-06",
    filePath: "/downloads/hotel-broadloom-procurement-guide.pdf",
    fileSizeBytes: 8463,
    fileFormat: "PDF",
    language: "English",
    publicStatus: "published",
    downloadEventName: "technical_document_download",
  },
  {
    slug: "public-area-carpet-specification-guide",
    title: "Public Area Carpet Specification Guide",
    description: "A public-area carpet planning guide for lobbies, corridors, wool rugs and decorative high-traffic commercial spaces.",
    documentType: "Guide",
    relatedProductIds: ["public-area-heavy-duty", "custom-sculpted-wool-lobby-rug", "natural-sisal-carpet"],
    relatedCategory: "public-area",
    version: "CONFIRM_DOCUMENT_VERSION",
    issueDate: "CONFIRM_DOCUMENT_ISSUE_DATE",
    reviewDate: "2026-08-06",
    filePath: "/downloads/public-area-carpet-specification-guide.pdf",
    fileSizeBytes: 8378,
    fileFormat: "PDF",
    language: "English",
    publicStatus: "published",
    downloadEventName: "technical_document_download",
  },
  {
    slug: "commercial-carpet-procurement-checklist",
    title: "Commercial Carpet Procurement Checklist",
    description: "A practical checklist for RFQ preparation, sample review, packing coordination and project quotation comparison.",
    documentType: "Checklist",
    relatedProductIds: ["50x50-nylon-pp-office-carpet-tiles", "luxury-hotel-broadloom", "public-area-heavy-duty"],
    relatedCategory: "multiple",
    version: "CONFIRM_DOCUMENT_VERSION",
    issueDate: "CONFIRM_DOCUMENT_ISSUE_DATE",
    reviewDate: "2026-08-06",
    filePath: "/downloads/commercial-carpet-procurement-checklist.pdf",
    fileSizeBytes: 4106,
    fileFormat: "PDF",
    language: "English",
    publicStatus: "published",
    downloadEventName: "technical_document_download",
  },
  {
    slug: "gold-mining-mat-rfq-checklist",
    title: "Gold Mining Mat RFQ Checklist",
    description: "An RFQ checklist for sluice box matting, miners moss roll sizes, trial orders and product confirmation for gold recovery projects.",
    documentType: "Checklist",
    relatedProductIds: ["gold-mining-carpet-mat"],
    relatedCategory: "public-area",
    version: "CONFIRM_DOCUMENT_VERSION",
    issueDate: "CONFIRM_DOCUMENT_ISSUE_DATE",
    reviewDate: "2026-08-06",
    filePath: "/downloads/gold-mining-mat-rfq-checklist.pdf",
    fileSizeBytes: 3878,
    fileFormat: "PDF",
    language: "English",
    publicStatus: "published",
    downloadEventName: "technical_document_download",
  },
];

export const resourceCategories = [
  {
    title: "RFQ Calculator",
    href: "/resources/commercial-carpet-rfq-calculator",
    description: "Interactive quantity, waste, spare-stock, carton and roll-length planning tool for commercial carpet quote requests.",
    lastModified: "2026-08-21",
  },
  {
    title: "Specification Guides",
    href: "/resources/specification-guides",
    description: "Buyer guides for carpet tile, hotel broadloom and public-area carpet specifications.",
  },
  {
    title: "Installation Guides",
    href: "/resources/installation-guides",
    description: "Installation planning notes and document request paths for approved carpet constructions.",
  },
  {
    title: "Maintenance Guides",
    href: "/resources/maintenance-guides",
    description: "Care and maintenance planning resources for commercial carpet projects.",
  },
  {
    title: "Project Sheets",
    href: "/resources/project-sheets",
    description: "Project sheet request path for approved case references and partner documentation.",
  },
  {
    title: "BIM/CAD Resources",
    href: "/resources/bim-cad",
    description: "BIM/CAD readiness notes and verified digital asset manifest for future platform submissions.",
  },
  {
    title: "Downloads",
    href: "/resources/downloads",
    description: "HTML landing pages for published PDF downloads and related product references.",
  },
];

export function getTechnicalDocument(slug: string) {
  return technicalDocuments.find((document) => document.slug === slug);
}

export function relatedProductsForDocument(document: TechnicalDocument) {
  return document.relatedProductIds
    .map((productId) => products.find((product) => product.id === productId))
    .filter((product): product is Product => Boolean(product));
}

export function publicDocumentVersion(document: TechnicalDocument) {
  return document.version.startsWith("CONFIRM_") ? "Version pending confirmation" : document.version;
}

export function publicDocumentIssueDate(document: TechnicalDocument) {
  return document.issueDate.startsWith("CONFIRM_") ? "Issue date pending confirmation" : document.issueDate;
}

export function documentDownloadUrl(document: TechnicalDocument) {
  return `${brandInfo.url}${document.filePath}`;
}
