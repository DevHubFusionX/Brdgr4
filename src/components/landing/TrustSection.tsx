"use client";

import { useState } from "react";
import { ShieldCheck, CheckCircle2, TrendingUp, Lock } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

interface BrandItem {
  name: string;
  category: "prop" | "broker" | "tech";
  categoryLabel: string;
  metric: string;
  color: string;
  logoSvg: React.ReactNode;
}

const BRANDS: BrandItem[] = [
  {
    name: "FTMO",
    category: "prop",
    categoryLabel: "Prop Trading Firm",
    metric: "$4.2M+ Payouts Routed",
    color: "#0066FF",
    logoSvg: (
      <svg viewBox="0 0 140 32" className="h-6 w-auto" fill="currentColor">
        <text x="0" y="24" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="22" letterSpacing="0.08em">
          FTMO
        </text>
      </svg>
    ),
  },
  {
    name: "FundedNext",
    category: "prop",
    categoryLabel: "Prop Trading Firm",
    metric: "99.8% Match Rate",
    color: "#6366F1",
    logoSvg: (
      <svg viewBox="0 0 170 32" className="h-6 w-auto" fill="currentColor">
        <text x="0" y="24" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="20" letterSpacing="-0.02em">
          Funded<tspan fill="#6366F1">Next</tspan>
        </text>
      </svg>
    ),
  },
  {
    name: "Pepperstone",
    category: "broker",
    categoryLabel: "Tier-1 Broker",
    metric: "FCA & ASIC Regulated",
    color: "#E11D48",
    logoSvg: (
      <svg viewBox="0 0 170 32" className="h-6 w-auto" fill="currentColor">
        <text x="0" y="24" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="19" letterSpacing="0.02em">
          pepperstone
        </text>
      </svg>
    ),
  },
  {
    name: "IC Markets",
    category: "broker",
    categoryLabel: "Multi-Asset Broker",
    metric: "Global Volume Leader",
    color: "#10B981",
    logoSvg: (
      <svg viewBox="0 0 160 32" className="h-6 w-auto" fill="currentColor">
        <text x="0" y="24" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="20" letterSpacing="0.04em">
          IC<tspan fill="#10B981">MARKETS</tspan>
        </text>
      </svg>
    ),
  },
  {
    name: "Alpha Capital",
    category: "prop",
    categoryLabel: "Institutional Prop",
    metric: "Tier-1 Audited",
    color: "#D97706",
    logoSvg: (
      <svg viewBox="0 0 170 32" className="h-6 w-auto" fill="currentColor">
        <text x="0" y="24" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="19" letterSpacing="0.05em">
          ALPHA<tspan fontWeight="400" fontSize="16">CAPITAL</tspan>
        </text>
      </svg>
    ),
  },
  {
    name: "Axi",
    category: "broker",
    categoryLabel: "Regulated Broker",
    metric: "100k+ Traders",
    color: "#F97316",
    logoSvg: (
      <svg viewBox="0 0 100 32" className="h-6 w-auto" fill="currentColor">
        <text x="0" y="24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="24" letterSpacing="0.1em">
          AXI
        </text>
      </svg>
    ),
  },
  {
    name: "Tickmill",
    category: "broker",
    categoryLabel: "Global FX Broker",
    metric: "Zero Friction Escrow",
    color: "#DC2626",
    logoSvg: (
      <svg viewBox="0 0 140 32" className="h-6 w-auto" fill="currentColor">
        <text x="0" y="24" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="20" letterSpacing="-0.01em">
          TICKMILL
        </text>
      </svg>
    ),
  },
  {
    name: "TradingView",
    category: "tech",
    categoryLabel: "Market Infrastructure",
    metric: "Verified Integrations",
    color: "#2563EB",
    logoSvg: (
      <svg viewBox="0 0 180 32" className="h-6 w-auto" fill="currentColor">
        <text x="0" y="24" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="19" letterSpacing="-0.03em">
          Trading<tspan fill="#2563EB">View</tspan>
        </text>
      </svg>
    ),
  },
];

const METRICS = [
  { label: "Escrow Payouts Guaranteed", value: "$14.8M+", icon: Lock },
  { label: "Verified Partner Matches", value: "3,400+", icon: CheckCircle2 },
  { label: "Attribution Accuracy", value: "99.9%", icon: TrendingUp },
  { label: "Regulatory Compliance", value: "Tier-1", icon: ShieldCheck },
];

export default function TrustSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "prop" | "broker">("all");

  const filteredBrands =
    activeCategory === "all"
      ? BRANDS
      : BRANDS.filter((brand) => brand.category === activeCategory);

  return (
    <section className="relative w-full bg-[#f6f8fb] pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* ─── Header: Clear & Elevated ────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal text-neutral-900 tracking-[-0.025em] leading-[1.2]">
            We are trusted by leading brands
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-500 font-normal leading-relaxed">
            Proprietary trading firms, Tier-1 brokers, and high-volume performance partners scale on BRDGR’s verified infrastructure.
          </p>

          {/* ─── Segment Filter Tabs for Clarity ───────────────────────────── */}
          <div className="mt-7 sm:mt-8 inline-flex items-center p-1 rounded-full bg-slate-200/60 border border-slate-300/40 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#0364FF] text-white shadow-md shadow-[#0364FF]/25 font-semibold"
                  : "text-neutral-600 hover:text-[#0364FF]"
              }`}
            >
              All Segments
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("prop")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === "prop"
                  ? "bg-[#0364FF] text-white shadow-md shadow-[#0364FF]/25 font-semibold"
                  : "text-neutral-600 hover:text-[#0364FF]"
              }`}
            >
              Prop Trading Firms
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("broker")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === "broker"
                  ? "bg-[#0364FF] text-white shadow-md shadow-[#0364FF]/25 font-semibold"
                  : "text-neutral-600 hover:text-[#0364FF]"
              }`}
            >
              Forex & CFD Brokers
            </button>
          </div>
        </div>

        {/* ─── Logo Showcase with Ambient Spotlight Beams ──────────────────── */}
        <div className="relative mt-12 sm:mt-16 pt-6 pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.05 }}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {filteredBrands.map((brand) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group relative flex flex-col items-center justify-center p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-200 transition-colors duration-200 hover:shadow-lg hover:shadow-blue-500/5"
              >
                {/* ─── Spotlight Beam effect (recreating image spotlight cones) ─ */}
                <div
                  className="absolute -bottom-6 inset-x-4 h-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-md"
                  style={{
                    background: `radial-gradient(ellipse at top, ${brand.color}25 0%, transparent 70%)`,
                  }}
                  aria-hidden="true"
                />

                {/* Brand Logo */}
                <div className="text-neutral-700 group-hover:text-[#0364FF] transition-colors duration-200 h-8 flex items-center justify-center">
                  {brand.logoSvg}
                </div>

                {/* Sub-label for context & clarity */}
                <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-neutral-400 group-hover:text-neutral-600 transition-colors">
                  <span>{brand.categoryLabel}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="text-neutral-500 font-semibold">
                    <AnimatedCounter value={brand.metric} />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Background Ambient Floor Glow */}
          <div 
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[100px] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent blur-2xl pointer-events-none" 
            aria-hidden="true" 
          />
        </div>

        {/* ─── Proof Metric Ribbon for Extra Clarity & Credibility ─────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mt-10 sm:mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="text-center sm:text-left flex flex-col sm:flex-row items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center text-neutral-800 shrink-0">
                  <Icon className="w-5 h-5 text-[#0364FF]" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-normal tracking-tight text-neutral-900">
                    <AnimatedCounter value={metric.value} />
                  </div>
                  <div className="text-xs text-neutral-500 font-medium mt-0.5">
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
