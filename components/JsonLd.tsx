import { site } from "@/content/site";

/**
 * JSON-LD LocalBusiness schema covering BOTH cities + the phone number.
 * Helps Google show the business for local "near me" / city searches.
 * Rendered server-side in the layout.
 */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://happydaysevents.in/#business",
    name: site.brand,
    description:
      "Event planning and décor for weddings, birthdays and corporate events in Hyderabad and Vijayawada.",
    url: "https://happydaysevents.in",
    telephone: "+91 98663 66344",
    image: "https://happydaysevents.in/og-image.jpg",
    priceRange: "₹₹",
    sameAs: [site.instagramUrl],
    // Two service areas — one entry per city
    areaServed: site.cities.map((c) => ({
      "@type": "City",
      name: c.name,
    })),
    address: site.cities.map((c) => ({
      "@type": "PostalAddress",
      addressLocality: c.name,
      addressRegion: c.name === "Hyderabad" ? "Telangana" : "Andhra Pradesh",
      addressCountry: "IN",
    })),
    founder: { "@type": "Person", name: site.founder.name },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919866366344",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["en", "te", "hi"],
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
