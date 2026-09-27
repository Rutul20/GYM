import { useId, type FC } from "react";

export type OlympicPlateGraphicProps = {
  readonly weight: string;
  readonly unit?: string;
  readonly brandText?: string;
  readonly className?: string;
  readonly diameter?: string;
  readonly isPrimaryVolt?: boolean;
};

/**
 * Pixel-accurate Calibrated Competition Olympic Bumper Plate SVG.
 * Matches the tactical matte black industrial rubber bumper rim,
 * four perimeter grip cutouts, matte charcoal disc face,
 * brushed stainless steel center sleeve, and crisp white weight typography.
 */
export const OlympicPlateGraphic: FC<OlympicPlateGraphicProps> = ({
  weight,
  unit = "LB",
  brandText = "FITORBIT",
  className = "",
  diameter = "w-full h-full",
}: OlympicPlateGraphicProps) => {
  const id: string = useId();
  const cleanId: string = id.replace(/:/g, "_");

  const leftArcId: string = `plate-left-arc-${cleanId}`;
  const rightArcId: string = `plate-right-arc-${cleanId}`;

  // Format weight and unit label for right arc (e.g. "45 LB", "25 LB", "50 KG")
  const cleanUnit: string = unit.includes("//") ? unit.split("//")[0].trim() : unit;
  const weightLabel: string = `${weight} ${cleanUnit}`;

  return (
    <div
      className={`relative rounded-full flex items-center justify-center select-none filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.98)] drop-shadow-[0_0_35px_rgba(0,0,0,0.85)] ${diameter} ${className}`}
    >
      <svg
        viewBox="0 0 360 360"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Deep Matte Black Industrial Rubber Bumper Rim Radial Gradient */}
          <radialGradient id={`bumper-rim-${cleanId}`} cx="50%" cy="50%" r="50%">
            <stop offset="68%" stopColor="#08080a" />
            <stop offset="74%" stopColor="#141418" />
            <stop offset="82%" stopColor="#222228" />
            <stop offset="89%" stopColor="#2a2a33" />
            <stop offset="94%" stopColor="#1e1e24" />
            <stop offset="98%" stopColor="#111114" />
            <stop offset="100%" stopColor="#08080a" />
          </radialGradient>

          {/* Inner Disc Face Radial Gradient (Matte Charcoal with soft offset light) */}
          <radialGradient id={`inner-face-${cleanId}`} cx="44%" cy="40%" r="62%">
            <stop offset="0%" stopColor="#222226" />
            <stop offset="35%" stopColor="#161619" />
            <stop offset="75%" stopColor="#0d0d0f" />
            <stop offset="100%" stopColor="#070709" />
          </radialGradient>

          {/* Center Stainless Steel Collar Metallic Linear Gradient */}
          <linearGradient id={`steel-collar-${cleanId}`} x1="15%" y1="10%" x2="85%" y2="90%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="25%" stopColor="#94a3b8" />
            <stop offset="48%" stopColor="#e2e8f0" />
            <stop offset="72%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>

          {/* Left Arc for Brand Specification (centered dead-on at 9 o'clock / 180°) */}
          <path
            id={leftArcId}
            d="M 117,255 A 98,98 0 0,1 117,105"
            fill="none"
          />

          {/* Right Arc for Weight & Unit (centered dead-on at 3 o'clock / 0°, exactly 180° opposite) */}
          <path
            id={rightArcId}
            d="M 243,105 A 98,98 0 0,1 243,255"
            fill="none"
          />
        </defs>

        {/* 1. Outer Dark Rim Perimeter */}
        <circle cx="180" cy="180" r="177" fill="#050507" stroke="#1f1f24" strokeWidth="2" />

        {/* 2. Deep Black Rubber Bumper Rim */}
        <circle
          cx="180"
          cy="180"
          r="174"
          fill={`url(#bumper-rim-${cleanId})`}
          stroke="#272730"
          strokeWidth="1.5"
        />

        {/* Subtle rim highlight reflection */}
        <circle
          cx="180"
          cy="180"
          r="160"
          fill="none"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1"
        />

        {/* 3. Perimeter Grip Notches / Oblong Capsule Cutouts (at 12, 3, 6, 9 o'clock) */}
        {/* Top Notch (12 o'clock) */}
        <rect
          x="160"
          y="23"
          width="40"
          height="14"
          rx="7"
          fill="#08080a"
          stroke="#2b2b35"
          strokeWidth="1.5"
        />
        {/* Bottom Notch (6 o'clock) */}
        <rect
          x="160"
          y="323"
          width="40"
          height="14"
          rx="7"
          fill="#08080a"
          stroke="#2b2b35"
          strokeWidth="1.5"
        />
        {/* Left Notch (9 o'clock) */}
        <rect
          x="23"
          y="160"
          width="14"
          height="40"
          rx="7"
          fill="#08080a"
          stroke="#2b2b35"
          strokeWidth="1.5"
        />
        {/* Right Notch (3 o'clock) */}
        <rect
          x="323"
          y="160"
          width="14"
          height="40"
          rx="7"
          fill="#08080a"
          stroke="#2b2b35"
          strokeWidth="1.5"
        />

        {/* 4. Groove Line Intersecting Notches */}
        <circle cx="180" cy="180" r="148" fill="none" stroke="#18181f" strokeWidth="2" />

        {/* 5. Inner Matte Charcoal Disc Face */}
        <circle cx="180" cy="180" r="140" fill={`url(#inner-face-${cleanId})`} stroke="#0a0a0c" strokeWidth="2" />
        <circle cx="180" cy="180" r="135" fill="none" stroke="#25252b" strokeWidth="1" strokeOpacity="0.5" />

        {/* 6. Curved Text Layer */}
        {/* Left Arc: Brand Specification (Off-White Tracked Typography) */}
        <text
          className="fill-zinc-300 font-mono text-[11px] sm:text-[12px] font-black uppercase tracking-[0.32em]"
          dominantBaseline="central"
        >
          <textPath href={`#${leftArcId}`} startOffset="50%" textAnchor="middle">
            {brandText}
          </textPath>
        </text>

        {/* Right Arc: Calibrated Weight & Unit (Crisp White High-Contrast Typography) */}
        <text
          className="font-display text-[15px] sm:text-[17px] font-black uppercase tracking-[0.24em] fill-white"
          dominantBaseline="central"
          style={{ filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.35))" }}
        >
          <textPath href={`#${rightArcId}`} startOffset="50%" textAnchor="middle">
            {weightLabel}
          </textPath>
        </text>

        {/* 7. Center Olympic Sleeve Collar (Brushed Stainless Steel Bushing) */}
        {/* Dark Outer Recessed Seat */}
        <circle cx="180" cy="180" r="54" fill="#141518" stroke="#22242a" strokeWidth="2" />

        {/* Steel Outer Bevel & Core Collar */}
        <circle
          cx="180"
          cy="180"
          r="50"
          fill={`url(#steel-collar-${cleanId})`}
          stroke="#64748b"
          strokeWidth="2"
        />

        {/* Precision Lathed Machined Rings */}
        <circle cx="180" cy="180" r="46" fill="none" stroke="#f1f5f9" strokeWidth="1" strokeOpacity="0.75" />
        <circle cx="180" cy="180" r="32" fill="none" stroke="#334155" strokeWidth="2" />

        {/* 8. Hollow Barbell Sleeve Center Bore Hole */}
        <circle cx="180" cy="180" r="28" fill="#040405" stroke="#000000" strokeWidth="2.5" />
        <circle cx="180" cy="180" r="25" fill="#000000" />
      </svg>
    </div>
  );
};

export default OlympicPlateGraphic;
