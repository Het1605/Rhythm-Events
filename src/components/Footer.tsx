import React from "react";
import { BUSINESS_INFO } from "../data/business";
import { Phone, MessageSquare, MapPin, Navigation, ArrowUp, ExternalLink, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Atelier", href: "#about" },
    { label: "Bespoke Services", href: "#services" },
    { label: "Sacred Celebrations", href: "#celebrations" },
    { label: "Wedding Portfolio", href: "#gallery" },
    { label: "Enquiry Form", href: "#contact" },
    { label: "Studio Location", href: "#map" },
  ];

  return (
    <footer className="bg-[#240D11] text-[#FCFBF7] pt-20 pb-28 lg:pb-16 border-t border-[#C59B27]/30 relative overflow-hidden">
      {/* Decorative ambient radial gold glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#B3412E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#C59B27]/20">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#DFB15B] font-semibold tracking-widest uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#DFB15B]" />
                <span>WEDDING & EVENT ARCHITECTURE</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#FCFBF7] font-normal tracking-wide">
                RHYTHM EVENTS
              </h2>
              <div className="text-xs text-[#DFB15B]/80 font-serif italic tracking-wider mt-1">
                Ahmedabad • Gujarat
              </div>
            </div>

            <p className="text-sm sm:text-[15px] text-[#FCFBF7]/75 font-sans max-w-sm leading-relaxed">
              Premier event planning atelier dedicated to orchestrating opulent Indian weddings, sacred rituals, and landmark celebrations across Gujarat with timeless artistry.
            </p>

            <div className="text-xs text-[#DFB15B]/70 font-sans tracking-wide">
              Hatkeshwar - CTM Rd, Khokhra, Ahmedabad, Gujarat 380008
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#DFB15B]">
              Atelier Directory
            </div>
            <ul className="space-y-2.5 text-sm font-sans text-[#FCFBF7]/80">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#DFB15B] transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Local Directions */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#DFB15B]">
              Direct Inquiries
            </div>

            <div className="space-y-3.5 text-sm font-sans text-[#FCFBF7]/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#DFB15B] shrink-0 mt-1" />
                <span className="text-xs leading-relaxed text-[#FCFBF7]/75">
                  {BUSINESS_INFO.address.full}
                </span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Phone className="w-4 h-4 text-[#DFB15B] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-xs font-semibold text-[#FCFBF7] hover:text-[#DFB15B] transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#DFB15B] shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FCFBF7] hover:text-[#DFB15B] transition-colors"
                >
                  Direct WhatsApp (+91 87329 61375)
                </a>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Navigation className="w-4 h-4 text-[#DFB15B] shrink-0" />
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#DFB15B] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Google Maps Location ({BUSINESS_INFO.plusCode})</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#FCFBF7]/60">
          <div>
            © {new Date().getFullYear()} Rhythm Events Ahmedabad. All royal rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#DFB15B] transition-colors cursor-pointer text-xs uppercase tracking-wider"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#DFB15B]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
