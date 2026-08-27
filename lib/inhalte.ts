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
  /** Der kostenlose Öl-Guide. Liegt bei alfima, genau wie in deiner Instagram-Bio. */
  oelGuide: "https://alfima.com/pferdeliebehealthy/p/ai-page-3",

  /** Die eigene Verkaufsseite für den Kurs. */
  kursSeite: "/aroma-horse-kurs",

  /** ▲ HIER EINTRAGEN, sobald das Produkt „Aroma Horse Kurs“ bei alfima steht.
      Solange nichts eingetragen ist, führt der Kaufknopf zu einer Mail an dich —
      niemand landet auf einer Fehlerseite.

      WICHTIG: Der Produktname bei alfima muss das Wort „Horse“ enthalten.
      Daran erkennt die Akademie, welchen Kurs sie freischalten soll. Ein Name
      mit „Ausbildung“ statt „Horse“ würde die Fütterungs-Masterclass öffnen. */
  kaufen: "mailto:info@pferdeliebehealthy.de?subject=Aroma%20Horse%20Kurs",

  /** Wo die Teilnehmerinnen ihre Lektionen finden */
  akademie: "https://akademieapp.vercel.app",

  instagram: "https://www.instagram.com/aromahorseoil",
  schwesterseite: "https://pferdeliebehealthy-homepage.vercel.app",
};

// ---------------------------------------------------------------------------
// Der Kopf der Seite
// ---------------------------------------------------------------------------
export const hero = {
  augenbraue: "Aromatherapie für Pferde",
  titel: "Dein Pferd sagt dir,\nwas es braucht.",
  text: "Ätherische Öle wirken beim Pferd anders als beim Menschen — feiner, schneller, direkter. Ich zeige dir, wie du sie sicher auswählst, richtig verdünnst und so anbietest, dass dein Pferd selbst entscheiden darf.",
  knopf: "Kostenlosen Öl-Guide holen",
  knopfZweit: "Die Ausbildung ansehen",
  bild: {
    quelle: "/images/yasi-portrait.jpg",
    text: "Yasemin Halac, Aromatherapeutin für Pferde",
  },
  /** Die drei kleinen Angaben unter dem Bild */
  eckdaten: [
    { wert: "10", einheit: "Phasen", text: "in der Ausbildung" },
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
    "In der Aromapflege beim Pferd wählt nicht der Mensch das Öl aus, sondern das Pferd. Es hat rund 300 Millionen Riechzellen — etwa das Sechzigfache von uns — und eine sehr klare Meinung dazu, was ihm gerade guttut. Der Riechtest ist die Art, diese Meinung zu hören.",
  schritte: [
    {
      nummer: "Schritt 1",
      titel: "Anbieten",
      text: "Die geöffnete Flasche etwa eine Handbreit vor der Nüster halten, nicht näher. Dein Pferd muss jederzeit den Kopf wegdrehen können — das ist keine Nebensache, das ist die halbe Methode.",
    },
    {
      nummer: "Schritt 2",
      titel: "Lesen",
      text: "Jetzt nur beobachten. Kommt es näher, atmet es tief ein, beginnt es zu kauen, zu blinzeln, den Kopf zu senken? Oder dreht es ab, hebt den Kopf, wird unruhig? Beides ist eine Antwort.",
    },
    {
      nummer: "Schritt 3",
      titel: "Annehmen — oder lassen",
      text: "Nur ein Öl, das angenommen wird, kommt zur Anwendung. Ein abgelehntes Öl wird nicht überredet, sondern weggestellt. Nächste Woche kann die Antwort schon eine andere sein.",
    },
  ],
  fussnote:
    "Der Riechtest ersetzt keine Diagnose. Er sagt dir, womit du arbeiten darfst — nicht, was deinem Pferd fehlt.",
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
      text: "Das Öl zum Ankommen. Wird von fast jedem Pferd angenommen und ist deshalb das erste, mit dem ich einer Einsteigerin den Riechtest zeige.",
    },
    {
      name: "Römische Kamille",
      botanisch: "Chamaemelum nobile",
      stoffklasse: "Ester",
      text: "Für die feinen, dünnhäutigen Pferde, die auf alles zu viel reagieren. Sehr mild — und sehr teuer, weil die Ausbeute winzig ist.",
    },
    {
      name: "Weihrauch",
      botanisch: "Boswellia carterii",
      stoffklasse: "Monoterpene",
      text: "Wird oft angenommen, wenn der Atem flach geht und das Pferd nicht richtig durchschnaufen mag. Ein Öl, bei dem viele Menschen mitatmen.",
    },
    {
      name: "Pfefferminze",
      botanisch: "Mentha × piperita",
      stoffklasse: "Monoterpenole · Ketone",
      text: "Wach, klar, kühl — und wegen des Ketonanteils eines der Öle, bei denen Dosierung und Abstand wirklich zählen. Nichts für nebenbei.",
    },
    {
      name: "Atlaszeder",
      botanisch: "Cedrus atlantica",
      stoffklasse: "Sesquiterpene",
      text: "Schwer, holzig, bodennah. Wird häufig von Pferden gewählt, die viel Wechsel hinter sich haben — neuer Stall, neue Herde, neuer Mensch.",
    },
    {
      name: "Rosengeranie",
      botanisch: "Pelargonium graveolens",
      stoffklasse: "Monoterpenole",
      text: "Das Ausgleichsöl. Riecht für viele Menschen zu blumig und wird von Pferden trotzdem oft und deutlich angenommen.",
    },
  ],
  fussnote:
    "Angaben zur Stoffklasse sind fachliche Einordnung, keine Heilaussage. Welches Öl für dein Pferd passt, entscheidet der Riechtest — nicht diese Liste.",
};

// ---------------------------------------------------------------------------
// Der Öl-Guide
// ---------------------------------------------------------------------------
export const guide = {
  augenbraue: "Kostenlos",
  titel: "Der Öl-Guide",
  text: "Womit du anfängst, was du im ersten Jahr wirklich brauchst und welche fünf Fehler ich am häufigsten sehe. Zum Herunterladen, ohne Gegenleistung außer deiner Mailadresse.",
  punkte: [
    "Die Grundausstattung: welche Öle, welches Trägeröl, welche Mengen",
    "Verdünnung in Prozent — mit Tabelle zum Ausdrucken für den Stall",
    "Der Riechtest Schritt für Schritt, zum Mitnehmen an die Box",
    "Wann du die Finger davon lässt und stattdessen den Tierarzt rufst",
  ],
  knopf: "Öl-Guide herunterladen",
};

// ---------------------------------------------------------------------------
// Die Ausbildung
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Der Kurs
//
// ACHTUNG, das ist keine Wortklauberei: Der Kurs heißt „Kurs“ und nicht
// „Ausbildung“, und nirgends auf dieser Seite steht etwas von Zertifikat,
// Prüfung, Korrektur oder Betreuung. Genau daran hängt, dass er ohne
// ZFU-Zulassung verkauft werden darf. Sobald hier ein Abschluss versprochen
// wird, ist es Fernunterricht — und ohne Zulassung wäre der Kaufvertrag
// unwirksam.
//
// Wenn die Zulassung eines Tages da ist, kommt die geprüfte Fassung als
// eigenes Produkt dazu; diese hier bleibt, wie sie ist.
// ---------------------------------------------------------------------------
export const kurs = {
  augenbraue: "Für alle, die tiefer wollen",
  titel: "Aroma Horse — der Kurs",
  preis: "397 €",
  preisZusatz: "einmalig, dauerhafter Zugang",
  text: "Zehn Phasen von den Grundlagen der Destillation bis zur eigenen Anwendung am Pferd. Kein Öllexikon zum Auswendiglernen, sondern der Weg dahin, dass du eigene Entscheidungen fachlich begründen kannst. Online, in deinem Tempo, an jeder Lektion Platz für deine Notizen.",
  phasen: [
    "Hydrolate für Pferde",
    "Grundlagen der Aromatherapie",
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
      "Du willst verstehen, warum ein Öl wirkt, nicht nur, dass es wirkt.",
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
    ],
    nichtDrin: [
      "Keine Abschlussarbeit und keine Korrektur",
      "Kein Zertifikat und kein Nachweis",
      "Keine persönliche Begleitung und keine Beratung zu deinem Pferd",
    ],
    nichtDrinErklaerung:
      "Das steht hier so deutlich, weil es ehrlicher ist als ein Sternchen im Kleingedruckten: Du kaufst Wissen, keine Betreuung. Wenn du eine geprüfte Ausbildung mit Abschluss suchst, ist das hier nicht das Richtige — melde dich, dann sage ich dir Bescheid, sobald es eine gibt.",
  },

  ehrlich: {
    titel: "Zwei Dinge vorweg",
    absaetze: [
      "Ich verdiene an keinem einzigen Fläschchen. Ich empfehle keine Marke und bekomme von niemandem Provision. Deshalb steht in diesem Kurs, woran du gute Qualität selbst erkennst — statt einer Einkaufsliste, die mir nützt.",
      "Und: Ätherische Öle sind Begleitung, keine Behandlung. Ein großer Teil dieses Kurses handelt davon, wann du die Finger davon lässt und stattdessen den Tierarzt rufst. Wer etwas anderes verspricht, verkauft dir etwas.",
    ],
  },

  kauf: {
    titel: "Aroma Horse Kurs",
    preis: "397 €",
    zusatz: "einmalig · dauerhafter Zugang · sofort freigeschaltet",
    knopf: "Kurs kaufen",
    hinweis:
      "Nach dem Kauf bekommst du eine Mail mit deinem persönlichen Zugangslink zur Akademie. Klick drauf, und du bist drin — kein Passwort nötig.",
  },
};

// ---------------------------------------------------------------------------
// Über mich
// ---------------------------------------------------------------------------
export const ueberMich = {
  augenbraue: "Wer hier schreibt",
  titel: "Yasi",
  absaetze: [
    "Ich bin Yasemin, Ernährungsberaterin für Pferde aus Buchen im Odenwald, und zur Aromatherapie bin ich über meine eigene Stute gekommen: Helena, mit der Diagnose PPID.",
    "Über die Fütterung hatte ich viel in der Hand. Über alles andere — Anspannung, Umstellungen, die Tage, an denen sie einfach nicht bei sich war — lange nicht. Ätherische Öle waren der erste Bereich, in dem ich gemerkt habe, dass Helena mir sehr genau sagen kann, was sie gerade möchte. Ich musste nur lernen, hinzusehen.",
    "Heute arbeite ich mit Ölen und Hydrolaten als Begleitung — neben dem Tierarzt, neben der Fütterung, nie an ihrer Stelle. Und ich gebe weiter, was ich dabei gelernt habe: sauber, fachlich, ohne Versprechen, die kein Öl halten kann.",
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
        "Richtig eingesetzt ja, falsch eingesetzt nein. Ätherische Öle sind hochkonzentrierte Pflanzenauszüge — für einen Tropfen Rosenöl brauchst du Blüten aus einem ganzen Beet. Unverdünnt aufs Fell, in die Nähe der Augen, ins Futter oder über die Tränke haben sie nichts zu suchen. Entscheidend sind drei Dinge: Verdünnung, Aufnahmeweg und die Zustimmung des Pferdes.",
    },
    {
      frage: "Woran erkenne ich gute Qualität?",
      antwort:
        "Auf dem Etikett muss der botanische Name stehen, das Herkunftsland, die Gewinnungsart und im besten Fall das Chargen-Analysenzertifikat. „Naturidentisch“, „Duftöl“ oder „Aromaöl“ sind keine ätherischen Öle. Ein dunkles Glasfläschchen ist Pflicht, kein Verkaufsargument.",
    },
    {
      frage: "Was ist der Unterschied zwischen Öl und Hydrolat?",
      antwort:
        "Beide entstehen bei derselben Wasserdampfdestillation. Das ätherische Öl ist der fettlösliche Teil, der oben aufschwimmt; das Hydrolat ist das Destillationswasser darunter, angereichert mit den wasserlöslichen Pflanzenstoffen. Hydrolate sind um ein Vielfaches milder und für den Stallalltag oft der bessere Einstieg — besonders bei jungen, alten oder sehr empfindlichen Pferden.",
    },
    {
      frage: "Und bei trächtigen Stuten, Fohlen oder alten Pferden?",
      antwort:
        "Da wird die Liste der Öle kurz und die Verdünnung niedrig. Ketonhaltige Öle wie Pfefferminze, Salbei oder Rosmarin gehören dort nicht hin. Wenn du unsicher bist, arbeite mit Hydrolaten oder gar nicht — und sprich vorher mit deinem Tierarzt.",
    },
    {
      frage: "Kann ich Öle einfach ins Futter geben?",
      antwort:
        "Nein. Die innerliche Anwendung ist der heikelste Weg überhaupt und gehört in fachkundige Hände, nicht in den Futtereimer. Für zu Hause bleibt es beim Riechen und, gut verdünnt, beim Auftragen auf die Haut.",
    },
    {
      frage: "Ersetzt Aromapflege den Tierarzt?",
      antwort:
        "Nein, und das ist keine Höflichkeitsfloskel. Ätherische Öle sind Begleitung, keine Behandlung. Bei Lahmheit, Fieber, Koliksymptomen, Wunden oder allem, was plötzlich kommt: erst der Tierarzt. Das Fläschchen kann warten.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Der Abschluss
// ---------------------------------------------------------------------------
export const abschluss = {
  titel: "Fang mit einem Tropfen an.",
  text: "Der Öl-Guide ist kostenlos und in zehn Minuten gelesen. Danach weißt du, was du kaufen musst — und was nicht.",
  knopf: "Öl-Guide holen",
};
