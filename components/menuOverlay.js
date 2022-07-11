import Link from "next/link";
import { useRef, useEffect, useState, useCallback } from "react";

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
  const canvasRef = useRef(null);
  const canvasHolder = useRef(null);
  function handleClick(event) {
    const canvas = canvasRef.current;
    placeImage(canvas, event.clientX, event.clientY);
  }

  const placeImage = useCallback((canvas, posX, posY) => {
    const image = new Image(112, 58);
    const context = canvas.getContext("2d");

    image.src = "/images/vector/logo-paq.svg";

    image.onload = function () {
      // save the current co-ordinate system before we screw with it
      context.save();

      context.imageSmoothingEnabled;

      // draw it up and to the left by half the width and height of the image
      context.drawImage(image, posX - 41.5, posY, 112, 58);

      context.imageSmoothingEnabled = false;

      // and restore the co-ords to how they were when we began
      context.restore();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const holder = canvasHolder.current;

    const logo = document.querySelector("#logo-paq");

    function setupCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const handleResize = () => {
      setupCanvas();
    };

    const onMouseMove = (event) => {
      logo.style.left = event.pageX - window.innerWidth / 2 + "px";
      logo.style.top = event.pageY + "px";
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    holder.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      holder.removeEventListener("mousemove", onMouseMove);
    };
  }, [placeImage]);
  return (
    <div
      className={`fixed top-0 left-0 z-10 flex h-full w-full transform flex-row flex-wrap bg-limegreen bg-opacity-100 p-5 text-black transition-all delay-300 duration-300 md:p-10 ${
        navbarOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      onClick={handleClick}
      ref={canvasHolder}
    >
      <canvas
        ref={canvasRef}
        className="absolute z-10 h-screen w-screen"
      ></canvas>
      <nav className="relative z-20 flex w-full flex-row flex-wrap content-end pt-10 md:content-end md:text-center">
        <Link href="/work">
          <a
            className="w-full font-semi text-5xl uppercase hover:text-white focus:text-white focus:outline-none lg:text-7xl 2xl:text-8xl"
            onClick={(e) => {
              setNavbarOpen(false);
            }}
          >
            Work
          </a>
        </Link>
        <Link href="/about">
          <a
            className="w-full font-semi text-5xl uppercase hover:text-white focus:text-white focus:outline-none lg:text-7xl 2xl:text-8xl"
            onClick={(e) => {
              setNavbarOpen(false);
            }}
          >
            About
          </a>
        </Link>
        <Link href="/">
          <a
            className="w-full font-semi text-5xl uppercase hover:text-white focus:text-white focus:outline-none lg:text-7xl 2xl:text-8xl"
            onClick={(e) => {
              setNavbarOpen(false);
            }}
          >
            Wears
          </a>
        </Link>
        <Link href="/">
          <a
            className="w-full font-semi text-5xl uppercase hover:text-white focus:text-white focus:outline-none lg:text-7xl 2xl:text-8xl"
            onClick={(e) => {
              setNavbarOpen(false);
            }}
          >
            Rap in Paper
          </a>
        </Link>
      </nav>

      <nav className="flex w-full self-end">
        <Link href="/">
          <a
            className="w-full font-semi text-xl hover:text-white focus:text-white focus:outline-none lg:text-2xl"
            onClick={(e) => {
              setNavbarOpen(false);
            }}
          >
            Instagram
          </a>
        </Link>
        <Link href="/">
          <a
            className="w-full text-center font-semi text-xl hover:text-white focus:text-white focus:outline-none lg:text-2xl"
            onClick={(e) => {
              setNavbarOpen(false);
            }}
          >
            LinkedIn
          </a>
        </Link>
        <Link href="/">
          <a
            className="w-full text-right text-xl hover:text-white focus:text-white focus:outline-none lg:text-2xl"
            onClick={(e) => {
              setNavbarOpen(false);
            }}
          >
            Email
          </a>
        </Link>
      </nav>
    </div>
  );
};
export default MenuOverlay;
