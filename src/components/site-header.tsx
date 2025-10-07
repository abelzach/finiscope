"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/company", label: "Company" },
  { href: "/founders", label: "Founders" },
  { href: "/partners", label: "Partners" },
  { href: "/calculators", label: "Calculators" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          FiniScope
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm hover:underline underline-offset-4">
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/services">Get started</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Button variant="outline" size="sm" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
            Menu
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "md:hidden border-t transition-[grid-template-rows] duration-200",
          open ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm hover:underline underline-offset-4"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
