import Link from "next/link";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";

export default function CalculatorsIndex() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-balance mb-8 relative inline-block">
        Calculators
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-red-500"></span>
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        <MagicCard className="group h-full px-6 py-6 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md">
          <CardHeader>
            <CardTitle>Mortgage Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Estimate monthly payments and total interest for mortgage
              scenarios.
            </p>
            <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              <Link href="/calculators/mortgage">Open</Link>
            </button>
          </CardContent>
        </MagicCard>
        <MagicCard className="group h-full px-6 py-6 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md">
          <CardHeader>
            <CardTitle>Business Facility Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Evaluate capacity and payments for corporate financing.
            </p>
            <button className="px-8 py-2 rounded-full bg-gradient-to-tr from-red-200 via-red-200 to-blue-500 text-black focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              <Link href="/calculators/business">Open</Link>
            </button>
          </CardContent>
        </MagicCard>
      </div>
    </div>
  );
}
