'use client';

import { useEffect, useState } from 'react';
import { BRAND, NAV } from '../content';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const nodes = NAV.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0.15, 0.4] }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-[var(--line)] bg-[var(--nav)] shadow-[0_8px_30px_-24px_rgba(28,25,23,0.45)] backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 md:px-8 ${scrolled ? 'h-14' : 'h-[4.5rem]'}`}>
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#2563eb] text-sm font-bold text-white">{BRAND.mark}</span>
          <span className="text-[1.05rem] font-semibold tracking-tight">{BRAND.name}</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Page">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-sm transition ${
                active === item.id ? 'bg-[var(--chip)] font-semibold text-[var(--ink)]' : 'text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
              aria-current={active === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#work" className="btn-gold hidden !min-h-10 !px-4 !text-sm sm:inline-flex">
            View work
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--chip)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close' : 'Menu'}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-[var(--line)] bg-[var(--bg)] px-5 py-4 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#work" className="btn-gold mt-2" onClick={() => setOpen(false)}>
              View work
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
