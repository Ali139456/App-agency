'use client';

import { useEffect, useRef, useState } from 'react';
import { BRAND, NAV, PRODUCT_SECTION_IDS, PRODUCTS } from '../content';
import { ThemeToggle } from './ThemeToggle';

const sectionIds = [...NAV.map((item) => item.id), ...PRODUCT_SECTION_IDS];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [active, setActive] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const nodes = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
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
      if (event.key === 'Escape') {
        setOpen(false);
        setProductsOpen(false);
      }
    };
    const onPointer = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setProductsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onPointer);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onPointer);
    };
  }, []);

  const productsActive = active === 'products' || PRODUCT_SECTION_IDS.includes(active as (typeof PRODUCT_SECTION_IDS)[number]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-[var(--line)] bg-[var(--nav)] shadow-[0_8px_30px_-24px_rgba(28,25,23,0.45)] backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 md:px-8 ${scrolled ? 'h-14' : 'h-[4.5rem]'}`}>
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--gold)] text-sm font-bold text-[var(--on-accent)]">{BRAND.mark}</span>
          <span className="text-[1.05rem] font-semibold tracking-tight">{BRAND.name}</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Page">
          {NAV.map((item) =>
            item.id === 'products' ? (
              <div key={item.id} className="relative" ref={menuRef}>
                <button
                  type="button"
                  className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm transition ${
                    productsActive || productsOpen ? 'bg-[var(--chip)] font-semibold text-[var(--ink)]' : 'text-[var(--muted)] hover:text-[var(--ink)]'
                  }`}
                  aria-expanded={productsOpen}
                  aria-controls="products-menu"
                  onClick={() => setProductsOpen((value) => !value)}
                >
                  {item.label}
                  <svg viewBox="0 0 20 20" className={`h-3.5 w-3.5 transition ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {productsOpen ? (
                  <div id="products-menu" role="menu" className="soft-card absolute left-0 top-[calc(100%+0.4rem)] w-80 p-2">
                    {PRODUCTS.map((product) => (
                      <a
                        key={product.id}
                        href={product.href}
                        role="menuitem"
                        className="block rounded-xl px-3 py-2.5 hover:bg-[var(--bg-muted)]"
                        onClick={() => setProductsOpen(false)}
                      >
                        <span className="block text-sm font-semibold">{product.title}</span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-[var(--muted)]">{product.desc}</span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
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
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#contact" className="btn-gold hidden !min-h-10 !px-4 !text-sm sm:inline-flex">
            Get started
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--chip)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-[var(--line)] bg-[var(--bg)] px-5 py-4 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {NAV.map((item) =>
              item.id === 'products' ? (
                <div key={item.id}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium"
                    aria-expanded={productsOpen}
                    onClick={() => setProductsOpen((value) => !value)}
                  >
                    Products
                    <svg viewBox="0 0 20 20" className={`h-4 w-4 transition ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                      <path d="M5 8l5 5 5-5" strokeLinecap="round" />
                    </svg>
                  </button>
                  {productsOpen ? (
                    <div className="mb-1 ml-3 flex flex-col border-l border-[var(--line)] pl-3">
                      {PRODUCTS.map((product) => (
                        <a key={product.id} href={product.href} className="rounded-xl px-3 py-2 text-sm text-[var(--muted)]" onClick={() => setOpen(false)}>
                          {product.title}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <a key={item.id} href={item.href} className="rounded-xl px-3 py-3 text-base font-medium" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ),
            )}
            <a href="#contact" className="btn-gold mt-2" onClick={() => setOpen(false)}>
              Get started
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
