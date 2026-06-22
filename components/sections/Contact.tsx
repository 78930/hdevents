"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Icon from "../Icon";
import { fadeUp } from "@/lib/motion";
import { site } from "@/content/site";
import { serviceTitles } from "@/content/services";
import { buildEnquiryWhatsAppLink, type EnquiryFields } from "@/lib/whatsapp";

const EMPTY: EnquiryFields = {
  name: "",
  phone: "",
  eventType: "",
  date: "",
  city: site.cities[0]?.name ?? "",
  message: "",
};

/**
 * CONTACT / ENQUIRY — full form that, on submit, assembles a formatted
 * WhatsApp message from every field and opens wa.me so the lead lands
 * directly in the client's WhatsApp. Plus map embeds for both cities.
 */
export default function Contact() {
  const [fields, setFields] = useState<EnquiryFields>(EMPTY);
  const [sent, setSent] = useState(false);

  const update = (key: keyof EnquiryFields, value: string) =>
    setFields((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Build the deep link and open WhatsApp in a new tab.
    const url = buildEnquiryWhatsAppLink(fields);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="contact" className="section bg-blush-50">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="h-section mt-3">{site.hero.ctaLine}</h2>
          <p className="mt-4 text-forest-900/65">
            Fill this in and hit send — it opens WhatsApp with your details ready
            to go. We usually reply within a few hours.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* ---- Enquiry form ---- */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-blush-100 bg-white p-6 shadow-card sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" required>
                <input
                  type="text"
                  required
                  value={fields.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your name"
                  className="input"
                />
              </Field>
              <Field label="Phone" required>
                <input
                  type="tel"
                  required
                  value={fields.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+91 ..."
                  className="input"
                />
              </Field>

              <Field label="Event Type" required>
                <select
                  required
                  value={fields.eventType}
                  onChange={(e) => update("eventType", e.target.value)}
                  className="input"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {/* Dropdown populated from the full services list */}
                  {serviceTitles.map((title) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </Field>

              <Field label="Event Date">
                <input
                  type="date"
                  value={fields.date}
                  onChange={(e) => update("date", e.target.value)}
                  className="input"
                />
              </Field>

              <Field label="City" required>
                <select
                  required
                  value={fields.city}
                  onChange={(e) => update("city", e.target.value)}
                  className="input"
                >
                  {site.cities.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Message" className="mt-4">
              <textarea
                rows={4}
                value={fields.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Tell us a little about your celebration..."
                className="input resize-none"
              />
            </Field>

            <button type="submit" className="btn-whatsapp mt-6 w-full">
              <Icon name="whatsapp" /> Send Enquiry on WhatsApp
            </button>

            {sent && (
              <p className="mt-3 text-center text-sm text-forest-600">
                WhatsApp should have opened in a new tab. If it didn&apos;t, tap
                the green button bottom-right.
              </p>
            )}
            <p className="mt-3 text-center text-xs text-forest-900/45">
              By sending, you&apos;ll be redirected to WhatsApp with your details
              pre-filled.
            </p>
          </motion.form>

          {/* ---- Contact details + maps ---- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-blush-100 bg-white p-6 shadow-card">
              <h3 className="font-serif text-lg font-semibold text-forest-800">
                Talk to us directly
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href={`tel:+${site.whatsappNumber}`} className="flex items-center gap-3 text-forest-800 hover:text-forest-600">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-50 text-forest-600"><Icon name="phone" /></span>
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-forest-800 hover:text-forest-600">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-50 text-forest-600"><Icon name="instagram" /></span>
                    {site.instagramHandle}
                  </a>
                </li>
                <li>
                  <a href={`https://${site.website}`} className="flex items-center gap-3 text-forest-800 hover:text-forest-600">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-50 text-forest-600"><Icon name="globe" /></span>
                    {site.website}
                  </a>
                </li>
              </ul>
            </div>

            {/* Map embeds for both cities */}
            <div className="grid gap-4 sm:grid-cols-2">
              {site.cities.map((c) => (
                <div key={c.name} className="overflow-hidden rounded-2xl border border-blush-100 bg-white shadow-card">
                  <div className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-forest-800">
                    <Icon name="pin" className="text-gold-500" /> {c.name}
                  </div>
                  <iframe
                    title={`Map of ${c.name}`}
                    src={c.mapEmbedSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-44 w-full border-0"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Labelled field wrapper for consistent form styling. */
function Field({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-700">
        {label} {required && <span className="text-blush-500">*</span>}
      </span>
      {children}
    </label>
  );
}
