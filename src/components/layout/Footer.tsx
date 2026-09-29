import { type FC } from "react";
import logo from "../../assets/logo.png";
import { FIT_ORBIT_OFFICIAL } from "../../data/gymWebsite.data";
import { MagneticButton } from "../ui/MagneticButton";

export const Footer: FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#060912] via-[#070b16] to-[#04060a] border-t border-industrial-800 text-zinc-400 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Subtle top atmospheric beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 sm:gap-10 pb-10 sm:pb-16 border-b border-industrial-800">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase font-black">
              {FIT_ORBIT_OFFICIAL.ctaHeadline} <br />
              COMMIT TO <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">BE FIT</span>.
            </h2>
            <p className="mt-4 font-mono text-xs text-zinc-400 uppercase tracking-widest max-w-xl">
              {FIT_ORBIT_OFFICIAL.ctaDescription}
            </p>
          </div>
          <MagneticButton
            label="CALL TO JOIN"
            onClick={(): void => {
              window.location.href = `tel:${FIT_ORBIT_OFFICIAL.phone}`;
            }}
          />
        </div>

        {/* Location & Timings Telemetry Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-industrial-800/80 font-mono text-xs">
          <div>
            <span className="text-cyan-400 uppercase font-bold tracking-widest block mb-2">// FACILITY ADDRESS</span>
            <p className="text-zinc-300 leading-relaxed">
              {FIT_ORBIT_OFFICIAL.address}
            </p>
            <span className="text-zinc-500 block mt-1">({FIT_ORBIT_OFFICIAL.areaLandmark})</span>
          </div>

          <div>
            <span className="text-cyan-400 uppercase font-bold tracking-widest block mb-2">// OPERATING TIMINGS</span>
            <div className="text-zinc-300 space-y-1">
              <div>MORNING: {FIT_ORBIT_OFFICIAL.morningTimings}</div>
              <div>EVENING: {FIT_ORBIT_OFFICIAL.eveningTimings}</div>
              <div className="text-cyan-300 font-bold pt-1">{FIT_ORBIT_OFFICIAL.daysOpen}</div>
            </div>
          </div>

          <div>
            <span className="text-cyan-400 uppercase font-bold tracking-widest block mb-2">// DIRECT CONTACT</span>
            <div className="text-zinc-300 space-y-1">
              <div>PHONE: <a href={`tel:${FIT_ORBIT_OFFICIAL.phone}`} className="text-white hover:text-cyan-300 transition-colors">{FIT_ORBIT_OFFICIAL.phoneIntl}</a></div>
              <div>LOCATION: {FIT_ORBIT_OFFICIAL.city} - {FIT_ORBIT_OFFICIAL.pincode}</div>
              <div className="text-cyan-400/80 pt-1">Free 1-Day Trial Available</div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-zinc-500">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white p-0.5 border border-cyan-500/40 overflow-hidden flex items-center justify-center">
              <img src={logo} alt="FITORBIT" className="w-full h-full object-contain" />
            </div>
            <div>© {new Date().getFullYear()} {FIT_ORBIT_OFFICIAL.brandName}. ALL RIGHTS RESERVED.</div>
          </div>
          <div className="flex gap-6 uppercase tracking-wider text-zinc-500">
            <span>{FIT_ORBIT_OFFICIAL.city}</span>
            <span>PIN: {FIT_ORBIT_OFFICIAL.pincode}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
