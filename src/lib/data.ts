export interface ProductColor { name: string; hex: string; }
export interface TechnicalSpecs { fireRating: string; trafficClass: string; yarnSystem: string; backing: string; pileWeight: string; totalThickness: string; soundInsulation: string; antistatic: string; }
export interface Product { id: string; name: string; category: "carpet-tiles" | "wall-to-wall" | "public-area"; description: string; longDescription: string; image: string; moq: string; leadTime: string; spec: { material: string; size: string; colors: ProductColor[]; }; technicalSpecs: TechnicalSpecs; features: string[]; }
export interface CaseSpecItem { label: string; value: string; }
export interface CaseStudy { id: string; title: string; category: "carpet-tiles" | "wall-to-wall" | "public-area"; image: string; description: string; projectSpecs: CaseSpecItem[]; }

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
    id: "nylon-tiles-elite",
    name: "Premium Nylon 6.6 Commercial Carpet Tiles",
    category: "carpet-tiles",
    description: "Modular 50x50cm tiles engineered for high-traffic corporate offices and corridors.",
    longDescription: "Our Premium Nylon 6.6 series represents the pinnacle of modular flooring performance. Designed for the global B2B market, these tiles offer exceptional appearance retention under heavy rolling chair loads and are treated with advanced stain-resistance technology.",
    image: "/images/carpet-tile-premium.jpg",
    moq: "200 SQM",
    leadTime: "10-14 Days",
    spec: { material: "100% Solution-Dyed Nylon 6.6", size: "50x50 cm", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I / EN 13501-1 Bfl-s1", trafficClass: "Class 33 Heavy Commercial", yarnSystem: "Multi-level Loop Pile", backing: "High-Stability Bitumen with Glass Fiber", pileWeight: "20 oz/yd²", totalThickness: "6.5 mm", soundInsulation: "ΔLw 24dB", antistatic: "< 2.0 kV" },
    features: ["Stain Resistance", "Dimensional Stability"]
  },
  {
    id: "luxury-hotel-broadloom",
    name: "Axminster 80/20 Wool Blend Hotel Carpet",
    category: "wall-to-wall",
    description: "Custom jacquard woven broadloom specifically designed for 5-star hotel guest rooms.",
    longDescription: "Vishome Axminster collections offer the ultimate hospitality experience. Combining the natural luxury of New Zealand wool with the durability of anti-static nylon.",
    image: "/images/broadloom-premium.jpg",
    moq: "500 SQM",
    leadTime: "30 Days",
    spec: { material: "80% Wool / 20% Nylon", size: "4m Width Rolls", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I", trafficClass: "Class 32 Hospitality", yarnSystem: "Woven Axminster", backing: "Jute/Cotton", pileWeight: "42 oz/yd²", totalThickness: "11 mm", soundInsulation: "ΔLw 28dB", antistatic: "Permanent" },
    features: ["Custom Pattern", "Luxury Feel"]
  },
  {
    id: "public-area-heavy-duty",
    name: "High-Traffic Public Area Corridor Carpet",
    category: "public-area",
    description: "Extra-durable broadloom rolls for airports and exhibition centers.",
    longDescription: "Engineered for maximum durability in high-traffic public infrastructure projects.",
    image: "/images/public-area-carpets.webp",
    moq: "300 SQM",
    leadTime: "20 Days",
    spec: { material: "Solution-Dyed Nylon", size: "4m Width Rolls", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I", trafficClass: "Class 33 Extra Heavy", yarnSystem: "Tufted Loop Pile", backing: "Heavy-Duty Bitumen", pileWeight: "28 oz/yd²", totalThickness: "8.5 mm", soundInsulation: "ΔLw 22dB", antistatic: "< 2.0 kV" },
    features: ["Heavy Traffic", "Non-slip"]
  }
];

export const productCategories = [
  { id: "carpet-tiles", name: "Commercial Carpet Tiles", description: "Modular solutions.", image: "/images/category-tiles.jpg", slug: "carpet-tiles" },
  { id: "wall-to-wall", name: "Wall-to-Wall Carpets", description: "Seamless broadloom.", image: "/images/category-broadloom.jpg", slug: "wall-to-wall" },
  { id: "public-area", name: "Public Area Carpets", description: "Heavy-duty specialized flooring.", image: "/images/public-area-carpets.webp", slug: "public-area" }
];

export const caseStudies: CaseStudy[] = [
  { id: "hotel-dubai", title: "Luxury Hotel Lobby — Dubai", category: "wall-to-wall", image: "/images/about/hero.png", description: "5,000+ sqm custom Axminster broadloom renovation. ASTM E648 Class I certified.", projectSpecs: [{label: "Area", value: "5,000 sqm"}, {label: "Material", value: "80/20 Wool Nylon"}] },
  { id: "retail-india", title: "Department Store — India", category: "public-area", image: "/images/about/project-application.png", description: "Large scale retail department store navigation flooring.", projectSpecs: [{label: "Market", value: "India"}, {label: "Product", value: "Public Area Rolls"}] },
  { id: "casino-vegas", title: "Casino Floor — Las Vegas", category: "wall-to-wall", image: "/images/about/production-workshop.png", description: "Extreme wear resistance for 24/7 casino gaming floors.", projectSpecs: [{label: "Location", value: "Las Vegas, USA"}, {label: "Durability", value: "Class 33"}] },
  { id: "medical-singapore", title: "Medical Facility — Singapore", category: "carpet-tiles", image: "/images/about/qc.png", description: "Antimicrobial carpet tiles for hospital wings and healthcare spaces.", projectSpecs: [{label: "Standard", value: "CRI Green Label"}, {label: "Feature", value: "Antimicrobial"}] },
  { id: "office-tokyo", title: "Corporate Space — Tokyo", category: "carpet-tiles", image: "/images/about/custom-design.png", description: "Acoustic-optimized fit-out for multi-floor corporate headquarters.", projectSpecs: [{label: "Type", value: "Office HQ"}, {label: "Acoustics", value: "24dB Reduction"}] },
  { id: "airport-changi", title: "Airport Terminal — Singapore", category: "public-area", image: "/images/about/warehouse.png", description: "High-performance corridor carpet rolls for intense luggage traffic.", projectSpecs: [{label: "Project", Changi: "Airport"}, {label: "Class", value: "Extra Heavy Commercial"}] },
  { id: "residence-mumbai", title: "Luxury Residential — Mumbai", category: "wall-to-wall", image: "/images/about/factory-exterior.png", description: "Premium bespoke wool broadloom for high-end residential towers.", projectSpecs: [{label: "Market", value: "India"}, {label: "Style", value: "Hand-tufted Look"}] },
  { id: "edu-australia", title: "Educational Institution — Australia", category: "carpet-tiles", image: "/images/about/project-application.png", description: "Sustainable university flooring for collaborative learning zones.", projectSpecs: [{label: "Region", value: "Australia"}, {label: "Standard", value: "Low VOC"}] },
  { id: "hospitality-korea", title: "Extended-Stay — South Korea", category: "wall-to-wall", image: "/images/about/hero.png", description: "Serviced apartment corridor renovation with fire-rated broadloom.", projectSpecs: [{label: "Project", value: "South Korea"}, {label: "Type", value: "Serviced Apartments"}] },
  { id: "retail-paris", title: "Retail Flagship — Paris", category: "public-area", image: "/images/about/custom-design.png", description: "Custom pattern design for luxury fashion boutique flagship store.", projectSpecs: [{label: "City", value: "Paris, France"}, {label: "Design", value: "Custom Pattern"}] }
];

export const faqSections = [
  {
    title: "Sourcing FAQs",
    questions: [
      { q: "What types of commercial carpets do you offer?", a: "We provide Carpet Tiles, Broadloom Carpets, Modular Systems, and Custom Area Rugs." },
      { q: "What is your typical production lead time?", a: "Standard stock items ship within 7-10 days. Custom orders require 25-35 days." },
      { q: "Do you supply fire-rated carpet?", a: "Yes, our commercial ranges meet ASTM E648 Class I and EN 13501-1 certifications." }
    ]
  }
];
export const certifications = [{ name: "ASTM E648", description: "Fire Rating" }, { name: "CRI Green Label", description: "IAQ" }];
