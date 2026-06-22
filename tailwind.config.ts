import type { Config } from "tailwindcss";

/**
 * Brand design tokens for Happy Days — Events & Decor.
 * Palette: soft golds + blush pink + deep green accents (matches the green/gold logo).
 * Edit these values to re-theme the entire site from one place.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep elegant green (primary brand / dark hero)
        forest: {
          50: "#eef5f0",
          100: "#d6e7dc",
          200: "#a9cdb6",
          300: "#79b08e",
          400: "#4f9069",
          500: "#2f7350",
          600: "#1f5b3f",
          700: "#184733",
          800: "#123726",
          900: "#0d2a1d",
          950: "#06160f",
        },
        // Soft gold / champagne (accent + CTAs)
        gold: {
          50: "#fbf7ec",
          100: "#f5eccf",
          200: "#ecd89c",
          300: "#e3c469",
          400: "#d9b143",
          500: "#c79a2f",
          600: "#a87b26",
          700: "#855d22",
          800: "#6f4c23",
          900: "#5f4023",
        },
        // Blush pink (soft highlights / backgrounds)
        blush: {
          50: "#fdf3f4",
          100: "#fbe6e9",
          200: "#f6ccd4",
          300: "#efa6b5",
          400: "#e4768d",
          500: "#d54f6c",
          600: "#bf3354",
          700: "#a02545",
          800: "#86223f",
          900: "#72203b",
        },
        // WhatsApp brand green (for the floating button)
        whatsapp: "#25D366",
      },
      fontFamily: {
        // Wired up in app/layout.tsx via next/font
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(13, 42, 29, 0.18)",
        lift: "0 22px 50px -18px rgba(13, 42, 29, 0.35)",
      },
      backgroundImage: {
        "gold-sheen":
          "linear-gradient(135deg, #e3c469 0%, #f5eccf 45%, #c79a2f 100%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
