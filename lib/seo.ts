// ---------------------------------------------------------------------------
// Die Adresse, unter der die Seite öffentlich erreichbar ist.
//
// Sie steht nicht fest im Quelltext, sondern wird aus der Umgebung gelesen.
// Damit stimmt sie automatisch weiter, wenn die Seite eines Tages von
// aromahorseoil-homepage.vercel.app auf eine eigene Domain umzieht — ohne
// dass Sitemap, kanonische Adressen und Vorschaubilder einzeln nachgezogen
// werden müssen.
//
// Reihenfolge:
//   1. NEXT_PUBLIC_SITE_URL, falls in den Vercel-Einstellungen gesetzt.
//   2. Die Produktionsadresse, die Vercel selbst kennt.
//   3. Der örtliche Entwicklungsserver.
// ---------------------------------------------------------------------------

function ermitteln(): string {
  const eigene = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (eigene) return eigene.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel.replace(/\/+$/, "")}`;

  return "http://localhost:3000";
}

export const seitenUrl = ermitteln();

/** Vollständige Adresse zu einem Pfad, z. B. "/impressum" */
export function url(pfad: string): string {
  return new URL(pfad, seitenUrl).toString();
}
