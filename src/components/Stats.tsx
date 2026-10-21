'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { STATS } from '../content';

function Count({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setValue(to);
      return;
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / 900);
      setValue(Math.round(to * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);

  return <span ref={ref}>{value}</span>;
}

export function Stats() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-20" aria-label="What the system includes">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
        {STATS.map((item) => (
          <article key={item.label} className="soft-card px-6 py-8 text-center">
            <p className="text-5xl font-semibold tracking-[-0.04em] text-[var(--gold-deep)]">
              <Count to={item.value} />
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
