import { CAPABILITIES } from '../content';

export function Capabilities() {
  return (
    <section className="px-5 pb-8 md:px-8" aria-label="How we work">
      <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {CAPABILITIES.map((item) => (
          <article key={item.title} className="lift-card p-5">
            <h3 className="text-base font-semibold tracking-[-0.02em]">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
