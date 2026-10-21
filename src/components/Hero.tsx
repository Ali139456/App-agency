'use client';

import { motion } from 'framer-motion';
import { PhoneFrame } from './PhoneFrame';

const ease = [0.22, 1, 0.36, 1] as const;

function FloatCard({
  className,
  title,
  text,
  delayClass = '',
}: {
  className: string;
  title: string;
  text: string;
  delayClass?: string;
}) {
  return (
    <div className={`float-card ${delayClass} soft-card absolute z-30 hidden w-52 px-4 py-3 lg:block ${className}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--gold-deep)]">{title}</p>
      <p className="mt-1 text-sm font-medium leading-snug text-[var(--ink)]">{text}</p>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      <div
        className="hero-glow pointer-events-none absolute right-[-8%] top-16 h-[420px] w-[420px] rounded-full blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          <p className="kicker">All-in-one ordering system</p>
          <h1 className="mt-5 max-w-xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Online ordering, delivery, and the store desk
            <span className="text-[var(--gold-deep)]"> in one system.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Customers browse the menu and check out. The kitchen moves the order forward. The rider follows it to a Rawalpindi address, with cash or Easypaisa / JazzCash.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-gold">
              Get started
            </a>
            <a href="#products" className="btn-line">
              See products
            </a>
          </div>
          <p className="mt-8 text-sm text-[var(--muted)]">One kitchen. Customer app, rider hub, and store desk on the same order.</p>
        </motion.div>

        <div className="relative mx-auto h-[540px] w-full max-w-[520px] sm:h-[600px] lg:h-[640px] lg:max-w-none">
          <div className="absolute left-[8%] top-16 hidden w-[168px] -rotate-6 opacity-90 sm:block lg:left-0 lg:w-[190px]">
            <PhoneFrame src="/screens/menu.webp" alt="Menu screen" delay={0.15} />
          </div>
          <div className="absolute right-[6%] bottom-6 hidden w-[156px] rotate-6 sm:block lg:right-0 lg:w-[176px]">
            <PhoneFrame src="/screens/cart.webp" alt="Cart screen" delay={0.28} />
          </div>
          <div className="absolute left-1/2 top-0 z-20 w-[220px] -translate-x-1/2 sm:w-[240px] lg:w-[262px]">
            <PhoneFrame src="/screens/home.webp" alt="Home screen" priority delay={0.05} />
          </div>

          <FloatCard className="left-0 top-6" title="Deal" text="Zinger + Wings · 20% off" />
          <FloatCard className="right-0 top-28" title="In the cart" text="Laham Batatus + Pepsi" delayClass="float-card-delay" />
          <FloatCard className="bottom-10 left-2" title="On the way" text="Rider is heading to you" delayClass="float-card-late" />
        </div>
      </div>
    </section>
  );
}
