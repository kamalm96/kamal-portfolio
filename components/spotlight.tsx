"use client"

import { useEffect, useState } from "react"

export default function Spotlight() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const move = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener("pointermove", move)
    return () => window.removeEventListener("pointermove", move)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block transition-opacity"
      style={{
        background: `radial-gradient(560px at ${pos.x}px ${pos.y}px, hsl(158 60% 52% / 0.05), transparent 80%)`,
      }}
      aria-hidden="true"
    />
  )
}
