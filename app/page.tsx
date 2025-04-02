import { ArrowDownIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />

      <div className="container mx-auto px-4 py-8 flex justify-center">
        <Link href="#experience">
          <Button variant="ghost" className="rounded-full animate-bounce">
            <ArrowDownIcon className="h-6 w-6" />
          </Button>
        </Link>
      </div>

      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">Made with ❤️ by Kamal</p>
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Kamal Mansour. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

