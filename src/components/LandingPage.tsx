'use client';

import { MotionConfig } from 'framer-motion';
import { AppShowcase } from './AppShowcase';
import { CTA } from './CTA';
import { CustomerExperience } from './CustomerExperience';
import { Features } from './Features';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { SelectedWork } from './SelectedWork';
import { HowItWorks } from './HowItWorks';
import { MobileCta } from './MobileCta';
import { Navbar } from './Navbar';
import { OrderJourney } from './OrderJourney';
import { Payments } from './Payments';
import { ProductHighlights } from './ProductHighlights';
import { RestaurantSection } from './RestaurantSection';
import { TechStack } from './TechStack';

export function LandingPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <SelectedWork />
        <ProductHighlights />
        <Features />
        <AppShowcase />
        <HowItWorks />
        <OrderJourney />
        <CustomerExperience />
        <RestaurantSection />
        <Payments />
        <TechStack />
        <CTA />
      </main>
      <Footer />
      <MobileCta />
    </MotionConfig>
  );
}
