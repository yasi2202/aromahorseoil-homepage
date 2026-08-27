import type { Metadata } from "next";
import RechtsSeite from "@/components/RechtsSeite";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function Impressum() {
  return (
    <RechtsSeite augenbraue="Rechtliches" titel="Impressum">
      <h3>Gesetzliche Anbieterkennung</h3>
      <p>
        Yasemin Halac
        <br />
        aromahorseoil
        <br />
        Steigeweg 7
        <br />
        74722 Buchen
        <br />
        Deutschland
      </p>
      <p>
        E-Mail:{" "}
        <a href="mailto:info@pferdeliebehealthy.de">info@pferdeliebehealthy.de</a>
      </p>

      <h3>Inhaltlich Verantwortliche gemäß § 18 Abs. 2 MStV</h3>
      <p>
        Yasemin Halac
        <br />
        Steigeweg 7
        <br />
        74722 Buchen
        <br />
        Deutschland
      </p>

      <h2>Streitbeilegung</h2>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Umsatzsteuer</h2>
      <p>Steuernummer: 46138/44524</p>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: folgt
        in Kürze.
      </p>

      <h2>Berufshaftpflichtversicherung</h2>
      <p>
        <strong>Name und Sitz des Versicherers:</strong>
        <br />
        VHV Allgemeine Versicherung AG
        <br />
        VHV-Platz 1
        <br />
        30177 Hannover
      </p>
      <p>
        <strong>Geltungsraum der Versicherung:</strong> Deutschland
      </p>

      <h2>Hinweis zu den Inhalten</h2>
      <p>
        Die Angaben auf dieser Seite dienen der Information und ersetzen keine
        tierärztliche Beratung, Diagnose oder Behandlung. Ätherische Öle und
        Hydrolate werden hier als begleitende Pflege beschrieben. Bei
        Krankheitsanzeichen wende dich bitte an deine Tierärztin oder deinen
        Tierarzt.
      </p>
    </RechtsSeite>
  );
}
