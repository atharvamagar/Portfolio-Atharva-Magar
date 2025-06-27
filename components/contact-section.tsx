"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Twitter, Dribbble, Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with EmailJS or Formspree
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("Message sent successfully!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Dribbble, href: "https://dribbble.com", label: "Dribbble" },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">atharva.magar@email.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">Mumbai, India</span>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-50 dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-50 dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-50 dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 py-3"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
