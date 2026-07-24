import Image from "next/image"
import { ArrowUpRightIcon, GithubIcon, MailIcon, PhoneIcon } from "lucide-react"
import Spotlight from "@/components/spotlight"
import SideNav from "@/components/side-nav"
import AppLinks from "@/components/app-links"

const experience = [
  {
    period: "2026 — Now",
    title: "Senior Systems Engineer",
    company: "General Motors",
    description:
      "Building internal AI tooling and leading a migration from legacy vendor infrastructure to a modern enterprise AI platform on Google Cloud.",
    tags: ["Glean AI", "Enterprise AI", "Google Cloud"],
  },
  {
    period: "2022 — 2026",
    title: "Software Engineer",
    company: "Ford Motor Company",
    description:
      "Shipped agentic AI systems on Google Cloud in collaboration with Google. Sole owner of the Escalation Engine — a Go platform that raised anomaly resolution from ~15% to a sustained 98%, saving $6M+ a year.",
    tags: ["Go", "Python", "Terraform", "AI Agents"],
  },
]

const projects = [
  {
    title: "Roomie",
    link: "https://github.com/kamalm96/roomie",
    description:
      "A cross-platform roommate and housing app — listings, realtime chat, and location-based search. Built with React Native (Expo) and Supabase.",
    tags: ["React Native", "Expo", "Supabase", "TypeScript"],
  },
]

const education = [
  {
    period: "2023 — 2025",
    degree: "M.S. Artificial Intelligence / Machine Learning",
    school: "University of Michigan",
  },
  {
    period: "2018 — 2022",
    degree: "B.S. Computer Science",
    school: "Wayne State University",
  },
]

export default function Home() {
  return (
    <div className="relative">
      <Spotlight />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        {/* ——— left / header ——— */}
        <header className="pt-16 pb-10 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:py-24">
          <div>
            <div className="mb-6 inline-block rounded-full bg-gradient-to-br from-primary/70 via-primary/25 to-transparent p-[3px] shadow-[0_0_44px_hsl(158_60%_52%/0.22)]">
              <Image
                src="/images/profile.png"
                alt="Kamal Mansour"
                width={96}
                height={96}
                priority
                className="rounded-full object-cover ring-1 ring-background"
              />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-primary tracking-tight">
              Kamal Mansour
            </h1>
            <p className="mt-3 text-base font-medium text-foreground">
              Senior Systems Engineer · General Motors
            </p>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              I build internal AI tooling and the cloud infrastructure behind it — currently
              leading enterprise AI platform work at GM.
            </p>
            <SideNav />
          </div>

          <div className="mt-10 lg:mt-0 flex items-center gap-5">
            <a
              href="https://github.com/kamalm96"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:kamalbmansour@hotmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <MailIcon className="h-5 w-5" />
            </a>
            <a
              href="tel:+13134453817"
              aria-label="Phone"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
            <span className="text-sm text-muted-foreground">Michigan, US</span>
          </div>
        </header>

        {/* ——— right / content ——— */}
        <main className="pb-24 lg:py-24 space-y-20">
          <section id="experience" className="scroll-mt-16" aria-label="Experience">
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/70 mb-6 lg:sr-only">
              Experience
            </h2>
            <ol className="space-y-2">
              {experience.map((job) => (
                <li
                  key={job.company}
                  className="group grid sm:grid-cols-[110px_1fr] gap-2 sm:gap-6 rounded-xl p-4 -mx-4 transition-colors hover:bg-primary/[0.045]"
                >
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground pt-1">
                    {job.period}
                  </span>
                  <div>
                    <h3 className="font-medium text-foreground">
                      {job.title}{" "}
                      <span className="text-muted-foreground font-normal">· {job.company}</span>
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                      {job.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="projects" className="scroll-mt-16" aria-label="Projects">
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/70 mb-6 lg:sr-only">
              Projects
            </h2>
            <ol className="space-y-2">
              {projects.map((project) => (
                <li
                  key={project.title}
                  className="group grid sm:grid-cols-[110px_1fr] gap-2 sm:gap-6 rounded-xl p-4 -mx-4 transition-colors hover:bg-primary/[0.045]"
                >
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground pt-1">
                    Side project
                  </span>
                  <div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-foreground inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                    >
                      {project.title}
                      <ArrowUpRightIcon className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <AppLinks />
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="education" className="scroll-mt-16" aria-label="Education">
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/70 mb-6 lg:sr-only">
              Education
            </h2>
            <ol className="space-y-2">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="group grid sm:grid-cols-[110px_1fr] gap-2 sm:gap-6 rounded-xl p-4 -mx-4 transition-colors hover:bg-primary/[0.045]"
                >
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground pt-1">
                    {item.period}
                  </span>
                  <div>
                    <h3 className="font-medium text-foreground">{item.degree}</h3>
                    <p className="mt-1 text-[15px] text-muted-foreground">{item.school}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <footer className="pt-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Kamal Mansour · Built with Next.js &amp; Tailwind
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
