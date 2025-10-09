"use client";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedCounter } from "./animated-counter";
import { Reveal } from "./reveal";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-semibold text-blue-400 dark:bg-blue-700/[0.2] dark:text-blue-400 px-1 py-0.5 rounded",
        className
      )}
    >
      {children}
    </span>
  );
};

const STATS = [
  { label: "Clients Advised", value: 120 },
  { label: "Approvals Secured", value: 340 },
  { label: "Financing Facilitated", value: 275, suffix: "M+" },
  { label: "Partners", value: 153 },
];

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in
        my project. Framer Motion is a godsend 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Serial Builder",
    content: (
      <p>
        I don’t like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight>. Instead, I’ll call it{" "}
        <Highlight>X.com</Highlight>.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Project Mayhem",
    content: (
      <p>
        The first rule of <Highlight>Fight Club</Highlight> is you do not talk
        about fight club.
      </p>
    ),
  },
];

export function StatsGrid() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 relative">
      {/* Optional gradient background */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-blue-50 to-blue-100 dark:from-black/20 dark:to-black/10" />

      <div className="mb-8 text-center md:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-balance">
          Impact in Numbers
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-md mx-auto">
          Credibility through outcomes across banking, finance, and approvals.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:gap-12 items-center">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 md:gap-6 w-full md:w-1/2">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delayMs={100 * i}>
              <MagicCard
                gradientColor={"#bfd0dd55"}
                className="overflow-hidden group h-full px-4 sm:px-6 py-4 sm:py-6 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-xs sm:text-sm md:text-sm text-muted-foreground">
                    {s.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix || ""}
                    className="text-2xl sm:text-3xl md:text-3xl font-semibold text-blue-400 dark:text-blue-400"
                  />
                </CardContent>
              </MagicCard>
            </Reveal>
          ))}
        </div>

        {/* Cards stack */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <CardStack items={CARDS} />
        </div>
      </div>
    </section>
  );
}
