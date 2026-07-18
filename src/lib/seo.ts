export const BASE_URL = "https://www.vishomecarpet.com";

export function absoluteUrl(path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${cleanPath}`;
}

export function productPath(category: string, id: string) {
  // 核心修复：强制将所有 broadloom 请求转向 wall-to-wall 路径
  const catMap: Record<string, string> = {
    "broadloom": "wall-to-wall",
    "wall-to-wall": "wall-to-wall",
    "carpet-tiles": "carpet-tiles",
    "public-area": "public-area"
  };
  const mappedCategory = catMap[category] || category;
  return `/products/${mappedCategory}/${id}`;
}

export function safeJsonLd(data: any) {
  return JSON.stringify(data).replace(/</g, '\\u003c').replace(/>/g, '\\u003e');
}

export function productJsonLd(p: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": p.name,
    "description": p.description,
    "image": absoluteUrl(p.image),
    "brand": { "@type": "Brand", "name": "Vishomecarpet" },
    "offers": {
      "@type": "Offer",
      "url": absoluteUrl(productPath(p.category, p.id)),
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };
}

export function productBreadcrumbJsonLd(p: any) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": absoluteUrl("/") },
      { "@type": "ListItem", "position": 2, "name": "Wall to Wall Carpet", "item": absoluteUrl(`/products/wall-to-wall`) },
      { "@type": "ListItem", "position": 3, "name": p.name, "item": absoluteUrl(productPath(p.category, p.id)) }
    ]
  };
}
