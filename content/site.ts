/**
 * SITE / BRAND CONFIG — single source of truth for business details.
 * ---------------------------------------------------------------------------
 * CMS-READY: This is plain typed data. To migrate to Sanity later, create a
 * matching `siteSettings` document type and replace the import in components
 * with a Sanity query that returns the same shape. Nothing else needs to change.
 */
export interface SiteConfig {
  brand: string;
  brandShort: string;
  tagline: string;
  hero: { headlineKicker: string; slogan: string; sub: string; ctaLine: string };
  phoneDisplay: string;
  /** Digits only, with country code — used to build wa.me links. */
  whatsappNumber: string;
  website: string;
  instagramHandle: string;
  instagramUrl: string;
  email: string;
  cities: { name: string; mapEmbedSrc: string }[];
  founder: { name: string; role: string };
}

export const site: SiteConfig = {
  brand: "Happy Days — Events & Decor",
  brandShort: "Happy Days",
  tagline: "Turning Moments Into Memories",
  hero: {
    headlineKicker: "Planning For An Event",
    slogan: "Your Event. Our Responsibility.",
    sub: "From concept to celebration, we manage every detail so you can enjoy the moment.",
    ctaLine: "Your Dream Celebration Starts Here",
  },
  phoneDisplay: "+91 98663 66344",
  whatsappNumber: "919866366344",
  website: "happydaysevents.in",
  instagramHandle: "@happydayseventsoffl",
  instagramUrl: "https://instagram.com/happydayseventsoffl",
  email: "hello@happydaysevents.in",
  cities: [
    {
      name: "Hyderabad",
      // Generic city embed — replace `q=` with the exact branch address/place ID.
      mapEmbedSrc:
        "https://www.google.com/maps?q=Hyderabad,Telangana,India&output=embed",
    },
    {
      name: "Vijayawada",
      mapEmbedSrc:
        "https://www.google.com/maps?q=Vijayawada,Andhra+Pradesh,India&output=embed",
    },
  ],
  founder: { name: "Chaitanya", role: "Founder & Lead Planner" },
};
