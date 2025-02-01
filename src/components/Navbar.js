'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navItems = [
{ path: '/', label: 'Home', icon: '🏠' },
{ path: '/about', label: 'About', icon: '👥' },
{ path: '/contact', label: 'Contact', icon: '👥' },
{ path: '/help', label: 'Help', icon: '⚡' },
{ path: '/join-us', label: 'Join Us', icon: '📧' },
];

const logoVariants = {
hidden: { opacity: 0, x: -20 },
visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
}
};

const navItemVariants = {
hidden: { opacity: 0, y: 20 },
visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
}
};

export default function Navbar() {
const [isScrolled, setIsScrolled] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const pathname = usePathname();

useEffect(() => {
    const handleScroll = () => {
     setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

return (
    <>
     <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
         isScrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}
     >
        <div className="container max-w-screen-xl mx-auto px-4 py-2">
         <div className="flex items-center justify-between h-20">
            <motion.div
             variants={logoVariants}
             initial="hidden"
             animate="visible"
            >
             <Link href="/" className="flex items-center space-x-2">
                {/* <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-400
                 bg-clip-text text-transparent">
                 Go Delivery
                </span> */}
                {
                  isScrolled ? <Image src="/logo-new.png" width={110} height={60} alt='logo'></Image>
                   : <Image src="/logo-white.png" width={110} height={60} alt='logo'></Image>
                }
                
             </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
             {navItems.map((item) => (
                <Link
                 key={item.path}
                 href={item.path}
                >
                 <motion.div
                    className={`px-4 py-2 rounded-full relative ${
                     isScrolled ? 'text-gray-800' : 'text-white'
                    } hover:text-[#5cdee2] transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                 >
                    <span className="relative z-10 font-medium">
                     {item.label}
                    </span>
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
            </div>

            {/* Mobile Menu Button */}
            <motion.button
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className="md:hidden p-2 rounded-full hover:bg-gray-100/20"
            >
             {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
             ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
             )}
            </motion.button>
         </div>
        </div>
     </motion.nav>

     {/* Mobile Menu */}
     <AnimatePresence>
        {isMobileMenuOpen && (
         <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg pt-20"
         >
            <div className="container mx-auto px-4 py-8">
             <div className="flex flex-col space-y-4">
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
                     className={`flex items-center space-x-4 p-4 rounded-xl ${
                        pathname === item.path
                         ? 'bg-blue-50 text-blue-600'
                         : 'text-gray-800 hover:bg-gray-50'
                     }`}
                    >
                     <span className="text-xl">{item.icon}</span>
                     <span className="text-lg font-medium">{item.label}</span>
                     <ChevronRight className="ml-auto w-5 h-5" />
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