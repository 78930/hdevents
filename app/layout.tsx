import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";

// Brand fonts wired to the CSS variables used in tailwind.config.ts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL = "https://happydaysevents.in";

/**
 * SEO metadata — targets the priority local-search keywords.
 * Next.js App Router renders these into <head> automatically.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Happy Days — Events & Decor | Event Planner Hyderabad & Vijayawada",
    template: "%s | Happy Days — Events & Decor",
  },
  description:
    "Happy Days — Events & Decor plans weddings, birthdays and corporate events in Hyderabad & Vijayawada. End-to-end event management and custom décor. Your Event. Our Responsibility.",
  keywords: [
    "event planner Hyderabad",
    "wedding decoration Vijayawada",
    "birthday decorators Hyderabad",
    "corporate event management Hyderabad",
    "event management Vijayawada",
    "haldi decoration Hyderabad",
    "stage decoration Vijayawada",
  ],
  authors: [{ name: site.brand }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Happy Days — Events & Decor | Hyderabad & Vijayawada",
    description:
      "Turning Moments Into Memories. Weddings, birthdays & corporate events, planned and decorated end to end across Hyderabad & Vijayawada.",
    siteName: site.brand,
    locale: "en_IN",
    // TODO (client): add a real share image at /public/og-image.jpg (1200x630)
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: site.brand }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Days — Events & Decor",
    description:
      "Event planning & décor in Hyderabad & Vijayawada. Your Event. Our Responsibility.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#123726",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        {/* LocalBusiness structured data (both cities + phone) */}
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Site-wide floating WhatsApp button */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
