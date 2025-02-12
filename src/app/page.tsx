"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Github, Download } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown as ChevronDownIcon, ArrowRight as ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

const languages = [
  { name: "JavaScript", progress: 85 },
  { name: "Python", progress: 78 },
  { name: "HTML", progress: 92 },
  { name: "CSS", progress: 88 },
  { name: "SQL", progress: 75 },
  { name: "PHP", progress: 70 },
  { name: "TypeScript", progress: 82 },
  { name: "PowerShell", progress: 85 },
  { name: "Bash", progress: 80 },
  { name: "C++", progress: 65 },
  { name: "Java", progress: 60 },
  { name: "Ruby", progress: 55 }
]

const tools = [
  { name: "Git", progress: 88 },
  { name: "Docker", progress: 82 },
  { name: "Linux", progress: 90 },
  { name: "VS Code", progress: 95 },
  { name: "Node.js", progress: 80 },
  { name: "PostgreSQL", progress: 75 },
  { name: "AWS", progress: 75 },
  { name: "React", progress: 85 },
  { name: "Next.js", progress: 80 },
  { name: "MongoDB", progress: 70 },
  { name: "Nginx", progress: 75 },
  { name: "Jenkins", progress: 65 }
]

export default function Page() {
  const [showMoreSkills, setShowMoreSkills] = useState(false)
  const [showMoreCerts, setShowMoreCerts] = useState(false)
  const [visibleProjectCount, setVisibleProjectCount] = useState(6)
  const [visibleCertCount, setVisibleCertCount] = useState(8)

  const projects = [
    {
      title: "Update Script",
      description: "A script for automating system updates and maintenance tasks",
      content: "Streamlines the process of keeping your system up-to-date with automated checks and updates",
      link: "https://github.com/fernand3z/update-script"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website built with Next.js and Tailwind CSS",
      content: "A responsive and animated portfolio showcasing my projects and skills",
      link: "https://github.com/fernand3z/portfolio"
    },
    {
      title: "Personal Blog Site",
      description: "A modern blog site built with Hugo static site generator",
      content: "Fast and minimalist blog featuring custom themes, responsive design, and markdown support",
      link: "https://github.com/fernand3z/my-blog-site"
    },
    {
      title: "ytmusic Downloader",
      description: "Python script for downloading music from YTmusic using the yt-dlp library",
      content: "A simple Python script to download audio from YouTube videos",
      link: "https://github.com/fernand3z/yt-music-downloader"
    },
    {
      title: "Devlogz Blog App",
      description: "A WebView-based Android app for my personal blog",
      content: "Android application that provides a native app experience for my blog site with offline capabilities and push notifications",
      link: "https://github.com/fernand3z/my-webview-app"
    },
    {
      title: "Coming Soon",
      description: "Future project planned",
      content: "Another exciting project in the pipeline. Stay tuned for updates!",
      status: "In Planning"
    },
    {
      title: "Coming Soon",
      description: "Future project planned",
      content: "Another exciting project in the pipeline. Stay tuned for updates!",
      status: "In Planning"
    },
    {
      title: "Coming Soon",
      description: "Future project planned",
      content: "Another exciting project in the pipeline. Stay tuned for updates!",
      status: "In Planning"
    }
  ];

  const handleShowMoreProjects = () => {
    if (visibleProjectCount >= projects.length) {
      setVisibleProjectCount(6) // Reset to initial count of 6
    } else {
      setVisibleProjectCount(prev => Math.min(prev + 3, projects.length))
    }
  }

  const showingAllProjects = visibleProjectCount >= projects.length

  const handleShowMoreCerts = () => {
    if (visibleCertCount >= 12) { // Total number of certificates
      setVisibleCertCount(4) // Reset to initial count
    } else {
      setVisibleCertCount(prev => Math.min(prev + 4, 12))
    }
  }

  const showingAllCerts = visibleCertCount >= 12

  const handleContact = (platform: string) => {
    switch(platform) {
      case 'gmail':
        window.location.href = 'mailto:fernand3zdev@gmail.com';
        break;
      case 'whatsapp':
        window.location.href = 'https://wa.me/447479460160';
        break;
      case 'linkedin':
        window.location.href = 'https://www.linkedin.com/in/amoda-fernando';
        break;
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section id="about" className="mb-24 text-center">
          <h1 className="text-[42px] font-bold mb-4 gradient-text animate-fade-in">
            Amoda Fernando
          </h1>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
            Passionate developer with a knack for solving complex problems through code. Mostly self-taught and driven by an unyielding curiosity to explore and master new technologies.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="default"
                  className="bg-success hover:bg-success/90 text-success-foreground animate-fade-in delay-300 hover-lift"
                >
                  Contact Me!
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuLabel>Get in touch</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => handleContact('gmail')}>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleContact('whatsapp')}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>WhatsApp</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleContact('linkedin')}>
                    <Github className="mr-2 h-4 w-4" />
                    <span>LinkedIn</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="default"
              className="bg-success hover:bg-success/90 text-success-foreground animate-fade-in delay-300 hover-lift"
              asChild
            >
              <a
                href="https://github.com/fernand3z"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubLogoIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="default"
              className="bg-success hover:bg-success/90 text-success-foreground animate-fade-in delay-300 hover-lift"
              asChild
            >
              <a href="https://blog.fernand3z.dev/" target="_blank" rel="noopener noreferrer">
                My Blog Site
              </a>
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24 animate-fade-in">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills && Technologies</h2>
          <div className="card-spotify rounded-lg p-6">
            <div className="grid grid-cols-2 gap-8">
              <div className="animate-slide-in delay-100">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Languages</h3>
                <div className="space-y-4">
                  {/* Initial visible languages */}
                  {[
                    { name: "JavaScript", progress: 85 },
                    { name: "Python", progress: 78 },
                    { name: "HTML", progress: 92 },
                    { name: "CSS", progress: 88 },
                    { name: "SQL", progress: 75 },
                    { name: "PHP", progress: 70 }
                  ].slice(0, showMoreSkills ? languages.length : 6).map((lang, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="text-sm font-medium text-foreground min-w-[100px]">{lang.name}</span>
                      <div className="flex-1 hidden md:block md:w-[75%]">
                        <Progress value={lang.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                  
                  {/* Additional languages (hidden by default) */}
                  {showMoreSkills && [
                    { name: "TypeScript", progress: 82 },
                    { name: "PowerShell", progress: 65 },
                    { name: "Bash", progress: 70 },
                    { name: "C", progress: 35 },
                    { name: "Java", progress: 30 },
                    { name: "Go", progress: 8 },
                    { name: "GraphQL", progress: 15 },
                    { name: "Rust", progress: 5 },
                   // { name: "Solidity", progress: 30 },
                    { name: "Shell Scripting", progress: 75 }
                  ].map((lang, i) => (
                    <div key={lang.name} className="flex items-center gap-4">
                      <span className="text-sm font-medium text-foreground min-w-[100px]">{lang.name}</span>
                      <div className="flex-1 hidden md:block md:w-[75%]">
                        <Progress value={lang.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-slide-in delay-200">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Tools & Technologies</h3>
                <div className="space-y-4">
                  {/* Initial visible tools */}
                  {[
                    { name: "Git", progress: 88 },
                    { name: "Docker", progress: 82 },
                    { name: "Linux", progress: 90 },
                    { name: "VS Code", progress: 95 },
                    { name: "Node.js", progress: 80 },
                    { name: "WordPress", progress: 85 },
                    
                  ].slice(0, showMoreSkills ? tools.length : 6).map((tool, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="text-sm font-medium text-foreground min-w-[100px]">{tool.name}</span>
                      <div className="flex-1 hidden md:block md:w-[75%]">
                        <Progress value={tool.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                  
                  {/* Additional tools (hidden by default) */}
                  {showMoreSkills && [
                    { name: "AWS", progress: 75 },
                    { name: "React", progress: 85 },
                    { name: "Next.js", progress: 80 },
                    { name: "MongoDB", progress: 70 },
                    { name: "Nginx", progress: 65 },
                    { name: "Azure", progress: 50 },
                    { name: "PostgreSQL", progress: 75 },
                    { name: "Figma", progress: 80 },
                    { name: "Kubernetes", progress: 5 },
                   // { name: "Jenkins", progress: 55 },
                   // { name: "Terraform", progress: 45 },
                   // { name: "Redis", progress: 65 },
                    { name: "GitHub Actions", progress: 50 },
                    { name: "Tailwind CSS", progress: 85 },
                  // { name: "Prisma", progress: 70 },
                   // { name: "Vercel", progress: 80 },
                   // { name: "Postman", progress: 85 },
                    { name: "Firebase", progress: 50 }
                  ].map((tool, i) => (
                    <div key={tool.name} className="flex items-center gap-4">
                      <span className="text-sm font-medium text-foreground min-w-[100px]">{tool.name}</span>
                      <div className="flex-1 hidden md:block md:w-[75%]">
                        <Progress value={tool.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Show More/Less Button */}
            <div className="flex justify-center mt-8">
              <Button
                onClick={() => setShowMoreSkills(!showMoreSkills)}
                variant="outline"
                className="mt-4 text-foreground hover:text-success hover:border-success transition-colors w-[140px]"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>{showMoreSkills ? "Show Less" : "Show More"}</span>
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ${
                      showMoreSkills ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 animate-fade-in">
          <h2 className="text-3xl font-bold mb-12 text-center">Development Endeavors</h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, visibleProjectCount).map((project, index) => (
                <Card key={index} className={`hover-lift flex flex-col ${!project.link ? 'opacity-75' : ''}`}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {project.content}
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    {project.link ? (
                      <div className="flex flex-row w-full space-x-2">
                        <Button
                          asChild
                          variant="outline"
                          className="mt-4 text-foreground hover:text-success hover:border-success transition-colors"
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View on GitHub <ArrowRightIcon className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                        {project.title === "Devlogz Blog App" && (
                          <Button
                            asChild
                            variant="outline"
                            className="mt-4 text-foreground hover:text-success hover:border-success transition-colors"
                          >
                            <a
                              href="https://github.com/fernand3z/my-webview-app/releases/download/v1.0.0/devlogzv1.0.0.apk"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Download className="h-[18px] w-[18px]" />
                            </a>
                          </Button>
                        )}
                      </div>
                    ) : (
                      <span className="text-muted-foreground inline-flex items-center space-x-1">
                        {project.status} →
                      </span>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Show More/Less Projects Button */}
            {visibleProjectCount < projects.length ? (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleShowMoreProjects}
                  className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                >
                  <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                    <span>Show More</span>
                    <span className="transform transition-transform duration-200">↓</span>
                  </div>
                </button>
              </div>
            ) : (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleShowMoreProjects}
                  className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                >
                  <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                    <span>Show Less</span>
                    <span className="transform transition-transform duration-200 rotate-180">↓</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24 animate-fade-in">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Background</h2>
          <div className="space-y-8">
            {/* NUMBER PLATE CLINIC Experience */}
            <Card className="hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                    <a 
                      href="https://www.linkedin.com/company/number-plate-clinic/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer transition-opacity hover:opacity-80"
                    >
                      <Image 
                        src="/npc-logo.jpg" 
                        alt="NPC Logo" 
                        width={48}
                        height={48}
                        className="w-full h-full object-contain p-1" 
                      />
                    </a>
                  </div>
                  <div className="flex-grow">
                    <a 
                      href="https://www.linkedin.com/company/number-plate-clinic/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      <CardTitle>NUMBER PLATE CLINIC</CardTitle>
                    </a>
                    <CardDescription>
                      <span className="block text-muted-foreground">Part-time · 2 yrs</span>
                      <span className="block text-sm text-muted-foreground/60">Bolton, England, United Kingdom · Hybrid</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* System Administrator Role */}
                <div className="mt-2">
                  <h4 className="text-lg font-semibold text-foreground">System Administrator</h4>
                  <p className="text-sm text-muted-foreground/60 mb-4">Feb 2024 - Present · 1 yr</p>
                  <p className="text-muted-foreground mb-4">
                    As a System Administrator at NUMBER PLATE CLINIC, I took on a more strategic and comprehensive role, directly managing and enhancing IT infrastructure to support organizational growth.
                  </p>
                  <div className="mb-4">
                    <h5 className="text-foreground font-medium mb-2">Key Achievements:</h5>
                    <ul className="space-y-3 text-muted-foreground list-disc pl-4">
                      {[
                        "Independently managed servers and networks, ensuring consistent uptime and robust security.",
                        "Optimized workflows by implementing AI tools and advanced automation strategies, increasing efficiency.",
                        "Enhanced cybersecurity measures and ensured compliance with industry regulations.",
                        "Provided expert user support, enabling seamless daily operations and reducing system downtime."
                      ].map((item, i) => (
                        <li key={i} className={`animate-fade-in delay-${(i + 1) * 100}`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Skills:</span>
                    <span className="text-foreground">IT Service Management, Systems Management</span>
                    <button 
                      onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Show all 8 skills
                    </button>
                  </div>
                </div>

                {/* Assistant System Administrator Role */}
                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="text-lg font-semibold text-foreground">Assistant System Administrator</h4>
                  <p className="text-sm text-muted-foreground/60 mb-4">Feb 2023 - 2024 · 1 yr</p>
                  <p className="text-muted-foreground mb-4">
                    As an Assistant System Administrator at NUMBER PLATE CLINIC, I supported the IT infrastructure to ensure reliable and secure operations. I worked closely with the IT team to maintain systems and assist in implementing solutions that enhanced workflow efficiency.
                  </p>
                  <div className="mb-4">
                    <h5 className="text-foreground font-medium mb-2">Key Responsibilities:</h5>
                    <ul className="space-y-3 text-muted-foreground list-disc pl-4">
                      {[
                        "Assisted in managing servers and networks, ensuring system reliability and security.",
                        "Supported infrastructure optimization for seamless business operations.",
                        "Utilized automation tools like PowerShell to improve efficiency and reduce manual tasks.",
                        "Contributed to strengthening cybersecurity measures and maintaining compliance with industry standards."
                      ].map((item, i) => (
                        <li key={i} className={`animate-fade-in delay-${(i + 1) * 100}`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    This role allowed me to gain hands-on experience and build a solid foundation in IT systems management.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                    <span>Skills:</span>
                    <span className="text-foreground">Systems Management, Management</span>
                    <button 
                      onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Show all 6 skills
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Freelance WordPress Developer Experience */}
            <Card className="hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                    <Image 
                      src="/favicon.png" 
                      alt="Freelance Logo" 
                      width={48}
                      height={48}
                      className="w-full h-full object-contain p-1" 
                    />
                  </div>
                  <div className="flex-grow">
                    <CardTitle>Freelance WordPress Developer</CardTitle>
                    <CardDescription>
                      <span className="block text-muted-foreground">Self-employed · 6 mos</span>
                      <span className="block text-sm text-muted-foreground/60">Remote</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mt-2">
                  <h4 className="text-lg font-semibold text-foreground">WordPress Developer</h4>
                  <p className="text-sm text-muted-foreground/60 mb-4">Jun 2022 - Nov 2022 · 6 mos</p>
                  <p className="text-muted-foreground mb-4">
                    As a freelance WordPress developer, I specialized in creating custom e-commerce solutions and business websites, focusing on performance optimization and user experience.
                  </p>
                  <div className="mb-4">
                    <h5 className="text-foreground font-medium mb-2">Key Achievements:</h5>
                    <ul className="space-y-3 text-muted-foreground list-disc pl-4">
                      {[
                        "Developed and launched 2 full-scale e-commerce websites using WooCommerce, implementing custom payment gateways and shipping integrations.",
                        "Created custom WordPress themes and plugins to meet specific client requirements and enhance website functionality.",
                        "Optimized website performance achieving 90+ PageSpeed scores through caching, image optimization, and code minification.",
                        "Implemented robust security measures including SSL, firewall configuration, and regular security audits.",
                        "Provided comprehensive training to clients on WordPress CMS usage and content management."
                      ].map((item, i) => (
                        <li key={i} className={`animate-fade-in delay-${(i + 1) * 100}`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Skills:</span>
                    <span className="text-foreground">WordPress, WooCommerce, PHP</span>
                    <button 
                      onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Show all 8 skills
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Adventa Technologies Experience */}
            <Card className="hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                    <a 
                      href="https://www.linkedin.com/company/adventa-technologies/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer transition-opacity hover:opacity-80"
                    >
                      <Image 
                        src="/adventa-logo.jpg" 
                        alt="Adventa Logo" 
                        width={48}
                        height={48}
                        className="w-full h-full object-contain p-1" 
                      />
                    </a>
                  </div>
                  <div className="flex-grow">
                    <a 
                      href="https://www.linkedin.com/company/adventa-technologies/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      <CardTitle>Adventa Technologies Pvt Ltd</CardTitle>
                    </a>
                    <CardDescription>
                      <span className="block text-muted-foreground">Full-time · 1 yr 1 mo</span>
                      <span className="block text-sm text-muted-foreground/60">Colombo District, Western Province, Sri Lanka · Hybrid</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Web Developer Role */}
                <div className="mt-2">
                  <h4 className="text-lg font-semibold text-foreground">Web Developer</h4>
                  <p className="text-sm text-muted-foreground/60 mb-4">Apr 2021 - Apr 2022 · 1 yr 1 mo</p>
                  <div className="mb-4">
                    <h5 className="text-foreground font-medium mb-2">Key Achievements:</h5>
                    <ul className="space-y-3 text-muted-foreground list-disc pl-4">
                      {[
                        "Developed and launched 7 custom web applications using Bubble.io, enabling rapid prototyping and deployment for startups and small businesses.",
                        "Designed and prototyped user-friendly web interfaces using Figma, ensuring visually appealing and intuitive user experiences that align with client branding.",
                        "Built and maintained dynamic WordPress websites, integrating custom themes and plugins to meet specific client needs and enhance functionality.",
                        "Utilized HTML5, CSS3, PHP and JavaScript to create responsive and interactive websites, ensuring optimal performance and user engagement across various devices and browsers.",
                        "Integrated third-party services and APIs, such as payment gateways, CRM tools, and social media platforms, to enhance website functionality and user interaction."
                      ].map((item, i) => (
                        <li key={i} className={`animate-fade-in delay-${(i + 1) * 100}`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Skills:</span>
                    <span className="text-foreground">Prototyping, HTML5</span>
                    <button 
                      onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Show all 20 skills
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-24 animate-fade-in">
          <h2 className="text-3xl font-bold mb-12 text-center">Knowledge Acquisition</h2>
          <div className="space-y-6">
            {/* Associate's Degree */}
            <Card className="hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                    <a 
                      href="https://www.linkedin.com/school/vtasrilanka" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer transition-opacity hover:opacity-80"
                    >
                      <Image 
                        src="/vta-logo.jpg" 
                        alt="Vocational Training Authority Logo" 
                        width={48}
                        height={48}
                        className="w-full h-full object-contain p-1" 
                      />
                    </a>
                  </div>
                  <div>
                    <a 
                      href="https://www.linkedin.com/school/vtasrilanka" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      <CardTitle>Associate's degree, Computer Science</CardTitle>
                    </a>
                    <CardDescription>
                      <span className="block text-muted-foreground">Vocational Training Authority</span>
                      <span className="block text-sm text-muted-foreground/60">Jan 2020 - Jan 2022</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Master's Degree */}
            <Card className="hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                    <a 
                      href="https://www.uclan.ac.uk/postgraduate/courses/mba-master-of-business-administration" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer transition-opacity hover:opacity-80"
                    >
                      <Image 
                        src="/uclan-logo.jpg" 
                        alt="University of Central Lancashire Logo" 
                        width={48}
                        height={48}
                        className="w-full h-full object-contain p-1" 
                      />
                    </a>
                  </div>
                  <div>
                    <a 
                      href="https://www.uclan.ac.uk/postgraduate/courses/mba-master-of-business-administration" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      <CardTitle>Master's degree, Business Administration and Management</CardTitle>
                    </a>
                    <CardDescription>
                      <span className="block text-muted-foreground">University of Central Lancashire</span>
                      <span className="block text-sm text-muted-foreground/60">Jan 2023 - Jan 2024</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* CS50 Course */}
            <Card className="hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                    <a 
                      href="https://cs50.harvard.edu/x" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer transition-opacity hover:opacity-80"
                    >
                      <Image 
                        src="/harvard-logo.jpg" 
                        alt="Harvard University Logo" 
                        width={48}
                        height={48}
                        className="w-full h-full object-contain p-1" 
                      />
                    </a>
                  </div>
                  <div>
                    <a 
                      href="https://cs50.harvard.edu/x" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      <CardTitle>CS50's Introduction to Computer Science</CardTitle>
                    </a>
                    <CardDescription>
                      <span className="block text-muted-foreground">Harvard University</span>
                      <span className="block text-sm text-muted-foreground/60">In Progress</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 mt-2 rounded-full text-xs font-medium bg-success/10 text-success">
                        Currently Studying
                      </span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* freeCodeCamp */}
            <Card className="hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                    <a 
                      href="https://www.freecodecamp.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer transition-opacity hover:opacity-80"
                    >
                      <Image 
                        src="/freecodecamp-logo.jpg" 
                        alt="freeCodeCamp Logo" 
                        width={48}
                        height={48}
                        className="w-full h-full object-contain p-1" 
                      />
                    </a>
                  </div>
                  <div>
                    <a 
                      href="https://www.freecodecamp.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      <CardTitle>Full Stack Development Curriculum</CardTitle>
                    </a>
                    <CardDescription>
                      <span className="block text-muted-foreground">freeCodeCamp</span>
                      <span className="block text-sm text-muted-foreground/60">In Progress</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 mt-2 rounded-full text-xs font-medium bg-success/10 text-success">
                        Currently Studying
                      </span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* License & Certifications Section */}
        <section id="certifications" className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-12 text-center">License && Certifications</h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First 4 certificates are always visible */}
              {/* Additional certificates are shown based on visibleCertCount */}
              {[
                {
                  title: "Career Essentials in GitHub",
                  type: "Professional Certificate",
                  issuer: "LinkedIn Learning and GitHub",
                  date: "2025",
                  link: "https://www.linkedin.com/learning/certificates/95ab038988c255d63db1db0dc4b018e87cca009032a26917b5f3cb7b06802a80",
                  providers: [
                    { name: "GitHub", url: "https://github.com", icon: "/github-logo.png" },
                    { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                  ]
                },
                {
                  title: "Career Essentials in System Administration",
                  type: "Professional Certificate",
                  issuer: "LinkedIn Learning and Microsoft",
                  date: "2025",
                  link: "https://www.linkedin.com/learning/certificates/9b7ea63d32cd9a46772852f87edc3e13f32e8e6aefb95c4ebaa51ecb87c0b2b4",
                  providers: [
                    { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" },
                    { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                  ]
                },
                {
                  title: "Ubuntu Linux Professional Certificate",
                  type: "Professional Certificate",
                  issuer: "Canonical",
                  date: "2025",
                  link: "https://www.linkedin.com/learning/certificates/92313e2481dd7891e2c805cf6f57c24041b3e22c982fc3471459972634f686a0",
                  providers: [
                    { name: "Canonical", url: "https://canonical.com", icon: "/canonical-logo.jpg" },
                    { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                  ]
                },
                {
                  title: "Career Essentials in Sustainable Tech",
                  type: "Professional Certificate",
                  issuer: "Microsoft and LinkedIn",
                  date: "2024",
                  link: "https://www.linkedin.com/learning/certificates/0ba4b2d71c34aeabf02cfea0f534d11dbb15e6a89be7d8e36a96ee34ed6f1e98",
                  providers: [
                    { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" },
                    { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                  ]
                },
                {
                  title: "Docker Foundations",
                  type: "Professional Certificate",
                  issuer: "Docker",
                  date: "2024",
                  link: "https://www.linkedin.com/learning/certificates/23f5265eada7fe3a3d6ed85f7271f2376f1a09c6902cc3c78fd7ae8ec59ffad6",
                  providers: [
                    { name: "Docker", url: "https://docker.com", icon: "/docker-logo.jpg" },
                    { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                  ]
                },
                {
                  title: "Zendesk Customer Service",
                  type: "Professional Certificate",
                  issuer: "Zendesk",
                  date: "2025",
                  link: "https://www.linkedin.com/learning/certificates/be5e562f9bf05dddc22d374603b35d8b93484a076d9d85ddcc1d1cab63c76f11",
                  providers: [
                    { name: "Zendesk", url: "https://zendesk.com", icon: "/zendesk-logo.jpg" },
                    { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                  ]
                },
                {
                  title: "Build Your Generative AI Productivity Skills",
                  type: "Professional Certificate",
                  issuer: "Microsoft and LinkedIn",
                  date: "2024",
                  link: "https://www.linkedin.com/learning/certificates/8101d556cce742a74ff9a4ce9bb64f354811a6ede16f5b885421716cbcd235e5",
                  providers: [
                    { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" },
                    { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                  ]
                },
                {
                  title: "Career Essentials in Generative AI",
                  type: "Professional Certificate",
                  issuer: "Microsoft and LinkedIn",
                  date: "2024",
                  link: "https://www.linkedin.com/learning/certificates/d4255dd847774f8bc86ad30aebe1cd089242bef805644c6a88b8e87a8dab063f",
                  providers: [
                    { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" },
                    { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                  ]
                },
                {
                  title: "Generative AI for Customer Service with Microsoft 365 Copilot",
                  type: "Professional Certificate",
                  issuer: "Microsoft",
                  date: "2024",
                  link: "https://www.linkedin.com/learning/certificates/6cac185f1b410c460a9dea686cd5da12e45da8c5106707297ba2662ebbf49e6d",
                  providers: [
                    { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" }
                  ]
                },
                {
                  title: "Microsoft Copilot for Productivity",
                  type: "Professional Certificate",
                  issuer: "Microsoft and LinkedIn",
                  date: "2024",
                  link: "https://www.linkedin.com/learning/certificates/da1c01eaac07fcac76025e1cd3d92f3cdf4ce89bc9dcdd5f817ca4044d7ac209",
                  providers: [
                    { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" },
                    { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                  ]
                }
              ].slice(0, visibleCertCount).map((cert, index) => (
                <div key={index} className={`card-spotify p-8 rounded-lg hover-lift animate-scale-in delay-${(index % 4 + 1) * 100} flex flex-col`}>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{cert.title}</h3>
                    <p className="text-muted-foreground mb-2">{cert.type}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.date}</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 flex justify-between items-center">
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-1 transition-colors group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">View Certificate</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </a>
                    <div className="flex gap-2">
                      {cert.providers.map((provider, i) => (
                        <a
                          key={i}
                          href={provider.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity"
                        >
                          <Image
                            src={provider.icon}
                            alt={`${provider.name} logo`}
                            width={24}
                            height={24}
                            className="w-full h-full object-contain"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More/Less Certificates Button */}
            {visibleCertCount < 12 && (
              <div className="flex justify-center">
                <button
                  onClick={handleShowMoreCerts}
                  className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                >
                  <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                    <span>Show More</span>
                    <span className="transform transition-transform duration-200">↓</span>
                  </div>
                </button>
              </div>
            )}

            {/* Show Less Button - only visible when all certificates are shown */}
            {showingAllCerts && (
              <div className="flex justify-center">
                <button
                  onClick={handleShowMoreCerts}
                  className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                >
                  <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                    <span>Show Less</span>
                    <span className="transform transition-transform duration-200 rotate-180">↓</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
} 