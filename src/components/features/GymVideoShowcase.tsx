/** biome-ignore-all lint/suspicious/noCommentText: <explanation> */
import { type FC } from "react";
import { FIT_ORBIT_OFFICIAL } from "../../data/gymWebsite.data";
import { MagneticButton } from "../ui/MagneticButton";

export const GymVideoShowcase: FC = () => {
  const youtubeVideoId: string = "cKvgCFWMRPg";
  const embedUrl: string = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?rel=0&modestbranding=1&color=white`;

  return (
    <section id="tour-video" className="relative py-28 bg-industrial-950 border-t border-industrial-800 overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-volt uppercase tracking-widest font-semibold">
                // VIRTUAL RECONNAISSANCE // OFFICIAL FLOOR TOUR
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase font-black tracking-tight">
              INSIDE FITORBIT GYM
            </h2>
            <div className="font-mono text-xs text-zinc-400 mt-2 uppercase tracking-wider">
              {FIT_ORBIT_OFFICIAL.address}
            </div>
          </div>

          <p className="max-w-md font-sans text-sm text-zinc-400 leading-relaxed">
            Experience our world-class biomechanical training floor, athletic sprint turf, and equipment inventory in real motion.
          </p>
        </div>

        {/* Tactical Video Player HUD Frame */}
        <div className="relative w-full bg-industrial-900 border border-industrial-800 shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* Top Telemetry Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-industrial-800 bg-industrial-950/80 font-mono text-[10px] sm:text-xs">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse" />
                <span className="font-bold tracking-wider">REC // 4K CINEMATIC STREAM</span>
              </span>
              <span className="hidden sm:inline-block text-zinc-600">|</span>
              <span className="hidden sm:inline-block text-zinc-400">
                FEED ID: FITORBIT-HQ-{youtubeVideoId}
              </span>
            </div>

            <div className="flex items-center gap-4 text-zinc-400">
              <span className="text-volt font-bold">1080P • 60FPS</span>
              <a
                href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-volt transition-colors flex items-center gap-1 underline underline-offset-2"
              >
                OPEN IN YOUTUBE ↗
              </a>
            </div>
          </div>

          {/* Corner Decorative HUD Brackets */}
          <div className="absolute top-12 left-2 w-4 h-4 border-t-2 border-l-2 border-volt/60 z-20 pointer-events-none" />
          <div className="absolute top-12 right-2 w-4 h-4 border-t-2 border-r-2 border-volt/60 z-20 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-volt/60 z-20 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-volt/60 z-20 pointer-events-none" />

          {/* Responsive 16:9 Aspect Video Embed Container */}
          <div className="relative w-full aspect-video bg-black">
            <iframe
              src={embedUrl}
              title="FITORBIT GYM Vadodara - Official Tour Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>

          {/* Bottom Telemetry Ticker */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-3 border-t border-industrial-800 bg-industrial-950 font-mono text-[10px] sm:text-xs text-zinc-400 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-volt font-bold">STATUS:</span>
              <span>FACILITY VERIFIED • VASNA ROAD VADODARA HQ</span>
            </div>
            <div className="text-zinc-500">
              MON-SAT: 06:00 - 22:00 | SUN: 07:00 - 12:00
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-industrial-900 border border-industrial-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-2xl text-white uppercase font-bold">
              READY TO TOUR IN PERSON?
            </h4>
            <p className="font-sans text-xs text-zinc-400 mt-1">
              Visit us near Nilamber Circle, Vasna Road, Vadodara or speak directly with our head trainers.
            </p>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <MagneticButton
              label="CALL HEAD DESK"
              variant="primary"
              className="!py-2.5 !px-5 !text-sm w-full sm:w-auto"
              onClick={(): void => {
                window.location.href = `tel:${FIT_ORBIT_OFFICIAL.phone}`;
              }}
            />
            <MagneticButton
              label="MEMBER REVIEWS"
              variant="secondary"
              className="!py-2.5 !px-5 !text-sm w-full sm:w-auto"
              onClick={(): void => {
                window.location.href = "#reviews";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
