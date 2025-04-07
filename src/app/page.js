import About from "@/components/About";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import HeroBanner from "@/components/HeroBanner";
import Instruction from "@/components/Instruction";
import Pricecards from "@/components/pricecards";
import Services from "@/components/Services";
// import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Features />
      <About />
      <Instruction />
      {/* <Testimonial /> */}
      <Services />
      <Pricecards />
      <Contact />
    </>
  );
}
