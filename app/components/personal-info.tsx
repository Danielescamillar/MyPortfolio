'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function PersonalInfo() {
  const [isHovered, setIsHovered] = useState(false)

  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-8 overflow-hidden">
        <CardHeader className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-700 dark:to-purple-700">
          <motion.div
            className="absolute inset-0 bg-opacity-50 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.7 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute bottom-4 left-4 flex items-center space-x-4"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <Avatar className="h-24 w-24 border-4 border-white">
              <AvatarImage src="/placeholder.svg" alt="Tu Nombre" />
              <AvatarFallback>TN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-white dark:text-gray-100">Tu Nombre</h1>
              <p className="text-xl text-gray-200 dark:text-gray-300">Desarrollador Web Full Stack</p>
            </div>
          </motion.div>
        </CardHeader>
        <CardContent className="mt-4">
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            Soy un desarrollador web apasionado por crear experiencias digitales únicas y funcionales. 
            Me especializo en construir aplicaciones web modernas y eficientes utilizando las últimas tecnologías.
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary">{skill}</Badge>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/tunombre" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/tunombre" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">LinkedIn</a>
            <a href="mailto:tu@email.com" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">Email</a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
