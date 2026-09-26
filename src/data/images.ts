/**
 * Centralized Event Imagery for Rhythm Events (Ahmedabad, Gujarat)
 * 
 * STRICT ARCHITECTURAL & EVENT PLANNER STANDARD:
 * - Pure event setups, decor, mandaps, stages, lighting, and venues.
 * - ZERO human characters, faces, or people.
 * - High-resolution local assets with verified fallbacks.
 */

export interface EventImage {
  id: string;
  category: string;
  title: string;
  tagline: string;
  url: string;
  fallbackUrl: string;
  alt: string;
}

export const EVENT_IMAGES: Record<string, EventImage> = {
  hero: {
    id: "hero-reception-stage",
    category: "Wedding Reception",
    title: "Grand Party Plot Reception Stage",
    tagline: "Cascading Floral Wall & Fairy Light Canopy",
    url: "/images/events/hero_decor.jpg",
    fallbackUrl: "/images/events/hero_decor.jpg",
    alt: "Grand Indian wedding reception stage at an Ahmedabad party plot lawn with royal velvet sofa, cascading floral wall, and fairy light canopy ceiling"
  },
  about: {
    id: "about-mandap-pillar",
    category: "Sacred Mandap Décor",
    title: "Hand-Carved Mandap Architecture",
    tagline: "Marigold Torans & Sacred Havan Kund",
    url: "/images/events/about_mandap.jpg",
    fallbackUrl: "/images/events/about_mandap.jpg",
    alt: "Sacred Gujarati wedding mandap with hand-carved wooden pillars wrapped with yellow marigold garlands, brass bells, and glowing havan kund altar"
  },
  mandap: {
    id: "wedding-mandap",
    category: "Wedding Mandap",
    title: "Sacred Lagna Mandap Ceremony Setup",
    tagline: "Carved Pillars, Fresh Rose Canopy & Havan Kund",
    url: "/images/events/mandap_decor.jpg",
    fallbackUrl: "/images/events/mandap_decor.jpg",
    alt: "Four-pillar sacred Hindu wedding mandap canopy adorned with red roses, white rajnigandha, brass samai lamps, and agni havan altar"
  },
  haldi: {
    id: "haldi-decor",
    category: "Haldi Rasam",
    title: "Authentic Haldi & Pithi Rasam Setup",
    tagline: "Yellow Marigold Floral Wall & Traditional Brass Urli",
    url: "/images/events/haldi_decor.jpg",
    fallbackUrl: "/images/events/haldi_decor.jpg",
    alt: "Joyful yellow-themed Indian Haldi ceremony setup with dense marigold backdrop, ornate brass urli with flower petals, and festive low diwan seating"
  },
  mehndi: {
    id: "mehndi-lounge",
    category: "Mehendi Rasam",
    title: "Festive Rajasthani Mehendi Lounge Décor",
    tagline: "Embroidered Parasols, Diwans & Floral Photobooth",
    url: "/images/events/mehndi_decor.jpg",
    fallbackUrl: "/images/events/mehndi_decor.jpg",
    alt: "Vibrant bohemian Indian Mehendi lounge setup with Rajasthani craft umbrellas, colorful silk diwan cushions, and floral arch photobooth"
  },
  sangeet: {
    id: "sangeet-stage",
    category: "Sangeet & Garba",
    title: "High-Energy Sangeet & Raas-Garba Stage",
    tagline: "Curved LED Screen, Truss Lighting & Glossy Dance Floor",
    url: "/images/events/sangeet_decor.jpg",
    fallbackUrl: "/images/events/sangeet_decor.jpg",
    alt: "Sangeet and Garba performance stage with wide curved LED mandala backdrop, heavy-duty lighting truss with moving beam fixtures, and mirror-gloss dance floor"
  },
  engagement: {
    id: "engagement-altar",
    category: "Engagement & Sagai",
    title: "Sagai & Ring Ceremony Altar",
    tagline: "Circular Floral Arch, Velvet Pedestal & Fairy Lights",
    url: "/images/events/engagement_decor.jpg",
    fallbackUrl: "/images/events/engagement_decor.jpg",
    alt: "Modern Indian engagement ceremony stage with double circular blush floral arch, velvet ring pedestal, and warm fairy light drapery"
  },
  reception: {
    id: "reception-lawn",
    category: "Reception Décor",
    title: "Ahmedabad Party Plot Lawn Reception",
    tagline: "Fairy Light Canopy, Gold Chiavari Chairs & Floral Tables",
    url: "/images/events/reception_decor.jpg",
    fallbackUrl: "/images/events/reception_decor.jpg",
    alt: "Evening Ahmedabad party plot lawn wedding reception setup with illuminated fairy light canopy ceiling, gold Chiavari chairs, and round banquet tables"
  },
  birthday: {
    id: "birthday-setup",
    category: "Birthday Celebrations",
    title: "Bespoke Birthday & Milestone Party Styling",
    tagline: "Organic Balloon Arch, Custom Backdrops & Pedestals",
    url: "/images/events/birthday_decor.jpg",
    fallbackUrl: "/images/events/birthday_decor.jpg",
    alt: "Milestone birthday party setup with organic pastel balloon garland installation, modern ribbed backdrop panel, and cake plinth pedestals"
  },
  corporate: {
    id: "corporate-conference",
    category: "Corporate Events",
    title: "Corporate Seminar & Conference Production",
    tagline: "Panoramic LED Video Wall, Modern Podium & Stage Rigging",
    url: "/images/events/corporate_decor.jpg",
    fallbackUrl: "/images/events/corporate_decor.jpg",
    alt: "Professional Ahmedabad corporate conference stage with panoramic curved LED presentation display, minimalist speaker podium, and auditorium lighting"
  },
  decorWalkway: {
    id: "entrance-walkway",
    category: "Entrance & Pathway",
    title: "Grand Entrance Floral Tunnel Walkway",
    tagline: "Twinkling Fairy Lights, Cascading Wisteria & Brass Urlis",
    url: "/images/events/decor_walkway.jpg",
    fallbackUrl: "/images/events/decor_walkway.jpg",
    alt: "Grand Indian wedding entrance floral walkway tunnel with fairy light arches, hanging white wisteria, and brass urlis with floating marigolds and candles"
  }
};
