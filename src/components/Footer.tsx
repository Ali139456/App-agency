import { BRAND, CONTACT, FOOTER_COLUMNS } from '../content';

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-14 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,0.7fr))]">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--gold)] text-sm font-bold text-[var(--on-accent)]">{BRAND.mark}</span>
            <span className="font-semibold tracking-tight">{BRAND.name}</span>
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--muted)]">{BRAND.tagline}</p>
          <a href={`https://wa.me/${CONTACT.whatsapp}`} className="mt-4 inline-flex text-sm font-semibold text-[var(--gold-deep)]">
            WhatsApp {CONTACT.display}
          </a>
        </div>
        {FOOTER_COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <p className="text-sm font-semibold">{column.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              {column.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[var(--ink)]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-xs text-[var(--muted)]">© {new Date().getFullYear()} {BRAND.name}.</p>
    </footer>
  );
}
