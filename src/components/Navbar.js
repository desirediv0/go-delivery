'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Download } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/help', label: 'Help' },
  { path: '/join-us', label: 'Join Us' },
];

const storeLinks = {
  android: "https://play.google.com/store/apps/",
  ios: "https://apps.apple.com/app/godelivery",
  mac: "https://apps.apple.com/app/godelivery",
  default: "https://play.google.com/store/apps/"
};

const logoVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const navItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};


const ComingSoonButton = ({ isScrolled }) => (
  <motion.div
    className={`px-6 py-2 rounded-full ${isScrolled ? 'bg-[#5cdee2]/50 text-slate-800' : 'bg-white/10 text-white'
      } font-medium flex items-center gap-2 cursor-pointer`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => alert('Our app is coming soon!')}
  >
    <Download className="w-5 h-5" />
    <span className="relative">
      Coming Soon

    </span>
  </motion.div>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [storeUrl, setStoreUrl] = useState(storeLinks.default);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const userAgent = window.navigator.userAgent.toLowerCase();

    if (/android/.test(userAgent)) setStoreUrl(storeLinks.android);
    else if (/iphone|ipad|ipod/.test(userAgent)) setStoreUrl(storeLinks.ios);
    else if (/macintosh/.test(userAgent)) setStoreUrl(storeLinks.mac);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
          }`}
      >
        <div className="container max-w-screen-xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left Aligned */}
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              className="flex-shrink-0"
            >
              <Link href="/" className="flex items-center space-x-2">
                {isScrolled ?
                  <Image src="/logo-new.png" width={110} height={60} alt='logo' /> :
                  <Image src="/logo-white.png" width={110} height={60} alt='logo' />
                }
              </Link>
            </motion.div>

            {/* Desktop Menu - Right Aligned */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <motion.div
                    className={`px-4 py-2 rounded-full relative ${isScrolled ? 'text-gray-800' : 'text-white'
                      } hover:text-[#5cdee2] transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 font-medium">{item.label}</span>
                    {pathname === item.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-blue-100/50 rounded-full"
                        transition={{ type: "spring", bounce: 0.2 }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}

              <ComingSoonButton isScrolled={isScrolled} />

              {/* <motion.a
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2 rounded-full ${isScrolled ? 'bg-[#5cdee2] text-slate-800' : 'bg-white text-slate-800'
                  } font-medium hover:opacity-90 transition-all flex items-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download App
              </motion.a> */}
            </div>

            {/* Mobile Controls - Right Aligned */}
            <div className="flex md:hidden items-center gap-4">
              {/* <motion.a
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-full ${isScrolled ? 'bg-[#5cdee2] text-slate-800' : 'bg-white text-slate-800'
                  } font-medium hover:opacity-90 transition-all flex items-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span className="text-sm">Download</span>
              </motion.a> */}

              <motion.div
                className={`px-4 py-2 rounded-full ${isScrolled ? 'bg-[#5cdee2]/50 text-slate-800' : 'bg-white/10 text-white'
                  } font-medium flex items-center gap-2 cursor-pointer`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert('Our app is coming soon!')}
              >
                <Download className="w-5 h-5" />
                <span className="text-sm">Coming Soon</span>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-100/20"
              >
                {isMobileMenuOpen ?
                  <X color='#000' className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} /> :
                  <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
                }
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed inset-0 z-40 bg-white pt-24"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    exit="hidden"
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-4 p-4 rounded-xl ${pathname === item.path
                        ? 'bg-[#5cdee2]/10 text-[#5cdee2]'
                        : 'text-gray-800 hover:bg-gray-50'
                        }`}
                    >
                      <span className="text-xl font-medium">{item.label}</span>
                      <ChevronRight className="ml-auto w-6 h-6" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}