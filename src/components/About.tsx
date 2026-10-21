import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end">
        <Reveal>
          <p className="kicker">About</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">One kitchen, three ways to run the order</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
            The system is built for a single store serving Rawalpindi. A customer places the order, the store desk accepts and updates it, and the rider hub carries it to the pin on the map.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
