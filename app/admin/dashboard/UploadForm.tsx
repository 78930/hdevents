"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  { value: "weddings", label: "Weddings" },
  { value: "birthdays", label: "Birthdays & Kids" },
  { value: "corporate", label: "Corporate" },
  { value: "decor", label: "Decor" },
];

export default function UploadForm() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("weddings");
  const [tall, setTall] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!files || files.length === 0) return;

    setUploading(true);
    setMessage("");
    setProgress(0);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fd = new FormData();
      fd.append("file", file);
      fd.append("title", title || file.name.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "));
      fd.append("category", category);
      fd.append("tall", String(tall));

      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });

      if (!res.ok) {
        const data = await res.json();
        setMessage(`Error uploading ${file.name}: ${data.error}`);
        setUploading(false);
        return;
      }

      setProgress(Math.round(((i + 1) / files.length) * 100));
    }

    setMessage(`✓ ${files.length} file(s) uploaded`);
    setFiles(null);
    setTitle("");
    if (inputRef.current) inputRef.current.value = "";
    setUploading(false);
    router.refresh();
  }

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-lg font-semibold text-forest-900 mb-5">
        Upload Photos &amp; Videos
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Drop zone */}
        <div
          className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center cursor-pointer hover:border-forest-400 hover:bg-forest-50 transition-colors"
          onClick={() => inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*,video/*"
            multiple
            className="hidden"
            onChange={(e) => { setFiles(e.target.files); setMessage(""); }}
          />
          {files && files.length > 0 ? (
            <p className="text-forest-700 font-medium">
              {files.length} file{files.length > 1 ? "s" : ""} selected
            </p>
          ) : (
            <>
              <p className="text-3xl mb-2">📸</p>
              <p className="text-gray-500 font-medium">Click to select photos or videos</p>
              <p className="text-gray-400 text-xs mt-1">JPG, PNG, WEBP, MP4, MOV — multiple allowed</p>
            </>
          )}
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
            <span className="text-gray-400 font-normal ml-1">(optional — uses filename if blank)</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Royal Wedding Stage"
            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest-400"
          />
        </div>

        {/* Category + Tall */}
        <div className="flex gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest-400 bg-white"
            >
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>

          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer pb-2.5">
            <input
              type="checkbox"
              checked={tall}
              onChange={(e) => setTall(e.target.checked)}
              className="w-4 h-4 accent-forest-700 rounded"
            />
            Tall tile
          </label>
        </div>

        {/* Progress + message */}
        {uploading && (
          <div className="space-y-1">
            <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
              <div
                className="h-full bg-forest-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-gray-400">Uploading… {progress}%</p>
          </div>
        )}

        {message && (
          <p className={`text-sm ${message.startsWith("✓") ? "text-green-600" : "text-red-500"}`}>
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={uploading || !files || files.length === 0}
          className="bg-forest-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-forest-800 transition-colors disabled:opacity-40"
        >
          {uploading ? "Uploading…" : "Upload"}
        </button>
      </form>
    </section>
  );
}
