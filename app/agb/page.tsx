import type { Metadata } from "next";
import Link from "next/link";
import RechtsSeite from "@/components/RechtsSeite";

// ---------------------------------------------------------------------------
// Übernommen aus den AGB von pferdeliebehealthy.de — Anbieterin ist dieselbe
// Person, und es geht um dieselbe Art Produkt: einen digitalen Kurs.
//
// Angepasst wurde:
//   · Marke und Adresse der Seite
//   · § 4 beschreibt jetzt ausdrücklich, dass der Kurs Lernmaterial ist und
//     weder Prüfung noch Korrektur umfasst. Das ist nicht nur
//     Kundeninformation, daran hängt auch, dass kein Fernunterricht im Sinne
//     des FernUSG vorliegt.
//   · Seit dem 04.09.2026 nennt § 4 die Teilnahmebescheinigung. Sie ist
//     bewusst als reine Teilnahmebestätigung ohne Bewertung beschrieben:
//     Ein Nachweis über den LERNERFOLG wäre genau das Merkmal, das den Kurs
//     zulassungspflichtig machen würde. Wer diesen Absatz umformuliert, darf
//     daraus also kein Zeugnis machen.
//   · Die Abschnitte zu Futterberatungen und physischen Waren sind entfallen,
//     hier wird beides nicht verkauft.
//   · alfima statt ThriveCart als Bestellplattform.
//
// LASS DAS VOM HÄNDLERBUND PRÜFEN, bevor das erste Produkt live geht.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "AGB",
  alternates: { canonical: "/agb" },
  robots: { index: false, follow: true },
};

export default function Agb() {
  return (
    <RechtsSeite
      augenbraue="Rechtliches"
      titel="Allgemeine Geschäftsbedingungen und Kundeninformationen"
    >
      <h2>I. Allgemeine Geschäftsbedingungen</h2>

      <h3>§ 1 Grundlegende Bestimmungen</h3>
      <p>
        Die nachstehenden Geschäftsbedingungen gelten für alle Verträge, die Sie
        mit uns als Anbieterin, Yasemin Halac, über diese Internetseite
        schließen. Verbraucher im Sinne dieser AGB ist jede natürliche Person,
        die ein Rechtsgeschäft zu privaten Zwecken abschließt. Unternehmer ist
        jede natürliche oder juristische Person, die in Ausübung ihrer
        gewerblichen oder selbständigen Tätigkeit handelt.
      </p>

      <h3>§ 2 Zustandekommen des Vertrages</h3>
      <p>
        Gegenstand des Vertrages ist der Verkauf digitaler Inhalte, insbesondere
        von Online-Kursen zur Aromapflege beim Pferd. Mit Einstellung eines
        Angebots auf unserer Website geben wir ein verbindliches Angebot ab. Der
        Vertrag kommt über den Bestellvorgang unseres Bestellplattform-Anbieters
        zustande, durch Auswahl des Produkts, Eingabe der Daten und Bestätigung
        über „zahlungspflichtig bestellen&quot;. Die Abwicklung erfolgt per
        E-Mail; der Kunde stellt sicher, dass die angegebene E-Mail-Adresse
        korrekt ist.
      </p>

      <h3>§ 3 Digitale Inhalte und Nutzungslizenz</h3>
      <p>
        Die digitalen Inhalte sind urheberrechtlich geschützt. Der Kunde erhält
        eine einfache, nicht übertragbare Nutzungslizenz für den privaten
        Gebrauch. Eine Weitergabe, Vervielfältigung oder öffentliche Nutzung ist
        untersagt. Der Zugang ist persönlich und nicht für mehrere Personen
        bestimmt.
      </p>

      <h3>§ 4 Gegenstand und Grenzen des Kursangebots</h3>
      <p>
        Der angebotene Kurs ist ein <strong>Selbstlernangebot</strong>. Der Kunde
        erhält Zugang zu vorbereitetem Lernmaterial, das er zeitlich und
        inhaltlich frei einteilt.
      </p>
      <p>
        Ausdrücklich <strong>nicht</strong> Gegenstand des Vertrages sind: eine
        Abschlussprüfung, die Korrektur oder Bewertung von Einsendungen, eine
        individuelle Lernbegleitung oder Betreuung sowie eine Beratung zu einem
        einzelnen Pferd. Im Kurs enthaltene Reflexionsfragen dienen allein dem
        eigenen Nachdenken; sie werden von uns weder eingefordert noch bewertet.
      </p>
      <p>
        Nach dem Durcharbeiten aller Lektionen stellen wir auf Wunsch eine
        <strong>Teilnahmebescheinigung</strong> aus. Sie bestätigt allein die
        Teilnahme am Kurs. Sie setzt keine Prüfung voraus, enthält keine
        Bewertung und ist kein Nachweis eines Lernerfolgs, eines Abschlusses
        oder einer Qualifikation.
      </p>
      <p>
        Der Kurs stellt damit keine Ausbildung im Sinne des
        Fernunterrichtsschutzgesetzes dar.
      </p>

      <h3>§ 5 Zahlungsbedingungen</h3>
      <p>
        Alle Preise sind Endpreise inklusive gesetzlicher Steuern. Die
        verfügbaren Zahlungsarten werden im Bestellvorgang angezeigt. Die Zahlung
        ist sofort fällig, sofern nichts anderes vereinbart wurde.
      </p>

      <h3>§ 6 Bereitstellung</h3>
      <p>
        Der Zugang zu den digitalen Inhalten wird nach Zahlungseingang per E-Mail
        bereitgestellt, in der Regel unmittelbar. Die Inhalte werden über unsere
        Lernplattform ausgeliefert. Für den Zugriff werden ein internetfähiges
        Gerät und ein aktueller Browser benötigt.
      </p>

      <h3>§ 7 Verfügbarkeit</h3>
      <p>
        Der Zugang wird zeitlich unbegrenzt gewährt. Ein Anspruch auf
        ununterbrochene Verfügbarkeit der Lernplattform besteht nicht; kurzzeitige
        Unterbrechungen, etwa für Wartungen, bleiben vorbehalten. Sollte der
        Betrieb dauerhaft eingestellt werden, stellen wir die erworbenen Inhalte
        in einer herunterladbaren Form zur Verfügung.
      </p>

      <h3>§ 8 Gewährleistung</h3>
      <p>Es gelten die gesetzlichen Gewährleistungsrechte.</p>

      <h3>§ 9 Haftung</h3>
      <p>
        Die Inhalte dienen der Information und Weiterbildung. Sie ersetzen keine
        tierärztliche Diagnose, Beratung oder Behandlung. Keine Haftung besteht
        für individuelle Reaktionen eines Tieres sowie für eine unsachgemäße
        Umsetzung der vermittelten Inhalte. Im Übrigen haften wir nur bei Vorsatz
        und grober Fahrlässigkeit; hiervon unberührt bleibt die Haftung für
        Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
      </p>

      <h3>§ 10 Rechtswahl</h3>
      <p>Es gilt deutsches Recht, das UN-Kaufrecht ist ausgeschlossen.</p>

      <hr />

      <h2>II. Kundeninformationen</h2>

      <h3>1. Anbieterin</h3>
      <p>
        Yasemin Halac, Steigeweg 7, 74722 Buchen, Deutschland. E-Mail:{" "}
        <a href="mailto:info@pferdeliebehealthy.de">info@pferdeliebehealthy.de</a>
      </p>

      <h3>2. Wesentliche Merkmale der Ware oder Dienstleistung</h3>
      <p>
        Die wesentlichen Merkmale ergeben sich aus der jeweiligen
        Produktbeschreibung auf dieser Website.
      </p>

      <h3>3. Vertragssprache</h3>
      <p>Deutsch</p>

      <h3>4. Vertragsspeicherung</h3>
      <p>
        Der Vertragstext wird nicht dauerhaft gespeichert. Die Bestelldaten
        werden Ihnen per E-Mail zugesandt.
      </p>

      <h3>5. Widerrufsrecht</h3>
      <p>
        Die Einzelheiten entnehmen Sie bitte unserer{" "}
        <Link href="/widerrufsbelehrung">Widerrufsbelehrung</Link>.
      </p>

      <h3>6. Streitbeilegung</h3>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </p>

      <h3>7. Nutzung externer Plattformen</h3>
      <p>
        Zur Abwicklung von Bestellungen und zur Bereitstellung digitaler Inhalte
        nutzen wir externe Dienstleister, insbesondere die Bestellplattform
        alfima sowie unsere Lernplattform. Im Rahmen der Vertragsabwicklung
        werden personenbezogene Daten an diese Dienstleister weitergegeben,
        soweit dies zur Vertragserfüllung erforderlich ist. Ergänzend gelten die
        jeweiligen Datenschutzbestimmungen der eingesetzten Plattformen.
      </p>
    </RechtsSeite>
  );
}
