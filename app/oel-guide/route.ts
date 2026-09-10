import { NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// Die feste Adresse für den kostenlosen Öl-Guide: /oel-guide
//
// Sie leitet im Moment direkt auf die PDF-Datei in public/ weiter.
//
// ▸ WARUM ES DIESE ZWISCHENSTATION GIBT, statt direkt auf die Datei zu
//   verlinken: Dieselbe Adresse steht in der Instagram-Bio von
//   @aromahorseoil. Eine Bio ändert man selten, und wer es vergisst, schickt
//   monatelang alle Besucherinnen ins Leere. Genau das ist mit dem alten
//   alfima-Link passiert, der bis zum 10.09.2026 überall stand und nur noch
//   eine Fehlerseite lieferte.
//
//   Mit dieser Adresse lässt sich später ändern, WAS dahinter passiert, ohne
//   dass die Bio mitwandern muss. Soll aus dem direkten Download einmal eine
//   Anmeldeseite werden (Mailadresse gegen Guide), ersetzt eine page.tsx an
//   dieser Stelle diese Datei, und jeder alte Link führt automatisch dorthin.
//
// ▸ WARUM 307 UND NICHT 308: 307 heisst "vorübergehend". Eine dauerhafte
//   Weiterleitung (308) merken sich Browser und Suchmaschinen, und dann käme
//   eine spätere Anmeldeseite bei manchen gar nicht an, weil ihr Browser die
//   Datei direkt aufruft, ohne hier noch nachzufragen.
// ---------------------------------------------------------------------------

/** Die Datei in public/. Wer sie ersetzt, behält am besten den Namen. */
const DATEI = "/aromahorseoil-oel-guide.pdf";

export function GET(request: Request) {
  return NextResponse.redirect(new URL(DATEI, request.url), 307);
}
