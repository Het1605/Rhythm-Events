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
    { label: "Services", href: "#services" },
    { label: "Celebrations", href: "#celebrations" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
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
          ? "bg-[#FFF9F2]/95 backdrop-blur-md shadow-sm border-b border-[#F1E5D5] py-3.5"
          : "bg-[#FFF9F2]/90 backdrop-blur-sm py-4 border-b border-[#F1E5D5]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9513D] rounded-md p-1 -ml-1"
        >
          <div className="flex items-baseline gap-2">
            <span className="font-serif-heading font-bold text-2xl sm:text-2xl tracking-tight text-[#481B22]">
              Rhythm Events
            </span>
            <span className="text-[11px] font-medium tracking-widest uppercase text-[#C9513D] bg-[#F1E5D5] px-2 py-0.5 rounded-full">
              Ahmedabad
            </span>
          </div>
          <span className="text-[11px] text-[#481B22]/60 tracking-wider">
            Events • Weddings • Celebrations
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#481B22]/80">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="hover:text-[#C9513D] transition-colors py-1 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9513D] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#481B22]/90 hover:text-[#C9513D] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9513D]" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="px-5 py-2.5 bg-[#C9513D] hover:bg-[#b84330] text-white text-xs font-semibold tracking-wide rounded-lg transition-all shadow-sm active:scale-95"
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
            className="p-2 text-[#C9513D] hover:bg-[#F1E5D5] rounded-lg transition-colors"
            aria-label="WhatsApp enquiry"
          >
            <MessageSquare className="w-5 h-5" />
          </a>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 text-[#481B22] hover:bg-[#F1E5D5] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9513D]"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#FFF9F2] border-b border-[#F1E5D5] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-base font-medium text-[#481B22] hover:text-[#C9513D] py-1 border-b border-[#F1E5D5]/50 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#C9513D]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="w-full text-center py-3 bg-[#C9513D] text-white font-semibold text-sm rounded-lg"
            >
              Plan Your Event
            </a>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-1.5 py-2.5 bg-white border border-[#F1E5D5] rounded-lg text-[#481B22] font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9513D]" />
                Call Now
              </a>
              <a
                href={BUSINESS_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 bg-[#65724A] text-white rounded-lg font-medium"
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
