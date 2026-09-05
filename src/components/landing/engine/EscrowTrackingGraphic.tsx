"use client";

import { motion } from "framer-motion";

export default function EscrowTrackingGraphic() {
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
          <line x1="40" y1="150" x2="500" y2="150" />
          <line x1="80" y1="50" x2="80" y2="250" />
          <line x1="200" y1="50" x2="200" y2="250" />
          <line x1="330" y1="50" x2="330" y2="250" />
          <line x1="460" y1="50" x2="460" y2="250" />
        </g>

        {/* ─── Main Pipeline Connecting Line (Grey) ────────────────────────── */}
        <line
          x1="104"
          y1="150"
          x2="436"
          y2="150"
          stroke="#cbd5e1"
          strokeWidth="2"
        />

        {/* ─── Animated Flow Pulses Moving Along the Pipeline ──────────────── */}
        <motion.circle
          r="3.5"
          fill="#0364FF"
          animate={{
            cx: [104, 178, 306, 436],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        />

        <motion.circle
          r="3"
          fill="#0364FF"
          animate={{
            cx: [104, 178, 306, 436],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 2.8, delay: 1.4, repeat: Infinity, ease: "linear" }}
        />

        {/* ─── Node 1: S2S Attribution Event (80, 150) ────────────────────── */}
        <g transform="translate(80, 150)">
          {/* Signal wave ring */}
          <circle
            r="30"
            fill="none"
            stroke="#0364FF"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.4"
          />
          <circle r="24" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
          <circle r="19" fill="#f8fafc" />
          {/* Server-to-server / Signal wave icon */}
          <circle cx="0" cy="0" r="3" fill="#0364FF" />
          <path
            d="M -5 -3 A 6 6 0 0 1 5 -3"
            stroke="#64748b"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M -8 -7 A 11 11 0 0 1 8 -7"
            stroke="#94a3b8"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />
          <text
            x="0"
            y="42"
            textAnchor="middle"
            fill="#475569"
            fontSize="9.5"
            fontWeight="600"
            letterSpacing="0.04em"
          >
            S2S POSTBACK
          </text>
        </g>

        {/* ─── Node 2: Fraud Screening Gate (200, 150) ────────────────────── */}
        <g transform="translate(200, 150)">
          {/* Diamond scanner outer shape */}
          <rect
            x="-26"
            y="-26"
            width="52"
            height="52"
            rx="8"
            fill="#ffffff"
            stroke="#cbd5e1"
            strokeWidth="1.5"
            transform="rotate(45)"
          />
          <circle r="18" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          {/* Scan Shield / Gate icon */}
          <path
            d="M 0 -6 L 5 -3.5 V 1 C 5 4.5 0 7 0 7 C 0 7 -5 4.5 -5 1 V -3.5 Z"
            stroke="#0364FF"
            strokeWidth="1.4"
            fill="none"
            strokeLinejoin="round"
          />
          <path
            d="M -2 0.5 L 0 2 L 2.5 -0.5"
            stroke="#0364FF"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="0"
            y="46"
            textAnchor="middle"
            fill="#475569"
            fontSize="9.5"
            fontWeight="600"
            letterSpacing="0.04em"
          >
            FRAUD GATE
          </text>
        </g>

        {/* ─── Node 3: Double-Entry USD Ledger (330, 150) ──────────────────── */}
        <g transform="translate(330, 150)">
          {/* Double balance loop */}
          <path
            d="M -22 -14 C -10 -22 10 -22 22 -14"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M -22 14 C -10 22 10 22 22 14"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          <circle r="25" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
          <circle r="20" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          {/* Balanced scales icon */}
          <line x1="0" y1="-7" x2="0" y2="7" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="-7" y1="-4" x2="7" y2="-4" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="-5" cy="0" r="2" fill="#0364FF" />
          <circle cx="5" cy="0" r="2" fill="#0364FF" />
          <text
            x="0"
            y="42"
            textAnchor="middle"
            fill="#475569"
            fontSize="9.5"
            fontWeight="600"
            letterSpacing="0.04em"
          >
            USD LEDGER
          </text>
        </g>

        {/* ─── Node 4: Automated Monthly Payout (460, 150) ─────────────────── */}
        <g transform="translate(460, 150)">
          {/* Outer glowing blue ring */}
          <circle
            r="30"
            fill="none"
            stroke="#0364FF"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.6"
          />
          <circle r="24" fill="#0364FF" stroke="#0364FF" strokeWidth="2" />
          <circle r="19" fill="#0056e0" />
          {/* Currency / Checkmark icon */}
          <text
            x="0"
            y="4.5"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="13"
            fontWeight="800"
            fontFamily="monospace"
          >
            $
          </text>
          <text
            x="0"
            y="44"
            textAnchor="middle"
            fill="#0364FF"
            fontSize="10"
            fontWeight="700"
            letterSpacing="0.04em"
          >
            USD SETTLEMENT
          </text>
        </g>

        {/* ─── Bottom Status Dots (Subtle indicator line at bottom) ────────── */}
        <g transform="translate(270, 260)">
          <rect
            x="-160"
            y="-14"
            width="320"
            height="28"
            rx="14"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="1"
          />
          <circle cx="-130" cy="0" r="3" fill="#0364FF" />
          <text x="-120" y="3.5" fill="#64748b" fontSize="9" fontWeight="500">
            S2S Verified
          </text>

          <circle cx="-30" cy="0" r="3" fill="#0364FF" />
          <text x="-20" y="3.5" fill="#64748b" fontSize="9" fontWeight="500">
            Idempotent Gate
          </text>

          <circle cx="80" cy="0" r="3" fill="#0364FF" />
          <text x="90" y="3.5" fill="#64748b" fontSize="9" fontWeight="500">
            Net Monthly Settled
          </text>
        </g>
      </svg>
    </div>
  );
}
