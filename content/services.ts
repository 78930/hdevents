/**
 * SERVICES CONTENT LAYER
 * ---------------------------------------------------------------------------
 * Two categories + a final "& more" catch-all card.
 * `icon` maps to a key in components/ServiceIcon.tsx (swap freely).
 * `slug` is stable and CMS-friendly.
 *
 * CMS-READY: In Sanity, model this as a `service` document with fields
 * { title, slug, category, icon, blurb } and a `category` string field.
 * Replace this array with a GROQ query returning the same shape.
 */
export type ServiceCategory = "personal" | "corporate";

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  icon: string;
  blurb: string;
  /** Marks the final catch-all "& more" card so the UI can style it differently. */
  isCatchAll?: boolean;
}

export const categoryMeta: Record<
  ServiceCategory,
  { label: string; description: string }
> = {
  personal: {
    label: "Personal & Family Events",
    description:
      "Intimate moments and grand family celebrations — designed, decorated and delivered end to end.",
  },
  corporate: {
    label: "Corporate & Institutional Events",
    description:
      "Conferences, launches and institutional functions managed with precision and polish.",
  },
};

export const services: Service[] = [
  // ----- Personal & Family Events -----
  { slug: "marriage-function", title: "Marriage Function", category: "personal", icon: "rings", blurb: "Full wedding planning, décor and on-day management." },
  { slug: "bride-groom-entry", title: "Bride & Groom Entry", category: "personal", icon: "sparkle", blurb: "Show-stopping couple entries with effects and styling." },
  { slug: "bride-entry", title: "Bride Entry", category: "personal", icon: "flower", blurb: "Dreamy, picture-perfect solo bride entries." },
  { slug: "birthday-parties", title: "Birthday Parties", category: "personal", icon: "cake", blurb: "Themed birthdays for all ages, kids to milestones." },
  { slug: "haldi-decoration", title: "Haldi Decoration", category: "personal", icon: "marigold", blurb: "Vibrant marigold and floral haldi setups." },
  { slug: "engagement-decoration", title: "Engagement Decoration", category: "personal", icon: "heart", blurb: "Elegant stage and venue décor for the big yes." },
  { slug: "baby-shower-decoration", title: "Baby Shower Decoration", category: "personal", icon: "balloon", blurb: "Soft, joyful seemantham and baby shower themes." },
  { slug: "stage-decoration", title: "Stage Decoration", category: "personal", icon: "stage", blurb: "Statement stages — florals, drapes, lighting." },
  { slug: "theme-anniversary", title: "Theme-Based Anniversary Parties", category: "personal", icon: "champagne", blurb: "Custom-themed anniversaries to relive the magic." },

  // ----- Corporate & Institutional Events -----
  { slug: "corporate-events", title: "Corporate Events", category: "corporate", icon: "briefcase", blurb: "End-to-end corporate event design and execution." },
  { slug: "conference-management", title: "Conference Management", category: "corporate", icon: "podium", blurb: "Logistics, AV, stage and delegate management." },
  { slug: "training-programmes", title: "Training Programmes", category: "corporate", icon: "screen", blurb: "Venue, setup and coordination for trainings." },
  { slug: "government-functions", title: "Government Functions", category: "corporate", icon: "building", blurb: "Protocol-ready décor and management for officials." },
  { slug: "annual-functions", title: "Annual Functions", category: "corporate", icon: "trophy", blurb: "Company and institution annual day productions." },
  { slug: "college-fests", title: "College Fests", category: "corporate", icon: "music", blurb: "High-energy fest stages, sound and crowd flow." },
  { slug: "celebrity-nights", title: "Celebrity Nights", category: "corporate", icon: "star", blurb: "Artist coordination and premium show production." },
  { slug: "inauguration-launch", title: "Inauguration & Launching Events", category: "corporate", icon: "ribbon", blurb: "Ribbon cuttings and launches that make headlines." },

  // ----- Catch-all -----
  { slug: "and-more", title: "& More", category: "corporate", icon: "plus", blurb: "Have something else in mind? If it's a celebration, we plan it.", isCatchAll: true },
];

/** Convenience selectors used across the UI. */
export const personalServices = services.filter((s) => s.category === "personal");
export const corporateServices = services.filter((s) => s.category === "corporate");

/** Flat list of titles (real services only) — feeds the enquiry-form dropdown. */
export const serviceTitles = services
  .filter((s) => !s.isCatchAll)
  .map((s) => s.title);
