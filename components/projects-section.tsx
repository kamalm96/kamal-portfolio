"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLinkIcon } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export default function ProjectsSection() {
  const [showMessage, setShowMessage] = useState(false)

  const handlePortfolioDemo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }

  const projects = [
    {
      title: "Banking App",
      description: "A backend for a simple banking system using Golang with PostgreSQL",
      details: [
        "Utilized SQLC for type-safe query generation and performed database migrations using Go-Migrate",
        "Implemented core functionalities such as transferring money between users with robust handling of database transactions",
        "Mitigated deadlocks and wrote comprehensive tests",
        "Followed clean architecture principles to ensure modular and maintainable code",
      ],
      technologies: ["Golang", "PostgreSQL", "SQLC", "Go-Migrate"],
      githubLink: "https://github.com/kamalm96/go-transaction",
      showDemo: false,
    },
    {
      title: "Portfolio Website",
      description: "A responsive, high-performance portfolio website using Next.js on AWS",
      details: [
        "Developed a modern, responsive portfolio website to showcase professional experience",
        "Implemented SEO best practices and optimized performance",
        "Deployed on AWS with CI/CD pipeline for automated updates",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AWS"],
      githubLink: "https://github.com/kamalm96/portfolio",
      showDemo: true,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white relative">
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 0.5,
                  repeat: 2,
                  repeatType: "reverse",
                }}
                className="text-xl font-medium"
              >
                You're already here! 😊
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => window.open(project.githubLink, "_blank")}
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </Button>
                {project.showDemo && (
                  <Button variant="outline" size="sm" className="gap-2" onClick={handlePortfolioDemo}>
                    <ExternalLinkIcon className="h-4 w-4" />
                    Live Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

