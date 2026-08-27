import { fragen } from "@/lib/inhalte";

/**
 * Die Fragenliste.
 *
 * Gebaut mit <details> und <summary> — das kann der Browser von sich aus
 * auf- und zuklappen, ganz ohne JavaScript, und Screenreader kennen die
 * Bedienung. Das Pluszeichen dreht sich per CSS (siehe globals.css).
 */
export default function Fragen() {
  return (
    <section
      id="fragen"
      className="px-6 sm:px-8 py-20 sm:py-28 bg-sand"
    >
      <div className="max-w-3xl mx-auto">
        <div className="blende">
          <p className="gesperrt text-terra-tief">{fragen.augenbraue}</p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,4.6vw,3.1rem)] leading-[1.1] tracking-[-0.015em]">
            {fragen.titel}
          </h2>
        </div>

        <div className="mt-12 blende border-t border-sand-tief">
          {fragen.liste.map((eintrag) => (
            <details
              key={eintrag.frage}
              className="group border-b border-sand-tief"
            >
              <summary className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none">
                <span className="font-serif text-[19px] sm:text-[21px] leading-snug group-hover:text-terra-tief transition-colors">
                  {eintrag.frage}
                </span>
                <span
                  aria-hidden
                  className="fragezeichen mt-1.5 shrink-0 text-terra text-xl leading-none transition-transform duration-300"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 pr-10 text-[15.5px] leading-[1.8] text-tinte-weich">
                {eintrag.antwort}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
