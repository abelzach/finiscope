import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { partners } from "@/lib/partners-data"

export default function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-balance">Partners</h1>
        <p className="text-muted-foreground mt-4 text-pretty">
          We collaborate with leading banks, NBFIs, legal and advisory firms to deliver holistic, high-velocity
          outcomes.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {partners.map((p) => (
          <Card key={p.name} className="flex items-center justify-center">
            <CardHeader className="sr-only">
              <CardTitle>{p.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center py-8">
              <Image src={p.logo || "/placeholder.svg"} alt={`${p.name} logo`} width={160} height={80} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
