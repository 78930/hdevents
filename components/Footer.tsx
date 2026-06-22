import Icon from "./Icon";
import { site } from "@/content/site";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

/**
 * Sticky footer CTA band + footer.
 * The CTA band repeats the primary conversion action at the end of the scroll.
 */
export default function Footer() {
  return (
    <footer id="footer">
      {/* ---- Sticky footer CTA band ---- */}
      <section className="relative overflow-hidden bg-forest-900 py-16 text-center">
        <div className="container-px relative z-10">
          <p className="eyebrow text-gold-300">{site.hero.ctaLine}</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s plan something unforgettable.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <Icon name="whatsapp" /> Get a Quote on WhatsApp
            </a>
            <a href="#contact" className="btn-gold">
              Book a Consultation <Icon name="arrow" />
            </a>
          </div>
        </div>
        {/* subtle gold glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-500/20 blur-3xl" />
      </section>

      {/* ---- Footer info ---- */}
      <div className="bg-forest-950 text-blush-100">
        <div className="container-px grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-sheen font-serif font-bold text-forest-900">
                HD
              </span>
              <span className="font-serif text-lg font-semibold text-white">
                {site.brandShort}
              </span>
            </div>
            <p className="mt-4 text-sm text-blush-100/70">{site.tagline}</p>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-gold-300">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-blush-100/80">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#gallery" className="hover:text-white">Theme Gallery</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-gold-300">
              Reach Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-blush-100/80">
              <li className="flex items-center gap-2">
                <Icon name="phone" className="text-gold-300" />
                <a href={`tel:+${site.whatsappNumber}`} className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="instagram" className="text-gold-300" />
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {site.instagramHandle}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="globe" className="text-gold-300" />
                <a href={`https://${site.website}`} className="hover:text-white">
                  {site.website}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-gold-300">
              We Serve
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-blush-100/80">
              {site.cities.map((c) => (
                <li key={c.name} className="flex items-center gap-2">
                  <Icon name="pin" className="text-gold-300" /> {c.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-px flex flex-col items-center justify-between gap-2 py-6 text-xs text-blush-100/60 sm:flex-row">
            <p>© {new Date().getFullYear()} {site.brand}. All rights reserved.</p>
            <p>Designed for celebrations across Hyderabad &amp; Vijayawada.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
