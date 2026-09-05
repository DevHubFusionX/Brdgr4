"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import UiverseHeroButton from "@/components/ui/UiverseHeroButton";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#fbfbfd] border-t border-slate-200/80 font-sans text-neutral-600 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10 sm:pb-12">
        {/* ─── Top Grid: Categorized Navigation & Action Panel ─────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Column 1: Platform */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-3.5">
            <span className="text-xs font-bold text-neutral-900 tracking-wider uppercase">
              Platform
            </span>
            <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-500 font-normal">
              <li>
                <Link href="/client" className="hover:text-[#0364FF] transition-colors">
                  Client Portal
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-[#0364FF] transition-colors">
                  Partner Portal
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#0364FF] transition-colors">
                  Operations Console
                </Link>
              </li>
              <li>
                <Link href="/sign-up" className="hover:text-[#0364FF] transition-colors">
                  BYO Network Rails
                </Link>
              </li>
              <li>
                <span className="text-neutral-400">S2S Attribution Rails</span>
              </li>
              <li>
                <span className="text-neutral-400">Double-Entry USD Ledger</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Ecosystems */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-3.5">
            <span className="text-xs font-bold text-neutral-900 tracking-wider uppercase">
              Ecosystems
            </span>
            <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-500 font-normal">
              <li className="flex items-center gap-1.5">
                <Link href="/sign-up" className="hover:text-[#0364FF] transition-colors">
                  Proprietary Trading
                </Link>
                <span className="text-[8px] font-bold px-1.5 py-0.2 rounded bg-slate-100 border border-slate-200 text-neutral-700">
                  LIVE
                </span>
              </li>
              <li>
                <span className="text-neutral-400">Forex & CFD Brokers</span>
              </li>
              <li>
                <span className="text-neutral-400">SaaS & Subscriptions</span>
              </li>
              <li>
                <span className="text-neutral-400">Fintech & Neobanks</span>
              </li>
              <li>
                <span className="text-neutral-400">Performance Creators</span>
              </li>
              <li>
                <span className="text-neutral-400">TradingView & Community</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Engine & Protocol */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-3.5">
            <span className="text-xs font-bold text-neutral-900 tracking-wider uppercase">
              Engine & Protocol
            </span>
            <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-500 font-normal">
              <li>
                <span className="text-neutral-400">3-Dimension Vetting</span>
              </li>
              <li>
                <span className="text-neutral-400">Algorithmic Brief Match</span>
              </li>
              <li>
                <span className="text-neutral-400">Bilateral Contracts</span>
              </li>
              <li>
                <span className="text-neutral-400">Contact Gating Rules</span>
              </li>
              <li>
                <span className="text-neutral-400">Automated Fraud Gate</span>
              </li>
              <li>
                <span className="text-neutral-400">Monthly Payout Manifest</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Pricing */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-3.5">
            <span className="text-xs font-bold text-neutral-900 tracking-wider uppercase">
              Company
            </span>
            <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-500 font-normal">
              <li>
                <Link href="/sign-in" className="hover:text-[#0364FF] transition-colors">
                  About the Platform
                </Link>
              </li>
              <li>
                <Link href="/sign-up" className="hover:text-[#0364FF] transition-colors">
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#0364FF] transition-colors">
                  Operations Desk
                </Link>
              </li>
              <li>
                <span className="text-neutral-400">Partner Academy</span>
              </li>
              <li>
                <span className="text-neutral-400">Brand Foundation</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Comparison */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-3.5">
            <span className="text-xs font-bold text-neutral-900 tracking-wider uppercase">
              Comparison
            </span>
            <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-500 font-normal">
              <li>
                <span className="text-neutral-400">vs Legacy Affiliate Networks</span>
              </li>
              <li>
                <span className="text-neutral-400">vs In-House Outreach Teams</span>
              </li>
              <li>
                <span className="text-neutral-400">vs Unregulated Telegram Deals</span>
              </li>
              <li>
                <span className="text-neutral-400">vs Manual Excel Reconciliation</span>
              </li>
            </ul>
          </div>

          {/* Column 6 (Right-hand Action & Entity Block): CTA, Address, Socials */}
          <div className="col-span-2 sm:col-span-3 md:col-span-6 lg:col-span-2 flex flex-col items-start lg:items-end gap-5">
            {/* Get Started Button */}
            <UiverseHeroButton
              href="/sign-up"
              text="Get Started"
              size="sm"
            />

            {/* Corporate Details */}
            <div className="text-left lg:text-right text-[11px] text-neutral-400 font-normal leading-relaxed">
              <div className="font-semibold text-neutral-700">BRDGR Technologies Inc.</div>
              <div>Institutional Partnership Rails</div>
              <div>Global Operations · USD Ledger</div>
            </div>

            {/* Social Badges */}
            <div className="flex items-center gap-2">
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-blue-50/50 flex items-center justify-center text-neutral-700 hover:text-[#0364FF] hover:border-[#0364FF]/40 transition-colors shadow-xs"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-blue-50/50 flex items-center justify-center text-neutral-700 hover:text-[#0364FF] hover:border-[#0364FF]/40 transition-colors shadow-xs"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ─── Massive Brand Watermark Typography (Edge-to-Edge Architectural Impact) ─── */}
        <div className="relative w-full overflow-hidden mt-12 sm:mt-16 pt-6 sm:pt-10 flex items-center justify-between pointer-events-none select-none border-t border-slate-200/50">
          {/* Logo Mark + Monumental Typography */}
          <div className="flex items-baseline gap-4 sm:gap-8 text-slate-200/70 w-full justify-between">
            <span className="text-[72px] sm:text-[130px] md:text-[180px] lg:text-[230px] xl:text-[260px] font-black tracking-[-0.05em] leading-none uppercase">
              brdgr
            </span>

            {/* Subtle Diagonal Arrow Brand Badge */}
            <div className="hidden sm:flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-slate-100/80 border border-slate-200/70 mb-4 text-slate-400">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>
        </div>

        {/* ─── Bottom Regulatory Disclosures & Policy Links ─────────────────── */}
        <div className="mt-6 sm:mt-8 pt-6 border-t border-slate-200/80 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-[10px] sm:text-[11px] text-neutral-400">
          {/* Disclosures */}
          <div className="leading-relaxed max-w-3xl">
            © {new Date().getFullYear()} BRDGR Technologies Inc. All rights reserved. Brdgr operates closed-loop performance partnership infrastructure and double-entry attribution software. Client funds are safeguarded in dedicated USD escrow vaults. Payout manifests execute on a monthly calendar cycle approved by Operations Administrators and completed by the fifth business day. Non-circumvention covenants apply strictly to introduced relationships per PRD §12.
          </div>

          {/* Right Utility Links & Jump to Top */}
          <div className="flex items-center gap-6 shrink-0">
            <Link href="/sign-in" className="hover:text-[#0364FF] transition-colors">
              Press & Media
            </Link>
            <Link href="/sign-in" className="hover:text-[#0364FF] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sign-in" className="hover:text-[#0364FF] transition-colors">
              Terms of Service
            </Link>

            {/* Circular Scroll To Top Button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#0364FF] text-neutral-600 hover:text-white border border-slate-200 hover:border-[#0364FF] flex items-center justify-center transition-all cursor-pointer shadow-xs"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
