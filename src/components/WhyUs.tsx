'use client';

import { motion } from 'framer-motion';
import { PRINCIPLES } from '../content';
import { Reveal } from './Reveal';

const ease = [0.22, 1, 0.36, 1] as const;

export function WhyUs() {
  return (
    <section className="bg-[var(--bg-muted)] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="kicker">Why us</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-[-0.04em]">More than developers. Your product team.</h2>
        </Reveal>
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {PRINCIPLES.map((item, index) => (
            <motion.article
              key={item.index}
              className="lift-card h-full p-6 sm:p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.06, ease }}
            >
              <p className="text-3xl font-semibold tracking-[-0.04em] text-[var(--gold-deep)]">{item.index}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)] md:text-base">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
