# Happy Days — Events & Decor

A modern, mobile-first, conversion-focused marketing site for an event planning &
décor business serving **Hyderabad & Vijayawada**.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion
**Tagline:** *Turning Moments Into Memories* — *Your Event. Our Responsibility.*

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

> Requires Node 18.18+ (Node 20+ recommended).

---

## What's inside

| Section | File |
|---|---|
| Hero (parallax, animated headline, 2 CTAs) | `components/sections/Hero.tsx` |
| Services (2 categories + "& more", per-card WhatsApp) | `components/sections/Services.tsx` |
| Theme Gallery (filterable masonry + lightbox) | `components/sections/Gallery.tsx` |
| Why Choose Us | `components/sections/WhyChooseUs.tsx` |
| About / Founder (Chaitanya) | `components/sections/About.tsx` |
| Testimonials (auto carousel) | `components/sections/Testimonials.tsx` |
| Contact / Enquiry (WhatsApp assemble + maps) | `components/sections/Contact.tsx` |
| Navbar / Footer / Floating WhatsApp | `components/*.tsx` |
| SEO + JSON-LD LocalBusiness | `app/layout.tsx`, `components/JsonLd.tsx` |

---

## Content layer (CMS-ready)

All copy and data live as typed modules in **`/content`** — no content is
hard-coded in components:

- `site.ts` — brand, phone/WhatsApp, cities, founder, socials
- `services.ts` — full service list, two categories, "& more" card
- `gallery.ts` — gallery items + filters (placeholder images)
- `testimonials.ts` — carousel content
- `whyChooseUs.ts` — feature promises

**Swapping to Sanity later:** each file documents the matching document shape.
Create the equivalent Sanity schema, then replace the static `import` in a
component with a GROQ query that returns the same shape. Nothing else changes.

---

## WhatsApp integration (priority feature)

One helper powers every WhatsApp link — `lib/whatsapp.ts`:

- `buildWhatsAppLink(message)` — core helper, URL-encodes once.
- `serviceEnquiryLink(title)` — per-service card CTA, pre-fills `*Service Name*`.
- `buildEnquiryWhatsAppLink(fields)` — assembles the full enquiry form into:
  ```
  New Enquiry
  Name: ...
  Phone: ...
  Event: ...
  Date: ...
  City: ...
  Message: ...
  ```
  …then opens `wa.me/919866366344` so the lead lands directly in WhatsApp.

The **floating WhatsApp button** (`components/FloatingWhatsApp.tsx`) is mounted
site-wide in `app/layout.tsx`.

**To change the number:** edit `whatsappNumber` in `content/site.ts` (one place).

---

## Replace the placeholder images

Placeholder photos are clearly labelled (titles begin with `PLACEHOLDER —`).

1. Drop real files into `/public` and `/public/gallery` (see `public/README.txt`).
2. Update `src` paths in `content/gallery.ts`, the founder photo in
   `components/sections/About.tsx`, and the hero background in
   `components/sections/Hero.tsx`.
3. Add `public/hero.jpg`, `public/og-image.jpg`, `public/founder.jpg`.

**Video hero (optional):** in `Hero.tsx`, swap the background `motion.div` for a
`<video autoPlay muted loop playsInline>` pointing at `/public/hero.mp4`.

---

## SEO

- Keyword-targeted metadata in `app/layout.tsx` (event planner Hyderabad,
  wedding decoration Vijayawada, birthday decorators Hyderabad, corporate event
  management Hyderabad).
- JSON-LD `LocalBusiness` schema covering **both cities** + the phone number
  (`components/JsonLd.tsx`).
- Update the Google Maps embeds in `content/site.ts` with your exact addresses.

---

## Design tokens

Brand palette (soft gold, blush pink, deep green) lives in
`tailwind.config.ts` — re-theme the whole site from there.

---

## Notes

- **Fonts:** uses `next/font/google` (Playfair Display + Poppins). Needs network
  access at build time; works on normal networks and on Vercel.
- **Security:** `next` is pinned to the patched `^14.2.x` line.
- Single-scroll page with anchor navigation (ideal for an Instagram-bio link).
  Sections are modular and can be split into routes later.
- Deploy on **Vercel** (zero config) or any Node host.
