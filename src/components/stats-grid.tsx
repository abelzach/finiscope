import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedCounter } from "./animated-counter"
import { Reveal } from "./reveal"

export function StatsGrid() {
  const stats = [
    { label: "Clients Advised", value: 120 },
    { label: "Approvals Secured", value: 340 },
    { label: "Financing Facilitated", value: 275, suffix: "M+" },
    { label: "Partners", value: 45 },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">Impact in Numbers</h2>
        <p className="text-muted-foreground mt-2">
          Credibility through outcomes across banking, finance, and approvals.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delayMs={100 * i}>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">{s.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <AnimatedCounter value={s.value} suffix={s.suffix || ""} className="text-3xl font-semibold" />
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
