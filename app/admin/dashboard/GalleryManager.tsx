"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { GalleryItem } from "@/content/gallery";

export default function GalleryManager({ items }: { items: GalleryItem[] }) {
  const [deleting, setDeleting] = useState<string | null>(null);
  const router = useRouter();

  async function handleDelete(id: string) {
    if (!confirm("Delete this item? This cannot be undone.")) return;
    setDeleting(id);
    const res = await fetch(`/api/admin/gallery/${id}`, { method: "DELETE" });
    if (!res.ok) {
      alert("Failed to delete item.");
    }
    setDeleting(null);
    router.refresh();
  }

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-lg font-semibold text-forest-900 mb-5">
        Gallery Items
        <span className="ml-2 text-sm font-normal text-gray-400">({items.length} total)</span>
      </h2>

      {items.length === 0 ? (
        <p className="text-gray-400 text-sm py-6 text-center">
          No items yet. Upload some photos or videos above.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-xl overflow-hidden bg-gray-100 aspect-square"
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Video badge */}
              {item.type === "video" && (
                <span className="absolute top-1.5 left-1.5 bg-black/60 text-white text-[10px] font-medium px-1.5 py-0.5 rounded">
                  VIDEO
                </span>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-forest-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2.5">
                <div>
                  <p className="text-white text-xs font-semibold line-clamp-2 leading-tight">
                    {item.title}
                  </p>
                  <p className="text-white/50 text-[10px] capitalize mt-0.5">{item.category}</p>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  disabled={deleting === item.id}
                  className="self-end bg-red-500 hover:bg-red-600 text-white text-xs px-2.5 py-1 rounded-lg transition-colors disabled:opacity-50"
                >
                  {deleting === item.id ? "…" : "🗑 Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
