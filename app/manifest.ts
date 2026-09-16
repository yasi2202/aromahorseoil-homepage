import type { MetadataRoute } from "next";

// ---------------------------------------------------------------------------
// Damit sich die Seite auf dem Handy „zum Startbildschirm hinzufügen" lässt
// und sich danach wie eine App verhält: eigener Name, eigenes Symbol, kein
// Browser-Rahmen drumherum.
//
// Das Symbol wird nicht aus einer Bilddatei geladen, sondern in app/icon.tsx
// und app/apple-icon.tsx gezeichnet: ein Tropfen auf Terrakotta. Sobald du
// ein richtiges Logo hast, ersetzt du die beiden Dateien durch icon.png und
// apple-icon.png — Next.js findet sie am Dateinamen von selbst.
// ---------------------------------------------------------------------------

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "aromahorseoil | Ätherische Öle für dein Pferd",
    short_name: "aromahorseoil",
    description:
      "Aromapflege für Pferde: ätherische Öle sicher auswählen, richtig verdünnen und über den Riechtest anbieten.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    lang: "de-DE",
    background_color: "#FBF5EE",
    theme_color: "#8B3E29",
    categories: ["health", "education", "lifestyle"],
    icons: [
      { src: "/apple-icon", sizes: "180x180", type: "image/png", purpose: "any" },
    ],
  };
}
