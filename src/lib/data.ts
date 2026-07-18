export interface ProductColor {
  name: string;
  hex: string;
}

export interface TechnicalSpecs {
  fireRating: string;
  trafficClass: string;
  fiber?: string;
  yarnSystem: string;
  backing: string;
  pileWeight: string;
  totalThickness: string;
  rollWidth?: string;
  soundInsulation?: string;
  antistatic: string;
}

export interface Product {
  id: string;
  name: string;
  category: "carpet-tiles" | "wall-to-wall" | "public-area";
  description: string;
  longDescription: string;
  image: string;
  gallery?: string[]; // 新增：支持主图+缩略图模式
  moq: string;
  leadTime: string;
  spec: {
    material: string;
    size: string;
    colors: ProductColor[];
  };
  technicalSpecs: TechnicalSpecs;
  features: string[];
}

export const brandInfo = {
  name: "Vishome Global Commercial Carpet Co., Ltd.",
  shortName: "Visfurn",
  url: "https://www.vishomecarpet.com",
  email: "oilero@outlook.com",
  phone: "+86 152 2288 5400",
  whatsapp: "+86 152 2288 5400",
  address: "Cuihuangkou Town, Wuqing District, Tianjin 301700, China",
  stats: { area: "50,000㎡", employees: "900+", markets: "45+", experience: "15+ Years" }
};

export const products: Product[] = [
  // --- 新增产品：3D 打印宴会厅地毯 ---
  {
    id: "3d-printed-luxury-banquet-carpet",
    name: "Premium Custom 3D Printed Banquet Hall Carpet",
    category: "wall-to-wall",
    description: "High-definition custom 3D printed hotel broadloom carpet designed for luxury banquet halls, hotel corridors, and high-traffic hospitality venues.",
    longDescription: "Vishomecarpet presents the pinnacle of modern flooring technology with our Premium 3D Printed series. Utilizing advanced high-speed inkjet printing systems, this hotel broadloom carpet offers unlimited design flexibility with photo-realistic pattern precision. Unlike traditional woven carpets, our 3D printing process allows for low MOQs while maintaining the high durability required for heavy-traffic commercial areas like grand banquet halls and hospitality corridors. Engineered with premium nylon or synthetic fibers, it provides exceptional stain resistance, acoustic comfort, and is fully fire-rated to international commercial standards.",
    image: "/images/products/3d-printed-banquet-carpet/01-guest-room-main.jpg",
    gallery: [
      "/images/products/3d-printed-banquet-carpet/01-guest-room-main.jpg",
      "/images/products/3d-printed-banquet-carpet/02-banquet-hall.jpg",
      "/images/products/3d-printed-banquet-carpet/03-billiard-room.jpg",
      "/images/products/3d-printed-banquet-carpet/04-corridor-detail.jpg"
    ],
    moq: "200 SQM",
    leadTime: "15-25 Days",
    spec: {
      material: "100% High-Density Nylon / Soft Synthetic Blend",
      size: "4m width roll",
      colors: []
    },
    technicalSpecs: {
      fireRating: "ASTM E648 Class I / Bfl-s1",
      trafficClass: "Class 33 Heavy Commercial",
      yarnSystem: "Cut Pile / High-Speed Tufted",
      backing: "ActionBac / Reinforced Jute",
      pileWeight: "32oz - 45oz",
      totalThickness: "9mm - 12mm",
      rollWidth: "4m",
      soundInsulation: "26dB+",
      antistatic: "Permanent"
    },
    features: [
      "Custom Pattern Reproduction",
      "High Color Fastness",
      "Flame Retardant",
      "Eco-Friendly Materials",
      "Durable Under Heavy Traffic"
    ]
  },
  // --- 现有产品保留 ---
  {
    id: "nylon-tiles-elite",
    name: "Premium Nylon 6.6 Commercial Carpet Tiles",
    category: "carpet-tiles",
    description: "Modular 50x50cm tiles engineered for high-traffic corporate offices and hotel corridors.",
    longDescription: "Our Premium Nylon 6.6 series represents the pinnacle of modular flooring performance. Designed for global commercial standards.",
    image: "/images/carpet-tile-premium.jpg",
    moq: "200 SQM",
    leadTime: "10-14 Days",
    spec: { material: "100% Nylon 6.6", size: "50x50 cm", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I", trafficClass: "Class 33 Heavy Commercial", yarnSystem: "Multi-Level Loop", backing: "Bitumen with Glass Fiber", pileWeight: "20 oz/yd²", totalThickness: "6.5 mm", soundInsulation: "24dB", antistatic: "< 2.0 kV" },
    features: ["Stain Resistance", "Dimensional Stability"]
  },
  {
    id: "ecocore-pe-backing-carpet-tiles",
    name: "Vishomecarpet EcoCore PVC-Free PE Backing Carpet Tiles",
    category: "carpet-tiles",
    description: "Eco-friendly modular carpet tiles with PVC-free PE backing for sustainable green buildings.",
    longDescription: "Developed for LEED-oriented projects where sustainability and durability are non-negotiable.",
    image: "/images/products/ecocore-pe-backing/01-hero-white-background.png",
    moq: "Project-Based",
    leadTime: "10-20 Days",
    spec: { material: "Solution-Dyed Nylon", size: "50x50 cm", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "Heavy Commercial", yarnSystem: "Textured Loop", backing: "PVC-Free PE", pileWeight: "550 g/sqm", totalThickness: "6.5mm", soundInsulation: "22dB", antistatic: "Yes" },
    features: ["PVC-Free", "100% Recyclable"]
  },
  {
    id: "luxury-hotel-broadloom",
    name: "Axminster 80/20 Wool Blend Hotel Carpet",
    category: "wall-to-wall",
    description: "Custom jacquard woven broadloom specifically for luxury hotel guest rooms.",
    longDescription: "The gold standard for hospitality flooring, combining the luxury of wool with nylon's durability.",
    image: "/images/broadloom-premium.jpg",
    moq: "500 SQM",
    leadTime: "25-35 Days",
    spec: { material: "80% Wool / 20% Nylon", size: "4m Roll", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "Class 32 Hospitality", yarnSystem: "Jacquard Woven", backing: "Jute/Cotton", pileWeight: "40oz", totalThickness: "11mm", soundInsulation: "28dB", antistatic: "Permanent" },
    features: ["Bespoke Patterns", "Wool Luxury"]
  },
  {
    id: "glitter-hotel-corridor-broadloom-carpet",
    name: "Glitter Hotel Corridor Broadloom Carpet",
    category: "wall-to-wall",
    description: "Blue and gold glitter-pattern broadloom for high-end hospitality corridors.",
    longDescription: "Features a deep navy field with specialized gold glitter effect for memorable interiors.",
    image: "/images/products/hotel-glitter-broadloom/1.jpg",
    moq: "300 SQM",
    leadTime: "25-35 Days",
    spec: { material: "Polyamide/Glitter", size: "4m Roll", colors: [] },
    technicalSpecs: { fireRating: "Bfl-s1", trafficClass: "Heavy Commercial", yarnSystem: "Patterned Tufted", backing: "Woven", pileWeight: "30oz", totalThickness: "8.5mm", rollWidth: "4m", antistatic: "Yes" },
    features: ["Glitter Effect", "Custom Pattern"]
  },
  {
    id: "public-area-heavy-duty",
    name: "High-Traffic Public Area Corridor Carpet",
    category: "public-area",
    description: "Extra-durable broadloom rolls for airports, exhibition centers, and terminals.",
    longDescription: "Designed to withstand intense luggage wheels and high-volume pedestrian traffic.",
    image: "/images/public-area-carpets.webp",
    moq: "300 SQM",
    leadTime: "15-20 Days",
    spec: { material: "Solution-Dyed Nylon", size: "4m Roll", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I", trafficClass: "Class 33 Extra Heavy", yarnSystem: "Dense Tufted", backing: "Bitumen/PVC", pileWeight: "28 oz/yd²", totalThickness: "8.5 mm", soundInsulation: "22dB", antistatic: "< 2.0 kV" },
    features: ["Wheel Resistance", "Non-slip"]
  },
  {
    id: "natural-sisal-carpet",
    name: "Natural Sisal Linen-Weave Commercial Carpet",
    category: "public-area",
    description: "100% natural plant-fiber sisal carpet for sustainable biophilic office interiors.",
    longDescription: "Woven into a refined linen-look flatweave for sustainable, professional commercial spaces.",
    image: "/images/natural-sisal-carpet-office.jpg",
    moq: "300 SQM",
    leadTime: "30 Days",
    spec: { material: "100% Natural Sisal", size: "4m Roll", colors: [] },
    technicalSpecs: { fireRating: "Class I (FR)", trafficClass: "Class 32", yarnSystem: "Flatweave", backing: "Natural Latex", pileWeight: "56oz", totalThickness: "7mm", rollWidth: "4m", antistatic: "Permanent" },
    features: ["Biophilic Design", "Natural Fiber"]
  }
];

export const productCategories = [
  { id: "carpet-tiles", name: "Commercial Carpet Tiles", description: "Modular solutions for offices.", image: "/images/category-tiles.png", slug: "carpet-tiles" },
  { id: "wall-to-wall", name: "Wall-to-Wall Carpets", description: "Seamless broadloom for hospitality.", image: "/images/category-broadloom.jpg", slug: "wall-to-wall" },
  { id: "public-area", name: "Public Area Carpets", description: "Heavy-duty specialized flooring.", image: "/images/public-area-carpets.webp", slug: "public-area" }
];

export const certifications = [{ name: "ASTM E648", description: "Fire Rating" }, { name: "CRI Green Label Plus", description: "Indoor Air Quality" }];

export const faqSections = [
  {
    title: "Product FAQs",
    questions: [
      { q: "What types of commercial carpets do you offer?", a: "We provide Carpet Tiles, Broadloom Carpets, Modular Carpet Systems, Custom Area Rugs, and Entrance Mat Systems." },
      { q: "What is the difference between carpet tiles and broadloom carpet?", a: "Carpet tiles offer modular installation and easier replacement. Broadloom carpet provides a seamless appearance for grand hospitality spaces." }
    ]
  }
];

export const caseStudies: CaseStudy[] = [
  { id: "hotel-dubai", title: "Luxury Hotel Lobby — Dubai", category: "wall-to-wall", image: "/images/about/about-us-hero-banner.webp", description: "Supplied 5,000+ sqm of custom Axminster broadloom.", projectSpecs: [], sections: [], technicalDetails: [], designHighlights: [], results: [] },
  { id: "retail-india", title: "Department Store — India", category: "public-area", image: "/images/about/commercial-project-application.webp", description: "Retail store color-coded flooring project.", projectSpecs: [], sections: [], technicalDetails: [], designHighlights: [], results: [] }
];
