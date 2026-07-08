export interface ProductColor { name: string; hex: string; }
export interface TechnicalSpecs { fireRating: string; trafficClass: string; fiber?: string; yarnSystem: string; backing: string; pileWeight: string; totalThickness: string; rollWidth?: string; soundInsulation?: string; antistatic: string; }
export interface FobPriceRange { display: string; lowPrice: string; highPrice: string; currency: "USD"; unit: string; }
export interface Product { id: string; name: string; category: "carpet-tiles" | "wall-to-wall" | "public-area"; description: string; longDescription: string; image: string; imageAlt?: string; gallery?: { src: string; alt: string; }[]; moq: string; leadTime: string; fobPrice?: FobPriceRange; spec: { material: string; size: string; colors: ProductColor[]; }; technicalSpecs: TechnicalSpecs; features: string[]; }
export interface CaseSpecItem { label: string; value: string; }
export interface CaseSection { title: string; paragraphs: string[]; image?: string; imageAlt?: string; imageCaption?: string; }
export interface CaseCostItem { item: string; amount: string; }
export interface CaseStudy { id: string; title: string; subtitle?: string; category: "carpet-tiles" | "wall-to-wall" | "public-area"; image: string; description: string; projectSpecs: CaseSpecItem[]; sections: CaseSection[]; technicalDetails: string[]; designHighlights: string[]; results: string[]; gallery?: string[]; costAnalysis?: CaseCostItem[]; }

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
  // --- CARPET TILES SERIES ---
  {
    id: "nylon-tiles-elite",
    name: "Premium Nylon 6.6 Commercial Carpet Tiles",
    category: "carpet-tiles",
    description: "Modular 50x50cm tiles engineered for high-traffic corporate offices and hotel corridors.",
    longDescription: "Our Premium Nylon 6.6 series represents the pinnacle of modular flooring performance. Designed for global commercial standards.",
    image: "/images/carpet-tile-premium.jpg",
    moq: "200 SQM",
    leadTime: "10-14 Days",
    fobPrice: { display: "US$5.80-11.50 / SQM", lowPrice: "5.80", highPrice: "11.50", currency: "USD", unit: "SQM" },
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
    fobPrice: { display: "US$4.20-8.90 / SQM", lowPrice: "4.20", highPrice: "8.90", currency: "USD", unit: "SQM" },
    spec: { material: "Solution-Dyed Nylon", size: "50x50 cm", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "Heavy Commercial", yarnSystem: "Textured Loop", backing: "PVC-Free PE", pileWeight: "550 g/sqm", totalThickness: "6.5mm", soundInsulation: "22dB", antistatic: "Yes" },
    features: ["PVC-Free", "100% Recyclable"]
  },
  {
    id: "ct-premium",
    name: "Elite Patterned Commercial Carpet Tiles",
    category: "carpet-tiles",
    description: "Multi-level loop modular tiles for executive suites and designer office fit-outs.",
    longDescription: "Intricate geometric patterns combined with high-performance backing for demanding commercial interiors.",
    image: "/images/category-tiles.png",
    moq: "500 SQM",
    leadTime: "15-20 Days",
    spec: { material: "Nylon 6.6", size: "50x50 cm", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "Class 33", yarnSystem: "Patterned Loop", backing: "Reinforced Bitumen", pileWeight: "24oz", totalThickness: "7.0mm", soundInsulation: "26dB", antistatic: "Yes" },
    features: ["Design Fidelity", "Acoustic Comfort"]
  },
  {
    id: "ct-luxury",
    name: "Luxury Shag Modular Carpet Tiles",
    category: "carpet-tiles",
    description: "High-pile luxury tiles for premium boutique hotels and executive lounges.",
    longDescription: "Modular convenience with the plush underfoot feel of high-end hotel guestroom carpeting.",
    image: "/images/about/custom-design-support.webp",
    moq: "300 SQM",
    leadTime: "20-25 Days",
    spec: { material: "Polyamide", size: "50x50 cm", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "Class 32", yarnSystem: "High Pile", backing: "PVC/Bitumen", pileWeight: "32oz", totalThickness: "9.5mm", soundInsulation: "28dB", antistatic: "Yes" },
    features: ["Soft Texture", "Premium Aesthetic"]
  },
  {
    id: "ct-hexagonal",
    name: "Geometric Hexagonal Modular Carpet Tiles",
    category: "carpet-tiles",
    description: "Unique hexagonal format for creative workplace branding and modern office zoning.",
    longDescription: "Supports complex color pathing and modern biophilic office design layouts.",
    image: "/images/blog-office-carpet.jpg",
    moq: "500 SQM",
    leadTime: "25 Days",
    spec: { material: "Solution-Dyed Nylon", size: "50x50cm Hex", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "Class 33", yarnSystem: "Dense Loop", backing: "Glass Fiber PVC", pileWeight: "22oz", totalThickness: "6.8mm", soundInsulation: "24dB", antistatic: "Yes" },
    features: ["Unique Shape", "Creative Freedom"]
  },

  // --- WALL-TO-WALL SERIES ---
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
    technicalSpecs: { fireRating: "Class I", trafficClass: "Class 32", yarnSystem: "Jacquard Woven", backing: "Jute/Cotton", pileWeight: "40oz", totalThickness: "11mm", soundInsulation: "28dB", antistatic: "Permanent" },
    features: ["Bespoke Patterns", "Wool Luxury"]
  },
  {
    id: "3d-printed-hotel-carpet",
    name: "3D HD Printed Nylon Hotel Carpet",
    category: "wall-to-wall",
    description: "High-definition printed nylon broadloom for hotel corridors and lobbies.",
    longDescription: "Photo-realistic patterns and rich color depth at a faster lead time than traditional weaving.",
    image: "/images/3d-printed-hotel-carpet-corridor.jpg",
    moq: "300 SQM",
    leadTime: "25 Days",
    fobPrice: { display: "US$3.50-7.80 / SQM", lowPrice: "3.50", highPrice: "7.80", currency: "USD", unit: "SQM" },
    spec: { material: "HD Printed Nylon", size: "4m Roll", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "33", yarnSystem: "HD Digital Print", backing: "ActionBac", pileWeight: "32oz", totalThickness: "9mm", rollWidth: "4m", soundInsulation: "25dB", antistatic: "Permanent" },
    features: ["Unlimited Colors", "Fast Production"]
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
    id: "bl-premium",
    name: "Premium Broadloom Solution-Dyed Nylon",
    category: "wall-to-wall",
    description: "High-density broadloom for premium offices and commercial passageways.",
    longDescription: "Engineered for appearance retention in heavy-use public commercial spaces.",
    image: "/images/category-broadloom.jpg",
    moq: "500 SQM",
    leadTime: "20 Days",
    spec: { material: "Solution-Dyed Nylon", size: "4m Roll", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "33", yarnSystem: "Dense Tufted", backing: "ActionBac", pileWeight: "28oz", totalThickness: "8.5mm", soundInsulation: "24dB", antistatic: "Yes" },
    features: ["High Durability", "Stain Protection"]
  },
  {
    id: "bl-patterned",
    name: "Patterned Commercial Broadloom Carpet",
    category: "wall-to-wall",
    description: "Textured broadloom for hotel ballrooms, offices, and conference centers.",
    longDescription: "A versatile series offering balanced aesthetics and heavy-duty performance.",
    image: "/images/blog-material-comparison.jpg",
    moq: "300 SQM",
    leadTime: "25 Days",
    spec: { material: "Nylon/Synthetic", size: "4m Roll", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "32", yarnSystem: "Textured Loop", backing: "PVC/Latex", pileWeight: "26oz", totalThickness: "8.0mm", soundInsulation: "22dB", antistatic: "Yes" },
    features: ["Visual Interest", "Versatile Style"]
  },

  // --- PUBLIC AREA SERIES ---
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
    fobPrice: { display: "US$6.50-14.80 / SQM", lowPrice: "6.50", highPrice: "14.80", currency: "USD", unit: "SQM" },
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

export const faqSections = [
  {
    title: "Product FAQs",
    questions: [
      { q: "What types of commercial carpets do you offer?", a: "We provide Carpet Tiles, Broadloom Carpets, Modular Carpet Systems, Custom Area Rugs, and Entrance Mat Systems." },
      { q: "What is the difference between carpet tiles and broadloom carpet?", a: "Carpet tiles offer modular installation and easier replacement. Broadloom carpet provides a seamless appearance for grand hospitality spaces." },
      { q: "Are your carpets suitable for high-traffic commercial areas?", a: "Yes. Our commercial flooring solutions are designed for demanding environments such as hotel corridors, office spaces, and airports." },
      { q: "How long do commercial carpets typically last?", a: "Service life depends on traffic, but our commercial-grade carpets are engineered for high appearance retention over many years." }
    ]
  }
];

export const certifications = [{ name: "ASTM E648", description: "Fire Rating" }, { name: "CRI Green Label Plus", description: "Indoor Air Quality" }];

export const caseStudies: CaseStudy[] = [
  { id: "hotel-dubai", title: "Luxury Hotel Lobby — Dubai", category: "wall-to-wall", image: "/images/about/about-us-hero-banner.webp", description: "Supplied 5,000+ sqm of custom Axminster broadloom.", projectSpecs: [], sections: [], technicalDetails: [], designHighlights: [], results: [] },
  { id: "retail-india", title: "Department Store — India", category: "public-area", image: "/images/about/commercial-project-application.webp", description: "Retail store color-coded flooring project.", projectSpecs: [], sections: [], technicalDetails: [], designHighlights: [], results: [] },
  { id: "casino-vegas", title: "Casino Floor — Las Vegas", category: "wall-to-wall", image: "/images/about/production-workshop.webp", description: "Extreme wear resistance for 24/7 gaming floors.", projectSpecs: [], sections: [], technicalDetails: [], designHighlights: [], results: [] },
  { id: "medical-singapore", title: "Medical Facility — Singapore", category: "carpet-tiles", image: "/images/about/quality-control-inspection.webp", description: "Antimicrobial carpet tiles for hospital wings.", projectSpecs: [], sections: [], technicalDetails: [], designHighlights: [], results: [] },
  { id: "office-tokyo", title: "Corporate Space — Tokyo", category: "carpet-tiles", image: "/images/about/custom-design-support.webp", description: "Acoustic-optimized fit-out for corporate headquarters.", projectSpecs: [], sections: [], technicalDetails: [], designHighlights: [], results: [] }
];
