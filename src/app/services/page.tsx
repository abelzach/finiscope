"use client";

import Link from "next/link"
import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { services, allCategories } from "@/lib/services-data"
import { ServiceCard } from "@/components/service-card"

export default function ServicesPage() {
  const [q, setQ] = useState("")
  const [cat, setCat] = useState<string>("All")

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return services.filter((s) => {
      const inCat = cat === "All" || s.category === cat
      const inQuery = !query || s.title.toLowerCase().includes(query) || s.summary.toLowerCase().includes(query)
      return inCat && inQuery
    })
  }, [q, cat])

  return (
    <div className="container relative overflow-hidden mx-auto px-4 py-16 space-y-8">
      {/* Subtle professional red theme background */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl">
        <div className="absolute inset-0 to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[960px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(239,68,68,0.25)_0%,rgba(239,68,68,0.08)_40%,transparent_70%)]" />
      </div>
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-balance relative inline-block">Services
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-red-500"></span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Explore our capabilities. Click a service for detailed information.
          </p>
        </div>
        <div className="flex gap-3">
          <Input
            placeholder="Search services"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-56"
            aria-label="Search services"
          />
          <Select value={cat} onValueChange={setCat}>
            <SelectTrigger className="w-40" aria-label="Filter by category">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {["All", ...allCategories].map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {filtered.map((svc) => (
          <ServiceCard key={svc.slug} service={svc} />
        ))}
      </div>

      <div className="text-center pt-4 text-sm text-muted-foreground">
        Didn&apos;t find what you need?{" "}
        <Link className="underline underline-offset-4" href="/company">
          Learn about custom engagements
        </Link>
        .
      </div>
    </div>
  )
}
