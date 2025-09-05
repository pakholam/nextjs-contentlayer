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

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

    const lenis = new Lenis({
      duration: 0.4,        // 尾部缓动时间略长
      easing: selected.fn,
      lerp: 0.05,           // 桌面端尾部跟随慢一点
      syncTouch: true,      
      syncTouchLerp: isTouchDevice ? 0.15 : undefined,  // 移动端平滑跟随，解决慢滑跳动
      touchMultiplier: 1,    // 恢复正常滑动距离
      wheelMultiplier: 1,
      smoothWheel: true,
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
