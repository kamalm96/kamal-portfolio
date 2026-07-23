"use client"

import type React from "react"
import { useState } from "react"
import { MailIcon, PhoneIcon, CheckCircle, AlertCircle } from "lucide-react"
import { sendEmail } from "@/lib/send-email"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ ...status, isSubmitting: true })

    try {
      await sendEmail({
        from: formData.email,
        name: formData.name,
        message: formData.message,
      })
      setStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: "Thanks for reaching out — I'll get back to you soon.",
      })
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setStatus((prev) => ({ ...prev, isSubmitted: false })), 5000)
    } catch {
      setStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: true,
        message: "Something went wrong. Email me directly instead.",
      })
      setTimeout(() => setStatus((prev) => ({ ...prev, isSubmitted: false })), 5000)
    }
  }

  const inputClass =
    "w-full rounded-lg border border-input bg-card px-4 py-2.5 text-[15px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/40 focus:border-ring transition-shadow"

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16 scroll-mt-14">
      <p className="text-sm font-medium tracking-widest uppercase text-primary/70 mb-2">Contact</p>
      <h2 className="font-serif text-3xl font-semibold text-primary mb-10">Get in touch</h2>

      <div className="grid sm:grid-cols-[1fr_1.3fr] gap-10">
        <div className="space-y-5">
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            Open to interesting problems in AI systems, backend infrastructure, and everything in
            between.
          </p>
          <a
            href="mailto:kamalbmansour@hotmail.com"
            className="flex items-center gap-3 text-[15px] text-foreground hover:text-primary transition-colors"
          >
            <MailIcon className="h-4 w-4 text-primary" />
            kamalbmansour@hotmail.com
          </a>
          <a
            href="tel:+13134453817"
            className="flex items-center gap-3 text-[15px] text-foreground hover:text-primary transition-colors"
          >
            <PhoneIcon className="h-4 w-4 text-primary" />
            (313) 445-3817
          </a>
        </div>

        {status.isSubmitted ? (
          <div
            className={`rounded-lg p-5 flex items-center gap-3 text-[15px] ${
              status.isError ? "bg-red-50 text-red-800" : "bg-secondary text-primary"
            }`}
          >
            {status.isError ? <AlertCircle className="h-5 w-5 shrink-0" /> : <CheckCircle className="h-5 w-5 shrink-0" />}
            <span>{status.message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
                aria-label="Name"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
                aria-label="Email"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className={inputClass}
              aria-label="Message"
            />
            <button
              type="submit"
              disabled={status.isSubmitting}
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60 transition-colors"
            >
              {status.isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
