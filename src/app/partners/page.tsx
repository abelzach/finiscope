"use client";

import { IconCloud } from "@/components/ui/icon-cloud";
import { partners } from "@/lib/partners-data";

export default function PartnersPage() {
  const images = partners.map((p) => p.logo || "/placeholder.svg");

  return (
    <div className="container mx-auto px-4 py-16 space-y-12">
      <header className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-balance">
          Our Partners
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          We collaborate with leading banks, NBFIs, legal and advisory firms to
          deliver holistic, high-velocity outcomes.
        </p>
      </header>

      <div className="relative w-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <IconCloud images={images} canvasSize={600} iconSize={150}/>
        </div>
      </div>
    </div>
  );
}
