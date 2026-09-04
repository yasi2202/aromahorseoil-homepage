import type { MetadataRoute } from "next";
import { seitenUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /testkunde ist eine eingeladene Seite: derselbe Kurs zum halben
      // Preis. Fände Google sie neben /aroma-horse-kurs mit 899 EUR,
      // kaufte niemand mehr zum vollen Preis. Die Seite setzt zusaetzlich
      // selbst ein noindex, siehe app/testkunde/page.tsx.
      disallow: [
        "/impressum",
        "/datenschutz",
        "/agb",
        "/widerrufsbelehrung",
        "/testkunde",
      ],
    },
    sitemap: `${seitenUrl}/sitemap.xml`,
  };
}
