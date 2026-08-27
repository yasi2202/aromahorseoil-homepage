import Kopfbereich from "@/components/Kopfbereich";
import Riechtest from "@/components/Riechtest";
import Oelkarte from "@/components/Oelkarte";
import GuideBand from "@/components/GuideBand";
import Ausbildung from "@/components/Ausbildung";
import UeberMich from "@/components/UeberMich";
import Fragen from "@/components/Fragen";
import Abschluss from "@/components/Abschluss";
import { ausbildung, fragen } from "@/lib/inhalte";
import { url } from "@/lib/seo";

// ---------------------------------------------------------------------------
// Zwei Ergänzungen für Google:
//
// FAQPage  — die häufigen Fragen können direkt im Suchergebnis erscheinen.
// Course   — die Ausbildung kann als Kurs erkannt werden.
//
// Beide beschreiben nur, was auf der Seite ohnehin steht. Das ist wichtig:
// Angaben, die im sichtbaren Text fehlen, wertet Google als Verstoß.
// ---------------------------------------------------------------------------
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
      "@id": url("/#ausbildung"),
      name: ausbildung.titel,
      description: ausbildung.text,
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
      <Ausbildung />
      <UeberMich />
      <Fragen />
      <Abschluss />
    </main>
  );
}
