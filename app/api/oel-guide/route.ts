import { NextResponse } from "next/server";
import { links } from "@/lib/inhalte";

// ---------------------------------------------------------------------------
// Die Anmeldung zum Öl-Guide, vom Formular auf /oel-guide.
//
// Diese Seite hat keine Datenbank und keinen Mailversand. Deshalb reicht die
// Route von Server zu Server an pferdeliebehealthy.de weiter (dort
// app/api/oel-guide) und gibt die Antwort unverändert zurück. Aus dem Browser
// direkt dorthin zu schicken, bräuchte CORS-Freigaben auf der anderen Seite.
//
// PFH_URL ist nur zum Ausprobieren am PC da (etwa http://localhost:3071).
// ---------------------------------------------------------------------------

const SERVER = process.env.PFH_URL || links.anmeldeServer;

export async function POST(req: Request) {
  const koerper = await req.json().catch(() => null);

  if (!koerper || typeof koerper.email !== "string") {
    return NextResponse.json({ ok: false, fehler: "Da fehlt die Adresse." }, { status: 400 });
  }

  const quelle =
    typeof koerper.von === "string" ? koerper.von.toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 40) : "";

  try {
    const res = await fetch(`${SERVER}/api/oel-guide`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: koerper.email,
        vorname: koerper.vorname,
        einwilligung: koerper.einwilligung === true,
        webseite: koerper.webseite,
        quelle: quelle || "aromahorseoil",
      }),
      cache: "no-store",
    });

    const daten = await res.json().catch(() => null);
    if (!daten) throw new Error("keine Antwort");

    return NextResponse.json(daten, { status: res.status });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        fehler: "Das hat gerade nicht geklappt. Versuch es in ein paar Minuten noch einmal, oder schreib mir kurz.",
      },
      { status: 502 },
    );
  }
}
// ENDE DER DATEI
