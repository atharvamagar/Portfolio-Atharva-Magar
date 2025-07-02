"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import Image from "next/image"
import { GooeyTextDemo } from "@/components/ui/gooey-text-morphing-demo"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <GooeyTextDemo />
        <ContainerScroll
          titleComponent={
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <br />
              <span className="text-6xl md:text-[8rem] font-bold mt-2 leading-none">
              </span>
            </h1>
          }
        >
          <HeroSection />
        </ContainerScroll>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
