export interface NavItem {
  title: string;
  description: string;
  href: string;
  badge?: string;
  isLinkOnly?: boolean;
  iconName?: string;
}

export interface NavSection {
  category: string;
  items: NavItem[];
}

export const PRODUCTS_SECTIONS: NavSection[] = [
  {
    category: "Platform Core",
    items: [
      {
        title: "Matching Engine",
        description: "Automate candidate ranking and human-approved partner pairings",
        href: "/#engine",
        iconName: "Zap",
      },
      {
        title: "Vetting & Compliance",
        description: "Multi-tier identity, KYC, and historical performance audits",
        href: "/#vetting",
        iconName: "ShieldCheck",
      },
      {
        title: "Contracting Suite",
        description: "Standardized bilateral agreements and e-signature execution",
        href: "/#contracts",
        iconName: "FileText",
      },
      {
        title: "Tracking & Attribution",
        description: "Precision conversion telemetry with fraud-gated screening",
        href: "/#tracking",
        iconName: "Activity",
      },
      {
        title: "BYO Partner Rails",
        description: "Onboard your existing affiliate roster onto Brdgr infrastructure",
        href: "/#byo",
        iconName: "Share2",
      },
    ],
  },
  {
    category: "Financial Ledger & Scale",
    items: [
      {
        title: "Double-Entry Ledger",
        description: "Transparent USD balance accounting with zero reconciliation spreadsheets",
        href: "/#ledger",
        iconName: "Layers",
      },
      {
        title: "Automated Payouts",
        description: "Scheduled monthly disbursements backed by verified human approval",
        href: "/#payouts",
        iconName: "CreditCard",
      },
      {
        title: "Fraud Gate Defense",
        description: "Hold periods, device fingerprinting, and non-circumvention detection",
        href: "/#fraud-gate",
        iconName: "Lock",
      },
      {
        title: "Growth Partner Academy",
        description: "Compliance training, audience playbook templates, and certifications",
        href: "/#academy",
        badge: "Coming soon",
        iconName: "GraduationCap",
      },
      {
        title: "Global Treasury Rails",
        description: "Multi-currency conversions and global bank settlement lines",
        href: "/#treasury",
        badge: "Phase 3",
        iconName: "Globe",
      },
    ],
  },
  {
    category: "Portals & Resources",
    items: [
      {
        title: "Client Portal",
        description: "Dashboard for firms to review deals & payouts",
        href: "/client",
        badge: "Live",
        iconName: "Building2",
      },
      {
        title: "Partner Portal",
        description: "Workspace for vetted affiliates to track earnings",
        href: "/partner",
        badge: "Live",
        iconName: "Users",
      },
      {
        title: "Pricing & Plans",
        description: "Transparent platform fees & tiered volume options",
        href: "/#pricing",
        iconName: "Target",
      },
      {
        title: "Supported Ecosystems",
        description: "Trading, prop firms, SaaS, and FinTech verticals",
        href: "/#ecosystems",
        iconName: "Compass",
      },
      {
        title: "Security & Auditing",
        description: "SOC2 compliance, non-circumvention, and data privacy",
        href: "/#security",
        iconName: "ShieldCheck",
      },
    ],
  },
];

export const SOLUTIONS_SECTIONS: NavSection[] = [
  {
    category: "By Participant",
    items: [
      {
        title: "Prop Trading Firms",
        description: "Acquire challenge buyers and funded traders without staffing an internal affiliate team",
        href: "/client",
        iconName: "TrendingUp",
      },
      {
        title: "Forex & CFD Brokers",
        description: "Unify introducing brokers, regional networks, and multi-tier commission models",
        href: "/client",
        iconName: "Building2",
      },
      {
        title: "Growth Partners",
        description: "Connect with vetted brands, access clear contracts, and receive scheduled USD payouts",
        href: "/partner",
        iconName: "Users",
      },
    ],
  },
  {
    category: "Ecosystems",
    items: [
      {
        title: "Trading & Capital Markets",
        description: "Live ecosystem for prop challenges, broker accounts, and trading communities",
        href: "/#ecosystems",
        badge: "Active",
        iconName: "BarChart3",
      },
      {
        title: "SaaS & Cloud Infrastructure",
        description: "Recurring ARR partnerships, free-trial conversions, and seat upgrades",
        href: "/#ecosystems",
        badge: "Next",
        iconName: "Cloud",
      },
      {
        title: "Fintech & Banking",
        description: "Regulated customer acquisition rails with strict auditability",
        href: "/#ecosystems",
        badge: "Roadmap",
        iconName: "Landmark",
      },
    ],
  },
  {
    category: "Commission Frameworks",
    items: [
      {
        title: "Cost Per Acquisition (CPA)",
        description: "Predictable bounty per verified funded challenge or account",
        href: "/#pricing",
        iconName: "Target",
      },
      {
        title: "Percentage of Sale",
        description: "Performance revenue share directly aligned with sales volume",
        href: "/#pricing",
        iconName: "Percent",
      },
      {
        title: "Tiered Volume Escalators",
        description: "Dynamic bonuses that escalate as volume milestones are met",
        href: "/#pricing",
        iconName: "BarChart3",
      },
      {
        title: "Bring Your Own Network",
        description: "Migrate existing affiliates cleanly with bilateral contracts",
        href: "/#onboard",
        iconName: "Share2",
      },
      {
        title: "Verified Case Studies",
        description: "Real ROAS metrics and verified disbursement records",
        href: "/#case-studies",
        iconName: "Award",
      },
    ],
  },
];
