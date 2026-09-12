import { NextResponse } from "next/server";
import { links } from "@/lib/inhalte";

// ---------------------------------------------------------------------------
// Der persönliche Link aus der Mail: /oel-guide/laden?e=<adresse>&p=<unterschrift>
//
// Die PDF liegt im privaten Speicher. Ob der Link stimmt, prüft
// pferdeliebehealthy.de (app/api/oel-guide/datei dort), denn nur dort liegt der
// Schlüssel. Diese Route holt die Datei von dort und reicht sie durch, damit
// in der Adresszeile die eigene Seite steht.
//
// Stimmt der Link nicht, geht es zurück zur Anmeldeseite mit einem Hinweis.
// ---------------------------------------------------------------------------

export const dynamic = "force-dynamic";

const SERVER = process.env.PFH_URL || links.anmeldeServer;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const e = url.searchParams.get("e") ?? "";
  const p = url.searchParams.get("p") ?? "";
  const zurueck = NextResponse.redirect(new URL("/oel-guide?fehler=link", req.url), 307);
  if (!e || !p) return zurueck;

  try {
    const res = await fetch(
      `${SERVER}/api/oel-guide/datei?e=${encodeURIComponent(e)}&p=${encodeURIComponent(p)}`,
      { cache: "no-store" },
    );
    if (!res.ok || !res.body) return zurueck;

    return new Response(res.body, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="aromahorseoil-oel-guide.pdf"',
        "Cache-Control": "private, no-store",
        "X-Robots-Tag": "noindex",
      },
    });
  } catch {
    return zurueck;
  }
}
// ENDE DER DATEI
