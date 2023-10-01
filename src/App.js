import React, { Suspense, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import HamburgerMenu from "./components/HamburgerMenu";
import Menu from "./components/Menu";
import HamburgerIcon from "./components/HamburgerIcon";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Hero from "./pages/Hero";
import About from "./pages/About";

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
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
