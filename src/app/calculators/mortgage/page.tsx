"use client"

import { MortgageCalculator } from "@/components/calculators/mortgage-calculator"

export default function MortgageCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-balance">Mortgage Calculator</h1>
      <MortgageCalculator />
    </div>
  )
}
