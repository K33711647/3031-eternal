export default function LargeText({ content }) {
	// console.log(content);
	const background =
		content.background != null ? content.background : "transparent";
	const text = content.background == "black" ? "white" : "";

	return (
		<section className={`bg-${background} text-${text}`}>
			<p className="m-auto max-w-screen-2xl  p-5 font-bold text-3xl md:p-10 md:text-8xl">
				{content.largeText}
			</p>
		</section>
	);
}
