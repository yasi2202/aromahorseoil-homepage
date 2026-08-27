import type { Metadata } from "next";
import RechtsSeite from "@/components/RechtsSeite";

// ---------------------------------------------------------------------------
// Übernommen aus der Widerrufsbelehrung von pferdeliebehealthy.de und auf das
// hier verkaufte Produkt eingekürzt: rein digitale Inhalte, keine physischen
// Waren, keine Beratungsleistungen.
//
// Der entscheidende Punkt steht unter „Vorzeitiges Erlöschen": Bei einem Kurs,
// der sofort freigeschaltet wird, erlischt das Widerrufsrecht nur dann, wenn
// die Käuferin dem im Bestellvorgang ausdrücklich zugestimmt hat. Diese
// Zustimmung muss bei alfima eingerichtet sein — sonst kann noch 14 Tage
// widerrufen werden, obwohl der Kurs längst gelesen wurde.
//
// LASS DAS VOM HÄNDLERBUND PRÜFEN, bevor das erste Produkt live geht.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Widerrufsbelehrung",
  alternates: { canonical: "/widerrufsbelehrung" },
  robots: { index: false, follow: true },
};

export default function Widerrufsbelehrung() {
  return (
    <RechtsSeite augenbraue="Rechtliches" titel="Widerrufsbelehrung">
      <h2>A. Widerrufsrecht</h2>
      <p>
        Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
        diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage
        ab dem Tag des Vertragsabschlusses.
      </p>
      <p>
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns
      </p>
      <p>
        Yasemin Halac
        <br />
        Steigeweg 7
        <br />
        74722 Buchen
        <br />
        Deutschland
        <br />
        E-Mail:{" "}
        <a href="mailto:info@pferdeliebehealthy.de">info@pferdeliebehealthy.de</a>
      </p>
      <p>
        mittels einer eindeutigen Erklärung, zum Beispiel per Post versandter
        Brief oder E-Mail, über Ihren Entschluss, diesen Vertrag zu widerrufen,
        informieren. Sie können dafür das unten stehende Muster-Widerrufsformular
        verwenden, das jedoch nicht vorgeschrieben ist.
      </p>
      <p>
        Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung
        über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist
        absenden.
      </p>

      <h3>Folgen des Widerrufs</h3>
      <p>
        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die
        wir von Ihnen erhalten haben, unverzüglich und spätestens binnen
        vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
        Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese
        Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der
        ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen
        wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen
        wegen dieser Rückzahlung Entgelte berechnet.
      </p>

      <h3>Vorzeitiges Erlöschen des Widerrufsrechts</h3>
      <p>
        Bei einem Vertrag über die Lieferung von nicht auf einem körperlichen
        Datenträger befindlichen digitalen Inhalten — also bei unseren
        Online-Kursen — <strong>erlischt Ihr Widerrufsrecht vorzeitig</strong>,
        wenn
      </p>
      <ul>
        <li>
          Sie ausdrücklich zugestimmt haben, dass wir mit der Ausführung des
          Vertrags vor Ablauf der Widerrufsfrist beginnen, und
        </li>
        <li>
          Sie Ihre Kenntnis davon bestätigt haben, dass Sie durch Ihre Zustimmung
          mit Beginn der Ausführung des Vertrags Ihr Widerrufsrecht verlieren.
        </li>
      </ul>
      <p>
        Beides wird Ihnen im Bestellvorgang zur Bestätigung vorgelegt. Erteilen
        Sie diese Zustimmung nicht, wird der Zugang erst nach Ablauf der
        Widerrufsfrist freigeschaltet.
      </p>

      <hr />

      <h2>B. Muster-Widerrufsformular</h2>
      <p>
        Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular
        aus und senden Sie es zurück.
      </p>
      <p>
        An Yasemin Halac, Steigeweg 7, 74722 Buchen, Deutschland, E-Mail:
        info@pferdeliebehealthy.de
      </p>
      <p>
        Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen
        Vertrag über den Kauf der folgenden Waren (*) / die Erbringung der
        folgenden Dienstleistung (*)
        <br />
        <br />
        Bestellt am (*) / erhalten am (*)
        <br />
        Name des/der Verbraucher(s)
        <br />
        Anschrift des/der Verbraucher(s)
        <br />
        Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)
        <br />
        Datum
      </p>
      <p>(*) Unzutreffendes streichen.</p>

      <hr />

      <h2>C. Hinweis zu den Kursinhalten</h2>
      <p>
        Die Inhalte unserer Kurse dienen der Information und Weiterbildung. Sie
        ersetzen keine tierärztliche Diagnose, Beratung oder Behandlung. Ein
        bestimmter Lernerfolg oder ein bestimmtes Ergebnis bei Ihrem Pferd wird
        nicht geschuldet und kann nicht zugesichert werden.
      </p>
    </RechtsSeite>
  );
}
