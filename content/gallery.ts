export type GalleryCategory = "weddings" | "birthdays" | "corporate" | "decor";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  src: string;
  type?: "image" | "video";
  tall?: boolean;
  createdAt?: string;
}

export const galleryFilters: { key: GalleryCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "weddings", label: "Weddings" },
  { key: "birthdays", label: "Birthdays & Kids" },
  { key: "corporate", label: "Corporate" },
  { key: "decor", label: "Decor" },
];
