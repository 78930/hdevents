"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../Icon";
import {
  gallery,
  galleryFilters,
  type GalleryCategory,
  type GalleryItem,
} from "@/content/gallery";

type Filter = GalleryCategory | "all";

/**
 * THEME GALLERY — filterable masonry grid with a lightbox.
 * Images are PLACEHOLDERS labelled in their titles; swap `src` in
 * content/gallery.ts for real photos.
 */
export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const items = useMemo(
    () => (filter === "all" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter]
  );

  return (
    <section id="gallery" className="section bg-white">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="eyebrow">Our Work</span>
          <h2 className="h-section mt-3">Theme gallery</h2>
          <p className="mt-4 text-forest-900/65">
            A glimpse of the themes we create. Tap any image to view it larger.
          </p>
        </div>

        {/* Filter chips */}
        <div className="mt-8 flex flex-wrap gap-2">
          {galleryFilters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === f.key
                  ? "bg-forest-700 text-white shadow-card"
                  : "bg-blush-50 text-forest-800 hover:bg-blush-100"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry (CSS columns) */}
        <motion.div
          layout
          className="masonry mt-8 columns-2 lg:columns-3"
        >
          <AnimatePresence>
            {items.map((item) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActive(item)}
                className="group relative block w-full overflow-hidden rounded-xl shadow-card focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={800}
                  height={item.tall ? 1000 : 700}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Placeholder label overlay */}
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/80 to-transparent p-3 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {item.title}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-950/90 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20"
            >
              <Icon name="close" />
            </button>
            <motion.figure
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
            >
              <Image
                src={active.src}
                alt={active.title}
                width={1200}
                height={900}
                className="h-auto max-h-[78vh] w-auto object-contain"
              />
              <figcaption className="bg-forest-900 p-3 text-center text-sm text-blush-100">
                {active.title}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
