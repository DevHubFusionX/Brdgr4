"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Cpu, Terminal, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";
import UiverseHeroButton from "@/components/ui/UiverseHeroButton";

interface EcosystemTab {
  id: string;
  label: string;
  statusBadge: string;
  statusType: "live" | "roadmap";
  title: string;
  description: string;
  specs: { label: string; value: string }[];
  bullets: string[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  mockup: {
    url: string;
    programTitle: string;
    niche: string;
    modelType: string;
    trackingDomain: string;
    platforms: string[];
    ledgerEntry: { dr: string; crPartner: string; crPlatform: string };
    postbackStatus: string;
  };
}

const ECOSYSTEMS: EcosystemTab[] = [
  {
    id: "trading",
    label: "Prop Trading & Brokers",
    statusBadge: "Live Focus · Phase 1",
    statusType: "live",
    title: "Trading Ecosystem Infrastructure",
    description:
      "Purpose-built for proprietary trading firms, forex, and CFD brokerages. Manage high-volume challenge sales, funded accounts, and lot-based volumes without manual spreadsheets or attribution disputes.",
    specs: [
      { label: "Participants", value: "Prop Firms, FX/CFD Brokers & Traders" },
      { label: "Commission Rails", value: "Fixed CPA ($150–$300), % of Sale, Per-Lot" },
      { label: "Integrations", value: "cTrader, MetaTrader 4/5, DXtrade, TradeLocker" },
      { label: "Settlement", value: "Double-entry USD Ledger · 5th Biz Day Payout" },
    ],
    bullets: [
      "Server-to-server (S2S) signed postbacks immune to ad blockers",
      "Automated fraud gate screening challenge velocity and duplicate accounts",
      "Itemised partner statements with running USD balances",
    ],
    ctaPrimary: { label: "Explore Trading Rails", href: "/sign-up" },
    ctaSecondary: { label: "View Architecture Docs", href: "/client" },
    mockup: {
      url: "brdgr.io/ecosystems/trading/config",
      programTitle: "Alpha Tier Challenge Programme",
      niche: "Proprietary Trading (Evaluations & Funded)",
      modelType: "Fixed CPA ($175) + 10% Trailing",
      trackingDomain: "trk.brdgr.io/eval/postback_v1",
      platforms: ["cTrader Engine", "MT5 Server Bridge", "DXtrade Gateway"],
      ledgerEntry: {
        dr: "DR: Client Escrow Vault (-$175.00)",
        crPartner: "CR: Partner #842 Payable (+$157.50)",
        crPlatform: "CR: Brdgr Platform Share (+$17.50)",
      },
      postbackStatus: "200 OK · Idempotency Confirmed",
    },
  },
  {
    id: "saas",
    label: "SaaS & Subscriptions",
    statusBadge: "Phase 2 Roadmap",
    statusType: "roadmap",
    title: "Recurring Software & Subscription Rails",
    description:
      "Engineered for B2B and consumer SaaS businesses. Attribute recurring monthly subscriptions, annual contracts, and expansion revenue with automated renewal tracking and retention safeguards.",
    specs: [
      { label: "Participants", value: "B2B SaaS, Analytics Tools, FinTech Software" },
      { label: "Commission Rails", value: "Recurring RevShare (15–30%), First-Month Bounty" },
      { label: "Integrations", value: "Stripe Webhooks, Chargebee, Paddle, Recurly" },
      { label: "Settlement", value: "USD Ledger · Automated Renewal Reconciliation" },
    ],
    bullets: [
      "Dynamic MRR tracking across monthly, quarterly, and annual subscription cycles",
      "Automated churn detection and refund clawback reconciliation on the ledger",
      "Multi-seat organization accounts with role-based member permissions",
    ],
    ctaPrimary: { label: "Request SaaS Brief", href: "/sign-up" },
    ctaSecondary: { label: "Review API Webhooks", href: "/client" },
    mockup: {
      url: "brdgr.io/ecosystems/saas/config",
      programTitle: "Enterprise Data Platform Affiliate",
      niche: "B2B Cloud Analytics & DevTools",
      modelType: "25% Recurring MRR (12 Months)",
      trackingDomain: "trk.brdgr.io/sub/webhook_v2",
      platforms: ["Stripe Billing", "Chargebee Engine", "Custom S2S API"],
      ledgerEntry: {
        dr: "DR: SaaS Merchant Escrow (-$240.00)",
        crPartner: "CR: Partner #419 Payable (+$216.00)",
        crPlatform: "CR: Brdgr Platform Share (+$24.00)",
      },
      postbackStatus: "200 OK · Subscription Verified",
    },
  },
  {
    id: "fintech",
    label: "Fintech & Banking",
    statusBadge: "Phase 2 Roadmap",
    statusType: "roadmap",
    title: "Regulated Fintech & Institutional Gateway",
    description:
      "Strict compliance architecture for payment services, neobanks, and multi-currency wallets. Enforce jurisdictional geo-fencing, KYC verification gating, and immutable financial audit trails.",
    specs: [
      { label: "Participants", value: "Neobanks, Multi-Currency Wallets, Remittance" },
      { label: "Commission Rails", value: "First-Time Deposit (FTD), Tiered Volume Bounties" },
      { label: "Integrations", value: "Core Banking APIs, Card Gateways, KYB Modules" },
      { label: "Settlement", value: "Multi-Currency Schema (USD Launch) · Bank Wires" },
    ],
    bullets: [
      "Rigorous pre-onboarding compliance checks and jurisdiction-based screening",
      "Zero-float integer minor unit ledger preventing rounding errors",
      "Read-only retention compliance matching international financial standards",
    ],
    ctaPrimary: { label: "Request Fintech Preview", href: "/sign-up" },
    ctaSecondary: { label: "Compliance Brief", href: "/client" },
    mockup: {
      url: "brdgr.io/ecosystems/fintech/config",
      programTitle: "Global Payment Rails Referral",
      niche: "Multi-Currency Institutional Accounts",
      modelType: "FTD Bounty ($250) + Tiered Volume",
      trackingDomain: "trk.brdgr.io/fin/postback_v1",
      platforms: ["Core Ledger API", "SWIFT/SEPA Gateway", "KYC Verification Bus"],
      ledgerEntry: {
        dr: "DR: Regulated Reserve (-$250.00)",
        crPartner: "CR: Partner #604 Payable (+$225.00)",
        crPlatform: "CR: Brdgr Platform Share (+$25.00)",
      },
      postbackStatus: "200 OK · Compliance Stamp Verified",
    },
  },
  {
    id: "creator",
    label: "Creator & Performance",
    statusBadge: "Phase 3 Roadmap",
    statusType: "roadmap",
    title: "Performance Creator & Media Networks",
    description:
      "Connect certified trading educators, Discord community operators, and financial media publishers with verified brand briefs. Protect relationships with in-platform non-circumvention rules.",
    specs: [
      { label: "Participants", value: "YouTube Analysts, Streamers, Alpha Communities" },
      { label: "Commission Rails", value: "Exclusive CPA, Promo Code Attribution, Hybrid" },
      { label: "Integrations", value: "Promo-Code Engine, Discord Bot, S2S Links" },
      { label: "Settlement", value: "Guaranteed Monthly USD Manifest · Direct Wire" },
    ],
    bullets: [
      "Promo code attribution for audio, video, and social channels without link drops",
      "Contact details gated until bilateral digital contract execution",
      "Growth Partner Academy certification to level up partner compliance",
    ],
    ctaPrimary: { label: "Join as Creator", href: "/partner" },
    ctaSecondary: { label: "View Academy Specs", href: "/partner" },
    mockup: {
      url: "brdgr.io/ecosystems/creator/config",
      programTitle: "Pro Trading Streamer Alliance",
      niche: "Financial Media & YouTube Channels",
      modelType: "Promo Code + $120 CPA Hybrid",
      trackingDomain: "trk.brdgr.io/code/attrib_v1",
      platforms: ["YouTube Code Attribution", "Discord Webhook", "Telegram Tracking"],
      ledgerEntry: {
        dr: "DR: Brand Sponsor Vault (-$120.00)",
        crPartner: "CR: Creator #108 Payable (+$108.00)",
        crPlatform: "CR: Brdgr Platform Share (+$12.00)",
      },
      postbackStatus: "200 OK · Offline Code Matched",
    },
  },
];

export default function EcosystemSection() {
  const [activeTabId, setActiveTabId] = useState<string>("trading");

  const activeTab = ECOSYSTEMS.find((tab) => tab.id === activeTabId) || ECOSYSTEMS[0];

  return (
    <section className="relative w-full bg-[#f6f8fb] py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* ─── Section Header ─────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-xs sm:text-sm font-medium text-slate-700 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            <span>Configurable Across Industries</span>
          </div>

          <WordReveal
            as="h2"
            delay={0.15}
            stagger={0.05}
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-[-0.025em] leading-[1.18]"
            text="One platform. Multiple ecosystems."
          />

          <WordReveal
            as="p"
            delay={0.35}
            stagger={0.03}
            className="mt-4 text-base sm:text-lg text-neutral-500 font-normal leading-relaxed"
            text="Trading carries our live focus, with SaaS, Fintech, and Creator networks sequenced next. Because commission models and participant types are configuration records, the engine never forks."
          />
        </div>

        {/* ─── Top Pill Switcher Tabs (Inspired by Reference Image) ───────── */}
        <div className="flex items-center justify-center mb-8 sm:mb-12 overflow-x-auto no-scrollbar py-2">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-slate-200/60 border border-slate-300/60 shadow-[inset_0_1px_3px_rgba(0,0,0,0.04)]">
            {ECOSYSTEMS.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#0364FF] text-white shadow-md shadow-[#0364FF]/25 font-semibold"
                      : "text-neutral-600 hover:text-[#0364FF] hover:bg-white/60"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {tab.label}
                    {tab.statusType === "live" && (
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-white" : "bg-emerald-500"}`} />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── Large Island Card Container (Layout Inspired by Reference) ──── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-10 lg:p-12 transition-all duration-300"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
            {/* ─── Left Column: Descriptive Narrative & CTAs ───────────────── */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Category Status Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-neutral-800 uppercase px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
                  {activeTab.statusBadge}
                </span>
                <span className="text-xs font-medium text-slate-400">PRD §02 Architecture</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-neutral-900 tracking-[-0.025em] leading-[1.2]">
                {activeTab.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                {activeTab.description}
              </p>

              {/* Specification Grid */}
              <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeTab.specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col">
                    <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-[13px] font-medium text-neutral-800 mt-0.5">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Feature Bullets */}
              <ul className="mt-6 space-y-2.5">
                {activeTab.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-neutral-800 shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-neutral-700 font-normal">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons (Primary Dark Pill + Secondary Subtle Pill) */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <UiverseHeroButton
                  href={activeTab.ctaPrimary.href}
                  text={activeTab.ctaPrimary.label}
                  size="sm"
                />

                <Link
                  href={activeTab.ctaSecondary.href}
                  className="px-5 py-3 rounded-full bg-white hover:bg-blue-50/50 text-neutral-700 hover:text-[#0364FF] border border-slate-200/90 hover:border-blue-200 text-xs sm:text-sm font-semibold tracking-tight transition-all flex items-center gap-1.5"
                >
                  <span>{activeTab.ctaSecondary.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#0364FF]" />
                </Link>
              </div>
            </div>

            {/* ─── Right Column: High-Fidelity UI Showcase Card ────────────── */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl sm:rounded-3xl bg-[#fbfbfd] border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.04)] overflow-hidden">
                {/* Browser / Console Chrome Bar */}
                <div className="px-4 py-3 bg-white border-b border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  </div>

                  <div className="px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-mono text-neutral-500 truncate max-w-[240px]">
                    https://{activeTab.mockup.url}
                  </div>

                  <div className="flex items-center gap-1 text-[9px] font-bold text-neutral-600 bg-slate-100 px-2 py-0.5 rounded">
                    <span>SCHEMA ACTIVE</span>
                  </div>
                </div>

                {/* Console Interior Workspace */}
                <div className="p-5 sm:p-6 space-y-4 font-sans select-none">
                  {/* Card 1: Active Programme Header */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-neutral-800 shrink-0">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight">
                          {activeTab.mockup.programTitle}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-medium">
                          {activeTab.mockup.niche}
                        </span>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-semibold text-neutral-800 bg-slate-100 px-2 py-1 rounded-md border border-slate-200 shrink-0">
                      {activeTab.mockup.modelType}
                    </span>
                  </div>

                  {/* Card 2: Connected Platform Adapters */}
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">
                      <span>Live Platform Gateway Adapters</span>
                      <span className="text-neutral-900 font-bold">3 CONNECTED</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-1">
                      {activeTab.mockup.platforms.map((platform) => (
                        <div
                          key={platform}
                          className="p-2 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center gap-1.5 text-[9px] font-medium text-neutral-700 truncate"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span className="truncate">{platform}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card 3: Live S2S Postback Inspector */}
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-1.5">
                        <Terminal className="w-3 h-3 text-neutral-700" />
                        <span className="font-bold text-neutral-800 uppercase tracking-wider text-[9px]">
                          S2S Attribution Trace
                        </span>
                      </div>
                      <span className="text-[9px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/80">
                        {activeTab.mockup.postbackStatus}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-mono text-neutral-600 truncate">
                      {activeTab.mockup.trackingDomain}
                    </div>
                  </div>

                  {/* Card 4: Double-Entry Ledger Stamp (PRD §15) */}
                  <div className="p-3.5 rounded-2xl bg-neutral-900 text-white flex flex-col gap-1.5 shadow-sm">
                    <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                      <span>DOUBLE-ENTRY USD LEDGER (MNY-01)</span>
                      <span className="text-emerald-400 font-semibold">BALANCED</span>
                    </div>

                    <div className="space-y-0.5 text-[10px] font-mono text-slate-200">
                      <div>{activeTab.mockup.ledgerEntry.dr}</div>
                      <div className="text-emerald-400 font-medium">
                        {activeTab.mockup.ledgerEntry.crPartner}
                      </div>
                      <div className="text-slate-400">{activeTab.mockup.ledgerEntry.crPlatform}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
