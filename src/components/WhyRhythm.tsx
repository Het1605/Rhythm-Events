import React from "react";
import { HeartHandshake, Layers, PhoneCall } from "lucide-react";

export const WhyRhythm: React.FC = () => {
  const pillars = [
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#C9513D]" />,
      title: "Your Vision First",
      description: "Every celebration starts by understanding what you’re planning, your family’s traditions, and how you want your guests to feel."
    },
    {
      icon: <Layers className="w-6 h-6 text-[#E7A63A]" />,
      title: "Details That Come Together",
      description: "Planning, décor, sound, lighting, and timeline coordination should work as one seamless experience rather than disjointed pieces."
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-[#65724A]" />,
      title: "Someone To Call",
      description: "Direct, transparent communication before, during, and after the event. You always have a dedicated coordinator accountable on-site."
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FFF9F2] border-t border-[#F1E5D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest text-[#C9513D] uppercase mb-2">
            WHY RHYTHM EVENTS
          </div>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#481B22] leading-tight">
            Your Event Should Feel Like You.
          </h2>
          <p className="mt-3 text-base text-[#481B22]/70 font-sans">
            No cookie-cutter packages. We take care of the heavy lifting so you can cherish the moment.
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white p-8 rounded-2xl border border-[#E2D2C0] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFF9F2] border border-[#F1E5D5] flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="font-serif-heading font-bold text-xl sm:text-2xl text-[#481B22] mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#481B22]/75 leading-relaxed font-sans">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
