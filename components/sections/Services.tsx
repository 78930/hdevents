"use client";

import { motion } from "framer-motion";
import Icon, { type IconName } from "../Icon";
import { fadeUp, stagger } from "@/lib/motion";
import { serviceEnquiryLink } from "@/lib/whatsapp";
import {
  personalServices,
  corporateServices,
  categoryMeta,
  type Service,
} from "@/content/services";

/** Single service card with icon, hover lift, and per-service WhatsApp CTA. */
function ServiceCard({ service }: { service: Service }) {
  const isCatchAll = service.isCatchAll;
  return (
    <motion.article
      variants={fadeUp}
      className={`group relative flex flex-col rounded-2xl border p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
        isCatchAll
          ? "items-center justify-center border-dashed border-gold-400 bg-gold-50 text-center"
          : "border-blush-100 bg-white"
      }`}
    >
      <span
        className={`mb-4 grid h-12 w-12 place-items-center rounded-xl text-2xl ${
          isCatchAll
            ? "bg-gold-sheen text-forest-900"
            : "bg-forest-50 text-forest-600 group-hover:bg-gold-sheen group-hover:text-forest-900"
        } transition-colors duration-300`}
      >
        <Icon name={service.icon as IconName} />
      </span>

      <h3 className="font-serif text-lg font-semibold text-forest-800">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-forest-900/65">{service.blurb}</p>

      {/* Per-service WhatsApp enquiry — pre-fills the service name (bolded) */}
      <a
        href={serviceEnquiryLink(service.title === "& More" ? "another celebration" : service.title)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-whatsapp transition-colors hover:text-forest-700"
      >
        <Icon name="whatsapp" /> Enquire on WhatsApp
      </a>
    </motion.article>
  );
}

/** A labelled category block with its grid of cards. */
function CategoryBlock({
  label,
  description,
  items,
}: {
  label: string;
  description: string;
  items: Service[];
}) {
  return (
    <div className="mt-14 first:mt-10">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <h3 className="font-serif text-2xl font-bold text-forest-800">{label}</h3>
        <p className="max-w-md text-sm text-forest-900/60">{description}</p>
      </div>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section bg-blush-50">
      <div className="container-px">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">What We Do</span>
          <h2 className="h-section mt-3">
            Every celebration, handled end to end
          </h2>
          <p className="mt-4 text-forest-900/65">
            From intimate family functions to large institutional events — pick a
            service and enquire in one tap on WhatsApp.
          </p>
        </motion.div>

        <CategoryBlock
          label={categoryMeta.personal.label}
          description={categoryMeta.personal.description}
          items={personalServices}
        />
        <CategoryBlock
          label={categoryMeta.corporate.label}
          description={categoryMeta.corporate.description}
          items={corporateServices}
        />
      </div>
    </section>
  );
}
