"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { PRODUCTS_SECTIONS, SOLUTIONS_SECTIONS } from "./navData";
import NavIcon from "./NavIcon";

interface MobileNavProps {
  onClose: () => void;
}

export default function MobileNav({ onClose }: MobileNavProps) {
  const [openSection, setOpenSection] = useState<"products" | "solutions" | null>("products");

  return (
    <div className="md:hidden border-t border-slate-200/80 backdrop-blur-3xl bg-white/95 px-5 pt-4 pb-8 space-y-5 max-h-[calc(100vh-80px)] overflow-y-auto text-slate-900 font-sans">
      <div className="space-y-3">
        {/* Products Accordion */}
        <div className="border border-slate-200/70 rounded-2xl p-3 bg-slate-50/50">
          <button
            type="button"
            onClick={() => setOpenSection((prev) => (prev === "products" ? null : "products"))}
            className="w-full flex items-center justify-between py-1 text-sm font-bold text-slate-900 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0364FF]" />
              <span>Product & Platform</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                openSection === "products" ? "rotate-180 text-[#0364FF]" : ""
              }`}
            />
          </button>

          {openSection === "products" && (
            <div className="pt-3 space-y-1.5 animate-in fade-in duration-150">
              {PRODUCTS_SECTIONS.flatMap((s) => s.items).map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0364FF] flex items-center justify-center shrink-0 mt-0.5">
                    <NavIcon name={item.iconName} className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[13px] font-semibold text-slate-900 leading-tight">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="text-[9px] font-medium text-[#0364FF] bg-blue-50 border border-blue-200/70 px-1.5 py-0.2 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
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
        <div className="border border-slate-200/70 rounded-2xl p-3 bg-slate-50/50">
          <button
            type="button"
            onClick={() => setOpenSection((prev) => (prev === "solutions" ? null : "solutions"))}
            className="w-full flex items-center justify-between py-1 text-sm font-bold text-slate-900 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0364FF]" />
              <span>Solutions & Ecosystems</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                openSection === "solutions" ? "rotate-180 text-[#0364FF]" : ""
              }`}
            />
          </button>

          {openSection === "solutions" && (
            <div className="pt-3 space-y-1.5 animate-in fade-in duration-150">
              {SOLUTIONS_SECTIONS.flatMap((s) => s.items).map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0364FF] flex items-center justify-center shrink-0 mt-0.5">
                    <NavIcon name={item.iconName} className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[13px] font-semibold text-slate-900 leading-tight">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="text-[9px] font-medium text-[#0364FF] bg-blue-50 border border-blue-200/70 px-1.5 py-0.2 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
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

        {/* Direct Links */}
        <div className="px-2 space-y-2 pt-1">
          <Link
            href="/#pricing"
            onClick={onClose}
            className="block py-1.5 text-sm font-semibold text-slate-800 hover:text-[#0364FF] transition-colors"
          >
            Pricing & Commission
          </Link>
          <Link
            href="/#contact"
            onClick={onClose}
            className="block py-1.5 text-sm font-semibold text-slate-800 hover:text-[#0364FF] transition-colors"
          >
            Contact & Custom Enterprise
          </Link>
        </div>
      </div>

      {/* Auth Action Buttons */}
      <div className="pt-2 flex flex-col gap-2.5">
        <Link
          href="/sign-in"
          onClick={onClose}
          className="w-full text-center py-2.5 text-sm font-medium text-slate-800 bg-white/90 border border-slate-200/90 rounded-[12px] shadow-xs hover:bg-white transition-colors"
        >
          Login
        </Link>
        <Link
          href="/sign-up"
          onClick={onClose}
          className="w-full flex items-center justify-center gap-1.5 py-2.5 text-sm font-semibold text-white bg-gradient-to-b from-[#529eff] via-[#2076fe] to-[#045de9] border border-blue-400/50 rounded-[12px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_2px_0_#0044b8,0_3px_8px_rgba(3,100,255,0.25)] transition-all cursor-pointer"
        >
          <span>Get started</span>
          <ArrowRight className="w-4 h-4 stroke-[2.2]" />
        </Link>
      </div>
    </div>
  );
}
