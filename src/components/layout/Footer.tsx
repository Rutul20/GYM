import { type FC } from "react";
import { FIT_ORBIT_OFFICIAL } from "../../data/gymWebsite.data";
import { MagneticButton } from "../ui/MagneticButton";

export const Footer: FC = () => {
  return (
    <footer className="bg-industrial-950 border-t border-industrial-800 text-zinc-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 pb-16 border-b border-industrial-800">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase font-black">
              {FIT_ORBIT_OFFICIAL.ctaHeadline} <br />
              COMMIT TO <span className="text-volt">BE FIT</span>.
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
            <span className="text-volt uppercase font-bold tracking-widest block mb-2">FACILITY ADDRESS</span>
            <p className="text-zinc-300 leading-relaxed">
              {FIT_ORBIT_OFFICIAL.address}
            </p>
            <span className="text-zinc-500 block mt-1">({FIT_ORBIT_OFFICIAL.areaLandmark})</span>
          </div>

          <div>
            <span className="text-volt uppercase font-bold tracking-widest block mb-2">OPERATING TIMINGS</span>
            <div className="text-zinc-300 space-y-1">
              <div>MORNING: {FIT_ORBIT_OFFICIAL.morningTimings}</div>
              <div>EVENING: {FIT_ORBIT_OFFICIAL.eveningTimings}</div>
              <div className="text-volt font-bold pt-1">{FIT_ORBIT_OFFICIAL.daysOpen}</div>
            </div>
          </div>

          <div>
            <span className="text-volt uppercase font-bold tracking-widest block mb-2">DIRECT CONTACT</span>
            <div className="text-zinc-300 space-y-1">
              <div>PHONE: <a href={`tel:${FIT_ORBIT_OFFICIAL.phone}`} className="text-white hover:text-volt">{FIT_ORBIT_OFFICIAL.phoneIntl}</a></div>
              <div>LOCATION: {FIT_ORBIT_OFFICIAL.city} - {FIT_ORBIT_OFFICIAL.pincode}</div>
              <div className="text-zinc-400 pt-1">Free 1-Day Trial Available</div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-zinc-600">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white p-0.5 border border-volt/40 overflow-hidden flex items-center justify-center">
              <img src="/logo.png" alt="FITORBIT" className="w-full h-full object-contain" />
            </div>
            <div>© {new Date().getFullYear()} {FIT_ORBIT_OFFICIAL.brandName}. ALL RIGHTS RESERVED.</div>
          </div>
          <div className="flex gap-6 uppercase tracking-wider">
            <span>{FIT_ORBIT_OFFICIAL.city}</span>
            <span>PIN: {FIT_ORBIT_OFFICIAL.pincode}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
