"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Icon from "../Icon";
import { fadeUp } from "@/lib/motion";
import { site } from "@/content/site";

/** ABOUT / FOUNDER — Chaitanya's story, photo and mission. */
export default function About() {
  return (
    <section id="about" className="section bg-blush-50">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2">
        {/* Founder photo (PLACEHOLDER — replace /public/founder.jpg) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-lift">
            <Image
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=70"
              alt={`PLACEHOLDER — ${site.founder.name}, ${site.founder.role}`}
              width={800}
              height={1000}
              className="h-auto w-full object-cover"
            />
            <span className="absolute left-3 top-3 rounded-full bg-forest-950/70 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
              Replace with founder photo
            </span>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-5 -right-3 rounded-2xl bg-gold-sheen px-5 py-4 text-forest-900 shadow-lift sm:-right-6">
            <p className="font-serif text-2xl font-bold leading-none">{site.founder.name}</p>
            <p className="text-xs font-medium">{site.founder.role}</p>
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="eyebrow">About Happy Days</span>
          <h2 className="h-section mt-3">Built on one promise — your event, our responsibility</h2>
          <p className="mt-5 text-forest-900/70">
            Happy Days — Events &amp; Decor was founded by {site.founder.name} with a
            simple belief: hosts should be guests at their own celebrations. What
            began as a passion for beautiful décor has grown into a full-service
            event company trusted across {site.cities.map((c) => c.name).join(" and ")}.
          </p>
          <p className="mt-4 text-forest-900/70">
            From the first concept sketch to the last guest leaving, our team
            manages design, vendors, logistics and execution — so every moment
            feels effortless and every detail looks intentional.
          </p>

          <div className="mt-7 rounded-2xl border-l-4 border-gold-400 bg-white p-5 shadow-card">
            <Icon name="quote" className="text-2xl text-gold-400" />
            <p className="mt-2 font-serif text-lg italic text-forest-800">
              &ldquo;We don&apos;t just decorate venues — we take responsibility for
              the memory you&apos;ll keep forever.&rdquo;
            </p>
            <p className="mt-2 text-sm font-semibold text-forest-700">
              — {site.founder.name}, {site.founder.role}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
