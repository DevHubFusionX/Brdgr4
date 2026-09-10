"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Check, Cpu, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowFlight from "@/components/ui/ArrowFlight";
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
    title: "Prop Trading & Brokers",
    description:
      "Built for prop firms, brokers and growth partners. Handle high volumes of challenge sales, funded account, and lot-based volumes without manual spreadsheets or payment disputes.",
    specs: [
      { label: "WHO IT’S FOR", value: "Prop firms, CFD brokers and growth partners" },
      { label: "COMMISSION MODELS", value: "Fixed CPA, % of Sales, Per-Lot" },
      { label: "PAYMENTS", value: "Secure payment." },
    ],
    bullets: [
      "Signed agreements stop ad fraud and fake signups",
      "Automatic fraud checks to catch unusual activity and duplicate accounts",
      "Clear partner reports with live ledger balances",
    ],
    ctaPrimary: { label: "Explore Trading Solutions", href: "/sign-up" },
    ctaSecondary: { label: "View Architecture Docs", href: "/client" },
    mockup: {
      url: "brdgr.io/ecosystems/trading/config",
      programTitle: "Alpha Tier Challenge Model",
      niche: "Proprietary Trading [Evaluations & Funded]",
      modelType: "Fixed CPA + % Trailing",
      trackingDomain: "trk.brdgr.io/eval/postback_v1",
      platforms: ["cTrader Engine", "MT5 Server Bridge", "DXtrade Gateway"],
      ledgerEntry: {
        dr: "Dr: Company Payment (-$175.00)",
        crPartner: "Cr: Partner #842 Payout (+$157.50)",
        crPlatform: "Cr: BRDGR Platform Fee (+$17.50)",
      },
      postbackStatus: "Working Properly",
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
  const [comingSoonTab, setComingSoonTab] = useState<{ id: string; label: string } | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleTabClick = (tab: EcosystemTab) => {
    if (tab.id === "trading") {
      setActiveTabId("trading");
      setComingSoonTab(null);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    } else {
      // Blurred roadmap tab clicked - show "Coming Soon" notification
      setComingSoonTab({ id: tab.id, label: tab.label });
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setComingSoonTab(null);
      }, 2800);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const activeTab = ECOSYSTEMS.find((tab) => tab.id === activeTabId) || ECOSYSTEMS[0];

  return (
    <section className="relative w-full bg-[#f6f8fb] py-16 sm:py-24 md:py-32 px-0 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* ─── Section Header ─────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 px-4 sm:px-0 relative z-10">
          <WordReveal
            as="h2"
            delay={0.15}
            stagger={0.05}
            className="text-2xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-[-0.025em] leading-[1.2]"
            text="One Infrastructure. Every Partnership."
          />

          <WordReveal
            as="p"
            delay={0.35}
            stagger={0.03}
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-neutral-500 font-normal leading-relaxed"
            text="Trading is where we are starting. BRDGR is built to support any performance-driven partnership model with the flexibility to adapt as new opportunities emerge."
          />
        </div>

        {/* ─── Top Pill Switcher Tabs (Horizontal Swipeable on Mobile) ─────── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex items-center justify-start sm:justify-center mb-6 sm:mb-12 overflow-x-auto sm:overflow-visible no-scrollbar pt-12 sm:pt-8 pb-3 px-2 sm:px-0 relative z-30"
        >
          <div className="w-full min-w-max sm:w-auto sm:min-w-0 inline-flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-none sm:rounded-full bg-slate-200/60 border-y sm:border border-slate-300/60 shadow-[inset_0_1px_3px_rgba(0,0,0,0.04)] shrink-0 relative">
            {ECOSYSTEMS.map((tab) => {
              const isActive = tab.id === activeTabId;
              const isBlurred = tab.id !== "trading";
              const isComingSoonActive = comingSoonTab?.id === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabClick(tab)}
                  title={isBlurred ? `${tab.label} (Coming Soon)` : tab.label}
                  className={`relative flex-1 sm:flex-initial px-3.5 sm:px-6 py-2.5 rounded-none sm:rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap text-center cursor-pointer select-none ${
                    isActive
                      ? "bg-[#0364FF] text-white shadow-md shadow-[#0364FF]/25 font-semibold"
                      : isBlurred
                      ? "text-neutral-500 active:scale-95"
                      : "text-neutral-600 hover:text-[#0364FF] hover:bg-white/60"
                  }`}
                >
                  {/* Single Clean Tooltip in Grey with Black Text - Sharp & Unblurred */}
                  <AnimatePresence>
                    {isComingSoonActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.9 }}
                        transition={{ duration: 0.18 }}
                        className="absolute -top-9 sm:-top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-200 border border-slate-300 shadow-md shadow-slate-400/25 text-neutral-900 text-xs font-semibold tracking-tight flex items-center gap-1.5 z-50 whitespace-nowrap pointer-events-none"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                        <span>Coming Soon</span>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-200 rotate-45 border-r border-b border-slate-300" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Button Label: Only the tab text gets blurred */}
                  <span
                    className={`flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-200 ${
                      isBlurred ? "blur-[2.5px] opacity-40 hover:opacity-80 hover:blur-[1px]" : ""
                    }`}
                  >
                    {tab.label}
                    {tab.statusType === "live" && (
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-white" : "bg-emerald-500"}`} />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ─── Large Island Card Container (Brand Blue Showcase) ───────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center"
            >
              {/* ─── Left Column: Descriptive Narrative & CTAs ───────────────── */}
              <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
                {/* Category Status Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="mb-2 sm:mb-3 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
                  <span className="text-xs sm:text-[13px] font-semibold text-blue-200/90 tracking-wide uppercase">
                    Trading Infrastructure
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-[-0.03em] leading-[1.18]"
                >
                  {activeTab.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-[15px] text-blue-100/90 font-normal leading-relaxed"
                >
                  {activeTab.description}
                </motion.p>

                {/* Specification Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3"
                >
                  {activeTab.specs.map((spec, idx) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.26 + idx * 0.06 }}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className="p-3 sm:p-3.5 rounded-2xl bg-white/10 hover:bg-white/[0.14] border border-white/15 backdrop-blur-md transition-colors flex flex-col cursor-default"
                    >
                      <span className="text-[10px] font-semibold text-blue-200 uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-xs sm:text-[13px] font-semibold text-white mt-1 leading-snug">
                        {spec.value}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Feature Bullets with White Check Badges */}
                <ul className="mt-5 sm:mt-6 space-y-2.5">
                  {activeTab.bullets.map((bullet, idx) => (
                    <motion.li
                      key={bullet}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.32 + idx * 0.07 }}
                      className="flex items-center gap-2.5"
                    >
                      <motion.div
                        initial={{ scale: 0.6 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.35 + idx * 0.07 }}
                        className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#0364FF] shrink-0 shadow-xs"
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </motion.div>
                      <span className="text-xs sm:text-sm text-white/95 font-normal">
                        {bullet}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block"
                  >
                    <Link
                      href={activeTab.ctaPrimary.href}
                      className="btn-3d-secondary group inline-flex items-center justify-between sm:justify-center gap-3 px-6 py-3 text-xs sm:text-sm font-bold tracking-tight text-[#0f172a]"
                    >
                      <span>{activeTab.ctaPrimary.label}</span>
                      <span className="w-7 h-7 rounded-full bg-[#0364FF] text-white flex items-center justify-center shrink-0">
                        <ArrowFlight sizeClass="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* ─── Right Column: High-Fidelity UI Showcase Window Card (Desktop only) ─── */}
              <motion.div
                initial={{ opacity: 0, x: 24, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:block lg:col-span-6"
              >
                <div className="rounded-2xl sm:rounded-[28px] bg-white shadow-[0_25px_50px_-12px_rgba(0,10,60,0.4),0_12px_28px_rgba(3,100,255,0.25),inset_0_1.5px_0_rgba(255,255,255,1)] border border-white/80 card-specular-rim overflow-hidden">
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

                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/90 px-2.5 py-1 rounded-md tracking-wider shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>LIVE NOW</span>
                    </div>
                  </div>

                  {/* Console Interior Workspace */}
                  <div className="p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-3.5 font-sans select-none bg-[#f8fafc]">
                    {/* Card 1: Active Programme Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.26 }}
                      whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_14px_-2px_rgba(3,100,255,0.08),0_2px_6px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.95)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                    >
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
                    </motion.div>

                    {/* Card 2: Connected Platform Adapters */}
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.34 }}
                      whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_14px_-2px_rgba(3,100,255,0.08),0_2px_6px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.95)] flex flex-col gap-2.5"
                    >
                      <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        <span>CONNECTED TRADING PLATFORMS</span>
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
                    </motion.div>

                    {/* Card 3: Live S2S Postback Inspector */}
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.42 }}
                      whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_14px_-2px_rgba(3,100,255,0.08),0_2px_6px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.95)] flex flex-col gap-2.5"
                    >
                      <div className="flex items-center justify-between text-[10px]">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-slate-500 text-[11px] font-bold">&gt;_</span>
                          <span className="font-bold text-slate-800 uppercase tracking-wider text-[9px] sm:text-[10px]">
                            LATEST PARTNER ACTIVITY
                          </span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/80">
                          {activeTab.mockup.postbackStatus}
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[10px] sm:text-[11px] font-mono text-slate-600 truncate">
                        {activeTab.mockup.trackingDomain}
                      </div>
                    </motion.div>

                    {/* Card 4: Double-Entry Ledger Stamp */}
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      className="p-3.5 sm:p-4 rounded-2xl bg-[#0f1218] text-white flex flex-col gap-2 shadow-sm overflow-hidden"
                    >
                      <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-400">
                        <span>USD PAYOUT LEDGER (MNY-01)</span>
                        <span className="text-emerald-400 font-bold tracking-wide">BALANCED</span>
                      </div>

                      <div className="space-y-1 text-[10px] sm:text-[11px] font-mono text-slate-200 overflow-x-auto no-scrollbar">
                        <div className="truncate text-slate-300">{activeTab.mockup.ledgerEntry.dr}</div>
                        <div className="text-emerald-400 font-semibold truncate">
                          {activeTab.mockup.ledgerEntry.crPartner}
                        </div>
                        <div className="text-slate-400 truncate">{activeTab.mockup.ledgerEntry.crPlatform}</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
