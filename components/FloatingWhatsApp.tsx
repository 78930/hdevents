"use client";

import Icon from "./Icon";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

/**
 * Site-wide floating WhatsApp button — fixed bottom-right on every page.
 * Uses the shared buildWhatsAppLink helper with the default pre-filled message.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Happy Days on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
    >
      {/* Label appears on hover (desktop) */}
      <span className="hidden rounded-full bg-forest-900 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lift transition-opacity duration-300 group-hover:opacity-100 md:block">
        Chat with us
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-2xl text-white shadow-lift transition-transform duration-200 hover:scale-110">
        {/* Pulsing ring to draw attention */}
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/40" />
        <Icon name="whatsapp" className="relative" />
      </span>
    </a>
  );
}
