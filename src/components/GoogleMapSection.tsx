import React from "react";
import { BUSINESS_INFO } from "../data/business";
import { MapPin, Navigation, Phone, MessageSquare, Clock, ExternalLink, Compass } from "lucide-react";

export const GoogleMapSection: React.FC = () => {
  return (
    <section id="map" className="py-24 sm:py-32 bg-[#FAF6F0] border-t border-[#E5D5BA] relative overflow-hidden">
      {/* Decorative ambient radial gold glow */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-96 h-96 bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2D1115]/5 border border-[#C59B27]/35 text-[#C59B27] text-xs font-semibold tracking-widest uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>VISIT OUR AHMEDABAD STUDIO</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#2D1115] leading-[1.15] font-normal">
            Studio Location & Map
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5C3A40] font-sans leading-relaxed">
            Visit our event design studio to experience fabric textures, floral arrangements, and stage decor portfolios over a warm cup of Gujarati chai.
          </p>
        </div>

        {/* Studio Info + Google Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Location Details Card */}
          <div className="lg:col-span-4 bg-[#FCFBF7] rounded-3xl p-7 sm:p-9 border border-[#E5D5BA] shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Studio Name & Badge */}
              <div className="border-b border-[#E5D5BA] pb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] block mb-1 font-sans">
                  Planning Headquarters
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#2D1115]">
                  Rhythm Events Studio
                </h3>
              </div>

              {/* Full Address */}
              <div className="flex items-start gap-3.5 text-sm text-[#2D1115]">
                <MapPin className="w-5 h-5 text-[#B3412E] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold font-serif-luxury text-base text-[#2D1115]">Studio Address</strong>
                  <p className="text-[#5C3A40] mt-0.5 leading-relaxed text-xs sm:text-sm font-sans">
                    {BUSINESS_INFO.address.full}
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3.5 text-sm text-[#2D1115]">
                <Clock className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold font-serif-luxury text-base text-[#2D1115]">Consultation Timings</strong>
                  <p className="text-[#5C3A40] mt-0.5 text-xs sm:text-sm font-sans leading-relaxed">
                    Monday to Sunday: 9:00 AM – 9:00 PM <br />
                    <span className="text-xs text-[#C59B27] font-medium font-sans">(In-person or WhatsApp audio/video)</span>
                  </p>
                </div>
              </div>

              {/* Plus Code */}
              <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E5D5BA] text-xs font-sans">
                <span className="font-semibold text-[#2D1115] block mb-1">Google Plus Code:</span>
                <code className="text-[#B3412E] font-mono font-medium text-sm">{BUSINESS_INFO.plusCode}</code>
              </div>

            </div>

            {/* Quick CTAs */}
            <div className="pt-6 border-t border-[#E5D5BA] space-y-3 mt-6">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 gold-gradient-bg text-[#2D1115] text-xs font-semibold tracking-wider uppercase rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-[#C59B27]/30 transition-all active:scale-98 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#2D1115]" />
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="py-3 px-3 bg-white hover:bg-[#FAF6F0] border border-[#E5D5BA] text-[#2D1115] text-xs font-semibold tracking-wider uppercase rounded-full flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B3412E]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 bg-[#2D1115] hover:bg-[#3D181D] text-[#DFB15B] border border-[#C59B27]/40 text-xs font-semibold tracking-wider uppercase rounded-full flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#DFB15B]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-8 bg-white rounded-3xl overflow-hidden border border-[#E5D5BA] shadow-xl min-h-[380px] sm:min-h-[460px] relative">
            <iframe
              title="Rhythm Events Ahmedabad Location Map"
              src="https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sHatkeshwar+Depot+Ahmedabad+Gujarat"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "440px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
