/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
      // Vercel Blob storage for uploaded gallery images
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
    ],
  },
};
export default nextConfig;
