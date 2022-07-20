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
      className={`fixed top-0 left-0 z-20 flex h-screen w-screen translate-y-full transform flex-row flex-wrap bg-black p-10 text-grey transition-all duration-1000 md:p-20 ${
        navbarOpen ? "" : "hidden h-0"
      }`}
    >
      <button
        className={`flex h-5 w-5 duration-1000 md:h-10 md:w-10 ${
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

      <nav className="relative z-20 flex w-full flex-row flex-wrap content-end pt-10 text-center md:content-end">
        <Link href="/">
          <a
            className={`relative w-full pb-10 font-semi text-2xl uppercase delay-[300ms] duration-300 hover:text-white focus:text-white focus:outline-none lg:text-4xl ${
              navbarOpen ? "translate-y-0" : "translate-y-80"
            }`}
            onClick={(e) => {
              setNavbarOpen(false);
            }}
          >
            Who we are
          </a>
        </Link>
        <Link href="/">
          <a
            className={`relative w-full pb-10 font-semi text-2xl uppercase delay-[350ms] duration-300 hover:text-white focus:text-white focus:outline-none lg:text-4xl ${
              navbarOpen ? "translate-y-0" : "translate-y-80"
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
            className={`relative w-full pb-10 font-semi text-2xl uppercase delay-[400ms] duration-300 hover:text-white focus:text-white focus:outline-none lg:text-4xl ${
              navbarOpen ? "translate-y-0" : "translate-y-80"
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
            className={`relative w-full pb-10 font-semi text-2xl uppercase delay-[450ms] duration-300 hover:text-white focus:text-white focus:outline-none lg:text-4xl ${
              navbarOpen ? "translate-y-0" : "translate-y-80"
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
            className={`relative w-full pb-10 font-semi text-2xl uppercase delay-[500ms] duration-300 hover:text-white focus:text-white focus:outline-none lg:text-4xl ${
              navbarOpen ? "translate-y-0" : "translate-y-80"
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