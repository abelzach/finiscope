import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CompanyPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-balance">FiniScope Company Profile</h1>
        <p className="text-muted-foreground mt-4 text-pretty">
          We help corporates and entrepreneurs navigate banking, finance, mortgage structuring, approvals, and growth.
          Our model blends advisory with execution to deliver tangible, scalable outcomes.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          { title: "Banking & Finance", desc: "Structuring, capital raising, refinancing." },
          { title: "Mortgages", desc: "Home, commercial, bridge, and construction finance." },
          { title: "Approvals", desc: "Document approval and regulatory clearances." },
        ].map((it) => (
          <Card key={it.title}>
            <CardHeader>
              <CardTitle>{it.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{it.desc}</CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Enable access to right-sized capital and approvals faster, with lower risk, and sustainable growth pathways
            for each client we serve.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Values</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Integrity, craftsmanship, clarity, speed, and long-term partnerships.
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
