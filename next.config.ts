import type { NextConfig } from "next";

// Seit 17.10.2026 liegt die Kursseite auf www.pferdeliebehealthy.de/aroma/kurs,
// dort führt „Kurs kaufen“ in die Kasse (hier öffnete der Knopf nur eine
// Mail). Alte Links landen deshalb dauerhaft dort.
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/aroma-horse-kurs",
        destination: "https://www.pferdeliebehealthy.de/aroma/kurs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
