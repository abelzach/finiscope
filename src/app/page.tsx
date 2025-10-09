"use client";
import { Hero } from "@/components/hero";
import Link from "next/link";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";
import { ServiceCard } from "@/components/service-card";
import { PartnersMarquee } from "@/components/partners-marquee";
import { StatsGrid } from "@/components/stats-grid";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { FAQSection } from "@/components/faq-section";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedCounter } from "@/components/animated-counter";
import { ApprovalSteps } from "@/components/ui/approval-steps";

export default function Page() {
  const featured = services.slice(0, 3);

  return (
    <div>
      <Hero />
      <StatsGrid />

      <PartnersMarquee />

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance relative inline-block">
            What we do
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
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

      <section className="container mx-auto px-4 pb-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="group relative rounded-2xl border border-gray-200/20 bg-white/50 dark:bg-black/40 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center gap-3">
              <div>
                <span className="block text-sm text-muted-foreground">
                  Capital Facilitated
                </span>
                <p className="text-2xl font-bold tracking-tight">
                  $<AnimatedCounter value={125000000} />
                </p>
              </div>
            </div>
          </div>

          <div className="group relative rounded-2xl border border-gray-200/20 bg-white/50 dark:bg-black/40 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center gap-3">
              <div>
                <span className="block text-sm text-muted-foreground">
                  Approvals Secured
                </span>
                <p className="text-2xl font-bold tracking-tight">
                  <AnimatedCounter value={482} />
                </p>
              </div>
            </div>
          </div>

          <div className="group relative rounded-2xl border border-gray-200/20 bg-white/50 dark:bg-black/40 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center gap-3">
              <div>
                <span className="block text-sm text-muted-foreground">
                  Documents Processed
                </span>
                <p className="text-2xl font-bold tracking-tight">
                  <AnimatedCounter value={18750} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance relative inline-block">
            Approval journey
          </h2>
          <p className="text-sm text-muted-foreground">
            Click a stage to see how we reduce risk and accelerate timelines.
          </p>
        </div>
        <ApprovalSteps
          steps={[
            {
              title: "Discovery",
              desc: "We align on objectives and constraints, then map counterparties (banks, NBFIs, legal) to compress the path to ‘yes’.",
            },
            {
              title: "Structuring",
              desc: "Capital stack, securities, covenants, and repayment waterfall designed to fit model sensitivities and lender appetite.",
            },
            {
              title: "Diligence",
              desc: "Data rooms, document checklists, and issue logs tracked centrally to keep stakeholders moving in parallel.",
            },
            {
              title: "Credit Approval",
              desc: "Proactive memo alignment, conditions precedent tracking, and closing checklist to land signatures on time.",
            },
          ]}
        />
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
            className="group h-full px-6 py-6 rounded-xl backdrop-blur-md bg-white/40 dark:bg-black/30 border border-gray-200/20 hover:shadow-2xl hover:scale-[1.02] transition-all"
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
            className="group h-full px-6 py-6 rounded-xl backdrop-blur-md bg-white/40 dark:bg-black/30 border border-gray-200/20 hover:shadow-2xl hover:scale-[1.02] transition-all"
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
