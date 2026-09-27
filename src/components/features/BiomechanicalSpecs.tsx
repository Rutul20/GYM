/** biome-ignore-all lint/suspicious/noCommentText: <explanation> */
import { useState, useRef, type FC, type MutableRefObject, type ChangeEvent } from "react";
import { motion, AnimatePresence, useScroll, useTransform, type MotionValue } from "framer-motion";
import { GYM_FACILITIES } from "../../data/gymWebsite.data";
import { OlympicPlateGraphic } from "../ui/OlympicPlateGraphic";
import type { FacilityHighlight } from "../../types/gymWebsite.types";

type EquipmentCategory = "ALL" | "PUSH" | "PULL" | "FREE_WEIGHTS" | "LEGS" | "CARDIO_TURF";

interface CategoryFilterOption {
  readonly id: EquipmentCategory;
  readonly label: string;
}

const CATEGORY_OPTIONS: readonly CategoryFilterOption[] = [
  { id: "ALL", label: "ALL HARDWARE" },
  { id: "PUSH", label: "CHEST & PUSH" },
  { id: "PULL", label: "BACK & PULL" },
  { id: "FREE_WEIGHTS", label: "FREE WEIGHTS" },
  { id: "LEGS", label: "LEGS & CALVES" },
  { id: "CARDIO_TURF", label: "TURF & CARDIO" },
];

export const BiomechanicalSpecs: FC = () => {
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

  // Expand / Collapse state: hidden by default
  const [isOpenAll, setIsOpenAll] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<EquipmentCategory>("ALL");
  const [searchFilter, setSearchFilter] = useState<string>("");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const plateRotation: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [-90, 180]);
  const barbellShiftX: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const toggleOpenAll = (): void => {
    setIsOpenAll((prev: boolean) => !prev);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchFilter(event.target.value);
  };

  const filteredFacilities: FacilityHighlight[] = GYM_FACILITIES.filter((fac: FacilityHighlight): boolean => {
    const query: string = searchFilter.trim().toLowerCase();
    const matchesSearch: boolean =
      query === "" ||
      fac.name.toLowerCase().includes(query) ||
      fac.tagline.toLowerCase().includes(query) ||
      fac.vibeTag.toLowerCase().includes(query) ||
      fac.features.some((feat: string): boolean => feat.toLowerCase().includes(query));

    if (!matchesSearch) return false;
    if (activeCategory === "ALL") return true;
    if (activeCategory === "PUSH" && ["fac-smith", "fac-pecdeck", "fac-cables-pushdown", "fac-dips"].includes(fac.id)) return true;
    if (activeCategory === "PULL" && ["fac-lat-pulldown", "fac-seated-row", "fac-assisted-pullup"].includes(fac.id)) return true;
    if (activeCategory === "LEGS" && fac.id === "fac-legs") return true;
    if (activeCategory === "FREE_WEIGHTS" && fac.id === "fac-dumbbells") return true;
    if (activeCategory === "CARDIO_TURF" && fac.id === "fac-turf-cardio") return true;
    return false;
  });

  return (
    <section id="facilities" ref={containerRef} className="relative py-28 bg-industrial-950 border-t border-industrial-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-volt" />
              <span className="font-mono text-xs text-volt uppercase tracking-widest font-semibold">
                // BIOMECHANICAL HARDWARE &amp; MACHINES
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase font-black">
              MACHINE SUITES &amp; EXERCISE MAPPING
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm text-zinc-400">
            Precision commercial machines mapped to every exercise: Smith pressing, dual cable towers, SkiErg, turf push sleds, and pro dumbbells.
          </p>
        </div>

        {/* Scroll-Driven Kinetic Barbell & Plate Visualization */}
        <div className="relative w-full h-72 sm:h-80 bg-industrial-900 border border-industrial-800 rounded-none overflow-hidden flex items-center justify-center p-8 mb-12">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Translating Barbell Shaft */}
          <motion.div
            style={{ x: barbellShiftX }}
            className="absolute w-[130%] h-5 bg-gradient-to-r from-industrial-700 via-zinc-400 to-industrial-700 shadow-xl border-y border-zinc-500/50 flex items-center justify-center will-change-transform"
          >
            <div className="w-1/4 h-full bg-repeating-linear-gradient(45deg,#3d3d4e,#3d3d4e_4px,#1a1a22_4px,#1a1a22_8px)" />
          </motion.div>

          {/* Rotating Olympic Plates */}
          <motion.div
            style={{ rotate: plateRotation }}
            className="relative z-10 w-44 sm:w-56 aspect-square will-change-transform"
          >
            <OlympicPlateGraphic
              weight="20"
              unit="LB"
              brandText="FITORBIT"
              diameter="w-full h-full"
            />
          </motion.div>
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE EXPAND / COLLAPSE TRIGGER DECK              */}
        {/* ======================================================== */}
        <div className="mb-12">
          <div className="p-6 sm:p-8 bg-industrial-900 border border-industrial-800 hover:border-white transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              {/* Telemetry Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-volt uppercase tracking-wider font-bold">
                    {isOpenAll ? "[CATALOG ACTIVE // FULL DIRECTORY OPEN]" : "[CATALOG STANDBY // DATA COLLAPSED]"}
                  </span>
                  <span className="text-zinc-600 font-mono text-xs">|</span>
                  <span className="font-mono text-xs text-zinc-400">
                    COMPLETE EQUIPMENT &amp; EXERCISE BLUEPRINTS
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-white uppercase font-bold">
                  {isOpenAll
                    ? "COMMERCIAL EQUIPMENT & EXERCISE BLUEPRINT DIRECTORY"
                    : "EXPLORE COMPLETE MACHINE HARDWARE & EXERCISES"}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl font-sans">
                  {isOpenAll
                    ? "Specialized machine suites and exercise mappings are expanded below. Use filters or search to quickly locate specific hardware."
                    : "The full hardware catalog is concealed to streamline page navigation. Click below to reveal machine suites, mechanical specifications, and supported exercises."}
                </p>
              </div>

              {/* Primary Master Toggle Button */}
              <button
                type="button"
                onClick={toggleOpenAll}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-industrial-950 border-2 border-volt text-volt hover:bg-white hover:text-industrial-950 hover:border-white font-display font-black text-lg tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] shrink-0"
              >
                <span className="text-xl font-mono leading-none">
                  {isOpenAll ? "▲" : "▼"}
                </span>
                <span>
                  {isOpenAll ? "COLLAPSE CATALOG" : "OPEN EQUIPMENT DIRECTORY"}
                </span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-industrial-800/80 font-mono text-xs">
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">EQUIPMENT SCOPE</span>
                <span className="text-white font-bold text-sm">FULL GYM FLEET</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">EXERCISE MAPPINGS</span>
                <span className="text-volt font-bold text-sm">ALL PROTOCOLS</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">MECHANICAL SYSTEM</span>
                <span className="text-white font-bold text-sm">LINEAR &amp; CABLE</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">DIRECT SPOTTER</span>
                <span className="text-volt font-bold text-sm">ZERO OVERLOAD RISK</span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* EXPANDABLE MACHINE INVENTORY CONTENT (ANIMATEPRESENCE)   */}
        {/* ======================================================== */}
        <AnimatePresence>
          {isOpenAll && (
            <motion.div
              key="machine-catalog-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {/* Category Filter & Search Tooling Bar */}
              <div className="p-4 sm:p-6 bg-industrial-900 border border-industrial-800 mb-8 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
                {/* Category Pills */}
                <div className="flex flex-wrap gap-2">
                  {CATEGORY_OPTIONS.map((cat: CategoryFilterOption) => {
                    const isSelected: boolean = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={(): void => setActiveCategory(cat.id)}
                        className={`font-mono text-xs uppercase px-3 py-1.5 transition-colors border ${
                          isSelected
                            ? "bg-volt text-industrial-950 font-bold border-volt hover:bg-white hover:text-industrial-950 hover:border-white"
                            : "bg-industrial-950 text-zinc-400 border-industrial-800 hover:border-white hover:text-white hover:bg-industrial-850"
                        }`}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>

                {/* Instant Search Filter */}
                <div className="relative w-full md:w-72">
                  <input
                    type="text"
                    value={searchFilter}
                    onChange={handleSearchChange}
                    placeholder="Search exercise or machine..."
                    className="w-full bg-industrial-950 border border-industrial-800 px-3 py-2 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-volt"
                  />
                  {searchFilter.trim() !== "" && (
                    <button
                      type="button"
                      onClick={(): void => setSearchFilter("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white font-mono text-xs"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Machine Suites Grid */}
              {filteredFacilities.length === 0 ? (
                <div className="py-16 text-center bg-industrial-900 border border-industrial-800">
                  <p className="font-mono text-sm text-zinc-400">
                    No hardware or exercises matching "{searchFilter}".
                  </p>
                  <button
                    type="button"
                    onClick={(): void => {
                      setSearchFilter("");
                      setActiveCategory("ALL");
                    }}
                    className="mt-3 font-mono text-xs text-volt underline uppercase tracking-wider"
                  >
                    Reset Search &amp; Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                  {filteredFacilities.map((fac: FacilityHighlight, idx: number) => {
                    // Check if this is the last card in an odd-remainder row (e.g. 10th card in a 3-column grid)
                    const isLastOddCard: boolean =
                      filteredFacilities.length % 3 === 1 && idx === filteredFacilities.length - 1;

                    return (
                      <div
                        key={fac.id}
                        className={`relative p-6 sm:p-8 bg-industrial-900 border border-industrial-800 flex flex-col justify-between group hover:border-white transition-all duration-300 overflow-hidden ${
                          isLastOddCard ? "lg:col-span-3" : ""
                        }`}
                      >
                        {/* Subtle background image */}
                        <div
                          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-cover bg-center pointer-events-none"
                          style={{ backgroundImage: `url(${fac.imageUrl})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-900/95 to-industrial-900/90 pointer-events-none" />

                        {isLastOddCard ? (
                          /* Widescreen Banner Layout for the final card spanning all 3 columns */
                          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                            <div className="lg:col-span-5">
                              <div className="flex justify-between items-center mb-3 border-b border-industrial-800 pb-2.5">
                                <span className="font-mono text-volt text-xs font-bold">STATION {fac.number}</span>
                                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">{fac.vibeTag}</span>
                              </div>
                              <h3 className="font-display text-2xl sm:text-3xl text-white uppercase font-bold group-hover:text-volt transition-colors">
                                {fac.name}
                              </h3>
                              <div className="font-mono text-[10px] text-zinc-400 mt-1 uppercase tracking-wide">
                                {fac.tagline}
                              </div>
                              <p className="text-zinc-300 text-xs leading-relaxed mt-3">
                                {fac.description}
                              </p>
                            </div>

                            <div className="lg:col-span-7 lg:border-l lg:border-industrial-800/80 lg:pl-8 pt-4 lg:pt-0">
                              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3">
                                AVAILABLE MACHINES &amp; EXERCISES
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {fac.features.map((feat: string, featIdx: number) => (
                                  <span
                                    key={featIdx}
                                    className="font-mono text-[11px] text-zinc-200 bg-industrial-950 px-3 py-1.5 border border-industrial-800 group-hover:border-zinc-700 transition-colors"
                                  >
                                    {feat}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Standard 1-column card layout */
                          <>
                            {/* Top metadata */}
                            <div className="relative z-10">
                              <div className="flex justify-between items-center mb-3 border-b border-industrial-800 pb-2.5">
                                <span className="font-mono text-volt text-xs font-bold">STATION {fac.number}</span>
                                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">{fac.vibeTag}</span>
                              </div>

                              <h3 className="font-display text-2xl text-white uppercase font-bold group-hover:text-volt transition-colors">
                                {fac.name}
                              </h3>
                              <div className="font-mono text-[10px] text-zinc-400 mt-1 uppercase tracking-wide">
                                {fac.tagline}
                              </div>

                              <p className="text-zinc-300 text-xs leading-relaxed mt-3 mb-6">
                                {fac.description}
                              </p>
                            </div>

                            {/* Machine & Exercise Features */}
                            <div className="relative z-10 pt-4 border-t border-industrial-800/80">
                              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2.5">
                                AVAILABLE MACHINES &amp; EXERCISES
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {fac.features.map((feat: string, featIdx: number) => (
                                  <span
                                    key={featIdx}
                                    className="font-mono text-[10px] sm:text-[11px] text-zinc-200 bg-industrial-950 px-2.5 py-1 border border-industrial-800 group-hover:border-zinc-700 transition-colors"
                                  >
                                    {feat}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Bottom Collapse Button */}
              <div className="flex justify-center pb-12">
                <button
                  type="button"
                  onClick={toggleOpenAll}
                  className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white hover:border-white py-3 px-6 bg-industrial-900 border border-industrial-800 transition-colors"
                >
                  ▲ COLLAPSE / HIDE EQUIPMENT CATALOG
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
