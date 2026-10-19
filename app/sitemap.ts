import type { MetadataRoute } from "next";

// Seit 19.10.2026 leiten Startseite, Kurs und Öl-Guide auf aromahorseoil.de
// weiter (next.config.ts). Google soll hier nichts mehr finden, die Sitemap
// der Marke liefert aromahorseoil.de selbst.
export default function sitemap(): MetadataRoute.Sitemap {
  return [];
}
