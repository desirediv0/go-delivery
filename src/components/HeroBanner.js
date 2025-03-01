'use client'
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroBanner() {

  const scrollToNext = () => {
    const aboutSection = document.getElementById('hero');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full h-[70vh] lg:h-screen overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0">
        {/* Desktop Video */}
        <div className="hidden lg:block h-full w-full">
          <video
            src="/desktop.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
        {/* Mobile Video */}
        <div className="block lg:hidden h-full w-full">
          <video
            src="/mobile.mp4"
            className="w-full object-contain"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
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
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-8 h-8 sm:w-12 sm:h-12" />
      </motion.button>
    </div>
  );
}