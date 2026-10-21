'use client';

import { FLOW } from '../content';
import { PhoneFrame } from './PhoneFrame';
import { Reveal } from './Reveal';

const lift = ['md:translate-y-8', 'md:translate-y-0', 'md:translate-y-10', 'md:-translate-y-2'];

export function AppShowcase() {
  return (
    <section id="ordering" className="scroll-mt-24 bg-[var(--bg-muted)] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="kicker">Online ordering</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">A customer app for the full order</h2>
          <p className="mt-4 text-[var(--muted)]">Home, menu, cart, and account — the surface people use to place an order.</p>
        </Reveal>

        <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-4 hide-scroll md:items-end md:justify-center md:overflow-visible md:px-0">
          {FLOW.map((screen, index) => (
            <PhoneFrame
              key={screen.id}
              src={screen.src}
              alt={`${screen.label} screen from the ordering app`}
              label={screen.label}
              delay={index * 0.08}
              objectPosition={screen.id === 'account' ? 'left top' : 'center top'}
              className={`w-[210px] shrink-0 snap-center sm:w-[230px] ${lift[index] ?? ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
