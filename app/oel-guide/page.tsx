import type { Metadata } from "next";
import Image from "next/image";
import Tropfen from "@/components/Tropfen";
import GuideFormular from "@/components/GuideFormular";
import { guide, guideSeite } from "@/lib/inhalte";

// ---------------------------------------------------------------------------
// Die Anmeldeseite für den Öl-Guide, seit dem 12.09.2026.
//
// Bis dahin leitete /oel-guide direkt auf die PDF in public/ weiter. Jetzt gibt
// es den Guide nur gegen Mailadresse (Yasemins Wunsch vom 12.09.2026). Die
// Adresse bleibt dieselbe, deshalb musste weder die Instagram-Bio noch einer
// der Knöpfe auf der Seite geändert werden.
//
// ?fehler=link setzt app/oel-guide/laden, wenn ein Link aus der Mail nicht
// (mehr) stimmt.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Kostenloser Öl-Guide",
  description: guide.text,
  alternates: { canonical: "/oel-guide" },
};

export default async function OelGuideSeite({ searchParams }: { searchParams: Promise<{ fehler?: string }> }) {
  const { fehler } = await searchParams;

  return (
    <main id="inhalt" className="px-6 sm:px-8 pt-28 sm:pt-32 pb-20 sm:pb-28">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-start">
        <div>
          <p className="gesperrt text-terra">{guideSeite.augenbraue}</p>
          <h1 className="mt-4 font-serif text-[clamp(2rem,4.6vw,3.1rem)] leading-[1.08] tracking-[-0.015em]">
            {guideSeite.titel}
          </h1>
          <p className="mt-5 text-[16.5px] leading-[1.8] text-tinte-weich">{guideSeite.text}</p>

          <ul className="mt-8 space-y-4">
            {guide.punkte.map((punkt) => (
              <li
                key={punkt}
                className="flex items-start gap-3.5 text-[15.5px] leading-[1.65] border-b border-linie pb-4 last:border-0 last:pb-0"
              >
                <Tropfen className="w-3.5 h-3.5 mt-1 shrink-0 text-terra" />
                {punkt}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex items-center gap-4">
            <Image
              src="/images/yasi-portrait.jpg"
              alt="Yasemin Halac"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover border-2 border-weiss shadow-sm"
            />
            <p className="text-[14.5px] leading-snug text-tinte-weich">
              <span className="block font-serif italic text-[1.15rem] text-tinte">Yasi</span>
              Aromapflege fürs Pferd
            </p>
          </div>
        </div>

        <div className="bg-weiss border border-linie rounded-[22px] p-6 sm:p-8 shadow-sm">
          {fehler === "link" && (
            <p role="alert" className="mb-6 rounded-xl bg-creme-tief px-4 py-3 text-[14.5px] leading-snug text-terra-tief">
              {guideSeite.fehlerLink}
            </p>
          )}
          <GuideFormular />
        </div>
      </div>
    </main>
  );
}
// ENDE DER DATEI
