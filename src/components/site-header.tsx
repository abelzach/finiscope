"use client";

import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/company", label: "Company" },
  { href: "/founders", label: "Founders", hideOnMobile: true },
  { href: "/partners", label: "Partners" },
  { href: "/calculators", label: "Calculators" },
];

export function SiteHeader() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* Fixed top navbar */}
      <div
        className={cn(
          "fixed top-0 left-1/2 transform -translate-x-1/2 z-50",
          "backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-white/10 dark:border-white/10",
          "rounded-3xl shadow-md transition-all",
          "w-[95%] sm:w-auto"
        )}
      >
        <div className="max-w-5xl mx-auto px-1 sm:px-4 ">
          <Menu setActive={setActive}>
            {links
              .filter((link) => {
                if (
                  link.hideOnMobile &&
                  typeof window !== "undefined" &&
                  window.innerWidth < 640
                ) {
                  return false;
                }
                return true;
              })
              .map((link) => (
                <MenuItem
                  key={link.href}
                  item={link.label}
                  active={active}
                  setActive={setActive}
                  href={link.href}
                >
                  {/* Optional dropdown content */}
                </MenuItem>
              ))}
          </Menu>
        </div>
      </div>
    </div>
  );
}
