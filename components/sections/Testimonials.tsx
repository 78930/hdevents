"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../Icon";
import { testimonials } from "@/content/testimonials";

/**
 * TESTIMONIALS — auto-advancing, swipeable/editable carousel.
 * Content lives in content/testimonials.ts (CMS-ready).
 */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  // Auto-advance every 6s unless the user is hovering/focusing.
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(t);
  }, [paused, count]);

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="section bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Kind Words</span>
          <h2 className="h-section mt-3">Loved by our clients</h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="min-h-[16rem] rounded-3xl border border-blush-100 bg-blush-50 p-8 shadow-card sm:p-12">
            <Icon name="quote" className="text-4xl text-gold-400" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="mt-4"
              >
                <p className="font-serif text-xl leading-relaxed text-forest-800 sm:text-2xl">
                  {current.quote}
                </p>
                <footer className="mt-6">
                  <p className="font-semibold text-forest-700">{current.author}</p>
                  <p className="text-sm text-forest-900/55">
                    {current.event} · {current.city}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 rotate-180 place-items-center rounded-full border border-blush-200 text-forest-700 transition-colors hover:bg-forest-700 hover:text-white"
            >
              <Icon name="arrow" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-7 bg-gold-500" : "w-2.5 bg-blush-200"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-blush-200 text-forest-700 transition-colors hover:bg-forest-700 hover:text-white"
            >
              <Icon name="arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
