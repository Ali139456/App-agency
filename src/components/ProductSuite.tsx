'use client';

import { PRODUCTS } from '../content';
import { Icon } from './Icons';
import { Reveal } from './Reveal';

export function ProductSuite() {
  return (
    <section id="products" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="kicker">Products</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">Run the order from menu to door</h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Each part of the system is already in the product: the customer app, the rider hub, the store desk, checkout, and the reasons people order again.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.05} className="h-full">
              <article className="soft-card flex h-full flex-col p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold-soft)] text-[var(--gold-deep)]">
                  <Icon name={product.icon} />
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em]">{product.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{product.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--ink)]">
                  {product.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a href={product.href} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--gold-deep)]">
                  Learn more
                  <span aria-hidden>→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
