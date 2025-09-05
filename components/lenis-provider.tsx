"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import { easings } from "./easings"

interface LenisProviderProps {
  easingKey: string
}

export function LenisProvider({ easingKey }: LenisProviderProps) {
  useEffect(() => {
    const selected = easings[easingKey]

    const lenis = new Lenis({
      duration: 0.4,        // 尾部缓动时间略长
      easing: selected.fn,  // 缓动曲线
      lerp: 0.05,           // 尾部跟随更慢一点
      syncTouch: true,
      touchMultiplier: 1.5, // 滑动速度略慢一点
      wheelMultiplier: 1,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [easingKey])

  return null
}
