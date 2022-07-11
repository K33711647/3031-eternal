import Image from "next/image";
import Link from "next/link";

import { useNextSanityImage } from "next-sanity-image";
import { sanityConfig } from "../../library/config";

export default function SectionImages({ content }) {
	function EachImage(source, index) {
		return (
			<Image
				{...useNextSanityImage(sanityConfig, source)}
				key={index}
				layout="responsive"
				className={`object-contain ${content.imageStyle} `}
			/>
		);
	}

	const Gallery = () => {
		const gridCols = {
			default: "grid-cols-1",
			"grid-cols-2": "grid-cols-2",
			"grid-cols-3": "grid-cols-3",
			"grid-cols-4": "grid-cols-4",
			"grid-cols-5": "grid-cols-5",
		};
		const images = content.images.map((image, index) => {
			return EachImage(image, index);
		});
		const background =
			content.background != null ? content.background : "transparent";

		return (
			<section className={`bg-${background}`}>
				<div
					className={` m-auto grid h-full w-full max-w-screen-2xl gap-2 ${
						gridCols[content.grid]
					} grid-rows-1 items-start p-5 md:gap-16 md:p-16`}
				>
					{images}
				</div>
			</section>
		);
	};

	return <Gallery />;
}
