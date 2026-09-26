import React from "react";
import { EVENT_IMAGES } from "../data/images";
import { ArrowRight, Check } from "lucide-react";

export const AboutIntro: React.FC = () => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFF9F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Vertical Indian Wedding Mandap Setup */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle Warm Layer Accent */}
              <div className="absolute -inset-3 bg-[#F1E5D5] rounded-2xl transform -rotate-1 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] bg-white border border-[#E2D2C0]">
                <img
                  src={EVENT_IMAGES.about.url}
                  alt={EVENT_IMAGES.about.alt}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = EVENT_IMAGES.about.fallbackUrl;
                  }}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <span className="font-semibold block text-sm">Sacred Mandap Décor</span>
                  <span className="text-white/80">Tailored to your family traditions in Ahmedabad</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="text-xs font-bold tracking-widest text-[#C9513D] uppercase mb-3">
              ABOUT RHYTHM EVENTS
            </div>

            <h2 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#481B22] leading-tight mb-6">
              You enjoy the celebration. <br />
              <span className="text-[#C9513D]">We’ll take care of the details.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#481B22]/80 leading-relaxed font-sans mb-8">
              <p>
                Rhythm Events is an Ahmedabad-based event planning business helping families and businesses bring their celebrations to life — from weddings and engagements to birthdays, corporate events and special occasions.
              </p>
              <p className="text-[#481B22]/70 text-base">
                From planning and décor to coordination on the event day, the focus is simple: creating a celebration that feels right for you.
              </p>
            </div>

            {/* Practical Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Personalized mandap & theme styling",
                "Ahmedabad party plots & venue coordination",
                "Haldi, Mehendi & Sangeet production",
                "Quiet, dependable on-ground execution"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-[#481B22]">
                  <span className="w-5 h-5 rounded-full bg-[#E7A63A]/20 flex items-center justify-center text-[#C9513D] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9513D] hover:text-[#b84330] group transition-colors"
            >
              <span>Know More About Our Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
