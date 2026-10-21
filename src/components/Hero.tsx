'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { CAPABILITY_LINE } from '../content';
import { PhoneFrame } from './PhoneFrame';

const ease = [0.22, 1, 0.36, 1] as const;

function Stage() {
  const reduce = useReducedMotion();
  const [shift, setShift] = useState({ x: 0, y: 0 });
  const move = reduce ? { x: 0, y: 0 } : shift;

  return (
    <div
      className="relative mx-auto hidden h-[620px] w-full max-w-[520px] lg:block"
      onMouseMove={(event) => {
        if (reduce) return;
        const box = event.currentTarget.getBoundingClientRect();
        setShift({
          x: (event.clientX - box.left) / box.width - 0.5,
          y: (event.clientY - box.top) / box.height - 0.5,
        });
      }}
      onMouseLeave={() => setShift({ x: 0, y: 0 })}
    >
      <div className="stage-shadow pointer-events-none absolute bottom-8 left-1/2 h-16 w-72 -translate-x-1/2" aria-hidden />

      <div className="absolute top-0 left-1/2 z-10 w-[240px] -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, x: move.x * 14, y: move.y * 10 }}
          transition={{ type: 'spring', stiffness: 70, damping: 18 }}
        >
          <div className="float-card">
            <PhoneFrame src="/screens/home-v2.webp" alt="Home screen from a shipped product" priority plain />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-16 left-2 z-20 w-52"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, x: move.x * 28, y: move.y * 8 }}
        transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.16 }}
      >
        <div className="lift-card float-card-delay p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--gold-deep)]">Web app</p>
        <p className="mt-2 text-sm font-medium">Operations desk</p>
        <div className="mt-3 space-y-2">
          {['Queue', 'Status', 'Team'].map((row) => (
            <div key={row} className="flex items-center justify-between gap-3 text-xs text-[var(--muted)]">
              <span>{row}</span>
              <span className="h-1.5 w-14 rounded-full bg-[var(--gold-soft)]" />
            </div>
          ))}
        </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-0 bottom-6 z-20 w-48"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, x: move.x * -20, y: move.y * 18 }}
        transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.22 }}
      >
        <div className="lift-card float-card-late p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--gold-deep)]">Live status</p>
        <p className="mt-2 text-sm font-medium">Placed to delivered</p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--bg-muted)]">
          <motion.div
            className="h-full rounded-full bg-[var(--gold)]"
            initial={{ width: '12%' }}
            animate={{ width: '68%' }}
            transition={{ duration: 1.1, delay: 0.7, ease }}
          />
        </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-x-clip pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-6">
        <div className="min-w-0">
          <motion.p className="kicker" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }}>
            Software studio
          </motion.p>
          <motion.h1
            className="mt-5 max-w-xl text-[clamp(2.6rem,6.2vw,4.6rem)] font-bold leading-[0.94] tracking-[-0.05em]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease }}
          >
            Software built around
            <span className="text-[var(--gold-deep)]"> your business.</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-[var(--muted)] md:text-lg"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
          >
            We design and build websites, web applications, mobile products, SaaS platforms, and AI-powered systems for businesses that need software to carry real work.
          </motion.p>
          <motion.ul
            className="mt-5 flex flex-wrap gap-2 text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.26 }}
          >
            {CAPABILITY_LINE.map((item, index) => (
              <motion.li
                key={item}
                className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 + index * 0.05, duration: 0.4, ease }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease }}
          >
            <a href="#contact" className="btn-gold">
              Start a project
            </a>
            <a href="#work" className="btn-line">
              View our work
            </a>
          </motion.div>
          <p className="mt-8 text-sm text-[var(--muted)]">Strategy, design, development, launch.</p>
        </div>

        <Stage />

        <div className="mx-auto w-full max-w-md lg:hidden">
          <div className="mx-auto w-[210px] sm:w-[240px]">
            <PhoneFrame src="/screens/home-v2.webp" alt="Home screen from a shipped product" priority />
          </div>
          <div className="mt-5 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
            <div className="lift-card p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--gold-deep)]">Web app</p>
              <p className="mt-2 text-sm font-medium">Operations desk</p>
            </div>
            <div className="lift-card p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--gold-deep)]">Live status</p>
              <p className="mt-2 text-sm font-medium">Placed to delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
