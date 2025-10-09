import Image from "next/image";
import {  CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
const founders = [
  {
    name: "Tony",
    role: "Co-founder & CEO",
    src: "/founder-portrait-2.jpeg",
    bio: "15+ years in banking and corporate finance across growth, leverage, and special situations.",
  },
  {
    name: "Jayshree Tony",
    role: "Co-founder & COO",
    src: "/founder-portrait-2.jpeg",
    bio: "Operator with deep experience in approvals, compliance, and scaling operations.",
  },
];

export default function FoundersPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-balance mb-8">
        Founders
      </h1>
      <div className="grid gap-8 md:grid-cols-2">
        {founders.map((f) => (
          <MagicCard
            key={f.name}
            gradientColor={"#bfd0dd55"}
            className="overflow-hidden group h-full px-6 py-6 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <CardHeader>
              <CardTitle>{f.name}</CardTitle>
              <p className="text-muted-foreground">{f.role}</p>
            </CardHeader>
            <CardContent className="flex gap-6 items-start">
              <Image
                src={f.src || "/placeholder.svg"}
                alt={`Portrait of ${f.name}`}
                width={160}
                height={160}
                className="rounded-lg"
              />
              <p className="text-muted-foreground text-pretty">{f.bio}</p>
            </CardContent>
          </MagicCard>
        ))}
      </div>
    </div>
  );
}
