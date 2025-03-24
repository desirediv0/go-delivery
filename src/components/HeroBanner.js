"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HeroBanner() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("hero");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-[55vh] lg:h-[55vh] overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0">
        {/* Desktop Video */}
        <div className="hidden lg:block h-full w-full">
          <Image
            width={2000}
            height={1200}
            src="/Desktop.gif"
            className="w-full  object-cover"
            unoptimized
          />
        </div>
        {/* Mobile Video */}
        <div className="block h-full w-full lg:hidden ">
          <Image
            width={2000}
            height={1200}
            src="/mobile.gif"
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-30"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-8 h-8 sm:w-12 sm:h-12" />
      </motion.button>
    </div>
  );
}
