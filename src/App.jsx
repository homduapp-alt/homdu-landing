// App.jsx — B2C page (homdu.pl): inwestorzy.

import { useTheme } from "./useTheme.js";

import { Nav } from "./components/Nav.jsx";
import { Hero } from "./components/Hero.jsx";
import { VideoSection } from "./components/VideoSection.jsx";
import { ChaosSection } from "./components/ChaosSection.jsx";
import { HowItWorks } from "./components/HowItWorks.jsx";
import { FeatureGrid } from "./components/FeatureGrid.jsx";
import { StagesSection } from "./components/StagesSection.jsx";
import { CostsSection } from "./components/CostsSection.jsx";
import { DocsPhotosSection } from "./components/DocsPhotosSection.jsx";
import { GuidesSection } from "./components/GuidesSection.jsx";
import { FounderB2C } from "./components/FounderB2C.jsx";
import { SocialProof } from "./components/SocialProof.jsx";
import { FAQSection } from "./components/FAQSection.jsx";
import { FinalCTA } from "./components/FinalCTA.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  const [theme, setTheme] = useTheme();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <VideoSection />
        <ChaosSection />
        <HowItWorks />
        <FeatureGrid />
        <StagesSection />
        <CostsSection />
        <DocsPhotosSection />
        <GuidesSection />
        <FounderB2C />
        <SocialProof />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer theme={theme} setTheme={setTheme} />
    </>
  );
}
