import Image from "next/image";
import { hero, links } from "@/lib/inhalte";
import Tropfen from "@/components/Tropfen";

/**
 * Der obere Bereich der Startseite.
 *
 * Er heißt im Quelltext "kopfbereich", weil die Kopfzeile seine Höhe misst,
 * um zu wissen, wann sie von durchsichtig auf creme umschalten muss.
 */
export default function Kopfbereich() {
  return (
    <section
      id="kopfbereich"
      className="relative bg-terra-tief text-creme overflow-hidden"
    >
      {/* Warmes Licht von oben rechts — nur eine Farbfläche, kein Bild, damit
          die Seite auch bei langsamer Verbindung sofort steht. */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 8%, rgba(233,218,197,0.30) 0%, rgba(233,218,197,0.06) 42%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 pt-32 pb-16 sm:pt-40 sm:pb-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div>
          <p className="gesperrt text-sand flex items-center gap-2.5">
            <Tropfen className="w-3 h-3 text-sand" />
            {hero.augenbraue}
          </p>

          <h1 className="mt-6 font-serif text-[clamp(2.6rem,6vw,4.2rem)] leading-[1.04] tracking-[-0.02em] whitespace-pre-line">
            {hero.titel}
          </h1>

          <p className="mt-7 text-[17px] leading-[1.75] text-creme/85 max-w-[34rem]">
            {hero.text}
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href={links.oelGuide}
              target="_blank"
              rel="noopener"
              className="bg-creme text-tinte font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-sand transition-colors"
            >
              {hero.knopf}
            </a>
            <a
              href="#ausbildung"
              className="border border-creme/45 text-creme font-medium text-[15px] px-7 py-3.5 rounded-full hover:bg-creme/10 transition-colors"
            >
              {hero.knopfZweit}
            </a>
          </div>
        </div>

        <div className="relative">
          {/* Die Bogenform greift die Silhouette einer Ölflasche auf und ist
              zugleich die Form, in der du dich auf Instagram zeigst. */}
          <div className="relative w-full max-w-[27rem] mx-auto aspect-[4/5] rounded-t-[999px] rounded-b-[24px] overflow-hidden ring-1 ring-sand/40">
            <Image
              src={hero.bild.quelle}
              alt={hero.bild.text}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 27rem"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Die drei Zahlen: eine Haarlinie trennt sie, mehr braucht es nicht. */}
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 pb-14">
        <div className="grid grid-cols-3 border-t border-creme/20 pt-7">
          {hero.eckdaten.map((e) => (
            <div key={e.einheit} className="text-center first:text-left last:text-right">
              <span className="font-serif text-2xl sm:text-4xl">{e.wert}</span>{" "}
              <span className="font-serif text-base sm:text-lg text-sand">
                {e.einheit}
              </span>
              <p className="mt-1 text-[12px] sm:text-[13px] text-creme/65">
                {e.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
