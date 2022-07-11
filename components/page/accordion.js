// accordion.js

export default function Accordion({ content }) {
	const background =
		content.background != null ? content.background : "transparent";
	const text = content.background == "black" ? "white" : "";
	return (
		<section className={`bg-${background} text-${text}`}>
			<div className="m-auto max-w-screen-2xl p-5 md:p-10">
				<details className="mb-10 hover:cursor-pointer ">
					<summary className=" before:float-right before:text-4xl  before:content-['+'] hover:text-limegreen focus:text-limegreen focus:outline-none">
						<h3 className="font-semi text-2xl md:text-5xl">Motion Designer</h3>
					</summary>
					<div className="pr-20 text-xl md:pr-80">
						<h4 className="pt-5 uppercase">Job Description</h4>
						<p>
							Short job description will go here and means of applying
							below.Link out to email? Short job description will go here and
							means of applying below. Link out to email?
						</p>
						<h4 className="pt-5 uppercase">Apply Via</h4>
						<p>jobs@paq.works</p>
					</div>
				</details>
				<details className="mb-10 hover:cursor-pointer">
					<summary className="before:float-right  before:text-4xl before:content-['+'] hover:text-limegreen focus:text-limegreen focus:outline-none">
						<h3 className="font-semi text-2xl md:text-5xl">Project Manager</h3>
					</summary>
					<div className="pr-20 text-xl md:pr-80">
						<h4 className="pt-5 uppercase">Job Description</h4>
						<p>
							Short job description will go here and means of applying
							below.Link out to email? Short job description will go here and
							means of applying below. Link out to email?
						</p>
						<h4 className="pt-5 uppercase">Apply Via</h4>
						<p>jobs@paq.works</p>
					</div>
				</details>
			</div>
		</section>
	);
}
