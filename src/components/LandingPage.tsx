'use client';

import { MotionConfig } from 'framer-motion';
import { About } from './About';
import { AppShowcase } from './AppShowcase';
import { ContactForm } from './ContactForm';
import { CustomerExperience } from './CustomerExperience';
import { Features } from './Features';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { HowItWorks } from './HowItWorks';
import { Integrations } from './Integrations';
import { MobileCta } from './MobileCta';
import { Navbar } from './Navbar';
import { OrderJourney } from './OrderJourney';
import { Payments } from './Payments';
import { ProductSuite } from './ProductSuite';
import { RestaurantSection } from './RestaurantSection';
import { Stats } from './Stats';
import { TechStack } from './TechStack';

export function LandingPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <About />
        <ProductSuite />
        <Integrations />
        <AppShowcase />
        <Features />
        <CustomerExperience />
        <RestaurantSection />
        <Payments />
        <HowItWorks />
        <OrderJourney />
        <TechStack />
        <Stats />
        <ContactForm />
      </main>
      <Footer />
      <MobileCta />
    </MotionConfig>
  );
}
