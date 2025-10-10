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

      <section className="container mx-auto px-4 py-10 relative">
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-50 via-red-50 to-white/0" />
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance relative inline-block">
            What we do
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </h2>
          <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            <Link href="/services">View all services</Link>
          </button>
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

      <section className="container mx-auto px-4 py-6">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative rounded-2xl border border-gray-200/20 bg-white/60 dark:bg-black/40 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
            {/* Gradient header bar */}
            <div className="absolute left-0 right-0 top-0 h-1 rounded-t-2xl " />
            <div className="flex items-center gap-3">
              <div>
                <span className="block text-sm text-muted-foreground">
                  Capital Facilitated
                </span>
                <p className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-red-500 bg-clip-text text-transparent">
                  $<AnimatedCounter value={125000000} />
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl border border-gray-200/20 bg-white/60 dark:bg-black/40 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="absolute left-0 right-0 top-0 h-1 rounded-t-2xl " />
            <div className="flex items-center gap-3">
              <div>
                <span className="block text-sm text-muted-foreground">
                  Approvals Secured
                </span>
                <p className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  <AnimatedCounter value={482} />
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl border border-gray-200/20 bg-white/60 dark:bg-black/40 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="absolute left-0 right-0 top-0 h-1 rounded-t-2xl " />
            <div className="flex items-center gap-3">
              <div>
                <span className="block text-sm text-muted-foreground">
                  Documents Processed
                </span>
                <p className="text-2xl font-bold tracking-tight bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                  <AnimatedCounter value={18750} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pt-8">
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance relative inline-block">
            Approval journey
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-red-500"></span>
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
          <h2 className="text-2xl md:text-3xl font-semibold text-balance relative inline-block">
            Financial Calculators
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-red-500"></span>
          </h2>
          <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            <Link href="/calculators">All calculators</Link>
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <MagicCard className="group h-full px-6 py-6 rounded-xl backdrop-blur-md bg-white/40 dark:bg-black/30 border border-gray-200/20 hover:shadow-2xl hover:scale-[1.02] transition-all">
            <CardHeader>
              <CardTitle>Mortgage Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Estimate payments and interest for property financing.
              </p>
              <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                <Link href="/calculators/mortgage">
                  Open mortgage calculator
                </Link>
              </button>
            </CardContent>
          </MagicCard>
          <MagicCard className="group h-full px-6 py-6 rounded-xl backdrop-blur-md bg-white/40 dark:bg-black/30 border border-gray-200/20 hover:shadow-2xl hover:scale-[1.02] transition-all">
            <CardHeader>
              <CardTitle>Business Facility Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Evaluate term loan or revolving credit capacity for corporates.
              </p>
              <button className="px-8 py-2 rounded-full bg-gradient-to-tr from-red-200 via-red-200 to-blue-500 text-black focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                <Link href="/calculators/business">
                  Open business calculator
                </Link>
              </button>
            </CardContent>
          </MagicCard>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
