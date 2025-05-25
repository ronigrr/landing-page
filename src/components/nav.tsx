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

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      {/* Navigation Bar */}
      <nav className="h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-center md:justify-end items-center h-full">
            <div className="flex items-center space-x-4 md:space-x-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm md:text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                  target={link.name !== "Email" ? "_blank" : undefined}
                >
                  {link.name}
                </Link>
              ))}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Name - Hidden on mobile, shown below nav */}
      <div className="md:hidden py-4 text-center border-t border-gray-200 dark:border-gray-700">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Ronald Granovsky
        </Link>
      </div>

      {/* Name - Shown inline on desktop */}
      <div className="hidden md:block absolute top-0 left-0 h-16">
        <div className="h-full flex items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Ronald Granovsky
          </Link>
        </div>
      </div>
    </div>
  )
} 