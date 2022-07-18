import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import MenuOverlay from "../components/menuOverlay";

export default function App({ Component, pageProps, router }) {
  const url = `${router.route}`;
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <ThemeProvider attribute="class">
        <div
          className={`h-screen transition-all duration-1000 ${
            navbarOpen ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
          <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={url} />
          </AnimatePresence>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
