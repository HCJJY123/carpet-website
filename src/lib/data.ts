export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  category: "carpet-tiles" | "wall-to-wall" | "public-area";
  description: string;
  longDescription: string;
  image: string;
  spec: {
    material: string;
    gauge?: string;
    size: string;
    weight?: string;
    pileHeight?: string;
    colors: ProductColor[];
  };
  features: string[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export const brandInfo = {
  name: "Vishome Global Commercial Carpet Co., Ltd.",
  shortName: "Vishome",
  url: "https://www.visfurn.com",
  email: "zara@visfurn.com",
  phone: "+86 152 2288 5400",
  whatsapp: "+86 152 2288 5400",
  address: "Cuihuangkou Town, Wuqing District, Tianjin 301700, China",
  stats: {
    area: "50,000㎡",
    employees: "900+",
    markets: "45+",
    experience: "15+ Years"
  }
};

export const products: Product[] = [
  {
    id: "commercial-nylon-tiles",
    name: "Commercial Grade Nylon Carpet Tiles",
    category: "carpet-tiles",
    description: "Heavy-duty 50x50cm modular tiles designed for modern office fit-outs and high-traffic corridors.",
    longDescription: "Our signature nylon carpet tiles combine exceptional appearance retention with easy maintenance.",
    image: "/images/carpet-tile-premium.jpg",
    spec: { material: "100% Solution-Dyed Nylon", size: "50x50 cm", colors: [] },
    features: ["Fire Rated", "Stain Resistant"]
  }
];

export const productCategories = [
  {
    id: "carpet-tiles",
    name: "Commercial Carpet Tiles",
    description: "Standardized 50x50cm modular tiles for office renovation and flexible commercial spaces.",
    image: "/images/category-tiles.jpg",
    slug: "commercial-carpet-tiles"
  },
  {
    id: "wall-to-wall",
    name: "Wall-to-Wall Carpets",
    description: "Luxury hotel carpet rolls and custom jacquard broadloom with international fire ratings.",
    image: "/images/category-broadloom.jpg",
    slug: "wall-to-wall-carpets"
  },
  {
    id: "public-area",
    name: "Public Area Carpets",
    description: "Bulk supply of heavy-duty exhibition carpet rolls and public venue flooring for events.",
    image: "/images/public-area-carpets.webp",
    slug: "public-area-carpets"
  },
];

export const certifications = [
  { name: "ASTM E648", description: "US Fire Rating" },
  { name: "CRI Green Label", description: "Indoor Air Quality" },
  { name: "ISO 9001", description: "Quality Management" },
];

export const faqItems: FAQItem[] = [
  {
    q: "What commercial carpet products does Vishome manufacture?",
    a: "Vishome manufactures commercial carpet tiles, hotel carpet, wall-to-wall carpet rolls, public area carpets, office carpet tiles, event carpets, and custom project carpet solutions for global B2B buyers."
  },
  {
    q: "Can I request samples before placing a bulk order?",
    a: "Yes. We can prepare carpet tile swatches, broadloom samples, custom color references, and project-specific strike-off samples before mass production."
  },
  {
    q: "Do you support custom carpet colors, patterns, and logos?",
    a: "Yes. Our team supports custom sizes, colors, patterns, logos, yarn choices, backing options, and hotel or office project design matching based on your drawings or reference images."
  },
  {
    q: "What information is needed for a quotation?",
    a: "Please share the product type, size, material preference, backing, quantity, destination country, fire rating requirements, and any custom design files or reference images."
  },
  {
    q: "Do Vishome carpets support international compliance documents?",
    a: "We can provide available technical documents for commercial project review, including material specifications, fire-rating references, quality-control records, and export documentation based on order requirements."
  },
  {
    q: "What is the typical production lead time?",
    a: "Lead time depends on product type, quantity, customization, and sample approval. Standard commercial carpet tile orders are usually faster, while custom hotel carpet and broadloom projects require extra sampling and production time."
  },
  {
    q: "Can you ship carpet orders overseas?",
    a: "Yes. Vishome supports export packaging, sea freight coordination, and door-to-door delivery options for distributors, contractors, hotels, offices, and commercial projects worldwide."
  },
  {
    q: "Who should contact Vishome for project support?",
    a: "Flooring distributors, contractors, designers, hotel purchasing teams, office renovation companies, event suppliers, and commercial building project buyers can contact our export team for technical support and quotation."
  }
];

export const caseStudies = [
  {
    id: "hilton-garden",
    title: "Global Hotel Group - Suite Renovation",
    client: "International Hotel Procurement Team",
    location: "Southeast Asia",
    category: "wall-to-wall",
    area: "5,000+ sqm",
    image: "/images/case-hilton.jpg",
    description: "Supplied 5,000+ sqm of custom Axminster broadloom."
  },
  {
    id: "corporate-hq",
    title: "Tech Park HQ - Office Fit-out",
    client: "Technology Park Facilities Team",
    location: "Asia-Pacific",
    category: "carpet-tiles",
    area: "8,000+ sqm",
    image: "/images/case-techpark.jpg",
    description: "High-performance nylon 50x50cm tiles."
  },
  {
    id: "resort-project",
    title: "Beach Resort - Public Area",
    client: "Resort Renovation Contractor",
    location: "Middle East",
    category: "wall-to-wall",
    area: "3,600+ sqm",
    image: "/images/case-resort.jpg",
    description: "Luxury corridor carpet solutions."
  },
  {
    id: "wework-office",
    title: "Coworking Space - Modern Interior",
    client: "Commercial Office Fit-out Company",
    location: "North America",
    category: "carpet-tiles",
    area: "4,100+ sqm",
    image: "/images/case-wework.jpg",
    description: "Modular flooring for creative work environments."
  }
];
