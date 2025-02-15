"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
    Clock,
    CalendarDays,
    Wrench,
    Shield,
    Leaf,
    Wallet
} from "lucide-react"

const features = [
    {
        icon: Clock,
        title: "24/7 Availability",
        description: "Access our vehicles whenever you need them"
    },
    {
        icon: CalendarDays,
        title: "Flexible Plans",
        description: "Daily, weekly, or monthly rental options"
    },
    {
        icon: Wrench,
        title: "Maintained Fleet",
        description: "Regular servicing and clean vehicles"
    },
    {
        icon: Shield,
        title: "Full Insurance",
        description: "Comprehensive coverage included"
    },
    {
        icon: Leaf,
        title: "Eco-Friendly",
        description: "Electric vehicles for green delivery"
    },
    {
        icon: Wallet,
        title: "Best Pricing",
        description: "Competitive rates for all plans"
    }
]

export default function Features() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-cyan-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                        Why Choose
                        <span className="text-[#5cdee2]"> GoDelivery</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Experience premium delivery vehicle rentals with features designed for your business success
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 md:gap-12 items-center">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="relative w-full h-[500px] md:h-[800px] rounded-2xl overflow-hidden md:shadow-2xl mt-4 md:mt-0">
                            <Image
                                src="/2.jpg"
                                alt="Delivery Features"
                                fill
                                className="object-contain md:object-cover w-full h-full rounded-xl"
                                quality={100}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority
                                style={{
                                    objectPosition: 'center',
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                                            <Icon className="w-6 h-6 text-[#5cdee2] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}