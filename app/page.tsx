import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

/**
 * Home — single-scroll conversion page.
 * Each block is a self-contained section component (easy to reorder or split
 * into dedicated routes later). The Navbar links are in-page anchors.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
