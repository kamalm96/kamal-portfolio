import Nav from "@/components/nav"
import HeroSection from "@/components/hero-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <HeroSection />
      <div className="mx-auto max-w-4xl px-6"><hr className="border-border" /></div>
      <ExperienceSection />
      <div className="mx-auto max-w-4xl px-6"><hr className="border-border" /></div>
      <SkillsSection />
      <div className="mx-auto max-w-4xl px-6"><hr className="border-border" /></div>
      <ProjectsSection />
      <div className="mx-auto max-w-4xl px-6"><hr className="border-border" /></div>
      <EducationSection />
      <div className="mx-auto max-w-4xl px-6"><hr className="border-border" /></div>
      <ContactSection />

      <footer className="mx-auto max-w-4xl px-6 py-10 border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kamal Mansour
        </p>
      </footer>
    </main>
  )
}
