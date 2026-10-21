import { TRUST } from '../content';

export function TrustStrip() {
  const loop = [...TRUST, ...TRUST];
  return (
    <section className="px-5 pb-6 md:px-8" aria-label="What we build for">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-medium text-[var(--ink)]">Built for businesses that need more than a website.</p>
        <div className="marquee mt-6">
          <ul className="marquee-track">
            {loop.map((item, index) => (
              <li key={`${item}-${index}`}>
                <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
