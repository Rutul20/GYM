/** biome-ignore-all lint/suspicious/noCommentText: <explanation> */
import { type FC } from "react";
import { GYM_TRAINERS } from "../../data/gymWebsite.data";
import type { TrainerProfile } from "../../types/gymWebsite.types";

export const TrainersSection: FC = () => {
  return (
    <section id="trainers" className="relative py-28 bg-gradient-to-b from-[#080d1e] via-[#0e1936] to-[#080d1e] bg-pattern-stripes border-t border-industrial-800 overflow-hidden">
      {/* Background athletic backlights */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-cobalt/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-midnight-900/90 border border-cyan-500/30 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-xs text-cyan-300 uppercase tracking-widest font-semibold">
                // CERTIFIED COACHING ROSTER // VADODARA HQ
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase font-black mt-2">
              EXPERT COACHES &amp; MENTORS
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm text-zinc-300 leading-relaxed">
            Form perfection, progressive overload programming, and personalized nutrition guidance tailored to your biological profile.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {GYM_TRAINERS.map((trainer: TrainerProfile, idx: number) => {
            const isCobaltBadge: boolean = idx % 2 === 1;
            return (
              <div
                key={trainer.id}
                className="bg-gradient-to-b from-[#0b1426]/95 via-industrial-900 to-[#070d1a] border border-industrial-800 overflow-hidden group hover:border-white transition-all duration-300 shadow-2xl relative"
              >
                {/* Athletic Jersey Number Watermark */}
                <div className="absolute top-2 right-4 font-display font-black text-6xl text-white/5 select-none pointer-events-none z-10">
                  0{idx + 1}
                </div>

                <div className="relative h-80 overflow-hidden">
                  <img
                    src={trainer.imageUrl}
                    alt={trainer.name}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-transparent to-transparent" />
                  <span className={`absolute bottom-4 left-4 font-mono text-xs px-2.5 py-1 ${isCobaltBadge ? "bg-cobalt text-white" : "bg-gradient-to-r from-teal-500 to-cyan-500 text-industrial-950"} font-bold uppercase shadow-lg`}>
                    {trainer.experience}
                  </span>
                </div>

                <div className="p-6 relative z-10">
                  <div className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold">{trainer.role}</div>
                  <h3 className="font-display text-2xl text-white uppercase font-bold mt-1 group-hover:text-cyan-300 transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-zinc-300 text-sm mt-3 leading-relaxed">
                    {trainer.specialty}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
