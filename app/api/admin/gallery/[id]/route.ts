import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { readGallery, writeGallery } from "@/lib/gallery";

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const gallery = await readGallery();
  const item = gallery.find((g) => g.id === params.id);

  if (!item) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Delete the physical file
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    // Production: delete from Vercel Blob (only if it's a Blob URL)
    if (item.src.startsWith("https://")) {
      const { del } = await import("@vercel/blob");
      await del(item.src).catch(() => {});
    }
  } else if (item.src.startsWith("/gallery/")) {
    // Development: delete from local filesystem
    const { unlinkSync, existsSync } = await import("fs");
    const { join } = await import("path");
    const filepath = join(process.cwd(), "public", item.src);
    if (existsSync(filepath)) unlinkSync(filepath);
  }

  await writeGallery(gallery.filter((g) => g.id !== params.id));
  revalidatePath("/");
  return NextResponse.json({ success: true });
}
