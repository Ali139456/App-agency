'use client';

import { OPS } from '../content';
import { PhoneFrame } from './PhoneFrame';
import { Reveal } from './Reveal';

export function RestaurantSection() {
  return (
    <section id="delivery" className="scroll-mt-24 bg-[var(--bg-muted)] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <Reveal>
            <p className="kicker">Delivery fleet</p>
            <h2 id="store" className="mt-3 scroll-mt-28 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">Store desk and rider hub</h2>
            <p className="mt-4 max-w-xl text-[var(--muted)]">
              Behind the menu is an admin desk for the kitchen and a rider hub for the road. Orders, status, and delivery stay in one system.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {OPS.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="soft-card h-full p-5">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <PhoneFrame
          src="/screens/rider-full.webp"
          alt="Rider hub showing an active delivery and map"
          label="Rider Hub"
          full
          className="mx-auto w-[250px] sm:w-[290px]"
        />
      </div>
    </section>
  );
}
