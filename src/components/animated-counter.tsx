"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
  value: number
  durationMs?: number
  formatter?: (n: number) => string
  suffix?: string
  className?: string
}

export function AnimatedCounter({ value, durationMs = 1200, formatter, suffix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setDisplay(value)
    }
  }, [value])

  useEffect(() => {
    if (!started) return
    let start: number | null = null
    const from = 0
    const diff = value - from
    let raf = 0
    const tick = (t: number) => {
      if (start === null) start = t
      const p = Math.min(1, (t - start) / durationMs)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      setDisplay(from + diff * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, value, durationMs])

  const defaultFormatter = (n: number) => Math.round(n).toLocaleString()
  return (
    <span
      ref={ref}
      className={className}
      aria-live="polite"
      aria-label={`${(formatter || defaultFormatter)(value)}${suffix ? ` ${suffix}` : ""}`}
    >
      {(formatter || defaultFormatter)(display)}
      {suffix}
    </span>
  )
}
