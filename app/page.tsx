import type { Metadata } from "next";
import Kopfbereich from "@/components/Kopfbereich";
import Riechtest from "@/components/Riechtest";
import Oelkarte from "@/components/Oelkarte";
import GuideBand from "@/components/GuideBand";
import KursAbschnitt from "@/components/KursAbschnitt";
import UeberMich from "@/components/UeberMich";
import Fragen from "@/components/Fragen";
import Abschluss from "@/components/Abschluss";
import { kurs, fragen } from "@/lib/inhalte";
import { url } from "@/lib/seo";

// ---------------------------------------------------------------------------
// Zwei Ergänzungen für Google:
//
// FAQPage  — die häufigen Fragen können direkt im Suchergebnis erscheinen.
// Course   — der Kurs kann als Kurs erkannt werden.
//
// Beide beschreiben nur, was auf der Seite ohnehin steht. Das ist wichtig:
// Angaben, die im sichtbaren Text fehlen, wertet Google als Verstoß.
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Seit dem 20.09.2026 liegt die Startseite der Marke auch auf
// pferdeliebehealthy.de/aroma, mit denselben Texten. Zwei Seiten mit
// demselben Inhalt schaden beiden bei Google, deshalb zeigt die kanonische
// Adresse dorthin: Die Adresse ohne „vercel“ ist die, die zählen soll.
//
// Die übrigen Seiten hier (Kurs, Öl-Guide, Rechtstexte) behalten ihre eigene
// kanonische Adresse aus app/layout.tsx, sie gibt es drüben noch nicht.
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  alternates: { canonical: "https://www.pferdeliebehealthy.de/aroma" },
};

const strukturierteDaten = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": url("/#fragen"),
      mainEntity: fragen.liste.map((eintrag) => ({
        "@type": "Question",
        name: eintrag.frage,
        acceptedAnswer: { "@type": "Answer", text: eintrag.antwort },
      })),
    },
    {
      "@type": "Course",
      "@id": url("/#kurs"),
      name: kurs.titel,
      description: kurs.text,
      inLanguage: "de-DE",
      provider: { "@id": url("/#unternehmen") },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
      },
    },
  ],
};

export default function Startseite() {
  return (
    <main id="inhalt">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(strukturierteDaten) }}
      />
      <Kopfbereich />
      <Riechtest />
      <Oelkarte />
      <GuideBand />
      <KursAbschnitt />
      <UeberMich />
      <Fragen />
      <Abschluss />
    </main>
  );
}
