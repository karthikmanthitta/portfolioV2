import { useEffect, useState } from "react";
import About from "./pages/About";
import Hero from "./pages/Hero";
import { AnimatePresence } from "framer-motion";
import HamburgerMenu from "./components/HamburgerMenu";
import Menu from "./components/Menu";
import HamburgerIcon from "./components/HamburgerIcon";

function App() {
  const [showHamburger, setShowHamburger] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const adjustPage = () => {
    if (window.pageYOffset > 60) {
      setShowHamburger(true);
    } else {
      setShowHamburger(false);
    }
  };

  useEffect(() => {
    adjustPage();
    window.addEventListener("scroll", (e) => {
      adjustPage();
    });
  }, []);

  const handleHamburgerOpen = () => {
    document.body.style.overflowY = "hidden";
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
    document.body.style.overflowY = "scroll";
  };

  return (
    <div>
      {showHamburger && !openMenu && (
        <HamburgerIcon handleHamburgerOpen={handleHamburgerOpen} />
      )}
      {!showHamburger && !openMenu && <Menu />}
      <AnimatePresence>
        {openMenu && <HamburgerMenu handleCloseMenu={handleCloseMenu} />}
      </AnimatePresence>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default App;
