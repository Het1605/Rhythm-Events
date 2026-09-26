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
      className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 min-h-[72vh] lg:min-h-[78vh] flex items-center bg-[#FFF9F2] overflow-hidden"
      aria-label="Welcome to Rhythm Events Ahmedabad"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Content */}
          <div
            className={`lg:col-span-7 z-10 transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1E5D5] text-[#C9513D] text-xs font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E7A63A]" />
              <span>EVENTS • WEDDINGS • CELEBRATIONS</span>
            </div>

            {/* Main Emotional Heading */}
            <h1 className="font-serif-heading font-bold text-[#481B22] hero-title text-balance tracking-tight mb-5">
              Turning your special moments into{" "}
              <span className="text-[#C9513D] italic font-normal">
                beautiful celebrations.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#481B22]/80 leading-relaxed font-sans max-w-xl mb-8">
              Wedding planning, décor and memorable events in Ahmedabad. From sacred mandap ceremonies and colourful sangeet nights to milestone family celebrations.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="px-7 py-3.5 bg-[#C9513D] hover:bg-[#b84330] text-white text-sm font-semibold tracking-wide rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2"
              >
                <span>Plan Your Event</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#gallery"
                onClick={scrollToPortfolio}
                className="px-6 py-3.5 bg-white hover:bg-[#F1E5D5] text-[#481B22] border border-[#E2D2C0] text-sm font-semibold rounded-xl transition-all"
              >
                View Our Work
              </a>
            </div>

            {/* Direct Connect Quick Marker */}
            <div className="flex items-center gap-3 pt-3 border-t border-[#F1E5D5] text-xs sm:text-sm text-[#481B22]/70">
              <span className="font-medium text-[#481B22]">Call / WhatsApp:</span>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="font-semibold text-[#C9513D] hover:underline"
              >
                {BUSINESS_INFO.phone}
              </a>
              <span className="text-black/20">|</span>
              <span className="text-[#65724A] font-medium">Ahmedabad & Gujarat</span>
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
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E7A63A]/20 via-[#C9513D]/10 to-transparent rounded-2xl transform rotate-1 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] bg-[#F1E5D5]">
                <img
                  src={EVENT_IMAGES.hero.url}
                  alt={EVENT_IMAGES.hero.alt}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = EVENT_IMAGES.hero.fallbackUrl;
                  }}
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700 ease-out"
                  loading="eager"
                  decoding="async"
                />

                {/* Subtle Gradient Scrim for Card Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="bg-[#C9513D] px-2.5 py-1 rounded-md text-white font-semibold">
                      Grand Reception Stage
                    </span>
                    <span className="text-white/90 drop-shadow">
                      Ahmedabad Party Plot
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-[#F1E5D5] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E7A63A]/20 flex items-center justify-center text-[#E7A63A]">
                  <Sparkles className="w-5 h-5 text-[#C9513D]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#481B22]">
                    Bespoke Event Planning
                  </div>
                  <div className="text-[11px] text-[#481B22]/60">
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
