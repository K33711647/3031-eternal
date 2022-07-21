import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { projectIndexQuery } from "../../library/queries";
import { getClient, overlayDrafts } from "../../library/sanity.server";
import { useState, useRef, useEffect } from "react";

import Swiper, { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

export default function Index({ allProjects, ...pageProps }) {
  let [swiperActive, setSwiperActive] = useState(false);
  const swiperStatus = useRef(null);
  const swiperRef = useRef(null);
  const swiperNext = useRef();
  const swiperPrevious = useRef();
  const previous = swiperPrevious.current;
  const next = swiperNext.current;
  const swiperOpts = {
    loop: true,
    slidesPerView: 1,
    draggable: 1,
    modules: [Navigation],
    initialSlide: 2,
    navigation: {
      prevEl: previous,
      nextEl: next,
    },
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // This is be executed when `loading` state changes
    swiperStatus.current = new Swiper(swiperRef.current, swiperOpts);
    goToSlide();
  }, [loading, swiperOpts]);

  let swiper = swiperStatus.current;

  function destroy() {
    swiperStatus.current.destroy(true, true);
    setSwiperActive(false);
    setLoading(false);
  }

  function init() {
    setSwiperActive(true);
    setLoading(true);
  }

  function goToSlide() {
    swiperStatus.current.slideTo(4);
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Projects</title>
        </Head>
        <Container>
          <div
            className={`transition-all duration-1000 ${
              swiperActive ? "relative z-50 h-full w-full bg-black " : ""
            }`}
          >
            <div className="fixed top-0 z-50 flex w-screen items-center justify-center ">
              <h1
                className={`text-white ${swiperActive ? "" : "hidden"}`}
                onClick={destroy}
              >
                destroy
              </h1>
            </div>
            <div
              ref={swiperRef}
              className={`h-screen origin-bottom py-32 px-5 text-white transition-all duration-1000 lg:px-60 lg:py-40 ${
                swiperActive ? "swiper" : ""
              }`}
            >
              <div className={`${swiperActive ? "" : "hidden"}`}>
                <div className="fixed left-5 z-50 flex h-screen w-8 items-center justify-center md:left-28 md:w-14">
                  <svg
                    ref={swiperPrevious}
                    viewBox="0 0 61 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.50811 31.6136C1.10891 31.2144 0.884647 30.673 0.884647 30.1084C0.884647 29.5438 1.10891 29.0024 1.50811 28.6032L16.56 13.5514C16.9592 13.1522 17.5006 12.9279 18.0651 12.9279C18.6297 12.9279 19.1711 13.1522 19.5703 13.5514C19.9695 13.9506 20.1938 14.492 20.1938 15.0566C20.1938 15.6211 19.9695 16.1625 19.5703 16.5617L6.02367 30.1084L19.5703 43.6551C19.9695 44.0543 20.1938 44.5957 20.1938 45.1602C20.1938 45.7248 19.9695 46.2662 19.5703 46.6654C19.1711 47.0646 18.6297 47.2889 18.0651 47.2889C17.5006 47.2889 16.9592 47.0646 16.56 46.6654L1.50811 31.6136Z"
                      fill="white"
                    />
                    <path
                      d="M0.884409 30.1084C0.884055 29.8284 0.938942 29.5511 1.04593 29.2924C1.15291 29.0336 1.30989 28.7985 1.50788 28.6005C1.70586 28.4025 1.94096 28.2456 2.1997 28.1386C2.45845 28.0316 2.73576 27.9767 3.01575 27.9771L57.2024 27.9771C57.7677 27.9771 58.3098 28.2016 58.7095 28.6013C59.1092 29.001 59.3337 29.5431 59.3337 30.1084C59.3337 30.6737 59.1092 31.2158 58.7095 31.6155C58.3098 32.0152 57.7677 32.2397 57.2024 32.2397L3.01575 32.2397C2.73576 32.2401 2.45845 32.1852 2.1997 32.0782C1.94096 31.9712 1.70586 31.8143 1.50788 31.6163C1.30989 31.4183 1.15291 31.1832 1.04593 30.9244C0.938942 30.6657 0.884055 30.3884 0.884409 30.1084Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="fixed right-5 z-50 flex h-screen w-8 items-center justify-center md:right-28 md:w-14">
                  <svg
                    ref={swiperNext}
                    viewBox="0 0 61 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M58.7087 28.6032C59.1079 29.0024 59.3321 29.5438 59.3321 30.1084C59.3321 30.673 59.1079 31.2144 58.7087 31.6136L43.6568 46.6654C43.2576 47.0646 42.7162 47.2889 42.1517 47.2889C41.5871 47.2889 41.0457 47.0646 40.6465 46.6654C40.2473 46.2662 40.023 45.7248 40.023 45.1602C40.023 44.5957 40.2473 44.0543 40.6465 43.6551L54.1931 30.1084L40.6465 16.5617C40.2473 16.1625 40.023 15.6211 40.023 15.0566C40.023 14.492 40.2473 13.9506 40.6465 13.5514C41.0457 13.1522 41.5871 12.9279 42.1517 12.9279C42.7162 12.9279 43.2576 13.1522 43.6568 13.5514L58.7087 28.6032Z"
                      fill="white"
                    />
                    <path
                      d="M59.3324 30.1084C59.3327 30.3884 59.2779 30.6657 59.1709 30.9244C59.0639 31.1832 58.9069 31.4183 58.7089 31.6163C58.5109 31.8143 58.2758 31.9712 58.0171 32.0782C57.7583 32.1852 57.481 32.2401 57.201 32.2397L3.01441 32.2397C2.44914 32.2397 1.90703 32.0152 1.50732 31.6155C1.10762 31.2158 0.883066 30.6737 0.883066 30.1084C0.883066 29.5431 1.10762 29.001 1.50732 28.6013C1.90703 28.2016 2.44914 27.9771 3.01441 27.9771L57.201 27.9771C57.481 27.9767 57.7583 28.0316 58.0171 28.1386C58.2758 28.2456 58.5109 28.4025 58.7089 28.6005C58.9069 28.7985 59.0639 29.0336 59.1709 29.2924C59.2779 29.5511 59.3327 29.8284 59.3324 30.1084Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={` origin-bottom transition-all duration-1000 ${
                  swiperActive
                    ? "swiper-wrapper "
                    : "grid grid-cols-2 gap-4 md:gap-10 xl:grid-cols-4"
                }`}
              >
                <div
                  onClick={init}
                  data-slide-id="4"
                  className={`relative text-white ${
                    swiperActive
                      ? "swiper-slide flex h-screen w-screen items-center justify-center"
                      : "h-0 w-full overflow-hidden pb-full"
                  }`}
                >
                  <div>
                    <img
                      className={`${
                        swiperActive ? "p-20" : "w-full object-cover"
                      }`}
                      src="https://cdn.sanity.io/images/i13tycho/production/e4faf7b12dc090171097c6088765320b49ca97c5-360x640.jpg"
                    />
                    <div
                      className={`text-center ${
                        swiperActive
                          ? ""
                          : "absolute top-0 flex h-full w-full items-center justify-center bg-black opacity-0 hover:opacity-70"
                      }`}
                    >
                      <h3 className="pb-4 text-3xl">1 Exit Sign</h3>
                      <p className={`${swiperActive ? "" : "hidden"}`}>
                        An imaginary web series by Eternal.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  onClick={init}
                  className={`relative text-white ${
                    swiperActive
                      ? "swiper-slide flex h-screen w-screen items-center justify-center"
                      : "h-0 w-full overflow-hidden pb-full"
                  }`}
                >
                  <div>
                    <img
                      className={`${
                        swiperActive ? "p-20" : "w-full object-cover"
                      }`}
                      src="https://cdn.sanity.io/images/i13tycho/production/e4faf7b12dc090171097c6088765320b49ca97c5-360x640.jpg"
                    />
                    <div
                      className={`text-center ${
                        swiperActive
                          ? ""
                          : "absolute top-0 flex h-full w-full items-center justify-center bg-black opacity-0 hover:opacity-70"
                      }`}
                    >
                      <h3 className="pb-4 text-3xl">2 Exit Sign</h3>
                      <p className={`${swiperActive ? "" : "hidden"}`}>
                        An imaginary web series by Eternal.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  onClick={init}
                  className={`relative text-white ${
                    swiperActive
                      ? "swiper-slide flex h-screen w-screen items-center justify-center"
                      : "h-0 w-full overflow-hidden pb-full"
                  }`}
                >
                  <div>
                    <img
                      className={`${
                        swiperActive ? "p-20" : "w-full object-cover"
                      }`}
                      src="https://cdn.sanity.io/images/i13tycho/production/e4faf7b12dc090171097c6088765320b49ca97c5-360x640.jpg"
                    />
                    <div
                      className={`text-center ${
                        swiperActive
                          ? ""
                          : "absolute top-0 flex h-full w-full items-center justify-center bg-black opacity-0 hover:opacity-70"
                      }`}
                    >
                      <h3 className="pb-4 text-3xl">3 Exit Sign</h3>
                      <p className={`${swiperActive ? "" : "hidden"}`}>
                        An imaginary web series by Eternal.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  onClick={init}
                  className={`relative text-white ${
                    swiperActive
                      ? "swiper-slide flex h-screen w-screen items-center justify-center"
                      : "h-0 w-full overflow-hidden pb-full"
                  }`}
                >
                  <div>
                    <img
                      className={`${
                        swiperActive ? "p-20" : "w-full object-cover"
                      }`}
                      src="https://cdn.sanity.io/images/i13tycho/production/e4faf7b12dc090171097c6088765320b49ca97c5-360x640.jpg"
                    />
                    <div
                      className={`text-center ${
                        swiperActive
                          ? ""
                          : "absolute top-0 flex h-full w-full items-center justify-center bg-black opacity-0 hover:opacity-70"
                      }`}
                    >
                      <h3 className="pb-4 text-3xl">4 Exit Sign</h3>
                      <p className={`${swiperActive ? "" : "hidden"}`}>
                        An imaginary web series by Eternal.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  onClick={init}
                  className={`relative text-white ${
                    swiperActive
                      ? "swiper-slide flex h-screen w-screen items-center justify-center"
                      : "h-0 w-full overflow-hidden pb-full"
                  }`}
                >
                  <div>
                    <img
                      className={`${
                        swiperActive ? "p-20" : "w-full object-cover"
                      }`}
                      src="https://cdn.sanity.io/images/i13tycho/production/e4faf7b12dc090171097c6088765320b49ca97c5-360x640.jpg"
                    />
                    <div
                      className={`text-center ${
                        swiperActive
                          ? ""
                          : "absolute top-0 flex h-full w-full items-center justify-center bg-black opacity-0 hover:opacity-70"
                      }`}
                    >
                      <h3 className="pb-4 text-3xl">5 Exit Sign</h3>
                      <p className={`${swiperActive ? "" : "hidden"}`}>
                        An imaginary web series by Eternal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allProjects = overlayDrafts(
    await getClient(preview).fetch(projectIndexQuery)
  );
  return {
    props: { allProjects, preview },
  };
}
