'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Battery, Zap } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { label: 'Comfort in Ride', value: '50K+', icon: Leaf },
  { label: 'Easy Battery Swap', value: '100K+', icon: Battery },
  { label: 'Charging Point', value: '1M+', icon: Zap },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#5cdee2] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5cdee2] rounded-full filter blur-3xl" />
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <motion.div 
          className="mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Revolutionizing
              <span className="text-[#5cdee2] block mt-2">Urban Mobility</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're transforming cities with sustainable electric mobility solutions that make
              transportation cleaner, smarter, and more accessible for everyone.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative group"
                >
                  <motion.div
                    className="absolute inset-0 bg-[#5cdee2]/10 rounded-2xl -z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="p-8 text-center">
                    <motion.div 
                      className="w-20 h-20 bg-[#5cdee2]/20 rounded-full flex items-center justify-center mx-auto mb-6"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-10 h-10 text-[#5cdee2]" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                    {/* <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3> */}
                    {/* <p className="text-gray-600 text-lg">{stat.label}</p> */}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Vision Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-[#5cdee2]/20 rounded-3xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <Image
                src="/img1.png"
                alt="Electric Vehicle"
                width={600}
                height={600}
                className="w-full h-[600px] object-cover rounded-3xl shadow-xl"
              />
            </div>
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-gray-900">
                Our Vision for the Future
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
              At GoDelivery Rental, we make it easy for businesses to get the vehicles they need for deliveries without the hassle of owning them. Whether you run a restaurant, a retail store, or an online shop, we offer scooter rentals that help you deliver faster and more efficiently.
              </p>
              <ul className="space-y-6">
                {[
                  'No License Required',
                  'Smart city integration',
                  'Mobile Stand',
                  'Sustainable energy ecosystem',
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center space-x-4 text-lg text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <span className="w-3 h-3 bg-[#5cdee2] rounded-full" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}