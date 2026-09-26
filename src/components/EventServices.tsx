import React from "react";
import { EVENT_SERVICES } from "../data/business";
import { ArrowRight, Sparkles } from "lucide-react";

export const EventServices: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAF6F0] border-t border-[#E5D5BA] relative overflow-hidden">
      {/* Decorative ambient radial gold glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#B3412E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2D1115]/5 border border-[#C59B27]/35 text-[#C59B27] text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>BESPOKE PLANNING & MANAGEMENT</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#2D1115] leading-[1.15] font-normal">
            Bespoke Services For <br />
            <span className="italic font-serif text-[#B3412E]">Extraordinary Occasions.</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-[#5C3A40] font-sans leading-relaxed">
            From intricate mandap architecture to seamless banquet logistics, our Ahmedabad team oversees every facet with royal poise and precision.
          </p>
        </div>

        {/* Clean 2-Column Elevated Service List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 border-t border-[#E5D5BA] pt-12">
          {EVENT_SERVICES.map((service, index) => (
            <div 
              key={service.title} 
              className="flex items-start gap-5 p-6 rounded-2xl bg-[#FCFBF7] border border-[#E5D5BA] hover:border-[#C59B27]/50 hover:shadow-lg hover:shadow-[#C59B27]/10 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2D1115] text-[#DFB15B] border border-[#C59B27]/40 flex items-center justify-center font-serif text-sm font-bold shrink-0 shadow-sm group-hover:scale-105 group-hover:bg-[#B3412E] group-hover:text-white transition-all duration-300">
                0{index + 1}
              </div>

              <div>
                <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#2D1115] mb-2 group-hover:text-[#B3412E] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#5C3A40] leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tailored Consultation CTA Strip */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#2D1115] via-[#38151B] to-[#2D1115] border border-[#C59B27]/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#DFB15B] font-semibold block mb-1">
              Curated Just For You
            </span>
            <h4 className="font-serif-luxury text-2xl sm:text-3xl text-[#FCFBF7]">
              Need tailored arrangements for your family celebration?
            </h4>
            <p className="text-sm text-[#FCFBF7]/75 mt-1 max-w-xl font-sans">
              Every tradition has its own rhythm. We design bespoke floral and production concepts tailored to your exact budget and guest count.
            </p>
          </div>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="relative z-10 px-7 py-3.5 gold-gradient-bg text-[#2D1115] text-xs font-semibold tracking-wider uppercase rounded-full text-center shrink-0 hover:shadow-lg hover:shadow-[#C59B27]/30 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
          >
            <span>Request Bespoke Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
