"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Step = {
  title: string;
  desc: string;
};

export function ApprovalSteps({
  steps,
  className,
}: {
  steps: Step[];
  className?: string;
}) {
  const [active, setActive] = React.useState(0);

  return (
    <div className={cn("w-full", className)}>
      <ol className="grid gap-4 md:grid-cols-4">
        {steps.map((s, i) => {
          const isActive = i === active;
          const isComplete = i < active;
          return (
            <li key={s.title} className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`
                      group relative w-full flex flex-col items-center gap-1 rounded-2xl border-2 p-2 
                      transition-all duration-300 ease-out
                      ${
                        isActive
                          ? "border-blue-600 bg-white shadow-xl shadow-blue-100 scale-105"
                          : isComplete
                            ? "border-indigo-300 bg-white hover:border-indigo-400 hover:shadow-lg"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg"
                      }
                    `}
                aria-current={isActive ? "step" : undefined}
              >
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-medium",
                    isComplete
                      ? "bg-[color-mix(in_oklch,var(--color-primary)_82%,transparent)] text-primary-foreground"
                      : isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground/70"
                  )}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="font-medium text-sm">{s.title}</span>
              </button>
              {isActive && (
                <div
                  className={cn(
                    "rounded-lg border border-border bg-card/70 p-4 text-sm leading-relaxed"
                  )}
                >
                  {s.desc}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
