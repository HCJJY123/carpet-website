import { brandInfo, products } from "@/lib/data";

export const siteUrl = brandInfo.url.replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function productPath(productId: string) {
  const product = products.find((item) => item.id === productId);
  return product ? `/products/${product.category}/${product.id}` : "/products";
}

export const priorityRoutes = [
  "/",
  "/products",
  "/products/carpet-tiles",
  "/products/wall-to-wall",
  "/products/public-area",
  "/solutions",
  "/solutions/hotel-hospitality",
  "/projects",
  "/blog",
  "/about-us",
  "/factory",
  "/faq",
  "/contact",
];
