"use client";

import { useState } from "react";
import { ShieldCheck, CheckCircle2, TrendingUp, Lock } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export interface BrandItem {
  id: string;
  name: string;
  category: "prop" | "broker" | "tech";
  categoryLabel: string;
  metric: string;
  color: string;
  logoSvg: React.ReactNode;
}

// ─── Row 1 Brands ─────────────────────────────────────────────────────────────
const ROW_1_BRANDS: BrandItem[] = [
  {
    id: "ftmo",
    name: "FTMO",
    category: "prop",
    categoryLabel: "Prop Trading Firm",
    metric: "$4.2M+ Payouts Routed",
    color: "#0066FF",
    logoSvg: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="currentColor" fillOpacity="0.8" />
          <path d="M3 17L12 22V12L3 7V17Z" fill="currentColor" fillOpacity="0.5" />
          <path d="M21 17L12 22V12L21 7V17Z" fill="#0066FF" />
        </svg>
        <span className="font-extrabold text-[19px] tracking-wider text-slate-800 group-hover:text-slate-900 transition-colors">
          FTMO
        </span>
      </div>
    ),
  },
  {
    id: "fundednext",
    name: "FundedNext",
    category: "prop",
    categoryLabel: "Prop Trading Firm",
    metric: "99.8% Match Rate",
    color: "#6366F1",
    logoSvg: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <path d="M4 18L14 4L11 12H20L10 20L12 13H4Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M13 3L6 14H13L11 21L18 10H11L13 3Z" fill="#6366F1" />
        </svg>
        <span className="font-bold text-[18px] tracking-tight text-slate-800 group-hover:text-slate-900 transition-colors">
          Funded<span className="text-[#6366F1] font-extrabold">Next</span>
        </span>
      </div>
    ),
  },
  {
    id: "pepperstone",
    name: "Pepperstone",
    category: "broker",
    categoryLabel: "Tier-1 Broker",
    metric: "FCA & ASIC Regulated",
    color: "#D11835",
    logoSvg: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12"
            stroke="#D11835"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M10 7H14C15.6569 7 17 8.34315 17 10C17 11.6569 15.6569 13 14 13H10V17"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-extrabold text-[17px] tracking-tight text-slate-800 group-hover:text-slate-900 transition-colors lowercase">
          pepperstone
        </span>
      </div>
    ),
  },
  {
    id: "icmarkets",
    name: "IC Markets",
    category: "broker",
    categoryLabel: "Multi-Asset Broker",
    metric: "Global Volume Leader",
    color: "#00BA71",
    logoSvg: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <rect x="3" y="11" width="4" height="10" rx="1.5" fill="currentColor" fillOpacity="0.4" />
          <rect x="10" y="6" width="4" height="15" rx="1.5" fill="currentColor" fillOpacity="0.7" />
          <rect x="17" y="2" width="4" height="19" rx="1.5" fill="#00BA71" />
        </svg>
        <span className="font-extrabold text-[18px] tracking-wider text-slate-800 group-hover:text-slate-900 transition-colors">
          IC<span className="text-[#00BA71]">MARKETS</span>
        </span>
      </div>
    ),
  },
  {
    id: "axi",
    name: "Axi",
    category: "broker",
    categoryLabel: "Regulated Broker",
    metric: "100k+ Traders",
    color: "#E03A3E",
    logoSvg: (
      <div className="flex items-center gap-1.5">
        <span className="font-black text-[22px] tracking-[0.14em] text-slate-800 group-hover:text-slate-900 transition-colors">
          AXI
        </span>
      </div>
    ),
  },
  {
    id: "tickmill",
    name: "Tickmill",
    category: "broker",
    categoryLabel: "Global FX Broker",
    metric: "Zero Friction Escrow",
    color: "#C01427",
    logoSvg: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="#C01427" strokeWidth="2.5" />
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="font-bold text-[18px] tracking-normal text-slate-800 group-hover:text-slate-900 transition-colors">
          TICKMILL
        </span>
      </div>
    ),
  },
  {
    id: "tradingview",
    name: "TradingView",
    category: "tech",
    categoryLabel: "Market Infrastructure",
    metric: "Verified Integrations",
    color: "#2962FF",
    logoSvg: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <rect x="2" y="7" width="7" height="13" rx="1.5" fill="#2962FF" />
          <rect x="11" y="4" width="11" height="16" rx="1.5" fill="currentColor" fillOpacity="0.8" />
          <circle cx="16.5" cy="12" r="2.5" fill="#FFFFFF" />
        </svg>
        <span className="font-bold text-[18px] tracking-tight text-slate-800 group-hover:text-slate-900 transition-colors">
          Trading<span className="text-[#2962FF]">View</span>
        </span>
      </div>
    ),
  },
  {
    id: "alphacapital",
    name: "Alpha Capital",
    category: "prop",
    categoryLabel: "Institutional Prop",
    metric: "Tier-1 Audited",
    color: "#D97706",
    logoSvg: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <path d="M12 3L2 21H22L12 3Z" stroke="#D97706" strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="6" y1="16" x2="18" y2="16" stroke="currentColor" strokeWidth="2" />
        </svg>
        <span className="font-extrabold text-[17px] tracking-wider text-slate-800 group-hover:text-slate-900 transition-colors">
          ALPHA<span className="font-medium text-slate-600">CAPITAL</span>
        </span>
      </div>
    ),
  },
];

// ─── Row 2 Brands ─────────────────────────────────────────────────────────────
const ROW_2_BRANDS: BrandItem[] = [
  {
    id: "hfm",
    name: "HFM",
    category: "broker",
    categoryLabel: "Multi-Asset Broker",
    metric: "Tier-1 Regulated",
    color: "#D8232A",
    logoSvg: (
      <div className="flex flex-col items-start leading-none">
        <span className="font-black text-[20px] tracking-wider text-slate-800 group-hover:text-slate-900 transition-colors">
          HFM
        </span>
        <span className="text-[8px] font-bold tracking-widest text-slate-400 mt-0.5">
          HF MARKETS
        </span>
      </div>
    ),
  },
  {
    id: "exness",
    name: "Exness",
    category: "broker",
    categoryLabel: "Tier-1 Broker",
    metric: "$3.8T Monthly Vol",
    color: "#FFD000",
    logoSvg: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="15" cy="15" r="6" stroke="#FFD000" strokeWidth="2.5" />
        </svg>
        <span className="font-extrabold text-[19px] tracking-tight text-slate-800 group-hover:text-slate-900 transition-colors">
          exness
        </span>
      </div>
    ),
  },
  {
    id: "xm",
    name: "XM",
    category: "broker",
    categoryLabel: "Regulated Broker",
    metric: "10M+ Clients",
    color: "#D92D20",
    logoSvg: (
      <div className="flex items-center gap-1.5">
        <span className="font-black text-[23px] tracking-wider text-slate-900 group-hover:text-red-600 transition-colors">
          XM
        </span>
      </div>
    ),
  },
  {
    id: "oanda",
    name: "OANDA",
    category: "broker",
    categoryLabel: "Global FX Broker",
    metric: "Established 1996",
    color: "#1976D2",
    logoSvg: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#1976D2" strokeWidth="2" />
          <path d="M12 3C16.97 3 21 7.03 21 12C21 16.97 16.97 21 12 21" fill="#1976D2" fillOpacity="0.25" />
          <path d="M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17" fill="#1976D2" />
        </svg>
        <span className="font-black text-[18px] tracking-widest text-slate-800 group-hover:text-slate-900 transition-colors">
          OANDA
        </span>
      </div>
    ),
  },
  {
    id: "bybit",
    name: "Bybit",
    category: "tech",
    categoryLabel: "Crypto & Derivatives",
    metric: "Direct Settlement",
    color: "#F7A600",
    logoSvg: (
      <div className="flex items-center gap-1">
        <span className="font-black text-[19px] tracking-tight text-slate-800 group-hover:text-slate-900 transition-colors">
          BYB<span className="text-[#F7A600]">I</span>T
        </span>
      </div>
    ),
  },
  {
    id: "deriv",
    name: "Deriv",
    category: "broker",
    categoryLabel: "Multi-Asset Broker",
    metric: "25+ Years Proven",
    color: "#FF444F",
    logoSvg: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <path d="M4 4L16 12L4 20V4Z" fill="#FF444F" />
          <path d="M12 4L20 12L12 20V4Z" fill="currentColor" fillOpacity="0.25" />
        </svg>
        <span className="font-black text-[19px] tracking-tight text-slate-800 group-hover:text-slate-900 transition-colors">
          Deriv
        </span>
      </div>
    ),
  },
  {
    id: "octa",
    name: "Octa",
    category: "broker",
    categoryLabel: "Forex Broker",
    metric: "Verified Routing",
    color: "#0039B3",
    logoSvg: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <circle cx="8" cy="8" r="4.5" stroke="#0039B3" strokeWidth="2" />
          <circle cx="16" cy="8" r="4.5" stroke="currentColor" strokeWidth="2" />
          <circle cx="8" cy="16" r="4.5" stroke="currentColor" strokeWidth="2" />
          <circle cx="16" cy="16" r="4.5" stroke="#0039B3" strokeWidth="2" />
        </svg>
        <span className="font-bold text-[19px] tracking-tight text-slate-800 group-hover:text-slate-900 transition-colors lowercase">
          octa
        </span>
      </div>
    ),
  },
  {
    id: "fpmarkets",
    name: "FP Markets",
    category: "broker",
    categoryLabel: "Direct Market Access",
    metric: "0.0 Pip Spreads",
    color: "#005BA6",
    logoSvg: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <path
            d="M3 14C6 6 12 4 21 6C15 11 11 17 8 20C6 19 4 17 3 14Z"
            fill="#005BA6"
          />
        </svg>
        <span className="font-extrabold text-[17px] tracking-tight text-slate-800 group-hover:text-slate-900 transition-colors italic">
          fp<span className="not-italic font-bold">markets</span>
        </span>
      </div>
    ),
  },
];

const METRICS = [
  { label: "Escrow Payouts Guaranteed", value: "$14.8M+", icon: Lock },
  { label: "Verified Partner Matches", value: "3,400+", icon: CheckCircle2 },
  { label: "Attribution Accuracy", value: "99.9%", icon: TrendingUp },
  { label: "Regulatory Compliance", value: "Tier-1", icon: ShieldCheck },
];

// ─── Trust & Social Proof Section ───────────────────────────────────────────
export default function TrustSection() {
  const [activeBrand, setActiveBrand] = useState<BrandItem | null>(null);

  // Duplicating arrays for infinite continuous marquee loop
  const row1Repeated = [...ROW_1_BRANDS, ...ROW_1_BRANDS, ...ROW_1_BRANDS];
  const row2Repeated = [...ROW_2_BRANDS, ...ROW_2_BRANDS, ...ROW_2_BRANDS];

  return (
    <section className="relative w-full bg-[#f6f8fb] pt-14 sm:pt-20 md:pt-24 pb-12 sm:pb-20 md:pb-24 font-sans overflow-hidden">
      {/* ─── Ambient Sky Blue Radial Glow (Matched with reference image) ─── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(191,219,254,0.55)_0%,rgba(224,238,255,0.3)_45%,transparent_80%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* ─── Crisp Ambient Glass Reflection Arc (Like Hero & Reference Image) ─── */}
      <svg
        className="absolute top-0 left-0 w-full h-[360px] pointer-events-none overflow-visible select-none"
        viewBox="0 0 1440 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M -60,190 C 400,100 950,280 1520,30"
          stroke="#FFFFFF"
          strokeWidth="14"
          strokeOpacity="0.55"
          className="blur-[8px]"
        />
        <path
          d="M -60,190 C 400,100 950,280 1520,30"
          stroke="url(#trust-white-arc)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M -40,240 C 420,150 970,320 1500,80"
          stroke="url(#trust-soft-arc)"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="trust-white-arc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#93C5FD" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="trust-soft-arc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* ─── Header: Exact user copy & elevated typography ───────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] font-normal text-neutral-900 tracking-[-0.025em] sm:tracking-[-0.03em] leading-[1.2]">
              We are trusted by leading brands
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
              Proprietary trading firms, Tier-1 brokers, and high-volume performance partners scale on BRDGR’s verified infrastructure.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ─── Full-Bleed Marquee Showcase Container ───────────────────────── */}
      <div className="relative mt-8 sm:mt-14 w-full overflow-hidden marquee-container z-10">
        {/* ─── Edge Fade Gradients (Pinned to exact screen edges) ──────────── */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 md:w-56 bg-gradient-to-r from-[#f6f8fb] via-[#f6f8fb]/90 to-transparent pointer-events-none z-20 backdrop-blur-[1px]"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 md:w-56 bg-gradient-to-l from-[#f6f8fb] via-[#f6f8fb]/90 to-transparent pointer-events-none z-20 backdrop-blur-[1px]"
          aria-hidden="true"
        />

        {/* ─── Dual Track Marquee Stream with Native Edge Mask ─────────────── */}
        <div
          tabIndex={0}
          aria-label="Partner brand logos marquee. Hover or focus to pause."
          className="space-y-3 sm:space-y-5 md:space-y-6 focus:outline-hidden py-1"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
            {/* ─── Track 1: Scrolling Left ─────────────────────────────────── */}
            <div className="flex items-center w-max animate-marquee-left">
              {row1Repeated.map((brand, idx) => (
                <div key={`${brand.id}-${idx}`} className="flex items-center shrink-0">
                  <div
                    onMouseEnter={() => setActiveBrand(brand)}
                    onMouseLeave={() => setActiveBrand(null)}
                    onClick={() => setActiveBrand((prev) => (prev?.id === brand.id ? null : brand))}
                    className="group relative flex items-center px-3 sm:px-6 py-1.5 sm:py-2 rounded-xl transition-all duration-300 cursor-pointer opacity-90 hover:opacity-100 hover:bg-white/80 hover:shadow-xs active:scale-95"
                  >
                    <div className="transition-transform duration-200 group-hover:scale-105">
                      {brand.logoSvg}
                    </div>

                    {/* Interactive Hover Tooltip Card */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-40 hidden sm:block">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/95 text-white text-[11px] font-medium shadow-xl backdrop-blur-md whitespace-nowrap border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0364FF]" />
                        <span className="text-slate-300">{brand.categoryLabel}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-white font-semibold">{brand.metric}</span>
                      </div>
                    </div>
                  </div>

                  {/* Subtle Vertical Divider Line (From Reference Image) */}
                  <div className="h-5 sm:h-6 w-[1px] bg-slate-300/70 shrink-0 mx-2 sm:mx-4" />
                </div>
              ))}
            </div>

            {/* ─── Track 2: Scrolling Right ────────────────────────────────── */}
            <div className="flex items-center w-max animate-marquee-right">
              {row2Repeated.map((brand, idx) => (
                <div key={`${brand.id}-${idx}`} className="flex items-center shrink-0">
                  <div
                    onMouseEnter={() => setActiveBrand(brand)}
                    onMouseLeave={() => setActiveBrand(null)}
                    onClick={() => setActiveBrand((prev) => (prev?.id === brand.id ? null : brand))}
                    className="group relative flex items-center px-3 sm:px-6 py-1.5 sm:py-2 rounded-xl transition-all duration-300 cursor-pointer opacity-90 hover:opacity-100 hover:bg-white/80 hover:shadow-xs active:scale-95"
                  >
                    <div className="transition-transform duration-200 group-hover:scale-105">
                      {brand.logoSvg}
                    </div>

                    {/* Interactive Hover Tooltip Card */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-40 hidden sm:block">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/95 text-white text-[11px] font-medium shadow-xl backdrop-blur-md whitespace-nowrap border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0364FF]" />
                        <span className="text-slate-300">{brand.categoryLabel}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-white font-semibold">{brand.metric}</span>
                      </div>
                    </div>
                  </div>

                  {/* Subtle Vertical Divider Line */}
                  <div className="h-5 sm:h-6 w-[1px] bg-slate-300/70 shrink-0 mx-2 sm:mx-4" />
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* ─── Bottom Content: Active Brand Spotlight & Proof Ribbon ───────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* ─── Active Brand Spotlight Strip (When tapped or hovered) ─────── */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center min-h-[28px] px-2">
          {activeBrand ? (
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full bg-white border border-blue-200/80 shadow-[0_4px_16px_rgba(3,100,255,0.12)] text-[11px] sm:text-xs font-medium text-neutral-700 animate-in fade-in zoom-in-95 duration-200 max-w-[92vw] overflow-x-auto whitespace-nowrap">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: activeBrand.color }} />
              <span className="font-semibold text-neutral-900">{activeBrand.name}</span>
              <span className="text-neutral-400">|</span>
              <span className="text-neutral-500">{activeBrand.categoryLabel}</span>
              <span className="text-neutral-400">|</span>
              <span className="text-[#0364FF] font-semibold">{activeBrand.metric}</span>
              <ShieldCheck className="w-3.5 h-3.5 text-[#0364FF] ml-0.5 shrink-0" />
            </div>
          ) : (
            <p className="text-[11px] sm:text-xs text-neutral-400 font-medium tracking-wide text-center">
              Tap or hover any brand to inspect verified routing metrics and regulatory status
            </p>
          )}
        </div>

        {/* ─── Proof Metric Ribbon for Extra Credibility ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
        >
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <div 
                key={metric.label} 
                className="p-3.5 sm:p-0 rounded-2xl sm:rounded-none bg-white/75 sm:bg-transparent border border-blue-100/70 sm:border-none shadow-xs sm:shadow-none text-center sm:text-left flex flex-col sm:flex-row items-center gap-2 sm:gap-3"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-blue-100/80 shadow-[0_4px_14px_rgba(3,100,255,0.12),inset_0_1px_0_#ffffff] flex items-center justify-center text-neutral-800 shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0364FF]" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold sm:font-normal tracking-tight text-neutral-900">
                    <AnimatedCounter value={metric.value} />
                  </div>
                  <div className="text-[11px] sm:text-xs text-neutral-500 font-medium mt-0.5 leading-tight">
                    {metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
