import React from "react";
import { QUICK_CATEGORIES } from "../data/business";
import { Sparkles, Flame, Sun, Flower2, Music, PartyPopper } from "lucide-react";

export const CategoryStrip: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "wedding":
        return <Flame className="w-4 h-4 text-[#C9513D]" />;
      case "engagement":
        return <Sparkles className="w-4 h-4 text-[#E7A63A]" />;
      case "haldi":
        return <Sun className="w-4 h-4 text-[#E7A63A]" />;
      case "mehendi":
        return <Flower2 className="w-4 h-4 text-[#65724A]" />;
      case "sangeet":
        return <Music className="w-4 h-4 text-[#481B22]" />;
      case "reception":
        return <PartyPopper className="w-4 h-4 text-[#C9513D]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#C9513D]" />;
    }
  };

  const handleCategoryClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById("celebrations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#FFFFFF] border-y border-[#C59B27]/20 py-4 sm:py-5 px-4 sm:px-6 shadow-[0_2px_10px_rgba(45,17,21,0.03)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto scrollbar-none py-1">
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C59B27] shrink-0 hidden md:block">
          Sacred Ceremonies:
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3.5 justify-between w-full md:w-auto">
          {QUICK_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#celebrations-${cat.id}`}
              onClick={(e) => handleCategoryClick(e, cat.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FCFBF7] hover:bg-[#F8F3EB] border border-[#C59B27]/25 hover:border-[#C59B27] hover:shadow-[0_2px_12px_rgba(197,155,39,0.18)] transition-all shrink-0 group text-xs font-semibold tracking-wide text-[#2D1115]"
            >
              {getIcon(cat.id)}
              <span className="group-hover:text-[#C59B27] transition-colors whitespace-nowrap">
                {cat.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
