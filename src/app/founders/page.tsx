import Image from "next/image";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
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
      <h1 className="text-3xl md:text-4xl font-semibold text-balance mb-8 relative inline-block">
        Founders
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-red-500"></span>
      </h1>
      <div className="grid gap-8 md:grid-cols-2">
        {founders.map((f) => (
          <MagicCard
            key={f.name}
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
      <div className="flex flex-col">
        <p className="text-lg pt-10 md:text-xl font-semibold text-balance text-center">
          Our Team
        </p>
        <div className="flex flex-row items-center justify-center mt-4 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </div>
  );
}
