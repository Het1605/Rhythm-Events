import React from "react";
import { BUSINESS_INFO } from "../data/business";
import { MapPin, Navigation, Phone, ExternalLink, Compass } from "lucide-react";

export const LocalAhmedabad: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF6F0] border-t border-[#E5D5BA] relative overflow-hidden">
      {/* Subtle traditional gold shimmer in background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C59B27_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#FCFBF7] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E5D5BA] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Local Heritage Identity */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2D1115]/5 border border-[#C59B27]/35 text-[#C59B27] text-xs font-semibold tracking-widest uppercase mb-4">
              <Compass className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>BORN & BASED IN AHMEDABAD</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#2D1115] leading-[1.15] font-normal mb-5">
              Celebrating Heritage, <br />
              <span className="font-serif italic text-[#B3412E]">One Sacred Occasion At A Time.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5C3A40] font-sans leading-relaxed mb-8">
              Based in CTM, Ahmedabad, Rhythm Events orchestrates magnificent celebrations across Gujarat. We work closely with renowned banquet venues, royal heritage palaces, and party plots across Gandhinagar, SG Highway, Bopal, Sindhu Bhavan, Maninagar, and Khokhra.
            </p>

            {/* Address & Plus Code Card */}
            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E5D5BA] space-y-4">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#B3412E] shrink-0 mt-0.5" />
                <div className="text-sm font-sans text-[#2D1115]">
                  <strong className="block font-semibold font-serif-luxury text-base text-[#2D1115]">Rhythm Events Studio:</strong>
                  <p className="text-[#5C3A40] mt-0.5 leading-relaxed">{BUSINESS_INFO.address.full}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E5D5BA] flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
                <div className="text-[#5C3A40]">
                  <span className="font-semibold text-[#2D1115]">Google Plus Code:</span>{" "}
                  <code className="px-2 py-0.5 rounded bg-[#2D1115]/5 border border-[#C59B27]/30 text-[#C59B27] font-mono font-medium">
                    {BUSINESS_INFO.plusCode}
                  </code>
                </div>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#B3412E] hover:text-[#2D1115] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Key Local Advantages */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#2D1115] to-[#1E0B0E] p-8 sm:p-10 rounded-2xl border border-[#C59B27]/35 text-[#FCFBF7] space-y-6 shadow-xl">
            <div className="text-xs font-semibold tracking-widest text-[#DFB15B] uppercase">
              LOCAL WEDDING EXPERTISE
            </div>

            <div className="space-y-5 text-sm">
              <div className="pb-4 border-b border-white/10">
                <strong className="block font-serif-luxury text-lg text-[#FCFBF7] font-normal mb-1">
                  Party Plots & Banquet Mastery
                </strong>
                <span className="text-xs sm:text-[13px] text-[#FCFBF7]/75 font-sans leading-relaxed block">
                  Intimate knowledge of municipal lawn clearances, sound curfew timings, and production logistics across Ahmedabad & Gandhinagar.
                </span>
              </div>

              <div className="pb-4 border-b border-white/10">
                <strong className="block font-serif-luxury text-lg text-[#FCFBF7] font-normal mb-1">
                  Artisan & Vendor Guild
                </strong>
                <span className="text-xs sm:text-[13px] text-[#FCFBF7]/75 font-sans leading-relaxed block">
                  Exclusive relationships with fresh Marigold/Mogra flower mandis, heritage craftspeople, Gujarati royal caterers, and lighting crews.
                </span>
              </div>

              <div>
                <strong className="block font-serif-luxury text-lg text-[#FCFBF7] font-normal mb-1">
                  Dedicated On-Ground Coordination
                </strong>
                <span className="text-xs sm:text-[13px] text-[#FCFBF7]/75 font-sans leading-relaxed block">
                  Sit down with our planning team directly in Ahmedabad to review physical fabric samples, stage mockups, and run-of-show schedules.
                </span>
              </div>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full py-3.5 gold-gradient-bg text-[#2D1115] text-xs font-semibold tracking-wider uppercase rounded-full flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#C59B27]/30 transition-all active:scale-95 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#2D1115]" />
              <span>Call Studio: {BUSINESS_INFO.phone}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
