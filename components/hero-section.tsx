import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon, MapPinIcon } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-32 pb-20">
      <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center gap-10">
        <div className="flex-1">
          <p className="text-sm font-medium tracking-widest uppercase text-primary/70 mb-4">
            Software Engineer — AI Systems &amp; Backend Infrastructure
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold text-primary leading-[1.05] mb-6">
            Kamal Mansour
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
            Four years building production AI systems and backend infrastructure at Ford Motor
            Company. Sole owner of an escalation platform saving $6M+ annually. Led agentic AI
            discovery with Google&apos;s Gemini Enterprise team. Strong in Go, Python, GCP, and
            end-to-end system design.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get in touch
            </Link>
            <a
              href="https://github.com/kamalm96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-70 transition-opacity"
            >
              GitHub <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPinIcon className="h-3.5 w-3.5" /> Michigan, US
            </span>
          </div>
        </div>

        <div className="shrink-0">
          <Image
            src="/images/profile.png"
            alt="Kamal Mansour"
            width={168}
            height={168}
            priority
            className="rounded-2xl ring-1 ring-border object-cover"
          />
        </div>
      </div>
    </section>
  )
}
