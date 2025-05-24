"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

const socialLinks = [
  { name: "Resume", href: "/Resume.pdf" },
  { name: "GitHub", href: "https://github.com/ronigrr" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ronald-granovsky" },
  { name: "Email", href: "mailto:ronigrr@gmail.com" },
]

export function Nav() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the theme toggle
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Ronald Granovsky
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                target={link.name !== "Email" ? "_blank" : undefined}
              >
                {link.name}
              </Link>
            ))}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
} 