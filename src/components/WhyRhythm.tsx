import React from "react";
import { HeartHandshake, Sparkles, PhoneCall, ShieldCheck } from "lucide-react";

export const WhyRhythm: React.FC = () => {
  const pillars = [
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#C59B27]" />,
      title: "Your Sacred Vision First",
      description: "Every celebration begins by honoring your family’s traditions, rituals, and aesthetic aspirations. We listen attentively and bring your dreams into opulent reality."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#DFB15B]" />,
      title: "Harmonious Orchestration",
      description: "Floral architecture, dramatic lighting, Vedic ceremonial mandaps, and hospitality timelines coordinated in sublime synchrony rather than disconnected elements."
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-[#B3412E]" />,
      title: "Personal Accountability",
      description: "Direct, transparent communication from initial concept to the final farewell bidai. Your dedicated senior director is present on-site throughout your wedding."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF6F0] border-t border-[#E5D5BA] relative overflow-hidden">
      {/* Decorative ambient radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2D1115]/5 border border-[#C59B27]/35 text-[#C59B27] text-xs font-semibold tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>THE RHYTHM DISTINCTION</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#2D1115] leading-[1.15] font-normal">
            Your Celebration Should Be <br />
            <span className="font-serif italic text-[#B3412E]">Uniquely Yours.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#5C3A40] font-sans leading-relaxed">
            No cookie-cutter templates. We handle every complex logistical layer so you and your family can immerse yourselves in the joyous moments.
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-[#FCFBF7] p-8 sm:p-10 rounded-3xl border border-[#E5D5BA] hover:border-[#C59B27]/50 hover:shadow-xl hover:shadow-[#C59B27]/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#2D1115] border border-[#C59B27]/40 flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-300 shadow-md">
                {pillar.icon}
              </div>

              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#2D1115] mb-3 group-hover:text-[#B3412E] transition-colors">
                {pillar.title}
              </h3>

              <p className="text-sm sm:text-[15px] text-[#5C3A40] leading-relaxed font-sans">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
