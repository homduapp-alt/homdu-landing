import { useEffect } from "react";
import { useTheme } from "./useTheme.js";

import { Nav } from "./components/Nav.jsx";
import { Hero } from "./components/Hero.jsx";
import { ChaosSection } from "./components/ChaosSection.jsx";
import { HowItWorks } from "./components/HowItWorks.jsx";
import { FeatureGrid } from "./components/FeatureGrid.jsx";
import { StagesSection } from "./components/StagesSection.jsx";
import { CostsSection } from "./components/CostsSection.jsx";
import { DocsPhotosSection } from "./components/DocsPhotosSection.jsx";
import { GuidesSection } from "./components/GuidesSection.jsx";
import { UseCases } from "./components/UseCases.jsx";
import { B2BSection } from "./components/B2BSection.jsx";
import { RealFlowSection } from "./components/RealFlowSection.jsx";
import { SocialProof } from "./components/SocialProof.jsx";
import { FinalCTA } from "./components/FinalCTA.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  const [theme, setTheme] = useTheme();

  // Przełączanie zmiennych CSS przez atrybut data-theme na <html>.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Nav theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <ChaosSection />
        <HowItWorks />
        <FeatureGrid />
        <StagesSection />
        <CostsSection />
        <DocsPhotosSection />
        <GuidesSection />
        <UseCases />
        <B2BSection />
        <RealFlowSection />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
