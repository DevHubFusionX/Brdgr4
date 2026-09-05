"use client";

import { motion } from "framer-motion";

export default function ContractingGraphic() {
  return (
    <div className="relative w-full h-[300px] sm:h-[340px] lg:h-[370px] rounded-2xl sm:rounded-3xl bg-[#fbfbfd] border border-slate-200/80 p-4 sm:p-6 flex items-center justify-center select-none overflow-hidden font-sans">
      <svg
        viewBox="0 0 540 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[520px] max-h-[350px]"
      >
        {/* ─── Subtle Background Grid Lines ───────────────────────────────── */}
        <g stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4">
          <line x1="40" y1="95" x2="500" y2="95" />
          <line x1="40" y1="235" x2="500" y2="235" />
          <line x1="120" y1="40" x2="120" y2="280" />
          <line x1="270" y1="40" x2="270" y2="280" />
          <line x1="420" y1="40" x2="420" y2="280" />
        </g>

        {/* ─── Bilateral Handshake Converging Lines ────────────────────────── */}
        {/* From Client (120, 95) to Central Seal (270, 95) */}
        <path
          d="M 148 95 L 236 95"
          stroke="#cbd5e1"
          strokeWidth="2"
          fill="none"
        />

        {/* From Partner (420, 95) to Central Seal (270, 95) */}
        <path
          d="M 392 95 L 304 95"
          stroke="#cbd5e1"
          strokeWidth="2"
          fill="none"
        />

        {/* Animated Bilateral Signal Pulses moving inward */}
        <motion.circle
          r="3"
          fill="#0364FF"
          animate={{
            cx: [148, 236],
            cy: [95, 95],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          r="3"
          fill="#0364FF"
          animate={{
            cx: [392, 304],
            cy: [95, 95],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Vertical Link from Agreement Seal (270, 95) to Lifecycle Rail (270, 235) */}
        <path
          d="M 270 128 L 270 206"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
        />
        <circle cx="270" cy="168" r="3" fill="#cbd5e1" />

        {/* ─── Party A Node: Client (120, 95) ─────────────────────────────── */}
        <g transform="translate(120, 95)">
          <circle r="26" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
          <circle r="21" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          {/* Client icon */}
          <path
            d="M -7 7 C -7 3 -3 0 0 0 C 3 0 7 3 7 7"
            stroke="#0f172a"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="0" cy="-4" r="3" stroke="#0f172a" strokeWidth="1.5" fill="none" />
          <text
            x="0"
            y="42"
            textAnchor="middle"
            fill="#64748b"
            fontSize="10"
            fontWeight="600"
            letterSpacing="0.05em"
          >
            CLIENT
          </text>
        </g>

        {/* ─── Central Node: Bilateral Lock & Agreement (270, 95) ─────────── */}
        <g transform="translate(270, 95)">
          {/* Radiating lock circle */}
          <circle
            r="32"
            fill="none"
            stroke="#0364FF"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.5"
          />
          <circle r="26" fill="#ffffff" stroke="#0364FF" strokeWidth="2" />
          <circle r="20" fill="#f0f7ff" />
          {/* Lock Icon in Blue */}
          <rect
            x="-6"
            y="-2"
            width="12"
            height="9"
            rx="2"
            fill="#0364FF"
          />
          <path
            d="M -4 -2 V -5 C -4 -7.2 -2.2 -9 0 -9 C 2.2 -9 4 -7.2 4 -5 V -2"
            stroke="#0364FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="0" cy="2.5" r="1" fill="#ffffff" />
          <text
            x="0"
            y="45"
            textAnchor="middle"
            fill="#0364FF"
            fontSize="10"
            fontWeight="600"
            letterSpacing="0.04em"
          >
            BILATERAL SEAL
          </text>
        </g>

        {/* ─── Party B Node: Partner (420, 95) ────────────────────────────── */}
        <g transform="translate(420, 95)">
          <circle r="26" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
          <circle r="21" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          {/* Partner icon */}
          <path
            d="M -7 7 C -7 3 -3 0 0 0 C 3 0 7 3 7 7"
            stroke="#0f172a"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="0" cy="-4" r="3" stroke="#0f172a" strokeWidth="1.5" fill="none" />
          <text
            x="0"
            y="42"
            textAnchor="middle"
            fill="#64748b"
            fontSize="10"
            fontWeight="600"
            letterSpacing="0.05em"
          >
            PARTNER
          </text>
        </g>

        {/* ─── Bottom Rail: 4-Stage Lifecycle State Machine ────────────────── */}
        {/* Continuous Horizontal Line Rail */}
        <line
          x1="80"
          y1="235"
          x2="460"
          y2="235"
          stroke="#cbd5e1"
          strokeWidth="2"
        />

        {/* State 1: Proposed (110, 235) */}
        <g transform="translate(110, 235)">
          <circle r="15" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
          <path
            d="M -4 0 L -1 3 L 4 -3"
            stroke="#64748b"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="0"
            y="26"
            textAnchor="middle"
            fill="#64748b"
            fontSize="9"
            fontWeight="600"
            letterSpacing="0.04em"
          >
            PROPOSED
          </text>
        </g>

        {/* State 2: Accepted (215, 235) */}
        <g transform="translate(215, 235)">
          <circle r="15" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
          <path
            d="M -4 0 L -1 3 L 4 -3"
            stroke="#64748b"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="0"
            y="26"
            textAnchor="middle"
            fill="#64748b"
            fontSize="9"
            fontWeight="600"
            letterSpacing="0.04em"
          >
            ACCEPTED
          </text>
        </g>

        {/* State 3: Contracted - Active Target (325, 235) */}
        <g transform="translate(325, 235)">
          {/* Active pulse ring */}
          <circle
            r="22"
            fill="none"
            stroke="#0364FF"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.6"
          />
          <circle r="17" fill="#0364FF" stroke="#0364FF" strokeWidth="2" />
          <path
            d="M -4.5 0 L -1 3.5 L 5 -3"
            stroke="#ffffff"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="0"
            y="28"
            textAnchor="middle"
            fill="#0364FF"
            fontSize="9"
            fontWeight="700"
            letterSpacing="0.04em"
          >
            CONTRACTED
          </text>
        </g>

        {/* State 4: Live (430, 235) */}
        <g transform="translate(430, 235)">
          <circle r="15" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="0" cy="0" r="3" fill="#cbd5e1" />
          <text
            x="0"
            y="26"
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="9"
            fontWeight="500"
            letterSpacing="0.04em"
          >
            LIVE
          </text>
        </g>
      </svg>
    </div>
  );
}
