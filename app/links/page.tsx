import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Tropfen from "@/components/Tropfen";
import { links } from "@/lib/inhalte";

// ---------------------------------------------------------------------------
// Die Seite hinter dem Link in der Instagram-Bio von @aromahorseoil.
//
// Seit dem 12.09.2026 zeigt die Bio hierher statt direkt auf eine Datei oder
// eine fremde Plattform (bis 10.09.2026 war das alfima, und die Adresse lief
// ins Leere). Ändert sich ein Angebot, ändert sich nur diese Liste, die Bio
// bleibt gleich.
//
// noindex: Eine reine Linkliste ist für Google eine dünne Seite und würde der
// Startseite nur Konkurrenz machen. Sie steht deshalb auch nicht in der Sitemap.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Links",
  description: "Öl-Guide, Riechtest und der Aroma Horse Kurs von Yasi.",
  alternates: { canonical: "/links" },
  robots: { index: false, follow: true },
};

const eintraege: { titel: string; text: string; href: string; hervor?: boolean; neuesFenster?: boolean }[] = [
  {
    titel: "Mein Öl-Guide",
    text: "Der sichere Einstieg in sieben Seiten, zum Herunterladen",
    href: links.oelGuide,
    hervor: true,
    neuesFenster: true,
  },
  { titel: "Der Riechtest", text: "Wie dein Pferd sein Öl selbst wählt", href: "/#riechtest" },
  { titel: "Aroma Horse, der Kurs", text: "Zehn Phasen, von der Destillation bis zur Anwendung", href: links.kursSeite },
  { titel: "Über mich", text: "Wie ich über meine Stute Helena zu den Ölen kam", href: "/#ueber-mich" },
  {
    titel: "Fütterung bei Pferdeliebehealthy",
    text: "Meine zweite Marke, für alles rund ums Futter",
    href: "https://www.pferdeliebehealthy.de",
    neuesFenster: true,
  },
];

export default function LinkSeite() {
  return (
    <main id="inhalt" className="px-6 pt-24 sm:pt-28 pb-20">
      <div className="max-w-md mx-auto text-center">
        <Image
          src="/images/yasi-portrait.jpg"
          alt="Yasemin Halac"
          width={112}
          height={112}
          priority
          className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-weiss shadow-sm"
        />
        <h1 className="mt-5 font-serif text-[1.9rem] leading-tight">Yasi</h1>
        <p className="mt-2 text-[15.5px] leading-relaxed text-tinte-weich">
          Ätherische Öle und Hydrolate fürs Pferd.
          <br />
          Sicher angewendet, und dein Pferd entscheidet mit.
        </p>

        <ul className="mt-8 space-y-3 text-left">
          {eintraege.map((e) => {
            const inhalt = (
              <>
                <Tropfen className={`w-3.5 h-3.5 shrink-0 ${e.hervor ? "text-sand" : "text-terra"}`} />
                <span className="flex-1">
                  <span className="block font-semibold text-[16px]">{e.titel}</span>
                  <span className={`block text-[14px] leading-snug ${e.hervor ? "text-creme/85" : "text-tinte-weich"}`}>{e.text}</span>
                </span>
              </>
            );
            const klasse = `flex items-center gap-4 rounded-2xl px-5 py-4 transition-colors ${
              e.hervor ? "bg-terra text-creme hover:bg-terra-tief" : "bg-weiss border border-linie hover:border-terra"
            }`;
            return (
              <li key={e.titel}>
                {e.neuesFenster ? (
                  <a href={e.href} target="_blank" rel="noopener" className={klasse}>
                    {inhalt}
                  </a>
                ) : (
                  <Link href={e.href} className={klasse}>
                    {inhalt}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
// ENDE DER DATEI
