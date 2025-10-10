"use client";

import Image from "next/image";
import { partners } from "@/lib/partners-data";

export function PartnersMarquee() {
  // duplicate list for seamless loop
  const loop = [...partners, ...partners];

  return (
    <section aria-labelledby="partners-heading" className="py-12 relative">
      {/* Subtle blue→red background */}
      <div className="pointer-events-none absolute inset-0 -z-10 " />
      <div className="container mx-auto px-4 space-y-6">
        <h2
          id="partners-heading"
          className=" text-center text-sm uppercase tracking-widest text-muted-foreground"
        >
          Trusted by our collaborators
        </h2>
        <div className="relative overflow-hidden">
          <div className="marquee flex items-center gap-10 will-change-transform">
            {loop.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="shrink-0 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                aria-label={p.name}
              >
                <Image
                  src={
                    p.logo ||
                    "/placeholder.svg?height=80&width=160&query=partner%20logo"
                  }
                  alt={`${p.name} logo`}
                  width={140}
                  height={60}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
