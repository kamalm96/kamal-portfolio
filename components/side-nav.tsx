"use client"

import { useEffect, useState } from "react"

const items = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
]

export default function SideNav() {
  const [active, setActive] = useState("experience")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-25% 0px -65% 0px" },
    )
    for (const item of items) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="hidden lg:block mt-14" aria-label="Sections">
      <ul className="space-y-4">
        {items.map((item) => {
          const isActive = active === item.id
          return (
            <li key={item.id}>
              <a href={`#${item.id}`} className="group flex items-center gap-3 py-1">
                <span
                  className={`h-px transition-all duration-300 ${
                    isActive
                      ? "w-14 bg-primary"
                      : "w-7 bg-muted-foreground/40 group-hover:w-14 group-hover:bg-primary/70"
                  }`}
                />
                <span
                  className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
