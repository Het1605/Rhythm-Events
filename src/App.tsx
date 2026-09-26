/**
 * RHYTHM EVENTS — Ahmedabad, Gujarat
 * Modern Gujarati & Indian Event & Wedding Planner
 */

import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { CategoryStrip } from "./components/CategoryStrip";
import { AboutIntro } from "./components/AboutIntro";
import { CelebrationsGrid } from "./components/CelebrationsGrid";
import { WeddingJourney } from "./components/WeddingJourney";
import { PortfolioGallery } from "./components/PortfolioGallery";
import { EventServices } from "./components/EventServices";
import { LocalAhmedabad } from "./components/LocalAhmedabad";
import { WhyRhythm } from "./components/WhyRhythm";
import { WhatsAppBanner } from "./components/WhatsAppBanner";
import { ContactEnquiry } from "./components/ContactEnquiry";
import { GoogleMapSection } from "./components/GoogleMapSection";
import { Footer } from "./components/Footer";
import { MobileBottomBar } from "./components/MobileBottomBar";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#FFF9F2] text-[#481B22] selection:bg-[#C9513D] selection:text-white font-sans">
      {/* 1. Header Navigation */}
      <Header />

      <main id="main-content">
        {/* 2. Local Indian Wedding Hero */}
        <HeroSection />

        {/* 3. Event Category Strip */}
        <CategoryStrip />

        {/* 4. About / Introduction */}
        <AboutIntro />

        {/* 5. Celebrations We Plan */}
        <CelebrationsGrid />

        {/* 6. Indian Wedding Journey: Engagement → Haldi → Mehendi → Sangeet → Wedding → Reception */}
        <WeddingJourney />

        {/* 7. Portfolio: A Glimpse Into The Celebrations */}
        <PortfolioGallery />

        {/* 8. Event Services: Everything Your Event Needs */}
        <EventServices />

        {/* 9. Local Connection: Celebrating Ahmedabad, One Event At A Time */}
        <LocalAhmedabad />

        {/* 10. Why Rhythm Events */}
        <WhyRhythm />

        {/* TODO: Add verified Google customer reviews when available from Rhythm Events owner */}

        {/* 11. Strong WhatsApp CTA Banner */}
        <WhatsAppBanner />

        {/* 12. Event Enquiry (Direct WhatsApp message generator) */}
        <ContactEnquiry />

        {/* 13. Interactive Google Map Location */}
        <GoogleMapSection />
      </main>

      {/* 14. Clean Local Footer */}
      <Footer />

      {/* 14. Mobile Sticky Bottom Bar (Call | WhatsApp | Enquire) */}
      <MobileBottomBar />
    </div>
  );
}
