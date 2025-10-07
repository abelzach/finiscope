"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
  maxTilt?: number // degrees
  scale?: number
}

export function TiltCard({ children, className, maxTilt = 8, scale = 1.02 }: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [transform, setTransform] = React.useState<string>("")

  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  function handleMove(e: React.MouseEvent) {
    if (!ref.current || prefersReducedMotion) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const tiltX = (py - 0.5) * -2 * maxTilt
    const tiltY = (px - 0.5) * 2 * maxTilt
    setTransform(`rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale(${scale})`)
  }

  function handleLeave() {
    setTransform("")
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("transition-transform duration-300 will-change-transform [transform-style:preserve-3d]", className)}
      style={{ transform }}
    >
      {children}
    </div>
  )
}
