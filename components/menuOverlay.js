import Link from "next/link";
import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
  const goToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`fixed top-0 left-0 z-20 flex h-full w-full transform flex-row flex-wrap  bg-black bg-opacity-100 p-5 text-grey transition-all duration-1000 md:p-10 ${
        navbarOpen ? "translate-y-full" : "translate-y-full"
      }`}
    >
      <button
        className={`fixed top-10 left-10  z-30 flex h-5 w-5 transition-all duration-1000 ${
          navbarOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          setNavbarOpen(!navbarOpen);
          goToTop(event);
        }}
      >
        <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L32.5 32.5" stroke="white" strokeWidth="2" />
          <path d="M1 32.5L32.5 0.999999" stroke="white" strokeWidth="2" />
        </svg>
      </button>

      <nav className="relative z-20 flex w-full flex-row flex-wrap content-end pt-10 md:content-end md:text-center">
        <Link href="/work">
          <a
            className={`-translate-z-full relative w-full p-5 font-semi text-2xl uppercase transition-all delay-[300ms] duration-300 hover:text-white focus:text-white focus:outline-none lg:text-4xl ${
              navbarOpen ? "translate-z-0" : "-translate-z-full"
            }`}
            onClick={(e) => {
              setNavbarOpen(false);
            }}
          >
            Who we are
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`-translate-z-full relative w-full p-5 font-semi text-2xl uppercase transition-all delay-[350ms] duration-300 hover:text-white focus:text-white focus:outline-none lg:text-4xl ${
              navbarOpen ? "translate-z-0" : "-translate-z-full"
            }`}
            onClick={(e) => {
              setNavbarOpen(false);
            }}
          >
            Recent projects
          </a>
        </Link>
        <Link href="/">
          <a
            className={`-translate-z-full relative w-full p-5 font-semi text-2xl uppercase transition-all delay-[400ms] duration-300 hover:text-white focus:text-white focus:outline-none lg:text-4xl ${
              navbarOpen ? "translate-z-0" : "-translate-z-full"
            }`}
            onClick={(e) => {
              setNavbarOpen(false);
            }}
          >
            Jobs
          </a>
        </Link>
        <Link href="/">
          <a
            className={`-translate-z-full relative w-full p-5 font-semi text-2xl uppercase transition-all delay-[450ms] duration-300 hover:text-white focus:text-white focus:outline-none lg:text-4xl ${
              navbarOpen ? "translate-z-0" : "-translate-z-full"
            }`}
            onClick={(e) => {
              setNavbarOpen(false);
            }}
          >
            Community space
          </a>
        </Link>
        <Link href="/">
          <a
            className={`-translate-z-full relative w-full p-5 font-semi text-2xl uppercase transition-all delay-[500ms] duration-300 hover:text-white focus:text-white focus:outline-none lg:text-4xl ${
              navbarOpen ? "translate-z-0" : "-translate-z-full"
            }`}
            onClick={(e) => {
              setNavbarOpen(false);
            }}
          >
            Contact
          </a>
        </Link>
      </nav>
      <div className={`flex w-full self-end`}></div>
    </div>
  );
};
export default MenuOverlay;
