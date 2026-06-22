/**
 * Shared Framer Motion variants for scroll-reveal animations.
 * Import these so every section animates consistently.
 */
import type { Variants } from "framer-motion";

/** Fade + rise, used on most blocks as they scroll into view. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Parent container that staggers its children (cards, list items). */
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/** Props spread onto a motion element to reveal once when scrolled into view. */
export const revealOnce = {
  initial: "hidden" as const,
  whileInView: "show" as const,
  viewport: { once: true, amount: 0.2 },
};
