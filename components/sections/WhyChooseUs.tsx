"use client";

import { motion } from "framer-motion";
import Icon, { type IconName } from "../Icon";
import { fadeUp, stagger } from "@/lib/motion";
import { whyChooseUs } from "@/content/whyChooseUs";

/** WHY CHOOSE US — three core promises on a deep-green band. */
export default function WhyChooseUs() {
  return (
    <section id="why" className="section bg-forest-900 text-white">
      <div className="container-px">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow text-gold-300">Why Choose Us</span>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
            Why families &amp; brands trust Happy Days
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {whyChooseUs.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center transition-colors hover:border-gold-400/50"
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gold-sheen text-2xl text-forest-900">
                <Icon name={f.icon as IconName} />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-gold-200">
                {f.title}
              </h3>
              <p className="mt-3 text-sm text-blush-100/75">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
