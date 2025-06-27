"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Atharva Magar. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-600 text-sm mt-2">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
