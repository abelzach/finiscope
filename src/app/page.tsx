"use client";
import { Hero } from "@/components/hero";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";
import { ServiceCard } from "@/components/service-card";
import { PartnersMarquee } from "@/components/partners-marquee";
import { StatsGrid } from "@/components/stats-grid";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { FAQSection } from "@/components/faq-section";
import { MagicCard } from "@/components/ui/magic-card";

export default function Page() {
  const featured = services.slice(0, 3);

  return (
    <div>
      <Hero />
      <StatsGrid />

      <PartnersMarquee />

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance">
            What we do
          </h2>
          <Button asChild variant="outline">
            <Link href="/services">View all services</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((svc, i) => (
            <Reveal key={svc.slug} delayMs={100 * i}>
              <TiltCard>
                <ServiceCard service={svc} />
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid gap-6 md:grid-cols-3">
        <Reveal>
          <MagicCard
            gradientColor={"#bfd0dd55"}
            className="group h-full px-6 py-6 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <CardHeader>
              <CardTitle className="text-balance">Company Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-pretty">
                FiniScope partners with corporates and entrepreneurs to unlock
                growth across banking, finance, mortgage, and approvals
                ecosystems.
              </p>
              <Button asChild>
                <Link href="/company">Explore company</Link>
              </Button>
            </CardContent>
          </MagicCard>
        </Reveal>

        <Reveal delayMs={100}>
          <MagicCard
            gradientColor={"#bfd0dd55"}
            className="group h-full px-6 py-6 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <CardHeader>
              <CardTitle className="text-balance">Founders</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-pretty">
                Experienced operators and ex-bankers with a track record in
                scaling companies and complex approvals.
              </p>
              <Button asChild variant="secondary">
                <Link href="/founders">Meet the team</Link>
              </Button>
            </CardContent>
          </MagicCard>
        </Reveal>

        <Reveal delayMs={200}>
          <MagicCard
            gradientColor={"#bfd0dd55"}
            className="group h-full px-6 py-6 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <CardHeader>
              <CardTitle className="text-balance">Partners</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-pretty">
                Trusted collaborations across banks, NBFIs, advisors, and legal
                specialists.
              </p>
              <Button asChild variant="outline">
                <Link href="/partners">See partners</Link>
              </Button>
            </CardContent>
          </MagicCard>
        </Reveal>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance">
            Financial Calculators
          </h2>
          <Button asChild>
            <Link href="/calculators">All calculators</Link>
          </Button>
        </div>
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
                Estimate payments and interest for property financing.
              </p>
              <Button asChild>
                <Link href="/calculators/mortgage">
                  Open mortgage calculator
                </Link>
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
                Evaluate term loan or revolving credit capacity for corporates.
              </p>
              <Button asChild variant="secondary">
                <Link href="/calculators/business">
                  Open business calculator
                </Link>
              </Button>
            </CardContent>
          </MagicCard>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
