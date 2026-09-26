import React, { useState, useEffect } from "react";
import { BUSINESS_INFO } from "../data/business";
import { EVENT_IMAGES } from "../data/images";
import { ArrowRight, Phone, MessageSquare, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 min-h-[75vh] lg:min-h-[82vh] flex items-center bg-[#FCFBF7] overflow-hidden"
      aria-label="Welcome to Rhythm Events Ahmedabad"
    >
      {/* Subtle ambient golden radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(197,155,39,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Content */}
          <div
            className={`lg:col-span-7 z-10 transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Small Label with Gold Border */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8F3EB] border border-[#C59B27]/30 text-[#C59B27] text-xs font-semibold tracking-[0.2em] uppercase mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
              <span>BESPOKE INDIAN WEDDING & EVENT CURATION</span>
            </div>

            {/* Main Emotional Heading */}
            <h1 className="font-serif-luxury font-bold text-[#2D1115] hero-title text-balance tracking-tight mb-6">
              Turning your sacred moments into{" "}
              <span className="font-script text-[#C59B27] block sm:inline font-normal text-[1.12em] tracking-normal">
                timeless royal celebrations.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#5C3A40] leading-relaxed font-sans max-w-xl mb-8">
              Ahmedabad’s premier event and wedding planning studio. From majestic Lagna mandap architecture and vibrant Sangeet-Garba nights to lavish party plot receptions and milestone festivities.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="px-8 py-3.5 gold-gradient-bg text-[#2D1115] font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-[0_8px_25px_rgba(197,155,39,0.35)] transition-all active:scale-95 flex items-center gap-2.5"
              >
                <span>Plan Your Celebration</span>
                <ArrowRight className="w-4 h-4 text-[#2D1115]" />
              </a>

              <a
                href="#gallery"
                onClick={scrollToPortfolio}
                className="px-7 py-3.5 bg-white hover:bg-[#F8F3EB] text-[#2D1115] border border-[#C59B27]/40 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm"
              >
                View Portfolio
              </a>
            </div>

            {/* Direct Connect Quick Marker */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#C59B27]/20 text-xs sm:text-sm text-[#5C3A40]">
              <span className="font-semibold text-[#2D1115]">Consultation:</span>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="font-bold text-[#C59B27] hover:underline"
              >
                {BUSINESS_INFO.phone}
              </a>
              <span className="text-[#C59B27]/40">|</span>
              <span className="text-[#5A6643] font-semibold">Hatkeshwar - CTM, Ahmedabad</span>
            </div>
          </div>

          {/* Right Column: Beautiful Indian Celebration Visual */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ease-out delay-150 ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-98"
            }`}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Subtle Decorative Arch Border Accent */}
              <div className="absolute -inset-2.5 bg-gradient-to-tr from-[#C59B27]/30 via-[#DFB15B]/15 to-transparent rounded-3xl transform rotate-1 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C59B27]/30 aspect-[4/5] bg-[#F8F3EB]">
                <img
                  src={EVENT_IMAGES.hero.url}
                  alt={EVENT_IMAGES.hero.alt}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = EVENT_IMAGES.hero.fallbackUrl;
                  }}
                  className="w-full h-full object-cover transform hover:scale-103 transition-transform duration-700 ease-out"
                  loading="eager"
                  decoding="async"
                />

                {/* Subtle Gradient Scrim for Card Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1115]/90 via-[#2D1115]/25 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="bg-[#2D1115]/80 backdrop-blur-md border border-[#C59B27]/40 text-[#DFB15B] px-3 py-1 rounded-md font-semibold text-[11px] tracking-wide">
                      Grand Reception Stage
                    </span>
                    <span className="text-white/90 drop-shadow text-xs">
                      Ahmedabad Party Plot
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-3 left-2 sm:-bottom-5 sm:-left-5 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-[#C59B27]/30 flex items-center gap-3 max-w-[92%] sm:max-w-none">
                <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center text-[#2D1115] shadow-sm shrink-0">
                  <Sparkles className="w-5 h-5 text-[#2D1115]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2D1115]">
                    Ahmedabad Premier Planner
                  </div>
                  <div className="text-[11px] text-[#5C3A40]">
                    Mandaps • Sangeet • Celebrations
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
