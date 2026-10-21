'use client';

import { motion } from 'framer-motion';
import { SERVICES } from '../content';
import { Icon } from './Icons';
import { Reveal } from './Reveal';

const ease = [0.22, 1, 0.36, 1] as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="kicker">Services</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-[-0.04em]">What we build</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
            From first idea to production, we handle the product layer end to end.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, index) => (
            <motion.a
              key={service.index}
              href="#contact"
              className="lift-card group flex h-full flex-col p-5"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.05, ease }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.14em] text-[var(--muted)]">{service.index}</span>
                <span className="text-[var(--gold-deep)] transition duration-300 group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </div>
              <span className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gold-soft)] text-[var(--gold-deep)]">
                <Icon name={service.icon} />
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em]">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{service.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
