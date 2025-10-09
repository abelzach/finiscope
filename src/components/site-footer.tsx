import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-4 sm:py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-6 text-sm sm:text-base">
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
          <Link className="hover:underline underline-offset-4" href="/calculators">
            Calculators
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground text-center sm:text-right">
          &copy; {new Date().getFullYear()} FiniScope. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
