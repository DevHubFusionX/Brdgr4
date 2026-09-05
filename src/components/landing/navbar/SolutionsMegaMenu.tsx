"use client";

import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { SOLUTIONS_SECTIONS } from "./navData";
import NavIcon from "./NavIcon";

interface SolutionsMegaMenuProps {
  onClose: () => void;
}

export default function SolutionsMegaMenu({ onClose }: SolutionsMegaMenuProps) {
  const [participantSection, ecosystemsSection, commissionSection] = SOLUTIONS_SECTIONS;

  return (
    <div className="flex flex-col font-sans">
      {/* ─── Top 3-Column Content Area ─── */}
      <div className="p-6 sm:p-7 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {/* Column 1: By Participant */}
        <div>
          <div className="flex items-center gap-2 mb-3.5 px-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0364FF]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {participantSection.category}
            </span>
          </div>

          <div className="space-y-1.5">
            {participantSection.items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50/90 transition-all duration-200 cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50/90 border border-blue-100/70 text-[#0364FF] flex items-center justify-center group-hover:bg-[#0364FF] group-hover:text-white group-hover:border-[#0364FF] group-hover:shadow-sm group-hover:shadow-blue-500/20 transition-all duration-200 shrink-0 mt-0.5">
                  <NavIcon name={item.iconName} className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-semibold text-slate-900 group-hover:text-[#0364FF] transition-colors leading-snug">
                      {item.title}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#0364FF] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0 ml-1" />
                  </div>
                  <p className="text-[12px] text-slate-500 group-hover:text-slate-600 line-clamp-2 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Column 2: Ecosystems */}
        <div>
          <div className="flex items-center gap-2 mb-3.5 px-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0364FF]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {ecosystemsSection.category}
            </span>
          </div>

          <div className="space-y-1.5">
            {ecosystemsSection.items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50/90 transition-all duration-200 cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50/90 border border-blue-100/70 text-[#0364FF] flex items-center justify-center group-hover:bg-[#0364FF] group-hover:text-white group-hover:border-[#0364FF] group-hover:shadow-sm group-hover:shadow-blue-500/20 transition-all duration-200 shrink-0 mt-0.5">
                  <NavIcon name={item.iconName} className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[14px] font-semibold text-slate-900 group-hover:text-[#0364FF] transition-colors leading-snug">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span
                          className={`text-[10px] font-medium px-2 py-0.2 rounded-full border ${
                            item.badge === "Active"
                              ? "text-[#0364FF] bg-blue-50 border-blue-200/80"
                              : item.badge === "Next"
                              ? "text-purple-700 bg-purple-50 border-purple-200/80"
                              : "text-slate-600 bg-slate-100 border-slate-200/80"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-[#0364FF] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0 ml-1" />
                  </div>
                  <p className="text-[12px] text-slate-500 group-hover:text-slate-600 line-clamp-2 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Commission Frameworks & Case Studies */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3.5 px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0364FF]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {commissionSection.category}
              </span>
            </div>

            <div className="space-y-1">
              {commissionSection.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center gap-3 p-2 rounded-2xl hover:bg-slate-50/90 transition-all duration-200 cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-100/90 border border-slate-200/70 text-slate-600 flex items-center justify-center group-hover:bg-[#0364FF] group-hover:text-white group-hover:border-[#0364FF] transition-all duration-200 shrink-0">
                    <NavIcon name={item.iconName} className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-semibold text-slate-900 group-hover:text-[#0364FF] transition-colors">
                        {item.title}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#0364FF] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0 ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Dedicated Solution Callout Card */}
          <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-blue-50/90 via-blue-50/40 to-indigo-50/60 border border-blue-100/80">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#0364FF]" />
              <span className="text-[12px] font-bold text-slate-900">Commission Simulator</span>
            </div>
            <p className="text-[11.5px] text-slate-600 leading-relaxed mb-2.5">
              Model challenge purchase ROAS, CPA thresholds, and volume escalators.
            </p>
            <Link
              href="/#pricing"
              onClick={onClose}
              className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#0364FF] hover:text-[#0043CC] transition-colors cursor-pointer"
            >
              <span>Explore pricing calculator</span>
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
            Guaranteed non-circumvention agreements
          </span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="hidden sm:inline">Automated bilateral e-signatures</span>
        </div>
        <div className="flex items-center gap-4 mt-1 sm:mt-0">
          <Link
            href="/#contact"
            onClick={onClose}
            className="font-medium text-slate-600 hover:text-[#0364FF] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Book architecture review</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
