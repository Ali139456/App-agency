'use client';

import { TECH } from '../content';
import { Reveal } from './Reveal';

export function TechStack() {
  return (
    <section id="technology" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-24">
      <div className="ink-panel mx-auto max-w-6xl rounded-[2rem] px-6 py-14 md:px-12 md:py-16">
        <Reveal className="max-w-2xl">
          <p className="text-[0.72rem] font-bold tracking-[0.16em] text-[var(--panel-kicker)] uppercase">Technology</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">Built for a Modern Experience</h2>
          <p className="mt-4 text-[#d4d4d4]">
            Under the hood, the app combines a modern mobile stack with a scalable backend to deliver a fast and reliable ordering experience.
          </p>
        </Reveal>
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {TECH.map((item) => (
            <li key={item}>
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#f5f5f5]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
