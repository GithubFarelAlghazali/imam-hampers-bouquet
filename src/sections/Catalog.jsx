"use client";
import { Heart, Info, Filter } from "lucide-react";
import { useState } from "react";
import { title, subTitle } from "@/helpers/fonts";

const products = [
	{ id: 1, name: "Luxury Flower Bouquet", category: "Bouquet", price: 150000, image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=800", rating: 5 },
	{ id: 2, name: "Snack Tower Surprise", category: "Snack", price: 85000, image: "https://images.unsplash.com/photo-1595350669259-7b567ae22d99?auto=format&fit=crop&q=80&w=800", rating: 4.8 },
	{ id: 3, name: "Graduation Doll Set", category: "Boneka", price: 120000, image: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=800", rating: 4.9 },
	{ id: 4, name: "Custom Money Bouquet", category: "Uang", price: 250000, image: "https://images.unsplash.com/photo-1623860082823-74e2a86266f5?auto=format&fit=crop&q=80&w=800", rating: 5 },
	{ id: 5, name: "Exclusive Gift Box", category: "Hampers", price: 180000, image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800", rating: 4.7 },
	{ id: 6, name: "Chocolate Love", category: "Snack", price: 65000, image: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&q=80&w=800", rating: 4.6 },
];

export default function CatalogSection() {
	const [activeCategory, setActiveCategory] = useState("All");
	const [priceFilter, setPriceFilter] = useState("all");

	// Filter Logic
	const filteredProducts = products.filter((product) => {
		const categoryMatch = activeCategory === "All" || product.category === activeCategory;
		const priceMatch = priceFilter === "all" ? true : priceFilter === "under100" ? product.price < 100000 : product.price >= 100000;
		return categoryMatch && priceMatch;
	});

	return (
		<section id="katalog" className="py-16 px-6">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h3 className={"text-3xl md:text-4xl mb-4 text-primary " + title.className}>Pilihan Hadiah Spesial</h3>
					<p className="opacity-70">Temukan hadiah yang pas sesuai budget kamu</p>
				</div>

				<div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
					<div className="flex flex-wrap justify-center gap-2">
						{["All", "Bouquet", "Hampers", "Snack", "Uang"].map((cat) => (
							<button
								key={cat}
								onClick={() => setActiveCategory(cat)}
								className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? "text-white shadow-md bg-secondary" : "bg-white hover:bg-gray-50 text-gray-600 border border-gray-100"}`}
							>
								{cat}
							</button>
						))}
					</div>

					<div className="flex items-center gap-2 text-sm">
						<Filter className="w-4 h-4" />
						<select className={"bg-transparent border-b border-gray-300 focus:outline-none py-1 px-2 " + subTitle.className} onChange={(e) => setPriceFilter(e.target.value)}>
							<option value="all">Semua Harga</option>
							<option value="under100">Di bawah 100rb</option>
							<option value="above100">Di atas 100rb</option>
						</select>
					</div>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{filteredProducts.map((product) => (
						<div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
							<div className="relative h-48 md:h-64 overflow-hidden bg-gray-100">
								<img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
								<button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:text-red-500 transition-colors">
									<Heart className="w-4 h-4" />
								</button>

								<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"></div>
							</div>

							<div className="p-4 text-center">
								<span className="text-xs uppercase tracking-wider text-gray-400 mb-1 block">{product.category}</span>
								<h4 className={"font-bold text-lg mb-2 truncate " + subTitle.className}>{product.name}</h4>
								<p className="text-xl font-bold mb-4 text-shadow-primary">Rp {product.price.toLocaleString("id-ID")}</p>

								<a href="" target="_blank" rel="noreferrer" className="w-full  py-2 rounded-lg text-sm font-semibold border transition-colors flex items-center justify-center gap-2 border-primary text-primary">
									<Info className="w-4 h-4" />
									Lihat Detail
								</a>
							</div>
						</div>
					))}
				</div>

				{filteredProducts.length === 0 && (
					<div className="text-center py-20 opacity-50">
						<p>Produk tidak ditemukan untuk filter ini.</p>
					</div>
				)}
			</div>
		</section>
	);
}
