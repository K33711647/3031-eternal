import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "../library/sanity";
import { useNextSanityImage } from "next-sanity-image";
import { sanityConfig } from "../library/config";

const Work = ({
  imageRatio,
  setImageRatio,
  allProjects,
  activeProject,
  setActiveProject,
}) => {
  const imageRef = useRef(null);
  const captionRef = useRef(null);

  function changeProject() {
    const image = imageRef.current;
    const currentProject = allProjects[activeProject]
      ? allProjects[activeProject]
      : allProjects[0];
    const imageSource = currentProject.image.asset;
    const imageUrl = urlForImage(imageSource);
    image.style.backgroundImage = `url("${imageUrl}")`;
    image.style.width = currentProject.ratio;
  }

  const SingleImage = ({ image }) => {
    const imageProps = useNextSanityImage(sanityConfig, image);
    return <Image {...imageProps} priority={true} />;
  };

  const Projects = () => {
    const project = allProjects.map((project, index) => {
      const imageSource = project.image.asset;
      const imageUrl = urlForImage(imageSource);
      const slug = project.slug;

      return (
        <li key={index}>
          <Link href={`/work/${slug}`} scroll={false}>
            <a
              className={`overflow-hidden text-ellipsis whitespace-nowrap font-semi hover:text-limegreen ${
                activeProject == index ? "text-limegreen" : ""
              }`}
              data-id={index}
              data-poster={imageUrl}
              data-poster-ratio={project.ratio}
              onMouseEnter={() => {
                setActiveProject(index);
              }}
              data-caption="This is also a caption"
            >
              {project.client}
            </a>
          </Link>
          <div className="hidden">
            <SingleImage image={project.image} />
          </div>
        </li>
      );
    });
    return (
      <div className="col-span-1 h-full pb-8 pt-16 text-xl md:mt-28 md:pb-28 md:pt-0 md:text-xl">
        <ul className="hide-scroll-bar h-full overflow-y-scroll transition-all md:pb-10">
          {project}
        </ul>
      </div>
    );
  };

  useEffect(() => {
    var activeElement = document.querySelector(`[data-id="${activeProject}"]`);
    var activeElementPosition = activeElement.offsetTop - 60;

    document.querySelector("ul").scrollTop = activeElementPosition;
    changeProject();
  });

  return (
    <div className="grid h-screen grid-cols-1 grid-rows-2 p-5 md:grid-cols-4 md:grid-rows-1 md:p-10">
      <div className="relative">
        <Projects />
        <div className="md:hidden">
          <input
            type="range"
            min="0"
            max={allProjects.length - 1}
            defaultValue={activeProject}
            valuse={activeProject}
            step="1"
            onChange={(event) => {
              setActiveProject(event.target.value);
            }}
            className="absolute -right-20 top-44 -mr-1 h-1 w-52 rotate-90 appearance-none bg-grey p-0 accent-limegreen shadow-none outline-none focus:shadow-none focus:outline-none focus:ring-0"
          />
        </div>
      </div>
      <div
        ref={imageRef}
        className={`bg-fill mb-4 min-w-full items-end rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out md:col-span-3 md:mt-28 md:mb-0 md:min-w-0 md:min-w-0 md:justify-self-end md:bg-top md:bg-center ${imageRatio}`}
        style={{
          backgroundImage: `url(${urlForImage(allProjects[0].image.asset)})`,
          width: `100%`,
        }}
      ></div>
    </div>
  );
};

export default Work;
