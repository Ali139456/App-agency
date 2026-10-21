import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
        <Reveal>
          <p className="kicker">About</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-[-0.04em]">Small enough to care. Experienced enough to build.</h2>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="max-w-xl space-y-4 text-base leading-relaxed text-[var(--muted)]">
            <p>
              App Studio designs and builds digital products for businesses that have outgrown a brochure site. That includes the customer-facing product, the tools staff use, and the connections between them.
            </p>
            <p>
              A project starts with the workflow, then the scope, then the interface, then the software. We stay through launch, so the first version is something the business can actually run.
            </p>
            <p>
              We work with teams that need a product built properly: restaurants and retailers with an operation to run, and companies that need a web or mobile system of their own. The difference is focus. One team owns the product, instead of handing the hard parts to someone else.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
