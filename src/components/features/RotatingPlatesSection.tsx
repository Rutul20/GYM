import { useRef, type FC, type MutableRefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { OlympicPlateGraphic } from "../ui/OlympicPlateGraphic";

gsap.registerPlugin(ScrollTrigger);

export const RotatingPlatesSection: FC = () => {
  const containerRef: MutableRefObject<HTMLElement | null> = useRef<HTMLElement | null>(null);
  const leftPlateRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const rightPlateRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const centerTextRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

  useGSAP(
    (): void => {
      if (!containerRef.current || !leftPlateRef.current || !rightPlateRef.current || !centerTextRef.current) {
        return;
      }

      // Timeline pinned to scroll distance
      const tl: gsap.core.Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // starts when section enters viewport
          end: "bottom top",   // ends when section exits
          scrub: 1.2,          // smooth 1.2s scrub lag
          invalidateOnRefresh: true, // Recalculates start/end metrics on viewport resize
        },
      });

      // Left 45lb plate: rotates clockwise and moves upward faster
      tl.to(
        leftPlateRef.current,
        {
          rotation: 360,
          yPercent: -40,
          ease: "none",
        },
        0
      );

      // Right 25lb plate: rotates counter-clockwise and drifts wider
      tl.to(
        rightPlateRef.current,
        {
          rotation: -280,
          yPercent: -20,
          xPercent: 15,
          ease: "none",
        },
        0
      );

      // Center title subtle counter-drift
      tl.to(
        centerTextRef.current,
        {
          yPercent: 15,
          ease: "none",
        },
        0
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-industrial-950 flex items-center justify-center overflow-hidden border-t border-industrial-800"
    >
      {/* Background radial glow */}
      <div className="absolute w-[600px] h-[600px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Left Plate (45 LB) */}
      <div
        ref={leftPlateRef}
        className="absolute -left-14 sm:-left-6 md:left-8 lg:left-16 2xl:left-28 w-44 h-44 xs:w-52 xs:h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 2xl:w-[480px] 2xl:h-[480px] z-10 will-change-transform pointer-events-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] opacity-35 sm:opacity-85 md:opacity-100"
      >
        <OlympicPlateGraphic
          weight="45"
          unit="LB"
          brandText="FITORBIT"
          diameter="w-full h-full"
          isPrimaryVolt={true}
        />
      </div>

      {/* Main Content */}
      <div ref={centerTextRef} className="relative z-20 text-center px-4 sm:px-6 max-w-4xl 2xl:max-w-6xl mx-auto will-change-transform py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-industrial-900/90 border border-industrial-700/60 mb-4 backdrop-blur-sm">
          <span className="text-xs md:text-sm font-mono font-bold tracking-[0.3em] uppercase text-volt">
            Kinetic Resistance
          </span>
        </div>
        <h2 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl 2xl:text-[9.5rem] font-display font-black uppercase tracking-tight text-white mt-2 leading-[0.88]">
          Pure Iron.<br />
          <span className="text-volt drop-shadow-[0_0_40px_rgba(0,128,128,0.45)]">Zero Drag.</span>
        </h2>
        <p className="mt-4 sm:mt-6 text-zinc-400 font-sans text-xs sm:text-base 2xl:text-lg max-w-lg 2xl:max-w-2xl mx-auto leading-relaxed">
          Ultra-low friction bearings and calibrated hub sleeves ensure linear momentum without parasitic rotational inertia.
        </p>
      </div>

      {/* Right Plate (25 LB) */}
      <div
        ref={rightPlateRef}
        className="absolute -right-14 sm:-right-6 md:right-10 lg:right-20 2xl:right-28 w-36 h-36 xs:w-44 xs:h-44 sm:w-60 sm:h-60 md:w-80 md:h-80 2xl:w-[400px] 2xl:h-[400px] z-10 will-change-transform pointer-events-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] opacity-35 sm:opacity-85 md:opacity-100"
      >
        <OlympicPlateGraphic
          weight="25"
          unit="LB"
          brandText="FITORBIT"
          diameter="w-full h-full"
          isPrimaryVolt={false}
        />
      </div>
    </section>
  );
};

export default RotatingPlatesSection;
