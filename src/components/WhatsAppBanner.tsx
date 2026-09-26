import React from "react";
import { BUSINESS_INFO } from "../data/business";
import { MessageSquare, Phone, ArrowUpRight } from "lucide-react";

export const WhatsAppBanner: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F1E5D5] border-t border-[#E2D2C0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-[#C9513D] text-xs font-semibold tracking-wider uppercase mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E7A63A]" />
          <span>PLANNING SOMETHING SPECIAL?</span>
        </div>

        <h2 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#481B22] leading-tight mb-4">
          Let’s talk about your event.
        </h2>

        <p className="text-base sm:text-lg text-[#481B22]/80 font-sans max-w-2xl mx-auto mb-8">
          Share your event date, location and what you’re planning. Start the conversation directly with the Rhythm Events team in Ahmedabad.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={BUSINESS_INFO.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-[#65724A] hover:bg-[#525e3b] text-white text-sm font-semibold tracking-wide rounded-xl shadow-md transition-all flex items-center gap-2.5 active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="px-7 py-3.5 bg-white hover:bg-[#FFF9F2] text-[#481B22] border border-[#E2D2C0] text-sm font-semibold rounded-xl shadow-sm transition-all flex items-center gap-2 active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#C9513D]" />
            <span>Call Now: {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <div className="mt-6 text-xs text-[#481B22]/60 font-sans">
          Fast response via WhatsApp • Based in CTM, Ahmedabad
        </div>

      </div>
    </section>
  );
};
