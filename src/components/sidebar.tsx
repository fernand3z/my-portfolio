"use client"

import * as React from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"

interface SidebarProps {
  sections: string[]
  activeSection: string
  onSectionClick: (section: string) => void
}

export function Sidebar({ sections, activeSection, onSectionClick }: SidebarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden flex items-center justify-center text-foreground hover:bg-background/50"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[280px] flex flex-col">
        <nav className="flex flex-col space-y-2">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => onSectionClick(section)}
              className={`w-full text-left px-4 py-2 text-sm capitalize rounded-md transition-colors ${
                activeSection === section
                  ? "text-foreground font-medium bg-background/50 dark:text-foreground dark:bg-background/70"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50 dark:hover:text-foreground dark:hover:bg-background/70"
              }`}
            >
              {section}
            </button>
          ))}
        </nav>
        
        {/* Footer content - pushed to bottom */}
        <div className="mt-auto pt-6 border-t border-border/40">
          {/* Contact Info */}
          <div className="mb-4">
            <a 
              href="https://wa.me/447479460160" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors group px-4 py-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>+44 xxxx xxxxxx</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-2 px-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-background/50 hover:scale-110 transition-all duration-200 text-muted-foreground hover:text-foreground"
              asChild
            >
              <a
                href="https://github.com/fernand3z"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubLogoIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-background/50 hover:scale-110 transition-all duration-200 text-muted-foreground hover:text-foreground"
              asChild
            >
              <a
                href="https://linkedin.com/in/amoda-fernando"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInLogoIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-background/50 hover:scale-110 transition-all duration-200 text-muted-foreground hover:text-foreground"
              asChild
            >
              <a
                href="https://x.com/Fernand3zdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <TwitterLogoIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-background/50 hover:scale-110 transition-all duration-200 text-muted-foreground hover:text-foreground"
              asChild
            >
              <a
                href="mailto:fernand3zdev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <EnvelopeClosedIcon className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground mt-4 px-4">
            <p>© {new Date().getFullYear()} Amoda Fernando</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
} 