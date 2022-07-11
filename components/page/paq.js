// paq.js

export default function Paq() {
	return (
		<section className="relative z-0 m-auto grid max-w-screen-2xl grid-rows-1 gap-20 overflow-hidden p-5 md:grid-cols-3 md:py-60 md:px-10">
			<div className="after:absolute after:top-1/2 after:z-0 after:-translate-y-1/2 after:font-semi after:text-vw25 after:leading-none after:text-limegreen after:text-white after:transition-all after:duration-300 after:content-['p'] hover:after:text-limegreen dark:after:text-black dark:hover:after:text-limegreen">
				<h3 className="relative z-10 pb-5 uppercase">Purpose</h3>
				<p className="relative z-10">
					What purpose means goes underneath explaination will go here
				</p>
			</div>
			<div className="after:absolute after:top-1/2 after:-translate-y-1/2 after:font-semi after:text-vw25 after:leading-none after:text-limegreen after:text-white after:transition-all  after:duration-300 after:content-['a'] hover:after:text-limegreen dark:after:text-black dark:hover:after:text-limegreen">
				<h3 className="relative z-10 pb-5 uppercase">Authenticity</h3>
				<p className="relative z-10">
					What authenticity means goes underneath explaination will go here
				</p>
			</div>
			<div className="after:absolute after:top-1/2 after:-translate-y-1/2 after:font-semi after:text-vw25 after:leading-none after:text-limegreen after:text-white after:transition-all  after:duration-300 after:content-['q'] hover:after:text-limegreen dark:after:text-black dark:hover:after:text-limegreen">
				<h3 className="relative z-10 pb-5 uppercase">Quality</h3>
				<p className="relative z-10">
					What quality means goes underneath explaination will go here
				</p>
			</div>
		</section>
	);
}
