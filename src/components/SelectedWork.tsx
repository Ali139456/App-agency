'use client';

import Image from 'next/image';
import { WORK } from '../content';
import { Reveal } from './Reveal';

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="kicker">Selected work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">Apps, not a single brand site</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)] md:text-base">
            The way a studio shows a portfolio: customer product, field operations, and the business tools around them.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {WORK.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <a href={project.href} className="soft-card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1">
                <div className="relative h-52 overflow-hidden bg-[#0c1018]">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--gold-deep)]">
                    {project.index} · {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{project.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
