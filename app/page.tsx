'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider } from "../components/theme-provider"
import { PersonalInfo } from './components/personal-info'
import { Projects } from './components/projects'
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'
import { StarField } from './components/star-field'
import { useTheme } from "next-themes"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-gray-900 dark:via-purple-950 dark:to-blue-950 transition-colors duration-500">
        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 right-4 z-50"
          onClick={toggleTheme}
        >
          {theme === 'light' ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
        {theme === 'dark' && <StarField />}
        <main className="container mx-auto px-4 py-8">
          <PersonalInfo />
          <Projects />
        </main>
      </div>
    </ThemeProvider>
  )
}
