import Image from "next/image";
import Link from "next/link";

import { useNextSanityImage } from "next-sanity-image";
import { sanityConfig } from "../../library/config";

import { PortableText } from "@portabletext/react";

export default function SectionText({ content }) {
	const imageProps = useNextSanityImage(sanityConfig, content.image);
	const background =
		content.background != null ? content.background : "transparent";
	// const color = background == "black" ? "white" : "black";

	const Content = () => {
		if (!content.text)
			return (
				<div
					className={`order-first ${content.textPosition} w-full text-xl`}
				></div>
			);
		return (
			<div className={`order-first ${content.textPosition} w-full text-xl`}>
				<PortableText value={content.text} />
			</div>
		);
	};

	const SingleImage = () => {
		if (!content.image)
			return (
				<div
					className={`order-last ${content.imagePosition} w-full pb-10 md:p-0`}
				></div>
			);
		return (
			<div
				className={`order-last w-full ${content.imagePosition} pb-10 md:p-0`}
			>
				<Image
					{...imageProps}
					layout="responsive"
					className={`${content.imageStyle} object-fill`}
				/>
			</div>
		);
	};

	const Section = () => {
		return (
			<div
				className={`m-auto max-w-screen-2xl flex-row gap-16 p-5 md:flex md:p-16`}
			>
				<SingleImage />
				<Content />
			</div>
		);
	};

	return (
		<>
			<section className={`bg-${background}`}>
				<Section />
			</section>
		</>
	);
}
