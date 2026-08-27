import type { MetadataRoute } from "next";
import { seitenUrl } from "@/lib/seo";

// Die Liste der Adressen, die Google kennen soll. Impressum und Datenschutz
// stehen bewusst nicht darin — sie sollen nicht im Suchindex landen.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${seitenUrl}/`,
      lastModified: new Date("2026-08-27"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${seitenUrl}/aroma-horse-kurs`,
      lastModified: new Date("2026-08-27"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
