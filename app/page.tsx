import { readGallery } from "@/lib/gallery";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const galleryItems = await readGallery();
  const heroImages = galleryItems
    .filter((item) => !item.type || item.type === "image")
    .map((item) => item.src);

  return (
    <>
      <Gallery items={galleryItems} />
      <Services />
      <Hero images={heroImages} />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </>
  );
}
