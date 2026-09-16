import type { Metadata } from "next";
import Link from "next/link";
import { kurs, kursSeite, links } from "@/lib/inhalte";
import { url } from "@/lib/seo";
import Tropfen from "@/components/Tropfen";

// ---------------------------------------------------------------------------
// Die Verkaufsseite des Kurses.
//
// Sie ist bewusst so geschrieben, dass sie nirgends einen Abschluss, eine
// Korrektur oder eine Betreuung verspricht — daran hängt, dass der Kurs ohne
// ZFU-Zulassung verkauft werden darf. Der Abschnitt „Was nicht dabei ist"
// steht deshalb nicht im Kleingedruckten, sondern mitten auf der Seite.
//
// Alle Texte stehen in lib/inhalte.ts unter `kursSeite`.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Aroma Horse Kurs",
  description:
    "Zehn Phasen, 54 Lektionen zur Aromapflege beim Pferd: Hydrolate, Stoffklassen, sichere Anwendung, der Riechtest und die Grenzen. Selbstlernkurs, 899 €.",
  alternates: { canonical: "/aroma-horse-kurs" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "Aroma Horse Kurs | aromahorseoil",
    description:
      "Zehn Phasen, 54 Lektionen zur Aromapflege beim Pferd. Selbstlernkurs von Yasemin Halac.",
    url: "/aroma-horse-kurs",
    images: [{ url: "/images/yasi-helena.jpg" }],
  },
};

// Ein Angebot für Google. Bewusst ohne „Ausbildung" und ohne Abschluss —
// die Angaben müssen mit dem übereinstimmen, was auf der Seite steht.
const strukturierteDaten = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": url("/aroma-horse-kurs#kurs"),
  name: "Aroma Horse Kurs",
  description: kursSeite.vorspann,
  brand: { "@type": "Brand", name: "aromahorseoil" },
  offers: {
    "@type": "Offer",
    price: "899",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: url("/aroma-horse-kurs"),
  },
};

export default function KursVerkaufsseite() {
  return (
    <main id="inhalt">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(strukturierteDaten) }}
      />

      {/* --- Kopf ------------------------------------------------------- */}
      <section className="px-6 sm:px-8 pt-16 sm:pt-24 pb-14">
        <div className="max-w-3xl mx-auto">
          <p className="gesperrt text-terra flex items-center gap-2.5">
            <Tropfen className="w-3 h-3" />
            {kursSeite.augenbraue}
          </p>
          <h1 className="mt-5 font-serif text-[clamp(2.2rem,5.5vw,3.6rem)] leading-[1.08] tracking-[-0.02em]">
            {kursSeite.titel}
          </h1>
          <p className="mt-7 text-[17.5px] leading-[1.75] text-tinte-weich">
            {kursSeite.vorspann}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={links.kaufen}
              className="bg-terra text-creme font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-terra-tief transition-colors"
            >
              {kursSeite.kauf.knopf}
            </a>
            <span className="text-[15px] text-tinte-weich">
              <span className="font-serif text-2xl text-tinte align-middle mr-2">
                {kursSeite.kauf.preis}
              </span>
              {kurs.preisZusatz}
            </span>
          </div>
        </div>
      </section>

      {/* --- Die zehn Phasen -------------------------------------------- */}
      <section className="px-6 sm:px-8 py-16 sm:py-20 bg-sand">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[clamp(1.7rem,4vw,2.4rem)] leading-[1.15] tracking-[-0.015em]">
            Die zehn Phasen
          </h2>
          <p className="mt-4 text-[16px] leading-[1.75] text-tinte-weich max-w-[60ch]">
            {kurs.text}
          </p>

          {/* Die Phasen bauen aufeinander auf — erst das Handwerk, dann die
              Chemie, dann das Pferd, dann die Anwendung. */}
          <ol className="mt-10 border-t border-sand-tief">
            {kurs.phasen.map((phase, i) => (
              <li
                key={phase}
                className="flex items-baseline gap-5 sm:gap-7 py-3.5 border-b border-sand-tief"
              >
                <span className="font-serif text-[15px] text-terra tabular-nums w-7 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-[18px] sm:text-[20px] leading-snug">
                  {phase}
                </span>
              </li>
            ))}
          </ol>

          <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-2.5">
            {kurs.eckdaten.map((e) => (
              <li
                key={e}
                className="flex items-center gap-2.5 text-[15px] text-tinte-weich"
              >
                <Tropfen className="w-3 h-3 shrink-0 text-salbei" />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --- Für wen ----------------------------------------------------- */}
      <section className="px-6 sm:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[clamp(1.7rem,4vw,2.4rem)] leading-[1.15] tracking-[-0.015em]">
            {kursSeite.fuerWen.titel}
          </h2>

          <div className="mt-9 grid md:grid-cols-2 gap-8 md:gap-10">
            <div>
              <p className="gesperrt text-salbei">Das passt zu dir, wenn</p>
              <ul className="mt-5 space-y-4">
                {kursSeite.fuerWen.passt.map((z) => (
                  <li
                    key={z}
                    className="flex items-start gap-3 text-[15.5px] leading-[1.7] text-tinte-weich"
                  >
                    <Tropfen className="w-3 h-3 mt-1.5 shrink-0 text-salbei" />
                    {z}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="gesperrt text-terra">Lass es lieber, wenn</p>
              <ul className="mt-5 space-y-4">
                {kursSeite.fuerWen.passtNicht.map((z) => (
                  <li
                    key={z}
                    className="flex items-start gap-3 text-[15.5px] leading-[1.7] text-tinte-weich"
                  >
                    <span
                      aria-hidden
                      className="mt-2 w-3 h-px shrink-0 bg-terra"
                    />
                    {z}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Umfang: was drin ist, und was ausdrücklich nicht ------------ */}
      <section className="px-6 sm:px-8 py-16 sm:py-20 bg-creme-tief border-y border-linie">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[clamp(1.7rem,4vw,2.4rem)] leading-[1.15] tracking-[-0.015em]">
            {kursSeite.umfang.titel}
          </h2>

          <ul className="mt-8 space-y-3.5">
            {kursSeite.umfang.drin.map((z) => (
              <li
                key={z}
                className="flex items-start gap-3.5 text-[16px] leading-[1.65]"
              >
                <Tropfen className="w-3.5 h-3.5 mt-1 shrink-0 text-terra" />
                {z}
              </li>
            ))}
          </ul>

          <div className="mt-10 border-l-2 border-terra pl-5 sm:pl-6">
            <p className="gesperrt text-terra">Was nicht dabei ist</p>
            <ul className="mt-4 space-y-2.5">
              {kursSeite.umfang.nichtDrin.map((z) => (
                <li key={z} className="text-[15.5px] leading-[1.65] text-tinte">
                  {z}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[15px] leading-[1.7] text-tinte-weich">
              {kursSeite.umfang.nichtDrinErklaerung}
            </p>
          </div>
        </div>
      </section>

      {/* --- Zwei Dinge vorweg ------------------------------------------- */}
      <section className="px-6 sm:px-8 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-[clamp(1.7rem,4vw,2.4rem)] leading-[1.15] tracking-[-0.015em]">
            {kursSeite.ehrlich.titel}
          </h2>
          <div className="mt-7 space-y-6 text-[16.5px] leading-[1.8] text-tinte-weich">
            {kursSeite.ehrlich.absaetze.map((a, i) => (
              <p key={i}>{a}</p>
            ))}
          </div>
        </div>
      </section>

      {/* --- Kaufen ------------------------------------------------------ */}
      <section className="px-6 sm:px-8 pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto bg-terra text-creme rounded-[26px] px-7 sm:px-12 py-12 sm:py-14 text-center">
          <Tropfen className="w-5 h-6 mx-auto text-sand" />
          <h2 className="mt-6 font-serif text-[clamp(1.9rem,4.5vw,2.8rem)] leading-[1.12] tracking-[-0.015em]">
            {kursSeite.kauf.titel}
          </h2>
          <p className="mt-4 font-serif text-4xl sm:text-5xl">
            {kursSeite.kauf.preis}
          </p>
          <p className="mt-2 text-[14.5px] text-creme/80">
            {kursSeite.kauf.zusatz}
          </p>
          <a
            href={links.kaufen}
            className="mt-8 inline-block bg-creme text-tinte font-semibold text-[15px] px-8 py-4 rounded-full hover:bg-sand transition-colors"
          >
            {kursSeite.kauf.knopf}
          </a>
          <p className="mt-6 text-[14.5px] leading-relaxed text-creme/80 max-w-[44ch] mx-auto">
            {kursSeite.kauf.hinweis}
          </p>
        </div>

        <p className="mt-8 text-center text-[15px] text-tinte-weich">
          {kurs.hinweisTeilnehmerin}{" "}
          <a
            href={links.akademie}
            target="_blank"
            rel="noopener"
            className="text-terra-tief underline underline-offset-4 hover:text-tinte"
          >
            {kurs.knopfTeilnehmerin}
          </a>
        </p>

        <p className="mt-10 text-center text-[13.5px] text-tinte-weich/80">
          <Link href="/agb" className="underline underline-offset-4 hover:text-tinte">
            Vertragsbedingungen und Widerrufsrecht
          </Link>
        </p>
      </section>
    </main>
  );
}
