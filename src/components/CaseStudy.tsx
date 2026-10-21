'use client';

import { MotionConfig } from 'framer-motion';
import Link from 'next/link';
import { AppShowcase } from './AppShowcase';
import { CustomerExperience } from './CustomerExperience';
import { Features } from './Features';
import { Footer } from './Footer';
import { HowItWorks } from './HowItWorks';
import { Navbar } from './Navbar';
import { OrderJourney } from './OrderJourney';
import { Payments } from './Payments';
import { RestaurantSection } from './RestaurantSection';
import { Reveal } from './Reveal';
import { TechStack } from './TechStack';

export function CaseStudy() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <section className="px-5 pt-32 pb-10 md:px-8 md:pt-36">
          <div className="mx-auto max-w-6xl">
            <Link href="/#work" className="text-sm font-semibold text-[var(--gold-deep)]">
              ← Selected work
            </Link>
            <Reveal>
              <p className="kicker mt-6">Case study</p>
              <h1 className="mt-3 max-w-3xl text-[clamp(2.2rem,5vw,3.6rem)] font-semibold tracking-[-0.045em]">Food ordering system</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                One kitchen in Rawalpindi. Customers order from a mobile app, the store desk runs the queue, and a rider hub carries the order to a map pin. Cash, Easypaisa, or JazzCash.
              </p>
            </Reveal>
          </div>
        </section>
        <AppShowcase />
        <Features />
        <HowItWorks />
        <OrderJourney />
        <CustomerExperience />
        <RestaurantSection />
        <Payments />
        <TechStack />
        <section className="px-5 pb-20 md:px-8">
          <div className="mx-auto flex max-w-6xl flex-wrap gap-3">
            <Link href="/#contact" className="btn-gold">
              Start a project
            </Link>
            <Link href="/#work" className="btn-line">
              Back to work
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </MotionConfig>
  );
}
