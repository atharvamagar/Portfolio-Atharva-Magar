"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const categories = ["All", "Web Dev", "UI/UX", "Freelancing" ,"Content", "Art"]

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
    category: "Web Dev",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    category: "Web Dev",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Mobile Banking App Design",
    description:
      "Complete UI/UX design for a modern mobile banking application with focus on accessibility and user experience.",
    category: "UI/UX",
    tech: ["Figma", "Adobe XD", "Prototyping"],
    github: null,
    live: "https://figma.com",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "SaaS Dashboard Design",
    description:
      "Clean and intuitive dashboard design for a SaaS platform with complex data visualization and user management.",
    category: "UI/UX",
    tech: ["Figma", "Design System", "Prototyping"],
    github: null,
    live: "https://figma.com",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "Tech Tutorial Series",
    description:
      "Educational content series covering modern web development techniques, published on YouTube and personal blog.",
    category: "Content",
    tech: ["Video Editing", "Writing", "Teaching"],
    github: null,
    live: "https://youtube.com",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    title: "Digital Art Collection",
    description:
      "A collection of digital illustrations and concept art created using various digital art tools and techniques.",
    category: "Art",
    tech: ["Photoshop", "Illustrator", "Digital Art"],
    github: null,
    live: "https://behance.net",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work across web development, design, content creation, and digital art.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 ${
                activeCategory === category
                  ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                  : "bg-white text-gray-900 border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-white text-gray-900 border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  <Button
                    size="sm"
                    className="flex-1 bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
