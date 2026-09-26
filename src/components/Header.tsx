import React, { useState, useEffect } from "react";
import { BUSINESS_INFO } from "../data/business";
import { Phone, MessageSquare, Menu, X, Calendar } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Celebrations", href: "#celebrations" },
    { label: "Timeline", href: "#timeline" },
    { label: "Portfolio", href: "#gallery" },
    { label: "Services", href: "#services" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FCFBF7]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(45,17,21,0.05)] border-b border-[#C59B27]/20 py-3.5"
          : "bg-[#FCFBF7]/90 backdrop-blur-sm py-4 border-b border-[#C59B27]/15"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B27] rounded-md p-1 -ml-1"
        >
          <div className="flex items-baseline gap-2.5">
            <span className="font-serif-luxury font-bold text-2xl sm:text-3xl tracking-tight text-[#2D1115] group-hover:text-[#C59B27] transition-colors">
              Rhythm Events
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C59B27] bg-[#F8F3EB] border border-[#C59B27]/30 px-2 py-0.5 rounded-full">
              Ahmedabad
            </span>
          </div>
          <span className="text-[10px] text-[#5C3A40] tracking-[0.22em] uppercase font-medium mt-0.5">
            Weddings • Mandaps • Celebrations
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-[12px] font-semibold tracking-[0.12em] uppercase text-[#2D1115]/80">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="hover:text-[#C59B27] transition-colors py-1 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C59B27] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#2D1115] hover:text-[#C59B27] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="px-5 py-2.5 gold-gradient-bg text-[#2D1115] font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-sm hover:shadow-[0_4px_20px_rgba(197,155,39,0.35)] active:scale-95"
          >
            Plan Your Event
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={BUSINESS_INFO.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#DFB15B] hover:bg-[#2D1115]/5 rounded-lg transition-colors"
            aria-label="WhatsApp enquiry"
          >
            <MessageSquare className="w-5 h-5" />
          </a>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 text-[#2D1115] hover:bg-[#2D1115]/5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B27]"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#FCFBF7] border-b border-[#E5D5BA] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-sm font-semibold tracking-wider uppercase text-[#2D1115] hover:text-[#C59B27] py-2 border-b border-[#E5D5BA]/50 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#C59B27]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="w-full text-center py-3.5 gold-gradient-bg text-[#2D1115] font-bold text-xs tracking-wider uppercase rounded-xl shadow-md active:scale-98"
            >
              Plan Your Event
            </a>

            <div className="grid grid-cols-2 gap-2 text-xs font-sans">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-1.5 py-2.5 bg-white border border-[#E5D5BA] rounded-xl text-[#2D1115] font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-[#B3412E]" />
                Call Now
              </a>
              <a
                href={BUSINESS_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 bg-[#2D1115] border border-[#C59B27]/40 text-[#DFB15B] rounded-xl font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
