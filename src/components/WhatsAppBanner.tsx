import React from "react";
import { BUSINESS_INFO } from "../data/business";
import { MessageSquare, Phone, ArrowUpRight } from "lucide-react";

export const WhatsAppBanner: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-r from-[#240D11] via-[#331318] to-[#240D11] border-y border-[#C59B27]/40 relative overflow-hidden">
      {/* Decorative radial glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#B3412E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#FCFBF7] leading-[1.15] font-normal mb-5">
          Let’s Bring Your Sacred <br />
          <span className="font-script text-4xl sm:text-6xl lg:text-7xl text-[#DFB15B] font-normal">Celebration to Life</span>
        </h2>

        <p className="text-base sm:text-lg text-[#FCFBF7]/80 font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
          Share your dates, venue choice, and ceremonial vision. Our founders will respond with personalized concept suggestions and available wedding dates.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={BUSINESS_INFO.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 gold-gradient-bg text-[#2D1115] text-xs font-semibold tracking-wider uppercase rounded-full shadow-xl hover:shadow-[#C59B27]/30 transition-all duration-300 flex items-center gap-2.5 active:scale-95 cursor-pointer group"
          >
            <MessageSquare className="w-4 h-4 text-[#2D1115]" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-[#FCFBF7] border border-[#C59B27]/40 text-xs font-semibold tracking-wider uppercase rounded-full shadow-sm transition-all duration-300 flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#DFB15B]" />
            <span>Direct Call: {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <div className="mt-8 text-xs text-[#FCFBF7]/50 font-sans tracking-wide">
          Prompt Personal Responses via WhatsApp • Hatkeshwar - CTM, Ahmedabad
        </div>

      </div>
    </section>
  );
};
