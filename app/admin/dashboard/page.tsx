import Image from "next/image";
import Link from "next/link";
import { readGallery } from "@/lib/gallery";
import UploadForm from "./UploadForm";
import GalleryManager from "./GalleryManager";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const items = await readGallery();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-forest-900 text-white px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/happy events logo.jpeg"
              alt="Happy Days Events"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-serif font-semibold leading-none">Happy Days Admin</p>
              <p className="text-xs text-white/50 mt-0.5">
                {items.length} gallery item{items.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/" target="_blank" className="text-sm text-white/60 hover:text-white transition-colors">
              View Site ↗
            </Link>
            <form action="/api/admin/logout" method="POST">
              <button
                type="submit"
                className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <UploadForm />
        <GalleryManager items={items} />
      </div>
    </div>
  );
}
