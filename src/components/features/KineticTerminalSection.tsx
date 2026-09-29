/** biome-ignore-all lint/suspicious/noCommentText: <explanation> */
import { useRef, useId, type FC, type MutableRefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// =========================================================================
// 1. Kinetic Swiss / Stability Exercise Ball SVG Component
// =========================================================================
type ExerciseBallProps = {
  readonly size: string;
  readonly label: string;
};

const ExerciseBallGraphic: FC<ExerciseBallProps> = ({ size, label }: ExerciseBallProps) => {
  const id: string = useId();
  const cleanId: string = id.replace(/:/g, "_");

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]">
      <svg
        viewBox="0 0 320 320"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Spherical 3D Ball Lighting Gradient */}
          <radialGradient id={`ball-grad-${cleanId}`} cx="38%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.4" />
            <stop offset="25%" stopColor="#008080" />
            <stop offset="65%" stopColor="#0f172a" />
            <stop offset="90%" stopColor="#08080a" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>

          {/* Specular Highlight */}
          <radialGradient id={`ball-highlight-${cleanId}`} cx="35%" cy="28%" r="35%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Sphere */}
        <circle cx="160" cy="160" r="140" fill={`url(#ball-grad-${cleanId})`} stroke="#14b8a6" strokeWidth="2" strokeOpacity="0.3" />

        {/* Anti-Burst Concentric Grip Ridges (3D Equator Lines) */}
        <ellipse cx="160" cy="85" rx="98" ry="22" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.2" fill="none" />
        <ellipse cx="160" cy="120" rx="128" ry="28" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.25" fill="none" />
        <ellipse cx="160" cy="160" rx="138" ry="32" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.3" fill="none" />
        <ellipse cx="160" cy="200" rx="128" ry="28" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.25" fill="none" />
        <ellipse cx="160" cy="235" rx="98" ry="22" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.2" fill="none" />

        {/* Specular Light Reflection Layer */}
        <circle cx="160" cy="160" r="140" fill={`url(#ball-highlight-${cleanId})`} pointerEvents="none" />

        {/* Center Recessed Athletic Stamp */}
        <circle cx="160" cy="160" r="46" fill="#08080a" fillOpacity="0.85" stroke="rgb(0 128 128)" strokeWidth="1.5" strokeDasharray="4 2" />
        <text
          x="160"
          y="142"
          textAnchor="middle"
          className="fill-zinc-400 font-mono text-[8px] font-bold tracking-widest uppercase"
        >
          {label}
        </text>
        <text
          x="160"
          y="166"
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-white font-display text-3xl font-black tracking-tight"
        >
          {size}
        </text>
      </svg>
    </div>
  );
};

// =========================================================================
// 2. Rolled Yoga / Performance Mat SVG Component
// =========================================================================
type YogaMatProps = {
  readonly density: string;
};

const RolledYogaMatGraphic: FC<YogaMatProps> = ({ density }: YogaMatProps) => {
  const id: string = useId();
  const cleanId: string = id.replace(/:/g, "_");

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]">
      <svg
        viewBox="0 0 320 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`mat-body-${cleanId}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="20%" stopColor="#008080" />
            <stop offset="70%" stopColor="#134e4a" />
            <stop offset="100%" stopColor="#042f2e" />
          </linearGradient>

          <radialGradient id={`mat-spiral-${cleanId}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#042f2e" />
            <stop offset="60%" stopColor="#0f766e" />
            <stop offset="100%" stopColor="#14b8a6" />
          </radialGradient>

          {/* Ribbed pattern */}
          <pattern id={`mat-texture-${cleanId}`} width="8" height="8" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Mat Cylindrical Body */}
        <rect x="50" y="55" width="220" height="90" rx="8" fill={`url(#mat-body-${cleanId})`} stroke="#115e59" strokeWidth="2" />
        <rect x="50" y="55" width="220" height="90" rx="8" fill={`url(#mat-texture-${cleanId})`} opacity="0.6" />

        {/* Top Edge Specular Lighting Highlight */}
        <line x1="50" y1="62" x2="270" y2="62" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.4" />

        {/* Left Spiral Roll End-Cap */}
        <ellipse cx="50" cy="100" rx="24" ry="45" fill={`url(#mat-spiral-${cleanId})`} stroke="#14b8a6" strokeWidth="2.5" />
        {/* Foam spiral roll rings */}
        <ellipse cx="50" cy="100" rx="17" ry="32" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
        <ellipse cx="50" cy="100" rx="10" ry="18" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
        <ellipse cx="50" cy="100" rx="4" ry="7" fill="#042f2e" />

        {/* Nylon Binding Harness Straps */}
        <rect x="90" y="52" width="16" height="96" rx="3" fill="#08080a" stroke="#272733" strokeWidth="1.5" />
        <rect x="92" y="90" width="12" height="18" rx="2" fill="#3f3f46" stroke="#71717a" strokeWidth="1" />

        <rect x="210" y="52" width="16" height="96" rx="3" fill="#08080a" stroke="#272733" strokeWidth="1.5" />
        <rect x="212" y="90" width="12" height="18" rx="2" fill="#3f3f46" stroke="#71717a" strokeWidth="1" />

        {/* Tactical Brand Patch on Mat */}
        <rect x="135" y="80" width="50" height="38" rx="3" fill="#08080a" stroke="rgb(0 128 128)" strokeWidth="1.5" />
        <text x="160" y="94" textAnchor="middle" className="fill-zinc-300 font-mono text-[7px] font-bold tracking-widest uppercase">
          FITORBIT
        </text>
        <text x="160" y="108" textAnchor="middle" className="fill-volt font-mono text-[8.5px] font-black tracking-widest uppercase">
          {density}
        </text>
      </svg>
    </div>
  );
};

// =========================================================================
// 3. Pro Athletic Training Sneaker / Gym Shoe SVG Component
// =========================================================================
const GymShoeGraphic: FC = () => {
  const id: string = useId();
  const cleanId: string = id.replace(/:/g, "_");

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]">
      <svg
        viewBox="0 0 320 180"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`shoe-upper-${cleanId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#272733" />
            <stop offset="50%" stopColor="#141419" />
            <stop offset="100%" stopColor="#08080a" />
          </linearGradient>

          <linearGradient id={`shoe-sole-${cleanId}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#e4e4e7" />
            <stop offset="85%" stopColor="#a1a1aa" />
            <stop offset="100%" stopColor="#008080" />
          </linearGradient>
        </defs>

        {/* Sneaker Upper Silhouette */}
        <path
          d="M 50,118 C 45,95 55,75 80,68 C 110,60 140,82 175,90 C 215,98 250,105 275,115 C 285,120 285,130 270,135 L 50,135 Z"
          fill={`url(#shoe-upper-${cleanId})`}
          stroke="#3d3d4e"
          strokeWidth="2"
        />

        {/* Heel Collar & Padded Ankle Notch */}
        <path
          d="M 72,70 C 85,55 105,52 118,65 C 112,80 95,85 75,75"
          fill="#08080a"
          stroke="#008080"
          strokeWidth="1.5"
        />

        {/* Aerodynamic Speed Slashes in Teal Volt */}
        <path d="M 125,82 L 155,122" stroke="rgb(0 128 128)" strokeWidth="4" strokeLinecap="round" />
        <path d="M 145,86 L 175,122" stroke="rgb(0 128 128)" strokeWidth="4" strokeLinecap="round" />
        <path d="M 165,92 L 195,122" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.8" />

        {/* Eyelets and Laces */}
        <circle cx="150" cy="85" r="2.5" fill="#ffffff" />
        <circle cx="168" cy="90" r="2.5" fill="#ffffff" />
        <circle cx="186" cy="95" r="2.5" fill="#ffffff" />
        <circle cx="204" cy="100" r="2.5" fill="#ffffff" />
        <path d="M 148,84 Q 165,82 186,95 Q 200,98 215,108" stroke="#ffffff" strokeWidth="2" fill="none" strokeOpacity="0.9" />

        {/* Cushion Foam Midsole */}
        <path
          d="M 40,135 Q 160,138 278,135 Q 288,142 278,152 Q 160,154 36,150 Q 34,142 40,135 Z"
          fill={`url(#shoe-sole-${cleanId})`}
          stroke="#71717a"
          strokeWidth="1.5"
        />

        {/* High-Traction Outsole Rubber Grip Treads */}
        <path
          d="M 40,150 L 275,152 L 270,160 Q 160,163 42,158 Z"
          fill="#08080a"
          stroke="rgb(0 128 128)"
          strokeWidth="1.5"
        />
        {/* Flex grooves */}
        <line x1="75" y1="151" x2="73" y2="158" stroke="#14b8a6" strokeWidth="2" />
        <line x1="110" y1="151" x2="108" y2="159" stroke="#14b8a6" strokeWidth="2" />
        <line x1="150" y1="152" x2="148" y2="160" stroke="#14b8a6" strokeWidth="2" />
        <line x1="190" y1="152" x2="188" y2="160" stroke="#14b8a6" strokeWidth="2" />
        <line x1="230" y1="152" x2="228" y2="159" stroke="#14b8a6" strokeWidth="2" />
      </svg>
    </div>
  );
};

// =========================================================================
// 4. Tactical Gym Stickers, Badges & Micro-Graphics
// =========================================================================

// Spinning Circular Seal Stamp (Vector / GIF-like kinetic badge)
type SpinningSealProps = {
  readonly text: string;
  readonly centerLabel: string;
};

const SpinningSeal: FC<SpinningSealProps> = ({ text, centerLabel }: SpinningSealProps) => {
  const id: string = useId();
  const cleanId: string = id.replace(/:/g, "_");

  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center select-none filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
      {/* Outer Rotating Text Path */}
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full animate-[spin_18s_linear_infinite]"
        aria-hidden="true"
      >
        <path
          id={`circle-path-${cleanId}`}
          d="M 60, 60 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
          fill="none"
        />
        <text className="font-mono text-[8.5px] uppercase font-bold tracking-[0.22em] fill-cyan-200/80">
          <textPath href={`#circle-path-${cleanId}`} startOffset="0%">
            {text} • {text} •
          </textPath>
        </text>
      </svg>

      {/* Center Badge Core */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#0c1a36] to-[#060a14] border border-cyan-500/40 flex flex-col items-center justify-center p-2 text-center shadow-inner">
        <span className="font-display font-black text-[10px] sm:text-xs text-cyan-300 uppercase tracking-tight leading-tight">
          {centerLabel}
        </span>
      </div>
    </div>
  );
};

// =========================================================================
// 5. Main Pre-Footer Kinetic Section Component
// =========================================================================
export const KineticTerminalSection: FC = () => {
  const containerRef: MutableRefObject<HTMLElement | null> = useRef<HTMLElement | null>(null);
  const leftItemRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const rightItemRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const centerContentRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const badgeFloatRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

  useGSAP(
    (): void => {
      if (
        !containerRef.current ||
        !leftItemRef.current ||
        !rightItemRef.current ||
        !centerContentRef.current
      ) {
        return;
      }

      const tl: gsap.core.Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      // Left Exercise Ball drifts smoothly on scroll without rotation
      tl.to(
        leftItemRef.current,
        {
          yPercent: -25,
          xPercent: -4,
          ease: "none",
        },
        0
      );

      // Right Yoga Mat & Shoe combo drifts smoothly on scroll without rotation
      tl.to(
        rightItemRef.current,
        {
          yPercent: -20,
          xPercent: 4,
          ease: "none",
        },
        0
      );

      // Badge floats with vertical parallax without rotation
      if (badgeFloatRef.current) {
        tl.to(
          badgeFloatRef.current,
          {
            yPercent: -35,
            ease: "none",
          },
          0
        );
      }

      // Center content counter-drift
      tl.to(
        centerContentRef.current,
        {
          yPercent: 10,
          ease: "none",
        },
        0
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[50vh] sm:min-h-[70vh] md:min-h-screen py-10 sm:py-16 md:py-0 bg-[radial-gradient(ellipse_at_center,_#122759_0%,_#080e22_50%,_#03050a_100%)] flex items-center justify-center overflow-hidden border-t border-industrial-800"
    >
      {/* Grand Concentric Arena Radar Rings */}
      <div className="absolute w-[950px] h-[950px] rounded-full border border-cyan-500/10 pointer-events-none" />
      <div className="absolute w-[700px] h-[700px] rounded-full border border-dashed border-cobalt/25 pointer-events-none animate-[spin_90s_linear_infinite]" />
      <div className="absolute w-[450px] h-[450px] rounded-full border border-cyan-400/15 pointer-events-none" />

      {/* Background dual atmospheric glow: cobalt + cyan */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cobalt/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating Spinning Seal Badge: Mid-Left Floating Sticker */}
      <div
        ref={badgeFloatRef}
        className="absolute bottom-16 left-8 sm:left-24 hidden lg:block z-20 will-change-transform"
      >
        <SpinningSeal text="FITORBIT GYM • RECOVERY & POWER" centerLabel="VERIFIED GEAR" />
      </div>

      {/* ======================================================== */}
      {/* LEFT EQUIPMENT: Kinetic Swiss Stability Ball             */}
      {/* ======================================================== */}
      <div
        ref={leftItemRef}
        className="absolute -left-12 sm:-left-4 md:left-8 lg:left-14 2xl:left-24 w-40 h-40 xs:w-48 xs:h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[320px] lg:h-[320px] 2xl:w-[420px] 2xl:h-[420px] z-10 will-change-transform pointer-events-none opacity-30 sm:opacity-75 md:opacity-100"
      >
        <ExerciseBallGraphic size="55CM" label="FITORBIT" />
      </div>

      {/* ======================================================== */}
      {/* CENTER INTERACTIVE CONTENT                               */}
      {/* ======================================================== */}
      <div
        ref={centerContentRef}
        className="relative z-20 text-center px-4 sm:px-6 max-w-4xl 2xl:max-w-6xl mx-auto will-change-transform py-4 sm:py-10 md:py-20"
      >
        {/* Telemetry Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-cobalt/15 border border-cyan-500/40 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs md:text-sm font-mono font-bold tracking-[0.3em] uppercase text-cyan-300">
            // TOTAL SPECTRUM // RECOVERY &amp; POWER
          </span>
        </div>

        {/* Display Typography */}
        <h2 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl 2xl:text-[9.5rem] font-display font-black uppercase tracking-tight text-white leading-[0.88]">
          MOVE BETTER.<br />
          <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(56,189,248,0.45)]">
            LIVE STRONGER.
          </span>
        </h2>

        <p className="mt-4 sm:mt-6 text-zinc-300 font-sans text-xs sm:text-base 2xl:text-lg max-w-xl 2xl:max-w-2xl mx-auto leading-relaxed">
          From heavy free-weight hypertrophy and high-traction sprint turf to guided yoga, core stability balls, and athletic agility conditioning.
        </p>
      </div>

      {/* ======================================================== */}
      {/* RIGHT EQUIPMENT: Rolled Yoga Mat & Gym Trainer Duo       */}
      {/* ======================================================== */}
      <div
        ref={rightItemRef}
        className="absolute -right-14 sm:-right-4 md:right-8 lg:right-14 2xl:right-24 w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-[360px] md:h-[360px] 2xl:w-[460px] 2xl:h-[460px] z-10 will-change-transform pointer-events-none flex flex-col items-center justify-center gap-2 opacity-30 sm:opacity-75 md:opacity-100"
      >
        {/* Rolled Yoga Mat */}
        <div className="w-44 h-28 xs:w-52 xs:h-32 sm:w-64 sm:h-40 md:w-72 md:h-44 2xl:w-80 2xl:h-48 transform -rotate-12">
          <RolledYogaMatGraphic density="6MM PRO" />
        </div>

        {/* Pro Gym Sneaker Graphic */}
        <div className="w-36 h-20 xs:w-44 xs:h-24 sm:w-52 sm:h-32 md:w-64 md:h-36 2xl:w-72 2xl:h-40 transform rotate-6 translate-x-4 -translate-y-4">
          <GymShoeGraphic />
        </div>
      </div>
    </section>
  );
};

export default KineticTerminalSection;
