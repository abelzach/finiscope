export type Service = {
  slug: string
  title: string
  category: "Banks" | "Finances" | "Mortgages" | "Document Approval" | "Approval Clearances" | "Scaling Companies"
  summary: string
  details: string[]
  features: { title: string; desc: string }[]
}

export const services: Service[] = [
  {
    slug: "banking-relationships",
    title: "Banking Relationships & Treasury",
    category: "Banks",
    summary: "Optimize your banking stack across accounts, treasury workflows, cash management, and credit lines.",
    details: [
      "Map cash cycles and payment rails for efficiency and risk reduction.",
      "Run bank RFPs with clear SLAs and economics.",
      "Set up credit lines and day-1 operational readiness.",
    ],
    features: [
      { title: "Treasury Design", desc: "Collections, payouts, pooling, and liquidity ladders." },
      { title: "Credit Lines", desc: "WC, OD, BG, LC and cross-border structures." },
      { title: "Bank RFPs", desc: "Competitive bids with clear service KPIs and pricing." },
    ],
  },
  {
    slug: "corporate-finance",
    title: "Corporate Finance & Refinancing",
    category: "Finances",
    summary: "Raise or refinance debt with optimal pricing and covenant packages aligned to your cash flows.",
    details: [
      "Model cash flows and debt service under scenarios.",
      "Positioning and lender shortlists with warm access.",
      "Negotiate covenants, pricing, security and documentation.",
    ],
    features: [
      { title: "Debt Advisory", desc: "Term loans, NCDs, mezz, and asset-backed." },
      { title: "Refinancing", desc: "Restructure for lower cost and better terms." },
      { title: "Scenario Modeling", desc: "Downside and growth cases for resilience." },
    ],
  },
  {
    slug: "mortgage-structuring",
    title: "Mortgage Structuring",
    category: "Mortgages",
    summary: "End-to-end advisory from pre-approval to disbursal for home and commercial mortgages.",
    details: [
      "Pre-qualification and lender matching.",
      "Valuation, legal diligence, and documentation.",
      "Rate negotiation and disbursal coordination.",
    ],
    features: [
      { title: "Home & Commercial", desc: "Fixed, floating, bridge, and construction finance." },
      { title: "Docs & Diligence", desc: "Clear, checklist-driven processes." },
      { title: "Fast Approvals", desc: "Optimized information package and follow-through." },
    ],
  },
  {
    slug: "document-approvals",
    title: "Document Approvals Desk",
    category: "Document Approval",
    summary: "Centralized approvals for KYC, compliance, legal, and operational documents with tracking.",
    details: [
      "Checklist creation by approval type.",
      "Stakeholder workflows and reminders.",
      "Live tracking and exception handling.",
    ],
    features: [
      { title: "KYC & Compliance", desc: "Fast-track bank-ready packages." },
      { title: "Workflow Engine", desc: "Comments, SLAs, and ownership." },
      { title: "Audit Trail", desc: "Time-stamped activity and approvals." },
    ],
  },
  {
    slug: "clearances",
    title: "Approval Clearances",
    category: "Approval Clearances",
    summary: "Navigate regulatory and lender approvals with structured workplans and proactive issue resolution.",
    details: [
      "Identify approval path and stakeholders early.",
      "Prepare submissions tailored to reviewers.",
      "Manage queries to closure with documented responses.",
    ],
    features: [
      { title: "Regulatory Pathways", desc: "Mapped timelines and dependencies." },
      { title: "Complete Dossiers", desc: "Reviewer-first documentation." },
      { title: "Issue Resolution", desc: "Anticipate and address blockers." },
    ],
  },
  {
    slug: "scale-up",
    title: "Scale-Up Programs",
    category: "Scaling Companies",
    summary: "Operating playbooks to scale responsibly across finance ops, approvals, and banking infrastructure.",
    details: [
      "Design finance ops with controls for scale.",
      "Right-size banking and credit for growth.",
      "Set up approval systems that move with speed.",
    ],
    features: [
      { title: "Ops Playbooks", desc: "Practical, tested templates." },
      { title: "Banking for Scale", desc: "From startup to enterprise readiness." },
      { title: "Compliance at Speed", desc: "Ship fast without breaking controls." },
    ],
  },
]

export const servicesMap = new Map(services.map((s) => [s.slug, s]))

export const allCategories = Array.from(new Set(services.map((s) => s.category)))
