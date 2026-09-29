import { type FC } from "react";
import { FIT_ORBIT_OFFICIAL } from "../../data/gymWebsite.data";

export const MobileActionBar: FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 lg:hidden bg-[#070b14]/95 backdrop-blur-lg border-t border-cyan-500/20 px-4 py-2.5 flex items-center justify-between gap-3 shadow-[0_-10px_25px_rgba(0,0,0,0.8)] pb-safe">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-[10px] text-cyan-400 uppercase font-bold tracking-wider">
            OPEN TODAY
          </span>
        </div>
        <span className="font-mono text-[9px] text-zinc-400">
          {FIT_ORBIT_OFFICIAL.morningTimings.split("–")[0].trim()} – 09:30 PM
        </span>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={`tel:${FIT_ORBIT_OFFICIAL.phone}`}
          className="flex items-center gap-1.5 px-3 py-2 bg-[#091326] border border-cyan-500/30 hover:border-white hover:text-white text-white font-mono text-xs font-bold uppercase rounded-none active:scale-95 transition-all"
        >
          <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          CALL
        </a>

        <a
          href={`tel:${FIT_ORBIT_OFFICIAL.phone}`}
          className="px-4 py-2 bg-teal-400 text-industrial-950 border border-transparent hover:bg-white hover:border-white hover:text-industrial-950 font-display text-sm font-black uppercase tracking-wider rounded-none active:scale-95 transition-all shadow-[0_0_15px_rgba(45,212,191,0.3)]"
        >
          JOIN PROTOCOL
        </a>
      </div>
    </div>
  );
};
