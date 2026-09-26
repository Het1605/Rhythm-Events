import React from "react";
import { EVENT_SERVICES } from "../data/business";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const EventServices: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FFF9F2] border-t border-[#F1E5D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-widest text-[#C9513D] uppercase mb-2">
            OUR EVENT SERVICES
          </div>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#481B22] leading-tight">
            Everything Your Event Needs
          </h2>
          <p className="mt-3 text-base text-[#481B22]/75 font-sans">
            Comprehensive planning, décor design, and on-ground coordination for Ahmedabad families and businesses.
          </p>
        </div>

        {/* Clean 2-Column List (No Card Overload) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-[#F1E5D5] pt-10">
          {EVENT_SERVICES.map((service, index) => (
            <div key={service.title} className="flex items-start gap-4 group">
              <div className="w-8 h-8 rounded-full bg-[#F1E5D5] text-[#C9513D] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 group-hover:bg-[#C9513D] group-hover:text-white transition-colors">
                0{index + 1}
              </div>

              <div>
                <h3 className="font-serif-heading font-bold text-xl sm:text-2xl text-[#481B22] mb-1.5 group-hover:text-[#C9513D] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#481B22]/75 leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tailored Consultation CTA Strip */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#FBF6EF] border border-[#E2D2C0] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-serif-heading font-bold text-xl text-[#481B22]">
              Need customized services for your function?
            </h4>
            <p className="text-xs sm:text-sm text-[#481B22]/70 mt-1">
              Every celebration is unique. We tailor our packages around your specific requirements and budget.
            </p>
          </div>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="px-6 py-3 bg-[#C9513D] hover:bg-[#b84330] text-white text-xs font-semibold rounded-xl text-center shrink-0 transition-all flex items-center justify-center gap-2"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
