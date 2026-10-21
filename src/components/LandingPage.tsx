'use client';

import { MotionConfig } from 'framer-motion';
import { About } from './About';
import { AgencyProcess } from './AgencyProcess';
import { AgencyTech } from './AgencyTech';
import { AiSection } from './AiSection';
import { Capabilities } from './Capabilities';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { MobileCta } from './MobileCta';
import { Navbar } from './Navbar';
import { SelectedWork } from './SelectedWork';
import { Services } from './Services';
import { Solutions } from './Solutions';
import { Testimonials } from './Testimonials';
import { TrustStrip } from './TrustStrip';
import { WhyUs } from './WhyUs';

export function LandingPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <TrustStrip />
        <Services />
        <Solutions />
        <SelectedWork />
        <WhyUs />
        <AgencyProcess />
        <AgencyTech />
        <AiSection />
        <Capabilities />
        <Testimonials />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <MobileCta />
    </MotionConfig>
  );
}
