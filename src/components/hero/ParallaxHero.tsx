/** biome-ignore-all lint/suspicious/noCommentText: <explanation> */
import { useRef, type FC, type MutableRefObject } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useMouseParallax } from "../../hooks/useMouseParallax";
import { MagneticButton } from "../ui/MagneticButton";
import { FIT_ORBIT_OFFICIAL, GYM_METRICS } from "../../data/gymWebsite.data";
import { OlympicPlateGraphic } from "../ui/OlympicPlateGraphic";
import type { MetricStat } from "../../types/gymWebsite.types";
import type { MousePosition } from "../../types";

export const ParallaxHero: FC = () => {
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const mouse: MousePosition = useMouseParallax(0.06);

  // Global scroll driver bound to hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Differential scroll transformations
  const bgTextY: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const plateY: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const plateRotate: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, 120]);
  // const foregroundDumbbellY: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  const hudOpacity: MotionValue<number> = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[108vh] bg-gradient-to-b from-[#060913] via-industrial-950 to-[#070b14] overflow-hidden select-none border-b border-industrial-800 flex flex-col justify-between"
    >
      {/* LAYER 0: Canvas Base Texture & Ambient Radial Teal/Cobalt Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_25%_-10%,rgba(0,128,128,0.22),transparent_70%),radial-gradient(ellipse_70%_50%_at_85%_25%,rgba(37,99,235,0.18),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-pattern-dots opacity-40 pointer-events-none" />

      {/* LAYER 1: Background Kinetic Typography */}
      <motion.div
        style={{ y: bgTextY }}
        className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0 will-change-transform opacity-90"
      >
        <span className="font-display text-[16vw] leading-[0.75] tracking-tighter uppercase font-black text-transparent stroke-industrial-700 [-webkit-text-stroke:2px_#1e293b] text-center">
          FIT ORBIT
        </span>
        <span className="font-display text-[16vw] leading-[0.75] tracking-tighter uppercase font-black text-[#0b1329]/80 text-center">
          VADODARA
        </span>
      </motion.div>

      {/* LAYER 2: Midground Calibrated Olympic Plate */}
      <motion.div
        style={{
          y: plateY,
          rotate: plateRotate,
          x: mouse.x * -0.4,
        }}
        className="absolute top-[15%] -right-10 sm:right-[4%] md:right-[12%] w-[180px] sm:w-[320px] md:w-[480px] aspect-square z-10 pointer-events-none will-change-transform opacity-70 sm:opacity-100"
      >
        <OlympicPlateGraphic
          weight="45"
          unit="LB"
          brandText="FITORBIT"
          diameter="w-full h-full"
        />
      </motion.div>

      {/* LAYER 3: Foreground Isolated Tactical Dumbbell */}
      {/* <motion.div
        style={{
          y: foregroundDumbbellY,
          x: mouse.x * 1.3,
          rotateZ: mouse.normalizedX * 5,
          rotateX: mouse.normalizedY * -7,
        }}
        className="absolute top-[42%] sm:top-[38%] left-[2%] sm:left-[8%] md:left-[16%] w-[210px] sm:w-[340px] md:w-[440px] z-20 pointer-events-none will-change-transform filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)] opacity-80 sm:opacity-100"
      >
        <div className="relative w-full h-36 sm:h-48 md:h-52 bg-gradient-to-r from-industrial-900 via-industrial-700 to-industrial-900 rounded-xl sm:rounded-2xl border-2 border-industrial-700/80 p-3.5 sm:p-5 flex flex-col justify-between shadow-2xl backdrop-blur-sm">
          <div className="flex justify-between items-center border-b border-industrial-800 pb-1.5 sm:pb-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-volt shadow-[0_0_10px_#008080]" />
              <span className="font-mono text-[10px] sm:text-xs text-volt uppercase tracking-wider font-bold">
                HEAVY IRON FACILITY
              </span>
            </div>
            <span className="font-mono text-[9px] sm:text-xs text-zinc-400">GOTRI - VASNA</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
              50<span className="text-volt text-xl sm:text-2xl font-mono ml-1">KG</span>
            </span>
            <span className="font-mono text-[9px] sm:text-[11px] text-zinc-400 uppercase tracking-widest">
              DUMBBELL RACKS
            </span>
          </div>
          <div className="space-y-1 sm:space-y-1.5">
            <div className="flex justify-between font-mono text-[9px] sm:text-[10px] text-zinc-400">
              <span>{FIT_ORBIT_OFFICIAL.daysOpen}</span>
              <span className="text-volt">{FIT_ORBIT_OFFICIAL.morningTimings.split('–')[0].trim()} OPEN</span>
            </div>
            <div className="h-1 sm:h-1.5 w-full bg-industrial-950 rounded-full overflow-hidden">
              <div className="h-full bg-volt w-4/5 shadow-[0_0_8px_#008080]" />
            </div>
          </div>
        </div>
      </motion.div> */}

      {/* LAYER 4: Foreground HUD, Content & Tactile Action */}
      <motion.div
        style={{ opacity: hudOpacity }}
        className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-24 sm:pt-40 flex flex-col justify-between flex-grow pb-16"
      >
        {/* Status Telemetry */}
        <div className="flex flex-wrap gap-2.5 sm:gap-4 items-center">
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-none bg-midnight-900/90 border border-cyan-500/40 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-cyan-200 font-semibold">
              {FIT_ORBIT_OFFICIAL.brandName.toUpperCase()}
            </span>
          </div>
          <span className="font-mono text-[10px] sm:text-xs text-zinc-400 hidden sm:inline tracking-wider">
            // <span className="text-cyan-400 font-semibold">{FIT_ORBIT_OFFICIAL.areaLandmark.toUpperCase()}</span>
          </span>
        </div>

        {/* Hero Narrative & CTA */}
        <div className="max-w-2xl mt-10 sm:mt-16">
          <h1 className="font-display text-4xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase leading-[0.9] font-black">
            WORLD-CLASS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 drop-shadow-[0_0_35px_rgba(6,182,212,0.35)]">
              FITNESS TRAINING
            </span>{" "}
            IN VADODARA.
          </h1>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <MagneticButton
              label={FIT_ORBIT_OFFICIAL.ctaHeadline.toUpperCase()}
              onClick={(): void => {
                window.location.href = `tel:${FIT_ORBIT_OFFICIAL.phone}`;
              }}
            />
          </div>
        </div>

        {/* Live Metrics strip powered by GYM_METRICS data */}
        <div className="mt-16 pt-6 border-t border-industrial-800 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 font-mono">
          {GYM_METRICS.map((metric: MetricStat, idx: number) => {
            const isCyanAccent: boolean = idx % 2 === 1;
            return (
              <div
                key={metric.id}
                className="p-3 sm:p-4 bg-midnight-900/40 border border-industrial-800/80 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="text-zinc-500 text-xs tracking-widest uppercase">{metric.label}</div>
                <div className={`${isCyanAccent ? "text-cyan-400" : "text-volt"} text-2xl font-bold font-display mt-0.5`}>
                  {metric.value}
                  <span className="text-white text-lg font-mono ml-0.5">{metric.suffix}</span>
                </div>
                <div className="text-zinc-400 text-[11px] truncate mt-0.5">{metric.subtext}</div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
