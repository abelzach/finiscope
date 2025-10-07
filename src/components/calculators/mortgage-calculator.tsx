"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

function formatCurrency(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 })
}

export function MortgageCalculator() {
  const [principal, setPrincipal] = useState<number>(500_000)
  const [annualRate, setAnnualRate] = useState<number>(7.25)
  const [years, setYears] = useState<number>(25)

  const { monthly, totalInterest, totalPaid } = useMemo(() => {
    const r = annualRate / 100 / 12
    const n = years * 12
    const m = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const total = m * n
    const interest = total - principal
    return { monthly: m, totalInterest: interest, totalPaid: total }
  }, [principal, annualRate, years])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Estimate your mortgage</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="principal">Loan amount</Label>
            <Input
              id="principal"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(Math.max(0, Number(e.target.value)))}
              min={0}
            />
            <Slider
              value={[principal]}
              min={50_000}
              max={2_000_000}
              step={10_000}
              onValueChange={([v]) => setPrincipal(v)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="rate">Interest rate (annual %)</Label>
            <Input
              id="rate"
              type="number"
              step="0.05"
              value={annualRate}
              onChange={(e) => setAnnualRate(Math.max(0, Number(e.target.value)))}
              min={0}
            />
            <Slider value={[annualRate]} min={0} max={18} step={0.05} onValueChange={([v]) => setAnnualRate(v)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="years">Term (years)</Label>
            <Input
              id="years"
              type="number"
              value={years}
              onChange={(e) => setYears(Math.max(1, Number(e.target.value)))}
              min={1}
              max={40}
            />
            <Slider value={[years]} min={1} max={40} step={1} onValueChange={([v]) => setYears(v)} />
          </div>
        </div>

        <div className="space-y-6">
          <Tabs defaultValue="summary">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="totals">Totals</TabsTrigger>
              <TabsTrigger value="tips">Tips</TabsTrigger>
            </TabsList>
            <TabsContent value="summary" className="space-y-4">
              <div className="text-sm text-muted-foreground">Estimated monthly payment</div>
              <div className="text-3xl font-semibold">{formatCurrency(monthly)}</div>
              <Separator />
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <div className="text-muted-foreground">Loan amount</div>
                  <div className="font-medium">{formatCurrency(principal)}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-muted-foreground">Interest rate</div>
                  <div className="font-medium">{annualRate.toFixed(2)}%</div>
                </div>
                <div className="space-y-1">
                  <div className="text-muted-foreground">Term</div>
                  <div className="font-medium">{years} years</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="totals" className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total paid</span>
                <span className="font-medium">{formatCurrency(totalPaid)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total interest</span>
                <span className="font-medium">{formatCurrency(totalInterest)}</span>
              </div>
            </TabsContent>
            <TabsContent value="tips" className="space-y-2 text-sm text-muted-foreground">
              <p>Lower your payment by increasing the term or reducing the rate via a higher down payment.</p>
              <p>Consider making occasional extra principal payments to reduce total interest.</p>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
}
