"use client"

import { Battery, Clock, Gauge, PiggyBank } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  const features = [
    {
      icon: <Battery className="w-8 h-8" />,
      title: "High Performance Battery",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24*7 Support",
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Quick & Fast Service",
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Save Money",
    },
  ]

  const downloadSteps = [
    "1. Visit your device's app store",
    "2. Search for 'Go Delivery'",
    "3. Click Install/Download",
    "4. Open and start delivering!"
  ]

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center justify-center w-full space-y-8">
            {/* Phone Animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[300px] mx-auto"
            >
              <div className="relative aspect-[1/2]">
                {/* Glowing effect behind phone */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-blue-500/30 rounded-[3rem] blur-2xl" />

                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {/* Download Instructions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center space-y-6 w-full max-w-md"
                  >
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                      How to Download
                    </h3>

                    {/* Download Steps */}
                    <div className="space-y-4">
                      {downloadSteps.map((step, index) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          className="flex items-center gap-2 text-gray-300 justify-center"
                        >
                          <span className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Store Badges */}
                    <div className="pt-6 space-y-4">
                      <p className="text-lg text-gray-300">Available soon on:</p>
                      <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-800/50">
                          <Image
                            src="/google-play.svg"
                            alt="Google Play"
                            width={24}
                            height={24}

                          />
                          <span className="text-gray-400">Google Play Store</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-800/50">
                          <Image
                            src="/app-store.svg"
                            alt="App Store"
                            width={24}
                            height={24}

                          />
                          <span className="text-gray-400">Apple App Store</span>
                        </div>
                      </div>

                      {/* Coming Soon Badge */}
                      <motion.div
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30"
                      >
                        <span className="text-cyan-400 font-semibold">Coming Soon</span>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Animated rings */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-[3rem] animate-pulse" />
                  <div className="absolute inset-4 border-2 border-purple-500/20 rounded-[2.5rem] animate-pulse animation-delay-500" />
                  <div className="absolute inset-8 border-2 border-blue-500/20 rounded-[2rem] animate-pulse animation-delay-1000" />
                </div>
              </div>
            </motion.div>


          </div>

          {/* Right Column Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8 text-white"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm">
                  The Future of Delivery
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                Discover Go Delivery
              </h1>
            </div>

            <p className="text-lg text-gray-300">
              Ride the HIGH PERFORMANCE powerful two-wheeler vehicles on easy rentals and
              maximize your earnings by saving fuel cost and go green with ZERO EMISSIONS.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="relative p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-800/50 backdrop-blur-sm hover:border-cyan-500/50 transition-colors duration-300">
                    <div className="absolute inset-0 bg-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                        <div className="text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}