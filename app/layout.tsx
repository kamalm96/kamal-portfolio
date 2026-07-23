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
  title: "Kamal Mansour — Software Engineer",
  description:
    "Software engineer building production AI systems and backend infrastructure at Ford Motor Company. Go, Python, GCP, and end-to-end system design.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} ${fraunces.variable} font-sans`}>{children}</body>
    </html>
  )
}
