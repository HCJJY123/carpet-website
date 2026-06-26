export interface ProductColor { name: string; hex: string; }
export interface TechnicalSpecs { fireRating: string; trafficClass: string; yarnSystem: string; backing: string; pileWeight: string; totalThickness: string; soundInsulation: string; antistatic: string; }
export interface Product { id: string; name: string; category: "carpet-tiles" | "wall-to-wall" | "public-area"; description: string; longDescription: string; image: string; moq: string; leadTime: string; spec: { material: string; size: string; colors: ProductColor[]; }; technicalSpecs: TechnicalSpecs; features: string[]; }
export interface CaseSpecItem { label: string; value: string; }
export interface CaseStudy { id: string; title: string; category: "carpet-tiles" | "wall-to-wall" | "public-area"; image: string; description: string; projectSpecs?: CaseSpecItem[]; }

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
      { q: "What types of commercial carpets do you offer?", a: "We provide: Carpet Tiles, Broadloom Carpets, Modular Carpet Systems, Custom Area Rugs, and Entrance Mat Systems. Suitable for offices, hotels, healthcare, education, retail, and public facilities." },
      { q: "What is the difference between carpet tiles and broadloom carpet?", a: "Carpet tiles offer flexible installation and easier replacement. Broadloom carpet provides a seamless appearance and is commonly used in hospitality projects. Our team can recommend the most suitable option based on project requirements." },
      { q: "Are your carpets suitable for high-traffic commercial areas?", a: "Yes. Our commercial flooring solutions are designed for environments such as: Hotel corridors, Office spaces, Airports, Schools, Healthcare facilities, and Retail centers." },
      { q: "How long do commercial carpets typically last?", a: "Service life depends on: Traffic level, Product specification, and Maintenance practices. Commercial-grade carpets are designed to maintain performance and appearance over extended periods." },
      { q: "What carpet solutions are best for office buildings?", a: "Office projects typically prioritize: Durability, Acoustic performance, Easy maintenance, and Design flexibility. Carpet tiles are often preferred for these applications." },
      { q: "What carpet solutions are best for hotels?", a: "Different areas require different specifications: Guest Rooms, Corridors, Ballrooms, Meeting Rooms, and Lobby Areas. We provide customized recommendations for each zone." },
      { q: "What carpet options are suitable for healthcare facilities?", a: "Healthcare projects generally require: Hygiene-focused flooring, Easy maintenance, Noise reduction, and Long-term durability." }
    ]
  },
  {
    title: "Custom Design FAQs",
    questions: [
      { q: "Can you customize carpet designs?", a: "Yes. We offer: Custom Patterns, Custom Colors, Brand Graphics, Wayfinding Designs, and Bespoke Hospitality Collections." },
      { q: "Can you match our designer’s color palette?", a: "Yes. We can develop colors based on: Pantone References, Brand Guidelines, Existing Samples, and Interior Design Concepts." },
      { q: "Can you work directly from architectural drawings?", a: "Absolutely. We regularly work with: CAD Files, PDF Layouts, Interior Design Packages, and Material Specifications." },
      { q: "Can you provide project samples before production?", a: "Yes. Available samples include: Material Samples, Color Swatches, Strike-Offs, and Prototype Samples." },
      { q: "Can you develop custom hotel carpet collections?", a: "Yes. We provide fully customized hospitality flooring solutions for: Guest Rooms, Corridors, Public Areas, Ballrooms, and Meeting Spaces." }
    ]
  },
  {
    title: "Commercial Project FAQs",
    questions: [
      { q: "What information do you need to provide a quotation?", a: "To prepare an accurate quotation, we recommend providing: Floor Plans, Quantities, Project Location, Design Requirements, and Delivery Schedule." },
      { q: "Can you assist with specification and product selection?", a: "Yes. Our technical team can assist with: Product Selection, Traffic Analysis, Budget Planning, and Design Coordination." },
      { q: "How long does a commercial carpet project take?", a: "Project timelines depend on: Product Type, Customization Level, Quantity, and Shipping Destination. Production schedules are provided after design approval." },
      { q: "Can you support phased deliveries?", a: "Yes. We can arrange staged production and shipment schedules according to construction progress." },
      { q: "Can you support international commercial projects?", a: "Yes. We regularly support overseas projects and provide: Export Packaging, Shipping Coordination, Documentation Support, and Project Logistics Planning." },
      { q: "Can you provide third-party inspections before shipment?", a: "Yes. Independent inspections can be arranged according to customer requirements." },
      { q: "How can commercial carpet reduce lifecycle costs?", a: "Commercial carpet can help reduce: Maintenance Costs, Replacement Frequency, Installation Downtime, and Facility Disruption. Lifecycle value is often more important than initial purchase price." },
      { q: "Why do developers choose carpet instead of hard flooring?", a: "Key advantages include: Acoustic Comfort, Walking Comfort, Design Flexibility, Safety Performance, Lower Noise Levels, and Easier Renovation Planning." }
    ]
  },
  {
    title: "Manufacturing & Logistics FAQs",
    questions: [
      { q: "What is your production capacity?", a: "Our manufacturing facilities are capable of supporting large-scale commercial projects and multi-location developments." },
      { q: "How do you ensure quality consistency?", a: "Quality control includes: Raw Material Inspection, Production Monitoring, Finished Product Inspection, Color Consistency Verification, and Packaging Inspection." },
      { q: "What certifications can be provided?", a: "Depending on project requirements, products can comply with standards related to: Fire Performance, Indoor Air Quality, Commercial Durability, and Environmental Performance." },
      { q: "What is your MOQ?", a: "MOQ depends on: Product Type, Design Complexity, and Customization Requirements. Project-specific recommendations are available." },
      { q: "What warranty or after-sales support do you provide?", a: "We provide professional after-sales support for commercial projects, including: Technical Assistance, Product Performance Support, Maintenance Guidance, and Project Coordination." },
      { q: "Why choose us as your commercial carpet supplier?", a: "Key advantages include: Commercial Project Expertise, Custom Design Capability, Large-Scale Manufacturing, Strict Quality Control, Global Export Experience, Reliable Delivery Performance, and Dedicated B2B Support." }
    ]
  }
];

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
    technicalSpecs: { fireRating: "ASTM E648 Class I / EN 13501-1 Bfl-s1", trafficClass: "Class 33 Heavy Commercial", yarnSystem: "Multi-level Loop Pile", backing: "High-Stability Bitumen with Glass Fiber", pileWeight: "20 oz/yd² (680 g/m²)", totalThickness: "6.5 mm", soundInsulation: "ΔLw 24dB", antistatic: "< 2.0 kV (ISO 6356)" },
    features: ["Stain Resistance", "Dimensional Stability", "Anti-microbial"]
  },
  {
    id: "luxury-hotel-broadloom",
    name: "Axminster 80/20 Wool Blend Hotel Carpet",
    category: "wall-to-wall",
    description: "Custom jacquard woven broadloom specifically designed for 5-star hotel rooms and ballrooms.",
    longDescription: "Vishome Axminster collections offer the ultimate hospitality experience. Combining the natural luxury of New Zealand wool with the durability of anti-static nylon, these carpets are woven to withstand the intense traffic of hotel corridors and ballrooms while maintaining a luxurious underfoot feel.",
    image: "/images/broadloom-premium.jpg",
    moq: "500 SQM (Project Based)",
    leadTime: "25-35 Days",
    spec: { material: "80% New Zealand Wool / 20% Anti-static Nylon", size: "4m Width Rolls", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I / BS EN 13501 Bfl-s1", trafficClass: "Class 32/33 Heavy Hospitality", yarnSystem: "Woven Axminster (7x7 / 7x8 / 7x9)", backing: "Woven Polyester / Jute / Cotton", pileWeight: "36oz - 50oz/yd² (1200g - 1700g/m²)", totalThickness: "10mm - 12mm", soundInsulation: "ΔLw 28dB", antistatic: "Permanent Anti-static Carbon Fiber" },
    features: ["Bespoke Pattern", "Extreme Appearance Retention", "Thermal Insulation"]
  },
  {
    id: "public-area-heavy-duty",
    name: "High-Traffic Public Area Corridor Carpet",
    category: "public-area",
    description: "Extra-durable broadloom rolls for airports, exhibition centers, and commercial passageways.",
    longDescription: "Our public area solutions are engineered for maximum durability in high-traffic public infrastructure projects. High-density tufting and durable yarn systems ensure rapid maintenance and long-term appearance retention under intense foot traffic.",
    image: "/images/public-area-carpets.webp",
    moq: "300 SQM",
    leadTime: "15-20 Days",
    spec: { material: "100% Solution-Dyed Wear-Resistant Nylon", size: "4m Width Rolls", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I / EN 13501", trafficClass: "Class 33 Extra Heavy Commercial", yarnSystem: "Tufted Dense Loop / Cut Pile", backing: "High-Density Bitumen / PVC Support", pileWeight: "28 oz/yd² (950 g/m²)", totalThickness: "8.5 mm", soundInsulation: "ΔLw 22dB", antistatic: "< 2.0 kV" },
    features: ["Heavy Traffic Resistance", "Non-slip Backing"]
  }
];

export const productCategories = [
  { id: "carpet-tiles", name: "Commercial Carpet Tiles", description: "Modular solutions for offices.", image: "/images/category-tiles.jpg", slug: "carpet-tiles" },
  { id: "wall-to-wall", name: "Wall-to-Wall Carpets", description: "Seamless broadloom for luxury hospitality.", image: "/images/category-broadloom.jpg", slug: "wall-to-wall" },
  { id: "public-area", name: "Public Area Carpets", description: "Heavy-duty specialized flooring.", image: "/images/public-area-carpets.webp", slug: "public-area" }
];

export const caseStudies: CaseStudy[] = [
  { id: "hotel-dubai", title: "Luxury Hotel Lobby Transformation — Dubai", category: "wall-to-wall", image: "/images/about/hero.png", description: "Successfully supplied 5,000+ sqm of custom Axminster broadloom for a major hospitality project. ASTM E648 Class I certified." },
  { id: "retail-india", title: "Retail Department Store — India", category: "public-area", image: "/images/about/project-application.png", description: "Color-coded navigation flooring for multi-department retail chains." },
  { id: "casino-vegas", title: "Casino Gaming Floor — Las Vegas, USA", category: "wall-to-wall", image: "/images/about/production-workshop.png", description: "High-density woven carpets with extreme wear resistance for 24/7 traffic." },
  { id: "medical-singapore", title: "Medical Facility — Singapore Hospital", category: "carpet-tiles", image: "/images/about/qc.png", description: "Hygienic-focused flooring for hospital wings with antimicrobial backing." },
  { id: "office-tokyo", title: "Corporate Office Space — Tokyo", category: "carpet-tiles", image: "/images/about/custom-design.png", description: "Multi-floor fit-out with high-performance acoustic carpet tiles." },
  { id: "airport-changi", title: "Airport Terminal — Singapore Changi", category: "public-area", image: "/images/about/warehouse.png", description: "Heavy-duty corridor carpet rolls optimized for luggage wheel traffic." },
  { id: "residence-mumbai", title: "Luxury Residential — Mumbai", category: "wall-to-wall", image: "/images/about/factory-exterior.png", description: "Bespoke wool-blend broadloom for high-end residential interiors." },
  { id: "edu-australia", title: "Educational Institution — Australia", category: "carpet-tiles", image: "/images/about/project-application.png", description: "Sustainable carpet tiles for university campus collaborative zones." },
  { id: "hospitality-korea", title: "Extended-Stay Hospitality — South Korea", category: "wall-to-wall", image: "/images/about/hero.png", description: "Serviced apartment corridor and guest room flooring renovation." },
  { id: "retail-paris", title: "Retail Flagship — Paris", category: "public-area", image: "/images/about/custom-design.png", description: "Luxury fashion boutique custom pattern carpet solutions." }
];

export const certifications = [
  { name: "ASTM E648", description: "US Fire Rating Standard" },
  { name: "CRI Green Label Plus", description: "Indoor Air Quality" },
  { name: "ISO 9001:2015", description: "Quality Management" },
  { name: "CE Marking", description: "European Compliance" }
];
