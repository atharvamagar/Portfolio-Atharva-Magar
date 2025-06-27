"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Download, Mail } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"

const roles = ["Web Developer", "UI/UX Designer", "Freelancer", "Content Creator", "Artist"]

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentWord = roles[currentRole]

    if (!isDeleting && displayText === currentWord) {
      setTimeout(() => setIsDeleting(true), 2000)
      return
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => (isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)))
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-6xl sm:text-8xl lg:text-9xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          ATHARVA
        </motion.h1>

        <motion.h2
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          MAGAR
        </motion.h2>

        <motion.div
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="font-medium">{displayText}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 px-8 py-3 text-lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900 px-8 py-3 text-lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail className="mr-2 h-5 w-5" />
            Hire Me
          </Button>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ y: -5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll down</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </motion.button>
    </section>
  )
}
