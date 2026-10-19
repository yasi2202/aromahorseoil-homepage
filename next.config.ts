import type { NextConfig } from "next";

// Seit 19.10.2026 hat die Marke ihre eigene Domain aromahorseoil.de (die Seiten
// liegen im Projekt pferdeliebehealthy-homepage unter /aroma). Diese alte
// vercel-Seite schickt Startseite, Kurs, Öl-Guide und Linkseite deshalb
// dauerhaft dorthin. Bewusst NICHT umgeleitet: /api/oel-guide/datei (alte
// Maillinks holen darüber die PDF) und die Rechtstexte.
const AROMA = "https://aromahorseoil.de";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/", destination: AROMA, permanent: true },
      { source: "/aroma-horse-kurs", destination: `${AROMA}/kurs`, permanent: true },
      { source: "/oel-guide", destination: AROMA, permanent: true },
      { source: "/links", destination: `${AROMA}/links`, permanent: true },
    ];
  },
};

export default nextConfig;
