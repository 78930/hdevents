"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Icon from "../Icon";
import { site } from "@/content/site";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

const FALLBACK = "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=80";
const INTERVAL = 4500;

export default function Hero({ images = [] }: { images?: string[] }) {
  const slides = images.length > 0 ? images : [FALLBACK];
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Auto-advance slideshow
  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), INTERVAL);
    return () => clearInterval(id);
  }, [slides.length]);

  const words = site.hero.headlineKicker.split(" ");

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[80vh] items-center overflow-hidden"
    >
      {/* Slideshow backgrounds */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 -z-20"
        >
          {slides[current].startsWith("http") ? (
            <div
              className="absolute inset-0 scale-110 bg-cover bg-center"
              style={{ backgroundImage: `url('${slides[current]}')` }}
            />
          ) : (
            <Image
              src={slides[current]}
              alt=""
              fill
              priority={current === 0}
              className="object-cover scale-110"
              sizes="100vw"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950/80 via-forest-900/75 to-forest-950/92" />

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

      {/* Slide dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-gold-300" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}

    </section>
  );
}
