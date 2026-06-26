export interface ProductColor { name: string; hex: string; }
export interface TechnicalSpecs { fireRating: string; trafficClass: string; yarnSystem: string; backing: string; pileWeight: string; totalThickness: string; soundInsulation: string; antistatic: string; }
export interface Product { id: string; name: string; category: "carpet-tiles" | "wall-to-wall" | "public-area"; description: string; longDescription: string; image: string; moq: string; leadTime: string; spec: { material: string; size: string; colors: ProductColor[]; }; technicalSpecs: TechnicalSpecs; features: string[]; }
export interface CaseStudy { id: string; title: string; category: "carpet-tiles" | "wall-to-wall" | "public-area"; image: string; description: string; }

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
      { q: "What types of commercial carpets do you offer?", a: "We provide Carpet Tiles, Broadloom Carpets, Modular Carpet Systems, Custom Area Rugs, and Entrance Mat Systems suitable for offices, hotels, healthcare, and public facilities." },
      { q: "What is the difference between carpet tiles and broadloom carpet?", a: "Carpet tiles offer flexible installation and easier replacement. Broadloom carpet provides a seamless appearance and is commonly used in hospitality projects." },
      { q: "Are your carpets suitable for high-traffic commercial areas?", a: "Yes. Our commercial flooring solutions are designed for environments such as hotel corridors, office spaces, airports, and schools." },
      { q: "How long do commercial carpets typically last?", a: "Service life depends on traffic level and product specification. Our commercial-grade carpets are engineered for extended performance." }
    ]
  },
  {
    title: "Custom Design FAQs",
    questions: [
      { q: "Can you customize carpet designs?", a: "Yes. We offer custom patterns, colors, brand graphics, wayfinding designs, and bespoke hospitality collections." },
      { q: "Can you match our designer’s color palette?", a: "Absolutely. We can develop precise colors based on Pantone references, brand guidelines, or existing samples." },
      { q: "Can you work directly from architectural drawings?", a: "Yes, we regularly work with CAD files, PDF layouts, and interior design packages." }
    ]
  },
  {
    title: "Commercial Project FAQs",
    questions: [
      { q: "What information do you need to provide a quotation?", a: "Please provide floor plans, estimated quantities, project location, design requirements, and delivery schedule." },
      { q: "Can you support international commercial projects?", a: "Yes. We regularly support overseas projects with export packaging, shipping coordination, and documentation support." }
    ]
  },
  {
    title: "Manufacturing & Logistics FAQs",
    questions: [
      { q: "How do you ensure quality consistency?", a: "QC includes raw material inspection, production monitoring, finished product testing, and color verification." },
      { q: "What is your MOQ?", a: "MOQ depends on product type and customization; project-specific recommendations are available." },
      { q: "Why choose Vishome as your commercial carpet supplier?", a: "B2B expertise, custom design capability, large-scale manufacturing, and reliable delivery." }
    ]
  }
];

export const products: Product[] = [
  {
    id: "nylon-tiles-elite",
    name: "Premium Nylon 6.6 Commercial Carpet Tiles",
    category: "carpet-tiles",
    description: "Modular 50x50cm tiles engineered for high-traffic corporate offices and corridors.",
    longDescription: "Our Premium Nylon 6.6 series represents the pinnacle of modular flooring performance. Treated with advanced stain-resistance technology for long-term appearance retention.",
    image: "/images/carpet-tile-premium.jpg",
    moq: "200 SQM",
    leadTime: "10-14 Days",
    spec: { material: "100% Solution-Dyed Nylon 6.6", size: "50x50 cm", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I / EN 13501-1 Bfl-s1", trafficClass: "Class 33 Heavy Commercial", yarnSystem: "Multi-level Loop Pile", backing: "High-Stability Bitumen with Glass Fiber", pileWeight: "20 oz/yd²", totalThickness: "6.5 mm", soundInsulation: "ΔLw 24dB", antistatic: "< 2.0 kV" },
    features: ["Stain Resistance", "Dimensional Stability", "Anti-microbial"]
  },
  {
    id: "luxury-hotel-broadloom",
    name: "Axminster 80/20 Wool Blend Hotel Carpet",
    category: "wall-to-wall",
    description: "Custom jacquard woven broadloom specifically designed for 5-star hotel rooms and ballrooms.",
    longDescription: "Combining the natural luxury of New Zealand wool with the durability of anti-static nylon. Woven Axminster construction for extreme hospitality traffic.",
    image: "/images/broadloom-premium.jpg",
    moq: "500 SQM",
    leadTime: "25-35 Days",
    spec: { material: "80% Wool / 20% Nylon", size: "4m Width Rolls", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I", trafficClass: "Class 32/33 Hospitality", yarnSystem: "Woven Axminster (7x7 / 7x8)", backing: "Woven Polyester / Jute", pileWeight: "36oz - 50oz/yd²", totalThickness: "10mm - 12mm", soundInsulation: "ΔLw 28dB", antistatic: "Permanent" },
    features: ["Bespoke Pattern", "Extreme Durability", "Thermal Insulation"]
  },
  {
    id: "public-area-heavy-duty",
    name: "High-Traffic Public Area Corridor Carpet",
    category: "public-area",
    description: "Extra-durable broadloom rolls for airports, exhibition centers, and commercial passageways.",
    longDescription: "Engineered for maximum durability in high-traffic public infrastructure projects. High-density tufting for rapid maintenance.",
    image: "/images/public-area-carpets.webp",
    moq: "300 SQM",
    leadTime: "15-20 Days",
    spec: { material: "100% Solution-Dyed Wear-Resistant Nylon", size: "4m Width Rolls", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I", trafficClass: "Class 33 Extra Heavy Commercial", yarnSystem: "Tufted Dense Loop", backing: "High-Density Bitumen / PVC", pileWeight: "28 oz/yd²", totalThickness: "8.5 mm", soundInsulation: "ΔLw 22dB", antistatic: "< 2.0 kV" },
    features: ["Heavy Traffic Resistance", "Non-slip Backing"]
  }
];

export const productCategories = [
  { id: "carpet-tiles", name: "Commercial Carpet Tiles", description: "Modular solutions for offices.", image: "/images/category-tiles.jpg", slug: "carpet-tiles" },
  { id: "wall-to-wall", name: "Wall-to-Wall Carpets", description: "Seamless broadloom for luxury hospitality.", image: "/images/category-broadloom.jpg", slug: "wall-to-wall" },
  { id: "public-area", name: "Public Area Carpets", description: "Heavy-duty specialized flooring.", image: "/images/public-area-carpets.webp", slug: "public-area" }
];

export const certifications = [{ name: "ASTM E648", description: "US Fire Rating" }, { name: "CRI Green Label Plus", description: "Indoor Air Quality" }];

export const caseStudies: CaseStudy[] = [
  { id: "hotel-dubai", title: "Luxury Hotel Lobby — Dubai", category: "wall-to-wall", image: "/images/about/hero.png", description: "5,000+ sqm custom Axminster installation." },
  { id: "retail-india", title: "Department Store — India", category: "public-area", image: "/images/about/project-application.png", description: "Color-coded navigation flooring." },
  { id: "casino-vegas", title: "Casino Floor — Las Vegas", category: "wall-to-wall", image: "/images/about/production-workshop.png", description: "24/7 heavy-traffic woven carpets." },
  { id: "medical-singapore", title: "Medical Facility — Singapore", category: "carpet-tiles", image: "/images/about/qc.png", description: "Hygienic-focused hospital wings." },
  { id: "office-tokyo", title: "Corporate Space — Tokyo", category: "carpet-tiles", image: "/images/about/custom-design.png", description: "Multi-floor fit-out." },
  { id: "airport-changi", title: "Airport Terminal — Singapore", category: "public-area", image: "/images/about/warehouse.png", description: "Heavy-duty corridor carpet rolls." },
  { id: "residence-mumbai", title: "Luxury Residential — Mumbai", category: "wall-to-wall", image: "/images/about/factory-exterior.png", description: "Bespoke residential interiors." },
  { id: "edu-australia", title: "Educational Institution — Australia", category: "carpet-tiles", image: "/images/about/project-application.png", description: "Sustainable university zones." },
  { id: "hospitality-korea", title: "Extended-Stay — South Korea", category: "wall-to-wall", image: "/images/about/hero.png", description: "Guest room renovation." },
  { id: "retail-paris", title: "Retail Flagship — Paris", category: "public-area", image: "/images/about/custom-design.png", description: "Fashion boutique pattern carpets." }
];
