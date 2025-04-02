"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, MapPinIcon, CheckCircle, AlertCircle } from "lucide-react"
import { sendEmail } from "@/lib/send-email"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

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
        message: "Thank you for your message! I'll get back to you soon.",
      })

      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, isSubmitted: false }))
      }, 5000)
    } catch (error) {
      setStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: true,
        message: "There was an error sending your message. Please try again.",
      })

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, isSubmitted: false }))
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-slate-100 p-3 rounded-full">
                  <MailIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:kamalbmansour@hotmail.com" className="text-blue-600 hover:underline">
                    kamalbmansour@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-slate-100 p-3 rounded-full">
                  <MapPinIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p>United States</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Send a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              {status.isSubmitted ? (
                <div
                  className={`p-4 rounded-md flex items-center gap-3 ${status.isError ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}
                >
                  {status.isError ? <AlertCircle className="h-5 w-5" /> : <CheckCircle className="h-5 w-5" />}
                  <span>{status.message}</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={status.isSubmitting}>
                    {status.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

