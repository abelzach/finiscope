"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/animated-counter";
import { Spotlight } from "@/components/ui/spotlight-new";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-6">
      <div className="absolute inset-0 -z-10">
        <Spotlight />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,0,0,0.06),transparent_60%)] -z-0" />
      {/* Subtle corporate gradient from blue to red */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/10 via-blue-400/10 to-red-500/10" />
      <div className="container mx-auto px-4 py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center relative">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold tracking-tight text-primary">
              Finiscope
            </span>
            <span className="h-4 w-px bg-border" />
            <Badge variant="secondary" className="w-fit">
              For Corporates & Entrepreneurs
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-balance">
            Capital, Approvals, and Scale — Delivered
          </h1>
          <p className="text-muted-foreground text-pretty">
            FiniScope partners with you end-to-end across banking, finance,
            mortgages, document approvals, and scaling to unlock momentum with
            clarity and speed.
          </p>
          <div className="flex gap-3">
            <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              <Link href="/services">Explore Services</Link>
            </button>
            <button className="px-8 py-2 rounded-full bg-gradient-to-tr from-red-200 via-red-200 to-blue-500 text-black focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              <Link href="/calculators">Try Calculators</Link>
            </button>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="rounded-xl border p-6 md:p-8 bg-card/60 backdrop-blur">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-semibold">
                  <AnimatedCounter value={120} />+
                </div>
                <div className="text-xs text-muted-foreground">
                  Banking Partners
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold">
                  $
                  <AnimatedCounter
                    value={950}
                    formatter={(n) => `${Math.round(n)}M`}
                  />
                </div>
                <div className="text-xs text-muted-foreground">
                  Capital Advised
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold">
                  <AnimatedCounter value={14} />d
                </div>
                <div className="text-xs text-muted-foreground">
                  Avg. Approval
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
