"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Icon from "../Icon";
import { site } from "@/content/site";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

/**
 * HERO — full-bleed dark image background with subtle parallax, an animated
 * headline, and the two primary CTAs.
 *
 * IMAGE: uses a placeholder background. Replace the `backgroundImage` URL with
 * your flyer/hero shot (or drop a file in /public/hero.jpg and use "/hero.jpg").
 * For a VIDEO background, swap the div for a <video> per the README note.
 */
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  // Parallax: background drifts slower than the scroll for depth.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Word-by-word reveal for the kicker headline ("Planning For An Event")
  const words = site.hero.headlineKicker.split(" ");

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Parallax background image (PLACEHOLDER — swap for real hero/flyer) */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 -z-20 scale-110 bg-cover bg-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=80')",
          }}
        />
      </motion.div>

      {/* Dark elegant overlay (flyer feel) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950/85 via-forest-900/80 to-forest-950/95" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="container-px relative pt-24 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-gold-300"
        >
          {site.tagline}
        </motion.p>

        {/* Animated kicker headline */}
        <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
          <span className="mb-2 block overflow-hidden">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mr-3 inline-block"
              >
                {w}
              </motion.span>
            ))}
          </span>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="block bg-gold-sheen bg-clip-text text-transparent"
          >
            {site.hero.slogan}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-base text-blush-100/85 sm:text-lg"
        >
          {site.hero.sub}
        </motion.p>

        {/* Two primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full sm:w-auto"
          >
            <Icon name="whatsapp" /> Get a Quote on WhatsApp
          </a>
          <a href="#contact" className="btn-gold w-full sm:w-auto">
            Book a Consultation <Icon name="arrow" />
          </a>
        </motion.div>

        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-blush-100/60">
          {site.cities.map((c) => c.name).join(" · ")}
        </p>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70"
        aria-hidden
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/40 p-1">
          <span className="h-2 w-1 animate-float rounded-full bg-white/70" />
        </div>
      </motion.div>
    </section>
  );
}
