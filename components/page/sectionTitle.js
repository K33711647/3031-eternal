// pageModuleSectionTitle

export default function SectionTitle({ title, color }) {
	const background = color != null ? color : "transparent";
	const text = color == "black" ? "white" : "";
	return (
		<section className={`bg-${background} text-${text}`}>
			<div className="pt-22 m-auto max-w-screen-2xl p-5 pt-10 md:p-10 md:pt-20">
				<h2 className="mb-5 text-2xl uppercase">{title}</h2>
				<p className="text-xl">»</p>
			</div>
		</section>
	);
}
