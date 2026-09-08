"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Target,
  Headphones,
} from "lucide-react";
import { PRODUCTS_SECTIONS, SOLUTIONS_SECTIONS } from "./navData";
import NavIcon from "./NavIcon";
import NavLogo from "./NavLogo";

interface MobileNavProps {
  onClose: () => void;
}

type TabType = "products" | "solutions";

export default function MobileNav({ onClose }: MobileNavProps) {
  const [activeTab, setActiveTab] = useState<TabType>("products");

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Filter products to exclude portals category
  const productCategories = PRODUCTS_SECTIONS.filter(
    (s) => s.category !== "Portals & Resources"
  );

  return (
    <>
      {/* ─── Backdrop Overlay ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        onClick={onClose}
        className="fixed inset-0 z-[90] bg-slate-950/40 backdrop-blur-xs md:hidden"
        aria-hidden="true"
      />

      {/* ─── Slide-in Sidebar Panel ──────────────────────────────────────── */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 right-0 bottom-0 z-[100] w-[min(92vw,400px)] h-[100dvh] bg-white/98 backdrop-blur-2xl border-l border-slate-200/90 shadow-[-20px_0_50px_rgba(15,23,42,0.18)] flex flex-col md:hidden font-sans pointer-events-auto select-none"
        aria-label="Mobile navigation sidebar"
      >
        {/* ─── Header: Brand Logo & Close Button ──────────────────────────── */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100 shrink-0 bg-white/90 backdrop-blur-md">
          <NavLogo onClick={onClose} />
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100/80 hover:bg-slate-200/80 text-slate-600 hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer active:scale-95"
            aria-label="Close navigation sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ─── Segmented Pill Tab Switcher ────────────────────────────────── */}
        <div className="px-4 pt-3.5 pb-2 shrink-0 bg-white">
          <div className="grid grid-cols-2 p-1 rounded-xl bg-slate-100/90 border border-slate-200/70 text-xs font-semibold">
            {/* Products Tab */}
            <button
              type="button"
              onClick={() => setActiveTab("products")}
              className={`relative py-2 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === "products"
                  ? "text-[#0364FF]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {activeTab === "products" && (
                <motion.div
                  layoutId="mobileNavActiveTab"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  className="absolute inset-0 bg-white rounded-lg shadow-xs border border-slate-200/60"
                />
              )}
              <Zap className="w-3.5 h-3.5 relative z-10 shrink-0" />
              <span className="relative z-10 truncate">Products</span>
            </button>

            {/* Solutions Tab */}
            <button
              type="button"
              onClick={() => setActiveTab("solutions")}
              className={`relative py-2 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === "solutions"
                  ? "text-[#0364FF]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {activeTab === "solutions" && (
                <motion.div
                  layoutId="mobileNavActiveTab"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  className="absolute inset-0 bg-white rounded-lg shadow-xs border border-slate-200/60"
                />
              )}
              <Layers className="w-3.5 h-3.5 relative z-10 shrink-0" />
              <span className="relative z-10 truncate">Solutions</span>
            </button>
          </div>
        </div>

        {/* ─── Scrollable Tab Content ─────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-4 py-2 overscroll-contain">
          <AnimatePresence mode="wait">
            {/* ─── TAB 1: PRODUCTS ────────────────────────────────────────── */}
            {activeTab === "products" && (
              <motion.div
                key="tab-products"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="space-y-4 pb-4"
              >
                {productCategories.map((section) => (
                  <div key={section.category} className="space-y-1.5">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 px-1 block">
                      {section.category}
                    </span>
                    <div className="space-y-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={onClose}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150 group active:scale-[0.99]"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-50/80 text-[#0364FF] group-hover:bg-[#0364FF] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors shadow-2xs">
                            <NavIcon name={item.iconName} className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0364FF] transition-colors leading-tight">
                                {item.title}
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#0364FF] transition-colors shrink-0 ml-1" />
                            </div>
                            {item.description && (
                              <p className="text-[11.5px] text-slate-500 line-clamp-1 mt-0.5 leading-snug">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* ─── TAB 2: SOLUTIONS ───────────────────────────────────────── */}
            {activeTab === "solutions" && (
              <motion.div
                key="tab-solutions"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="space-y-4 pb-4"
              >
                {SOLUTIONS_SECTIONS.map((section) => (
                  <div key={section.category} className="space-y-1.5">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 px-1 block">
                      {section.category}
                    </span>
                    <div className="space-y-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={onClose}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150 group active:scale-[0.99]"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-50/80 text-[#0364FF] group-hover:bg-[#0364FF] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors shadow-2xs">
                            <NavIcon name={item.iconName} className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0364FF] transition-colors leading-tight">
                                {item.title}
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#0364FF] transition-colors shrink-0 ml-1" />
                            </div>
                            {item.description && (
                              <p className="text-[11.5px] text-slate-500 line-clamp-1 mt-0.5 leading-snug">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ─── Quick Access Links (Pricing & Contact) ─────────────────── */}
          <div className="pt-2 pb-4 border-t border-slate-100 mt-2 space-y-1.5">
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 px-1 block">
              Quick Access
            </span>

            {/* Pricing Link */}
            <Link
              href="/#pricing"
              onClick={onClose}
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 border border-slate-200/60 transition-colors group active:scale-[0.99]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0364FF] transition-colors block leading-tight">
                    Pricing & Plans
                  </span>
                  <span className="text-[11px] text-slate-500">
                    14-day free trial, transparent tiers
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0364FF] transition-colors" />
            </Link>

            {/* Contact Operations */}
            <Link
              href="/#contact"
              onClick={onClose}
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 border border-slate-200/60 transition-colors group active:scale-[0.99]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-100/70 text-[#0364FF] flex items-center justify-center shrink-0">
                  <Headphones className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0364FF] transition-colors block leading-tight">
                    Contact Operations
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Engineering & onboarding support
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0364FF] transition-colors" />
            </Link>
          </div>
        </div>

        {/* ─── Footer: Login & CTA Buttons ────────────────────────────────── */}
        <div className="p-4 sm:p-5 border-t border-slate-200/80 bg-white shrink-0 space-y-2.5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <div className="grid grid-cols-2 gap-2.5">
            <Link
              href="/sign-in"
              onClick={onClose}
              className="w-full text-center py-2.5 text-[13.5px] font-semibold text-slate-800 bg-white border border-slate-200/90 rounded-xl hover:bg-slate-50 shadow-2xs transition-colors flex items-center justify-center active:scale-[0.98]"
            >
              Login
            </Link>

            <Link
              href="/sign-up"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 text-[13.5px] font-semibold text-white bg-gradient-to-b from-[#529eff] via-[#2076fe] to-[#045de9] border border-blue-400/50 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_2px_0_#0044b8,0_3px_8px_rgba(3,100,255,0.25)] hover:from-[#62a7ff] hover:to-[#0052d4] transition-all cursor-pointer active:scale-[0.98]"
            >
              <span>Get started</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </Link>
          </div>

          <div className="text-center pt-0.5">
            <span className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0364FF] shrink-0" />
              Double-entry USD escrow • S2S signed tracking
            </span>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
