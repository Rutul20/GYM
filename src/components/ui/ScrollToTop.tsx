import { useState, useEffect, type FC } from "react";

export const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      // Reveal button once scrolled past hero viewport
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className="fixed bottom-20 sm:bottom-24 lg:bottom-6 right-3 sm:right-5 lg:right-6 z-40 w-8 h-8 sm:w-9 sm:h-9 rounded-none bg-[#070b14]/90 hover:bg-cyan-500/20 text-cyan-300 hover:text-white border border-cyan-500/40 hover:border-white shadow-[0_0_15px_rgba(6,182,212,0.25)] backdrop-blur-md transition-all duration-300 group flex items-center justify-center cursor-pointer active:scale-95"
    >
      <svg
        className="w-4 h-4 sm:w-4.5 sm:h-4.5 transform group-hover:-translate-y-0.5 transition-transform duration-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
