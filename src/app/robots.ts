import { MetadataRoute } from "next";
import { COMPANY } from "@/content/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `https://${COMPANY.domain}/sitemap.xml`,
  };
}
