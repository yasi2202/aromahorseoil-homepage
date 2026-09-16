import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { seitenUrl, url } from "@/lib/seo";
import { links, marke } from "@/lib/inhalte";
import Kopfzeile from "@/components/Kopfzeile";
import Fusszeile from "@/components/Fusszeile";
import Einblenden from "@/components/Einblenden";

// ---------------------------------------------------------------------------
// Die Schriften werden beim Bauen heruntergeladen und von der eigenen Adresse
// ausgeliefert. Der Browser deiner Besucherin fragt damit nichts bei Google
// an — keine IP-Adresse geht in die USA, kein Cookie-Banner nötig.
//
// Fraunces ist dieselbe Überschriftenschrift wie bei Pferdeliebehealthy: die
// beiden Marken sollen verwandt aussehen. Der Fließtext ist hier aber Karla
// statt Work Sans — etwas wärmer und eigenwilliger, damit aromahorseoil eine
// eigene Stimme hat und nicht wie eine Unterseite wirkt.
// ---------------------------------------------------------------------------

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-fraunces",
});

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
});

const TITEL = "aromahorseoil | Ätherische Öle für dein Pferd";
const BESCHREIBUNG =
  "Aromapflege für Pferde mit Yasemin Halac: ätherische Öle sicher auswählen, richtig verdünnen und über den Riechtest anbieten. Kostenloser Öl-Guide und der Aroma Horse Kurs.";

export const metadata: Metadata = {
  // Macht aus allen relativen Angaben unten vollständige Adressen. Ohne sie
  // bleiben Vorschaubilder beim Teilen leer.
  metadataBase: new URL(seitenUrl),
  title: {
    default: TITEL,
    template: "%s | aromahorseoil",
  },
  description: BESCHREIBUNG,
  applicationName: "aromahorseoil",
  authors: [{ name: "Yasemin Halac" }],
  creator: "Yasemin Halac",
  publisher: "aromahorseoil",
  keywords: [
    "ätherische Öle Pferd",
    "Hydrolate Pferd",
    "Riechtest Pferd",
    "Aromapflege Pferd",
    "Aromapflege Pferd Kurs",
    "Aromapflege lernen",
    "Odenwald",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "aromahorseoil",
    title: TITEL,
    description: BESCHREIBUNG,
    url: "/",
    images: [
      {
        url: "/images/yasi-portrait.jpg",
        alt: "Yasemin Halac, Aromapflege für Pferde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITEL,
    description: BESCHREIBUNG,
    images: ["/images/yasi-portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Pferdepflege",
};

// ---------------------------------------------------------------------------
// Strukturierte Daten.
//
// Damit versteht Google, dass hinter der Seite eine konkrete Person an einem
// konkreten Ort steht. Das ist die Grundlage dafür, bei Suchen wie
// „Aromapflege Pferd Kurs" überhaupt in Frage zu kommen.
// ---------------------------------------------------------------------------
const strukturierteDaten = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": url("/#unternehmen"),
      name: "aromahorseoil",
      description: BESCHREIBUNG,
      url: seitenUrl,
      image: url("/images/yasi-portrait.jpg"),
      email: marke.mail,
      areaServed: { "@type": "Country", name: "Deutschland" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buchen",
        addressRegion: "Baden-Württemberg",
        addressCountry: "DE",
      },
      founder: { "@id": url("/#yasemin") },
      sameAs: [links.instagram],
    },
    {
      "@type": "Person",
      "@id": url("/#yasemin"),
      name: "Yasemin Halac",
      jobTitle: "Futterberaterin und Aromapraktikerin",
      image: url("/images/yasi-helena.jpg"),
      worksFor: { "@id": url("/#unternehmen") },
      knowsAbout: [
        "Aromapflege beim Pferd",
        "Ätherische Öle",
        "Hydrolate",
        "Riechtest",
      ],
    },
    {
      "@type": "WebSite",
      "@id": url("/#website"),
      url: seitenUrl,
      name: "aromahorseoil",
      inLanguage: "de-DE",
      publisher: { "@id": url("/#unternehmen") },
    },
  ],
};

export default function Grundgeruest({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${fraunces.variable} ${karla.variable}`}>
      <body className="font-sans antialiased bg-creme text-tinte">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(strukturierteDaten) }}
        />
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-tinte focus:text-creme focus:px-4 focus:py-2 focus:rounded-full focus:text-sm"
        >
          Zum Inhalt springen
        </a>
        <Kopfzeile />
        {children}
        <Fusszeile />
        <Einblenden />
        {/* Besucherzählung ohne Cookies: erkennt niemanden wieder, speichert
            keine Kennung im Browser, deshalb ohne Einwilligung zulässig.
            Zählt erst, wenn Web Analytics im Vercel-Konto aktiviert ist. */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
