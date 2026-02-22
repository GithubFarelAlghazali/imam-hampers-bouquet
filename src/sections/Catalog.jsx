"use client";
import { Info, Filter } from "lucide-react";
import { title, subTitle } from "@/helpers/fonts";
import products from "@/helpers/products";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const fadeIn = {
	hidden: {
		y: 12,
		opacity: 0,
		filter: "blur(12px)",
	},
	visible: {
		y: 0,
		opacity: 1,
		filter: "blur(0px)",
		transition: {
			duration: 0.5,
			ease: [0.55, 0.06, 0.68, 0.19],
		},
	},
};

export default function CatalogSection() {
	const [filtered, setFiltered] = useState([]);

	useEffect(() => {
		setFiltered(products);
	}, []);

	const setPrice = (e) => {
		const price = e.target.value;

		if (price === "under") {
			setFiltered(products.filter((product) => product.price <= 50000));
		} else if (price === "above") {
			setFiltered(products.filter((product) => product.price > 50000));
		} else {
			setFiltered(products);
		}
	};

	return (
		<section id="katalog" className="py-16 px-6">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h3 className={"text-3xl md:text-4xl mb-4 text-primary " + title.className}>Pilihan Hadiah Spesial</h3>
				</div>

				<div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
					<div className="flex items-center gap-2 text-sm">
						<Filter className="w-4 h-4" />
						<select className={"bg-transparent border-b border-gray-300 focus:outline-none py-1 px-2 " + subTitle.className} onChange={(e) => setPrice(e)}>
							<option value="all">Semua Harga</option>
							<option value="under">Di bawah 50.000</option>
							<option value="above">Di atas 50.000</option>
						</select>
					</div>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{filtered.map((product) => (
						<AnimatePresence key={product.id}>
							<motion.div variants={fadeIn} initial="hidden" animate="visible" exit="hidden" className="group bg-white md:rounded-2xl rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
								<div className="relative h-48 md:h-64 overflow-hidden bg-gray-100">
									<Image width={400} height={400} loading="lazy" src={`/products/${product.img}`} alt={product.product} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
									<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"></div>
								</div>

								<div className="p-4 text-center">
									<span className="text-xs uppercase tracking-wider text-gray-400 mb-1 block">{product.type}</span>
									<h4 className={"font-bold text-lg mb-2 truncate " + subTitle.className}>{product.product}</h4>
									<p className="text-xl font-bold mb-4 text-shadow-primary">Rp {product.price.toLocaleString("id-ID")}</p>

									<Link
										href={`/product/${product.id}`}
										target="_blank"
										rel="noreferrer"
										className="w-full  py-2 rounded-lg text-sm font-semibold border transition-colors flex items-center justify-center gap-2 border-primary text-primary"
									>
										<Info className="w-4 h-4" />
										Lihat Detail
									</Link>
								</div>
							</motion.div>
						</AnimatePresence>
					))}
				</div>

				{/* {filteredProducts.length === 0 && (
					<div className="text-center py-20 opacity-50">
						<p>Produk tidak ditemukan untuk filter ini.</p>
					</div>
				)} */}
			</div>
		</section>
	);
}
