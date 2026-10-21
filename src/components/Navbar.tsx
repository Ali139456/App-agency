'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BRAND, NAV } from '../content';
import { ThemeToggle } from './ThemeToggle';

const MotionLink = motion.create(Link);

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
      { rootMargin: '-40% 0px -45% 0px', threshold: [0.15, 0.4] },
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
      className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 pb-3 transition-colors duration-300 md:px-5 ${
        scrolled || open ? 'bg-[var(--bg)]' : 'bg-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 transition-all duration-300 md:px-4 ${
          scrolled || open
            ? 'h-14 border-[var(--line)] bg-[var(--bg)] shadow-[0_16px_40px_-28px_rgba(0,0,0,0.35)]'
            : 'h-16 border-transparent bg-transparent'
        }`}
      >
        <Link href="/#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--gold)] text-sm font-bold text-[var(--on-accent)]">{BRAND.mark}</span>
          <span className="text-[1.05rem] font-semibold tracking-tight">{BRAND.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Page">
          {NAV.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-sm transition ${
                active === item.id ? 'bg-[var(--chip)] font-semibold text-[var(--ink)]' : 'text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
              aria-current={active === item.id ? 'true' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/#contact" className="btn-gold hidden !min-h-10 !px-4 !text-sm lg:inline-flex">
            Start a project
          </Link>
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

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            className="border-t border-[var(--line)] bg-[var(--bg)] px-5 py-4 lg:hidden"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-1 overflow-hidden">
              {NAV.map((item, index) => (
                <MotionLink
                  key={item.id}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-base font-medium"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index }}
                >
                  {item.label}
                </MotionLink>
              ))}
              <Link href="/#contact" className="btn-gold mt-2" onClick={() => setOpen(false)}>
                Start a project
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
