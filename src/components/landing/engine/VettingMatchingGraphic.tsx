"use client";

import { motion } from "framer-motion";

export default function VettingMatchingGraphic() {
  return (
    <div className="relative w-full h-[300px] sm:h-[340px] lg:h-[370px] rounded-2xl sm:rounded-3xl bg-[#fbfbfd] border border-slate-200/80 p-4 sm:p-6 flex items-center justify-center select-none overflow-hidden font-sans">
      <svg
        viewBox="0 0 540 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[520px] max-h-[350px]"
      >
        {/* ─── Background Subtle Grid Lines ───────────────────────────────── */}
        <g stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4">
          <line x1="40" y1="80" x2="500" y2="80" />
          <line x1="40" y1="160" x2="500" y2="160" />
          <line x1="40" y1="240" x2="500" y2="240" />
          <line x1="90" y1="40" x2="90" y2="280" />
          <line x1="240" y1="40" x2="240" y2="280" />
          <line x1="380" y1="40" x2="380" y2="280" />
        </g>

        {/* ─── Connecting Branch Lines (Grey / Slate) ──────────────────────── */}
        {/* From Candidate (90, 160) to 3 Vetting Nodes (240, 80 / 160 / 240) */}
        <path
          d="M 116 160 C 160 160, 180 80, 218 80"
          stroke="#cbd5e1"
          strokeWidth="1.75"
          fill="none"
        />
        <path
          d="M 116 160 L 218 160"
          stroke="#cbd5e1"
          strokeWidth="1.75"
          fill="none"
        />
        <path
          d="M 116 160 C 160 160, 180 240, 218 240"
          stroke="#cbd5e1"
          strokeWidth="1.75"
          fill="none"
        />

        {/* From 3 Vetting Nodes to Matching Engine Core (380, 160) */}
        <path
          d="M 262 80 C 300 80, 320 160, 354 160"
          stroke="#cbd5e1"
          strokeWidth="1.75"
          fill="none"
        />
        <path
          d="M 262 160 L 354 160"
          stroke="#cbd5e1"
          strokeWidth="1.75"
          fill="none"
        />
        <path
          d="M 262 240 C 300 240, 320 160, 354 160"
          stroke="#cbd5e1"
          strokeWidth="1.75"
          fill="none"
        />

        {/* From Matching Engine (380, 160) to Client Brief (470, 160) */}
        <path
          d="M 406 160 L 446 160"
          stroke="#0364FF"
          strokeWidth="2"
          strokeDasharray="4 3"
          fill="none"
        />

        {/* ─── Animated Pulse Dots traveling along paths ───────────────────── */}
        <motion.circle
          r="3"
          fill="#0364FF"
          animate={{
            cx: [116, 170, 218],
            cy: [160, 100, 80],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          r="3"
          fill="#0364FF"
          animate={{
            cx: [116, 170, 218],
            cy: [160, 160, 160],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 2.2, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          r="3"
          fill="#0364FF"
          animate={{
            cx: [116, 170, 218],
            cy: [160, 220, 240],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 2.2, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Pulse from middle node to center */}
        <motion.circle
          r="3"
          fill="#0364FF"
          animate={{
            cx: [262, 310, 354],
            cy: [160, 160, 160],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 1.8, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ─── Node 1: Candidate Source (Left Circle) ─────────────────────── */}
        <g transform="translate(90, 160)">
          <circle r="26" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
          <circle r="22" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          {/* User / Partner icon */}
          <path
            d="M -7 6 C -7 2 -3 -1 0 -1 C 3 -1 7 2 7 6"
            stroke="#1e293b"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="0" cy="-5" r="3.5" stroke="#1e293b" strokeWidth="1.5" fill="none" />
          <text
            x="0"
            y="42"
            textAnchor="middle"
            fill="#64748b"
            fontSize="10"
            fontWeight="600"
            letterSpacing="0.05em"
          >
            CANDIDATE
          </text>
        </g>

        {/* ─── 3 Vetting Filter Nodes (Middle Column) ─────────────────────── */}
        {/* Top Node: Audience Authenticity */}
        <g transform="translate(240, 80)">
          <circle r="22" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle r="18" fill="#f8fafc" />
          {/* Radar / Signal icon */}
          <circle cx="0" cy="0" r="3" fill="#0364FF" />
          <path
            d="M -6 -4 A 8 8 0 0 1 6 -4"
            stroke="#64748b"
            strokeWidth="1.25"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M -9 -8 A 13 13 0 0 1 9 -8"
            stroke="#94a3b8"
            strokeWidth="1.25"
            strokeLinecap="round"
            fill="none"
          />
          <text
            x="0"
            y="35"
            textAnchor="middle"
            fill="#475569"
            fontSize="9.5"
            fontWeight="500"
          >
            Authenticity
          </text>
        </g>

        {/* Middle Node: Compliance */}
        <g transform="translate(240, 160)">
          <circle r="22" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle r="18" fill="#f8fafc" />
          {/* Shield / Check icon */}
          <path
            d="M 0 -7 L 6 -4 V 1 C 6 5 0 8 0 8 C 0 8 -6 5 -6 1 V -4 Z"
            stroke="#0364FF"
            strokeWidth="1.35"
            fill="none"
            strokeLinejoin="round"
          />
          <path
            d="M -2 0 L -0.5 1.5 L 2.5 -1.5"
            stroke="#0364FF"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="0"
            y="35"
            textAnchor="middle"
            fill="#475569"
            fontSize="9.5"
            fontWeight="500"
          >
            Compliance
          </text>
        </g>

        {/* Bottom Node: Track Record */}
        <g transform="translate(240, 240)">
          <circle r="22" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle r="18" fill="#f8fafc" />
          {/* Chart / Performance icon */}
          <line x1="-5" y1="5" x2="-5" y2="1" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="0" y1="5" x2="0" y2="-2" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="5" y1="5" x2="5" y2="-5" stroke="#0364FF" strokeWidth="1.5" strokeLinecap="round" />
          <text
            x="0"
            y="35"
            textAnchor="middle"
            fill="#475569"
            fontSize="9.5"
            fontWeight="500"
          >
            Track Record
          </text>
        </g>

        {/* ─── Node 3: Central Matching Core (Concentric Circles) ─────────── */}
        <g transform="translate(380, 160)">
          {/* Outer gentle rotating ring */}
          <circle
            r="30"
            fill="none"
            stroke="#0364FF"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.6"
          />
          {/* Outer ring */}
          <circle r="25" fill="#ffffff" stroke="#0364FF" strokeWidth="1.5" />
          {/* Inner blue hub */}
          <circle r="18" fill="#0364FF" />
          {/* Center core symbol: geometric diamond / cross */}
          <path
            d="M -4 -4 L 4 4 M 4 -4 L -4 4"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
          <text
            x="0"
            y="44"
            textAnchor="middle"
            fill="#0364FF"
            fontSize="10"
            fontWeight="600"
            letterSpacing="0.04em"
          >
            MATCH CORE
          </text>
        </g>

        {/* ─── Node 4: Verified Client Brief Match (Right Circle) ─────────── */}
        <g transform="translate(470, 160)">
          <circle r="24" fill="#ffffff" stroke="#0364FF" strokeWidth="2" />
          <circle r="20" fill="#f0f7ff" stroke="#bae6fd" strokeWidth="1" />
          {/* Verified Checkmark */}
          <path
            d="M -5 0 L -1.5 3.5 L 6 -4"
            stroke="#0364FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="0"
            y="42"
            textAnchor="middle"
            fill="#0f172a"
            fontSize="10"
            fontWeight="600"
            letterSpacing="0.04em"
          >
            BRIEF MATCH
          </text>
        </g>
      </svg>
    </div>
  );
}
