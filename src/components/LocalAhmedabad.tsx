import React from "react";
import { BUSINESS_INFO } from "../data/business";
import { MapPin, Navigation, Phone, ExternalLink } from "lucide-react";

export const LocalAhmedabad: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#FBF6EF] border-t border-[#F1E5D5] relative overflow-hidden">
      {/* Subtle traditional Gujarati jali/arch geometric pattern in background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C9513D_1px,transparent_1px)] [background-size:20px_20px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E2D2C0] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Local Identity */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1E5D5] text-[#C9513D] text-xs font-semibold tracking-wider uppercase mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>BASED IN AHMEDABAD</span>
            </div>

            <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#481B22] leading-tight mb-4">
              Celebrating Ahmedabad, <br />
              <span className="text-[#C9513D]">One Event At A Time.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#481B22]/80 font-sans leading-relaxed mb-6">
              Based in CTM, Ahmedabad, Rhythm Events is here for celebrations across Ahmedabad and surrounding areas. We work with families and venues across Gandhinagar, SG Highway, Bopal, Maninagar, Khokhra, and Gujarat.
            </p>

            {/* Address & Plus Code Card */}
            <div className="p-5 rounded-xl bg-[#FFF9F2] border border-[#F1E5D5] space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9513D] shrink-0 mt-0.5" />
                <div className="text-sm font-sans text-[#481B22]">
                  <strong className="block font-semibold">Rhythm Events Studio Address:</strong>
                  <p className="text-[#481B22]/80 mt-0.5">{BUSINESS_INFO.address.full}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#F1E5D5] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="font-mono text-[#481B22]/70">
                  <span className="font-semibold text-[#481B22]">Google Plus Code:</span> {BUSINESS_INFO.plusCode}
                </div>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#C9513D] hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Key Local Advantages */}
          <div className="lg:col-span-5 bg-[#FFF9F2] p-6 sm:p-8 rounded-2xl border border-[#F1E5D5] space-y-5">
            <div className="text-xs font-bold tracking-widest text-[#481B22]/50 uppercase">
              LOCAL EVENT EXPERTISE
            </div>

            <div className="space-y-4 text-sm text-[#481B22]">
              <div className="pb-3 border-b border-[#F1E5D5]">
                <strong className="block font-semibold text-[#481B22]">Party Plots & Banquet Familiarity</strong>
                <span className="text-xs text-[#481B22]/70">
                  Knowledge of local lawn permissions, sound cutoff timings, and electrical logistics across Ahmedabad.
                </span>
              </div>

              <div className="pb-3 border-b border-[#F1E5D5]">
                <strong className="block font-semibold text-[#481B22]">Trusted Vendor Network</strong>
                <span className="text-xs text-[#481B22]/70">
                  Fresh flower sourcing, specialized Gujarati catering coordination, and professional local sound & light crew.
                </span>
              </div>

              <div>
                <strong className="block font-semibold text-[#481B22]">Accessible On-Ground Support</strong>
                <span className="text-xs text-[#481B22]/70">
                  Meet our planning team directly in Ahmedabad to discuss your celebration in person.
                </span>
              </div>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full py-3 bg-[#481B22] hover:bg-[#341318] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E7A63A]" />
              <span>Call Us: {BUSINESS_INFO.phone}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
