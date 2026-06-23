import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { readGallery, writeGallery } from "@/lib/gallery";
import type { GalleryCategory } from "@/content/gallery";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const title = formData.get("title") as string;
  const category = (formData.get("category") as string) || "decor";
  const tall = formData.get("tall") === "true";

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const ext = file.name.split(".").pop() || "jpg";
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const type = file.type.startsWith("video/") ? "video" : "image";

  let src: string;

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    // Production: upload to Vercel Blob
    const { put } = await import("@vercel/blob");
    const blob = await put(`gallery/${filename}`, file, { access: "public" });
    src = blob.url;
  } else {
    // Development: write to public/gallery/
    const { writeFileSync, mkdirSync, existsSync } = await import("fs");
    const { join } = await import("path");
    const dir = join(process.cwd(), "public", "gallery");
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    const buffer = Buffer.from(await file.arrayBuffer());
    writeFileSync(join(dir, filename), buffer);
    src = `/gallery/${filename}`;
  }

  const item = {
    id: `g${Date.now()}`,
    title: title || filename.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
    category: category as GalleryCategory,
    src,
    type: type as "image" | "video",
    tall,
    createdAt: new Date().toISOString(),
  };

  const gallery = await readGallery();
  gallery.push(item);
  await writeGallery(gallery);

  revalidatePath("/");
  return NextResponse.json({ success: true, item });
}
