"use client"

import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { LenisProvider } from "@/components/lenis-provider"
import EasingSelector from "@/components/easing-selector"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })


interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [easingKey, setEasingKey] = useState("linear") // 默认线性

  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* 传递 easingKey，让 Lenis 使用当前选择曲线 */}
          <LenisProvider easingKey={easingKey} />

          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between gap-4">
                <ModeToggle />
                <EasingSelector easingKey={easingKey} onChange={setEasingKey} />
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
