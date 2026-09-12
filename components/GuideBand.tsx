import { guide, links } from "@/lib/inhalte";
import Tropfen from "@/components/Tropfen";

export default function GuideBand() {
  return (
    <section id="guide" className="px-6 sm:px-8 pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto bg-terra text-creme rounded-[26px] px-7 sm:px-12 py-12 sm:py-16 grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center blende">
        <div>
          <p className="gesperrt text-sand">{guide.augenbraue}</p>
          <h2 className="mt-4 font-serif text-[clamp(1.9rem,4.2vw,2.9rem)] leading-[1.1] tracking-[-0.015em]">
            {guide.titel}
          </h2>
          <p className="mt-5 text-[16px] leading-[1.8] text-creme/85">
            {guide.text}
          </p>
          <a
            href={links.oelGuide}
            className="mt-8 inline-block bg-creme text-tinte font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-sand transition-colors"
          >
            {guide.knopf}
          </a>
        </div>

        <ul className="space-y-4">
          {guide.punkte.map((punkt) => (
            <li
              key={punkt}
              className="flex items-start gap-3.5 text-[15.5px] leading-[1.65] text-creme/90 border-b border-creme/20 pb-4 last:border-0 last:pb-0"
            >
              <Tropfen className="w-3.5 h-3.5 mt-1 shrink-0 text-sand" />
              {punkt}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
