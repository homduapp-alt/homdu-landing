// PartnersApp.jsx — B2B page (homdu.pl/partnerzy): partnerzy branżowi.
// Shares every component + design token with the B2C page; only the funnel differs.

import { useTheme } from "./useTheme.js";

import { Nav } from "./components/Nav.jsx";
import { B2BSection } from "./components/B2BSection.jsx";
import { Footer } from "./components/Footer.jsx";

export default function PartnersApp() {
  const [theme, setTheme] = useTheme();

  return (
    <>
      <Nav variant="b2b" />
      <main>
        <B2BSection />
      </main>
      <Footer theme={theme} setTheme={setTheme} variant="b2b" />
    </>
  );
}
