import { type FC } from "react";

type TypeStripProps = {
  readonly items: readonly string[];
  readonly speed?: number; // seconds for complete cycle
  readonly direction?: "left" | "right";
  readonly variant?: "teal" | "dark" | "outline";
  readonly slanted?: boolean;
  readonly className?: string;
};

type StripItem = {
  readonly id: string;
  readonly text: string;
};

export const TypeStrip: FC<TypeStripProps> = ({
  items,
  speed = 22,
  direction = "left",
  variant = "teal",
  slanted = false,
  className = "",
}: TypeStripProps) => {
  // Duplicate array with stable unique identifiers to guarantee seamless looping without seam gaps
  const repetitions: readonly string[] = ["cycle-1", "cycle-2", "cycle-3", "cycle-4"];
  const repeatedItems: readonly StripItem[] = repetitions.flatMap(
    (cycle: string): readonly StripItem[] =>
      items.map(
        (item: string, itemIndex: number): StripItem => ({
          id: `${cycle}-${itemIndex}-${item}`,
          text: item,
        })
      )
  );

  const getVariantStyles = (): string => {
    switch (variant) {
      case "teal":
        return "bg-volt text-industrial-950 font-black border-y border-teal-600/30 shadow-[0_0_20px_rgba(0,128,128,0.25)]";
      case "dark":
        return "bg-industrial-900 text-white border-y border-industrial-800";
      case "outline":
        return "bg-industrial-950 text-transparent stroke-industrial-700 [-webkit-text-stroke:1px_#008080] border-y border-industrial-800/80";
    }
  };

  const animationName: string = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-3 sm:py-4 z-20 ${slanted ? "rotate-[-1.5deg] scale-105 my-8 sm:my-12 shadow-2xl" : ""
        } ${getVariantStyles()} ${className}`}
    >
      <div
        className={`flex whitespace-nowrap will-change-transform hover:[animation-play-state:paused] ${animationName}`}
        style={{
          animationDuration: `${speed}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {repeatedItems.map((item: StripItem) => (
          <div key={item.id} className="flex items-center shrink-0">
            <span className="font-display text-xl sm:text-2xl md:text-3xl tracking-widest uppercase px-4 sm:px-6">
              {item.text}
            </span>
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-current opacity-70 shrink-0 mx-2" />
          </div>
        ))}
      </div>
    </div>
  );
};
