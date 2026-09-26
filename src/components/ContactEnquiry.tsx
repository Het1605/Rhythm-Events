import React, { useState } from "react";
import { BUSINESS_INFO } from "../data/business";
import { MessageSquare, CheckCircle2, Sparkles, Send } from "lucide-react";

export const ContactEnquiry: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("Wedding");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("Ahmedabad");
  const [approxGuests, setApproxGuests] = useState("");
  const [details, setDetails] = useState("");
  const [isSuccessState, setIsSuccessState] = useState(false);

  const eventTypeOptions = [
    "Wedding & Mandap",
    "Engagement (Sagai)",
    "Haldi Rasam",
    "Mehendi Ceremony",
    "Sangeet Sandhya",
    "Grand Reception",
    "Milestone Birthday",
    "Corporate Gala",
    "Other Special Celebration"
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the formatted WhatsApp message
    const formattedMessage = `Namaste Rhythm Events,

My name is ${name.trim() || "Guest"}.

I am planning a ${eventType} on ${eventDate || "an upcoming date"} in ${location || "Ahmedabad"} for approximately ${approxGuests || "100-300"} guests.

Details & Vision: ${details.trim() || "Looking forward to discussing stage decor, floral concepts, and event management."}`;

    // Generate WhatsApp direct link
    const whatsappUrl = `https://wa.me/918732961375?text=${encodeURIComponent(formattedMessage)}`;

    // Set success indicator
    setIsSuccessState(true);

    // Open WhatsApp in new tab / app
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FCFBF7] border-t border-[#E5D5BA] relative overflow-hidden">
      {/* Decorative ambient radial gold glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#B3412E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2D1115]/5 border border-[#C59B27]/35 text-[#C59B27] text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>CONNECT WITH OUR PLANNERS</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#2D1115] leading-[1.15] font-normal">
            Begin Your Event Enquiry
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5C3A40] font-sans leading-relaxed">
            Fill in your celebration specifics below to prepare a pre-filled WhatsApp enquiry directly with our senior event directors.
          </p>
        </div>

        {/* The Card Form */}
        <div className="bg-[#FAF6F0] rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#E5D5BA] shadow-xl">
          {isSuccessState ? (
            <div className="text-center py-10 space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/40 text-[#C59B27] flex items-center justify-center mx-auto mb-4 shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#2D1115]">
                Opening WhatsApp...
              </h3>
              <p className="text-sm sm:text-base text-[#5C3A40] max-w-md mx-auto font-sans leading-relaxed">
                Your enquiry details have been organized. If your WhatsApp window did not automatically open, tap the button below:
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleFormSubmit}
                  className="px-7 py-3.5 gold-gradient-bg text-[#2D1115] text-xs font-semibold tracking-wider uppercase rounded-full flex items-center gap-2 shadow-lg hover:shadow-[#C59B27]/30 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#2D1115]" />
                  <span>Open WhatsApp Conversation</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsSuccessState(false)}
                  className="px-6 py-3.5 border border-[#E5D5BA] text-[#2D1115] text-xs font-semibold tracking-wider uppercase rounded-full hover:bg-white transition-colors cursor-pointer"
                >
                  Edit Enquiry Details
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D1115] mb-2 font-sans">
                    Full Name <span className="text-[#B3412E]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Patel"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FCFBF7] border border-[#E5D5BA] text-[#2D1115] text-sm focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20 focus:outline-none transition-all placeholder:text-[#5C3A40]/40 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D1115] mb-2 font-sans">
                    Phone / WhatsApp Number <span className="text-[#B3412E]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FCFBF7] border border-[#E5D5BA] text-[#2D1115] text-sm focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20 focus:outline-none transition-all placeholder:text-[#5C3A40]/40 font-sans"
                  />
                </div>
              </div>

              {/* Row 2: Event Type and Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D1115] mb-2 font-sans">
                    Ceremony / Event Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FCFBF7] border border-[#E5D5BA] text-[#2D1115] text-sm focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20 focus:outline-none transition-all cursor-pointer font-sans"
                  >
                    {eventTypeOptions.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D1115] mb-2 font-sans">
                    Estimated Event Date
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FCFBF7] border border-[#E5D5BA] text-[#2D1115] text-sm focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20 focus:outline-none transition-all font-sans"
                  />
                </div>
              </div>

              {/* Row 3: Event Location and Approx. Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D1115] mb-2 font-sans">
                    Preferred Location / Venue
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SG Highway, CTM, Bopal, Sanand"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FCFBF7] border border-[#E5D5BA] text-[#2D1115] text-sm focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20 focus:outline-none transition-all placeholder:text-[#5C3A40]/40 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D1115] mb-2 font-sans">
                    Estimated Guest Count
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 250 - 500 guests"
                    value={approxGuests}
                    onChange={(e) => setApproxGuests(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FCFBF7] border border-[#E5D5BA] text-[#2D1115] text-sm focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20 focus:outline-none transition-all placeholder:text-[#5C3A40]/40 font-sans"
                  />
                </div>
              </div>

              {/* Row 4: Tell Us About Your Event */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D1115] mb-2 font-sans">
                  Special Wishes & Vision
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details on functions, floral preferences, stage architecture, or specific rituals..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FCFBF7] border border-[#E5D5BA] text-[#2D1115] text-sm focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20 focus:outline-none transition-all placeholder:text-[#5C3A40]/40 font-sans"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 gold-gradient-bg text-[#2D1115] font-semibold text-xs tracking-wider uppercase rounded-full shadow-xl hover:shadow-[#C59B27]/30 transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-98 cursor-pointer group"
                >
                  <Send className="w-4 h-4 text-[#2D1115] group-hover:translate-x-0.5 transition-transform" />
                  <span>Send Enquiry Directly via WhatsApp</span>
                </button>
                <p className="mt-3 text-xs text-center text-[#5C3A40]/70 font-sans">
                  Pre-fills a message directly to Rhythm Events (+91 87329 61375). No spam, guaranteed.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
