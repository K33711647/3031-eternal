import Link from "next/link";
import { useRef, useEffect, useState, useCallback } from "react";
import { urlForImage } from "../library/sanity";

export default function Splash({ splashOpen, setSplashOpen, splashScreen }) {
  const canvasRef = useRef(null);
  function handleClick(event) {
    placeImage(event.target, event.clientX, event.clientY, splashScreen);
  }

  const placeImage = useCallback(
    (canvas, posX, posY) => {
      const imageUrls = [];
      const imageSource = splashScreen.map((images, index) => {
        images.images.map((image, index) => {
          imageUrls.push(urlForImage(image.asset));
        });
      });

      const imageSize = window.innerWidth < 400 ? 300 : 600;
      const image = new Image(imageSize, imageSize);
      const context = canvas.getContext("2d");
      const radians = Math.PI / 180;
      const rotate = Math.random() * 120 - 90;

      image.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];

      image.onload = function () {
        // save the current co-ordinate system before we screw with it
        context.save();

        // context.translate(posX - imageSize / 2, posY - imageSize / 2); //let's translate
        // context.rotate(radians * rotate); //increment the angle and rotate the image

        // draw it up and to the left by half the width and height of the image
        context.drawImage(
          image,
          posX - imageSize / 2,
          posY - imageSize / 2,
          imageSize,
          imageSize
        );

        // and restore the co-ords to how they were when we began
        context.restore();
      };
    },
    [splashScreen]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const stickerCount = window.innerWidth < 400 ? 5 : 10;

    function setupStickers() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      for (var i = 1; i < stickerCount; i++)
        placeImage(
          canvas,
          Math.floor(Math.random() * window.innerWidth) + 1,
          Math.floor(Math.random() * window.innerHeight) + 1
        );
    }

    const handleResize = () => {
      setupStickers();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [placeImage]);

  return (
    <div
      className={`absolute z-30 h-screen w-screen bg-white text-black transition duration-500 ease-in-out dark:bg-black dark:text-white ${
        splashOpen ? "-translate-y-full opacity-0" : "opacity-100"
      }`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 h-screen w-screen"
        onClick={handleClick}
      ></canvas>
      <div className="relative z-10 grid grid-cols-3 content-between p-5 lg:p-10">
        <Link href="/">
          <a className="select-none justify-self-start text-base uppercase hover:text-limegreen lg:text-4xl">
            Wears
          </a>
        </Link>
        <Link href="/work">
          <a
            onClick={() => setSplashOpen(!splashOpen)}
            className="select-none justify-self-center text-base uppercase hover:text-limegreen lg:text-4xl"
          >
            Works
          </a>
        </Link>
        <Link href="/">
          <a className="select-none justify-self-end text-base uppercase hover:text-limegreen lg:text-4xl">
            Rap in Paper
          </a>
        </Link>
      </div>
    </div>
  );
}
