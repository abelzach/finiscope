import Link from "next/link";
import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t bg-gradient-to-br from-blue-50 via-red-50 to-white/0">
      <div className="container relative overflow-hidden mx-auto px-4 py-4 sm:py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6 text-sm sm:text-base">
        {/* Branding */}
        <div className="font-semibold text-base sm:text-lg">FiniScope</div>

        {/* Navigation - hidden on mobile */}
        <nav className="hidden sm:flex flex-wrap justify-center sm:justify-start gap-5 text-sm">
          <Link className="hover:underline underline-offset-4" href="/company">
            Company
          </Link>
          <Link className="hover:underline underline-offset-4" href="/founders">
            Founders
          </Link>
          <Link className="hover:underline underline-offset-4" href="/partners">
            Partners
          </Link>
          <Link className="hover:underline underline-offset-4" href="/services">
            Services
          </Link>
          <Link
            className="hover:underline underline-offset-4"
            href="/calculators"
          >
            Calculators
          </Link>
        </nav>

        {/* Socials */}
        <nav aria-label="Social media" className="flex items-center gap-3 sm:ml-auto">
          <Link
            href="https://www.linkedin.com/company/finiscope"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background/60 backdrop-blur text-muted-foreground transition-colors hover:text-foreground hover:bg-background"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="https://x.com/finiscope"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background/60 backdrop-blur text-muted-foreground transition-colors hover:text-foreground hover:bg-background"
          >
            <span className="sr-only">Twitter</span>
            <Twitter className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="https://www.instagram.com/finiscope"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background/60 backdrop-blur text-muted-foreground transition-colors hover:text-foreground hover:bg-background"
          >
            <span className="sr-only">Instagram</span>
            <Instagram className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="https://www.youtube.com/@finiscope"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background/60 backdrop-blur text-muted-foreground transition-colors hover:text-foreground hover:bg-background"
          >
            <span className="sr-only">YouTube</span>
            <Youtube className="h-4 w-4" aria-hidden="true" />
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground text-center sm:text-right">
          &copy; {new Date().getFullYear()} FiniScope. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
