import About from "@/components/About";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import HeroBanner from "@/components/HeroBanner";
import Instruction from "@/components/Instruction";
import Services from "@/components/Services";
// import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Instruction />
      <About />
      <Features />
      {/* <Testimonial /> */}
      <Services />
      <Contact />
    </>
  );
}
