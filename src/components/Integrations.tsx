import { INTEGRATIONS } from '../content';
import { Reveal } from './Reveal';

export function Integrations() {
  return (
    <section className="px-5 pb-8 md:px-8" aria-label="Connected tools">
      <div className="mx-auto max-w-6xl border-y border-[var(--line)] py-10">
        <Reveal>
          <p className="text-center text-sm font-semibold text-[var(--ink)]">Connected to the tools this order already uses</p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
            {INTEGRATIONS.map((item) => (
              <li key={item}>
                <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
