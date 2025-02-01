import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroBanner from "@/components/HeroBanner";
import Instruction from "@/components/Instruction";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroBanner/>
      <Instruction/>
      <About/>
      <Testimonial/>
      <Services/>
      <Contact/>
    </>
  );
}
