import type { Metadata } from "next";
import Link from "next/link";
import { kurs, links, testkunde } from "@/lib/inhalte";
import Tropfen from "@/components/Tropfen";

// ---------------------------------------------------------------------------
// Die Einladung zur Testrunde des Aroma Horse Kurses.
//
// ▸ DIESE SEITE IST NICHT ÖFFENTLICH GEMEINT.
//   Sie ist für Suchmaschinen gesperrt (robots unten), steht nicht in der
//   Sitemap und ist nirgends verlinkt, weder im Menü noch auf der Startseite.
//   Yasemin verschickt den Link selbst. Stünde sie im Index, fände Google
//   neben dem Kurs für 899 € denselben Kurs für 199 €, und niemand kauft mehr
//   zum vollen Preis.
//
// ▸ SIE VERSPRICHT NICHTS, WAS DER KURS NICHT HÄLT.
//   Keine Prüfung, keine Korrektur, keine Betreuung, und nirgends das Wort
//   „Ausbildung“. Die Teilnahmebescheinigung am Ende ist eine reine
//   Teilnahmebestätigung ohne Bewertung, sie ist deshalb unbedenklich.
//   Genau daran hängt, dass der Kurs ohne ZFU-Zulassung verkauft werden darf. Der Abschnitt „Was nicht dabei ist“
//   steht deshalb mitten auf der Seite und nicht im Kleingedruckten.
//
// ▸ DER KAUFKNOPF FÜHRT ZUR SCHWESTERSEITE.
//   Dort läuft die Kasse. Der Slug muss zu lib/digital.ts in
//   pferdeliebehealthy-homepage passen, siehe links.kaufenTestkunde.
//
// Alle Texte stehen in lib/inhalte.ts unter `testkunde`.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Einladung zur Testrunde",
  description:
    "Der Aroma Horse Kurs für die erste Runde von Testkundinnen: alle zehn Phasen, 54 Lektionen, 199 statt 899 €, gegen deine ehrliche Rückmeldung.",
  robots: { index: false, follow: false },
};

export default function TestkundeSeite() {
  return (
    <main id="inhalt">
      {/* --- Kopf --------------------------------------------------------- */}
      <section className="px-6 sm:px-8 pt-16 sm:pt-24 pb-14">
        <div className="max-w-3xl mx-auto">
          <p className="gesperrt text-terra flex items-center gap-2.5">
            <Tropfen className="w-3 h-3" />
            {testkunde.augenbraue}
          </p>
          <h1 className="mt-5 font-serif text-[clamp(2.2rem,5.5vw,3.6rem)] leading-[1.08] tracking-[-0.02em] whitespace-pre-line">
            {testkunde.titel}
          </h1>
          <p className="mt-7 text-[17.5px] leading-[1.75] text-tinte-weich">
            {testkunde.vorspann}
          </p>

          {/* Preis und Knopf. Der Streichpreis ist belegt: Zu 899 € steht der
              Kurs öffentlich auf /aroma-horse-kurs, und die Frist ist echt:
              die Kasse weist den Kauf danach ab. */}
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={links.kaufenTestkunde}
              className="bg-terra text-creme font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-terra-tief transition-colors"
            >
              {testkunde.knopf}
            </a>
            <p className="flex items-baseline gap-3">
              <span className="font-serif text-3xl text-tinte">
                {testkunde.preis}
              </span>
              <span className="text-[16px] text-tinte-weich line-through decoration-terra/60">
                {testkunde.preisStatt}
              </span>
            </p>
          </div>
          <p className="mt-4 text-[14.5px] leading-[1.7] text-tinte-weich max-w-[52ch]">
            {testkunde.frist}
          </p>
        </div>
      </section>

      {/* --- Der Handel: zwei Spalten, absichtlich gleich groß ------------- */}
      <section className="px-6 sm:px-8 py-16 sm:py-20 bg-sand">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[clamp(1.7rem,4vw,2.4rem)] leading-[1.15] tracking-[-0.015em]">
            {testkunde.handel.titel}
          </h2>
          <p className="mt-4 text-[16px] leading-[1.75] text-tinte-weich max-w-[60ch]">
            {testkunde.handel.einleitung}
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <div className="bg-creme rounded-[22px] px-6 sm:px-7 py-7 border border-sand-tief">
              <p className="gesperrt text-terra">
                {testkunde.handel.duBekommst.titel}
              </p>
              <ul className="mt-5 space-y-4">
                {testkunde.handel.duBekommst.punkte.map((z) => (
                  <li
                    key={z}
                    className="flex items-start gap-3 text-[15.5px] leading-[1.7]"
                  >
                    <Tropfen className="w-3 h-3 mt-1.5 shrink-0 text-terra" />
                    {z}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-creme rounded-[22px] px-6 sm:px-7 py-7 border border-sand-tief">
              <p className="gesperrt text-salbei">
                {testkunde.handel.duGibst.titel}
              </p>
              <ul className="mt-5 space-y-4">
                {testkunde.handel.duGibst.punkte.map((z) => (
                  <li
                    key={z}
                    className="flex items-start gap-3 text-[15.5px] leading-[1.7]"
                  >
                    <Tropfen className="w-3 h-3 mt-1.5 shrink-0 text-salbei" />
                    {z}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Wichtig, und es soll auch so gelesen werden: Der Zugang hängt
              nicht an der Rückmeldung. */}
          <p className="mt-7 text-[15px] leading-[1.7] text-tinte-weich max-w-[62ch]">
            {testkunde.handel.fussnote}
          </p>
        </div>
      </section>

      {/* --- Warum es diese Runde gibt ------------------------------------ */}
      <section className="px-6 sm:px-8 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-[clamp(1.7rem,4vw,2.4rem)] leading-[1.15] tracking-[-0.015em]">
            {testkunde.warum.titel}
          </h2>
          <div className="mt-7 space-y-6 text-[16.5px] leading-[1.8] text-tinte-weich">
            {testkunde.warum.absaetze.map((a, i) => (
              <p key={i}>{a}</p>
            ))}
          </div>
        </div>
      </section>

      {/* --- Das steckt drin: die zehn Phasen ------------------------------ */}
      <section className="px-6 sm:px-8 py-16 sm:py-20 bg-creme-tief border-y border-linie">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[clamp(1.7rem,4vw,2.4rem)] leading-[1.15] tracking-[-0.015em]">
            Das steckt drin, vollständig
          </h2>
          <p className="mt-4 text-[16px] leading-[1.75] text-tinte-weich max-w-[60ch]">
            Es ist derselbe Kurs, den ich für 899 € verkaufe. Keine gekürzte
            Fassung, keine Phase gesperrt, kein „kommt später nach“.
          </p>

          <ol className="mt-9 border-t border-sand-tief">
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

          {/* --- Und was ausdrücklich nicht dabei ist ---------------------- */}
          <div className="mt-11 border-l-2 border-terra pl-5 sm:pl-6">
            <p className="gesperrt text-terra">{testkunde.nichtDrin.titel}</p>
            <ul className="mt-4 space-y-2.5">
              {testkunde.nichtDrin.punkte.map((z) => (
                <li key={z} className="text-[15.5px] leading-[1.65] text-tinte">
                  {z}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[15px] leading-[1.7] text-tinte-weich max-w-[62ch]">
              {testkunde.nichtDrin.erklaerung}
            </p>
          </div>
        </div>
      </section>

      {/* --- Wie es abläuft ----------------------------------------------- */}
      <section className="px-6 sm:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[clamp(1.7rem,4vw,2.4rem)] leading-[1.15] tracking-[-0.015em]">
            {testkunde.ablauf.titel}
          </h2>

          <ol className="mt-9 space-y-8">
            {testkunde.ablauf.schritte.map((s, i) => (
              <li key={s.titel} className="flex items-start gap-5 sm:gap-7">
                <span className="font-serif text-[15px] text-terra tabular-nums w-7 shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-serif text-[20px] leading-snug">
                    {s.titel}
                  </p>
                  <p className="mt-2 text-[15.5px] leading-[1.7] text-tinte-weich max-w-[58ch]">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* --- Für wen es nicht das Richtige ist ----------------------------- */}
      <section className="px-6 sm:px-8 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto bg-sand rounded-[22px] px-6 sm:px-9 py-8 sm:py-10">
          <p className="gesperrt text-terra-tief">
            {testkunde.nichtFuerDich.titel}
          </p>
          <ul className="mt-5 space-y-3.5">
            {testkunde.nichtFuerDich.punkte.map((z) => (
              <li
                key={z}
                className="flex items-start gap-3 text-[15.5px] leading-[1.7] text-tinte"
              >
                <span aria-hidden className="mt-2.5 w-3 h-px shrink-0 bg-terra" />
                {z}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --- Stimmen ------------------------------------------------------
          Steht direkt vor dem Kaufblock, weil hier die letzte Frage
          auftaucht: kann die das überhaupt. Und sie steht bewusst NICHT
          weiter oben: Erst die Einladung und der ehrliche Grund, dann der
          Beleg. Umgekehrt läse es sich wie eine Verkaufsseite, die ihre
          Bewertungen vor sich herträgt. */}
      <section className="px-6 sm:px-8 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[clamp(1.6rem,3.6vw,2.2rem)] leading-[1.15] tracking-[-0.015em]">
            {testkunde.stimmen.titel}
          </h2>
          <p className="mt-4 text-[16px] leading-[1.75] text-tinte-weich">
            {testkunde.stimmen.einleitung}
          </p>

          <div className="mt-8 space-y-6">
            {testkunde.stimmen.liste.map((s) => (
              <figure
                key={s.name}
                className="border-l-2 border-terra/40 pl-5 sm:pl-6"
              >
                <blockquote className="font-serif text-[17px] sm:text-[18px] leading-[1.65] text-tinte">
                  „{s.zitat}“
                </blockquote>
                <figcaption className="mt-3 text-[14px] text-tinte-weich">
                  {s.name} · {s.rolle}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* --- Kaufen -------------------------------------------------------- */}
      <section className="px-6 sm:px-8 pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto bg-terra text-creme rounded-[26px] px-7 sm:px-12 py-12 sm:py-14 text-center">
          <Tropfen className="w-5 h-6 mx-auto text-sand" />
          <h2 className="mt-6 font-serif text-[clamp(1.9rem,4.5vw,2.8rem)] leading-[1.12] tracking-[-0.015em]">
            {testkunde.kauf.titel}
          </h2>
          <p className="mt-5 flex items-baseline justify-center gap-4">
            <span className="font-serif text-4xl sm:text-5xl">
              {testkunde.preis}
            </span>
            <span className="text-[17px] text-creme/70 line-through">
              {testkunde.preisStatt}
            </span>
          </p>
          <p className="mt-2 text-[14.5px] text-creme/80">
            {testkunde.preisZusatz}
          </p>
          <a
            href={links.kaufenTestkunde}
            className="mt-8 inline-block bg-creme text-tinte font-semibold text-[15px] px-8 py-4 rounded-full hover:bg-sand transition-colors"
          >
            {testkunde.knopf}
          </a>
          <p className="mt-6 text-[14.5px] leading-relaxed text-creme/80 max-w-[46ch] mx-auto">
            {testkunde.kauf.hinweis}
          </p>
          <p className="mt-5 text-[13.5px] leading-relaxed text-creme/70 max-w-[46ch] mx-auto">
            {testkunde.frist}
          </p>
        </div>

        <p className="mt-8 text-center text-[15px] text-tinte-weich">
          Du willst erst in Ruhe sehen, worum es geht?{" "}
          <Link
            href={links.kursSeite}
            className="text-terra-tief underline underline-offset-4 hover:text-tinte"
          >
            Die ganze Kursseite ansehen
          </Link>
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
