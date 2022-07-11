import { useTheme } from "next-themes";
import { useEffect } from "react";
import Link from "next/link";

const Header = ({ navbarOpen, setNavbarOpen, splashOpen, setSplashOpen }) => {
  const { theme, setTheme } = useTheme();

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
        className={`fixed top-0 left-0 z-20 flex flex w-full justify-between pt-5 pr-5 pl-5 lg:pt-10 lg:pr-10 lg:pl-10 ${
          navbarOpen ? "fixed" : "relatve"
        }`}
      >
        <button
          className={`relative top-0 left-0 z-20 flex h-10 w-10 rounded-full border-2 border-solid hover:border-limegreen focus:outline-none dark:bg-black md:h-12 md:w-12  ${
            navbarOpen
              ? "bg-transparent hover:border-white focus:border-white dark:border-black dark:bg-transparent dark:hover:border-white"
              : "hover:border-limegreen focus:border-limegreen"
          }`}
          onClick={() => {
            setNavbarOpen(!navbarOpen);
            goToTop(event);
          }}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <span
              className={`absolute h-0.5 w-5 -translate-x-1/2 transform  transition-all duration-300 ease-in-out  ${
                navbarOpen
                  ? "rotate-45 bg-black delay-200 dark:bg-black"
                  : "-translate-y-1.5 bg-black dark:bg-white"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 -translate-x-1/2 transform bg-black transition-all duration-200 ease-in-out  ${
                navbarOpen
                  ? "w-0 bg-black opacity-50 dark:bg-black"
                  : "w-5 bg-black opacity-100 delay-200 dark:bg-white"
              }`}
            ></span>
            <span
              className={`absolute h-0.5  w-5 -translate-x-1/2 transform transition-all duration-300 ease-in-out  ${
                navbarOpen
                  ? "-rotate-45 bg-black delay-200 dark:bg-black"
                  : "translate-y-1.5 bg-black dark:bg-white"
              }`}
            ></span>
          </div>
        </button>

        <Link href="/">
          <a
            onClick={(e) => {
              setNavbarOpen(false);
            }}
            className={`rotate`}
          >
            <svg
              id="logo-paq"
              className={`rotate-item--on-hover fill-current w-20 rounded-oval border-2 border-black transition hover:cursor-pointer hover:fill-limegreen dark:border-black dark:fill-white md:w-28 ${
                navbarOpen
                  ? "absolute top-0 left-0 hover:fill-white dark:fill-black dark:hover:fill-white"
                  : "hover:fill-limegreen dark:hover:fill-limegreen"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 71.65 36.08"
            >
              <path
                d="M71.5 18C71.5 22.6791 67.6938 27.0499 61.2322 30.2807C54.8006 33.4965 45.8803 35.5 36 35.5C26.1197 35.5 17.1994 33.4965 10.7678 30.2807C4.3062 27.0499 0.5 22.6791 0.5 18C0.5 13.3209 4.3062 8.95008 10.7678 5.71929C17.1994 2.50346 26.1197 0.5 36 0.5C45.8803 0.5 54.8006 2.50346 61.2322 5.71929C67.6938 8.95008 71.5 13.3209 71.5 18Z"
                fill={`${navbarOpen ? "transparent" : "transparent"}`}
                className={`transition-fill duration-1000`}
                stroke="none"
              />
              <path
                d="M13 28.41V8.85997H17.18V10.31C17.6836 9.70529 18.3229 9.22802 19.0457 8.91698C19.7686 8.60595 20.5547 8.46992 21.34 8.51997C25.44 8.51997 27.91 11.65 27.91 15.89C27.91 20.13 25.12 23.32 21.17 23.32C20.466 23.3676 19.7598 23.2658 19.098 23.021C18.4362 22.7763 17.8336 22.3942 17.33 21.9V28.41H13ZM20.46 12.41C20.0118 12.4015 19.567 12.4888 19.1552 12.666C18.7435 12.8432 18.3743 13.1062 18.0723 13.4375C17.7704 13.7688 17.5426 14.1607 17.4042 14.5871C17.2659 15.0135 17.2201 15.4645 17.27 15.91C17.2196 16.3602 17.2648 16.8161 17.4026 17.2477C17.5404 17.6793 17.7677 18.077 18.0698 18.4148C18.3718 18.7525 18.7417 19.0227 19.1553 19.2077C19.5689 19.3927 20.0169 19.4883 20.47 19.4883C20.9231 19.4883 21.3711 19.3927 21.7847 19.2077C22.1983 19.0227 22.5682 18.7525 22.8702 18.4148C23.1723 18.077 23.3996 17.6793 23.5374 17.2477C23.6752 16.8161 23.7204 16.3602 23.67 15.91C23.7169 15.4639 23.6684 15.0129 23.5275 14.5871C23.3867 14.1612 23.1568 13.7702 22.8532 13.44C22.5495 13.1099 22.1791 12.8482 21.7664 12.6723C21.3538 12.4964 20.9084 12.4104 20.46 12.42V12.41ZM33.6 14.84L36.93 14.33C37.7 14.21 37.93 13.84 37.93 13.33C37.93 12.5 37.22 11.79 35.85 11.79C35.2547 11.7512 34.6679 11.9472 34.2155 12.3361C33.7631 12.7249 33.4811 13.2756 33.43 13.87L29.67 13.1C29.85 11.1 31.72 8.40997 35.88 8.40997C40.46 8.40997 42.14 10.97 42.14 13.87V20.79C42.1473 21.5308 42.2142 22.2699 42.34 23H38.44C38.3321 22.4738 38.2851 21.9369 38.3 21.4C37.8676 22.0552 37.2703 22.5851 36.5681 22.9362C35.8659 23.2873 35.0836 23.4472 34.3 23.4C31.2 23.4 29.41 21.35 29.41 19.1C29.42 16.6 31.27 15.18 33.6 14.84V14.84ZM38 17.46V16.83L35.32 17.26C34.41 17.4 33.73 17.83 33.73 18.82C33.73 19.56 34.21 20.27 35.41 20.27C36.61 20.27 38 19.65 38 17.46ZM54.77 28.41V21.87C54.3088 22.3831 53.7341 22.7814 53.0917 23.0331C52.4493 23.2849 51.757 23.3831 51.07 23.32C47.07 23.32 44.07 20.22 44.07 15.89C44.07 11.56 46.86 8.51997 50.9 8.51997C53.4 8.51997 54.57 9.65997 54.9 10.26V8.85997H59V28.41H54.77ZM51.64 19.41C53.32 19.41 54.83 18.24 54.83 15.88C54.8649 15.4398 54.8083 14.9972 54.6638 14.58C54.5193 14.1628 54.29 13.78 53.9904 13.4557C53.6908 13.1314 53.3273 12.8726 52.9228 12.6956C52.5183 12.5186 52.0815 12.4272 51.64 12.4272C51.1985 12.4272 50.7617 12.5186 50.3572 12.6956C49.9527 12.8726 49.5892 13.1314 49.2896 13.4557C48.99 13.78 48.7607 14.1628 48.6162 14.58C48.4717 14.9972 48.4151 15.4398 48.45 15.88C48.3977 16.3294 48.4413 16.7847 48.5778 17.216C48.7144 17.6474 48.9409 18.0448 49.2424 18.3822C49.5438 18.7195 49.9134 18.9891 50.3267 19.1732C50.74 19.3573 51.1876 19.4516 51.64 19.45V19.41Z"
                fill="black"
              />
            </svg>
          </a>
        </Link>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`relative top-0 left-0 z-20 flex h-10 w-10 overflow-hidden rounded-full border-2 border-solid bg-white hover:border-limegreen dark:bg-black md:h-12 md:w-12 ${
            navbarOpen
              ? "bg-transparent hover:border-white dark:border-black dark:bg-transparent dark:hover:border-white"
              : "hover:border-limegreen"
          }`}
        >
          <span
            className={`transition-translate absolute top-0 h-12 w-10 translate-x-1/2 bg-black duration-300 ease-in-out dark:-translate-x-1/2  ${
              navbarOpen ? "dark:bg-black" : "dark:bg-white"
            }`}
          ></span>
        </button>
      </header>
    </>
  );
};
export default Header;
