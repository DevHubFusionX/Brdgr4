"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Cpu, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";

interface EcosystemTab {
  id: string;
  label: string;
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
    <section className="relative w-full bg-[#f6f8fb] py-16 sm:py-24 md:py-32 px-0 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* ─── Section Header ─────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-14 px-4 sm:px-0">
          <WordReveal
            as="h2"
            delay={0.15}
            stagger={0.05}
            className="text-2xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-[-0.025em] leading-[1.2]"
            text="One platform. Multiple ecosystems."
          />

          <WordReveal
            as="p"
            delay={0.35}
            stagger={0.03}
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-neutral-500 font-normal leading-relaxed"
            text="Trading carries our live focus, with SaaS, Fintech, and Creator networks sequenced next. Because commission models and participant types are configuration records, the engine never forks."
          />
        </div>

        {/* ─── Top Pill Switcher Tabs (Horizontal Swipeable on Mobile) ─────── */}
        <div className="w-full flex items-center justify-start sm:justify-center mb-6 sm:mb-12 overflow-x-auto no-scrollbar py-2 px-0">
          <div className="w-full min-w-max sm:w-auto sm:min-w-0 inline-flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-none sm:rounded-full bg-slate-200/60 border-y sm:border border-slate-300/60 shadow-[inset_0_1px_3px_rgba(0,0,0,0.04)] shrink-0">
            {ECOSYSTEMS.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative flex-1 sm:flex-initial px-3.5 sm:px-6 py-2.5 rounded-none sm:rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer text-center ${
                    isActive
                      ? "bg-[#0364FF] text-white shadow-md shadow-[#0364FF]/25 font-semibold"
                      : "text-neutral-600 hover:text-[#0364FF] hover:bg-white/60"
                  }`}
                >
                  <span className="flex items-center justify-center gap-1.5 sm:gap-2">
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

        {/* ─── Large Island Card Container (Brand Blue Showcase) ───────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full rounded-none sm:rounded-[36px] lg:rounded-[42px] bg-[#0364FF] bg-gradient-to-br from-[#0057ff] via-[#0364FF] to-[#0047df] border-y sm:border border-blue-400/40 shadow-[0_24px_64px_-12px_rgba(3,100,255,0.45),0_8px_24px_-4px_rgba(3,100,255,0.25)] px-5 py-8 sm:p-8 lg:p-12 overflow-hidden transition-all duration-300"
        >
          {/* Ambient Lighting Gradients inside card */}
          <div
            className="absolute top-0 left-0 w-[550px] h-[550px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.06)_40%,transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-[radial-gradient(circle_at_bottom_right,rgba(0,35,140,0.45)_0%,transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center"
            >
              {/* ─── Left Column: Descriptive Narrative & CTAs ───────────────── */}
              <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
                {/* Category Status Eyebrow */}
                <div className="mb-2 sm:mb-3">
                  <span className="text-xs sm:text-[13px] font-semibold text-blue-200/90 tracking-wide">
                    PRD §02 Architecture
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-[-0.03em] leading-[1.18]">
                  {activeTab.title}
                </h3>

                {/* Description */}
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-[15px] text-blue-100/90 font-normal leading-relaxed">
                  {activeTab.description}
                </p>

                {/* Specification Grid (2x2 Glass Cards) */}
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {activeTab.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-3 sm:p-3.5 rounded-2xl bg-white/10 hover:bg-white/[0.14] border border-white/15 backdrop-blur-md transition-colors flex flex-col"
                    >
                      <span className="text-[10px] font-semibold text-blue-200 uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-xs sm:text-[13px] font-semibold text-white mt-1 leading-snug">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Feature Bullets with White Check Badges */}
                <ul className="mt-5 sm:mt-6 space-y-2.5">
                  {activeTab.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#0364FF] shrink-0 shadow-xs">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-white/95 font-normal">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  {/* Primary Button with Icon Badge */}
                  <Link
                    href={activeTab.ctaPrimary.href}
                    className="inline-flex items-center justify-between sm:justify-center gap-3 px-5 sm:px-6 py-3 rounded-full bg-white hover:bg-blue-50 text-[#0f172a] text-xs sm:text-sm font-bold tracking-tight shadow-lg hover:shadow-xl active:scale-[0.98] transition-all cursor-pointer group"
                  >
                    <span>{activeTab.ctaPrimary.label}</span>
                    <span className="w-7 h-7 rounded-full bg-[#0364FF] text-white flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#0052FF] transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>

                  {/* Secondary Outline Pill Button */}
                  <Link
                    href={activeTab.ctaSecondary.href}
                    className="inline-flex items-center justify-center gap-1.5 px-5 sm:px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-white/40 text-xs sm:text-sm font-semibold tracking-tight backdrop-blur-md active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>{activeTab.ctaSecondary.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-blue-200" />
                  </Link>
                </div>
              </div>

              {/* ─── Right Column: High-Fidelity UI Showcase Window Card (Desktop only) ─── */}
              <div className="hidden lg:block lg:col-span-6">
                <div className="rounded-2xl sm:rounded-[28px] bg-white shadow-[0_25px_50px_-12px_rgba(0,10,60,0.35)] border border-white/40 overflow-hidden">
                  {/* Browser / Console Chrome Bar */}
                  <div className="px-4 py-3 bg-white border-b border-slate-200/80 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    </div>

                    <div className="px-3 sm:px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-[10px] sm:text-[11px] font-mono text-slate-600 truncate max-w-[180px] sm:max-w-[280px] text-center shadow-2xs">
                      https://{activeTab.mockup.url}
                    </div>

                    <div className="flex items-center text-[9px] font-bold text-slate-700 bg-slate-100 border border-slate-200/90 px-2.5 py-1 rounded-md tracking-wider shrink-0">
                      <span>SCHEMA ACTIVE</span>
                    </div>
                  </div>

                  {/* Console Interior Workspace */}
                  <div className="p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-3.5 font-sans select-none bg-[#f8fafc]">
                    {/* Card 1: Active Programme Header */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-[#0364FF] flex items-center justify-center shrink-0">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                            {activeTab.mockup.programTitle}
                          </span>
                          <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">
                            {activeTab.mockup.niche}
                          </span>
                        </div>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono font-medium text-slate-700 bg-slate-100/90 px-2.5 py-1 rounded-lg border border-slate-200/70 shrink-0 self-start sm:self-auto">
                        {activeTab.mockup.modelType}
                      </span>
                    </div>

                    {/* Card 2: Connected Platform Adapters */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex flex-col gap-2.5">
                      <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        <span>Live Platform Gateway Adapters</span>
                        <span className="text-slate-900 font-bold tracking-wider">3 CONNECTED</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-0.5">
                        {activeTab.mockup.platforms.map((platform) => (
                          <div
                            key={platform}
                            className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2 text-[10px] sm:text-[11px] font-medium text-slate-700 truncate"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                            <span className="truncate">{platform}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card 3: Live S2S Postback Inspector */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex flex-col gap-2.5">
                      <div className="flex items-center justify-between text-[10px]">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-slate-500 text-[11px] font-bold">&gt;_</span>
                          <span className="font-bold text-slate-800 uppercase tracking-wider text-[9px] sm:text-[10px]">
                            S2S Attribution Trace
                          </span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/80">
                          {activeTab.mockup.postbackStatus}
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[10px] sm:text-[11px] font-mono text-slate-600 truncate">
                        {activeTab.mockup.trackingDomain}
                      </div>
                    </div>

                    {/* Card 4: Double-Entry Ledger Stamp */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0f1218] text-white flex flex-col gap-2 shadow-sm overflow-hidden">
                      <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-400">
                        <span>DOUBLE-ENTRY USD LEDGER (MNY-01)</span>
                        <span className="text-emerald-400 font-bold tracking-wide">BALANCED</span>
                      </div>

                      <div className="space-y-1 text-[10px] sm:text-[11px] font-mono text-slate-200 overflow-x-auto no-scrollbar">
                        <div className="truncate text-slate-300">{activeTab.mockup.ledgerEntry.dr}</div>
                        <div className="text-emerald-400 font-semibold truncate">
                          {activeTab.mockup.ledgerEntry.crPartner}
                        </div>
                        <div className="text-slate-400 truncate">{activeTab.mockup.ledgerEntry.crPlatform}</div>
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
