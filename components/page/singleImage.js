import Image from "next/image";
import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";

import { sanityConfig } from "../../library/config";

export default function SingleImage({ content }) {
	const imageProps = useNextSanityImage(sanityConfig, content.image);
	const background =
		content.background != null ? content.background : "transparent";
	return (
		<section className={`bg-${background}`}>
			<div className="m-auto h-full w-full max-w-screen-2xl p-5 md:p-10">
				<Image
					{...imageProps}
					layout="responsive"
					className="rounded-oval object-fill"
				/>
			</div>
		</section>
	);
}
