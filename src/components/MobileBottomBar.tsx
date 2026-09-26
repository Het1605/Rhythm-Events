import React from "react";
import { BUSINESS_INFO } from "../data/business";
import { Phone, MessageSquare, Calendar } from "lucide-react";

export const MobileBottomBar: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#FCFBF7]/95 backdrop-blur-md border-t border-[#C59B27]/30 px-3 py-2.5 shadow-2xl"
      aria-label="Mobile quick actions"
    >
      <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
        {/* CALL */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="min-h-[46px] flex flex-col items-center justify-center gap-1 py-1.5 px-1 bg-[#FAF6F0] active:bg-[#E5D5BA] border border-[#E5D5BA] rounded-xl text-[#2D1115] font-sans text-[11px] font-semibold tracking-wider uppercase transition-colors"
        >
          <Phone className="w-4 h-4 text-[#B3412E]" />
          <span>Call</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={BUSINESS_INFO.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[46px] flex flex-col items-center justify-center gap-1 py-1.5 px-1 bg-[#2D1115] active:bg-[#3D181D] border border-[#C59B27]/40 rounded-xl text-[#DFB15B] font-sans text-[11px] font-bold tracking-wider uppercase transition-colors shadow-sm"
        >
          <MessageSquare className="w-4 h-4 text-[#DFB15B]" />
          <span>WhatsApp</span>
        </a>

        {/* ENQUIRE */}
        <button
          onClick={scrollToContact}
          className="min-h-[46px] flex flex-col items-center justify-center gap-1 py-1.5 px-1 gold-gradient-bg active:opacity-90 rounded-xl text-[#2D1115] font-sans text-[11px] font-bold tracking-wider uppercase transition-colors cursor-pointer shadow-sm"
        >
          <Calendar className="w-4 h-4 text-[#2D1115]" />
          <span>Enquire</span>
        </button>
      </div>
    </div>
  );
};
