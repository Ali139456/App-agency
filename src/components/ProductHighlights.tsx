'use client';

import { HIGHLIGHTS } from '../content';
import { Icon } from './Icons';
import { Reveal } from './Reveal';

export function ProductHighlights() {
  return (
    <section className="px-5 pb-8 md:px-8" aria-label="Product highlights">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-6 text-center text-base text-[var(--muted)] md:text-lg">
            Inside the featured case: the pieces of a complete ordering product.
          </p>
        </Reveal>
        <div className="soft-card grid grid-cols-2 overflow-hidden md:grid-cols-3 lg:grid-cols-5">
          {HIGHLIGHTS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className={`h-full ${index === HIGHLIGHTS.length - 1 ? 'max-md:col-span-2' : ''}`}>
              <div className="flex h-full gap-3 border-[var(--line)] px-4 py-5 sm:px-5 md:border-r md:last:border-r-0">
                <span className="mt-0.5 text-[var(--gold-deep)]">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
