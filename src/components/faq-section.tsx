import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      q: "What industries do you support?",
      a: "We support corporates and entrepreneurs across banking, financial services, real estate, and growth-stage ventures.",
    },
    {
      q: "Do you help with regulatory approvals?",
      a: "Yes. We navigate document approvals and clearances with banks, NBFIs, and relevant authorities end-to-end.",
    },
    {
      q: "Can you assist with scaling strategies?",
      a: "We structure business facilities, optimize capital, and connect partners for sustainable scale-up.",
    },
    {
      q: "Do you offer custom engagements?",
      a: "Absolutely. We tailor engagements to the stage, sector, and needs of each client for maximum efficiency.",
    },
  ]
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">FAQs</h2>
        <p className="text-muted-foreground mt-2">
          Answers to common questions about our banking, finance, and approval services.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i + 1}`}>
            <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
