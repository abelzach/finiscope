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
        <h2 className="text-2xl md:text-3xl font-semibold text-balance relative inline-block text-blue-900">
          FAQs
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-800 to-red-600"></span>
        </h2>
        <p className="text-slate-600 mt-2">
          Answers to common questions about our banking, finance, and approval services.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full border-t border-slate-200">
        {faqs.map((f, i) => (
          <AccordionItem 
            key={f.q} 
            value={`item-${i + 1}`} 
            className="border-b border-slate-200"
          >
            <AccordionTrigger 
              className="text-left font-medium text-blue-900 transition-colors data-[state=open]:text-red-600 hover:text-red-600"
            >
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-slate-700">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
