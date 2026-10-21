'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PROJECT } from '../content';
import { PhoneFrame } from './PhoneFrame';
import { Reveal } from './Reveal';

const ease = [0.22, 1, 0.36, 1] as const;

export function SelectedWork() {
  const [customer, rider, store] = PROJECT.views;

  return (
    <section id="work" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="kicker">Work</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-[-0.04em]">Selected work</h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Real products. Real workflows. Built for real businesses.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <Reveal>
            <p className="text-sm font-semibold text-[var(--gold-deep)]">{PROJECT.category}</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{PROJECT.name}</h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--muted)]">{PROJECT.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {PROJECT.tech.map((item) => (
                <li key={item} className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)]">
                  {item}
                </li>
              ))}
            </ul>
            <a href={PROJECT.href} className="btn-gold mt-8">
              View case study
            </a>
          </Reveal>

          <div className="relative mx-auto hidden h-[560px] w-full max-w-[520px] lg:block">
            <motion.div
              className="absolute top-10 left-0 w-[180px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0, rotate: -8 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="float-card">
                <PhoneFrame src={store.image} alt={`${PROJECT.name}: ${store.title}`} plain />
              </div>
            </motion.div>
            <motion.div
              className="absolute top-0 right-6 z-10 w-[220px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, delay: 0.1, ease }}
            >
              <div className="float-card-delay">
                <PhoneFrame src={customer.image} alt={`${PROJECT.name}: ${customer.title}`} plain />
              </div>
            </motion.div>
            <motion.div
              className="absolute right-0 bottom-2 z-20 w-[168px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0, rotate: 6 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.18, ease }}
            >
              <div className="float-card-late">
                <PhoneFrame src={rider.image} alt={`${PROJECT.name}: ${rider.title}`} full plain />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:hidden">
          {PROJECT.views.map((view, index) => (
            <motion.a
              key={view.title}
              href={view.href}
              className="lift-card group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06, ease }}
            >
              <div className="relative h-56 overflow-hidden bg-[#111111]">
                <Image src={view.image} alt={`${PROJECT.name}: ${view.title}`} fill sizes="100vw" className="object-cover object-top" />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--gold-deep)]">{view.category}</p>
                <h3 className="mt-2 text-lg font-semibold">{view.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{view.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
