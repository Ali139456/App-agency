'use client';

import { motion } from 'framer-motion';
import { AGENCY_PROCESS } from '../content';
import { Reveal } from './Reveal';

const ease = [0.22, 1, 0.36, 1] as const;

export function AgencyProcess() {
  return (
    <section id="process" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-xl">
          <p className="kicker">Process</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-[-0.04em]">How a project moves</h2>
        </Reveal>
        <div className="relative mt-14">
          <div className="absolute top-5 right-[8%] left-[8%] hidden h-px bg-[var(--line)] lg:block" aria-hidden />
          <motion.div
            className="absolute top-5 right-[8%] left-[8%] hidden h-px origin-left bg-[var(--gold)] lg:block"
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.05, ease }}
          />
          <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {AGENCY_PROCESS.map((step, index) => (
              <motion.li
                key={step.step}
                className="lg:text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease }}
              >
                <motion.span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-sm font-semibold text-[var(--gold-deep)] shadow-[0_12px_30px_-20px_rgba(0,0,0,0.45)]"
                  initial={{ scale: 0.7 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.1 + index * 0.08 }}
                >
                  {step.step}
                </motion.span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
