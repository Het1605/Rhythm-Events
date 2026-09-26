import React from "react";
import { CELEBRATION_CATEGORIES } from "../data/business";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const CelebrationsGrid: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const getBadgeText = (type: string) => {
    switch (type) {
      case "haldi":
        return "Haldi / Pithi Rasam";
      case "mehendi":
        return "Mehendi Rasam & Lounge";
      case "wedding":
        return "Lagna Mandap Ceremony";
      case "sangeet":
        return "Sangeet & Raas-Garba";
      case "engagement":
        return "Sagai / Ring Ceremony";
      case "reception":
        return "Party Plot Reception";
      case "birthday":
        return "Birthday & Milestone Party";
      case "corporate":
        return "Corporate Seminar & Event";
      default:
        return "Ahmedabad Celebration";
    }
  };

  return (
    <section id="celebrations" className="py-20 sm:py-28 bg-[#FCFBF7] border-t border-[#C59B27]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F3EB] border border-[#C59B27]/30 text-[#C59B27] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            <span>CELEBRATIONS WE PLAN</span>
          </div>
          <h2 className="font-serif-luxury font-bold text-3xl sm:text-5xl text-[#2D1115] leading-tight">
            Crafted for your family’s sacred rituals & festivities.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C3A40] font-sans leading-relaxed">
            Every ceremony has its own unique rituals, visual identity, and guest flow. Explore our authentic décor and planning setups tailored for Gujarati and Indian wedding celebrations across Ahmedabad.
          </p>
        </div>

        {/* Uniform Structured Grid (Pure Décor, Uniform Dimensions & Alignment) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CELEBRATION_CATEGORIES.map((item) => {
            return (
              <div
                key={item.id}
                id={`celebrations-${item.id}`}
                className="h-[390px] sm:h-[410px] group relative rounded-2xl overflow-hidden border border-[#C59B27]/30 shadow-sm bg-white cursor-pointer transition-all duration-500 hover:shadow-[0_16px_36px_rgba(45,17,21,0.12),0_0_0_1px_rgba(197,155,39,0.4)] hover:-translate-y-1.5"
                onClick={scrollToContact}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = item.fallbackImage;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />

                {/* Scrim Overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1115]/95 via-[#2D1115]/40 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

                {/* Top Ceremony Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] px-3 py-1 rounded-full shadow-sm font-semibold tracking-wide bg-[#2D1115]/85 backdrop-blur-md border border-[#C59B27]/40 text-[#DFB15B]">
                    {getBadgeText(item.ceremonyType)}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:gold-gradient-bg group-hover:text-[#2D1115] group-hover:rotate-45 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#DFB15B] block mb-1">
                    {item.tagline}
                  </span>
                  <h3 className="font-serif-luxury font-bold text-xl text-white mb-2 leading-snug line-clamp-2 drop-shadow">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Booking Note */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-[#C59B27]/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#2D1115]">
          <div>
            <strong className="font-bold text-[#C59B27]">Planning full wedding rituals?</strong>{" "}
            <span className="text-[#5C3A40]">We coordinate complete celebration packages from Sagai, Haldi, and Mehendi to Lagna Mandap and Lawn Receptions.</span>
          </div>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="text-xs font-bold uppercase tracking-wider text-[#C59B27] hover:text-[#DFB15B] hover:underline shrink-0"
          >
            Inquire for your dates →
          </a>
        </div>

      </div>
    </section>
  );
};
