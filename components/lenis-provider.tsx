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
      duration: selected.duration || 0.8,
      easing: selected.fn,
      smoothWheel: true,   // 鼠标滚轮平滑
    })


    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [easingKey]) // 注意依赖数组，改变 easingKey 会重新初始化 Lenis

  return null
}
