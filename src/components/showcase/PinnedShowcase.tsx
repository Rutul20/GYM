/** biome-ignore-all lint/suspicious/noCommentText: <explanation> */
import { useRef, type FC, type MutableRefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CORE_PROGRAMS } from "../../data/gymWebsite.data";
import type { ProgramHighlight } from "../../types/gymWebsite.types";

gsap.registerPlugin(ScrollTrigger);

type ProgramVisualMeta = {
  readonly imageUrl: string;
  readonly code: string;
  readonly targetAudience: string;
  readonly weeklyBatches: string;
};

const PROGRAM_METADATA: Record<string, ProgramVisualMeta> = {
  "prog-strength": {
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    code: "STR-01",
    targetAudience: "Men & Women // All Levels",
    weeklyBatches: "Daily Morning & Evening",
  },
  "prog-cardio": {
    imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1200&auto=format&fit=crop",
    code: "CRD-02",
    targetAudience: "Fat Loss & Aerobic Conditioning",
    weeklyBatches: "Continuous Floor Access",
  },
  "prog-crossfit": {
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    code: "XFT-03",
    targetAudience: "High-Energy Athletic Agility",
    weeklyBatches: "Dedicated Turf Sessions",
  },
  "prog-rehab": {
    imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop",
    code: "RHB-04",
    targetAudience: "Post-Injury & Joint Mobility",
    weeklyBatches: "Physio-Supervised Batches",
  },
  "prog-nutrition": {
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    code: "NUT-05",
    targetAudience: "Custom Diet & Body Recomp",
    weeklyBatches: "Weekly Progress Audits",
  },
  "prog-yoga-zumba": {
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    code: "YZB-06",
    targetAudience: "Flexibility & Mental Balance",
    weeklyBatches: "Scheduled Group Classes",
  },
};

export const PinnedShowcase: FC = () => {
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const trackRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

  useGSAP(
    (): void => {
      if (!containerRef.current || !trackRef.current) return;

      const track: HTMLDivElement = trackRef.current;
      const getScrollAmount = (): number => {
        const trackWidth: number = track.scrollWidth;
        return -(trackWidth - window.innerWidth + 96);
      };

      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true, // Auto-recalculates on screen or orientation resize
          start: "top top",
          end: (): string => `+=${track.scrollWidth - window.innerWidth}`,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="programs"
      ref={containerRef}
      className="relative min-h-screen bg-industrial-950 flex flex-col justify-center overflow-hidden border-t border-industrial-800 py-16"
    >
      {/* Telemetry Header */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="flex items-center gap-2">
            {/* <span className="w-2 h-2 bg-volt rounded-full" /> */}
            <span className="font-mono text-xs text-volt uppercase tracking-widest font-semibold">
              // CORE TRAINING DISCIPLINES
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white uppercase font-black mt-2">
            FITORBIT CORE PROGRAMS
          </h2>
        </div>
        <div className="font-mono text-xs text-zinc-500 uppercase flex items-center gap-2">
          <span>[ HORIZONTAL SCROLL PROGRAM ARRAYS ]</span>
          <span className="text-volt animate-pulse">→</span>
        </div>
      </div>

      {/* Horizontal Track */}
      <div className="flex w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 sm:gap-8 pl-4 sm:pl-6 md:pl-24 will-change-transform select-none"
        >
          {CORE_PROGRAMS.map((program: ProgramHighlight, index: number) => {
            const meta: ProgramVisualMeta = PROGRAM_METADATA[program.id] || {
              imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
              code: `MOD-0${index + 1}`,
              targetAudience: "All Fitness Levels",
              weeklyBatches: "Daily Batches Available",
            };

            return (
              <div
                key={program.id}
                className="w-[85vw] sm:w-[480px] h-[400px] bg-industrial-900 border border-industrial-800 p-6 sm:p-8 flex flex-col justify-between shrink-0 hover:border-white transition-all duration-300 relative group overflow-hidden"
              >
                {/* Background Visual Layer */}
                <div
                  className="absolute inset-0 opacity-100 group-hover:opacity-30 transition-opacity duration-500 bg-cover bg-center pointer-events-none"
                  style={{ backgroundImage: `url(${meta.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-900/95 to-industrial-900/90 pointer-events-none" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-zinc-700 group-hover:border-white transition-colors" />

                {/* Top metadata */}
                <div className="relative z-10">
                  <div className="flex justify-between items-center border-b border-industrial-800 pb-3">
                    <div className="flex items-center gap-2">
                      {/* <span className="font-mono text-xs text-volt font-bold uppercase">{meta.code}</span> */}
                      <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-white/10 text-zinc-200 border border-white/20">
                        {program.badge}
                      </span>
                    </div>
                    {/* <span className="font-mono text-xs text-zinc-400">PHASE // {phaseIndex}</span> */}
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl text-white uppercase font-black mt-4 tracking-wide group-hover:text-volt transition-colors">
                    {program.name}
                  </h3>
                  <div className="font-mono text-[11px] text-zinc-400 mt-1 uppercase tracking-wider">
                    CATEGORY: <span className="text-zinc-200">{program.category}</span>
                  </div>

                  <p className="mt-4 font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Bottom details & CTA */}
                <div className="relative z-10 space-y-4">
                  <div className="bg-industrial-950/80 border border-industrial-800/80 p-3.5">
                    <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                      <div>
                        <span className="text-zinc-500 block text-[10px]">FOCUS TARGET</span>
                        <span className="text-zinc-200 font-semibold truncate block">{meta.targetAudience}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block text-[10px]">AVAILABILITY</span>
                        <span className="text-volt font-semibold truncate block">{meta.weeklyBatches}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PinnedShowcase;
