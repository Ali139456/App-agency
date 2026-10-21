'use client';

import { SOLUTIONS } from '../content';
import { Reveal } from './Reveal';

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-24 bg-[var(--bg-muted)] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
        <div>
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="kicker">Solutions</p>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-[-0.04em]">What we can put into production</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--muted)]">
                These are the product types we take from scope to a system people use. The shipped example on this site is a full ordering product, shown in Selected work.
              </p>
            </Reveal>
          </div>
        </div>
        <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {SOLUTIONS.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 0.03}>
                <div className="group grid gap-2 py-5 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-baseline">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] transition group-hover:text-[var(--gold-deep)] sm:text-2xl lg:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)] md:text-base">{item.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
