"use client";

import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { PRODUCTS_SECTIONS } from "./navData";
import NavIcon from "./NavIcon";

interface ProductsMegaMenuProps {
  onClose: () => void;
}

export default function ProductsMegaMenu({ onClose }: ProductsMegaMenuProps) {
  const [platformSection, ledgerSection, portalsSection] = PRODUCTS_SECTIONS;

  return (
    <div className="flex flex-col font-sans">
      {/* ─── Top 3-Column Content Area ─── */}
      <div className="p-6 sm:p-7 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {/* Column 1: Platform Core */}
        <div>
          <div className="flex items-center gap-2 mb-3.5 px-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0364FF]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {platformSection.category}
            </span>
          </div>

          <div className="space-y-1">
            {platformSection.items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50/90 transition-all duration-200 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-50/90 border border-blue-100/70 text-[#0364FF] flex items-center justify-center group-hover:bg-[#0364FF] group-hover:text-white group-hover:border-[#0364FF] group-hover:shadow-sm group-hover:shadow-blue-500/20 transition-all duration-200 shrink-0 mt-0.5">
                  <NavIcon name={item.iconName} className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#0364FF] transition-colors leading-snug">
                      {item.title}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#0364FF] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0 ml-1" />
                  </div>
                  <p className="text-[12px] text-slate-500 group-hover:text-slate-600 line-clamp-1 leading-normal mt-0.5">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Column 2: Financial Ledger & Scale */}
        <div>
          <div className="flex items-center gap-2 mb-3.5 px-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0364FF]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {ledgerSection.category}
            </span>
          </div>

          <div className="space-y-1">
            {ledgerSection.items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50/90 transition-all duration-200 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-50/90 border border-blue-100/70 text-[#0364FF] flex items-center justify-center group-hover:bg-[#0364FF] group-hover:text-white group-hover:border-[#0364FF] group-hover:shadow-sm group-hover:shadow-blue-500/20 transition-all duration-200 shrink-0 mt-0.5">
                  <NavIcon name={item.iconName} className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#0364FF] transition-colors leading-snug">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-medium text-[#0364FF] bg-blue-50 border border-blue-200/80 px-1.5 py-0.2 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-[#0364FF] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0 ml-1" />
                  </div>
                  <p className="text-[12px] text-slate-500 group-hover:text-slate-600 line-clamp-1 leading-normal mt-0.5">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Portals & Callout Card */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3.5 px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0364FF]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {portalsSection.category}
              </span>
            </div>

            <div className="space-y-1">
              {portalsSection.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50/90 transition-all duration-200 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-xl bg-slate-100/90 border border-slate-200/70 text-slate-600 flex items-center justify-center group-hover:bg-[#0364FF] group-hover:text-white group-hover:border-[#0364FF] group-hover:shadow-sm group-hover:shadow-blue-500/20 transition-all duration-200 shrink-0 mt-0.5">
                    <NavIcon name={item.iconName} className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[13.5px] font-semibold text-slate-900 group-hover:text-[#0364FF] transition-colors leading-snug">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.2 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-[#0364FF] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0 ml-1" />
                    </div>
                    <p className="text-[12px] text-slate-500 group-hover:text-slate-600 line-clamp-1 leading-normal mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Callout Card */}
          <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-blue-50/90 via-blue-50/40 to-indigo-50/60 border border-blue-100/80">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#0364FF]" />
              <span className="text-[12px] font-bold text-slate-900">Custom Enterprise Rails</span>
            </div>
            <p className="text-[11.5px] text-slate-600 leading-relaxed mb-2.5">
              Need high-throughput volume settlement or bespoke CRM webhooks?
            </p>
            <Link
              href="/#contact"
              onClick={onClose}
              className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#0364FF] hover:text-[#0043CC] transition-colors cursor-pointer"
            >
              <span>Speak with partnerships lead</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Bottom Status Strip ─── */}
      <div className="bg-slate-50/70 border-t border-slate-100 px-6 sm:px-8 py-3 flex flex-wrap items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-medium text-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Audited double-entry ledger & SLA
          </span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="hidden sm:inline">SOC2 Type II Certified</span>
        </div>
        <div className="flex items-center gap-4 mt-1 sm:mt-0">
          <Link
            href="/#pricing"
            onClick={onClose}
            className="font-medium text-slate-600 hover:text-[#0364FF] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Compare platform tiers</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
