/**
 * Der Tropfen.
 *
 * Das einzige Zeichen, das auf der ganzen Seite wiederkehrt: als Aufzählung,
 * als Trenner, vor den Augenbrauen. Bewusst nur eine Form statt einer
 * Sammlung von Symbolen — ein Zeichen, das man wiedererkennt, wirkt stärker
 * als zehn, die man einzeln entziffern muss.
 */
export default function Tropfen({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 16"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="currentColor"
    >
      <path d="M6 0C6 0 0 7.2 0 10.4A6 6 0 0 0 12 10.4C12 7.2 6 0 6 0Z" />
    </svg>
  );
}
