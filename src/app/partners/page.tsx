"use client";

import { useEffect, useState } from "react";
import { IconCloud } from "@/components/ui/icon-cloud";
import { partners } from "@/lib/partners-data";

export default function PartnersPage() {
  const images = partners.map((p) => p.logo || "/placeholder.svg");
  const [canvasSize, setCanvasSize] = useState(600);
  const [iconSize, setIconSize] = useState(150);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setCanvasSize(300); // smaller for mobile
        setIconSize(100)
      } else {
        setCanvasSize(600); // default for tablet/desktop
      }
    };

    updateSize(); // run once on mount
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="container mx-auto px-4 pt-18 ">
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
          <IconCloud images={images} canvasSize={canvasSize} iconSize={iconSize}/>
        </div>
      </div>
    </div>
  );
}
