/** biome-ignore-all lint/suspicious/noCommentText: <explanation> */
import { useState, type FC } from "react";
import logo from "../../assets/logo.png";
import { FIT_ORBIT_OFFICIAL } from "../../data/gymWebsite.data";
import { MagneticButton } from "../ui/MagneticButton";

export const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMobileMenuOpen((prev: boolean) => !prev);
  };

  const closeMenu = (): void => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#070b14]/90 backdrop-blur-md border-b border-industrial-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group" onClick={closeMenu}>
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 bg-white flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.35)] group-hover:scale-105 transition-transform duration-300 overflow-hidden border border-cyan-400/50">
            <img
              src={logo}
              alt="FITORBIT GYM"
              className="w-full h-full object-contain"
            />
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7 font-mono text-xs uppercase tracking-widest text-zinc-400">
          <a href="#mission-vision" className="hover:text-cyan-400 transition-colors">
            MISSION &amp; VISION
          </a>
          <a href="#programs" className="hover:text-cyan-400 transition-colors">
            PROGRAMS
          </a>
          <a href="#facilities" className="hover:text-cyan-400 transition-colors">
            FACILITIES
          </a>
          <a href="#tour-video" className="hover:text-cyan-400 transition-colors">
            VIDEO TOUR
          </a>
          <a href="#trainers" className="hover:text-cyan-400 transition-colors">
            COACHES
          </a>
          <a href="#reviews" className="hover:text-cyan-400 transition-colors">
            REVIEWS
          </a>
        </nav>

        {/* Action Call & Mobile Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:block">
            <MagneticButton
              label="FREE TRIAL"
              variant="primary"
              className="!py-2.5 !px-5 !text-sm"
              onClick={(): void => {
                window.location.href = `tel:${FIT_ORBIT_OFFICIAL.phone}`;
              }}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-zinc-300 hover:text-white hover:border-white focus:outline-none border border-industrial-800 bg-industrial-900 transition-colors"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b14] border-b border-cyan-500/20 px-6 py-6 font-mono text-sm uppercase tracking-widest text-zinc-300 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <a href="#mission-vision" onClick={closeMenu} className="py-2 border-b border-industrial-850 hover:text-cyan-400">
            // MISSION &amp; VISION
          </a>
          <a href="#programs" onClick={closeMenu} className="py-2 border-b border-industrial-850 hover:text-cyan-400">
            // CORE PROGRAMS
          </a>
          <a href="#facilities" onClick={closeMenu} className="py-2 border-b border-industrial-850 hover:text-cyan-400">
            // ARENAS &amp; HARDWARE
          </a>
          <a href="#tour-video" onClick={closeMenu} className="py-2 border-b border-industrial-850 hover:text-cyan-400">
            // VIDEO TOUR (WATCH FLOOR)
          </a>
          <a href="#trainers" onClick={closeMenu} className="py-2 border-b border-industrial-850 hover:text-cyan-400">
            // CERTIFIED COACHES
          </a>
          <a href="#reviews" onClick={closeMenu} className="py-2 border-b border-industrial-850 hover:text-cyan-400">
            // MEMBER REVIEWS
          </a>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${FIT_ORBIT_OFFICIAL.phone}`}
              className="py-3 text-center bg-industrial-900 border border-industrial-700 hover:border-white hover:text-white text-white font-bold transition-colors"
            >
              CALL {FIT_ORBIT_OFFICIAL.phoneIntl}
            </a>
            <a
              href={`tel:${FIT_ORBIT_OFFICIAL.phone}`}
              onClick={closeMenu}
              className="py-3 text-center bg-teal-400 text-industrial-950 border border-transparent hover:bg-white hover:border-white hover:text-industrial-950 font-display font-black text-lg tracking-wider transition-colors shadow-[0_0_20px_rgba(45,212,191,0.35)]"
            >
              CLAIM FREE TRIAL
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
