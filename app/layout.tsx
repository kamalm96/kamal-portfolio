import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter, Fraunces } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
})

export const metadata: Metadata = {
  title: "Kamal Mansour — Senior Systems Engineer",
  description:
    "Senior Systems Engineer at General Motors. Internal AI tooling with Glean AI and Google Cloud Gemini Enterprise. Go, Python, GCP.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} font-sans`}>{children}</body>
    </html>
  )
}
