import { TESTIMONIALS } from '../content';

export function Testimonials() {
  if (!TESTIMONIALS.length) return null;

  return (
    <section className="px-5 py-20 md:px-8" aria-label="Client notes">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <figure key={item.name} className="soft-card p-6">
            <blockquote className="text-base leading-relaxed">“{item.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-[var(--muted)]">
              <span className="font-semibold text-[var(--ink)]">{item.name}</span>
              <span className="block">{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
