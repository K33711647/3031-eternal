import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ navbarOpen, setNavbarOpen, splashOpen, setSplashOpen }) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const goToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        className={`absolute z-20 flex w-full justify-between p-5 md:p-16 ${
          navbarOpen ? "" : ""
        }`}
      >
        <button
          className={`flex h-10 w-10 md:h-20 md:w-20  ${navbarOpen ? "" : ""}`}
          onClick={() => {
            setNavbarOpen(!navbarOpen);
            goToTop(event);
          }}
        >
          <svg
            viewBox="0 0 67 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`hover:animate-spin ${navbarOpen ? "animate-spin" : ""}`}
          >
            <path
              d="M0.384 30.848C7.488 12.512 22.08 0.799995 38.016 0.799995C53.952 0.799995 66.72 12.416 66.72 26.912C66.72 45.92 51.744 60.704 32.352 60.992C26.592 61.088 20.544 51.968 20.544 43.136C20.544 35.264 23.904 29.984 28.512 29.504C33.984 28.928 38.496 39.392 43.584 39.392C45.12 39.392 45.888 37.28 45.6 33.92C44.928 26.144 40.8 20.768 33.696 20.768C23.04 20.768 13.44 30.656 13.44 41.696C13.44 59.36 24.384 68 37.536 68.384C46.752 68.672 56.256 63.392 63.744 54.944L64.512 55.424C56.256 68.096 44.448 75.776 32.64 75.776C18.72 75.776 5.856 66.56 5.376 48.416C4.8 29.12 21.792 17.216 35.808 17.216C45.408 17.216 53.568 22.976 53.568 35.168C53.568 39.296 51.072 45.92 48 45.632C43.488 45.248 37.44 39.296 30.048 38.72C26.208 38.432 23.808 40.832 23.808 43.424C23.808 49.568 33.312 55.232 42.72 54.464C52.704 53.6 60.096 44.48 60.096 32.96C60.096 18.944 49.632 8.48 35.808 8.48C22.464 8.48 9.12 17.216 1.248 31.232L0.384 30.848Z"
              fill="white"
            />
          </svg>
        </button>

        <div
          className={`${
            router.pathname === "/" ? "" : "md:hidden"
          } z-20 hidden items-center md:relative md:flex`}
        >
          <Link href="https://apps.apple.com/us/app/eternal/id1615235638">
            <a
              target="_blank"
              rel="noreferrer"
              className={`rounded-lg border border-solid pl-7 pt-3 pb-3 pr-7 text-white hover:bg-white hover:text-black md:text-lg ${
                navbarOpen ? "" : ""
              }`}
            >
              Download Eternal+
            </a>
          </Link>
        </div>
      </header>
    </>
  );
};
export default Header;
