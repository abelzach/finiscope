"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

function currency(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 })
}

export function BusinessFacilityCalculator() {
  const [revenue, setRevenue] = useState<number>(10_000_000)
  const [ebitdaMargin, setEbitdaMargin] = useState<number>(18)
  const [type, setType] = useState<"term" | "rcf">("term")
  const [rate, setRate] = useState<number>(10)
  const [tenorYears, setTenorYears] = useState<number>(5)
  const [utilization, setUtilization] = useState<number>(60)

  const ebitda = useMemo(() => (revenue * ebitdaMargin) / 100, [revenue, ebitdaMargin])

  // Simple policy heuristics for illustration:
  // Term Loan capacity ~ 3.0x EBITDA, RCF limit ~ 20% of revenue
  const termCapacity = ebitda * 3
  const rcfLimit = revenue * 0.2

  const termMonthly = useMemo(() => {
    const principal = termCapacity
    const r = rate / 100 / 12
    const n = tenorYears * 12
    const m = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const total = m * n
    const interest = total - principal
    return { m, total, interest, principal }
  }, [termCapacity, rate, tenorYears])

  const rcfMonthlyInterest = useMemo(() => {
    const drawn = (rcfLimit * utilization) / 100
    const monthly = (rate / 100 / 12) * drawn
    return { drawn, monthly }
  }, [rcfLimit, utilization, rate])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Evaluate corporate financing</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="revenue">Annual revenue</Label>
            <Input
              id="revenue"
              type="number"
              min={0}
              value={revenue}
              onChange={(e) => setRevenue(Math.max(0, Number(e.target.value)))}
            />
            <Slider
              value={[revenue]}
              min={500_000}
              max={200_000_000}
              step={100_000}
              onValueChange={([v]) => setRevenue(v)}
            />
          </div>

          <div className="space-y-2">
            <Label>EBITDA margin (%)</Label>
            <Input
              type="number"
              min={0}
              max={80}
              step={0.5}
              value={ebitdaMargin}
              onChange={(e) => setEbitdaMargin(Math.max(0, Math.min(80, Number(e.target.value))))}
            />
            <Slider value={[ebitdaMargin]} min={0} max={80} step={0.5} onValueChange={([v]) => setEbitdaMargin(v)} />
          </div>

          <div className="space-y-2">
            <Label>Facility type</Label>
            <Select value={type} onValueChange={(v: "term" | "rcf") => setType(v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="term">Term Loan</SelectItem>
                <SelectItem value="rcf">Revolving Credit (RCF)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Interest rate (annual %)</Label>
              <Input
                type="number"
                min={0}
                max={30}
                step={0.25}
                value={rate}
                onChange={(e) => setRate(Math.max(0, Math.min(30, Number(e.target.value))))}
              />
              <Slider value={[rate]} min={0} max={30} step={0.25} onValueChange={([v]) => setRate(v)} />
            </div>
            {type === "term" ? (
              <div className="space-y-2">
                <Label>Tenor (years)</Label>
                <Input
                  type="number"
                  min={1}
                  max={10}
                  value={tenorYears}
                  onChange={(e) => setTenorYears(Math.max(1, Math.min(10, Number(e.target.value))))}
                />
                <Slider value={[tenorYears]} min={1} max={10} step={1} onValueChange={([v]) => setTenorYears(v)} />
              </div>
            ) : (
              <div className="space-y-2">
                <Label>Utilization (%)</Label>
                <Input
                  type="number"
                  min={0}
                  max={100}
                  step={1}
                  value={utilization}
                  onChange={(e) => setUtilization(Math.max(0, Math.min(100, Number(e.target.value))))}
                />
                <Slider value={[utilization]} min={0} max={100} step={1} onValueChange={([v]) => setUtilization(v)} />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <Tabs defaultValue={type} onValueChange={(v) => setType(v as "term" | "rcf")}>
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="term">Term Loan</TabsTrigger>
              <TabsTrigger value="rcf">RCF</TabsTrigger>
            </TabsList>

            <TabsContent value="term" className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Capacity (≈ 3.0× EBITDA)</span>
                <span className="font-medium">{currency(termCapacity)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Estimated monthly payment</span>
                <span className="font-medium">{currency(termMonthly.m)}</span>
              </div>
              <Separator />
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="space-y-1">
                  <div className="text-muted-foreground">Principal</div>
                  <div className="font-medium">{currency(termMonthly.principal)}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-muted-foreground">Total interest</div>
                  <div className="font-medium">{currency(termMonthly.interest)}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-muted-foreground">Rate</div>
                  <div className="font-medium">{rate.toFixed(2)}%</div>
                </div>
                <div className="space-y-1">
                  <div className="text-muted-foreground">Tenor</div>
                  <div className="font-medium">{tenorYears} years</div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="rcf" className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Limit (≈ 20% of revenue)</span>
                <span className="font-medium">{currency(rcfLimit)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Monthly interest at {utilization}% utilization</span>
                <span className="font-medium">{currency(rcfMonthlyInterest.monthly)}</span>
              </div>
              <Separator />
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="space-y-1">
                  <div className="text-muted-foreground">Drawn amount</div>
                  <div className="font-medium">{currency(rcfMonthlyInterest.drawn)}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-muted-foreground">Rate</div>
                  <div className="font-medium">{rate.toFixed(2)}%</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
}
