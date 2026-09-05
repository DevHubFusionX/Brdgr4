"use client";

import { useState } from "react";
import { Search, ChevronDown, CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useLoading } from "@/context/LoadingContext";
import UiverseHeroButton from "@/components/ui/UiverseHeroButton";

const SAMPLE_PARTNERS = [
  {
    id: 1,
    role: "Trading Educator & Community Lead",
    audience: "48k YouTube & Discord Traders",
    focus: "Prop Challenge Sales",
    metric: "99.4% Verified Attribution",
    region: "UK & Europe",
  },
  {
    id: 2,
    role: "Institutional FX Analyst",
    audience: "22k Active CFD Traders",
    focus: "Broker Account Volume",
    metric: "Tier-1 Compliance Passed",
    region: "Global / GCC",
  },
];

export default function PartnerSearchCard() {
  const [ecosystem, setEcosystem] = useState("Prop Trading");
  const [region, setRegion] = useState("Global");
  const [model, setModel] = useState("CPA (Cost Per Action)");
  const [hasSearched, setHasSearched] = useState(false);
  const { isHeroReady } = useLoading();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      animate={isHeroReady ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 32, scale: 0.98 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
      className="w-full max-w-4xl mx-auto mt-10 sm:mt-14 bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 sm:pb-9 shadow-2xl shadow-slate-200/70 border border-slate-100 transition-all font-sans"
    >
      {/* Card Header */}
      <div className="flex items-start gap-3.5 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0364ff] shrink-0 mt-0.5">
          <Search className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Search Verified Partners
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Tailored partner matches to scale your challenge sales and trader acquisition
          </p>
        </div>
      </div>

      {/* Filter Inputs Grid */}
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Ecosystem Filter */}
          <div className="relative">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 px-1">
              Category
            </label>
            <div className="relative">
              <select
                value={ecosystem}
                onChange={(e) => setEcosystem(e.target.value)}
                className="w-full appearance-none bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-slate-800 text-sm font-semibold rounded-2xl px-4 py-3.5 pr-10 border border-slate-200/80 focus:border-[#0364ff] focus:outline-none transition-colors cursor-pointer"
              >
                <option value="Prop Trading">Prop Trading</option>
                <option value="Forex & CFD Brokers">Forex & CFD Brokers</option>
                <option value="Crypto & Capital">Crypto & Capital</option>
                <option value="Financial SaaS">Financial SaaS</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Region Filter */}
          <div className="relative">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 px-1">
              Audience Region
            </label>
            <div className="relative">
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full appearance-none bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-slate-800 text-sm font-semibold rounded-2xl px-4 py-3.5 pr-10 border border-slate-200/80 focus:border-[#0364ff] focus:outline-none transition-colors cursor-pointer"
              >
                <option value="Global">Global / All Regions</option>
                <option value="North America">North America</option>
                <option value="Europe & UK">Europe & UK</option>
                <option value="Southeast Asia">Southeast Asia</option>
                <option value="Middle East & GCC">Middle East & GCC</option>
                <option value="Latin America">Latin America</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Commission Model Filter */}
          <div className="relative">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 px-1">
              Commission Model
            </label>
            <div className="relative">
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full appearance-none bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-slate-800 text-sm font-semibold rounded-2xl px-4 py-3.5 pr-10 border border-slate-200/80 focus:border-[#0364ff] focus:outline-none transition-colors cursor-pointer"
              >
                <option value="CPA (Cost Per Action)">CPA (Cost Per Account)</option>
                <option value="Revenue Share">Revenue Share / Spreads</option>
                <option value="Hybrid Model">Hybrid Bounty + Rev-Share</option>
                <option value="Bring Your Own">Bring Your Own (BYO)</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Submit Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-[#0364ff]" />
            <span>All supply passes strict identity, compliance & past performance audits.</span>
          </div>

          <UiverseHeroButton
            type="submit"
            text="Search Partners"
            size="sm"
          />
        </div>
      </form>

      {/* Dynamic Results Preview */}
      <AnimatePresence>
        {hasSearched && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: 8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 pt-6 border-t border-slate-100 space-y-3 overflow-hidden"
          >
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <span>Verified Candidates Available ({ecosystem} • {region})</span>
              <Link href="/sign-up" className="text-[#0364ff] hover:underline font-bold">
                Submit brief to match →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {SAMPLE_PARTNERS.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 flex flex-col justify-between hover:bg-blue-50/40 hover:border-blue-100 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0364ff]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0364ff]" />
                      <span>Verified Growth Partner</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 mt-1">{partner.role}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{partner.audience}</div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-200/50 flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      <AnimatedCounter value={partner.metric} />
                    </span>
                    <span className="text-slate-400">{partner.region}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
