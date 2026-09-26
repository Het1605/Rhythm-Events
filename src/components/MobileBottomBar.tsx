import React from "react";
import { BUSINESS_INFO } from "../data/business";
import { Phone, MessageSquare, Calendar } from "lucide-react";

export const MobileBottomBar: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-[#E2D2C0] px-3 py-2 shadow-lg"
      aria-label="Mobile quick actions"
    >
      <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
        {/* CALL */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="min-h-[48px] flex flex-col items-center justify-center gap-1 py-1.5 px-1 bg-[#FFF9F2] active:bg-[#F1E5D5] border border-[#E2D2C0] rounded-xl text-[#481B22] font-sans text-[11px] font-semibold tracking-wide transition-colors"
        >
          <Phone className="w-4 h-4 text-[#C9513D]" />
          <span>Call</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={BUSINESS_INFO.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[48px] flex flex-col items-center justify-center gap-1 py-1.5 px-1 bg-[#65724A] active:bg-[#525e3b] rounded-xl text-white font-sans text-[11px] font-bold tracking-wide transition-colors shadow-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* ENQUIRE */}
        <button
          onClick={scrollToContact}
          className="min-h-[48px] flex flex-col items-center justify-center gap-1 py-1.5 px-1 bg-[#C9513D] active:bg-[#b84330] rounded-xl text-white font-sans text-[11px] font-semibold tracking-wide transition-colors cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span>Enquire</span>
        </button>
      </div>
    </div>
  );
};
