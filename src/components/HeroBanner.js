'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroBanner() {
  const [particles, setParticles] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Generate initial particles
    const generateParticles = () => {
      return [...Array(20)].map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        nextX: Math.random() * window.innerWidth,
        nextY: Math.random() * window.innerHeight
      }));
    };

    setParticles(generateParticles());

    // Handle window resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
      setParticles(generateParticles());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('hero');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <Image src="/banner.png" fill className='w-full h-4/5 md:h-full object-cover' alt="Banner background"/>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-20">
        <div className="absolute w-full h-full">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#5cdee2] rounded-full"
              initial={{
                x: particle.x,
                y: particle.y,
              }}
              animate={{
                x: particle.nextX,
                y: particle.nextY,
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
      </div>

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-8xl font-bold text-white mb-6"
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
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Go Green India with Go Delivery.
          </motion.p>

                   <motion.div 
            className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center w-full px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href="/contact" className="w-full md:w-auto">
              <motion.button 
                className="w-full md:w-auto px-6 md:px-12 py-4 md:py-5 bg-[#5cdee2] text-black text-base md:text-lg font-semibold rounded-full flex items-center justify-center gap-2 group hover:bg-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: 5 }}
                  transition={{ 
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.6 
                  }}
                >
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                </motion.span>
              </motion.button>
            </Link>
            <Link href="/about" className="w-full md:w-auto">
              <motion.button 
                className="w-full md:w-auto px-6 md:px-12 py-4 md:py-5 bg-transparent border-2 border-white text-white text-base md:text-lg font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white z-30"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-12 h-12" />
      </motion.button>
    </div>
  );
}