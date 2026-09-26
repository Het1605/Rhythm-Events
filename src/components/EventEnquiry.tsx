import React, { useState } from "react";
import { BUSINESS_INFO } from "../data/business";
import { Phone, MessageSquare, ArrowRight, CheckCircle2, Calendar, Sparkles } from "lucide-react";

export const EventEnquiry: React.FC = () => {
  const [selectedEventType, setSelectedEventType] = useState("WEDDING");
  const [eventDate, setEventDate] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactPhone.trim()) {
      setErrorMessage("Please share your name and phone number so we can reach you.");
      return;
    }
    setErrorMessage("");
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setMessage("");
    setEventDate("");
    setGuestCount("");
    setContactName("");
    setContactPhone("");
  };

  // WhatsApp prefilled message with user input
  const generatedWhatsAppLink = () => {
    const text = `Hi Rhythm Events, I would like to discuss a ${selectedEventType} in Ahmedabad/Gujarat.${
      eventDate ? ` Planned date: ${eventDate}.` : ""
    }${contactName ? ` Name: ${contactName}.` : ""}`;
    return BUSINESS_INFO.whatsapp.getLink(text);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 lg:pl-28 lg:pr-20 bg-[#0B132B] border-t border-white/10"
      aria-label="Event Enquiry Experience"
    >
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-mono tracking-[0.25em] text-[#E84A27] uppercase block mb-3">
            START PLANNING
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#F4F1EA] tracking-tight leading-none">
            LET’S FIND <br />
            <span className="text-[#E84A27]">YOUR RHYTHM.</span>
          </h2>
        </div>

        {/* Immediate Direct Channels: WhatsApp & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
          <a
            href={generatedWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-[#E84A27] hover:bg-[#d63d1b] text-white transition-all group"
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5" />
              <div>
                <div className="text-xs font-mono font-bold tracking-wider uppercase">
                  MESSAGE ON WHATSAPP
                </div>
                <div className="text-xs opacity-90">Instant conversation with Rhythm team</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all group"
          >
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#E84A27]" />
              <div>
                <div className="text-xs font-mono font-bold tracking-wider uppercase">
                  CALL DIRECTLY
                </div>
                <div className="text-xs text-white/70">{BUSINESS_INFO.phone}</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* The Interactive Conversational Form */}
        {isSubmitted ? (
          <div className="p-8 sm:p-12 rounded-2xl bg-white/5 border border-[#E84A27]/40 text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#E84A27]/20 border border-[#E84A27] flex items-center justify-center mx-auto mb-6 text-[#E84A27]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#F4F1EA] mb-4">
              Your event story has started.
            </h3>
            <p className="text-sm sm:text-base text-white/70 max-w-lg mx-auto leading-relaxed mb-8">
              Thank you, {contactName || "there"}. We have received your notes for your upcoming {selectedEventType.toLowerCase()} celebration in {BUSINESS_INFO.market}. Our Ahmedabad team will connect with you shortly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={generatedWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#E84A27] hover:bg-[#d63d1b] text-white text-xs font-mono font-bold tracking-wider uppercase rounded-xl transition-all"
              >
                OPEN CHAT IN WHATSAPP
              </a>
              <button
                onClick={resetForm}
                className="px-6 py-3 border border-white/20 text-white/70 hover:text-white text-xs font-mono tracking-wider uppercase rounded-xl transition-all"
              >
                PLAN ANOTHER EVENT
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* 1. What are you planning? */}
            <div>
              <label className="text-sm font-mono tracking-wider text-white/60 uppercase block mb-4">
                01 // What are you planning?
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "WEDDING",
                  "ENGAGEMENT",
                  "BIRTHDAY",
                  "CORPORATE",
                  "PRIVATE EVENT",
                  "OTHER"
                ].map((type) => {
                  const isSelected = selectedEventType === type;
                  return (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setSelectedEventType(type)}
                      className={`px-4 sm:px-6 py-3 rounded-xl font-display text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#E84A27] text-white shadow-lg"
                          : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. When & Scale */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-mono tracking-wider text-white/60 uppercase block mb-3">
                  02 // Tell us when
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white font-sans text-sm focus:border-[#E84A27] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-mono tracking-wider text-white/60 uppercase block mb-3">
                  03 // Approximate guest count (optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 150 - 300 guests"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white font-sans text-sm placeholder:text-white/30 focus:border-[#E84A27] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* 3. Tell us a little about it */}
            <div>
              <label className="text-sm font-mono tracking-wider text-white/60 uppercase block mb-3">
                04 // Tell us a little about it
              </label>
              <textarea
                rows={3}
                placeholder="What vibe or specific memories are you hoping to create? Any venue in mind in Ahmedabad or Gujarat?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white font-sans text-sm placeholder:text-white/30 focus:border-[#E84A27] focus:outline-none transition-colors"
              />
            </div>

            {/* 4. Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-mono tracking-wider text-white/60 uppercase block mb-3">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white font-sans text-sm placeholder:text-white/30 focus:border-[#E84A27] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-sm font-mono tracking-wider text-white/60 uppercase block mb-3">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 87329 61375"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white font-sans text-sm placeholder:text-white/30 focus:border-[#E84A27] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {errorMessage && (
              <div className="text-xs font-mono text-[#E84A27]">
                {errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-[#E84A27] hover:bg-[#d63d1b] text-white font-display font-bold text-sm tracking-wider uppercase rounded-xl transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg hover:shadow-orange-900/30"
              >
                <span>START THE CONVERSATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="mt-3 text-xs font-mono text-white/40">
                Direct consultation with Rhythm Events · No spam, just thoughtful planning.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
