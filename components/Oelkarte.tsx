import { oele } from "@/lib/inhalte";
import Tropfen from "@/components/Tropfen";

/**
 * Die Ölkarte.
 *
 * Jede Karte ist einem Apothekeretikett nachempfunden: doppelte Haarlinie,
 * der Name in Versalien, der botanische Name kursiv darunter, die Stoffklasse
 * als kleine Zeile am Fuß. Das ist das Element, an das man sich von dieser
 * Seite erinnern soll — der Rest bleibt deshalb ruhig.
 */
export default function Oelkarte() {
  return (
    <section id="oele" className="px-6 sm:px-8 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="blende max-w-[40rem]">
          <p className="gesperrt text-terra">{oele.augenbraue}</p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,4.6vw,3.1rem)] leading-[1.1] tracking-[-0.015em]">
            {oele.titel}
          </h2>
          <p className="mt-6 text-[16.5px] leading-[1.8] text-tinte-weich">
            {oele.einleitung}
          </p>
        </div>

        <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {oele.liste.map((oel) => (
            <li
              key={oel.name}
              className="blende etikett p-7 sm:p-8 flex flex-col transition-colors"
            >
              <h3 className="font-serif text-[22px] leading-tight">{oel.name}</h3>
              <p className="mt-1 font-serif italic text-[15px] text-salbei">
                {oel.botanisch}
              </p>

              <div className="my-5 border-t border-sand-tief" />

              <p className="text-[14.5px] leading-[1.75] text-tinte-weich flex-1">
                {oel.text}
              </p>

              <p className="gesperrt mt-6 text-salbei flex items-center gap-2">
                <Tropfen className="w-2.5 h-2.5" />
                {oel.stoffklasse}
              </p>
            </li>
          ))}
        </ul>

        <p className="blende mt-8 text-[14px] leading-relaxed text-tinte-weich max-w-[40rem]">
          {oele.fussnote}
        </p>
      </div>
    </section>
  );
}
