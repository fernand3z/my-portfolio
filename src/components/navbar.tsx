"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Menu } from "lucide-react"
import { Sidebar } from "@/components/sidebar"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("about")

  const sections = React.useMemo(() => ["about", "skills", "projects", "experience", "education", "certifications"], [])

  React.useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  // Base header and nav structure that's the same for both mounted and unmounted states
  const headerContent = (
    <header className="sticky top-0 z-50 bg-background/30 dark:bg-background/50 backdrop-blur-xl border-b border-border/40">
      <nav className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          {mounted ? (
            <Sidebar 
              sections={sections}
              activeSection={activeSection}
              onSectionClick={scrollToSection}
            />
          ) : (
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5 text-foreground" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          )}
          <div className="hidden md:flex items-center space-x-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={mounted ? () => scrollToSection(section) : undefined}
                className={`px-3 py-2 text-sm capitalize rounded-md transition-colors ${
                  mounted && activeSection === section
                    ? "text-foreground font-medium bg-background/50 dark:text-foreground dark:bg-background/70"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50 dark:hover:text-foreground dark:hover:bg-background/70"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={mounted ? () => setTheme(theme === "dark" ? "light" : "dark") : undefined}
          className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-background/50 dark:hover:text-foreground dark:hover:bg-background/70 transition-colors"
        >
          {mounted ? (
            theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )
          ) : (
            <div className="h-5 w-5" /> // Placeholder for theme icon while loading
          )}
        </button>
      </nav>
    </header>
  )

  return headerContent
} 