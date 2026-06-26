export interface ProductColor { name: string; hex: string; }
export interface TechnicalSpecs { fireRating: string; trafficClass: string; yarnSystem: string; backing: string; pileWeight: string; totalThickness: string; soundInsulation: string; antistatic: string; }
export interface Product { id: string; name: string; category: "carpet-tiles" | "wall-to-wall" | "public-area"; description: string; longDescription: string; image: string; moq: string; leadTime: string; spec: { material: string; size: string; colors: ProductColor[]; }; technicalSpecs: TechnicalSpecs; features: string[]; }

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
  { id: "nylon-tiles-elite", name: "Premium Nylon 6.6 Tiles", category: "carpet-tiles", description: "Heavy-duty modular flooring.", longDescription: "B2B performance leader.", image: "/images/carpet-tile-premium.jpg", moq: "200", leadTime: "14 Days", spec: { material: "Nylon 6.6", size: "50x50", colors: [] }, technicalSpecs: { fireRating: "Class I", trafficClass: "33", yarnSystem: "Loop", backing: "Bitumen", pileWeight: "20oz", totalThickness: "6.5mm", soundInsulation: "24dB", antistatic: "Yes" }, features: ["Fire Rated"] }
];

export const productCategories = [
  { id: "carpet-tiles", name: "Commercial Carpet Tiles", description: "Modular office solutions.", image: "/images/category-tiles.jpg", slug: "carpet-tiles" },
  { id: "wall-to-wall", name: "Wall-to-Wall Carpets", description: "Hospitality broadloom.", image: "/images/category-broadloom.jpg", slug: "wall-to-wall" },
  { id: "public-area", name: "Public Area Carpets", description: "Heavy-duty flooring.", image: "/images/public-area-carpets.webp", slug: "public-area" }
];

export const faqSections = [{ title: "Support", questions: [{ q: "Fire rating?", a: "ASTM E648 Class I." }] }];
export const certifications = [{ name: "ASTM E648", description: "US Fire Rating" }];

export const caseStudies = [
  { id: "hotel-dubai", title: "Luxury Hotel Lobby Transformation — Dubai", category: "wall-to-wall", image: "/images/about/hero.png", description: "Supplied 5,000+ sqm of custom Axminster broadloom. ASTM E648 Class I certified." },
  { id: "retail-india", title: "Retail Department Store — India", category: "public-area", image: "/images/about/project-application.png", description: "Color-coded navigation flooring for multi-department retail chains." },
  { id: "casino-vegas", title: "Casino Gaming Floor — Las Vegas, USA", category: "wall-to-wall", image: "/images/about/production-workshop.png", description: "High-density woven carpets with extreme wear resistance for 24/7 traffic." },
  { id: "medical-singapore", title: "Medical Facility — Singapore Hospital", category: "carpet-tiles", image: "/images/about/qc.png", description: "Hygienic-focused flooring for hospital wings with antimicrobial backing." },
  { id: "office-tokyo", title: "Corporate Office Space — Tokyo", category: "carpet-tiles", image: "/images/about/custom-design.png", description: "Multi-floor fit-out with high-performance acoustic carpet tiles." },
  { id: "airport-changai", title: "Airport Terminal — Singapore Changi", category: "public-area", image: "/images/about/warehouse.png", description: "Heavy-duty corridor carpet rolls optimized for luggage wheel traffic." },
  { id: "residence-mumbai", title: "Luxury Residential — Mumbai", category: "wall-to-wall", image: "/images/about/factory-exterior.png", description: "Bespoke wool-blend broadloom for high-end residential interiors." },
  { id: "edu-australia", title: "Educational Institution — Australia", category: "carpet-tiles", image: "/images/about/project-application.png", description: "Sustainable carpet tiles for university campus collaborative zones." },
  { id: "hospitality-korea", title: "Extended-Stay Hospitality — South Korea", category: "wall-to-wall", image: "/images/about/hero.png", description: "Serviced apartment corridor and guest room flooring renovation." },
  { id: "retail-paris", title: "Retail Flagship — Paris", category: "public-area", image: "/images/about/custom-design.png", description: "Luxury fashion boutique custom pattern carpet solutions." }
];
