"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { links, marke } from "@/lib/inhalte";

const menue = [
  { ziel: "/#riechtest", text: "Der Riechtest" },
  { ziel: "/#oele", text: "Die Öle" },
  { ziel: "/#ausbildung", text: "Ausbildung" },
  { ziel: "/#ueber-mich", text: "Über mich" },
  { ziel: "/#fragen", text: "Fragen" },
];

export default function Kopfzeile() {
  const [gescrollt, setGescrollt] = useState(false);
  const [offen, setOffen] = useState(false);
  const pfad = usePathname();
  const istStartseite = pfad === "/";

  useEffect(() => {
    if (!istStartseite) return;
    // Solange der dunkle Kopfbereich hinter der Leiste liegt, bleibt sie
    // durchsichtig mit hellem Text. Ist er durchgelaufen, bekommt sie einen
    // cremefarbenen Grund — sonst stünde heller Text auf hellem Inhalt.
    //
    // Die Höhe wird gemessen und nicht geschätzt: auf dem Handy liegen Bild
    // und Text untereinander, der Kopfbereich ist dort weit höher als der
    // Bildschirm.
    const pruefen = () => {
      const kopf = document.getElementById("kopfbereich");
      const grenze = (kopf ? kopf.offsetHeight : window.innerHeight) - 88;
      setGescrollt(window.scrollY > grenze);
    };
    pruefen();
    window.addEventListener("scroll", pruefen, { passive: true });
    window.addEventListener("resize", pruefen);
    return () => {
      window.removeEventListener("scroll", pruefen);
      window.removeEventListener("resize", pruefen);
    };
  }, [istStartseite]);

  useEffect(() => {
    document.body.style.overflow = offen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [offen]);

  const durchsichtig = istStartseite && !gescrollt && !offen;

  // Sprungmarken auf der Startseite selbst ansteuern. Überließe man das dem
  // Browser, passierte beim zweiten Klick auf denselben Menüpunkt nichts:
  // die Sprungmarke steht dann schon in der Adresse.
  const springe = (e: React.MouseEvent<HTMLAnchorElement>, ziel: string) => {
    setOffen(false);
    if (!istStartseite || !ziel.startsWith("/#")) return;
    const element = document.getElementById(ziel.slice(2));
    if (!element) return;
    e.preventDefault();
    // Erst im nächsten Frame scrollen: das Mobilmenü setzt beim Schließen
    // overflow zurück, und solange das noch hidden ist, läuft der Scroll
    // ins Leere.
    requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", ziel);
    });
  };

  return (
    <>
      <header
        className={`${istStartseite ? "fixed" : "sticky"} top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          durchsichtig
            ? "bg-transparent"
            : "bg-creme/92 backdrop-blur-md border-b border-linie"
        }`}
      >
        <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 sm:px-8 py-5">
          <Link
            href="/"
            onClick={() => setOffen(false)}
            className={`font-serif text-xl tracking-tight ${
              durchsichtig ? "text-creme" : "text-tinte"
            }`}
          >
            {marke.wortmarke.hell}
            <span className={durchsichtig ? "text-sand" : "text-terra"}>
              {marke.wortmarke.dunkel}
            </span>
          </Link>

          <div
            className={`hidden lg:flex gap-7 text-[14.5px] ${
              durchsichtig ? "text-creme/90" : "text-tinte-weich"
            }`}
          >
            {menue.map((m) => (
              <Link
                key={m.ziel}
                href={m.ziel}
                onClick={(e) => springe(e, m.ziel)}
                className="hover:opacity-70 transition-opacity"
              >
                {m.text}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={links.oelGuide}
              target="_blank"
              rel="noopener"
              className={`hidden sm:inline-block text-sm font-semibold px-5 py-2.5 rounded-full transition-colors ${
                durchsichtig
                  ? "bg-creme text-tinte hover:bg-sand"
                  : "bg-terra text-creme hover:bg-terra-tief"
              }`}
            >
              Öl-Guide holen
            </a>

            <button
              aria-label={offen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={offen}
              onClick={() => setOffen((v) => !v)}
              className={`lg:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-[5px] ${
                durchsichtig ? "text-creme" : "text-tinte"
              }`}
            >
              <span
                className={`block w-6 h-[1.5px] bg-current transition-transform duration-300 ${
                  offen ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-current transition-opacity duration-200 ${
                  offen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-current transition-transform duration-300 ${
                  offen ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Das Mobilmenü steht bewusst neben der Kopfzeile und nicht darin:
          innerhalb eines Elements mit backdrop-blur funktioniert position:fixed
          nicht mehr zuverlässig. */}
      <div
        className={`lg:hidden fixed inset-0 bg-terra-tief transition-opacity duration-300 z-50 ${
          offen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-7 px-8">
          {menue.map((m) => (
            <Link
              key={m.ziel}
              href={m.ziel}
              onClick={(e) => springe(e, m.ziel)}
              className="font-serif text-3xl text-creme"
            >
              {m.text}
            </Link>
          ))}
          <a
            href={links.oelGuide}
            target="_blank"
            rel="noopener"
            onClick={() => setOffen(false)}
            className="mt-4 bg-creme text-tinte px-8 py-3.5 rounded-full text-[15px] font-semibold"
          >
            Öl-Guide holen
          </a>
        </div>
      </div>
    </>
  );
}
