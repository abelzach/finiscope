"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { servicesMap } from "@/lib/services-data";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params); 
  const svc = servicesMap.get(slug);

  if (!svc) return notFound();

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <header className="max-w-3xl space-y-3">
        <Badge variant="secondary" className="w-fit">
          {svc.category}
        </Badge>
        <h1 className="text-3xl md:text-4xl font-semibold text-balance">
          {svc.title}
        </h1>
        <p className="text-muted-foreground text-pretty">{svc.summary}</p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {svc.features.map((f) => (
          <MagicCard
            key={f.title}
            gradientColor={"#bfd0dd55"}
            className="group h-full px-6 py-6 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <CardHeader>
              <CardTitle>{f.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {f.desc}
            </CardContent>
          </MagicCard>
        ))}
      </section>

      {svc.details.length > 0 && (
        <section className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            {svc.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </section>
      )}

      <div className="pt-6">
        <Button asChild>
          <Link href="/services">Back to services</Link>
        </Button>
      </div>
    </div>
  );
}
