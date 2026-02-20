import { title, subTitle, text } from "@/helpers/fonts";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
	return (
		<section id="custom" className="flex pb-20 px-6 relative md:flex-row flex-col gap-3 md:gap-2">
			<div className="flex justify-end mx-auto flex-row  rounded-xl bg-primary text-accent2 shadow-lg md:w-[48%] md:h-64 w-full transition-transform hover:-translate-y-1 duration-300 relative">
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
						<button className="rounded-lg border-2 border-accent2 px-4 py-2 text-sm font-semibold transition hover:bg-accent2 hover:text-addis">Pesan</button>
					</div>
				</article>
			</div>

			<div className="flex w-full md:justify-start justify-end mx-auto flex-row  rounded-xl bg-addis text-accent2 shadow-lg md:w-[48%] md:h-64 transition-transform hover:-translate-y-1 duration-300 relative ">
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
						<button className="rounded-lg border-2 border-accent2 px-4 py-2 text-sm font-semibold transition hover:bg-accent2 hover:text-addis">Pesan</button>
					</div>
				</article>
			</div>
		</section>
	);
}
