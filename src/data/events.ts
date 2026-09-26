/**
 * Portfolio Data for Rhythm Events
 * 100% Pure Event Décor, Mandaps, Staging & Venue Setups (Zero People / Zero Characters)
 */

import { EVENT_IMAGES } from "./images";

export type EventCategoryType = 
  | "Wedding Mandap" 
  | "Haldi Rasam" 
  | "Mehendi Rasam" 
  | "Sangeet & Garba" 
  | "Reception Décor"
  | "Engagement"
  | "Birthday"
  | "Corporate";

export interface GalleryItem {
  id: string;
  category: EventCategoryType;
  title: string;
  ceremonyBadge: string;
  location: string;
  image: string;
  fallbackImage: string;
  alt: string;
  layoutType: "portrait-large" | "landscape-small" | "full-width";
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    category: "Wedding Mandap",
    title: "Sacred Four-Pillar Lagna Mandap Architecture",
    ceremonyBadge: "Lagna / Hastamelap",
    location: "Ahmedabad Lawn Party Plot",
    image: EVENT_IMAGES.mandap.url,
    fallbackImage: EVENT_IMAGES.mandap.fallbackUrl,
    alt: EVENT_IMAGES.mandap.alt,
    layoutType: "portrait-large"
  },
  {
    id: "g2",
    category: "Haldi Rasam",
    title: "Vibrant Yellow Marigold Floral Backdrop & Brass Urli",
    ceremonyBadge: "Haldi / Pithi Rasam",
    location: "Ahmedabad Courtyard Lawn",
    image: EVENT_IMAGES.haldi.url,
    fallbackImage: EVENT_IMAGES.haldi.fallbackUrl,
    alt: EVENT_IMAGES.haldi.alt,
    layoutType: "landscape-small"
  },
  {
    id: "g3",
    category: "Mehendi Rasam",
    title: "Rajasthani Bohemian Mehendi Lounge & Embroidered Parasols",
    ceremonyBadge: "Mehendi Lounge",
    location: "Ahmedabad Garden Venue",
    image: EVENT_IMAGES.mehndi.url,
    fallbackImage: EVENT_IMAGES.mehndi.fallbackUrl,
    alt: EVENT_IMAGES.mehndi.alt,
    layoutType: "landscape-small"
  },
  {
    id: "g4",
    category: "Sangeet & Garba",
    title: "Concert-Grade Sangeet Stage with Curved LED Mandala Screen",
    ceremonyBadge: "Sangeet Sandhya",
    location: "Ahmedabad Party Plot Stage",
    image: EVENT_IMAGES.sangeet.url,
    fallbackImage: EVENT_IMAGES.sangeet.fallbackUrl,
    alt: EVENT_IMAGES.sangeet.alt,
    layoutType: "landscape-small"
  },
  {
    id: "g5",
    category: "Reception Décor",
    title: "Vast Ahmedabad Party Plot Lawn Fairy Light Canopy & Banquet",
    ceremonyBadge: "Reception Evening",
    location: "Ahmedabad Party Plot Lawn",
    image: EVENT_IMAGES.reception.url,
    fallbackImage: EVENT_IMAGES.reception.fallbackUrl,
    alt: EVENT_IMAGES.reception.alt,
    layoutType: "full-width"
  },
  {
    id: "g6",
    category: "Engagement",
    title: "Modern Double Circular Floral Arch Altar & Ring Pedestal",
    ceremonyBadge: "Sagai Ceremony",
    location: "Ahmedabad Luxury Ballroom",
    image: EVENT_IMAGES.engagement.url,
    fallbackImage: EVENT_IMAGES.engagement.fallbackUrl,
    alt: EVENT_IMAGES.engagement.alt,
    layoutType: "landscape-small"
  },
  {
    id: "g7",
    category: "Wedding Mandap",
    title: "Carved Wooden Mandap Pillar with Genda Torans & Havan Kund",
    ceremonyBadge: "Mandap Details",
    location: "Ahmedabad Heritage Lawn",
    image: EVENT_IMAGES.about.url,
    fallbackImage: EVENT_IMAGES.about.fallbackUrl,
    alt: EVENT_IMAGES.about.alt,
    layoutType: "portrait-large"
  },
  {
    id: "g8",
    category: "Birthday",
    title: "Milestone Birthday Styling with Organic Balloon Installations",
    ceremonyBadge: "Birthday Celebration",
    location: "Ahmedabad Private Banquet",
    image: EVENT_IMAGES.birthday.url,
    fallbackImage: EVENT_IMAGES.birthday.fallbackUrl,
    alt: EVENT_IMAGES.birthday.alt,
    layoutType: "landscape-small"
  },
  {
    id: "g9",
    category: "Corporate",
    title: "Corporate Seminar & Symposium Production with Wide LED Wall",
    ceremonyBadge: "Corporate Conference",
    location: "Ahmedabad Convention Hall",
    image: EVENT_IMAGES.corporate.url,
    fallbackImage: EVENT_IMAGES.corporate.fallbackUrl,
    alt: EVENT_IMAGES.corporate.alt,
    layoutType: "landscape-small"
  },
  {
    id: "g10",
    category: "Reception Décor",
    title: "Grand Entrance Floral Tunnel Walkway with Wisteria & Brass Urlis",
    ceremonyBadge: "Pathway & Tunnel",
    location: "Ahmedabad Party Plot Gate",
    image: EVENT_IMAGES.decorWalkway.url,
    fallbackImage: EVENT_IMAGES.decorWalkway.fallbackUrl,
    alt: EVENT_IMAGES.decorWalkway.alt,
    layoutType: "full-width"
  }
];
