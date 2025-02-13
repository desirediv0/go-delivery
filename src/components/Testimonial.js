"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Go Delivery has transformed our business logistics. Their electric vehicle fleet ensures timely deliveries while being environmentally conscious.",
    author: "Rajesh Kumar",
    delay: 0.2,
  },
  {
    quote: "As a business owner, I'm impressed with Go Delivery's commitment to sustainable delivery solutions. Their service is reliable and eco-friendly.",
    author: "Priya Sharma",
    delay: 0.4,
  },
  {
    quote: "The tracking system and professional delivery partners make Go Delivery stand out. They're helping us reduce our carbon footprint significantly.",
    author: "Amit Patel",
    delay: 0.6,
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 to-white py-24 ">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-10  animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10  animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10  animate-blob animation-delay-4000" />
      </div>


      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">
            Discover why businesses across Delhi trust GoDelivery Rental for their delivery vehicle needs. Our commitment to quality service and reliable vehicles makes us the preferred choice.
          </p>
        </motion.div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: testimonial.delay }}
            >
              <div className="relative group">
                {/* Card background with gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300" />

                <div className="relative h-full p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 group-hover:border-cyan-500/50 transition-colors duration-300">
                  <div className="absolute -top-4 left-8">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="mt-4 space-y-4">
                    <p className="text-gray-700 leading-relaxed">{testimonial.quote}</p>
                    <div className="space-y-1">
                      <p className="font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

