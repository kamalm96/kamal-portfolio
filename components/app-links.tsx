"use client"

import { useEffect, useState } from "react"
import { ArrowUpRightIcon } from "lucide-react"

// Fill these in when the store links are live; empty links are hidden
// and the smart button falls back to GitHub.
const IOS_URL = "https://testflight.apple.com/join/ddxEvnVk"
const ANDROID_URL = "" // needs a public EAS internal-distribution link or APK artifact URL
const GITHUB_URL = "https://github.com/kamalm96/roomie"

type Platform = "ios" | "android" | "other"

export default function AppLinks() {
  const [platform, setPlatform] = useState<Platform>("other")

  useEffect(() => {
    const ua = navigator.userAgent
    // iPadOS 13+ reports as Mac, so check for touch support too
    const isIos =
      /iPhone|iPad|iPod/i.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    if (isIos) setPlatform("ios")
    else if (/Android/i.test(ua)) setPlatform("android")
  }, [])

  const smartUrl =
    platform === "ios" && IOS_URL
      ? IOS_URL
      : platform === "android" && ANDROID_URL
        ? ANDROID_URL
        : GITHUB_URL

  const smartLabel =
    smartUrl === IOS_URL
      ? "Get it on TestFlight"
      : smartUrl === ANDROID_URL
        ? "Get it for Android"
        : "View on GitHub"

  const secondary = [
    IOS_URL && { label: "iOS (TestFlight)", url: IOS_URL },
    ANDROID_URL && { label: "Android", url: ANDROID_URL },
    { label: "GitHub", url: GITHUB_URL },
  ].filter(Boolean) as { label: string; url: string }[]

  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
      <a
        href={smartUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        {smartLabel}
        <ArrowUpRightIcon className="h-3.5 w-3.5" />
      </a>
      {secondary
        .filter((item) => item.url !== smartUrl)
        .map((item) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4 decoration-border hover:decoration-primary"
          >
            {item.label}
          </a>
        ))}
    </div>
  )
}
