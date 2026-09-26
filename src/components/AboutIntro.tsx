import React from "react";
import { EVENT_IMAGES } from "../data/images";
import { ArrowRight, Check } from "lucide-react";

export const AboutIntro: React.FC = () => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FCFBF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Vertical Indian Wedding Mandap Setup */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle Warm Layer Accent */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#C59B27]/20 via-[#F8F3EB] to-transparent rounded-3xl transform -rotate-1 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] bg-white border border-[#C59B27]/30">
                <img
                  src={EVENT_IMAGES.about.url}
                  alt={EVENT_IMAGES.about.alt}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = EVENT_IMAGES.about.fallbackUrl;
                  }}
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1115]/85 via-[#2D1115]/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] font-semibold text-[#DFB15B] uppercase tracking-[0.2em] block mb-1">
                    Bespoke Mandap Architecture
                  </span>
                  <span className="font-serif-luxury font-bold text-xl block text-white drop-shadow">
                    Sacred Heritage Mandap Décor
                  </span>
                  <span className="text-white/80 text-xs font-sans mt-0.5 block">
                    Tailored to your family rituals across Ahmedabad
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F3EB] border border-[#C59B27]/30 text-[#C59B27] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              <span>ABOUT RHYTHM EVENTS</span>
            </div>

            <h2 className="font-serif-luxury font-bold text-3xl sm:text-5xl text-[#2D1115] leading-tight mb-6">
              You cherish the celebration. <br />
              <span className="font-script text-[#C59B27] font-normal text-[1.15em] block sm:inline">
                We orchestrate every sacred detail.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#5C3A40] leading-relaxed font-sans mb-8">
              <p>
                Rhythm Events is an Ahmedabad-based luxury event planning studio dedicated to helping families and organizations craft seamless celebrations — from grand Lagna mandaps and high-energy Sangeet nights to intimate Sagai ceremonies and milestone anniversaries.
              </p>
              <p className="text-[#5C3A40]/85 text-base">
                From bespoke floral design and party plot logistics to calm on-ground execution, our philosophy is rooted in authenticity, elegance, and peace of mind for your family.
              </p>
            </div>

            {/* Practical Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {[
                "Personalized mandap & theme styling",
                "Ahmedabad party plots & lawn coordination",
                "Haldi, Mehendi & Sangeet production",
                "Dedicated on-ground family managers"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-[#2D1115]">
                  <span className="w-5 h-5 rounded-full bg-[#C59B27]/20 flex items-center justify-center text-[#C59B27] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C59B27] hover:text-[#DFB15B] group transition-colors"
            >
              <span>Explore Our Services & Production</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
