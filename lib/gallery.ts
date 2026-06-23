import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import type { GalleryItem } from "@/content/gallery";

const DATA_FILE = join(process.cwd(), "data", "gallery.json");

function getLocalGallery(): GalleryItem[] {
  try {
    if (!existsSync(DATA_FILE)) return [];
    return JSON.parse(readFileSync(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}

export async function readGallery(): Promise<GalleryItem[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return getLocalGallery();
  }
  try {
    const { list } = await import("@vercel/blob");
    const { blobs } = await list({ prefix: "gallery-manifest" });
    if (blobs.length === 0) return getLocalGallery();
    const latest = blobs.sort(
      (a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
    )[0];
    const res = await fetch(latest.url, { cache: "no-store" });
    return await res.json();
  } catch {
    return getLocalGallery();
  }
}

export async function writeGallery(items: GalleryItem[]): Promise<void> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    const dir = join(process.cwd(), "data");
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    writeFileSync(DATA_FILE, JSON.stringify(items, null, 2));
    return;
  }
  const { put, del, list } = await import("@vercel/blob");
  const { blobs: old } = await list({ prefix: "gallery-manifest" });
  if (old.length > 0) await del(old.map((b) => b.url));
  await put("gallery-manifest.json", JSON.stringify(items, null, 2), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
  });
}
