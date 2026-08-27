import { abschluss, links } from "@/lib/inhalte";
import Tropfen from "@/components/Tropfen";

export default function Abschluss() {
  return (
    <section className="px-6 sm:px-8 py-20 sm:py-28 text-center">
      <div className="max-w-2xl mx-auto blende">
        <Tropfen className="w-5 h-6 mx-auto text-terra" />
        <h2 className="mt-7 font-serif text-[clamp(2.1rem,5vw,3.3rem)] leading-[1.1] tracking-[-0.02em]">
          {abschluss.titel}
        </h2>
        <p className="mt-5 text-[16.5px] leading-[1.8] text-tinte-weich">
          {abschluss.text}
        </p>
        <a
          href={links.oelGuide}
          target="_blank"
          rel="noopener"
          className="mt-9 inline-block bg-tinte text-creme font-semibold text-[15px] px-8 py-4 rounded-full hover:bg-terra transition-colors"
        >
          {abschluss.knopf}
        </a>
      </div>
    </section>
  );
}
