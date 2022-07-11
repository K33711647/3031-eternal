import Image from "next/image";
import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";

import { sanityConfig } from "../../library/config";
import { urlForImage } from "../../library/sanity";

import { useEffect } from "react";

export default function SectionImages({ content }) {
	const background =
		content.background != null ? content.background : "transparent";
	const aspectRatioWidth =
		content.aspectRatioWidth != null
			? `aspect-w-${parseInt(content.aspectRatioWidth)}`
			: "aspect-w-16";
	const aspectRatioHeight =
		content.aspectRatioHeight != null
			? `aspect-h-${parseInt(content.aspectRatioHeight)}`
			: "aspect-h-9";
	const videoId = content.videoId;

	const Iframe = () => {
		return (
			<div className={`aspect-w-16 aspect-h-9`}>
				<iframe
					src={`https://player.vimeo.com/video/${videoId}?color=83FF13&title=0&byline=0&portrait=0&badge=0`}
					frameBorder="0"
					allow="autoplay; fullscreen; picture-in-picture"
					className={`h-full w-full`}
				></iframe>
			</div>
		);
	};

	// console.log(aspectRatioWidth);
	return (
		<>
			<section className={`bg-${background}`}>
				<div className={`m-auto h-full w-full max-w-screen-2xl p-5 md:p-16`}>
					<Iframe />
				</div>
			</section>
		</>
	);
}
