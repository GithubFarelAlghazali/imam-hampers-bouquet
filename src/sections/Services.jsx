import { title } from "@/helpers/fonts";
import Image from "next/image";
import * as motion from "motion/react-client";
import generateWaLink from "@/helpers/generateChat";

const fadeIn = {
	hidden: {
		y: 12,
		opacity: 0,
		filter: "blur(5px)",
	},
	visible: {
		y: 0,
		opacity: 1,
		filter: "blur(0px)",
		transition: {
			duration: 0.5,
			ease: "easeIn",
		},
	},
};

export default function ServicesSection() {
	return (
		<section id="custom" className="flex pb-20 px-6 relative md:flex-row flex-col gap-10 md:gap-2">
			<motion.div
				variants={fadeIn}
				initial="hidden"
				whileInView={"visible"}
				viewport={{ amount: 0.5, once: true }}
				whileHover={{ y: -5 }}
				className="flex justify-end mx-auto flex-row  rounded-xl bg-primary text-accent2 shadow-lg md:w-[48%] md:h-64 w-full  relative"
			>
				<Image src="/products/custom-buket.webp" width={400} height={400} alt="Foto Buket Bunga" className="md:size-80 size-48 absolute -left-10 md:-left-32 md:-top-10 -rotate-12" />
				<article className="flex w-2/3 flex-col justify-between p-5 md:p-6">
					<div>
						<h2 className={"text-2xl font-bold leading-tight md:text-3xl " + title.className}>Custom Bouquet</h2>

						<p className="mt-2 text-sm opacity-90 line-clamp-2">Kreasikan buket sesuai kebutuhan</p>
					</div>
					<div className="mt-4 flex items-center justify-between md:mt-0">
						<div className="flex flex-col">
							<span className="text-xs opacity-80">Harga Mulai</span>
							<span className="text-xl font-bold md:text-2xl">Rp 30.000</span>
						</div>
						<button onClick={() => generateWaLink("Buket Custom")} className="rounded-lg border-2 border-accent2 px-4 py-2 text-sm font-semibold transition hover:bg-accent2 hover:text-addis">
							Pesan
						</button>
					</div>
				</article>
			</motion.div>

			<motion.div
				variants={fadeIn}
				initial="hidden"
				whileInView={"visible"}
				viewport={{ amount: 0.5, once: true }}
				whileHover={{ y: -5 }}
				className="flex w-full md:justify-start justify-end mx-auto flex-row  rounded-xl bg-addis text-accent2 shadow-lg md:w-[48%] md:h-64  relative "
			>
				<Image src="/products/custom-hampers.webp" width={400} height={400} alt="Foto Buket Bunga" className="absolute top-0 -left-10 size-44 -rotate-6 md:-right-16 md:left-auto md:size-64 md:rotate-12" />
				<article className="flex w-2/3 flex-col justify-between p-5 md:p-6">
					<div>
						<h2 className={"text-2xl font-bold leading-tight md:text-3xl " + title.className}>Custom Hampers</h2>

						<p className="mt-2 text-sm opacity-90 line-clamp-2">Kreasikan hampers sesuai kebutuhan</p>
					</div>
					<div className="mt-4 flex items-center  justify-between md:mt-0">
						<div className="flex flex-col">
							<span className="text-xs opacity-80">Harga Mulai</span>
							<span className="text-xl font-bold md:text-2xl">Rp 40.000</span>
						</div>
						<button onClick={() => generateWaLink("Hampers Custom")} className="rounded-lg border-2 border-accent2 px-4 py-2 text-sm font-semibold transition hover:bg-accent2 hover:text-addis">
							Pesan
						</button>
					</div>
				</article>
			</motion.div>
		</section>
	);
}
