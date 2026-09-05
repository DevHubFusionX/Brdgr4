"use client";

import { motion } from "framer-motion";

const LOGO_PATHS = [
  // 0: Path 6 - Top-Left Node & Circuit Track
  {
    id: "top-left",
    d: "M90.6684 90.1818L90.4292 91.378L90.5249 92.1914L90.7641 92.8134L91.0991 93.3397L91.6254 93.866L92.2952 94.2488L93.0608 94.4402H93.7785L94.2569 94.3445L94.7354 94.1531L95.2617 93.8182L95.9316 93.0526L96.2187 92.4785L96.3144 91.9522L96.4101 91.8565H107.128L107.271 92V96.9282L107.558 97.2153H107.893L108.085 97.0718L108.18 96.8804V92.0479L107.989 91.4258L107.702 91.1388L107.415 90.9952L96.4101 90.9474L96.3144 90.8517V90.6125L95.9794 89.7991L95.5488 89.2249L94.9268 88.7464L94.544 88.555L93.8742 88.3636H93.0129L92.1038 88.6507L91.5775 88.9857L91.0991 89.4641L90.6684 90.1818ZM93.3957 89.177L94.1613 89.3206L94.7833 89.7034L95.2617 90.2775L95.5488 91.1388L95.501 91.9522L95.0703 92.7656L94.4005 93.3397L93.6828 93.579H93.2043L92.7737 93.4833L92.1517 93.1483L91.6254 92.5742L91.3861 92.0957L91.2904 91.7129V91.0909L91.3861 90.7081L91.7211 90.0861L92.4866 89.4163L93.3957 89.177Z",
    delay: 0.15,
    duration: 0.45,
  },
  // 1: Path 2 - Mid-Left Horizontal Connector
  {
    id: "mid-left",
    d: "M89.2329 103.34L89.2808 103.627L89.52 103.818H96.8406L97.0798 103.627L97.1276 103.483L97.0798 103.196L96.7449 102.957H89.6157L89.4243 103.053L89.2329 103.34Z",
    delay: 0.35,
    duration: 0.35,
  },
  // 2: Path 3 - Main Central Circuit Grid & Stepped Corridor
  {
    id: "center-grid",
    d: "M112.2 99.5598L112.008 99.0813L111.578 98.6029L111.338 98.4593L110.764 98.3158H104.544L104.066 98.4593L103.539 98.8421L103.204 99.512L103.156 103.77L103.061 103.866H100.812L100.716 103.77L100.668 100.038L100.429 99.4641L100.19 99.1292L99.5201 98.6986L99.1852 98.6029L86.9364 98.6507L86.4101 98.89L86.0273 99.2249L85.7402 99.6555L85.5488 100.325L85.5967 106.785L85.8359 107.359L86.3144 107.885L86.8407 108.172L87.3192 108.268H96.6972L99.855 111.426L100.286 111.474L100.621 111.234L100.716 110.947V104.823L100.812 104.727H103.061L103.156 104.823L103.204 107.885L103.444 108.459L103.922 108.89L104.448 109.081L111.099 109.034L111.578 108.794L111.96 108.411L112.2 107.837V99.5598ZM86.6015 99.8947L86.8407 99.6555L87.2235 99.4641H99.0895L99.3766 99.6077L99.6637 99.8947L99.855 100.325V109.99L99.7594 110.086L97.2235 107.502L97.0321 107.407H87.3192L86.9364 107.263L86.6015 106.928L86.4101 106.545V100.278L86.6015 99.8947ZM104.305 99.3206L104.64 99.177H110.334L110.908 99.2249L111.29 99.5598L111.386 99.7991V107.598L111.29 107.837L111.003 108.124L110.812 108.22H104.592L104.353 108.124L104.113 107.885L104.018 107.694V99.7034L104.305 99.3206Z",
    delay: 0.55,
    duration: 0.55,
  },
  // 3: Path 1 - Bottom Bridge & Nodes
  {
    id: "bottom-bridge",
    d: "M107.224 110.278V112.622L107.415 113.1L107.798 113.388L120.334 113.435L120.429 113.531V113.818L120.573 114.249L121.051 115.062L121.769 115.684L122.726 116.067H123.97L124.449 115.923L125.118 115.541L125.501 115.206L125.932 114.632L126.123 114.249L126.315 113.579V112.431L126.123 111.809L125.74 111.139L125.358 110.708L124.927 110.373L124.449 110.134L123.779 109.943H122.965L122.535 110.038L121.578 110.517L120.908 111.187L120.525 111.952L120.429 112.478L120.334 112.574H108.228L108.085 112.431V110.23L107.893 109.99L107.606 109.943L107.463 109.99L107.224 110.278ZM123.157 110.804L123.827 110.852L124.688 111.282L125.214 111.904L125.501 112.67V113.388L125.358 113.866L125.118 114.297L124.496 114.919L124.018 115.158L123.635 115.254H123.109L122.678 115.158L122.008 114.775L121.482 114.153L121.195 113.292L121.243 112.526L121.386 112.096L121.626 111.713L122.295 111.091L123.157 110.804Z",
    delay: 0.8,
    duration: 0.45,
  },
  // 4: Path 4 - Mid-Right Horizontal Link
  {
    id: "mid-right",
    d: "M117.894 98.0287V98.268L117.989 98.4593L118.133 98.555H125.74L125.98 98.3636L126.028 98.2201L125.98 97.933L125.74 97.7416H118.181L117.894 98.0287Z",
    delay: 1.0,
    duration: 0.35,
  },
  // 5: Path 5 - Top-Right Terminal Track
  {
    id: "top-right",
    d: "M114.448 94.1531L114.161 94.9187V105.636L114.305 105.923L114.448 106.019H115.022L118.276 103.1H128.037L128.946 102.766L129.52 102.191L129.711 101.809L129.855 101.234V95.0622L129.711 94.488L129.52 94.1053L129.089 93.6268L128.707 93.3876L128.276 93.244L127.319 93.1962H116.506L115.74 93.244L115.309 93.3876L114.975 93.579L114.448 94.1531ZM115.166 94.6316L115.501 94.2967L115.884 94.1053H128.085L128.42 94.2488L128.754 94.5359L128.994 95.0622V101.234L128.85 101.617L128.563 101.952L128.085 102.191H118.037L117.558 102.526L115.118 104.775L114.975 104.632L115.022 94.9665L115.166 94.6316Z",
    delay: 1.15,
    duration: 0.4,
  },
];

export default function ConnectingLogoAnimation() {
  return (
    <div className="inline-flex items-center gap-3 sm:gap-4 select-none">
      {/* ─── Geometric Circuit Icon Animation ─── */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="84.35 87.16 46.7 30.1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 sm:h-12 md:h-14 w-auto drop-shadow-xs"
          aria-hidden="true"
        >
          {/* 1. Base Blueprint Layer: Subtle Muted Gray Tracks (Initial State) */}
          <g
            fill="#CBD5E1"
            stroke="#CBD5E1"
            strokeWidth="0.35"
            strokeLinejoin="round"
            shapeRendering="geometricPrecision"
            className="opacity-60"
          >
            {LOGO_PATHS.map((path) => (
              <path
                key={`base-${path.id}`}
                d={path.d}
                fillRule="evenodd"
                clipRule="evenodd"
              />
            ))}
          </g>

          {/* 2. Connecting Lines Layer: Sequentially links and locks into solid black */}
          <g
            strokeLinejoin="round"
            shapeRendering="geometricPrecision"
          >
            {LOGO_PATHS.map((path) => (
              <motion.path
                key={`anim-${path.id}`}
                d={path.d}
                fillRule="evenodd"
                clipRule="evenodd"
                initial={{
                  pathLength: 0,
                  stroke: "#000000",
                  strokeWidth: 0.6,
                  strokeOpacity: 0,
                  fill: "#000000",
                  fillOpacity: 0,
                }}
                animate={{
                  pathLength: [0, 0.6, 1],
                  strokeOpacity: [0, 1, 1],
                  fillOpacity: [0, 0.3, 1],
                }}
                transition={{
                  duration: path.duration,
                  delay: path.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}
          </g>

          {/* 3. Subtle Connection Spark Pulse (Ripples when complete at 1.4s) */}
          <motion.rect
            x="84"
            y="87"
            width="47"
            height="31"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.15, 0] }}
            transition={{ delay: 1.45, duration: 0.35, ease: "easeOut" }}
          />
        </svg>
      </div>

      {/* ─── Wordmark Animation: Transitions from subtle gray to deep solid black ─── */}
      <motion.span
        initial={{ color: "#CBD5E1" }}
        animate={{ color: "#000000" }}
        transition={{ delay: 1.35, duration: 0.45, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-[34px] font-bold tracking-tight leading-none"
      >
        BRDGR
      </motion.span>
    </div>
  );
}
