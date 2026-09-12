"use client";

import { useState } from "react";
import Link from "next/link";
import Tropfen from "@/components/Tropfen";
import { guideSeite } from "@/lib/inhalte";

// ---------------------------------------------------------------------------
// Das Formular auf /oel-guide.
//
// Es schickt an /api/oel-guide auf dieser Seite, und die reicht von Server zu
// Server an pferdeliebehealthy.de weiter. Das Häkchen ist Pflicht, ohne es gibt
// es keinen Guide (so wie beim Stall Organizer entschieden). Die Herkunft aus
// `?von=` (die Linkseite hängt `instagram` an) wandert in die Spalte `quelle`.
// ---------------------------------------------------------------------------

type Zustand = "offen" | "sendet" | "fertig";

export default function GuideFormular() {
  const [zustand, setZustand] = useState<Zustand>("offen");
  const [fehler, setFehler] = useState("");

  async function absenden(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setFehler("");
    setZustand("sendet");

    try {
      const res = await fetch("/api/oel-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vorname: f.get("vorname"),
          email: f.get("email"),
          einwilligung: f.get("einwilligung") === "ja",
          webseite: f.get("webseite"),
          von: new URLSearchParams(window.location.search).get("von") ?? "",
        }),
      });
      const antwort = await res.json().catch(() => null);
      if (res.ok && antwort?.ok) {
        setZustand("fertig");
        return;
      }
      setFehler(antwort?.fehler || guideSeite.fehlerAllgemein);
    } catch {
      setFehler(guideSeite.fehlerAllgemein);
    }
    setZustand("offen");
  }

  if (zustand === "fertig") {
    return (
      <div role="status" className="py-4">
        <Tropfen className="w-5 h-5 text-terra" />
        <h2 className="mt-4 font-serif text-[1.7rem] leading-tight">{guideSeite.erfolgTitel}</h2>
        <p className="mt-3 text-[15.5px] leading-[1.75] text-tinte-weich">{guideSeite.erfolgText}</p>
      </div>
    );
  }

  const feld =
    "w-full rounded-xl border border-linie bg-creme px-4 py-3 text-[16px] text-tinte placeholder:text-tinte-weich/60 focus:outline-none focus:border-terra";

  return (
    <form onSubmit={absenden} className="relative space-y-5">
      <div>
        <label htmlFor="guide-vorname" className="block text-[14px] font-semibold mb-1.5">
          {guideSeite.vorname} <span className="font-normal text-tinte-weich">({guideSeite.vornameHinweis})</span>
        </label>
        <input id="guide-vorname" name="vorname" type="text" autoComplete="given-name" maxLength={60} className={feld} />
      </div>

      <div>
        <label htmlFor="guide-email" className="block text-[14px] font-semibold mb-1.5">
          {guideSeite.email}
        </label>
        <input
          id="guide-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          maxLength={200}
          className={feld}
        />
      </div>

      {/* Honigtopf: für Menschen unsichtbar, Spam-Skripte füllen ihn aus. */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label>
          Webseite
          <input name="webseite" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="flex items-start gap-3 text-[14px] leading-[1.55] text-tinte-weich cursor-pointer">
        <input
          name="einwilligung"
          type="checkbox"
          value="ja"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[#B0543A]"
        />
        <span>{guideSeite.einwilligung}</span>
      </label>

      {fehler && (
        <p role="alert" className="rounded-xl bg-creme-tief px-4 py-3 text-[14.5px] leading-snug text-terra-tief">
          {fehler}
        </p>
      )}

      <button
        type="submit"
        disabled={zustand === "sendet"}
        className="w-full bg-terra text-creme font-semibold text-[15.5px] px-7 py-3.5 rounded-full hover:bg-terra-tief transition-colors disabled:opacity-60"
      >
        {zustand === "sendet" ? guideSeite.sendet : guideSeite.knopf}
      </button>

      <p className="text-[13px] leading-snug text-tinte-weich">
        {guideSeite.datenschutz}{" "}
        <Link href="/datenschutz" className="underline underline-offset-4 hover:text-tinte">
          Datenschutzerklärung
        </Link>
        .
      </p>
    </form>
  );
}
// ENDE DER DATEI
