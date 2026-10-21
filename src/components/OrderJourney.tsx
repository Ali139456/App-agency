'use client';

import { useEffect, useState } from 'react';
import { JOURNEY } from '../content';
import { Reveal } from './Reveal';

export function OrderJourney() {
  const [active, setActive] = useState(3);
  const [paused, setPaused] = useState(false);
  const current = JOURNEY[active];
  const progress = `${(active / (JOURNEY.length - 1)) * 100}%`;

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % JOURNEY.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section id="tracking" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28" aria-labelledby="journey-title">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="kicker">After you order</p>
          <h2 id="journey-title" className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            One order, every status
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            The same stages the app shows after checkout. Select a step, or let it play through.
          </p>
        </Reveal>

        <div
          className="mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="hide-scroll -mx-5 flex gap-2 overflow-x-auto px-5 pb-4 md:mx-0 md:px-0">
            {JOURNEY.map((step, index) => {
              const selected = index === active;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`shrink-0 rounded-full px-3.5 py-2 text-sm transition ${
                    selected ? 'journey-selected bg-[#171717] text-white' : 'bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--ink)]'
                  }`}
                  aria-pressed={selected}
                >
                  {step.label}
                </button>
              );
            })}
          </div>

          <div
            className="journey-rail mt-2 h-px w-full rounded-full"
            style={{ ['--progress' as string]: progress }}
            aria-hidden
          />

          <div className="soft-card mt-6 grid gap-6 p-6 md:grid-cols-[auto_1fr] md:items-center md:p-8">
            <p className="text-5xl font-semibold tracking-[-0.04em] text-[var(--gold-deep)]">
              {String(active + 1).padStart(2, '0')}
            </p>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">{current.label}</h3>
              <p className="mt-2 max-w-xl text-[var(--muted)]">{current.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
