/**
 * Business Information for Rhythm Events
 * Hatkeshwar - CTM Rd, Khokhra, Ahmedabad, Gujarat
 */

import { EVENT_IMAGES } from "./images";

export interface EventCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  fallbackImage: string;
  imageAlt: string;
  ceremonyType: "wedding" | "haldi" | "mehendi" | "sangeet" | "engagement" | "reception" | "birthday" | "corporate";
  spanLarge?: boolean;
}

export interface WeddingJourneyStep {
  step: string;
  name: string;
  gujaratiTitle: string;
  tagline: string;
  ceremonyHighlight: string;
  description: string;
  image: string;
  fallbackImage: string;
}

export const BUSINESS_INFO = {
  name: "Rhythm Events",
  tagline: "Events • Weddings • Celebrations",
  city: "Ahmedabad",
  address: {
    line1: "Hatkeshwar - CTM Rd",
    line2: "Opp. Hatkeshwar Depo",
    area: "C.T.M, Khokhra",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380008",
    country: "India",
    full: "Hatkeshwar - CTM Rd, Opp. Hatkeshwar Depo, C.T.M, Khokhra, Ahmedabad, Gujarat 380008",
  },
  phone: "+91 87329 61375",
  phoneRaw: "918732961375",
  plusCode: "XJXG+59 Ahmedabad, Gujarat",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hatkeshwar+-+CTM+Rd,+Opp.+Hatkeshwar+Depo,+Khokhra,+Ahmedabad,+Gujarat+380008",
  whatsapp: {
    url: "https://wa.me/918732961375?text=Hi%20Rhythm%20Events%2C%20I%20would%20like%20to%20discuss%20an%20event.",
    getLink: (customText?: string) => {
      const text = customText || "Hi Rhythm Events, I would like to discuss an event.";
      return `https://wa.me/918732961375?text=${encodeURIComponent(text)}`;
    }
  },
  market: "Ahmedabad and Gujarat",
};

// Quick category strip items
export const QUICK_CATEGORIES = [
  { id: "wedding", label: "Wedding Mandap" },
  { id: "engagement", label: "Sagai / Engagement" },
  { id: "haldi", label: "Haldi Rasam" },
  { id: "mehendi", label: "Mehendi Rasam" },
  { id: "sangeet", label: "Sangeet & Garba" },
  { id: "reception", label: "Party Plot Reception" },
  { id: "birthday", label: "Birthdays & Milestones" },
  { id: "corporate", label: "Corporate Events" },
];

// Celebrations We Plan (Pure Event Décor, Setups & Mandaps — Zero People)
export const CELEBRATION_CATEGORIES: EventCategory[] = [
  {
    id: "wedding-mandap",
    title: EVENT_IMAGES.mandap.title,
    tagline: EVENT_IMAGES.mandap.tagline,
    description: "Traditional Gujarati and Indian wedding ceremonies with carved mandap pillars, sacred havan kund, fresh genda-rose varmalas, and party plot coordination.",
    image: EVENT_IMAGES.mandap.url,
    fallbackImage: EVENT_IMAGES.mandap.fallbackUrl,
    imageAlt: EVENT_IMAGES.mandap.alt,
    ceremonyType: "wedding",
    spanLarge: true
  },
  {
    id: "haldi-rasam",
    title: EVENT_IMAGES.haldi.title,
    tagline: EVENT_IMAGES.haldi.tagline,
    description: "Joyful Haldi ceremony setup with vibrant marigold floral backdrop, traditional brass urlis filled with flower petals, and festive low diwan seating.",
    image: EVENT_IMAGES.haldi.url,
    fallbackImage: EVENT_IMAGES.haldi.fallbackUrl,
    imageAlt: EVENT_IMAGES.haldi.alt,
    ceremonyType: "haldi",
    spanLarge: false
  },
  {
    id: "mehendi-rasam",
    title: EVENT_IMAGES.mehndi.title,
    tagline: EVENT_IMAGES.mehndi.tagline,
    description: "Authentic Indian Mehendi lounge featuring vibrant Rajasthani craft umbrellas, colorful printed silk diwans, and floral photobooth frames.",
    image: EVENT_IMAGES.mehndi.url,
    fallbackImage: EVENT_IMAGES.mehndi.fallbackUrl,
    imageAlt: EVENT_IMAGES.mehndi.alt,
    ceremonyType: "mehendi",
    spanLarge: true
  },
  {
    id: "sangeet-garba",
    title: EVENT_IMAGES.sangeet.title,
    tagline: EVENT_IMAGES.sangeet.tagline,
    description: "High-energy Gujarati Sangeet and Raas-Garba stage with curved LED video mandala screen, moving head beam fixtures, and mirror-gloss dance floor.",
    image: EVENT_IMAGES.sangeet.url,
    fallbackImage: EVENT_IMAGES.sangeet.fallbackUrl,
    imageAlt: EVENT_IMAGES.sangeet.alt,
    ceremonyType: "sangeet",
    spanLarge: false
  },
  {
    id: "engagement-ring",
    title: EVENT_IMAGES.engagement.title,
    tagline: EVENT_IMAGES.engagement.tagline,
    description: "Sophisticated circular floral ring arch altar, velvet ring presentation pedestal, romantic ballroom tablescapes, and gentle amber lighting.",
    image: EVENT_IMAGES.engagement.url,
    fallbackImage: EVENT_IMAGES.engagement.fallbackUrl,
    imageAlt: EVENT_IMAGES.engagement.alt,
    ceremonyType: "engagement",
    spanLarge: false
  },
  {
    id: "reception-lawn",
    title: EVENT_IMAGES.reception.title,
    tagline: EVENT_IMAGES.reception.tagline,
    description: "Vast Ahmedabad party plot lawn setups with hanging fairy light canopies, gold Chiavari chairs, luxury floral centerpieces, and lavish dinner coordination.",
    image: EVENT_IMAGES.reception.url,
    fallbackImage: EVENT_IMAGES.reception.fallbackUrl,
    imageAlt: EVENT_IMAGES.reception.alt,
    ceremonyType: "reception",
    spanLarge: false
  },
  {
    id: "birthday-styling",
    title: EVENT_IMAGES.birthday.title,
    tagline: EVENT_IMAGES.birthday.tagline,
    description: "Milestone birthday party setups with organic balloon arch installations, modern ribbed backdrops, cake plinths, and bespoke celebration lighting.",
    image: EVENT_IMAGES.birthday.url,
    fallbackImage: EVENT_IMAGES.birthday.fallbackUrl,
    imageAlt: EVENT_IMAGES.birthday.alt,
    ceremonyType: "birthday",
    spanLarge: false
  },
  {
    id: "corporate-events",
    title: EVENT_IMAGES.corporate.title,
    tagline: EVENT_IMAGES.corporate.tagline,
    description: "Ahmedabad corporate conference and seminar production with wide panoramic LED video walls, speaker podiums, and professional stage lighting.",
    image: EVENT_IMAGES.corporate.url,
    fallbackImage: EVENT_IMAGES.corporate.fallbackUrl,
    imageAlt: EVENT_IMAGES.corporate.alt,
    ceremonyType: "corporate",
    spanLarge: false
  }
];

// Signature Section: One Wedding. Many Beautiful Moments. (Pure Décor & Setup Timeline)
export const WEDDING_JOURNEY: WeddingJourneyStep[] = [
  {
    step: "01",
    name: "Engagement",
    gujaratiTitle: "Sagai / Ring Ceremony",
    tagline: "Auspicious Ring Altar & Floral Stage",
    ceremonyHighlight: "Circular Floral Arch & Velvet Pedestal",
    description: "Intimate family gathering, ring exchange stage, and romantic candlelit seating.",
    image: EVENT_IMAGES.engagement.url,
    fallbackImage: EVENT_IMAGES.engagement.fallbackUrl
  },
  {
    step: "02",
    name: "Haldi",
    gujaratiTitle: "Pithi Rasam",
    tagline: "Turmeric Blessings & Yellow Marigolds",
    ceremonyHighlight: "Brass Urli Altar & Genda Phool Décor",
    description: "Traditional Haldi ceremony courtyard setup with dense yellow marigold backdrops and auspicious brass urlis.",
    image: EVENT_IMAGES.haldi.url,
    fallbackImage: EVENT_IMAGES.haldi.fallbackUrl
  },
  {
    step: "03",
    name: "Mehendi",
    gujaratiTitle: "Mehendi Rasam",
    tagline: "Festive Rajasthani Lounge & Parasols",
    ceremonyHighlight: "Embroidered Umbrellas & Diwans",
    description: "Vibrant bohemian Mehendi lounge with embroidered craft parasols, colorful diwan seating, and floral photobooths.",
    image: EVENT_IMAGES.mehndi.url,
    fallbackImage: EVENT_IMAGES.mehndi.fallbackUrl
  },
  {
    step: "04",
    name: "Sangeet",
    gujaratiTitle: "Sangeet Sandhya / Raas-Garba",
    tagline: "Performance Stage & Moving Beams",
    ceremonyHighlight: "Curved LED Screen & Glossy Dance Floor",
    description: "Grand LED performance stage, dynamic moving beam fixtures, energetic Garba dance floor, and state-of-the-art production.",
    image: EVENT_IMAGES.sangeet.url,
    fallbackImage: EVENT_IMAGES.sangeet.fallbackUrl
  },
  {
    step: "05",
    name: "Wedding",
    gujaratiTitle: "Lagna / Hastamelap Ceremony",
    tagline: "Sacred Carved Mandap & Agni Havan",
    ceremonyHighlight: "Rose Canopy & Holy Fire Altar",
    description: "Sacred carved wooden mandap canopy with fresh red roses and rajnigandha, holy havan kund, and traditional samai brass lamps.",
    image: EVENT_IMAGES.mandap.url,
    fallbackImage: EVENT_IMAGES.mandap.fallbackUrl
  },
  {
    step: "06",
    name: "Reception",
    gujaratiTitle: "Reception Evening",
    tagline: "Party Plot Lawn Fairy Light Canopy",
    ceremonyHighlight: "Banquet Styling & Grand Couple Stage",
    description: "Expansive Ahmedabad lawn reception with magical fairy light canopies, gold Chiavari chairs, and lavish dinner coordination.",
    image: EVENT_IMAGES.reception.url,
    fallbackImage: EVENT_IMAGES.reception.fallbackUrl
  }
];

// Event Services (Clean 2-column list)
export const EVENT_SERVICES = [
  {
    title: "Event Planning & Coordination",
    description: "From initial budget structuring and vendor shortlisting to end-to-end event-day timeline coordination, ensuring your celebration runs effortlessly."
  },
  {
    title: "Theme & Décor",
    description: "Stage design, entrance gates, traditional floral mandaps, table styling, and customized photo booths crafted to match your event theme."
  },
  {
    title: "Venue Coordination",
    description: "Helping organize layouts and logistical requirements around your chosen Ahmedabad party plot, hotel banquet, lawn, or private farm."
  },
  {
    title: "Sound, Lighting & Production",
    description: "Warm architectural ambient lighting, fairy lights, truss setups, professional sound systems, and LED backdrops for ceremonies and performances."
  },
  {
    title: "Entertainment Coordination",
    description: "Coordinating anchor/host, live musicians, folk artists, DJs, sound setups, and sangeet choreography management for your celebration."
  },
  {
    title: "Guest & Event Management",
    description: "Welcoming guests, coordinating transport and rooms if needed, managing food counters flow, and ensuring your family is free to celebrate."
  }
];
