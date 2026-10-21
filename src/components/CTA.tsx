'use client';

import { Reveal } from './Reveal';

export function CTA() {
  return (
    <section id="cta" className="scroll-mt-24 px-5 pb-20 md:px-8 md:pb-28">
      <Reveal>
        <div className="ink-panel relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-16 text-center md:px-16 md:py-20">
          <div className="cta-glow pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full blur-3xl" aria-hidden />
          <h2 className="relative text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            The next product can start the same way.
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-[#d4d4d4]">
            A clear case study, real screens, and a stack you can ship — the way a studio presents its app work.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href="#work" className="btn-gold">
              View selected work
            </a>
            <a href="#app" className="btn-line !border-white/20 !text-[#f7f7f7] hover:!bg-white/10">
              Open the case study
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
