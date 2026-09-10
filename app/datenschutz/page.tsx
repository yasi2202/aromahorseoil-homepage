import type { Metadata } from "next";
import RechtsSeite from "@/components/RechtsSeite";

// ---------------------------------------------------------------------------
// Diese Erklärung beschreibt genau das, was diese Seite tatsächlich tut:
// nichts erheben, nichts speichern, keine Cookies setzen. Es gibt hier kein
// Formular. Der Öl-Guide ist eine PDF-Datei, die direkt von dieser Seite
// geladen wird, ohne dass jemand etwas eintragen muss. Bis zum 10.09.2026
// führte er zu alfima, das es nicht mehr gibt.
//
// Sobald die Seite selbst Adressen einsammelt (Newsletter, Kontaktformular),
// muss hier ein Abschnitt dazu ergänzt werden. Und lass den Text einmal über
// den Händlerbund prüfen, bei dem du ohnehin Mitglied bist.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function Datenschutz() {
  return (
    <RechtsSeite augenbraue="Rechtliches" titel="Datenschutzerklärung">
      <p>
        Stand: August 2026. Soweit nachstehend keine anderen Angaben gemacht
        werden, ist die Bereitstellung Ihrer personenbezogenen Daten weder
        gesetzlich noch vertraglich vorgeschrieben. Sie sind zur Bereitstellung
        nicht verpflichtet, eine Nichtbereitstellung hat keine Folgen.
      </p>

      <h2>Verantwortliche</h2>
      <p>
        Yasemin Halac, Steigeweg 7, 74722 Buchen, Deutschland, E-Mail{" "}
        <a href="mailto:info@pferdeliebehealthy.de">info@pferdeliebehealthy.de</a>.
      </p>

      <h2>Was diese Seite nicht tut</h2>
      <p>
        Diese Website setzt <strong>keine Cookies</strong>, erhebt keine
        Anmeldedaten und enthält kein Formular. Die verwendeten Schriftarten
        werden von unserem eigenen Server ausgeliefert; es besteht dabei keine
        Verbindung zu Google Fonts.
      </p>

      <h2>Server-Logfiles</h2>
      <p>
        Sie können diese Seite besuchen, ohne Angaben zu Ihrer Person zu
        machen. Bei jedem Zugriff werden an unseren Webhoster Nutzungsdaten
        durch Ihren Browser übermittelt und in Protokolldaten gespeichert, etwa
        der Name der aufgerufenen Seite, Datum und Uhrzeit des Abrufs, die
        IP-Adresse, die übertragene Datenmenge und der anfragende Provider.
      </p>
      <p>
        Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO
        aus unserem berechtigten Interesse an einem störungsfreien Betrieb der
        Website.
      </p>

      <h3>Hosting durch Vercel</h3>
      <p>
        Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133, Walnut,
        CA 91789, USA gehostet. Mit Vercel besteht ein Auftragsverarbeitungs­vertrag.
        Eine Übermittlung in die USA erfolgt auf Grundlage des
        EU-US Data Privacy Framework als Angemessenheitsbeschluss der
        EU-Kommission.
      </p>

      <h3>Reichweitenmessung ohne Cookies</h3>
      <p>
        Wir nutzen „Vercel Web Analytics&quot; und „Vercel Speed Insights&quot;,
        um zu sehen, welche Seiten aufgerufen werden und wie schnell sie laden.
        Beide Dienste setzen <strong>keine Cookies</strong>, speichern keine
        Kennung in Ihrem Browser und erstellen keine geräte- oder
        personenbezogenen Profile. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
        DSGVO aus unserem berechtigten Interesse an einer datensparsamen
        Auswertung der Nutzung.
      </p>

      <h2>Der kostenlose Öl-Guide</h2>
      <p>
        Den Öl-Guide laden Sie direkt von dieser Website als PDF-Datei
        herunter. Wir fragen dafür keine Angaben ab, insbesondere keine
        E-Mail-Adresse. Es fallen dabei nur die technischen Zugriffsdaten
        an, die bei jedem Abruf dieser Website entstehen.
      </p>

      <h2>Verlinkung sozialer Netzwerke</h2>
      <p>
        Wir verlinken auf unser Profil bei Instagram. Es handelt sich um
        einfache Textlinks; es werden keine Inhalte von Instagram nachgeladen
        und keine Daten an Meta übertragen, solange Sie den Link nicht
        anklicken.
      </p>

      <h2>Kontaktaufnahme per E-Mail</h2>
      <p>
        Wenn Sie uns schreiben, verarbeiten wir Ihre E-Mail-Adresse und den
        Inhalt Ihrer Nachricht, um die Anfrage zu beantworten.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern die Anfrage
        einen Vertrag betrifft, sonst Art. 6 Abs. 1 lit. f DSGVO. Ihre Daten
        werden nach Bearbeitung unter Beachtung gesetzlicher
        Aufbewahrungsfristen gelöscht.
      </p>

      <h2>Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
        Einschränkung der Verarbeitung, auf Datenübertragbarkeit sowie ein
        Widerspruchsrecht gegen Verarbeitungen, die auf Art. 6 Abs. 1 lit. f
        DSGVO beruhen. Eine erteilte Einwilligung können Sie jederzeit mit
        Wirkung für die Zukunft widerrufen.
      </p>
      <p>
        Außerdem steht Ihnen ein Beschwerderecht bei einer
        Datenschutz-Aufsichtsbehörde zu. Zuständig ist der Landesbeauftragte
        für den Datenschutz und die Informationsfreiheit Baden-Württemberg,
        Lautenschlagerstraße 20, 70173 Stuttgart.
      </p>
    </RechtsSeite>
  );
}
