import { ArrowUpRightIcon } from "lucide-react"

const projects = [
  {
    title: "Banking App",
    description:
      "Backend for a banking system in Go with PostgreSQL — type-safe queries via SQLC, Go-Migrate migrations, robust transaction handling with deadlock mitigation, and clean architecture throughout.",
    technologies: ["Golang", "PostgreSQL", "SQLC", "Go-Migrate"],
    link: "https://github.com/kamalm96/go-transaction",
  },
  {
    title: "Portfolio Website",
    description:
      "This site — a minimal, responsive portfolio built with Next.js and Tailwind CSS, deployed with an automated pipeline.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/kamalm96/kamal-portfolio",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16 scroll-mt-14">
      <p className="text-sm font-medium tracking-widest uppercase text-primary/70 mb-2">Projects</p>
      <h2 className="font-serif text-3xl font-semibold text-primary mb-10">Selected work</h2>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-medium text-foreground">{project.title}</h3>
              <ArrowUpRightIcon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
            </div>
            <p className="text-[15px] leading-relaxed text-muted-foreground mb-5">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-xs text-primary/80 bg-secondary rounded-full px-2.5 py-1">
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
