/**
 * THEME GALLERY CONTENT
 * ---------------------------------------------------------------------------
 * Placeholder images are clearly labeled — replace `src` with real photos
 * (drop files in /public/gallery and point src to "/gallery/your-photo.jpg",
 * or later swap to Sanity image URLs). Keep `category` to drive the filters.
 */
export type GalleryCategory = "weddings" | "birthdays" | "corporate" | "decor";

export interface GalleryItem {
  id: string;
  /** Human label shown in the lightbox + alt text. */
  title: string;
  category: GalleryCategory;
  src: string;
  /** Masonry hint: tall tiles add vertical interest. */
  tall?: boolean;
}

export const galleryFilters: { key: GalleryCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "weddings", label: "Weddings" },
  { key: "birthdays", label: "Birthdays & Kids" },
  { key: "corporate", label: "Corporate" },
  { key: "decor", label: "Decor" },
];

/**
 * Placeholder set. Each item uses an Unsplash photo as a stand-in.
 * TODO (client): replace every `src` below with your own event photos.
 */
export const gallery: GalleryItem[] = [
  { id: "g1", title: "PLACEHOLDER — Wedding Stage", category: "weddings", src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=70", tall: true },
  { id: "g2", title: "PLACEHOLDER — Bride Entry", category: "weddings", src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=70" },
  { id: "g3", title: "PLACEHOLDER — Haldi Setup", category: "decor", src: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=800&q=70" },
  { id: "g4", title: "PLACEHOLDER — Kids Birthday Theme", category: "birthdays", src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=70", tall: true },
  { id: "g5", title: "PLACEHOLDER — Corporate Conference", category: "corporate", src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=70" },
  { id: "g6", title: "PLACEHOLDER — Floral Mandap", category: "weddings", src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=70" },
  { id: "g7", title: "PLACEHOLDER — Balloon Decor", category: "birthdays", src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=70" },
  { id: "g8", title: "PLACEHOLDER — Product Launch", category: "corporate", src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=70", tall: true },
  { id: "g9", title: "PLACEHOLDER — Reception Drapes", category: "decor", src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=70" },
  { id: "g10", title: "PLACEHOLDER — Engagement Stage", category: "weddings", src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=70" },
  { id: "g11", title: "PLACEHOLDER — Annual Function", category: "corporate", src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=70" },
  { id: "g12", title: "PLACEHOLDER — Theme Table Decor", category: "decor", src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=70", tall: true },
];
