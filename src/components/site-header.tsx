"use client";

import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  HoveredLink,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/company", label: "Company" },
  { href: "/founders", label: "Founders" },
  { href: "/partners", label: "Partners" },
  { href: "/calculators", label: "Calculators" },
];

export function SiteHeader() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* Sleek top navbar */}
      <div
        className={cn(
          "fixed top-0 left-1/2 transform -translate-x-1/2 z-50",
          "backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-white/10 dark:border-white/10",
          "rounded-3xl shadow-md "
        )}
      >
        <div className="max-w-5xl mx-auto px-4 py-1">
          <Menu setActive={setActive}>
            {links.map((link) => (
              <MenuItem
                key={link.href}
                item={link.label}
                active={active}
                setActive={setActive}
                href={link.href}
              >
                {/* <div className="text-sm grid grid-cols-2 gap-4 p-3">
                  <ProductItem
                    title="Algochurn"
                    href="https://algochurn.com"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Prepare for tech interviews like never before."
                  />
                  <ProductItem
                    title="Tailwind Master Kit"
                    href="https://tailwindmasterkit.com"
                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                    description="Production ready Tailwind css components for your next project"
                  />
                </div> */}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
}
