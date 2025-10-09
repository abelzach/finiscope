import Link from "next/link";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";

export default function CalculatorsIndex() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-balance mb-8">
        Calculators
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        <MagicCard
          gradientColor={"#bfd0dd55"}
          className="group h-full px-6 py-6 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <CardHeader>
            <CardTitle>Mortgage Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Estimate monthly payments and total interest for mortgage
              scenarios.
            </p>
            <Button asChild>
              <Link href="/calculators/mortgage">Open</Link>
            </Button>
          </CardContent>
        </MagicCard>
        <MagicCard
          gradientColor={"#bfd0dd55"}
          className="group h-full px-6 py-6 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <CardHeader>
            <CardTitle>Business Facility Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Evaluate capacity and payments for corporate financing.
            </p>
            <Button asChild variant="secondary">
              <Link href="/calculators/business">Open</Link>
            </Button>
          </CardContent>
        </MagicCard>
      </div>
    </div>
  );
}
