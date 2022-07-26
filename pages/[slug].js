import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

import Container from "../components/container";
import Layout from "../components/layout";

import { useEffect } from "react";

import { pageSlugsQuery, pageQuery } from "../library/queries";
import { urlForImage, usePreviewSubscription } from "../library/sanity";
import {
  sanityClient,
  getClient,
  overlayDrafts,
} from "../library/sanity.server";

// https://greensock.com/forums/topic/24799-syntaxerror-unexpected-token-export-on-npm-import/?do=findComment&comment=118873&_rid=120250
import { gsap } from "gsap/dist/gsap.js";
import { Draggable } from "gsap/dist/Draggable.js";

export default function Page({ preview, data = {} }) {
  const router = useRouter();
  const slug = data?.pages?.page?.slug;
  const pageTitle = data?.pages?.page?.pageTitle;

  const {
    data: { page },
  } = usePreviewSubscription(pageQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  useEffect(() => {
    gsap.config({ trialWarn: false });
    gsap.registerPlugin(Draggable);

    const slides = gsap.utils.toArray(".rolodex li");

    const slideCount = slides.length;
    const itemH = slides[0].offsetHeight;
    const wrapH = slideCount * itemH;
    const wrapVal = gsap.utils.wrap(0, slideCount * itemH);
    const r = (slideCount * itemH) / (2 * Math.PI);

    gsap.set(".rolodex", { height: `${2 * Math.round(r)}px` });
    const proxy = document.createElement("div");

    slides.forEach((s, i) => {
      gsap.set(s, {
        yPercent: -50,
        y: r,
        z: r,
        rotateX: `${i * (360 / slides.length)}deg`,
        transformOrigin: `50% 50% -${r}px`,
      });
    });

    const animation = gsap.to(slides, {
      duration: 1,
      rotateX: "-=360deg",
      ease: "none",
      paused: true,
    });

    const drag = Draggable.create(proxy, {
      type: "y",
      trigger: ".rolodex ul",
      inertia: true,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      snap: {
        y: (y) => {
          return Math.round(y / itemH) * itemH;
        },
      },
    });

    function updateProgress() {
      animation.progress(wrapVal(this.y) / wrapH);
    }
  }, []);

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Layout>
        <Head>
          <title></title>
        </Head>
        <Container>
          <div className="flex h-screen flex-col items-center justify-center">
            <h1 className="pb-10 text-2xl text-white">
              Eternal is currently hiring...
            </h1>
            <div className="rolodex text-white">
              <ul>
                <li>
                  <a
                    href="https://eternal.plus/"
                    rel="noreferrer"
                    target="_blank"
                    className="rounded-lg border border-solid pl-7 pt-3 pb-3 pr-7 text-base text-white hover:bg-white hover:text-black md:text-lg"
                  >
                    iOS Engineer
                  </a>
                </li>
                <li>
                  <a
                    href="https://eternal.plus/"
                    rel="noreferrer"
                    target="_blank"
                    className="rounded-lg border border-solid pl-7 pt-3 pb-3 pr-7 text-base text-white hover:bg-white hover:text-black md:text-lg"
                  >
                    Full Stack Engineer
                  </a>
                </li>
                <li>
                  <a
                    href="https://eternal.plus/"
                    rel="noreferrer"
                    target="_blank"
                    className="rounded-lg border border-solid pl-7 pt-3 pb-3 pr-7 text-base text-white hover:bg-white hover:text-black md:text-lg"
                  >
                    Lead Designer
                  </a>
                </li>
                <li>
                  <a
                    href="https://eternal.plus/"
                    rel="noreferrer"
                    target="_blank"
                    className="rounded-lg border border-solid pl-7 pt-3 pb-3 pr-7 text-base text-white hover:bg-white hover:text-black md:text-lg"
                  >
                    Engineering Manager
                  </a>
                </li>
                <li>
                  <a
                    href="https://eternal.plus/"
                    rel="noreferrer"
                    target="_blank"
                    className="rounded-lg border border-solid pl-7 pt-3 pb-3 pr-7 text-base text-white hover:bg-white hover:text-black md:text-lg"
                  >
                    iOS Engineer
                  </a>
                </li>
                <li>
                  <a
                    href="https://eternal.plus/"
                    rel="noreferrer"
                    target="_blank"
                    className="rounded-lg border border-solid pl-7 pt-3 pb-3 pr-7 text-base text-white hover:bg-white hover:text-black md:text-lg"
                  >
                    Full Stack Engineer
                  </a>
                </li>
                <li>
                  <a
                    href="https://eternal.plus/"
                    rel="noreferrer"
                    target="_blank"
                    className="rounded-lg border border-solid pl-7 pt-3 pb-3 pr-7 text-base text-white hover:bg-white hover:text-black md:text-lg"
                  >
                    Lead Designer
                  </a>
                </li>
                <li>
                  <a
                    href="https://eternal.plus/"
                    rel="noreferrer"
                    target="_blank"
                    className="rounded-lg border border-solid pl-7 pt-3 pb-3 pr-7 text-base text-white hover:bg-white hover:text-black md:text-lg"
                  >
                    Engineering Manager
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const pages = await getClient(preview).fetch(pageQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      key: params.slug,
      data: {
        pages,
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(pageSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
