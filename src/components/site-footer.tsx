import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold">FiniScope</div>
          <div className="text-sm text-muted-foreground">Banking • Finance • Mortgages • Approvals • Scale</div>
        </div>
        <nav className="flex gap-5 text-sm">
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
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} FiniScope. All rights reserved.</p>
      </div>
    </footer>
  )
}
