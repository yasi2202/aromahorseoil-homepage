import type { MetadataRoute } from "next";
import { seitenUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/impressum", "/datenschutz", "/agb", "/widerrufsbelehrung"],
    },
    sitemap: `${seitenUrl}/sitemap.xml`,
  };
}
