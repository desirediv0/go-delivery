"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Construction, Wrench, Hammer, Rocket } from "lucide-react"

export default function NotFound() {
    const tools = [
        { icon: <Construction size={24} />, delay: 0 },
        { icon: <Wrench size={24} />, delay: 0.2 },
        { icon: <Hammer size={24} />, delay: 0.4 },
        { icon: <Rocket size={24} />, delay: 0.6 }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Floating Background Elements */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-500/20 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>

            <div className="w-full max-w-3xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-8"
                >
                    {/* Animated Tools */}
                    <div className="flex justify-center gap-6 mb-8">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: tool.delay }}
                                className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
                            >
                                <motion.div
                                    animate={{ rotate: [0, 180, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: tool.delay
                                    }}
                                    className="text-cyan-400"
                                >
                                    {tool.icon}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Enhanced Text Content */}
                    <div className="space-y-6 relative">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 animate-gradient">
                                Coming Soon
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-400"
                        >
                            This page is currently under construction
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-500 max-w-lg mx-auto"
                        >
                            We're working hard to bring you something amazing. Please check back later or return to the homepage.
                        </motion.p>
                    </div>

                    {/* Enhanced Progress Bar */}
                    <div className="relative">
                        <motion.div
                            className="w-72 h-3 bg-gray-800/50 rounded-full mx-auto overflow-hidden backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.div
                                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500"
                                animate={{
                                    x: [-288, 288],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Enhanced Back Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link href="/">
                            <motion.div
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.15)" }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
                            >
                                <ArrowLeft size={20} />
                                <span className="font-medium">Return to Homepage</span>
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}