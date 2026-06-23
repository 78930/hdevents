"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      const data = await res.json();
      setError(data.error || "Invalid password");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-forest-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <Image
            src="/happy events logo.jpeg"
            alt="Happy Days Events"
            width={88}
            height={88}
            className="rounded-full shadow-lift"
          />
        </div>

        <h1 className="text-center text-2xl font-serif font-semibold text-white mb-1">
          Admin Panel
        </h1>
        <p className="text-center text-white/40 text-sm mb-8">
          Happy Days Events &amp; Decor
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-gold-400"
            required
            autoFocus
          />

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gold-sheen text-forest-900 font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Logging in…" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
