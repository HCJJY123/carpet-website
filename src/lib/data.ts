export interface ProductColor { name: string; hex: string; }
export interface TechnicalSpecs { fireRating: string; trafficClass: string; yarnSystem: string; backing: string; pileWeight: string; totalThickness: string; soundInsulation: string; antistatic: string; }
export interface Product { id: string; name: string; category: "carpet-tiles" | "wall-to-wall" | "public-area"; description: string; longDescription: string; image: string; moq: string; leadTime: string; spec: { material: string; size: string; colors: ProductColor[]; }; technicalSpecs: TechnicalSpecs; features: string[]; }
export interface CaseSpecItem { label: string; value: string; }
export interface CaseSection { title: string; paragraphs: string[]; image?: string; imageAlt?: string; imageCaption?: string; }
export interface CaseStudy { id: string; title: string; subtitle?: string; category: "carpet-tiles" | "wall-to-wall" | "public-area"; image: string; description: string; projectSpecs: CaseSpecItem[]; sections: CaseSection[]; technicalDetails: string[]; designHighlights: string[]; results: string[]; gallery?: string[]; }

export const brandInfo = {
  name: "Vishome Global Commercial Carpet Co., Ltd.",
  shortName: "Visfurn",
  url: "https://www.visfurn.com",
  email: "zara@visfurn.com",
  phone: "+86 152 2288 5400",
  whatsapp: "+86 152 2288 5400",
  address: "Cuihuangkou Town, Wuqing District, Tianjin 301700, China",
  stats: { area: "50,000㎡", employees: "900+", markets: "45+", experience: "15+ Years" }
};

export const products: Product[] = [
  {
    id: "commercial-nylon-tiles",
    name: "Premium Nylon 6.6 Commercial Carpet Tiles",
    category: "carpet-tiles",
    description: "Modular 50x50cm tiles engineered for high-traffic corporate offices and corridors.",
    longDescription: "Our Premium Nylon 6.6 series represents the pinnacle of modular flooring performance.",
    image: "/images/carpet-tile-premium.jpg",
    moq: "200 SQM",
    leadTime: "10-14 Days",
    spec: { material: "100% Nylon 6.6", size: "50x50 cm", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I", trafficClass: "Class 33", yarnSystem: "Loop", backing: "Bitumen", pileWeight: "20oz", totalThickness: "6.5mm", soundInsulation: "24dB", antistatic: "Yes" },
    features: ["Stain Resistance"]
  },
  {
    id: "luxury-hotel-broadloom",
    name: "Axminster 80/20 Wool Blend Hotel Carpet",
    category: "wall-to-wall",
    description: "Custom jacquard woven broadloom specifically designed for 5-star hotel rooms.",
    longDescription: "Visfurn Axminster collections offer the ultimate luxury and durability.",
    image: "/images/broadloom-premium.jpg",
    moq: "500 SQM",
    leadTime: "30 Days",
    spec: { material: "80% Wool / 20% Nylon", size: "4m Width", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "32", yarnSystem: "Woven", backing: "Jute", pileWeight: "40oz", totalThickness: "11mm", soundInsulation: "28dB", antistatic: "Permanent" },
    features: ["Custom Pattern"]
  },
  {
    id: "public-area-heavy-duty",
    name: "High-Traffic Public Area Corridor Carpet",
    category: "public-area",
    description: "Extra-durable broadloom rolls for airports and exhibition centers.",
    longDescription: "Engineered for maximum durability in high-traffic public areas.",
    image: "/images/public-area-carpets.webp",
    moq: "300 SQM",
    leadTime: "20 Days",
    spec: { material: "Solution-Dyed Nylon", size: "4m Width", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I", trafficClass: "Class 33", yarnSystem: "Tufted", backing: "Bitumen", pileWeight: "28oz", totalThickness: "8.5mm", soundInsulation: "22dB", antistatic: "< 2.0 kV" },
    features: ["Heavy Traffic"]
  }
];

export const productCategories = [
  { id: "carpet-tiles", name: "Commercial Carpet Tiles", description: "Modular solutions.", image: "/images/category-tiles.jpg", slug: "carpet-tiles" },
  { id: "wall-to-wall", name: "Wall-to-Wall Carpets", description: "Seamless broadloom.", image: "/images/category-broadloom.jpg", slug: "wall-to-wall" },
  { id: "public-area", name: "Public Area Carpets", description: "Heavy-duty specialized flooring.", image: "/images/public-area-carpets.webp", slug: "public-area" }
];

export const faqSections = [
  {
    title: "Product FAQs",
    questions: [
      { q: "What types of commercial carpets do you offer?", a: "We provide Carpet Tiles, Broadloom Carpets, Modular Carpet Systems, Custom Area Rugs, and Entrance Mat Systems suitable for offices, hotels, healthcare, and public facilities." },
      { q: "What is the difference between carpet tiles and broadloom carpet?", a: "Carpet tiles offer flexible installation and easier replacement. Broadloom carpet provides a seamless appearance and is commonly used in hospitality projects." },
      { q: "Are your carpets suitable for high-traffic commercial areas?", a: "Yes. Our commercial flooring solutions are designed for environments such as hotel corridors, office spaces, airports, schools, and healthcare facilities." },
      { q: "How long do commercial carpets typically last?", a: "Service life depends on traffic level, product specification, and maintenance practices. Commercial-grade carpets maintain performance for years." },
      { q: "What carpet solutions are best for office buildings?", a: "Office projects typically prioritize durability and acoustic performance; carpet tiles are often preferred." },
      { q: "What carpet solutions are best for hotels?", a: "We provide customized recommendations for guest rooms, corridors, ballrooms, and lobbies." },
      { q: "What carpet options are suitable for healthcare facilities?", a: "Healthcare projects require hygiene-focused, durable, and easy-to-maintain flooring." }
    ]
  },
  {
    title: "Custom Design FAQs",
    questions: [
      { q: "Can you customize carpet designs?", a: "Yes. We offer custom patterns, custom colors, brand graphics, and bespoke hospitality collections." },
      { q: "Can you match our designer’s color palette?", a: "Yes. We can develop colors based on Pantone references, brand guidelines, or existing samples." },
      { q: "Can you work directly from architectural drawings?", a: "Absolutely. We regularly work with CAD files, PDF layouts, and interior design packages." },
      { q: "Can you provide project samples before production?", a: "Yes. Available samples include material samples, color swatches, and strike-offs." },
      { q: "Can you develop custom hotel carpet collections?", a: "Yes, we provide fully customized hospitality flooring for all hotel zones." }
    ]
  },
  {
    title: "Commercial Project FAQs",
    questions: [
      { q: "What information do you need to provide a quotation?", a: "Please provide floor plans, quantities, project location, design requirements, and delivery schedule." },
      { q: "Can you assist with specification and product selection?", a: "Yes. Our technical team assists with product selection, traffic analysis, and budget planning." },
      { q: "How long does a commercial carpet project take?", a: "Timeline depends on product type, customization level, and quantity." },
      { q: "Can you support phased deliveries?", a: "Yes. We can arrange staged production and shipment according to construction progress." },
      { q: "Can you support international commercial projects?", a: "Yes. We provide export packaging, shipping coordination, and documentation support." },
      { q: "Can you provide third-party inspections before shipment?", a: "Yes, independent inspections can be arranged upon request." },
      { q: "How can commercial carpet reduce lifecycle costs?", a: "High performance reduces maintenance, replacement frequency, and installation downtime." },
      { q: "Why do developers choose carpet instead of hard flooring?", a: "Key advantages include acoustic comfort, walking safety, and design flexibility." }
    ]
  },
  {
    title: "Manufacturing & Logistics FAQs",
    questions: [
      { q: "What is your production capacity?", a: "Our facilities support large-scale commercial projects and multi-location developments." },
      { q: "How do you ensure quality consistency?", a: "Quality control includes raw material inspection, production monitoring, and finished product verification." },
      { q: "What certifications can be provided?", a: "Products comply with standards for fire performance (ASTM E648), indoor air quality, and durability." },
      { q: "What is your MOQ?", a: "MOQ depends on product type and customization; project-specific recommendations are available." },
      { q: "What warranty or after-sales support do you provide?", a: "We provide technical assistance, maintenance guidance, and project coordination." },
      { q: "Why choose us as your commercial carpet supplier?", a: "B2B expertise, custom design capability, large-scale manufacturing, and global export experience." }
    ]
  }
];

export const certifications = [{ name: "ASTM E648", description: "US Fire Rating" }, { name: "CRI Green Label Plus", description: "Indoor Air Quality" }];

export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    title: "Luxury Hotel Lobby Transformation — Dubai Property",
    category: "wall-to-wall",
    image: "/images/about/hero.png",
    description: "Successfully supplied 5,000+ sqm of custom Axminster broadloom for a major hospitality project. Achievement of ASTM E648 Class I fire rating and brand color matching.",
    projectSpecs: [{ label: "Location", value: "Dubai" }, { label: "Size", value: "5,000 sqm" }],
    sections: [],
    technicalDetails: ["High-traffic woven construction"],
    designHighlights: ["Brand-integrated design"],
    results: ["Enhanced guest experience"]
  },
  {
    id: "case-2",
    title: "Global Tech HQ — Modern Office Fit-out",
    category: "carpet-tiles",
    image: "/images/about/project-application.png",
    description: "Installed high-performance nylon 50x50cm tiles across premium corporate space. Optimized for durability and acoustic comfort.",
    projectSpecs: [{ label: "Type", value: "Office" }, { label: "Standard", value: "CRI Green Label" }],
    sections: [],
    technicalDetails: ["Nylon 6.6 yarn system"],
    designHighlights: ["Modular flexibility"],
    results: ["100% Delivered"]
  }
];
