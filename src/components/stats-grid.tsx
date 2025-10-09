"use client";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedCounter } from "./animated-counter";
import { Reveal } from "./reveal";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";
// Light blue highlight utility
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
        "font-bold text-blue-400 dark:bg-blue-700/[0.2] dark:text-blue-400 px-1 py-0.5 rounded",
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
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer Motion is a godsend 🙏
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
    <section className="container mx-auto px-4 py-16 md:py-10 relative">
      {/* background gradient layer */}
      <div className="absolute inset-0 -z-10 rounded-3xl" />

      <div className="mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">
          Impact in Numbers
        </h2>
        <p className="text-muted-foreground mt-2">
          Credibility through outcomes across banking, finance, and approvals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Stats Grid (all visible) */}
        <div className="grid gap-6 sm:grid-cols-2">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delayMs={100 * i}>
              <MagicCard
                gradientColor={"#bfd0dd55"}
                className="overflow-hidden group h-full px-6 py-6 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* <Card className="bg-white/70 dark:bg-black/40 backdrop-blur-md shadow-md border border-blue-100 dark:border-blue-900/40"> */}
                <CardHeader>
                  <CardTitle className="text-sm text-muted-foreground">
                    {s.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix || ""}
                    className="text-3xl font-semibold text-blue-400 dark:text-blue-400"
                  />
                </CardContent>
              </MagicCard>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center">
          <CardStack items={CARDS} />
        </div>
      </div>
    </section>
  );
}
