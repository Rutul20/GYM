/** biome-ignore-all lint/suspicious/noCommentText: <explanation> */
import { useRef, type FC, type MutableRefObject } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { FIT_ORBIT_OFFICIAL } from "../../data/gymWebsite.data";

type WordProps = {
  readonly children: string;
  readonly range: [number, number];
  readonly progress: MotionValue<number>;
};

const Word: FC<WordProps> = ({ children, range, progress }: WordProps) => {
  const opacity: MotionValue<number> = useTransform(progress, range, [0.2, 1]);
  const y: MotionValue<string> = useTransform(progress, range, ["10px", "0px"]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="mr-[0.3em] inline-block text-white font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wide will-change-transform"
    >
      {children}
    </motion.span>
  );
};

type PillarItem = {
  readonly icon: string;
  readonly label: string;
};

const MISSION_PILLARS: readonly PillarItem[] = [
  { icon: "⚡", label: "World-Class Training" },
  { icon: "🎯", label: "Personalized Solutions" },
  { icon: "🤝", label: "Inclusive Environment" },
];

const VISION_PILLARS: readonly PillarItem[] = [
  { icon: "🏆", label: "Most Trusted Destination" },
  { icon: "🔥", label: "Life Transformations" },
  { icon: "🌱", label: "Community Fitness Culture" },
];

export const ScrollPhilosophy: FC = () => {
  const containerRef: MutableRefObject<HTMLElement | null> = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.35"],
  });

  const words: readonly string[] = FIT_ORBIT_OFFICIAL.mission.split(" ");

  return (
    <section
      id="mission-vision"
      ref={containerRef}
      className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-industrial-950 relative border-b border-industrial-800 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        {/* Section Telemetry Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none border border-industrial-700 bg-industrial-900 text-xs font-mono font-bold uppercase tracking-widest mb-8 text-zinc-300">
          <span className="text-volt">CORE PHILOSOPHY</span>
          <span className="text-zinc-600">// MISSION &amp; VISION</span>
        </div>

        {/* Word-by-word scroll reveal typography */}
        <div className="select-none text-center max-w-5xl mb-16 sm:mb-20 leading-tight">
          {words.map((word: string, i: number) => {
            const start: number = i / words.length;
            const end: number = Math.min(start + 1.5 / words.length, 1);
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </div>

        {/* ── Mission & Vision Dual Industrial Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Card 1: Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="bg-industrial-900 p-8 sm:p-10 border border-industrial-800 flex flex-col justify-between space-y-8 relative overflow-hidden group hover:border-white transition-all duration-300 shadow-xl"
          >
            {/* Top Accent Bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: "linear-gradient(90deg, rgb(0 128 128), #00b3b3)" }}
            />

            <div className="space-y-4">
              <h3 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Our Mission
              </h3>

              <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed">
                {FIT_ORBIT_OFFICIAL.mission}
              </p>
            </div>

            {/* Mission Pillars */}
            <div className="pt-6 border-t border-industrial-800">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-3">
                MISSION PILLARS
              </div>
              <div className="flex flex-wrap gap-2.5">
                {MISSION_PILLARS.map((item: PillarItem, idx: number) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none text-xs font-mono font-semibold bg-industrial-950 border border-industrial-800 text-zinc-200 group-hover:border-zinc-700 transition-colors"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-industrial-900 p-8 sm:p-10 border border-industrial-800 flex flex-col justify-between space-y-8 relative overflow-hidden group hover:border-white transition-all duration-300 shadow-xl"
          >
            {/* Top Accent Bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: "linear-gradient(90deg, rgb(0 128 128), #14b8a6)" }}
            />

            <div className="space-y-4">
              <h3 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Our Vision
              </h3>

              <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                {FIT_ORBIT_OFFICIAL.vision}
              </p>
            </div>

            {/* Vision Pillars */}
            <div className="pt-6 border-t border-industrial-800">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-3">
                VISION PILLARS
              </div>
              <div className="flex flex-wrap gap-2.5">
                {VISION_PILLARS.map((item: PillarItem, idx: number) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none text-xs font-mono font-semibold bg-industrial-950 border border-industrial-800 text-zinc-200 group-hover:border-zinc-700 transition-colors"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScrollPhilosophy;
