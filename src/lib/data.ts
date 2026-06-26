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
    technicalSpecs: { fireRating: "ASTM E648 Class I", trafficClass: "Class 33 Heavy Commercial", yarnSystem: "Multi-level Loop Pile", backing: "High-Stability Bitumen with Glass Fiber", pileWeight: "20 oz/yd²", totalThickness: "6.5 mm", soundInsulation: "ΔLw 24dB", antistatic: "< 2.0 kV" },
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

export const faqSections = [
  {
    title: "Product FAQs",
    questions: [
      { q: "What types of commercial carpets do you offer?", a: "We provide Carpet Tiles, Broadloom Carpets, Modular Carpet Systems, Custom Area Rugs, and Entrance Mat Systems." },
      { q: "What is the difference between carpet tiles and broadloom carpet?", a: "Carpet tiles offer flexible installation and easier replacement. Broadloom carpet provides a seamless appearance for hospitality projects." },
      { q: "Are your carpets suitable for high-traffic commercial areas?", a: "Yes. Our commercial flooring solutions are designed for environments such as hotel corridors, office spaces, airports, and healthcare facilities." },
      { q: "How long do commercial carpets typically last?", a: "Service life depends on traffic and product specification, but commercial-grade carpets are engineered for extended performance." }
    ]
  },
  {
    title: "Custom Design FAQs",
    questions: [
      { q: "Can you customize carpet designs?", a: "Yes. We offer custom patterns, custom colors, brand graphics, and bespoke hospitality collections." },
      { q: "Can you match our designer’s color palette?", a: "Yes. We develop colors based on Pantone references, brand guidelines, or existing samples." },
      { q: "Can you work directly from architectural drawings?", a: "Absolutely. We regularly work with CAD Files, PDF Layouts, and Interior Design Packages." },
      { q: "Can you provide project samples before production?", a: "Yes. Available samples include material samples, swatches, strike-offs, and prototype samples." }
    ]
  },
  {
    title: "Commercial Project FAQs",
    questions: [
      { q: "What information do you need to provide a quotation?", a: "Please provide floor plans, quantities, project location, design requirements, and delivery schedule." },
      { q: "Can you assist with specification and product selection?", a: "Yes. Our technical team can assist with product selection, traffic analysis, and budget planning." },
      { q: "Can you support international commercial projects?", a: "Yes. We regularly support overseas projects with export packaging and documentation support." },
      { q: "How can commercial carpet reduce lifecycle costs?", a: "Commercial carpet reduces maintenance costs, replacement frequency, and installation downtime." }
    ]
  },
  {
    title: "Manufacturing & Logistics FAQs",
    questions: [
      { q: "What is your production capacity?", a: "Our facilities support large-scale commercial projects and multi-location developments." },
      { q: "How do you ensure quality consistency?", a: "QC includes raw material inspection, production monitoring, finished product testing, and color verification." },
      { q: "What certifications can be provided?", a: "Products comply with ASTM E648 Fire Performance, CRI Green Label Plus, and Commercial Durability standards." },
      { q: "What is your MOQ?", a: "MOQ depends on product type and customization; project-specific recommendations are available." },
      { q: "Why choose Vishome as your commercial carpet supplier?", a: "B2B expertise, custom design capability, large-scale manufacturing, and reliable delivery performance." }
    ]
  }
];

export const certifications = [{ name: "ASTM E648", description: "US Fire Rating" }, { name: "CRI Green Label Plus", description: "Indoor Air Quality" }];

export const caseStudies = [
  { id: "hotel-dubai", title: "Luxury Hotel Lobby — Dubai", category: "wall-to-wall", image: "/images/about/hero.png", description: "Supplied 5,000+ sqm of custom Axminster broadloom. ASTM E648 Class I certified." },
  { id: "retail-india", title: "Department Store — India", category: "public-area", image: "/images/about/project-application.png", description: "Color-coded navigation flooring for retail projects." },
  { id: "casino-vegas", title: "Casino Floor — Las Vegas", category: "wall-to-wall", image: "/images/about/production-workshop.png", description: "High-density woven carpets with extreme wear resistance." },
  { id: "medical-singapore", title: "Medical Facility — Singapore", category: "carpet-tiles", image: "/images/about/qc.png", description: "Hygienic-focused flooring for hospital wings." },
  { id: "office-tokyo", title: "Corporate Space — Tokyo", category: "carpet-tiles", image: "/images/about/custom-design.png", description: "Multi-floor fit-out with high-performance acoustic carpet tiles." },
  { id: "airport-changai", title: "Airport Terminal — Singapore", category: "public-area", image: "/images/about/warehouse.png", description: "Heavy-duty corridor carpet rolls for high traffic." }
];
