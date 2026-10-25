import type { Product } from "./data";
import { carpetTileEvidence } from "./carpet-tile-evidence";

type Profile = {
  name: string;
  summary: string;
  construction: string;
  application: string;
  checks: string[];
};

export type ComparisonOption = {
  supplier: string;
  product: string;
  construction: string;
  format: string;
  nextStep: string;
  source: string;
};

export const reviewedOn = "22 October 2026";

// Construction and dimension references come from the existing product catalog.
// They are not independent laboratory verification or certificates.
const profiles: Record<string, Profile> = {
  "staggered-block-pp-office-carpet-tiles": {
  "name": "Linear Block PP Carpet Tiles 50×50 cm for Offices",
  "summary": "Review this gray linear-block carpet tile design for office layouts. The supplier reference specifies a PP face, PVC backing and nominal 50×50 cm format; approve the offered construction and sample before ordering. FOB price: Request a project quotation. Port: tianjingang.",
  "construction": "The supplier technical table lists a 100% polypropylene face, PVC backing, 520 g/m² pile weight, 4.0±0.5 mm pile height and approximately 6.0 mm total thickness. The nominal 50×50 cm format covers 0.25 m² per tile; the listed packing is 20 pieces / 5 m² per carton. These are supplier-reference values, not independent test results. Confirm the order-specific sheet and sample; the supplier page contains conflicting pile-construction labels.",
  "application": "Use the edited gray, blue and charcoal references to compare office work zones and meeting-room layouts. Approve a physical mock-up of monolithic or quarter-turn placement and confirm the fixing system, subfloor and maintenance method. No washable, waterproof, fire-class, acoustic or rolling-chair rating is claimed.",
  "checks": [
    "Confirm supplier-reference PP, PVC and 50×50 cm specification for the quoted SKU",
    "Approve colour, linear-block direction and adjoining tile layout",
    "Confirm backing, fixing, cleaning and intended-use evidence",
    "Agree quantity, packing, quotation and production schedule"
  ]
},
  "balance-polypropylene-carpet-tiles": {
    name: "Balance 50×50 cm PP Carpet Tiles with PVC Backing",
    summary: "Balance carpet tiles use a polypropylene loop-pile face and PVC backing in a nominal 50×50 cm format for office floor planning. Confirm the physical sample, installation method and project requirements before ordering. Supply terms are FOB Tianjin Port.",
    construction: "The catalog specifies polypropylene, machine-made loop pile and PVC backing. A nominal 50×50 cm tile covers 0.25 m²; 4 tiles cover 1 m² before cutting losses. The supplier record lists 20 pieces per carton, equivalent to 5 m² at this format.",
    application: "Use the charcoal, gray and lime-accent references to plan office work areas and reception layouts. Confirm the direction of the pattern, fixing method and spare-tile provision. Water-resistant wording does not establish waterproof joints or a washable floor system.",
    checks: ["50×50 cm dimensions and edge alignment", "PP loop-pile face and PVC backing", "Fixing method and subfloor moisture conditions", "Packing, quantity and required reports"],
  },
  "gradient-accent-office-carpet-tiles": {
    name: "50×50 cm PP Loop Carpet Tiles with Bitumen Backing",
    summary: "These 50×50 cm office carpet tiles use polypropylene loop pile, bitumen backing and a catalog pile-weight reference of 420 g/m². Review the gray and accent-color sample, layout and written specification before ordering FOB Tianjin Port.",
    construction: "The catalog identifies a 50×50 cm square, polypropylene loop pile and 420 g/m² pile weight with bitumen backing. Four uncut tiles cover 1 m². Elongated color samples in an image do not change the ordered square format.",
    application: "Coordinate gray ground colors and accent bands across desks, meeting rooms and circulation routes. Confirm the laying direction against a square physical sample. Pile weight alone does not establish rolling-chair, fire or acoustic performance.",
    checks: ["50×50 cm square sample", "420 g/m² pile-weight reference", "Bitumen backing and fixing method", "Pattern alignment and spare-stock quantity"],
  },
  "linear-accent-commercial-carpet-tiles": {
    name: "Linear Accent Commercial Carpet Tiles",
    summary: "Linear Accent is a gray and red carpet-tile design reference for office projects. Seven design illustrations show the proposed appearance. Fiber, tile dimensions, backing and performance require confirmation through a physical sample and written specification before ordering.",
    construction: "The 7 design illustrations show a charcoal and gray ground with red linear accents. They do not establish tile dimensions, fiber composition or backing. Request a product sheet and physical sample before calculating coverage or specifying the design.",
    application: "Review broken-line alignment across adjoining modules and the placement of red accents around desks or meeting areas. Confirm the actual module size and laying direction before approving the floor plan.",
    checks: ["Physical color and texture sample", "Exact module dimensions", "Fiber, backing and fixing method", "Project performance requirements and quotation"],
  },
  "heathered-gray-modular-carpet-tiles": {
    name: "Heathered Gray Modular Carpet Tiles",
    summary: "Heathered Gray is a modular carpet design reference in light gray, mid-gray and charcoal. Seven illustrations support sample discussion. Confirm dimensions, fiber, backing, installation and project performance in writing before ordering; the images do not establish technical specifications.",
    construction: "The 7 illustrations present 3 shade references: light gray, mid-gray and charcoal. Exact dimensions, fiber, backing, pile weight and thickness remain unconfirmed. No coverage calculation can be made until the module dimensions are specified.",
    application: "Compare the three gray tones under the intended lighting and decide how adjoining modules should align. Approve a physical sample rather than using the screen image as the production color reference.",
    checks: ["Approved gray shade under site lighting", "Module dimensions and layout", "Fiber and backing specification", "Installation, test documents and commercial terms"],
  },
  "pp-pvc-backed-office-carpet-tiles": {
    name: "50×50 cm PP PVC-Backed Office Carpet Tiles",
    summary: "These office carpet tiles use a polypropylene loop-pile face and PVC backing in a nominal 50×50 cm square format. Review the striped sample and installation specification before ordering. Request a quotation for the selected color and quantity, FOB Tianjin Port.",
    construction: "The catalog lists a nominal 50×50 cm square, polypropylene face and PVC backing. Each nominal tile covers 0.25 m², so 4 uncut tiles cover 1 m². Confirm tolerances and packing against the nominated product sheet.",
    application: "Specify the stripe direction for offices, meeting rooms and corridors before preparing the layout. Confirm the approved adhesive or fixing system and replacement procedure with the installer; a PVC backing does not establish a loose-lay or self-adhesive system.",
    checks: ["50×50 cm dimensions and tolerances", "Striped sample and laying direction", "PVC backing and fixing compatibility", "Quantity, packing and project documents"],
  },
  "luxury-hotel-carpet-tile-50x50cm": {
    name: "50×50 cm Nylon or PP Hotel Carpet Tiles",
    summary: "These 50×50 cm hotel carpet tiles are offered with nylon or polypropylene face options and project-selected backing. The catalog lists 500–780 g/m² pile-weight options. Confirm one construction, physical sample and required test documents before ordering.",
    construction: "The catalog lists a 50×50 cm format, 500–780 g/m² pile weight and 5.5–7.0 mm thickness options. Nylon and PP are alternative face specifications; confirm the selected face, cut or loop pile and backing as one product configuration.",
    application: "Evaluate modules for guestroom, corridor or renovation layouts using the required traffic, cleaning and fixing conditions. PVC cushion, bitumen and PE backing options require separate specification; a report for one backing does not establish another configuration's result.",
    checks: ["Nylon or PP face selection", "500–780 g/m² pile-weight option", "Backing and installation compatibility", "Room-zone requirements and matching reports"],
  },
  "ecocore-pe-backing-carpet-tiles": {
    name: "EcoCore 50×50 cm PE-Backed Carpet Tiles",
    summary: "EcoCore carpet tiles use a 50×50 cm format with a PE backing option and a catalog pile-weight range of 500–600 g/m². Confirm the selected face fiber, backing composition, sample and installation method before specifying the product for an office or hotel project.",
    construction: "The catalog describes 50×50 cm tufted multi-level loop tiles with PE backing, 500–600 g/m² pile weight and 6.0–7.0 mm thickness options. Confirm the final face fiber and backing composition in the written product sheet.",
    application: "Compare PE-backed samples with the specified subfloor, fixing system and cleaning plan. A PE material description alone does not establish recycling access, VOC results, fire performance or acoustic performance for the proposed floor assembly.",
    checks: ["50×50 cm tile and loop construction", "Selected face fiber and PE backing composition", "500–600 g/m² pile-weight option", "Installation and construction-specific documents"],
  },
  "50x50-nylon-pp-office-carpet-tiles": {
    name: "50×50 cm Nylon or PP Office Carpet Tiles",
    summary: "These 50×50 cm office carpet tiles offer nylon or polypropylene face options with project-selected backing. The catalog lists 450–650 g/m² pile weight. Confirm the selected construction and physical sample before comparing quotations or approving the office layout.",
    construction: "The catalog lists 50×50 cm tiles, 450–650 g/m² pile-weight options and 5.5–7.0 mm thickness options. Nylon and PP are alternatives, not a declared blend. Specify one face fiber and backing combination for the quoted order.",
    application: "Review color, loop profile and directional layout for workstations, meeting rooms and circulation areas. Approve backing and fixing compatibility with the installer before placing an order or evaluating selective tile replacement.",
    checks: ["Nylon or PP face selection", "50×50 cm format and laying direction", "450–650 g/m² pile-weight option", "Backing, fixing and office-zone requirements"],
  },
  "pp-bitumen-backed-office-carpet-tiles": {
    name: "50×50 cm PP Bitumen-Backed Carpet Tiles",
    summary: "These 50×50 cm office carpet tiles use polypropylene loop pile and bitumen backing. The catalog lists 450–650 g/m² pile-weight options. Confirm the color sample, selected construction, fixing method and required performance documents before ordering FOB Tianjin Port.",
    construction: "The catalog specifies polypropylene loop pile, bitumen backing and a 50×50 cm format, with 450–650 g/m² pile-weight options. One nominal tile covers 0.25 m². Confirm exact thickness and dimensional tolerances in the nominated product sheet.",
    application: "Evaluate the selected tile for offices, reception areas and circulation routes against the intended traffic and cleaning plan. Bitumen describes the backing material; it does not establish adhesive compatibility or an independently tested performance class.",
    checks: ["PP face and bitumen backing", "50×50 cm sample and dimensional tolerance", "Selected pile weight and thickness", "Fixing, cleaning and project evidence"],
  },
  "nylon-office-carpet-tile": {
    name: "50×50 cm Nylon Office Carpet Tiles",
    summary: "This office carpet tile uses a nylon loop-pile face in a 50×50 cm format. Catalog references list 680 g/m² pile weight and 6.5 mm total thickness. Confirm the backing, physical sample, installation and project-specific test documents before ordering.",
    construction: "The catalog lists 100% nylon, tufted loop pile, a nominal 50×50 cm square, 24 oz (680 g/m²) pile weight and 6.5 mm total thickness. Bitumen is the listed backing; PVC or cushion alternatives require their own approved specification.",
    application: "Use the floor plan to coordinate tile direction, access-floor panels and replacement stock. A nominal 50×50 cm tile covers 0.25 m² before trimming; confirm actual coverage and wastage with the installer rather than treating net floor area as the order quantity.",
    checks: ["100% nylon face and 50×50 cm format", "680 g/m² pile-weight reference", "Selected backing and fixing system", "Rolling-chair, fire and cleaning requirements"],
  },
  "gray-line-nylon-office-hotel-carpet-tiles": {
    name: "Gray Line 50×50 cm Office and Hotel Carpet Tiles",
    summary: "Gray Line carpet tiles offer a 50×50 cm modular format with nylon or polypropylene face options. The catalog lists 450–650 g/m² pile weight. Approve the gray and accent-color sample, backing and floor layout before placing a project order.",
    construction: "The catalog lists 50×50 cm tufted multi-level loop tiles, 450–650 g/m² pile weight and 5.5–7.0 mm thickness options. Select nylon or PP face and the specified PVC, bitumen or PE backing before comparing price or test documents.",
    application: "Plan the gray field and accent modules around workstations, hotel circulation and renovation boundaries. Confirm pattern direction and reserve tiles from the approved production lot; a design image does not establish exact fiber or backing.",
    checks: ["50×50 cm format and accent layout", "Selected nylon or PP face", "450–650 g/m² pile-weight option", "Backing, installation and room-zone evidence"],
  },
  "commercial-nylon-tiles": {
    name: "Nylon 6.6 50×50 cm Commercial Carpet Tiles",
    summary: "These commercial carpet tiles use a nylon 6.6 face in a 50×50 cm format with bitumen backing. The catalog lists 20 oz pile weight and 6.5 mm total thickness. Confirm the sample and project-specific performance documentation before ordering.",
    construction: "The catalog lists 100% nylon 6.6 loop pile, bitumen backing, 50×50 cm dimensions, 20 oz pile weight and 6.5 mm total thickness. These are construction references; verify the nominated product sheet against the supplied sample.",
    application: "Evaluate the selected construction for offices, corridors and other commercial zones using the project's traffic, rolling-load, maintenance and fixing requirements. Neither a nylon 6.6 label nor a pile-weight value independently establishes a certified traffic or fire classification.",
    checks: ["Nylon 6.6 identification", "50×50 cm sample and edge alignment", "20 oz and 6.5 mm references", "Bitumen fixing method and project documents"],
  },
  "luxury-hotel-broadloom": {
    name: "Custom Axminster 80/20 Wool-Nylon Hotel Carpet",
    summary: "This Axminster hotel carpet uses a woven 80% wool and 20% nylon construction with a catalog roll-width reference of 4 m. Submit the pattern and floor plan, then approve the sample, density, roll layout and project requirements before production. Supply terms are FOB Tianjin Port.",
    construction: "The catalog lists woven Axminster, 80% wool and 20% nylon, a 4 m roll-width reference, 40 oz pile weight and 11 mm total thickness. Axminster and Wilton are separate woven constructions; a request for Wilton requires a separate specification.",
    application: "For hotel corridors, guestrooms and ballrooms, provide the pattern repeat, color references and roll layout. A 4 m roll width does not guarantee a seam-free installation; room geometry, orientation and repeat matching determine the cutting plan.",
    checks: ["80/20 fiber composition and Axminster construction", "Pattern repeat, colors and weaving density", "4 m roll reference and seam plan", "Room-zone requirements and matching test documents"],
  },
  "3d-printed-hotel-carpet": {
    name: "Custom Printed Nylon Hotel Carpet",
    summary: "This hotel carpet applies a custom printed pattern to a nylon broadloom surface. Catalog references list 4 m roll width, 32 oz pile weight and 9 mm thickness. Approve the artwork, physical sample, roll plan and project requirements before production, FOB Tianjin Port.",
    construction: "The catalog lists a nylon printed face, 4 m roll width, 32 oz pile weight, 9 mm total thickness and PP-plus-latex ActionBac backing. The printed pattern is distinct from a pattern formed by Axminster or Wilton weaving.",
    application: "Provide the artwork, scale, repeat and intended orientation for guestrooms, corridors or hospitality public areas. A 4 m width must be checked against the actual floor plan. Approve a physical strike-off for color; screen artwork is not production color approval.",
    checks: ["Artwork scale and repeat", "Nylon face and 4 m roll reference", "32 oz and 9 mm construction references", "Physical strike-off, seam plan and required reports"],
  },
  "custom-luxury-hotel-room-carpet": {
    name: "Custom Hotel Room Wall-to-Wall Carpet",
    summary: "VCARPETS supplies custom wall-to-wall carpet for hotel rooms using a project-confirmed construction. Provide room dimensions, quantity, destination, delivery date and performance requirements. Approve the material, backing, pattern and physical sample before production; no fixed roll width or performance class is established here.",
    construction: "Review 5 quotation inputs: room dimensions, quantity, destination, required delivery date and performance requirements. The catalog describes project-specific nylon or wool-nylon options; exact fiber composition, pile weight, thickness and roll width require a written specification.",
    application: "Coordinate the guestroom, bedside and entrance layout with the intended cleaning procedure. Confirm the seam positions, door clearances and batch-color reference with the installer before approving the cutting plan.",
    checks: ["Room measurements and door clearances", "Face material, backing and thickness", "Pattern scale and seam positions", "Sample approval and required performance documents"],
  },
  "3d-printed-banquet-hall-carpet": {
    name: "Custom Printed Banquet Hall Carpet",
    summary: "This banquet hall carpet uses a printed broadloom construction with a catalog roll-width reference of 4 m. The listed options include 32–45 oz pile weight and 9–12 mm total thickness. Confirm the face fiber, artwork, seam plan and venue requirements before production.",
    construction: "The catalog lists printed cut-pile broadloom, 4 m width, 32–45 oz pile-weight options and 9–12 mm thickness options. Select the face fiber and backing as one construction before approving the sample or comparing quotations.",
    application: "Check the pattern scale across partitions, entrances and banquet seating layouts. The 4 m roll-width reference is a layout input, not a guarantee of seam-free coverage. Confirm chair movement, cleaning and local venue requirements against the nominated construction.",
    checks: ["Face fiber and backing selection", "32–45 oz pile-weight option", "9–12 mm thickness and door clearance", "Artwork repeat, seam plan and venue requirements"],
  },
  "glitter-hotel-corridor-broadloom-carpet": {
    name: "Glitter Pattern Hotel Corridor Broadloom Carpet",
    summary: "This corridor carpet uses patterned tufted broadloom with a catalog roll-width reference of 4 m. Confirm the face fiber, backing, pile weight, pattern repeat and corridor cutting plan before ordering. Required fire or traffic performance must be supported by documents for the selected construction.",
    construction: "The catalog describes patterned tufted broadloom with a 4 m roll-width reference. The product name identifies a design direction; it does not establish reflective performance, fiber composition or a fire classification. Confirm pile weight, thickness and backing in the written specification.",
    application: "Plan corridor borders, lift-lobby transitions and door positions using the pattern repeat and the 4 m roll reference. Record how joins will align at corners and intersections before approving the sample and cutting plan.",
    checks: ["4 m roll-width reference", "Pattern repeat and corridor borders", "Pile weight, thickness and backing", "Seam positions and required project documents"],
  },
  "singapore-casino-carpet": {
    name: "Custom Floral Loop-Pile Casino Carpet for Singapore",
    summary: "This floral casino carpet is quoted to an approved pattern, loop-pile construction and backing specification. Provide the floor plan, quantity, destination, required date and venue standards. Confirm the fiber, format and physical sample before production; Singapore in the title does not establish local certification.",
    construction: "Provide 5 project inputs: floor plan, quantity, destination, required date and venue standards. The catalog identifies a loop-pile design direction; exact fiber, backing, roll or modular format, pile weight and thickness require confirmation for the selected order.",
    application: "Coordinate the floral repeat with gaming areas, circulation routes and equipment positions. Review maintenance access and joins with the installer. A Singapore project brief requires its own document review; the destination name is not evidence of code approval.",
    checks: ["Loop-pile sample and final fiber", "Floral repeat and equipment layout", "Selected format and backing", "Venue standards and supporting documents"],
  },
  "custom-floral-printed-hotel-carpet": {
    name: "Custom Floral Printed Wall-to-Wall Hotel Carpet",
    summary: "This floral hotel carpet uses a printed tufted broadloom format with project-selected fiber and backing. Submit the floor plan, artwork, quantity, destination and required date. Approve the construction, physical strike-off and cutting plan before production, FOB Tianjin Port.",
    construction: "Submit 5 quotation inputs: floor plan, artwork, quantity, destination and required date. The catalog offers PP, nylon, polyester or wool-blend options. Roll width, pile weight, thickness and backing must be specified for one selected construction rather than inferred from the floral image.",
    application: "Confirm repeat size and orientation through guestrooms, corridors and room transitions. Use the physical strike-off to check color and texture. Patterned imagery alone does not identify the face fiber or demonstrate fire, acoustic or traffic performance.",
    checks: ["Printed tufted construction and face fiber", "Floral scale, repeat and color reference", "Selected width, backing and cutting plan", "Physical strike-off and project documents"],
  },
  "gold-mining-carpet-mat": {
    name: "Sluice Box Matting and PVC Gold Mining Carpet",
    summary: "This PVC miners-moss matting is a sluice-box component, with catalog references of 1 m × 15 m rolls and 10, 15 or 20 mm thickness options. Match the selected mat to the sluice dimensions and test operating conditions; no gold-recovery percentage is established by this page.",
    construction: "The catalog lists PVC or vinyl miners-moss matting in a 1 m × 15 m roll, with 10, 15 or 20 mm thickness options. A nominal roll covers 15 m² before cutting. Confirm the selected structure and backing against the sample and equipment dimensions.",
    application: "Provide sluice width, bed length, feed size and operating conditions before choosing a mat. Test the nominated mat with the actual feed and water conditions. Carpet thickness and appearance do not establish a gold-recovery rate or guarantee recovery of a particular particle size.",
    checks: ["Sluice width and bed length", "10, 15 or 20 mm thickness option", "Selected mat structure and attachment", "Feed and water conditions for a trial"],
  },
  "public-area-heavy-duty": {
    name: "Nylon Public Area Corridor Carpet",
    summary: "This public-area corridor carpet uses a solution-dyed nylon tufted construction. Catalog references list 4 m width, 28 oz pile weight and 8.5 mm thickness. Confirm the backing, installation and project-specific fire, traffic and maintenance requirements before ordering.",
    construction: "The catalog lists solution-dyed nylon, tufted construction, bitumen backing, 4 m width, 28 oz pile weight and 8.5 mm thickness. Verify the selected construction and dimensions in the product sheet before preparing an installation or procurement plan.",
    application: "Review corridors and public interiors by traffic zone, cleaning routine and equipment movement. A 4 m roll-width reference does not establish the number or position of joins. Provide the floor plan and required performance criteria for the quoted construction.",
    checks: ["4 m width and seam layout", "28 oz and 8.5 mm references", "Backing and installation compatibility", "Traffic, cleaning and required test documents"],
  },
  "natural-sisal-carpet": {
    name: "Natural Sisal Flatweave Commercial Carpet",
    summary: "This natural sisal flatweave carpet has catalog references of 100% sisal face, 4 m roll width and 7 mm total thickness. Consider it for dry indoor spaces after checking maintenance, backing and installation requirements. Confirm a physical sample and required documents before ordering.",
    construction: "The catalog lists 100% natural sisal, woven flatweave, 4 m width and 7 mm total thickness with latex-plus-jute backing. Confirm the exact backing and installation method for the selected construction. A natural-fiber description is not a fire or environmental certificate.",
    application: "Review dry indoor office, reception or hospitality spaces against the intended spill exposure and cleaning plan. The 4 m roll reference is a cutting-plan input. Natural sisal should not be specified on an assumption that it is suitable for wet cleaning or damp locations.",
    checks: ["100% sisal face and backing specification", "4 m width and 7 mm thickness references", "Moisture exposure and cleaning method", "Physical sample, installation and required reports"],
  },
  "custom-sculpted-wool-lobby-rug": {
    name: "Custom Sculpted Wool Lobby Rug",
    summary: "This sculpted wool lobby rug is made to approved dimensions, pattern and production specification. The catalog lists a 10-piece order reference. Confirm fiber composition, backing, edge treatment and physical sample before ordering; the illustrated relief does not establish pile height, traffic class or fire performance.",
    construction: "The catalog lists a 10-piece order reference and a wool design direction. Exact wool percentage, production method, pile height, backing and dimensions require written confirmation. Sculpted appearance in an illustration does not establish a measured relief or a hand-tufted construction.",
    application: "Coordinate the rug outline with lobby furniture, circulation and exposed edges. Review the nominated construction for fixing, cleaning and local trip-risk requirements. Confirm the 10-piece catalog reference and current commercial terms in the written quotation.",
    checks: ["Approved dimensions and furniture layout", "Wool composition and production method", "Pile height, backing and edge treatment", "Physical sample and project-specific requirements"],
  },
  "healthcare-hospital-carpet-tiles": {
    name: "Healthcare Support-Area Carpet Tiles",
    summary: "These 50×50 cm carpet tiles offer a solution-dyed nylon option for healthcare support areas. The catalog lists 500–700 g/m² pile-weight options. Confirm cleaning chemicals, rolling loads, backing and facility requirements before selection; the product is not presented as an infection-control system.",
    construction: "The catalog lists 50×50 cm low-loop tiles, a nylon face option, 500–700 g/m² pile weight and 6–8 mm thickness options. Confirm the selected PE or cushion backing together with the face specification and installation method.",
    application: "Review offices, waiting areas and other support zones with the facility team. The 50×50 cm format allows a modular layout; it does not establish suitability for operating rooms, isolation rooms or wet clinical areas. Confirm cleaning chemicals and wheeled-equipment requirements.",
    checks: ["Approved healthcare support zone", "50×50 cm sample and selected backing", "Cleaning chemicals and rolling loads", "Facility standards and construction-specific reports"],
  },
  "education-school-carpet-tiles": {
    name: "Education and School Carpet Tiles",
    summary: "These 50×50 cm school carpet tiles offer nylon or polypropylene face options. The catalog lists 450–650 g/m² pile weight and 5.5–7.0 mm thickness options. Confirm the classroom or library layout, backing, cleaning plan and required performance documents before ordering.",
    construction: "The catalog lists 50×50 cm tufted loop tiles with nylon or PP face, 450–650 g/m² pile-weight options and 5.5–7.0 mm thickness options. Confirm one face and backing configuration for the quoted order and supporting documentation.",
    application: "Prepare classroom, library and staff-area layouts using the 50×50 cm format. Confirm desk movement, access-floor requirements and cleaning routines with the facility team. Do not infer an acoustic or fire classification from the product's intended school use.",
    checks: ["Classroom or library use and layout", "50×50 cm sample and selected face", "Backing, fixing and cleaning plan", "Facility requirements and matching reports"],
  },
  "cinema-theater-carpet": {
    name: "Custom Cinema and Theater Carpet",
    summary: "VCARPETS supplies cinema and theater carpet against a project brief and approved construction. Provide the venue layout, quantity, destination, delivery date and required test methods. Confirm fiber, backing, roll format and physical sample before production; no acoustic value or fire class is established here.",
    construction: "Start with 5 brief inputs: venue layout, quantity, destination, delivery date and required test methods. Fiber, production route, backing, roll width, pile weight and thickness are selected through quotation and sample approval rather than assigned from a venue image.",
    application: "Separate aisles, seating areas, stairs and foyer requirements in the floor plan. Confirm fixing and transition details with the installer. An acoustic result must identify the nominated floor assembly; a theater label is not evidence of sound absorption or fire performance.",
    checks: ["Venue zones and seat layout", "Selected fiber, pile and backing", "Aisle, stair and transition installation", "Required test method and matching product evidence"],
  },
  "commercial-stair-carpet-runner": {
    name: "Custom Commercial Stair Carpet Runner",
    summary: "This stair carpet runner is cut and bound to approved stair and landing dimensions. The catalog lists 5–8 mm thickness options by construction. Confirm fiber, edge binding, fixing, nosing and local requirements with the installer before ordering; no slip-resistance result is established here.",
    construction: "The catalog lists natural sisal or synthetic alternatives, custom width and length, and 5–8 mm thickness options. Confirm tread, riser, landing and turning dimensions before cutting; dimensions from a flat room layout do not establish the stair runner's finished length.",
    application: "Review 4 installation details with the installer: nosing, fixing, underlay and exposed edges. Confirm the nominated construction's maintenance and required slip or fire evidence for the actual stair. Natural sisal and synthetic alternatives are separate material specifications.",
    checks: ["Tread, riser, landing and turning measurements", "5–8 mm thickness option and nosing clearance", "Binding, fixing and underlay", "Local stair requirements and matching evidence"],
  },
};

const options = {
  bloomsburg: { supplier: "Bloomsburg", product: "Hospitality Axminster", construction: "Woven Axminster; custom design service", format: "Project-specific; cited custom program lists a 15-color maximum", nextStep: "Contact the supplier for the nominated construction and quotation", source: "https://bloomsburgcarpet.com/products-list/brand/hospitality-carpet/" },
  tsar: { supplier: "TSAR", product: "SUMMIT", construction: "Hand-tufted NZ wool; cited sample lists 80 oz pile weight", format: "Custom size; cited sample lists 8 mm pile height", nextStep: "Confirm construction if adapting the design to another production route", source: "https://tsarcarpets.com/design/summit/" },
  moooi: { supplier: "Moooi Carpets", product: "Your Own Design service", construction: "Custom artwork service; select the material and production specification separately", format: "Project dimensions; no single roll width stated on the cited service page", nextStep: "Artwork requirements and contact links on the cited page", source: "https://www.moooicarpets.com/order-your-own-design/" },
  vm: { supplier: "VM Carpet", product: "Sisal", construction: "100% sisal face; EVA backing; 35 mm cotton binding", format: "Custom measurements", nextStep: "Sample request and care limitations on the cited product page", source: "https://vm-carpet.fi/en/tuote/sisal-2/" },
  curranStairs: { supplier: "Curran", product: "Stair runner collection", construction: "Collection of runner alternatives; confirm the individual construction", format: "Product-specific width and binding", nextStep: "Select a product and request a stair-specific specification", source: "https://www.curranfloor.com/catalog/stair-runners" },
  goldhog: { supplier: "Gold Hog", product: "UR Mat", construction: "Sluice mat; operating conditions require equipment review", format: "36 in wide × 6 in long", nextStep: "Check mat specifications and compatibility with the sluice", source: "https://goldhog.com/products/ur-mat/" },
} satisfies Record<string, ComparisonOption>;

export function evidenceCopy(product: Product) {
  const profile = profiles[product.id];
  if (!profile) throw new Error(`Missing product copy: ${product.id}`);
  const knownDimension = /\d/.test(product.spec.size) ? product.spec.size : "Dimensions confirmed in the written specification";
  if (product.category === "carpet-tiles") return { ...profile, ...carpetTileEvidence(product, profile), knownDimension };
  const competitors = product.id === "gold-mining-carpet-mat" ? [options.goldhog]
    : product.id === "natural-sisal-carpet" ? [options.vm]
    : product.id === "commercial-stair-carpet-runner" ? [options.curranStairs]
    : product.id === "luxury-hotel-broadloom" ? [options.bloomsburg, options.tsar]
    : product.id === "custom-sculpted-wool-lobby-rug" ? [options.tsar]
    : [options.moooi, options.bloomsburg];
  const faqs = [
    { q: `What construction should I specify when ordering ${profile.name.toLowerCase()}?`, a: profile.construction },
    { q: `What should I check before using ${profile.name.toLowerCase()} in my project?`, a: `${profile.application} Review all 4 approval checks on this page with the installer and supplier.` },
    { q: `How do I compare ${profile.name.toLowerCase()} with the alternatives in the supplier table?`, a: "Compare the selected fiber, production method, dimensions, backing, installation and required reports. The cited alternatives can use different constructions or serve different applications. The table is not a like-for-like price comparison, performance ranking or certification of equivalence." },
    { q: `Which documents are needed to verify performance for ${profile.name.toLowerCase()}?`, a: "Request the nominated product sheet and reports for the exact face, backing and floor assembly. A report should identify the tested sample, method, result and issuer. Catalog dimensions, design images and a competitor's certificate do not establish this product's fire, acoustic, traffic or slip performance." },
    { q: `How can I request a paid sample and FOB Tianjin quotation for ${profile.name.toLowerCase()}?`, a: "Send 5 inputs: intended application, dimensions or area, quantity, destination and required date. Samples are paid; the agreed sample charge can be credited against a subsequent order. Confirm sample availability, courier cost, production schedule, price and order quantity in the written quotation. Production time and shipping transit are separate." },
    { q: `Do the images of ${profile.name.toLowerCase()} prove a completed installation or product test?`, a: "No. AI-generated or edited scenes and design illustrations communicate appearance and layout. They are not evidence of a delivered client project, measured performance or exact production color. Approve a physical sample and the nominated product specification before ordering." },
  ];
  return { ...profile, competitors, faqs, knownDimension, reviewedOn, relatedIds: undefined };
}

export function referenceSpecs(product: Product): Array<[string, string]> {
  return [
    ["Face material / listed option", product.spec.material],
    ["Nominal format / listed option", product.spec.size],
    ["Pile construction", product.technicalSpecs.yarnSystem],
    ["Backing / listed option", product.technicalSpecs.backing],
    ["Pile weight / listed option", product.technicalSpecs.pileWeight],
    ["Total thickness / listed option", product.technicalSpecs.totalThickness],
  ].map(([label, value]) => [label, value.replace(/\b(high-density|soft|premium|luxury|reinforced|non-slip)\b/gi, "").replace(/\s+/g, " ").trim()]);
}
