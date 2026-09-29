import { type FC } from "react";
import { Navbar } from "./components/layout/Navbar";
import { ParallaxHero } from "./components/hero/ParallaxHero";
import { PinnedShowcase } from "./components/showcase/PinnedShowcase";
import { BiomechanicalSpecs } from "./components/features/BiomechanicalSpecs";
import { GymVideoShowcase } from "./components/features/GymVideoShowcase";
import { RotatingPlatesSection } from "./components/features/RotatingPlatesSection";
import { TrainersSection } from "./components/features/TrainersSection";
import { MemberReviews } from "./components/features/MemberReviews";
import { KineticTerminalSection } from "./components/features/KineticTerminalSection";
import { ScrollPhilosophy } from "./components/features/ScrollPhilosophy";
import { TypeStrip } from "./components/ui/TypeStrip";
import { MobileActionBar } from "./components/layout/MobileActionBar";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { Footer } from "./components/layout/Footer";
import { CORE_PROGRAMS } from "./data/gymWebsite.data";


const HARDWARE_STRIP_ITEMS: readonly string[] = [
  "ASTROTURF SPRINT CORRIDOR",
  "BIO-MECHANICAL LOAD ARSENAL",
  "VARIABLE RESISTANCE",
  "CARDIO & ENDURANCE LOFT",
  "CROSSFIT FUNCTIONAL RIG",
  "ELEIKO CALIBRATED PLATES",
];

export const App: FC = () => {
  return (
    <div className="min-h-screen bg-[#060912] text-white selection:bg-cyan-400 selection:text-industrial-950 font-sans pb-16 lg:pb-0 overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <main>
        <ParallaxHero />

        {/* Kinetic Type Strip 1: High-Contrast Slanted Primary Strip */}
        <TypeStrip
          items={CORE_PROGRAMS.map((program) => program.name)}
          speed={48}
          direction="left"
          variant="teal"
          slanted={true}
        />

        <RotatingPlatesSection />
        <ScrollPhilosophy />
        <PinnedShowcase />

        {/* Kinetic Type Strip 2: Reverse Industrial Hardware Tape */}
        <TypeStrip
          items={HARDWARE_STRIP_ITEMS}
          speed={30}
          direction="right"
          variant="outline"
          slanted={false}
        />

        <BiomechanicalSpecs />
        <GymVideoShowcase />
        <TrainersSection />
        <MemberReviews />
        <KineticTerminalSection />
      </main>

      <Footer />
      {/* Scroll To Top Action */}
      <ScrollToTop />
      {/* Mobile Sticky Quick Action Telemetry Strip */}
      <MobileActionBar />
    </div>
  );
};

export default App;
