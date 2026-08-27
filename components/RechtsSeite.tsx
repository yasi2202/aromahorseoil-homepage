/**
 * Der Rahmen für Impressum und Datenschutz.
 *
 * Der Fließtext darin wird über die Klasse `recht` in globals.css gesetzt —
 * so sehen beide Seiten gleich aus, ohne dass jede Überschrift einzeln
 * gestaltet werden muss.
 */
export default function RechtsSeite({
  augenbraue,
  titel,
  children,
}: {
  augenbraue: string;
  titel: string;
  children: React.ReactNode;
}) {
  return (
    <main id="inhalt" className="px-6 sm:px-8 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto">
        <p className="gesperrt text-terra">{augenbraue}</p>
        <h1 className="mt-4 font-serif text-[clamp(2rem,4.6vw,3rem)] leading-[1.1] tracking-[-0.015em]">
          {titel}
        </h1>
        <div className="recht mt-10">{children}</div>
      </div>
    </main>
  );
}
