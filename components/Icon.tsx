/**
 * Inline SVG icon set — keyed by the `icon` strings used in the content layer.
 * Lightweight (no icon library dependency) and inherits `currentColor`.
 * To add an icon: add a new key here and reference it from content.
 */
import type { SVGProps } from "react";

type IconName =
  | "rings" | "sparkle" | "flower" | "cake" | "marigold" | "heart"
  | "balloon" | "stage" | "champagne" | "briefcase" | "podium" | "screen"
  | "building" | "trophy" | "music" | "star" | "ribbon" | "plus"
  | "shield" | "palette" | "pin" | "whatsapp" | "instagram" | "phone"
  | "menu" | "close" | "arrow" | "quote" | "calendar" | "globe";

const paths: Record<IconName, React.ReactNode> = {
  rings: <><circle cx="9" cy="14" r="6" /><circle cx="15" cy="14" r="6" /><path d="M9 3l1.5 3h-3L9 3zM15 3l1.5 3h-3L15 3z" /></>,
  sparkle: <path d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8L12 2z" />,
  flower: <><circle cx="12" cy="12" r="3" /><path d="M12 2a3 3 0 013 3c0 2-3 4-3 4s-3-2-3-4a3 3 0 013-3zM12 22a3 3 0 01-3-3c0-2 3-4 3-4s3 2 3 4a3 3 0 01-3 3zM2 12a3 3 0 013-3c2 0 4 3 4 3s-2 3-4 3a3 3 0 01-3-3zM22 12a3 3 0 01-3 3c-2 0-4-3-4-3s2-3 4-3a3 3 0 013 3z" /></>,
  cake: <><path d="M4 21h16M5 21v-7a2 2 0 012-2h10a2 2 0 012 2v7M3 16h18M12 8V4M9 5l3-2 3 2" /></>,
  marigold: <><circle cx="12" cy="12" r="2.5" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>,
  heart: <path d="M12 21s-7-4.6-9.5-9A5 5 0 0112 5a5 5 0 019.5 7c-2.5 4.4-9.5 9-9.5 9z" />,
  balloon: <><path d="M12 3a5 5 0 015 5c0 3.3-3 7-5 7s-5-3.7-5-7a5 5 0 015-5zM12 15v3M11 21h2" /></>,
  stage: <><path d="M3 8h18M5 8v10M19 8v10M3 18h18M8 8V5l4-2 4 2v3" /></>,
  champagne: <><path d="M8 3h8l-1 7a3 3 0 01-6 0L8 3zM12 13v6M9 21h6" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18" /></>,
  podium: <><path d="M12 3v6M8 6h8M6 21l2-9h8l2 9M4 21h16" /></>,
  screen: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>,
  building: <><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" /></>,
  trophy: <><path d="M7 4h10v4a5 5 0 01-10 0V4zM5 4H3v2a3 3 0 003 3M19 4h2v2a3 3 0 01-3 3M12 13v4M8 21h8M9 21l1-4h4l1 4" /></>,
  music: <><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /><path d="M9 18V5l12-2v13" /></>,
  star: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z" />,
  ribbon: <><circle cx="12" cy="9" r="5" /><path d="M9 13l-3 8 6-3 6 3-3-8" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></>,
  palette: <><path d="M12 3a9 9 0 100 18c1.4 0 2-1 2-2 0-1.5 1-2 2-2h1a4 4 0 004-4c0-5-4-8-9-8z" /><circle cx="7.5" cy="11" r="1" /><circle cx="11" cy="7.5" r="1" /><circle cx="15" cy="8.5" r="1" /></>,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  whatsapp: <path d="M12.02 2C6.6 2 2.2 6.4 2.2 11.82c0 1.9.5 3.66 1.36 5.2L2 22l5.12-1.5a9.8 9.8 0 004.9 1.32h.01c5.42 0 9.82-4.4 9.82-9.82C21.85 6.4 17.44 2 12.02 2zm5.7 13.9c-.24.68-1.4 1.3-1.93 1.34-.5.05-1.13.27-3.78-.8-3.18-1.28-5.2-4.5-5.36-4.7-.16-.22-1.28-1.7-1.28-3.24s.8-2.3 1.1-2.62c.28-.3.62-.38.83-.38l.6.01c.2 0 .46-.07.72.55.28.66.95 2.28 1.03 2.44.08.16.13.35.02.56-.1.22-.16.35-.32.54l-.48.56c-.16.16-.33.34-.14.66.18.32.82 1.36 1.77 2.2 1.22 1.1 2.25 1.43 2.57 1.6.32.16.5.13.7-.08.2-.22.8-.94 1.02-1.26.2-.32.42-.27.7-.16.28.1 1.78.84 2.08 1 .3.16.5.24.58.36.07.13.07.74-.17 1.42z" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1" /></>,
  phone: <path d="M5 3h4l2 5-2.5 1.5a11 11 0 005 5L19 12l2 5v4a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1" />,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="M6 6l12 12M18 6L6 18" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  quote: <path d="M7 7h4v6c0 2-1.5 3.5-4 4v-2c1.2-.3 2-1 2-2H7V7zm8 0h4v6c0 2-1.5 3.5-4 4v-2c1.2-.3 2-1 2-2h-2V7z" />,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></>,
};

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  /** Use filled style (solid) instead of stroked outline. */
  filled?: boolean;
}

export default function Icon({ name, filled, ...props }: IconProps) {
  const isFilled = filled ?? ["star", "heart", "sparkle", "quote", "whatsapp"].includes(name);
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
