import React, { useState } from "react";
import { BUSINESS_INFO } from "../data/business";
import { MessageSquare, Phone, Send, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

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
    "Wedding",
    "Engagement",
    "Haldi",
    "Mehendi",
    "Sangeet",
    "Reception",
    "Birthday",
    "Corporate Event",
    "Other"
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the formatted WhatsApp message as explicitly requested
    const formattedMessage = `Hi Rhythm Events,

My name is ${name.trim() || "Guest"}.

I’m planning a ${eventType} on ${eventDate || "an upcoming date"} in ${location || "Ahmedabad"} for approximately ${approxGuests || "100-300"} guests.

Details: ${details.trim() || "Looking forward to discussing decor and planning."}`;

    // Generate WhatsApp direct link
    const whatsappUrl = `https://wa.me/918732961375?text=${encodeURIComponent(formattedMessage)}`;

    // Set success indicator
    setIsSuccessState(true);

    // Open WhatsApp in new tab / app
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FFF9F2] border-t border-[#F1E5D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-widest text-[#C9513D] uppercase mb-2">
            EVENT ENQUIRY
          </div>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-5xl text-[#481B22] leading-tight">
            Tell Us About Your Event
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#481B22]/75 font-sans">
            Fill in the details below to send an instant enquiry directly to our WhatsApp team. We typically respond within a few hours.
          </p>
        </div>

        {/* The Card Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E2D2C0] shadow-sm">
          {isSuccessState ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#65724A]/15 text-[#65724A] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#481B22]">
                Opening WhatsApp...
              </h3>
              <p className="text-sm sm:text-base text-[#481B22]/75 max-w-md mx-auto">
                Your enquiry message has been formatted. If WhatsApp didn't open automatically, click the button below:
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleFormSubmit}
                  className="px-6 py-3 bg-[#65724A] hover:bg-[#525e3b] text-white text-xs font-semibold rounded-xl flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Again</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsSuccessState(false)}
                  className="px-6 py-3 border border-[#E2D2C0] text-[#481B22] text-xs font-semibold rounded-xl hover:bg-[#FFF9F2]"
                >
                  Edit Enquiry Details
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#481B22]/80 mb-2">
                    Your Name <span className="text-[#C9513D]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F2] border border-[#E2D2C0] text-[#481B22] text-sm focus:border-[#C9513D] focus:bg-white focus:outline-none transition-all placeholder:text-[#481B22]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#481B22]/80 mb-2">
                    Phone / WhatsApp Number <span className="text-[#C9513D]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F2] border border-[#E2D2C0] text-[#481B22] text-sm focus:border-[#C9513D] focus:bg-white focus:outline-none transition-all placeholder:text-[#481B22]/40"
                  />
                </div>
              </div>

              {/* Row 2: Event Type and Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#481B22]/80 mb-2">
                    Event Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F2] border border-[#E2D2C0] text-[#481B22] text-sm focus:border-[#C9513D] focus:bg-white focus:outline-none transition-all cursor-pointer"
                  >
                    {eventTypeOptions.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#481B22]/80 mb-2">
                    Event Date (Estimated)
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F2] border border-[#E2D2C0] text-[#481B22] text-sm focus:border-[#C9513D] focus:bg-white focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Event Location and Approx. Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#481B22]/80 mb-2">
                    Event Location / Venue in Gujarat
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. CTM, SG Highway, Bopal, Sanand"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F2] border border-[#E2D2C0] text-[#481B22] text-sm focus:border-[#C9513D] focus:bg-white focus:outline-none transition-all placeholder:text-[#481B22]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#481B22]/80 mb-2">
                    Approx. Number of Guests
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 200 - 500 guests"
                    value={approxGuests}
                    onChange={(e) => setApproxGuests(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F2] border border-[#E2D2C0] text-[#481B22] text-sm focus:border-[#C9513D] focus:bg-white focus:outline-none transition-all placeholder:text-[#481B22]/40"
                  />
                </div>
              </div>

              {/* Row 4: Tell Us About Your Event */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#481B22]/80 mb-2">
                  Tell Us About Your Event
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details on functions, mandap theme, or specific requirements you have in mind..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF9F2] border border-[#E2D2C0] text-[#481B22] text-sm focus:border-[#C9513D] focus:bg-white focus:outline-none transition-all placeholder:text-[#481B22]/40"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#C9513D] hover:bg-[#b84330] text-white font-semibold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
                <p className="mt-3 text-xs text-center text-[#481B22]/60 font-sans">
                  Submitting directly prepares a pre-filled WhatsApp message to +91 87329 61375.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
