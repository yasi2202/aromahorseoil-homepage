"use client";

import { useEffect } from "react";

/**
 * Blendet Abschnitte sanft ein, sobald sie in den sichtbaren Bereich kommen.
 *
 * Alles, was die Klasse `blende` trägt, wird erfasst. Die Klasse `js-blenden`
 * kommt erst hier ans <html> — ohne JavaScript bleibt damit alles sofort
 * sichtbar, statt für immer unsichtbar zu sein.
 *
 * Wer im Betriebssystem "Bewegung reduzieren" eingestellt hat, bekommt die
 * Seite ohne Animation; darum kümmert sich die Regel in globals.css.
 */
export default function Einblenden() {
  useEffect(() => {
    const wurzel = document.documentElement;
    wurzel.classList.add("js-blenden");

    let etwasGesehen = false;

    const beobachter = new IntersectionObserver(
      (eintraege) => {
        for (const eintrag of eintraege) {
          if (!eintrag.isIntersecting) continue;
          etwasGesehen = true;
          eintrag.target.classList.add("sichtbar");
          beobachter.unobserve(eintrag.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".blende").forEach((el) => beobachter.observe(el));

    // Sicherheitsnetz: Springt der Beobachter nach drei Sekunden kein
    // einziges Mal an — manche Browser in Apps wie Instagram verhalten sich
    // eigen —, wird das Verstecken komplett aufgehoben. Lieber eine Seite
    // ohne Effekt als eine Seite ohne Text.
    const notbremse = window.setTimeout(() => {
      if (!etwasGesehen) wurzel.classList.remove("js-blenden");
    }, 3000);

    return () => {
      window.clearTimeout(notbremse);
      beobachter.disconnect();
      wurzel.classList.remove("js-blenden");
    };
  }, []);

  return null;
}
