'use client';

import { CUSTOMER_BENEFITS } from '../content';
import { PhoneFrame } from './PhoneFrame';
import { Reveal } from './Reveal';

export function CustomerExperience() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <PhoneFrame
          src="/screens/menu.webp"
          alt="Browsing the menu"
          className="mx-auto w-[240px] sm:w-[270px]"
        />
        <Reveal>
          <p className="kicker">Customer</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">Designed Around the Customer</h2>
          <ul className="mt-8 space-y-3">
            {CUSTOMER_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex gap-3 text-[15px] leading-relaxed text-[var(--ink)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" aria-hidden />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
