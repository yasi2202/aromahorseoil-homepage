# aromahorseoil — die Website

Die Seite zu deinem Instagram-Auftritt [@aromahorseoil](https://www.instagram.com/aromahorseoil):
Aromatherapie für Pferde, der Riechtest, der kostenlose Öl-Guide und die Ausbildung Aroma Horse.

Ein **eigenes Projekt**, unabhängig von `pferdeliebehealthy-homepage`. Gleiche Technik,
eigene Farben, eigener Auftritt.

---

## Wo du was änderst

**Alle Texte und alle Links stehen in einer einzigen Datei: [`lib/inhalte.ts`](lib/inhalte.ts).**
Überschriften, Öle, Fragen, Knopfbeschriftungen — alles dort. Du musst keinen
anderen Ordner anfassen.

Die Farben stehen ganz oben in [`app/globals.css`](app/globals.css).

| Was | Wo |
| --- | --- |
| Texte, Öle, Fragen, Links | `lib/inhalte.ts` |
| Farben | `app/globals.css`, ganz oben |
| Bilder | `public/images/` |
| Impressum | `app/impressum/page.tsx` |
| Datenschutz | `app/datenschutz/page.tsx` |

---

## Was noch offen ist

1. **Der Knopf „Platz anfragen"** bei der Ausbildung führt bisher zu einer Mail an dich.
   Sobald deine Verkaufsseite steht, trägst du sie in `lib/inhalte.ts` bei
   `links.ausbildung` ein — eine Zeile, sonst nichts.
2. **Die Bilder** sind vorerst dieselben wie auf der Pferdeliebehealthy-Seite.
   Wenn du Fotos hast, die zur Aromatherapie passen (Fläschchen, Hydrolate,
   ein Pferd beim Riechtest), leg sie in `public/images/` und trage die
   Dateinamen in `lib/inhalte.ts` ein.
3. **Das Symbol im Browser-Tab** ist ein gezeichneter Tropfen (`app/icon.tsx`).
   Sobald du ein Logo hast: als `app/icon.png` ablegen und `icon.tsx` löschen.
4. **Die Datenschutzerklärung** beschreibt genau, was die Seite heute tut
   (nichts erheben, keine Cookies). Lass sie einmal über den Händlerbund prüfen,
   bei dem du ohnehin Mitglied bist — und ergänze sie, sobald hier ein Formular dazukommt.

---

## Örtlich ansehen

```
npm.cmd install       # nur beim ersten Mal
npm.cmd run dev
```

Dann im Browser <http://localhost:3000> öffnen.

> `npm.cmd` statt `npm` — sonst blockiert PowerShell den Aufruf.

---

## Online stellen

Die Seite ist noch **nicht** veröffentlicht. Der Weg ist derselbe wie bei deinen
anderen Projekten:

1. Auf GitHub ein neues Repository `aromahorseoil-homepage` anlegen.
2. In diesem Ordner:
   ```
   git remote add origin https://github.com/yasi2202/aromahorseoil-homepage.git
   git push -u origin main
   ```
3. Bei Vercel „New Project" → das Repository auswählen → „Deploy".
   Es sind **keine** Umgebungsvariablen nötig; die Seite hat keine Datenbank.

**Wichtig:** Commits müssen als `yasi2202 <206202064+yasi2202@users.noreply.github.com>`
verfasst sein, sonst lehnt Vercel die Veröffentlichung mit „Deployment was blocked" ab.
Das ist in diesem Ordner bereits eingestellt.

---

## Technik

Next.js 16, React 19, TypeScript, Tailwind v4. Schriften: Fraunces (Überschriften,
wie bei Pferdeliebehealthy) und Karla (Fließtext, hier neu). Beide werden beim
Bauen heruntergeladen und von der eigenen Adresse ausgeliefert — es geht keine
Anfrage an Google, deshalb braucht die Seite keinen Cookie-Banner.
