import Link from "next/link";
import Tropfen from "@/components/Tropfen";

export default function NichtGefunden() {
  return (
    <main id="inhalt" className="px-6 sm:px-8 py-28 sm:py-36 text-center">
      <div className="max-w-lg mx-auto">
        <Tropfen className="w-5 h-6 mx-auto text-terra" />
        <h1 className="mt-7 font-serif text-[clamp(2rem,5vw,3rem)] leading-tight tracking-[-0.02em]">
          Diese Seite gibt es nicht.
        </h1>
        <p className="mt-5 text-[16.5px] leading-[1.8] text-tinte-weich">
          Vielleicht hat sich ein Buchstabe in die Adresse verirrt. Von der
          Startseite aus findest du alles wieder.
        </p>
        <Link
          href="/"
          className="mt-9 inline-block bg-terra text-creme font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-terra-tief transition-colors"
        >
          Zur Startseite
        </Link>
      </div>
    </main>
  );
}
