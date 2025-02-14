'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroBanner() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      return [...Array(20)].map(() => ({
        x: Math.random() * 100, // Use percentage instead of pixel values
        y: Math.random() * 100,
        nextX: Math.random() * 100,
        nextY: Math.random() * 100
      }));
    };

    setParticles(generateParticles());
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('hero');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/4.jpg"
            fill
            className='w-full h-full object-center'
            alt="Banner background"
            priority
          />
        </div>
        {/* Mobile Image */}
        <div className="block md:hidden h-full">
          <Image
            src="/1.jpg"
            fill
            sizes="100vw"
            className="object-center"
            alt="Banner background"
            priority
            quality={100}
          />
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-20">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#5cdee2] rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`
            }}
            animate={{
              left: `${particle.nextX}%`,
              top: `${particle.nextY}%`,
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      {/* <div className="relative z-30 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-6xl mx-auto"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            The Future is
            <motion.span
              className="block text-[#5cdee2] mt-2"
              animate={{
                textShadow: ["0 0 20px #5cdee2", "0 0 0px #5cdee2"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Electric
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Go Green India with Go Delivery.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                className="w-full sm:w-auto px-6 sm:px-8 md:px-12 py-4 bg-[#5cdee2] text-black text-base md:text-lg font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <motion.span
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                </motion.span>
              </motion.button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <motion.button
                className="w-full sm:w-auto px-6 sm:px-8 md:px-12 py-4 bg-transparent border-2 border-white text-white text-base md:text-lg font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div> */}

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