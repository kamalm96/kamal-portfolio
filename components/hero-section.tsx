import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  const words = [{ text: "Software" }, { text: "&" }, { text: "Machine" }, { text: "Learning" }, { text: "Engineer" }]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/background.jpeg"
          alt="Technology Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="mb-8 inline-block rounded-full bg-slate-800/50 p-2 backdrop-blur-sm border-2 border-blue-500/30">
          <Image src="/images/profile.png" alt="Kamal Mansour" width={180} height={180} className="rounded-full" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair tracking-tight">Kamal Mansour</h1>

        <div className="min-h-[60px] mb-8">
          <TypewriterEffect words={words} className="text-xl md:text-2xl justify-center" />
        </div>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-slate-300">
          Software Engineer at Ford Motor Company with expertise in Golang, React, and AI/ML. Building scalable
          solutions and driving innovation.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Me
            </Button>
          </Link>
          <Link href="#experience">
            <Button size="lg" className="bg-slate-800/80 text-white border-blue-400 hover:bg-slate-700/90">
              View Experience
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

