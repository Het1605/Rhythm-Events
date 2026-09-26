import React from "react";
import { BUSINESS_INFO } from "../data/business";
import { Phone, MessageSquare, MapPin, Navigation, ArrowUp, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Celebrations", href: "#celebrations" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#481B22] text-[#FFF9F2] pt-16 pb-24 lg:pb-16 border-t border-[#341318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-white">
                Rhythm Events
              </h2>
              <div className="text-xs text-[#E7A63A] font-medium tracking-wider uppercase mt-1">
                Events • Weddings • Celebrations
              </div>
            </div>

            <p className="text-sm text-white/70 font-sans max-w-sm leading-relaxed">
              Ahmedabad-based event planning and management business dedicated to bringing your wedding functions and family milestones to life with thoughtful planning and beautiful décor.
            </p>

            <div className="text-xs text-white/50">
              Khokhra, C.T.M, Ahmedabad, Gujarat
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#E7A63A]">
              Quick Links
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#E7A63A] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Local Directions */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#E7A63A]">
              Contact & Studio
            </div>

            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9513D] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-white/70">
                  {BUSINESS_INFO.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#E7A63A] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-xs font-semibold hover:text-[#E7A63A] transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#65724A] shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:text-[#E7A63A] transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Navigation className="w-4 h-4 text-[#C9513D] shrink-0" />
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#E7A63A] hover:underline inline-flex items-center gap-1"
                >
                  <span>Google Maps ({BUSINESS_INFO.plusCode})</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Rhythm Events. Ahmedabad, Gujarat. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E7A63A]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
