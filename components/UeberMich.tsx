import Image from "next/image";
import { links, ueberMich } from "@/lib/inhalte";

export default function UeberMich() {
  return (
    <section id="ueber-mich" className="px-6 sm:px-8 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
        <div className="blende relative">
          <div className="relative w-full max-w-[24rem] aspect-[4/5] rounded-t-[999px] rounded-b-[20px] overflow-hidden ring-1 ring-sand-tief">
            <Image
              src={ueberMich.bild.quelle}
              alt={ueberMich.bild.text}
              fill
              sizes="(max-width: 1024px) 90vw, 24rem"
              className="object-cover"
            />
          </div>
        </div>

        <div className="blende">
          <p className="gesperrt text-terra">{ueberMich.augenbraue}</p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,4.6vw,3.1rem)] leading-[1.1] tracking-[-0.015em]">
            {ueberMich.titel}
          </h2>

          <div className="mt-6 space-y-5 text-[16.5px] leading-[1.8] text-tinte-weich">
            {ueberMich.absaetze.map((absatz, i) => (
              <p key={i}>{absatz}</p>
            ))}
          </div>

          <div className="mt-9 border-l-2 border-salbei pl-5">
            <p className="text-[15px] leading-relaxed text-tinte-weich">
              {ueberMich.hinweis.text}
            </p>
            <a
              href={links.schwesterseite}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-block text-[15px] font-semibold text-terra-tief underline underline-offset-4 hover:text-tinte"
            >
              {ueberMich.hinweis.knopf}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
