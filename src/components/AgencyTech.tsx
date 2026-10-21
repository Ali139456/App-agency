'use client';

import { motion } from 'framer-motion';
import { TECH_GROUPS } from '../content';
import { Reveal } from './Reveal';

const ease = [0.22, 1, 0.36, 1] as const;

export function AgencyTech() {
  return (
    <section id="technology" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-24">
      <motion.div
        className="ink-panel mx-auto max-w-6xl rounded-[2rem] px-6 py-14 md:px-12 md:py-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease }}
      >
        <Reveal className="max-w-2xl">
          <p className="text-[0.72rem] font-bold tracking-[0.16em] text-[var(--panel-kicker)] uppercase">Technology</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-[-0.04em]">Built with modern technology.</h2>
          <p className="mt-4 max-w-xl text-[#d4d4d4]">
            The tools behind the work we ship today: the web studio, the mobile products, and the services that keep them running.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_GROUPS.map((group, groupIndex) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-[var(--panel-kicker)]">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: groupIndex * 0.05 + index * 0.04, ease }}
                  >
                    <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-[#f5f5f5]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
