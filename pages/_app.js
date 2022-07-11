import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import Header from "../components/header";
import MenuOverlay from "../components/menuOverlay";
import Footer from "../components/footer";

export default function App({ Component, pageProps, router }) {
  const [splashOpen, setSplashOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const url = `${router.route}`;

  return (
    <>
      <ThemeProvider attribute="class">
        <Header
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
          splashOpen={splashOpen}
          setSplashOpen={setSplashOpen}
        />
        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={url} />
        </AnimatePresence>
        <Footer />
      </ThemeProvider>
    </>
  );
}
