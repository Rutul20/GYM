/** biome-ignore-all lint/suspicious/noCommentText: <explanation> */
import { type FC } from "react";
import { GYM_TRAINERS } from "../../data/gymWebsite.data";
import type { TrainerProfile } from "../../types/gymWebsite.types";

export const TrainersSection: FC = () => {
  return (
    <section id="trainers" className="py-28 bg-industrial-950 border-t border-industrial-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-volt" />
              <span className="font-mono text-xs text-volt uppercase tracking-widest font-semibold">
                // CERTIFIED COACHING ROSTER
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase font-black mt-2">
              EXPERT COACHES & MENTORS
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm text-zinc-400">
            Form perfection, progressive overload programming, and personalized nutrition guidance tailored to your biological profile.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {GYM_TRAINERS.map((trainer: TrainerProfile) => (
            <div
              key={trainer.id}
              className="bg-industrial-900 border border-industrial-800 overflow-hidden group hover:border-white transition-colors"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.imageUrl}
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 font-mono text-xs px-2.5 py-1 bg-volt text-industrial-950 font-bold uppercase">
                  {trainer.experience}
                </span>
              </div>

              <div className="p-6">
                <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider">{trainer.role}</div>
                <h3 className="font-display text-2xl text-white uppercase font-bold mt-1">
                  {trainer.name}
                </h3>
                <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                  {trainer.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
