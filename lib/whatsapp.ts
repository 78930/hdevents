/**
 * WHATSAPP HELPERS — single source of truth for every wa.me link on the site.
 * ---------------------------------------------------------------------------
 * Why centralise: the number and message format must be identical everywhere
 * (floating button, service cards, enquiry form). Change it once here.
 */
import { site } from "@/content/site";

/** The business WhatsApp number (digits + country code), from site config. */
export const WHATSAPP_NUMBER = site.whatsappNumber;

/**
 * Build a wa.me deep link from a plain-text message.
 * The message is URL-encoded exactly once so emojis, *bold*, and newlines
 * (\n) all survive. WhatsApp renders text wrapped in *asterisks* as bold.
 *
 * @example buildWhatsAppLink("Hi Happy Days, I'd like a quote.")
 */
export function buildWhatsAppLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

/** Default message used by the floating button and generic CTAs. */
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Happy Days, I'd like to plan an event. Please share details.";

/** Pre-filled message for a specific service card. Service name is *bolded*. */
export function serviceEnquiryLink(serviceTitle: string): string {
  return buildWhatsAppLink(
    `Hi Happy Days, I'm interested in *${serviceTitle}*. Please share details.`
  );
}

/** Shape of the enquiry form fields. */
export interface EnquiryFields {
  name: string;
  phone: string;
  eventType: string;
  date: string;
  city: string;
  message: string;
}

/**
 * Assemble a fully-formatted enquiry message from the form fields and return a
 * wa.me link. Lands in the client's WhatsApp with every detail filled in.
 *
 * Produces (URL-encoded):
 *   New Enquiry
 *   Name: ...
 *   Phone: ...
 *   Event: ...
 *   Date: ...
 *   City: ...
 *   Message: ...
 */
export function buildEnquiryWhatsAppLink(fields: EnquiryFields): string {
  const lines = [
    "New Enquiry",
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Event: ${fields.eventType}`,
    `Date: ${fields.date}`,
    `City: ${fields.city}`,
    `Message: ${fields.message}`,
  ];
  return buildWhatsAppLink(lines.join("\n"));
}
