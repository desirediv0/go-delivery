"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        e.target.reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 to-white py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Get in Touch</h2>
          <h3 className="text-2xl md:text-3xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-semibold">
            We&apos;re Here to Help
          </h3>
          <p className="text-gray-600">
            Have questions about our electric mobility solutions? We&apos;d love to hear from you. Send us a message and
            we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="relative h-full">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-200/50 to-blue-200/50 rounded-2xl blur-xl" />

              {/* Card content */}
              <div className="relative h-full p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Contact Information
                </h4>

                <div className="space-y-8">
                  {/* Email Section */}
                  <div className="group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shrink-0 group-hover:scale-105 transition-all duration-300">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-2 w-full">
                        <p className="text-lg font-semibold text-gray-800">Email</p>
                        <div className="space-y-3">
                          <a
                            href="mailto:support@godeliverygroup.com"
                            className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-all duration-300 hover:translate-x-2 break-words"
                          >

                            <span className="truncate text-sm">Support@godeliverygroup.com</span>
                          </a>
                          <a
                            href="mailto:management@godeliverygroup.com"
                            className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-all duration-300 hover:translate-x-2 break-words"
                          >

                            <span className="truncate text-sm">Management@godeliverygroup.com</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Section */}
                  <div className="group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shrink-0 group-hover:scale-105 transition-all duration-300">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-lg font-semibold text-gray-800">Phone</p>
                        <div className="space-y-3">
                          <a
                            href="tel:+919625977768"
                            className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-all duration-300 hover:translate-x-2"
                          >

                            +91 9625977768
                          </a>
                          <a
                            href="tel:+919625977769"
                            className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-all duration-300 hover:translate-x-2"
                          >

                            +91 9625977769
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Address Section */}
                  <div className="group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shrink-0 group-hover:scale-105 transition-all duration-300">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-lg font-semibold text-gray-800">Address</p>
                        <div className="space-y-1 text-gray-600">
                          <div className="flex items-start gap-2">
                            <div>
                              <a
                                href="https://maps.app.goo.gl/SPaLLpRoA4d9UPQp9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-600 transition-colors"
                              >
                                <p>Plot No. 9, Sulahkul Vihar,</p>
                                <p>Old Palam Road,</p>
                                <p>New Delhi - 110078</p>
                                <p className="text-sm text-gray-500 mt-2 italic">
                                  Landmark: Sulahkul Mandir
                                </p>
                                <p className="text-sm text-cyan-600 mt-1 flex items-center gap-1">
                                  <MapPin className="w-4 h-4" /> View on Google Maps
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="relative h-full">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-purple-200/50 rounded-2xl blur-xl" />

              {/* Form content */}
              <form
                onSubmit={handleSubmit}
                className="relative h-full p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-gray-700 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-cyan-500 text-gray-900 placeholder-gray-400 outline-none transition-colors shadow-sm"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-700 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-cyan-500 text-gray-900 placeholder-gray-400 outline-none transition-colors shadow-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label htmlFor="subject" className="text-gray-700 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-cyan-500 text-gray-900 placeholder-gray-400 outline-none transition-colors shadow-sm"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label htmlFor="message" className="text-gray-700 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-cyan-500 text-gray-900 placeholder-gray-400 outline-none transition-colors resize-none shadow-sm"
                      placeholder="Your message"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

