'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import Image from "next/image"

const projects = [
  {
    title: "Proyecto 1",
    description: "Una aplicación web para gestionar tareas diarias con características avanzadas de organización y colaboración.",
    image: "/placeholder.svg",
    tags: ["React", "Next.js", "Tailwind CSS"],
    link: "https://proyecto1.com"
  },
  {
    title: "Proyecto 2",
    description: "Plataforma de e-learning con cursos interactivos y sistema de seguimiento de progreso para estudiantes.",
    image: "/placeholder.svg",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    link: "https://proyecto2.com"
  },
  {
    title: "Proyecto 3",
    description: "Aplicación móvil de fitness que proporciona rutinas de ejercicios personalizadas y seguimiento de la dieta.",
    image: "/placeholder.svg",
    tags: ["React Native", "Firebase", "Expo"],
    link: "https://proyecto3.com"
  }
]

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Proyectos Destacados</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Card className="overflow-hidden h-full flex flex-col bg-white dark:bg-gray-800 transition-colors duration-300">
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button variant="secondary" className="bg-white text-gray-800 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Ver proyecto <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </div>
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-100">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
