"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "./Icon";
import { site } from "@/content/site";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

// In-page anchors — this is a single-scroll conversion page.
const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Swap to a solid background once the user scrolls past the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-forest-900/95 shadow-card backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px flex h-20 items-center justify-between">
        {/* Brand */}
        <a href="#gallery" className="flex items-center gap-2 text-white">
          <Image
            src="/happy events logo.jpeg"
            alt="Happy Days Events logo"
            width={48}
            height={48}
            className="rounded-full object-cover"
            priority
          />
          <span className="font-serif text-lg font-semibold leading-none">
            {site.brandShort}
            <span className="block text-[10px] font-sans font-normal uppercase tracking-[0.2em] text-gold-300">
              Events &amp; Decor
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-gold-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp hidden md:inline-flex"
        >
          <Icon name="whatsapp" /> Get a Quote
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-full text-2xl text-white md:hidden"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <ul className="container-px space-y-1 bg-forest-900/98 pb-6 pt-2 backdrop-blur">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-whatsapp w-full"
              >
                <Icon name="whatsapp" /> Get a Quote on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
