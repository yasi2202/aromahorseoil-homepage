import { riechtest } from "@/lib/inhalte";
import Tropfen from "@/components/Tropfen";

export default function Riechtest() {
  return (
    <section id="riechtest" className="px-6 sm:px-8 py-20 sm:py-28 bg-sand">
      <div className="max-w-6xl mx-auto">
        <div className="blende max-w-[42rem]">
          <p className="gesperrt text-terra-tief">{riechtest.augenbraue}</p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,4.6vw,3.1rem)] leading-[1.1] tracking-[-0.015em]">
            {riechtest.titel}
          </h2>
          <p className="mt-6 text-[16.5px] leading-[1.8] text-tinte-weich">
            {riechtest.einleitung}
          </p>
        </div>

        {/* Die drei Schritte sind wirklich eine Reihenfolge — deshalb sind sie
            nummeriert und nicht nur nebeneinandergestellt. */}
        <ol className="mt-14 grid md:grid-cols-3 gap-px bg-sand-tief border border-sand-tief">
          {riechtest.schritte.map((schritt) => (
            <li key={schritt.nummer} className="blende bg-sand p-7 sm:p-8">
              <p className="gesperrt text-terra">{schritt.nummer}</p>
              <h3 className="mt-4 font-serif text-2xl leading-snug">
                {schritt.titel}
              </h3>
              <p className="mt-3.5 text-[15px] leading-[1.75] text-tinte-weich">
                {schritt.text}
              </p>
            </li>
          ))}
        </ol>

        <p className="blende mt-8 flex items-start gap-3 text-[14px] leading-relaxed text-tinte-weich max-w-[40rem]">
          <Tropfen className="w-3 h-3 mt-1 shrink-0 text-terra" />
          {riechtest.fussnote}
        </p>
      </div>
    </section>
  );
}
