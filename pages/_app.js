import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import MenuOverlay from "../components/menuOverlay";

import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

export default function App({ Component, pageProps, router }) {
  const url = `${router.route}`;
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <ThemeProvider attribute="class">
        <div
          className={`transition-translate duration-1000 ${
            navbarOpen
              ? "h-screen -translate-y-full"
              : "min-h-screen translate-y-0"
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
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}
