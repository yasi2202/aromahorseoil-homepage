import Link from "next/link";
import { links, marke } from "@/lib/inhalte";

export default function Fusszeile() {
  return (
    <footer className="px-6 sm:px-8 pt-16 pb-10 bg-creme-tief">
      <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] gap-8 max-w-6xl mx-auto pb-10 border-b border-linie">
        <div className="col-span-2 md:col-span-1">
          <div className="font-serif text-xl tracking-tight mb-3">
            {marke.wortmarke.hell}
            <span className="text-terra">{marke.wortmarke.dunkel}</span>
          </div>
          <p className="text-[13.5px] text-tinte-weich max-w-[280px] leading-relaxed">
            {marke.claim}. Aromapflege von Yasemin Halac, {marke.ort}.
          </p>
          <p className="text-[13px] text-tinte-weich/80 max-w-[280px] leading-relaxed mt-4">
            Ätherische Öle sind Begleitung, keine Behandlung. Sie ersetzen
            weder Tierarzt noch Therapie.
          </p>
        </div>

        <div>
          <h2 className="gesperrt text-terra mb-4">Seite</h2>
          <ul className="space-y-2.5 text-sm text-tinte-weich">
            <li>
              <Link href="/#riechtest" className="hover:text-tinte">
                Der Riechtest
              </Link>
            </li>
            <li>
              <Link href="/#oele" className="hover:text-tinte">
                Die Öle
              </Link>
            </li>
            <li>
              <Link href={links.kursSeite} className="hover:text-tinte">
                Der Kurs
              </Link>
            </li>
            <li>
              <Link href="/#ueber-mich" className="hover:text-tinte">
                Über mich
              </Link>
            </li>
            <li>
              <a href={links.oelGuide} className="hover:text-tinte">
                Der Öl-Guide
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="gesperrt text-terra mb-4">Kontakt &amp; Recht</h2>
          <ul className="space-y-2.5 text-sm text-tinte-weich">
            <li>
              <a href={`mailto:${marke.mail}`} className="hover:text-tinte">
                {marke.mail}
              </a>
            </li>
            <li>
              <a href={links.instagram} target="_blank" rel="noopener" className="hover:text-tinte">
                Instagram
              </a>
            </li>
            <li>
              <a href={links.schwesterseite} target="_blank" rel="noopener" className="hover:text-tinte">
                Pferdeliebehealthy
              </a>
            </li>
            <li>
              <Link href="/impressum" className="hover:text-tinte">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-tinte">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link href="/agb" className="hover:text-tinte">
                AGB
              </Link>
            </li>
            <li>
              <Link href="/widerrufsbelehrung" className="hover:text-tinte">
                Widerrufsrecht
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 flex justify-between flex-wrap gap-3 text-[12.5px] text-tinte-weich">
        <span>© 2026 {marke.name}</span>
        <span>{marke.ort}</span>
      </div>
    </footer>
  );
}
