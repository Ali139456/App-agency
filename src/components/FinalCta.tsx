'use client';

import { motion } from 'framer-motion';

export function FinalCta() {
  return (
    <section className="px-5 pt-8 md:px-8" aria-labelledby="final-cta">
      <motion.div
        className="ink-panel mx-auto max-w-6xl rounded-[1.75rem] px-5 py-14 text-center sm:px-10 md:py-16"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 id="final-cta" className="text-[clamp(1.85rem,4vw,3rem)] font-semibold tracking-[-0.03em] text-[#f6f5f2]">
          Have a product in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#c8c6c1]">
          Tell us what you&apos;re building. We&apos;ll help you turn the idea into a production-ready product.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a href="#contact" className="btn-gold">
            Start a project
          </a>
          <a href="#work" className="btn-gold btn-on-dark">
            View our work
          </a>
        </div>
      </motion.div>
    </section>
  );
}
