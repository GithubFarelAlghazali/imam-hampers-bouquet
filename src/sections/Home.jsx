import { title, subTitle } from "@/helpers/fonts";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

const containerVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,

			delayChildren: 0.2,
		},
	},
};

const itemVariant = {
	hidden: {
		opacity: 0,
		y: 20,
		filter: "blur(5px)",
	},
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};
export default function HomeSection() {
	return (
		<header className="relative pt-8 pb-16 md:py-24 px-6" id="home">
			<motion.div variants={containerVariant} initial="hidden" animate="visible" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				<motion.div variants={itemVariant} className="order-2 md:order-1 space-y-6">
					<h2 className={"text-5xl md:text-6xl leading-tight text-primary " + title.className}>
						Hadiah Terbaik untuk setiap
						<br /> Momen Berharga
					</h2>
					<p className="text-lg opacity-80 max-w-md leading-relaxed">Buat momen wisuda, ulang tahun, dan anniversary jadi lebih berkesan dengan hampers & bouquet custom dari kami.</p>
					<motion.div variants={itemVariant} className="flex gap-4 pt-4">
						<button className={"px-8 py-3 rounded text-white font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 bg-primary  " + subTitle.className}>Pesan Sekarang</button>
						<Link href="#katalog" className={"px-8 py-3 rounded border font-medium hover:bg-white/50 transition-colors border-primary text-primary " + subTitle.className}>
							Lihat Katalog
						</Link>
					</motion.div>
				</motion.div>

				<motion.div variants={itemVariant} className="order-1 md:order-2 relative">
					<div className="relative z-10 rounded-[3rem] ">
						<Image width={1000} height={1000} src="/bouquet-ilustration.webp" alt="Buket Snack" className="w-full h-100 md:h-125 object-cover hover:scale-105 transition-transform duration-700" />
						<motion.div variants={itemVariant} className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-xs">
							<p className="font-bold text-sm mb-1 text-primary">Best Seller!</p>
							<p className="text-xs text-gray-600">Graduation Bouquet Custom</p>
						</motion.div>
					</div>
				</motion.div>
			</motion.div>
		</header>
	);
}
