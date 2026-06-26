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

export const faqSections = [
  {
    title: "Product FAQs",
    questions: [
      { q: "What types of commercial carpets do you offer?", a: "We provide Carpet Tiles, Broadloom Carpets, Modular Carpet Systems, Custom Area Rugs, and Entrance Mat Systems." },
      { q: "What is the difference between carpet tiles and broadloom carpet?", a: "Carpet tiles offer modular installation and easier replacement. Broadloom carpet provides a seamless appearance for grand hospitality spaces." },
      { q: "Are your carpets suitable for high-traffic commercial areas?", a: "Yes. Our commercial flooring solutions are designed for demanding environments such as hotel corridors, office spaces, and airports." },
      { q: "How long do commercial carpets typically last?", a: "Service life depends on traffic, but our commercial-grade carpets are engineered for high appearance retention over many years." }
    ]
  },
  {
    title: "Custom Design FAQs",
    questions: [
      { q: "Can you customize carpet designs?", a: "Yes. We offer custom patterns, colors, and brand graphics developed for your specific project." },
      { q: "Can you match our designer’s color palette?", a: "Absolutely. We match Pantone references, brand guidelines, or physical samples." }
    ]
  },
  {
    title: "Commercial Project FAQs",
    questions: [
      { q: "What information do you need for a quotation?", a: "Please provide floor plans, estimated quantities, project location, and your delivery schedule." },
      { q: "Can you support international commercial projects?", a: "Yes. We provide export packaging and global shipping support for B2B projects." }
    ]
  },
  {
    title: "Manufacturing & Logistics FAQs",
    questions: [
      { q: "What is your production capacity?", a: "Our 50,000㎡ facility supports large-scale developments and bulk procurement." },
      { q: "What certifications can be provided?", a: "Products comply with ASTM E648 Fire Rating, CRI Green Label Plus, and CE standards." }
    ]
  }
];

export const products: Product[] = [
  {
    id: "nylon-tiles-elite",
    name: "Premium Nylon 6.6 Commercial Carpet Tiles",
    category: "carpet-tiles",
    description: "Modular 50x50cm tiles engineered for high-traffic corporate offices and corridors.",
    longDescription: "Our Premium Nylon 6.6 series represents the pinnacle of modular flooring performance. Designed for global commercial standards, these tiles offer exceptional durability.",
    image: "/images/carpet-tile-premium.jpg",
    moq: "200 SQM",
    leadTime: "10-14 Days",
    spec: { material: "100% Nylon 6.6", size: "50x50 cm", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I", trafficClass: "Class 33 Heavy Commercial", yarnSystem: "Loop Pile", backing: "Bitumen with Glass Fiber", pileWeight: "20 oz/yd²", totalThickness: "6.5 mm", soundInsulation: "24dB", antistatic: "< 2.0 kV" },
    features: ["Stain Resistance", "Dimensional Stability"]
  },
  {
    id: "luxury-hotel-broadloom",
    name: "Axminster 80/20 Wool Blend Hotel Carpet",
    category: "wall-to-wall",
    description: "Custom jacquard woven broadloom specifically designed for 5-star hotel guest rooms.",
    longDescription: "Combining the luxury of wool with the durability of nylon, Visfurn Axminster is the standard for high-end hospitality flooring.",
    image: "/images/broadloom-premium.jpg",
    moq: "500 SQM",
    leadTime: "25-35 Days",
    spec: { material: "80% Wool / 20% Nylon", size: "4m width", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I", trafficClass: "Class 32 Hospitality", yarnSystem: "Woven Axminster", backing: "Jute/Cotton", pileWeight: "36-50 oz", totalThickness: "10-12 mm", soundInsulation: "28dB", antistatic: "Permanent" },
    features: ["Bespoke Pattern", "Luxurious Texture"]
  },
  {
    id: "public-area-heavy-duty",
    name: "High-Traffic Public Area Corridor Carpet",
    category: "public-area",
    description: "Extra-durable broadloom rolls for airports, exhibition centers, and commercial passageways.",
    longDescription: "Engineered for maximum durability in high-traffic public infrastructure projects. Low maintenance and high-performance design.",
    image: "/images/public-area-carpets.webp",
    moq: "300 SQM",
    leadTime: "15-20 Days",
    spec: { material: "100% Solution-Dyed Nylon", size: "4m width", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I", trafficClass: "Class 33 Extra Heavy", yarnSystem: "Dense Tufted", backing: "Bitumen/PVC", pileWeight: "28 oz/yd²", totalThickness: "8.5 mm", soundInsulation: "22dB", antistatic: "< 2.0 kV" },
    features: ["Heavy Traffic Resistance", "Non-slip"]
  }
];

export const productCategories = [
  { id: "carpet-tiles", name: "Commercial Carpet Tiles", description: "Modular solutions for offices.", image: "/images/category-tiles.jpg", slug: "carpet-tiles" },
  { id: "wall-to-wall", name: "Wall-to-Wall Carpets", description: "Seamless broadloom for hospitality.", image: "/images/category-broadloom.jpg", slug: "wall-to-wall" },
  { id: "public-area", name: "Public Area Carpets", description: "Heavy-duty specialized flooring.", image: "/images/public-area-carpets.webp", slug: "public-area" }
];

export const certifications = [{ name: "ASTM E648", description: "Fire Rating" }, { name: "CRI Green Label", description: "Indoor Air Quality" }];

export const caseStudies: CaseStudy[] = [
  { id: "hotel-dubai", title: "Luxury Hotel Lobby — Dubai", category: "wall-to-wall", image: "/images/about/about-us-hero-banner.webp", description: "Supplied 5,000+ sqm of custom Axminster broadloom. ASTM E648 Class I certified.", projectSpecs: [{label:"Area", value:"5,000 sqm"}, {label:"Material", value:"Axminster 80/20"}] },
  { id: "retail-india", title: "Department Store — India", category: "public-area", image: "/images/about/commercial-project-application.webp", description: "Retail department store color-coded flooring project.", projectSpecs: [{label:"Type", value:"Retail"}, {label:"Scale", value:"Multi-department"}] },
  { id: "casino-vegas", title: "Casino Floor — Las Vegas", category: "wall-to-wall", image: "/images/about/production-workshop.webp", description: "Extreme wear resistance for 24/7 casino gaming floors.", projectSpecs: [{label:"Durability", value:"Class 33"}, {label:"Traffic", value:"24/7"}] },
  { id: "medical-singapore", title: "Medical Facility — Singapore", category: "carpet-tiles", image: "/images/about/quality-control-inspection.webp", description: "Antimicrobial carpet tiles for hospital wings.", projectSpecs: [{label:"Standard", value:"CRI Green Label"}, {label:"Safety", value:"Antimicrobial"}] },
  { id: "office-tokyo", title: "Corporate Space — Tokyo", category: "carpet-tiles", image: "/images/about/custom-design-support.webp", description: "Acoustic-optimized fit-out for corporate headquarters.", projectSpecs: [{label:"Acoustics", value:"24dB"}, {label:"Format", value:"Carpet Tiles"}] },
  { id: "airport-changi", title: "Airport Terminal — Singapore", category: "public-area", image: "/images/about/carpet-tile-inventory-warehouse.webp", description: "High-performance corridor rolls for intense luggage traffic.", projectSpecs: [{label:"Load", value:"Intense Wheels"}, {label:"Maintenance", value:"Low"}] },
  { id: "residence-mumbai", title: "Luxury Residential — Mumbai", category: "wall-to-wall", image: "/images/about/factory-exterior.webp", description: "Bespoke wool broadloom for high-end residential interiors.", projectSpecs: [{label:"Market", value:"India"}, {label:"Style", value:"Bespoke"}] },
  { id: "edu-australia", title: "Educational Institution — Australia", category: "carpet-tiles", image: "/images/about/commercial-project-application.webp", description: "Sustainable university zones fit-out.", projectSpecs: [{label:"Market", value:"Australia"}, {label:"VOC", value:"Low"}] },
  { id: "hospitality-korea", title: "Extended-Stay — South Korea", category: "wall-to-wall", image: "/images/about/about-us-hero-banner.webp", description: "Hospitality corridor renovation.", projectSpecs: [{label:"Location", value:"Seoul"}, {label:"Compliance", value:"Fire Rated"}] },
  { id: "retail-paris", title: "Retail Flagship — Paris", category: "public-area", image: "/images/about/custom-design-support.webp", description: "Custom pattern design for luxury boutique.", projectSpecs: [{label:"Design", value:"Custom Pattern"}, {label:"City", value:"Paris"}] }
];
