// ---------------------------------------------------------------------------
// Alle Texte und alle Links der Seite an einer einzigen Stelle.
//
// Wenn du etwas ändern willst — eine Überschrift, einen Preis, eine Adresse —
// dann hier und nirgendwo sonst. Die Bausteine in components/ holen sich alles
// aus dieser Datei.
// ---------------------------------------------------------------------------

export const marke = {
  name: "aromahorseoil",
  /** Der Markenname mit farbig abgesetztem zweiten Teil */
  wortmarke: { hell: "aroma", dunkel: "horseoil" },
  claim: "Ätherische Öle für dein Pferd",
  ort: "Buchen im Odenwald",
  mail: "info@pferdeliebehealthy.de",
};

export const links = {
  /** Der kostenlose Öl-Guide, seit dem 12.09.2026 nur noch gegen Mailadresse.

      /oel-guide ist die Anmeldeseite. Die PDF liegt nicht mehr in public/,
      sondern im privaten Speicher, und kommt nur über den persönlichen Link
      aus der Mail (app/oel-guide/laden). Dieselbe Adresse /oel-guide steht in
      deiner Instagram-Bio und musste dafür nicht geändert werden.

      Bis zum 10.09.2026 lag der Guide bei alfima, danach zwei Tage als
      offener Download hier. */
  oelGuide: "/oel-guide",

  /** Der Server, der Anmeldungen speichert und die Mail verschickt. Diese
      Seite hat selbst keine Datenbank und keinen Mailversand, deshalb reicht
      sie das Formular dorthin durch (lib/oel-guide-server.ts drüben). */
  anmeldeServer: "https://www.pferdeliebehealthy.de",

  /** Die eigene Verkaufsseite für den Kurs. */
  kursSeite: "/aroma-horse-kurs",

  /** ▲ HIER EINTRAGEN, sobald das Produkt „Aroma Horse Kurs“ bei alfima steht.
      Solange nichts eingetragen ist, führt der Kaufknopf zu einer Mail an dich —
      niemand landet auf einer Fehlerseite.

      WICHTIG: Der Produktname bei alfima muss das Wort „Horse“ enthalten.
      Daran erkennt die Akademie, welchen Kurs sie freischalten soll. Ein Name
      mit „Ausbildung“ statt „Horse“ würde die Fütterungs-Masterclass öffnen. */
  kaufen: "mailto:info@pferdeliebehealthy.de?subject=Aroma%20Horse%20Kurs",

  /** Die Kasse für die Testrunde, siehe app/testkunde/page.tsx.

      Sie liegt auf der Schwesterseite, weil dort die Bezahlung läuft
      (Stripe, Rechnung, Freischaltung in der Akademie). Verkäuferin ist in
      beiden Fällen dieselbe, nur die Kasse steht an einer Stelle.

      Der Slug muss zu `lib/digital.ts` drüben passen. Ändert er sich dort,
      führt dieser Knopf ins Leere. */
  kaufenTestkunde:
    "https://www.pferdeliebehealthy.de/kasse/aroma-horse-testkunde",

  /** Wo die Teilnehmerinnen ihre Lektionen finden */
  akademie: "https://akademie.pferdeliebehealthy.de",

  instagram: "https://www.instagram.com/aromahorseoil",
  schwesterseite: "https://pferdeliebehealthy-homepage.vercel.app",
};

// ---------------------------------------------------------------------------
// Der Kopf der Seite
// ---------------------------------------------------------------------------
export const hero = {
  augenbraue: "Aromapflege für Pferde",
  titel: "Dein Pferd sagt dir,\nwelchen Duft es mag.",
  text: "Pferde riechen um ein Vielfaches feiner als wir. Deshalb gehört zu jedem Öl die Frage, ob dein Pferd es überhaupt riechen möchte. Ich zeige dir, wie du Öle sorgfältig auswählst, richtig verdünnst und so anbietest, dass dein Pferd selbst entscheiden darf.",
  knopf: "Kostenlosen Öl-Guide holen",
  knopfZweit: "Den Kurs ansehen",
  bild: {
    quelle: "/images/yasi-portrait.jpg",
    text: "Yasemin Halac, Aromapflege für Pferde",
  },
  /** Die drei kleinen Angaben unter dem Bild */
  eckdaten: [
    { wert: "10", einheit: "Phasen", text: "im Kurs" },
    { wert: "54", einheit: "Lektionen", text: "zum Nachlesen" },
    { wert: "1", einheit: "Stute", text: "als Lehrmeisterin" },
  ],
};

// ---------------------------------------------------------------------------
// Der Riechtest — das, was meine Arbeit von "Öl draufgeben" unterscheidet
// ---------------------------------------------------------------------------
export const riechtest = {
  augenbraue: "Die Methode",
  titel: "Der Riechtest",
  einleitung:
    "In der Aromapflege beim Pferd bietest du einen Duft an, und dein Pferd zeigt dir, ob es ihn annimmt oder ablehnt. Das sagt etwas über seine Vorliebe, nicht über einen Bedarf. Der Riechtest ist die Art, diese Antwort ernst zu nehmen.",
  schritte: [
    {
      nummer: "Schritt 1",
      titel: "Anbieten",
      text: "Die geöffnete Flasche etwa eine Handbreit vor der Nüster halten, nicht näher. Dein Pferd muss jederzeit den Kopf wegdrehen können. Das ist keine Nebensache, das ist die halbe Methode.",
    },
    {
      nummer: "Schritt 2",
      titel: "Lesen",
      text: "Jetzt nur beobachten. Kommt es näher, atmet es tief ein, beginnt es zu kauen, zu blinzeln, den Kopf zu senken? Oder dreht es ab, hebt den Kopf, wird unruhig? Beides ist eine Antwort.",
    },
    {
      nummer: "Schritt 3",
      titel: "Annehmen oder lassen",
      text: "Nur ein Öl, das angenommen wird, kommt zur Anwendung. Ein abgelehntes Öl wird nicht überredet, sondern weggestellt. Nächste Woche kann die Antwort schon eine andere sein.",
    },
  ],
  fussnote:
    "Der Riechtest ersetzt keine Diagnose. Er sagt dir, womit du arbeiten darfst, nicht, was deinem Pferd fehlt. Bei Pferden mit Husten, Asthma oder anderen Atemwegsproblemen setze ich keine Düfte ein und vernebele nichts. Atemwege gehören zur Tierärztin.",
};

// ---------------------------------------------------------------------------
// Die Ölkarte — sechs Öle, wie sie auf einem Apothekerregal stehen würden
// ---------------------------------------------------------------------------
export const oele = {
  augenbraue: "Aus meinem Schrank",
  titel: "Sechs Öle, mit denen ich am meisten arbeite",
  einleitung:
    "Keine Sammlung von dreißig Fläschchen. Wenige Öle, die du wirklich kennst, bringen dich weiter als ein volles Regal, in dem du dich nicht auskennst.",
  liste: [
    {
      name: "Lavendel fein",
      botanisch: "Lavandula angustifolia",
      stoffklasse: "Ester · Monoterpenole",
      text: "Mild, blumig, vertraut. Wird von fast jedem Pferd angenommen und ist deshalb das erste, mit dem ich einer Einsteigerin den Riechtest zeige.",
    },
    {
      name: "Römische Kamille",
      botanisch: "Chamaemelum nobile",
      stoffklasse: "Ester",
      text: "Fein, apfelartig, sehr mild im Duft. Und sehr teuer, weil die Ausbeute winzig ist.",
    },
    {
      name: "Weihrauch",
      botanisch: "Boswellia carterii",
      stoffklasse: "Monoterpene",
      text: "Warm, harzig, würzig. Wird von vielen Pferden gern angenommen.",
    },
    {
      name: "Pfefferminze",
      botanisch: "Mentha × piperita",
      stoffklasse: "Monoterpenole · Ketone",
      text: "Frisch und kühl im Duft. Wegen des Ketonanteils eines der Öle, bei denen Dosierung und Abstand wirklich zählen. Nichts für nebenbei.",
    },
    {
      name: "Atlaszeder",
      botanisch: "Cedrus atlantica",
      stoffklasse: "Sesquiterpene",
      text: "Schwer, holzig, bodennah. Ein tiefer, warmer Duft, den viele Pferde gern annehmen.",
    },
    {
      name: "Rosengeranie",
      botanisch: "Pelargonium graveolens",
      stoffklasse: "Monoterpenole",
      text: "Rosig und frisch. Riecht für viele Menschen zu blumig und wird von Pferden trotzdem oft deutlich angenommen.",
    },
  ],
  fussnote:
    "Angaben zur Stoffklasse sind fachliche Einordnung, keine Heilaussage. Wie diese Öle beim Pferd wirken, ist wissenschaftlich kaum untersucht. Welches Öl für dein Pferd passt, entscheidet der Riechtest, nicht diese Liste.",
};

// ---------------------------------------------------------------------------
// Der Öl-Guide
// ---------------------------------------------------------------------------
// Die Punkte beschreiben, was WIRKLICH in der PDF steht (sieben Seiten, Stand
// 10.09.2026). Bis zum 12.09.2026 versprach die Seite hier eine
// Verdünnungstabelle und „die fünf Fehler, die ich am häufigsten sehe“, die im
// Guide gar nicht vorkommen. Wird der Guide erweitert, dürfen die Punkte mit.
export const guide = {
  augenbraue: "Kostenlos per Mail",
  titel: "Der Öl-Guide",
  text: "Was ätherische Öle sind, warum Pferde so fein auf Düfte reagieren und die wichtigste Regel dabei. Sieben Seiten von mir, kostenlos in dein Postfach.",
  punkte: [
    "Was ätherische Öle sind und warum nur naturreine infrage kommen",
    "Die wichtigste Regel: Dein Pferd entscheidet mit",
    "Neun Öle im kurzen Porträt",
    "Sicherheit zuerst, und deine erste kleine Übung zum Ausprobieren",
  ],
  knopf: "Öl-Guide holen",
};

// ---------------------------------------------------------------------------
// Die Anmeldeseite /oel-guide
// ---------------------------------------------------------------------------
export const guideSeite = {
  augenbraue: "Kostenlos per Mail",
  titel: "Dein sanfter Einstieg in die Welt der ätherischen Öle.",
  text: "Sieben Seiten von mir für den Anfang mit deinem Pferd. Trag dich ein, dann kommt der Guide sofort in dein Postfach.",
  vorname: "Vorname",
  vornameHinweis: "freiwillig",
  email: "E-Mail-Adresse",
  /** MUSS WÖRTLICH GLEICH SEIN mit EINWILLIGUNG_OEL_GUIDE in
      pferdeliebehealthy-homepage/lib/oel-guide-server.ts. Dort wird der
      Wortlaut gespeichert, hier sieht ihn die Besucherin. */
  einwilligung:
    "Ja, schick mir den Öl-Guide und danach ab und zu Tipps zu ätherischen Ölen und Hydrolaten fürs Pferd per E-Mail. Abmelden kann ich mich jederzeit.",
  datenschutz: "Was mit deiner Adresse passiert, steht in der",
  knopf: "Schick mir den Guide",
  sendet: "Einen Moment …",
  erfolgTitel: "Schau in dein Postfach.",
  erfolgText:
    "Der Guide ist unterwegs. Mit dem Knopf in der Mail öffnest du ihn und kannst ihn speichern. Nichts angekommen? Dann schau kurz im Spam-Ordner nach.",
  fehlerLink:
    "Der Link aus deiner Mail hat nicht funktioniert. Trag dich einfach noch einmal ein, dann bekommst du einen neuen.",
  fehlerAllgemein: "Das hat gerade nicht geklappt. Versuch es bitte gleich noch einmal.",
};

// ---------------------------------------------------------------------------
// Die Ausbildung
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Der Kurs
//
// ACHTUNG, das ist keine Wortklauberei: Der Kurs heißt „Kurs“ und nicht
// „Ausbildung“, und nirgends auf dieser Seite steht etwas von Prüfung,
// Korrektur oder Betreuung. Genau daran hängt, dass er ohne ZFU-Zulassung
// verkauft werden darf. Sobald hier ein Abschluss versprochen wird, ist es
// Fernunterricht, und ohne Zulassung wäre der Kaufvertrag unwirksam.
//
// Seit dem 04.09.2026 gibt es am Ende eine TEILNAHMEBESCHEINIGUNG, und die
// ist erlaubt: Sie bestätigt nur, dass jemand die Lektionen durchgearbeitet
// hat. Was sie nicht darf, ist bewerten, benoten oder einen Lernerfolg
// bescheinigen. Genau das wäre die Überwachung des Lernerfolgs, an der die
// Zulassungspflicht hängt.
//
// Wenn die Zulassung eines Tages da ist, kommt die geprüfte Fassung als
// eigenes Produkt dazu; diese hier bleibt, wie sie ist.
// ---------------------------------------------------------------------------
export const kurs = {
  augenbraue: "Für alle, die tiefer wollen",
  titel: "Aroma Horse, der Kurs",
  preis: "899 €",
  preisZusatz: "einmalig, dauerhafter Zugang",
  text: "Zehn Phasen von den Grundlagen der Destillation bis zur eigenen Anwendung am Pferd. Kein Öllexikon zum Auswendiglernen, sondern der Weg dahin, dass du eigene Entscheidungen fachlich begründen kannst. Online, in deinem Tempo, an jeder Lektion Platz für deine Notizen.",
  phasen: [
    "Hydrolate für Pferde",
    "Grundlagen der Aromapflege",
    "Biochemie der ätherischen Öle",
    "Die Stoffklassen",
    "Anatomie und Physiologie des Pferdes",
    "Aufnahmewege und Verstoffwechslung",
    "Sichere Anwendung und Riechtest",
    "Kontraindikationen und Grenzen",
    "Die wichtigsten Öle im Portrait",
    "Praxis und Abschluss",
  ],
  eckdaten: [
    "10 Phasen, 54 Lektionen",
    "Zeitlich unbegrenzter Zugang",
    "Läuft im Browser, auch am Handy im Stall",
  ],
  knopf: "Kurs ansehen",
  knopfKaufen: "Kurs kaufen",
  hinweisTeilnehmerin: "Du bist schon dabei?",
  knopfTeilnehmerin: "Zu deinen Lektionen",
};

// ---------------------------------------------------------------------------
// Die Verkaufsseite unter /aroma-horse-kurs
// ---------------------------------------------------------------------------
export const kursSeite = {
  augenbraue: "Der Kurs",
  titel: "Alles, was ich über Öle beim Pferd weiß.",
  vorspann:
    "Zehn Phasen, 54 Lektionen. Von der Frage, was bei einer Destillation eigentlich passiert, bis zu dem Tag, an dem du vor deinem Pferd stehst und weißt, warum du gerade dieses Fläschchen in der Hand hältst.",

  /** Für wen der Kurs gedacht ist — und für wen nicht. Beides ehrlich. */
  fuerWen: {
    titel: "Für wen das ist",
    passt: [
      "Du hast ein eigenes Pferd und willst mehr können, als einer Empfehlung aus dem Internet zu folgen.",
      "Du willst verstehen, was in einem Öl steckt und wo seine Grenzen liegen.",
      "Du hast schon ein paar Fläschchen zu Hause und traust dich nicht richtig daran.",
      "Du arbeitest bereits mit Pferden und willst Aromapflege dazunehmen.",
    ],
    passtNicht: [
      "Du suchst eine Liste „Öl X gegen Problem Y“. Die gibt es hier nicht, und ich halte sie für gefährlich.",
      "Du willst einen anerkannten Abschluss. Dieser Kurs ist Lernmaterial, keine geprüfte Ausbildung.",
      "Du erwartest, dass ich dein Pferd aus der Ferne einschätze. Das mache ich nicht.",
    ],
  },

  /** Was die Käuferin bekommt — und was ausdrücklich nicht dabei ist. */
  umfang: {
    titel: "Was du bekommst",
    drin: [
      "Zugang zu allen 54 Lektionen in der Akademie, sofort nach dem Kauf",
      "Lesen im Browser, am Rechner wie am Handy im Stall",
      "Notizen, Lesezeichen und Textmarker zu jeder Lektion, die dir bleiben",
      "Reflexionsfragen zum Selbstnachdenken",
      "Zeitlich unbegrenzter Zugang, auch zu späteren Ergänzungen",
      "Eine Teilnahmebescheinigung, wenn du alle 54 Lektionen durchgearbeitet hast",
    ],
    nichtDrin: [
      "Keine Prüfung, keine Abschlussarbeit, keine Korrektur",
      "Keine Benotung und kein geprüfter Abschluss",
      "Keine persönliche Begleitung und keine Beratung zu deinem Pferd",
    ],
    nichtDrinErklaerung:
      "Das steht hier so deutlich, weil es ehrlicher ist als ein Sternchen im Kleingedruckten: Du kaufst Wissen, keine Betreuung. Wenn du eine geprüfte Ausbildung mit Abschluss suchst, ist das hier nicht das Richtige. Melde dich, dann sage ich dir Bescheid, sobald es eine gibt.",
  },

  ehrlich: {
    titel: "Zwei Dinge vorweg",
    absaetze: [
      "Ich verdiene an keinem einzigen Fläschchen. Ich empfehle keine Marke und bekomme von niemandem Provision. Deshalb steht in diesem Kurs, woran du gute Qualität selbst erkennst, statt einer Einkaufsliste, die mir nützt.",
      "Und: Ätherische Öle sind Begleitung, keine Behandlung. Ein großer Teil dieses Kurses handelt davon, wann du die Finger davon lässt und stattdessen den Tierarzt rufst. Wer etwas anderes verspricht, verkauft dir etwas.",
    ],
  },

  kauf: {
    titel: "Aroma Horse Kurs",
    preis: "899 €",
    zusatz: "einmalig · dauerhafter Zugang · sofort freigeschaltet",
    knopf: "Kurs kaufen",
    hinweis:
      "Nach dem Kauf bekommst du eine Mail mit deinem persönlichen Zugangslink zur Akademie. Klick drauf, und du bist drin, kein Passwort nötig.",
  },
};

// ---------------------------------------------------------------------------
// Über mich
// ---------------------------------------------------------------------------
export const ueberMich = {
  augenbraue: "Wer hier schreibt",
  titel: "Yasi",
  absaetze: [
    "Ich bin Yasemin, Ernährungsberaterin für Pferde aus Buchen im Odenwald, und zur Aromapflege bin ich über meine eigene Stute gekommen: Helena, mit der Diagnose PPID.",
    "Über die Fütterung hatte ich viel in der Hand. Über alles andere lange nicht: Anspannung, Umstellungen, die Tage, an denen sie einfach nicht bei sich war. Ätherische Öle waren der erste Bereich, in dem ich gemerkt habe, dass Helena mir sehr genau sagen kann, was sie gerade möchte. Ich musste nur lernen, hinzusehen.",
    "Heute arbeite ich mit Ölen und Hydrolaten als Begleitung. Neben dem Tierarzt, neben der Fütterung, nie an ihrer Stelle. Und ich gebe weiter, was ich dabei gelernt habe: sauber, fachlich, ohne Versprechen, die kein Öl halten kann.",
  ],
  bild: {
    quelle: "/images/yasi-helena.jpg",
    text: "Yasemin Halac mit ihrer Stute Helena",
  },
  hinweis: {
    text: "Zur Fütterung berate ich unter meiner zweiten Marke Pferdeliebehealthy.",
    knopf: "Pferdeliebehealthy ansehen",
  },
};

// ---------------------------------------------------------------------------
// Häufige Fragen
// ---------------------------------------------------------------------------
export const fragen = {
  augenbraue: "Bevor du anfängst",
  titel: "Häufige Fragen",
  liste: [
    {
      frage: "Sind ätherische Öle für Pferde überhaupt sicher?",
      antwort:
        "Richtig eingesetzt ja, falsch eingesetzt nein. Ätherische Öle sind hochkonzentrierte Pflanzenauszüge. Für einen Tropfen Rosenöl brauchst du Blüten aus einem ganzen Beet. Unverdünnt aufs Fell, in die Nähe der Augen, ins Futter oder über die Tränke haben sie nichts zu suchen. Entscheidend sind drei Dinge: Verdünnung, Aufnahmeweg und die Zustimmung des Pferdes.",
    },
    {
      frage: "Woran erkenne ich gute Qualität?",
      antwort:
        "Auf dem Etikett muss der botanische Name stehen, das Herkunftsland, die Gewinnungsart und im besten Fall das Chargen-Analysenzertifikat. „Naturidentisch“, „Duftöl“ oder „Aromaöl“ sind keine ätherischen Öle. Ein dunkles Glasfläschchen ist Pflicht, kein Verkaufsargument.",
    },
    {
      frage: "Was ist der Unterschied zwischen Öl und Hydrolat?",
      antwort:
        "Beide entstehen bei derselben Wasserdampfdestillation. Das ätherische Öl ist der fettlösliche Teil, der oben aufschwimmt; das Hydrolat ist das Destillationswasser darunter, angereichert mit den wasserlöslichen Pflanzenstoffen. Hydrolate sind um ein Vielfaches milder und für den Stallalltag oft der bessere Einstieg, besonders bei jungen, alten oder sehr empfindlichen Pferden.",
    },
    {
      frage: "Und bei trächtigen Stuten, Fohlen oder alten Pferden?",
      antwort:
        "Da wird die Liste der Öle kurz und die Verdünnung niedrig. Ketonhaltige Öle wie Pfefferminze, Salbei oder Rosmarin gehören dort nicht hin. Wenn du unsicher bist, arbeite mit Hydrolaten oder gar nicht. Und sprich vorher mit deinem Tierarzt.",
    },
    {
      frage: "Und bei Pferden mit Husten oder Asthma?",
      antwort:
        "Bei Pferden mit Husten, Asthma oder anderen Atemwegsproblemen setze ich keine Düfte ein und vernebele nichts. Atemwege gehören zur Tierärztin. Ätherische Öle können gereizte Atemwege zusätzlich reizen, auch beim Riechtest.",
    },
    {
      frage: "Kann ich Öle einfach ins Futter geben?",
      antwort:
        "Nein. Die innerliche Anwendung ist der heikelste Weg überhaupt und gehört in fachkundige Hände, nicht in den Futtereimer. Für zu Hause bleibt es beim Riechen und, gut verdünnt, beim Auftragen auf die Haut.",
    },
    {
      frage: "Was ist mit dem Equidenpass?",
      antwort:
        "Schau vorher in den Pass. Ist dein Pferd nicht als „nicht zur Schlachtung bestimmt“ eingetragen, sprich vor jeder Anwendung auf der Haut mit deiner Tierärztin.",
    },
    {
      frage: "Und bei Turnierpferden?",
      antwort:
        "Sei hier sehr vorsichtig. Einzelne Inhaltsstoffe ätherischer Öle, zum Beispiel Campher oder Menthol, können bei Dopingkontrollen auffallen. Prüf vor jedem Turnier die aktuellen Regeln deines Verbands und sprich mit deiner Tierärztin.",
    },
    {
      frage: "Ersetzt Aromapflege den Tierarzt?",
      antwort:
        "Nein, und das ist keine Höflichkeitsfloskel. Ätherische Öle sind Begleitung, keine Behandlung. Bei Lahmheit, Fieber, Koliksymptomen, Wunden oder allem, was plötzlich kommt: erst der Tierarzt. Das Fläschchen kann warten.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Die Testrunde unter /testkunde
//
// Eine eingeladene Seite, kein öffentliches Angebot: Sie steht nicht in der
// Sitemap, nicht im Menü und ist für Suchmaschinen gesperrt. Wer den Link
// nicht von Yasemin bekommen hat, findet sie nicht. Das ist Absicht: Neben
// der öffentlichen Seite mit 899 € darf keine viel günstigere Seite im Index
// stehen, sonst kauft niemand mehr zum vollen Preis.
//
// ▸ DIE FRIST STEHT AN ZWEI STELLEN. Hier im Text und als `verkaufBis` in
//   pferdeliebehealthy-homepage/lib/digital.ts. Die Kasse weist einen Kauf
//   nach diesem Tag wirklich ab. Wenn du die Einladung später verschickst,
//   müssen beide Stellen mitwandern, sonst steht hier ein Datum, das die
//   Kasse anders sieht.
//
// ▸ WAS HIER NICHT STEHEN DARF: Prüfung, Korrektur, Betreuung und das Wort
//   „Ausbildung". Die Teilnahmebescheinigung darf stehen, sie bestätigt nur die
//   Teilnahme und bewertet nichts. Der Grund steht oben bei `kurs`.
// ---------------------------------------------------------------------------
export const testkunde = {
  augenbraue: "Persönliche Einladung",
  titel: "Sei eine der Ersten,\ndie diesen Kurs durchgeht.",
  vorspann:
    "Der Aroma Horse Kurs ist fertig. Zehn Phasen, 54 Lektionen, jedes Wort davon von mir geschrieben. Was ihm fehlt, sind Menschen, die ihn einmal von vorne bis hinten durchgearbeitet haben und mir sagen, wo er hakt. Genau dafür ist diese Runde da.",
  preis: "199 €",
  preisStatt: "899 €",
  preisZusatz: "einmalig · dauerhafter Zugang · sofort freigeschaltet",
  frist: "Dieses Angebot gilt bis zum 30. September 2026. Danach nimmt die Kasse es nicht mehr an, der Kurs kostet dann regulär 899 €.",
  knopf: "Als Testkundin kaufen",

  /** Was die Testkundin bekommt und was sie dafür gibt. Beides ehrlich. */
  handel: {
    titel: "Der Handel",
    einleitung:
      "Du zahlst 199 statt 899 €. Nicht, weil du weniger bekommst, sondern weil du mir etwas gibst, das ich mir nicht kaufen kann: den Blick von außen auf einen Kurs, den ich selbst viel zu gut kenne.",
    duBekommst: {
      titel: "Du bekommst",
      punkte: [
        "Den vollständigen Kurs. Alle zehn Phasen, alle 54 Lektionen, nichts ist gesperrt und nichts kommt später nach.",
        "199 € statt 899 €, einmalig gezahlt.",
        "Dauerhaften Zugang, auch zu allem, was ich später ergänze. Und ergänzen werde ich, gerade weil du mir schreibst.",
        "Eine Teilnahmebescheinigung, wenn du alle 54 Lektionen durchgearbeitet hast.",
        "Einen direkten Draht zu mir. Wenn dir etwas unklar ist, schreib es mir, ich antworte.",
      ],
    },
    duGibst: {
      titel: "Du gibst",
      punkte: [
        "Nach jeder Phase eine kurze Rückmeldung per Mail. Zwei, drei Sätze reichen: Was hat gesessen, wo bist du hängengeblieben, was hat gefehlt.",
        "Ehrlichkeit. Ein „war alles super\u201c hilft mir nicht. Die Stelle, an der du dreimal lesen musstest, hilft mir.",
        "Die Erlaubnis, deine Erfahrung später auf der Kursseite zu zitieren, mit deinem Vornamen oder anonym, ganz wie du willst.",
      ],
    },
    fussnote:
      "Die Rückmeldung ist eine Bitte, keine Bedingung. Der Zugang bleibt dir, auch wenn das Leben dazwischenkommt und du dich nie meldest. Ich baue kein Angebot, bei dem jemand um seinen Kurs bangen muss.",
  },

  /** Warum es diese Runde überhaupt gibt. Der ehrliche Teil. */
  warum: {
    titel: "Warum ich das mache",
    absaetze: [
      "Es gibt bisher keine einzige Stimme zu diesem Kurs. Keine Teilnehmerin, die sagen kann, wie es war, ihn durchzuarbeiten. Ich könnte mir welche ausdenken, das machen genug Leute. Ich hätte lieber echte.",
      "Und ich weiß, dass ein Kurs beim Schreiben anders aussieht als beim Lesen. Ich kenne jede Lektion auswendig und merke deshalb nicht mehr, an welcher Stelle jemand aussteigt, der das Thema zum ersten Mal sieht. Du merkst es sofort.",
      "Dafür ist mir dieser Preis das wert. Er ist keine Rabattaktion und kommt so nicht wieder: Wenn die Runde durch ist und der Kurs überarbeitet, kostet er wieder 899 €.",
    ],
  },

  /** Für wen die Testrunde nicht das Richtige ist. */
  nichtFuerDich: {
    titel: "Sag lieber ab, wenn",
    punkte: [
      "du gerade keine Zeit hast, wirklich hineinzugehen. Ein liegengebliebener Zugang hilft uns beiden nicht.",
      "du einen anerkannten Abschluss suchst. Dieser Kurs ist Lernmaterial, keine geprüfte Ausbildung, und daran ändert die Testrunde nichts.",
      "du eine Liste „Öl X gegen Problem Y\u201c erwartest. Die gibt es hier nicht, und ich halte sie für gefährlich.",
      "du möchtest, dass ich dein Pferd aus der Ferne einschätze. Das mache ich nicht, auch nicht im kurzen Draht.",
    ],
  },

  /** Wie es nach dem Kauf weitergeht, in vier Schritten. */
  ablauf: {
    titel: "Wie es abläuft",
    schritte: [
      {
        titel: "Du kaufst",
        text: "Über die Kasse auf pferdeliebehealthy.de, dort läuft meine Abrechnung, es ist dieselbe Yasi. Rechnung kommt automatisch.",
      },
      {
        titel: "Du bist drin",
        text: "Direkt danach bekommst du eine Mail mit deinem persönlichen Zugangslink zur Akademie. Klick drauf, und du bist angemeldet, ein Passwort brauchst du nicht.",
      },
      {
        titel: "Du arbeitest in deinem Tempo",
        text: "Es gibt keinen Zeitplan und keine Abgabefrist. Zehn Phasen, so schnell oder langsam du willst, am Rechner wie am Handy im Stall.",
      },
      {
        titel: "Du schreibst mir",
        text: "Nach jeder Phase kurz, was dir aufgefallen ist. Einfach als Antwort auf meine Mail, ich brauche kein Formular.",
      },
    ],
  },

  /** Was ausdrücklich nicht dabei ist. Steht bewusst mitten auf der Seite. */
  nichtDrin: {
    titel: "Was nicht dabei ist",
    punkte: [
      "Keine Prüfung, keine Abschlussarbeit, keine Korrektur",
      "Keine Benotung und kein geprüfter Abschluss",
      "Keine persönliche Beratung zu deinem Pferd",
    ],
    erklaerung:
      "Auch als Testkundin bekommst du Lernmaterial, keine Betreuung. Der kurze Draht zu mir gilt dem Kurs, nicht deinem Pferd: Wenn du wissen willst, ob eine Lektion verständlich ist, schreib mir. Wenn du wissen willst, was dein Pferd braucht, ist das eine Beratung und die gehört nicht hier hinein.",
  },

  /** Stimmen von Kundinnen.
   *
   *  ▸ WARUM HIER KEINE STIMME ZUM AROMA-KURS STEHT: Es gibt keine. Genau
   *    deshalb gibt es diese Runde. Etwas anderes zu behaupten wäre der
   *    schnellste Weg, das Vertrauen zu verlieren, um das es auf dieser
   *    Seite geht. Die Überschrift sagt das offen, und der Text davor sagt
   *    es auch schon.
   *
   *  ▸ WOHER SIE KOMMEN: aus Yasemins öffentlichem Google-Unternehmensprofil,
   *    wörtlich übernommen aus `lib/stimmen.ts` der Schwesterseite. Sie sind
   *    dort öffentlich, dürfen also zitiert werden, solange sie WÖRTLICH und
   *    UNVERÄNDERT bleiben. Nur Vornamen, so wie drüben.
   *
   *  ▸ WAS HIER NICHT HIN DARF: Stimmen, die Betreuung loben („fühle mich
   *    bestens betreut"). Auf einer Seite, die ausdrücklich keine Betreuung
   *    verspricht, wäre das ein Versprechen durch die Hintertür, und genau
   *    daran hängt die ZFU-Frage. Aus demselben Grund fehlt Marions Stimme,
   *    die vom Ausbilden zur Aromatherapeutin spricht.
   *
   *  ▸ ES IST EINE AUSWAHL, und der Text sagt das. Wer eine Auswahl zeigt
   *    und den Eindruck erweckt, das seien alle, wirbt irreführend. */
  stimmen: {
    titel: "Was andere über meine Kurse sagen",
    einleitung:
      "Zum Aroma Horse Kurs gibt es noch keine einzige Stimme, das ist ja der Grund für diese Runde. Was es gibt, sind Stimmen zu meinen anderen Kursen und zur Akademie, in der auch dieser Kurs liegt. Eine Auswahl aus meinem Google-Profil, wörtlich übernommen.",
    liste: [
      {
        zitat:
          "Auf Instagram bin ich auf die Produkte gestoßen und habe mir ein paar Online Kurse und auch Futtermittel bestellt. Die Onlinekurse sind sehr übersichtlich aufgebaut und gut zu verstehen.",
        name: "Alina",
        rolle: "über die Onlinekurse",
      },
      {
        zitat:
          "Ich bin super begeistert von dem ganzen Layout. Der Inhalt war davor ja schon mega, aber so sieht alles super hochwertig und toll aus. Auch die ganzen Reflexionsfragen sind richtig gut.",
        name: "Hanna",
        rolle: "über die Akademie",
      },
      {
        zitat:
          "Ich freue mich richtig, wenn ich an dem Kurs arbeiten kann. Das ist so viel Wissen, verständlich zusammengefasst. Ich bin total begeistert und würde den Kurs uneingeschränkt weiterempfehlen. Richtig top!",
        name: "Juliane",
        rolle: "Teilnehmerin der Fütterungs-Ausbildung",
      },
    ],
  },

  /** Der Kaufblock am Seitenende. */
  kauf: {
    titel: "Die Testrunde",
    hinweis:
      "Nach dem Kauf bekommst du eine Mail mit deinem persönlichen Zugangslink zur Akademie. Der Zugang bleibt dir dauerhaft, unabhängig davon, ob du mir schreibst.",
  },
};

// ---------------------------------------------------------------------------
// Der Abschluss
// ---------------------------------------------------------------------------
export const abschluss = {
  titel: "Fang mit einem Tropfen an.",
  text: "Der Öl-Guide ist kostenlos und in zehn Minuten gelesen. Danach weißt du, was du kaufen musst und was nicht.",
  knopf: "Öl-Guide holen",
};
