import { useRef, useState, type FC, type MouseEvent, type MutableRefObject } from "react";
import { motion } from "framer-motion";
import type { TargetOffset } from "../../types";

type MagneticButtonProps = {
  readonly label: string;
  readonly onClick?: () => void;
  readonly variant?: "primary" | "secondary";
  readonly className?: string;
};

export const MagneticButton: FC<MagneticButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const btnRef: MutableRefObject<HTMLButtonElement | null> = useRef<HTMLButtonElement | null>(null);
  const [offset, setOffset] = useState<TargetOffset>({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>): void => {
    if (!btnRef.current) return;
    const rect: DOMRect = btnRef.current.getBoundingClientRect();
    const centerX: number = rect.left + rect.width / 2;
    const centerY: number = rect.top + rect.height / 2;

    const pullFactor: number = 0.32;
    const deltaX: number = (event.clientX - centerX) * pullFactor;
    const deltaY: number = (event.clientY - centerY) * pullFactor;

    setOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = (): void => {
    setOffset({ x: 0, y: 0 });
  };

  const isPrimary: boolean = variant === "primary";

  return (
    <motion.button
      ref={btnRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 220, damping: 14, mass: 0.1 }}
      whileTap={{ scale: 0.94 }}
      className={`group relative inline-flex items-center justify-center px-8 py-4 font-display text-lg tracking-wider uppercase font-black overflow-hidden transition-all duration-300 cursor-pointer ${
        isPrimary
          ? "bg-volt text-obsidian border-2 border-transparent hover:border-white hover:bg-white hover:text-industrial-950 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]"
          : "bg-industrial-900 text-white border-2 border-industrial-700 hover:border-white hover:bg-white hover:text-industrial-950 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]"
      } ${className}`}
    >
      {/* Corner notch */}
      <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-industrial-950 rotate-45 translate-x-1.5 -translate-y-1.5" />
      <span className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-industrial-950 rotate-45 -translate-x-1.5 translate-y-1.5" />

      {/* Industrial Shimmer Layer */}
      <span className="absolute inset-0 w-full h-full bg-white/15 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-athletic-power pointer-events-none" />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-3">
        {label}
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </motion.button>
  );
};
