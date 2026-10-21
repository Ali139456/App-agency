import { BRAND, NAV } from '../content';

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#2563eb] text-sm font-bold text-white">{BRAND.mark}</span>
            <span className="font-semibold tracking-tight">{BRAND.name}</span>
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
            {BRAND.tagline}
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-sm font-semibold">On this page</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {NAV.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="hover:text-[var(--ink)]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-[var(--muted)]">© {new Date().getFullYear()} {BRAND.name}.</p>
    </footer>
  );
}
