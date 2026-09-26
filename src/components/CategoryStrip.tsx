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
    <section className="bg-white border-y border-[#F1E5D5] py-4 sm:py-5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto scrollbar-none py-1">
        <div className="text-xs font-bold uppercase tracking-wider text-[#481B22]/60 shrink-0 hidden md:block">
          Gujarat Celebrations:
        </div>

        <div className="flex items-center gap-2.5 sm:gap-4 justify-between w-full md:w-auto">
          {QUICK_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#celebrations-${cat.id}`}
              onClick={(e) => handleCategoryClick(e, cat.id)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFF9F2] hover:bg-[#F1E5D5] border border-[#F1E5D5] transition-all shrink-0 group text-xs sm:text-sm font-semibold text-[#481B22]"
            >
              {getIcon(cat.id)}
              <span className="group-hover:text-[#C9513D] transition-colors whitespace-nowrap">
                {cat.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
