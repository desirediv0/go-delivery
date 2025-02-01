"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
    author: "Martin escobar",
    delay: 0.2,
  },
  {
    quote: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    author: "Simon andrew",
    delay: 0.4,
  },
  {
    quote: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
    author: "Micheal worin",
    delay: 0.6,
  },
]

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 to-white py-24 dark:from-gray-900 dark:to-gray-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 dark:opacity-5 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 dark:opacity-5 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 dark:opacity-5 animate-blob animation-delay-4000" />
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-200">
            Hear from our users
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida
            justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.
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

                <div className="relative h-full p-8 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 group-hover:border-cyan-500/50 transition-colors duration-300">
                  {/* Quote icon */}
                  <div className="absolute -top-4 left-8">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="mt-4 space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">{testimonial.quote}</p>
                    <p className="font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      {testimonial.author}
                    </p>
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

