import { ausbildung, links } from "@/lib/inhalte";
import Tropfen from "@/components/Tropfen";

export default function Ausbildung() {
  return (
    <section
      id="ausbildung"
      className="px-6 sm:px-8 py-20 sm:py-28 bg-creme-tief border-y border-linie"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
        <div className="blende lg:sticky lg:top-28 lg:self-start">
          <p className="gesperrt text-terra">{ausbildung.augenbraue}</p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,4.6vw,3.1rem)] leading-[1.1] tracking-[-0.015em]">
            {ausbildung.titel}
          </h2>
          <p className="mt-6 text-[16.5px] leading-[1.8] text-tinte-weich">
            {ausbildung.text}
          </p>

          <ul className="mt-7 space-y-2.5">
            {ausbildung.eckdaten.map((e) => (
              <li
                key={e}
                className="flex items-center gap-3 text-[15px] text-tinte-weich"
              >
                <Tropfen className="w-3 h-3 shrink-0 text-salbei" />
                {e}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <a
              href={links.ausbildung}
              className="inline-block bg-terra text-creme font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-terra-tief transition-colors"
            >
              {ausbildung.knopf}
            </a>
            <p className="mt-5 text-[14px] text-tinte-weich">
              {ausbildung.hinweisTeilnehmerin}{" "}
              <a
                href={links.akademie}
                target="_blank"
                rel="noopener"
                className="text-terra-tief underline underline-offset-4 hover:text-tinte"
              >
                {ausbildung.knopfTeilnehmerin}
              </a>
            </p>
          </div>
        </div>

        {/* Die Phasen bauen aufeinander auf — erst das Handwerk, dann die
            Chemie, dann das Pferd, dann die Anwendung. Deshalb sind sie
            durchnummeriert und nicht als Kacheln gestreut. */}
        <ol className="blende border-t border-linie">
          {ausbildung.phasen.map((phase, i) => (
            <li
              key={phase}
              className="flex items-baseline gap-5 sm:gap-7 py-4 border-b border-linie group"
            >
              <span className="font-serif text-[15px] text-terra tabular-nums w-7 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-[19px] sm:text-[21px] leading-snug group-hover:text-terra-tief transition-colors">
                {phase}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
