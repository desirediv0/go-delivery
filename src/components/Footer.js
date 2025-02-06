'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/share/1APbN9TUFJ/' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: 'https://www.instagram.com/go_delivery777?igsh=YW95eXY0Z2E1cGl1' },
  { icon: Linkedin, href: '#' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            {/* <h3 className="text-xl font-bold text-gray-900 mb-4">About Us</h3> */}
            <Image src="/logo-new.png" width={160} height={60} alt='logo'></Image>
            <p className="text-gray-600 pt-3">
              Leading the charge in sustainable mobility solutions for a cleaner, greener future.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              {['FAQ', 'Privacy Policy', 'Terms of Service', 'Contact Support'].map((item) => (
                <li key={item}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Discover</h3>
            <div className='grid grid-cols-2 gap-2 pb-3 md:pb-5'>
              <div>
                <Image src="/google-playstore.png" width={150} height={60} alt='google play store'></Image>
              </div>
              <div>
                <Image src="/applestore.png" width={150} height={60} alt='google play store'></Image>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#5cdee2] transition-all shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="border-t border-gray-200 pt-8"
          variants={itemVariants}
        >
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Go Delivery. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}