"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  X,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  Building2,
  Users,
} from "lucide-react";
import { PRODUCTS_SECTIONS, SOLUTIONS_SECTIONS } from "./navData";
import NavIcon from "./NavIcon";
import NavLogo from "./NavLogo";

interface MobileNavProps {
  onClose: () => void;
}

export default function MobileNav({ onClose }: MobileNavProps) {
  const [openSection, setOpenSection] = useState<"products" | "solutions" | null>("products");

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <>
      {/* ─── Backdrop Overlay ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={onClose}
        className="fixed inset-0 z-[90] bg-slate-950/45 backdrop-blur-xs md:hidden"
        aria-hidden="true"
      />

      {/* ─── Slide-in Sidebar Panel ──────────────────────────────────────── */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 right-0 bottom-0 z-[100] w-[88vw] max-w-[360px] h-full h-[100dvh] bg-white/98 backdrop-blur-2xl border-l border-slate-200/90 shadow-[-16px_0_40px_rgba(15,23,42,0.18)] flex flex-col md:hidden font-sans pointer-events-auto"
        aria-label="Mobile navigation sidebar"
      >
        {/* ─── Header: Brand Logo & Close Button ──────────────────────────── */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100 shrink-0 bg-white">
          <NavLogo onClick={onClose} />
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close navigation sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ─── Scrollable Nav Body ────────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 overscroll-contain">
          {/* Products Accordion */}
          <div className="border border-slate-200/80 rounded-2xl bg-slate-50/60 overflow-hidden transition-colors">
            <button
              type="button"
              onClick={() => setOpenSection((prev) => (prev === "products" ? null : "products"))}
              className="w-full flex items-center justify-between p-3.5 text-left text-sm font-semibold text-slate-900 hover:text-[#0364FF] transition-colors cursor-pointer"
              aria-expanded={openSection === "products"}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-100/70 text-[#0364FF] flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </span>
                <span className="font-semibold text-slate-900">Product & Platform</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  openSection === "products" ? "rotate-180 text-[#0364FF]" : ""
                }`}
              />
            </button>

            {openSection === "products" && (
              <div className="px-3 pb-3 space-y-1 border-t border-slate-200/60 pt-2 animate-in fade-in duration-150">
                {PRODUCTS_SECTIONS.flatMap((s) => s.items).map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white hover:shadow-xs transition-all duration-150 group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0364FF] group-hover:bg-[#0364FF] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                      <NavIcon name={item.iconName} className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[13px] font-semibold text-slate-800 group-hover:text-slate-950 block leading-tight">
                        {item.title}
                      </span>
                      {item.description && (
                        <p className="text-[11.5px] text-slate-500 line-clamp-1 mt-0.5">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Solutions Accordion */}
          <div className="border border-slate-200/80 rounded-2xl bg-slate-50/60 overflow-hidden transition-colors">
            <button
              type="button"
              onClick={() => setOpenSection((prev) => (prev === "solutions" ? null : "solutions"))}
              className="w-full flex items-center justify-between p-3.5 text-left text-sm font-semibold text-slate-900 hover:text-[#0364FF] transition-colors cursor-pointer"
              aria-expanded={openSection === "solutions"}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-100/70 text-[#0364FF] flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </span>
                <span className="font-semibold text-slate-900">Solutions & Ecosystems</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  openSection === "solutions" ? "rotate-180 text-[#0364FF]" : ""
                }`}
              />
            </button>

            {openSection === "solutions" && (
              <div className="px-3 pb-3 space-y-1 border-t border-slate-200/60 pt-2 animate-in fade-in duration-150">
                {SOLUTIONS_SECTIONS.flatMap((s) => s.items).map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white hover:shadow-xs transition-all duration-150 group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0364FF] group-hover:bg-[#0364FF] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                      <NavIcon name={item.iconName} className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[13px] font-semibold text-slate-800 group-hover:text-slate-950 block leading-tight">
                        {item.title}
                      </span>
                      {item.description && (
                        <p className="text-[11.5px] text-slate-500 line-clamp-1 mt-0.5">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Direct Destination Links */}
          <div className="px-1 py-1 space-y-1">
            <Link
              href="/#pricing"
              onClick={onClose}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-100/70 text-slate-800 font-semibold text-[13.5px] transition-colors"
            >
              <span>Pricing & Commission</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-[#0364FF]">
                14-Day Free
              </span>
            </Link>

            <Link
              href="/client"
              onClick={onClose}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-100/70 text-slate-800 font-semibold text-[13.5px] transition-colors"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-slate-500" />
                <span>Client Portal (Brokers & Prop)</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>

            <Link
              href="/partner"
              onClick={onClose}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-100/70 text-slate-800 font-semibold text-[13.5px] transition-colors"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-slate-500" />
                <span>Partner Portal (Affiliates)</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>

            <Link
              href="/#contact"
              onClick={onClose}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-100/70 text-slate-800 font-semibold text-[13.5px] transition-colors"
            >
              <span>Contact Operations</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
          </div>
        </div>

        {/* ─── Footer: Login & CTA Buttons ────────────────────────────────── */}
        <div className="p-4 sm:p-5 border-t border-slate-200/80 bg-slate-50/90 shrink-0 space-y-2.5">
          <Link
            href="/sign-in"
            onClick={onClose}
            className="w-full text-center py-2.5 text-sm font-semibold text-slate-800 bg-white border border-slate-200/90 rounded-xl hover:bg-slate-50 shadow-xs transition-colors block"
          >
            Login
          </Link>

          <Link
            href="/sign-up"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-1.5 py-3 text-sm font-semibold text-white bg-gradient-to-b from-[#529eff] via-[#2076fe] to-[#045de9] border border-blue-400/50 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_2px_0_#0044b8,0_3px_8px_rgba(3,100,255,0.25)] hover:from-[#62a7ff] hover:to-[#0052d4] transition-all cursor-pointer"
          >
            <span>Get started</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </Link>

          <div className="text-center pt-1">
            <span className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0364FF]" />
              Double-entry USD escrow • S2S signed tracking
            </span>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
