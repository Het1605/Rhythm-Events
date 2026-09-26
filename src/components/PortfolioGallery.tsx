import React, { useState } from "react";
import { GALLERY_ITEMS, GalleryItem } from "../data/events";
import { Eye, X, ZoomIn, MapPin, Sparkles } from "lucide-react";

export const PortfolioGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters = [
    "All",
    "Wedding Mandap",
    "Haldi Rasam",
    "Mehendi Rasam",
    "Sangeet & Garba",
    "Reception Décor",
    "Engagement",
    "Birthday",
    "Corporate"
  ];

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FCFBF7] border-t border-[#C59B27]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F3EB] border border-[#C59B27]/30 text-[#C59B27] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              <span>OUR CELEBRATION PORTFOLIO</span>
            </div>
            <h2 className="font-serif-luxury font-bold text-3xl sm:text-5xl text-[#2D1115] leading-tight">
              A Glimpse Into The Celebrations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5C3A40] font-sans">
              Sacred Lagna mandaps, Haldi marigold urlis, vibrant Mehendi lounges, and evening party plot setups.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 p-1.5 bg-white rounded-2xl border border-[#C59B27]/25 shadow-sm overflow-x-auto max-w-full pb-2 sm:pb-1.5 sm:flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeFilter === filter
                    ? "gold-gradient-bg text-[#2D1115] font-bold shadow-sm"
                    : "text-[#5C3A40] hover:text-[#2D1115] hover:bg-[#F8F3EB]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Uniform Structured Grid (Every Card Perfectly Aligned & Sized) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="h-[340px] sm:h-[360px] group relative rounded-2xl overflow-hidden border border-[#C59B27]/30 shadow-sm bg-white cursor-pointer transition-all duration-500 hover:shadow-[0_16px_36px_rgba(45,17,21,0.12),0_0_0_1px_rgba(197,155,39,0.35)] hover:-translate-y-1.5"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = item.fallbackImage;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />

                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1115]/95 via-[#2D1115]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm tracking-wide bg-[#2D1115]/85 border border-[#C59B27]/30 text-[#DFB15B]">
                    {item.ceremonyBadge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all group-hover:gold-gradient-bg group-hover:text-[#2D1115]">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#DFB15B] uppercase tracking-wider mb-1">
                    <span>{item.category}</span>
                    <span className="text-white/40">·</span>
                    <span className="text-white/80 font-normal">{item.location}</span>
                  </div>
                  <h3 className="font-serif-luxury font-bold text-lg sm:text-xl text-white leading-snug line-clamp-2 drop-shadow">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Real Portfolio */}
        <div className="mt-8 text-center text-xs text-[#5C3A40] font-sans">
          All images showcase genuine Indian wedding décor, ritual mandaps, and party plot staging across Ahmedabad & Gujarat venues.
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-[#2D1115]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#C59B27]/40 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#2D1115]/80 hover:gold-gradient-bg hover:text-[#2D1115] text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={selectedItem.image}
                alt={selectedItem.alt}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = selectedItem.fallbackImage;
                }}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-[#FCFBF7] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#C59B27]/20">
              <div>
                <span className="text-xs font-bold text-[#C59B27] uppercase tracking-wider">
                  {selectedItem.ceremonyBadge} • {selectedItem.location}
                </span>
                <h3 className="font-serif-luxury font-bold text-2xl text-[#2D1115] mt-0.5">
                  {selectedItem.title}
                </h3>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedItem(null)}
                className="px-6 py-3 gold-gradient-bg text-[#2D1115] text-xs font-bold uppercase tracking-wider rounded-xl text-center transition-all shadow-sm hover:shadow-md shrink-0"
              >
                Inquire For This Ceremony →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
