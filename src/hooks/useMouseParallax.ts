import { useState, useEffect, useRef, type MutableRefObject } from "react";
import type { MousePosition, TargetOffset } from "../types";

export const useMouseParallax = (lerpFactor: number = 0.08): MousePosition => {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  const targetRef: MutableRefObject<TargetOffset> = useRef<TargetOffset>({ x: 0, y: 0 });
  const currentRef: MutableRefObject<TargetOffset> = useRef<TargetOffset>({ x: 0, y: 0 });
  const rafId: MutableRefObject<number | null> = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent): void => {
      const { innerWidth, innerHeight } = window;
      const normX: number = (event.clientX / innerWidth) * 2 - 1;
      const normY: number = (event.clientY / innerHeight) * 2 - 1;

      targetRef.current = {
        x: normX,
        y: normY,
      };
    };

    const animate = (): void => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * lerpFactor;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * lerpFactor;

      setPosition({
        x: currentRef.current.x * 40,
        y: currentRef.current.y * 40,
        normalizedX: currentRef.current.x,
        normalizedY: currentRef.current.y,
      });

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return (): void => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [lerpFactor]);

  return position;
};
