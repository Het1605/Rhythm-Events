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

  const getBadgeColor = (category: string) => {
    switch (category) {
      case "Haldi Rasam":
        return "bg-[#E7A63A] text-[#481B22]";
      case "Mehendi Rasam":
        return "bg-[#65724A] text-white";
      case "Wedding Mandap":
        return "bg-[#C9513D] text-white";
      case "Sangeet & Garba":
        return "bg-[#481B22] text-[#E7A63A] border border-[#E7A63A]/30";
      case "Reception Décor":
        return "bg-[#481B22] text-white";
      case "Engagement":
        return "bg-[#854D0E] text-white";
      case "Birthday":
        return "bg-[#D97706] text-white";
      case "Corporate":
        return "bg-[#1E3A8A] text-white";
      default:
        return "bg-[#C9513D] text-white";
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FBF6EF] border-t border-[#F1E5D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold tracking-widest text-[#C9513D] uppercase mb-2">
              OUR WEDDING & EVENT PORTFOLIO
            </div>
            <h2 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#481B22] leading-tight">
              A Glimpse Into The Celebrations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#481B22]/70 font-sans">
              Sacred mandaps, Haldi marigold urlis, vibrant Mehendi lounges, and evening party plot setups.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-xl border border-[#E2D2C0] shadow-sm">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? "bg-[#C9513D] text-white shadow-sm"
                    : "text-[#481B22]/70 hover:text-[#481B22] hover:bg-[#F1E5D5]"
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
                className="h-[340px] sm:h-[360px] group relative rounded-2xl overflow-hidden border border-[#E2D2C0] shadow-sm bg-white cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = item.fallbackImage;
                  }}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />

                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm tracking-wide ${getBadgeColor(item.category)}`}>
                    {item.ceremonyBadge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all group-hover:scale-110">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#E7A63A] uppercase tracking-wider mb-1">
                    <span>{item.category}</span>
                    <span className="text-white/40">·</span>
                    <span className="text-white/80 font-normal">{item.location}</span>
                  </div>
                  <h3 className="font-serif-heading font-bold text-lg sm:text-xl text-white leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Real Portfolio */}
        <div className="mt-8 text-center text-xs text-[#481B22]/60 font-sans">
          All images showcase genuine Indian wedding décor, ritual altars, and party plot staging across Ahmedabad & Gujarat venues.
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-[#C9513D] text-white flex items-center justify-center transition-colors cursor-pointer"
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

            <div className="p-6 bg-[#FFF9F2] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#F1E5D5]">
              <div>
                <span className="text-xs font-bold text-[#C9513D] uppercase tracking-wider">
                  {selectedItem.ceremonyBadge} • {selectedItem.location}
                </span>
                <h3 className="font-serif-heading font-bold text-xl text-[#481B22] mt-0.5">
                  {selectedItem.title}
                </h3>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2.5 bg-[#C9513D] hover:bg-[#b84330] text-white text-xs font-semibold rounded-lg text-center transition-colors shrink-0"
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
