import React from "react";
import { CELEBRATION_CATEGORIES } from "../data/business";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const CelebrationsGrid: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case "haldi":
        return "bg-[#E7A63A] text-[#481B22] font-bold";
      case "mehendi":
        return "bg-[#65724A] text-white font-bold";
      case "wedding":
        return "bg-[#C9513D] text-white font-bold";
      case "sangeet":
        return "bg-[#481B22] text-[#E7A63A] font-bold border border-[#E7A63A]/40";
      case "engagement":
        return "bg-[#F1E5D5] text-[#481B22] font-bold";
      case "birthday":
        return "bg-[#D97706] text-white font-bold";
      case "corporate":
        return "bg-[#1E3A8A] text-white font-bold";
      default:
        return "bg-[#C9513D] text-white font-bold";
    }
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
    <section id="celebrations" className="py-20 sm:py-28 bg-[#FBF6EF] border-t border-[#F1E5D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-bold tracking-widest text-[#C9513D] uppercase mb-2">
            CELEBRATIONS WE PLAN
          </div>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#481B22] leading-tight">
            Crafted for your family’s sacred rituals & festivities.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#481B22]/70 font-sans">
            Every ceremony has its own unique rituals, visual identity, and guest flow. Explore our décor and planning setups tailored for Gujarati and Indian wedding celebrations across Ahmedabad.
          </p>
        </div>

        {/* Uniform Structured Grid (Pure Décor, Uniform Dimensions & Alignment) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CELEBRATION_CATEGORIES.map((item) => {
            return (
              <div
                key={item.id}
                id={`celebrations-${item.id}`}
                className="h-[380px] sm:h-[400px] group relative rounded-2xl overflow-hidden border border-[#E2D2C0] shadow-sm bg-white cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                onClick={scrollToContact}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = item.fallbackImage;
                  }}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />

                {/* Scrim Overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

                {/* Top Ceremony Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className={`text-[11px] px-2.5 py-1 rounded-full shadow-sm font-semibold tracking-wide ${getBadgeStyle(item.ceremonyType)}`}>
                    {getBadgeText(item.ceremonyType)}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-[#C9513D] group-hover:rotate-45 transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E7A63A] block mb-1">
                    {item.tagline}
                  </span>
                  <h3 className="font-serif-heading font-bold text-xl text-white mb-2 leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Booking Note */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-[#E2D2C0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#481B22]">
          <div>
            <strong className="font-semibold text-[#C9513D]">Planning full wedding rituals?</strong>{" "}
            We coordinate complete wedding packages covering all ceremonies from Sagai, Haldi, and Mehendi to Mandap and Party Plot Reception.
          </div>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="text-[#C9513D] font-semibold hover:underline shrink-0"
          >
            Inquire for your dates →
          </a>
        </div>

      </div>
    </section>
  );
};
