'use client';

import { motion } from 'framer-motion';
import { HOW_IT_WORKS } from '../content';
import { Reveal } from './Reveal';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-xl">
          <p className="kicker">Inside the product</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">How an order moves</h2>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute top-5 right-[10%] left-[10%] hidden h-px bg-[var(--line)] md:block" aria-hidden />
          <motion.div
            className="absolute top-5 right-[10%] left-[10%] hidden h-px origin-left bg-[var(--gold)] md:block"
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute top-4 bottom-4 left-[1.15rem] w-px bg-[var(--line)] md:hidden" aria-hidden />
          <motion.div
            className="absolute top-4 bottom-4 left-[1.15rem] w-px origin-top bg-[var(--gold)] md:hidden"
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          />

          <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
            {HOW_IT_WORKS.map((step, index) => (
              <motion.li
                key={step.step}
                className="relative pl-14 md:pl-0"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
              >
                <span className="absolute top-0 left-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-sm font-semibold text-[var(--gold-deep)] shadow-sm md:static">
                  {step.step}
                </span>
                <h3 className="mt-0 text-xl font-semibold md:mt-5">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
