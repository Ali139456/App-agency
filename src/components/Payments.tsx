'use client';

import { PAYMENTS } from '../content';
import { Icon } from './Icons';
import { Reveal } from './Reveal';

export function Payments() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28" aria-labelledby="payments-title">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="kicker">Checkout</p>
          <h2 id="payments-title" className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            Payments & Delivery
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Cash when it arrives, or Easypaisa and JazzCash with proof on mobile. Addresses stay inside the Rawalpindi delivery zone.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PAYMENTS.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 0.05}>
              <article className="soft-card flex h-full gap-4 p-5 transition duration-300 hover:-translate-y-1">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--gold-soft)] text-[var(--gold-deep)]">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{item.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
