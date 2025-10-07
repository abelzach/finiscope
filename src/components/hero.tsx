import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "@/components/animated-counter"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,_rgba(0,0,0,0.06),_transparent_60%)]" />
      <div className="container mx-auto px-4 py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center relative">
        <div className="space-y-6">
          <Badge variant="secondary" className="w-fit">
            For Corporates & Entrepreneurs
          </Badge>
          <h1 className="text-4xl md:text-5xl font-semibold text-balance">Capital, Approvals, and Scale — Delivered</h1>
          <p className="text-muted-foreground text-pretty">
            FiniScope partners with you end-to-end across banking, finance, mortgages, document approvals, and scaling to
            unlock momentum with clarity and speed.
          </p>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/calculators">Try Calculators</Link>
            </Button>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="rounded-xl border p-6 md:p-8 bg-card/60 backdrop-blur">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-semibold">
                  <AnimatedCounter value={120} />+
                </div>
                <div className="text-xs text-muted-foreground">Banking Partners</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">
                  $
                  <AnimatedCounter value={950} formatter={(n) => `${Math.round(n)}M`} />
                </div>
                <div className="text-xs text-muted-foreground">Capital Advised</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">
                  <AnimatedCounter value={14} />d
                </div>
                <div className="text-xs text-muted-foreground">Avg. Approval</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
