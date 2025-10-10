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
      <ol className="grid gap-6 md:grid-cols-4">
        {steps.map((s, i) => {
          const isActive = i === active;
          const isComplete = i < active;
          return (
            <li key={s.title} className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "group relative w-full flex flex-col items-center gap-2 rounded-2xl border p-4 transition-all duration-300 ease-out",
                  "backdrop-blur-md bg-white/40 border-white/20 shadow-sm",
                  isActive
                    ? "scale-105 border-blue-500 shadow-lg"
                    : isComplete
                      ? "border-red-400 hover:border-red-500"
                      : "border-slate-200 hover:border-slate-300"
                )}
                aria-current={isActive ? "step" : undefined}
              >
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold backdrop-blur-sm shadow-sm",
                    isComplete
                      ? "bg-red-500/80 text-white"
                      : isActive
                        ? "bg-blue-600/80 text-white"
                        : "bg-slate-300/60 text-slate-700"
                  )}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span
                  className={cn(
                    "font-medium text-sm tracking-wide",
                    isActive ? "text-blue-700" : isComplete ? "text-red-500" : "text-slate-700"
                  )}
                >
                  {s.title}
                </span>
              </button>
              {isActive && (
                <div className="rounded-xl border border-white/20 bg-white/40 backdrop-blur-lg p-4 text-sm leading-relaxed text-slate-800 shadow-inner">
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
