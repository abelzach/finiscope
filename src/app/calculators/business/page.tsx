"use client";

import BusinessFacilityCalculator from "@/components/calculators/business-facility-calculator";

export default function BusinessFacilityCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-balance">
        Business Facility Calculator
      </h1>
      <BusinessFacilityCalculator />
    </div>
  );
}
