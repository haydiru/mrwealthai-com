import { MetadataRoute } from "next";
import { COMPANY } from "@/content/company";
import { PRODUCTS } from "@/content/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${COMPANY.domain}`;
  const currentDate = new Date().toISOString();

  const staticRoutes = [
    "",
    "/products",
    "/about",
    "/trust",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/trust" ? 0.9 : 0.8,
  }));

  const productRoutes = PRODUCTS.map((prod) => ({
    url: `${baseUrl}${prod.internalPath}`,
    lastModified: prod.lastUpdatedIso,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...productRoutes];
}
