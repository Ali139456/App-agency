'use client';

import { motion } from 'framer-motion';
import { AI_USES } from '../content';
import { Reveal } from './Reveal';

const ease = [0.22, 1, 0.36, 1] as const;

export function AiSection() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28" aria-labelledby="ai-title">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[1.75rem] border border-[var(--line)] bg-[var(--bg-muted)] px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal>
          <p className="kicker">AI</p>
          <h2 id="ai-title" className="mt-3 text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-[-0.04em]">
            AI that actually fits into your business.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--muted)]">
            We integrate AI into real workflows — from intelligent assistants and document processing to automated operations and AI-powered customer experiences.
          </p>
        </Reveal>
        <ul className="grid content-center gap-3 sm:grid-cols-2">
          {AI_USES.map((item, index) => (
            <motion.li
              key={item}
              className="lift-card px-4 py-4 text-sm font-medium"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04, ease }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
