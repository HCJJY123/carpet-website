import type { Metadata } from "next";
import { safeJsonLd } from "@/lib/seo";
import HeatheredGrayProduct from "./HeatheredGrayProduct";
import schema from "./product.schema.json";
export const metadata: Metadata = {
  "title": "Heathered Gray Modular Carpet Tiles | VCARPETS",
  "description": "Explore heathered light, mid-gray and charcoal modular carpet tile design with VCARPETS. Request a sample review and confirmed project specifications.",
  "alternates": {
    "canonical": "https://www.vcarpets.com/products/carpet-tiles/heathered-gray-modular-carpet-tiles"
  },
  "openGraph": {
    "title": "Heathered Gray Modular Carpet Tiles | VCARPETS",
    "description": "Explore heathered light, mid-gray and charcoal modular carpet tile design with VCARPETS. Request a sample review and confirmed project specifications.",
    "url": "https://www.vcarpets.com/products/carpet-tiles/heathered-gray-modular-carpet-tiles",
    "type": "website",
    "images": [
      {
        "url": "https://www.vcarpets.com/images/products/heathered-gray-modular-carpet-tiles/01-studio-panel.webp",
        "width": 1254,
        "height": 1254,
        "alt": "Design illustration of light, mid-gray and charcoal heathered carpet tile modules"
      }
    ]
  }
};
export default function Page() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html: safeJsonLd(schema)}}/><HeatheredGrayProduct/></>; }
