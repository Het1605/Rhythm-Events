import React, { useState } from "react";
import { WEDDING_JOURNEY } from "../data/business";
import { Sparkles, ArrowRight, Check } from "lucide-react";

export const WeddingJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1); // default on Haldi to highlight it

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const getStepColor = (index: number) => {
    switch (index) {
      case 0:
        return "bg-[#F1E5D5] text-[#481B22]";
      case 1:
        return "bg-[#E7A63A] text-[#481B22]"; // Haldi Yellow
      case 2:
        return "bg-[#65724A] text-white"; // Mehendi Green
      case 3:
        return "bg-[#481B22] text-[#E7A63A]"; // Sangeet Purple/Maroon
      case 4:
        return "bg-[#C9513D] text-white"; // Mandap Red
      case 5:
        return "bg-[#481B22] text-white"; // Reception
      default:
        return "bg-[#C9513D] text-white";
    }
  };

  return (
    <section id="timeline" className="py-20 sm:py-28 bg-[#FCFBF7] border-t border-[#C59B27]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8F3EB] border border-[#C59B27]/30 text-[#C59B27] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <span>AUTHENTIC GUJARATI WEDDING SEQUENCE</span>
          </div>

          <h2 className="font-serif-luxury font-bold text-3xl sm:text-5xl text-[#2D1115] leading-tight">
            One Sacred Union. <br className="sm:hidden" />
            <span className="font-script text-[#C59B27] font-normal text-[1.15em] block sm:inline">
              Many Timeless Celebrations.
            </span>
          </h2>

          <p className="mt-4 text-base text-[#5C3A40] font-sans max-w-2xl mx-auto leading-relaxed">
            From intimate Haldi pithi rituals and colourful Mehendi afternoons to high-energy Garba Sangeet and the sacred Lagna Mandap — every function has its own distinct décor and sacred atmosphere.
          </p>
        </div>

        {/* DESKTOP VIEW: Horizontal Sequence Connected by a Golden Filament */}
        <div className="hidden lg:block relative my-8">
          {/* Gold Filament Line Connecting Functions */}
          <div className="absolute top-[88px] left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#C59B27]/60 to-transparent z-0" />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {WEDDING_JOURNEY.map((item, index) => {
              const isSelected = activeStep === index;
              return (
                <div
                  key={item.step}
                  onMouseEnter={() => setActiveStep(index)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Circular Step Indicator on Top of Gold Line */}
                  <div
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all duration-300 mb-6 bg-white ${
                      isSelected
                        ? "border-[#C59B27] text-[#2D1115] gold-gradient-bg shadow-md scale-110 ring-4 ring-[#C59B27]/30"
                        : "border-[#C59B27]/40 text-[#5C3A40] group-hover:border-[#C59B27] group-hover:text-[#2D1115]"
                    }`}
                  >
                    {item.step}
                  </div>

                  {/* Thumbnail Image Card with Hover Enlarge */}
                  <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-[#C59B27]/30 shadow-sm mb-3 bg-white relative transition-all duration-300 group-hover:shadow-[0_8px_20px_rgba(197,155,39,0.2)]">
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = item.fallbackImage;
                      }}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isSelected ? "scale-108" : "group-hover:scale-105"
                      }`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D1115]/90 via-[#2D1115]/20 to-transparent" />
                    
                    {/* Explicit Ceremony Tag */}
                    <div className="absolute top-2 left-2 right-2 flex justify-center">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded shadow-sm bg-[#2D1115]/85 border border-[#C59B27]/30 text-[#DFB15B]">
                        {item.name} Rasam
                      </span>
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-semibold text-center drop-shadow">
                      {item.gujaratiTitle}
                    </div>
                  </div>

                  {/* Titles */}
                  <h3 className="font-serif-luxury font-bold text-lg text-[#2D1115] group-hover:text-[#C59B27] transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#C59B27] mt-0.5">
                    {item.gujaratiTitle}
                  </div>
                  <p className="text-[11px] text-[#5C3A40] mt-1 line-clamp-2 px-1 font-sans">
                    {item.ceremonyHighlight}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Highlight Card on Desktop */}
        <div className="hidden lg:block mt-8 p-6 bg-white rounded-2xl border border-[#C59B27]/40 shadow-sm max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold gold-gradient-bg text-[#2D1115] shadow-sm">
                Phase {WEDDING_JOURNEY[activeStep].step} • {WEDDING_JOURNEY[activeStep].name}
              </span>
              <span className="font-serif-luxury font-bold text-lg text-[#2D1115]">
                {WEDDING_JOURNEY[activeStep].gujaratiTitle}
              </span>
            </div>
            <span className="text-xs text-[#C59B27] font-semibold tracking-wide">
              {WEDDING_JOURNEY[activeStep].tagline}
            </span>
          </div>
          <p className="mt-2 text-sm text-[#5C3A40] font-sans leading-relaxed">
            {WEDDING_JOURNEY[activeStep].description}
          </p>
        </div>

        {/* MOBILE VIEW: Clean Vertical Timeline */}
        <div className="block lg:hidden relative pl-6 border-l-2 border-[#E7A63A] space-y-6 my-6">
          {WEDDING_JOURNEY.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Timeline Node */}
              <div className="absolute -left-[31px] top-1 w-6 h-6 rounded-full bg-[#FFF9F2] border-2 border-[#C9513D] flex items-center justify-center text-[10px] font-bold text-[#C9513D]">
                {item.step}
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E2D2C0] shadow-sm flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = item.fallbackImage;
                  }}
                  className="w-20 h-20 rounded-lg object-cover shrink-0"
                  loading="lazy"
                />
                <div>
                  <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded mb-1 ${getStepColor(index)}`}>
                    {item.name} Rasam
                  </span>
                  <h3 className="font-serif-heading font-bold text-base text-[#481B22]">
                    {item.gujaratiTitle}
                  </h3>
                  <p className="text-xs text-[#481B22]/70 mt-0.5">
                    {item.ceremonyHighlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#481B22]/70 font-sans mb-4">
            Whether you need planning for a single function or full multi-day coordination in Ahmedabad:
          </p>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#481B22] hover:bg-[#341318] text-white text-xs font-semibold rounded-lg transition-all"
          >
            <span>Discuss Your Wedding Functions</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E7A63A]" />
          </a>
        </div>

      </div>
    </section>
  );
};
