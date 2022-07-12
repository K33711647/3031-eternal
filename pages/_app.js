import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import Header from "../components/header";
import Footer from "../components/footer";

export default function App({ Component, pageProps, router }) {
  const url = `${router.route}`;

  return (
    <>
      <ThemeProvider attribute="class">
        <Header />
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
