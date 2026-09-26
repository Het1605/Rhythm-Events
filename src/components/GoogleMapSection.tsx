import React from "react";
import { BUSINESS_INFO } from "../data/business";
import { MapPin, Navigation, Phone, MessageSquare, Clock, ExternalLink } from "lucide-react";

export const GoogleMapSection: React.FC = () => {
  return (
    <section id="map" className="py-20 sm:py-24 bg-[#FFF9F2] border-t border-[#F1E5D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1E5D5] text-[#C9513D] text-xs font-semibold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>STUDIO LOCATION</span>
          </div>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#481B22] leading-tight">
            Find Us In Ahmedabad
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#481B22]/75 font-sans">
            Visit our event planning studio to discuss your wedding mandap, decor concepts, and celebration timelines in person.
          </p>
        </div>

        {/* Studio Info + Google Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Location Details Card */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2D2C0] shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Studio Name & Badge */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E7A63A] block mb-1">
                  Rhythm Events Studio
                </span>
                <h3 className="font-serif-heading font-bold text-2xl text-[#481B22]">
                  Ahmedabad Headquarters
                </h3>
              </div>

              {/* Full Address */}
              <div className="flex items-start gap-3 text-sm text-[#481B22]">
                <MapPin className="w-5 h-5 text-[#C9513D] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold">Address</strong>
                  <p className="text-[#481B22]/80 mt-0.5 leading-relaxed text-xs sm:text-sm">
                    {BUSINESS_INFO.address.full}
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3 text-sm text-[#481B22]">
                <Clock className="w-5 h-5 text-[#65724A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold">Consultation Hours</strong>
                  <p className="text-[#481B22]/80 mt-0.5 text-xs sm:text-sm">
                    Monday to Sunday: 9:00 AM – 9:00 PM <br />
                    <span className="text-xs text-[#65724A] font-medium">(In-person or phone consultations)</span>
                  </p>
                </div>
              </div>

              {/* Plus Code */}
              <div className="p-3.5 bg-[#FFF9F2] rounded-xl border border-[#F1E5D5] text-xs">
                <span className="font-semibold text-[#481B22] block mb-0.5">Google Plus Code:</span>
                <code className="text-[#C9513D] font-mono font-medium">{BUSINESS_INFO.plusCode}</code>
              </div>

            </div>

            {/* Quick CTAs */}
            <div className="pt-6 border-t border-[#F1E5D5] space-y-3 mt-6">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#C9513D] hover:bg-[#b84330] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="py-2.5 px-3 bg-white hover:bg-[#FFF9F2] border border-[#E2D2C0] text-[#481B22] text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E7A63A]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#128C7E] text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-8 bg-white rounded-3xl overflow-hidden border border-[#E2D2C0] shadow-sm min-h-[380px] sm:min-h-[460px] relative">
            <iframe
              title="Rhythm Events Ahmedabad Location Map"
              src="https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sHatkeshwar+Depot+Ahmedabad+Gujarat"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px" }}
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
