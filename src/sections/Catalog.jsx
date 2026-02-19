export default function CatalogSection() {
	return (
		<section id="katalog" className="py-16 px-6">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h3 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: theme.fonts.header, color: theme.colors.text }}>
						Pilihan Hadiah Spesial
					</h3>
					<p className="opacity-70">Temukan hadiah yang pas sesuai budget kamu</p>
				</div>

				{/* Filter Bar */}
				<div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
					{/* Category Tabs */}
					<div className="flex flex-wrap justify-center gap-2">
						{["All", "Bouquet", "Hampers", "Snack", "Uang"].map((cat) => (
							<button
								key={cat}
								onClick={() => setActiveCategory(cat)}
								className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? "text-white shadow-md" : "bg-white hover:bg-gray-50 text-gray-600 border border-gray-100"}`}
								style={{ backgroundColor: activeCategory === cat ? theme.colors.secondary : "" }}
							>
								{cat}
							</button>
						))}
					</div>

					{/* Price Filter */}
					<div className="flex items-center gap-2 text-sm">
						<Filter className="w-4 h-4" />
						<select className="bg-transparent border-b border-gray-300 focus:outline-none py-1 px-2" onChange={(e) => setPriceFilter(e.target.value)} style={{ fontFamily: theme.fonts.sub }}>
							<option value="all">Semua Harga</option>
							<option value="under100">Di bawah 100rb</option>
							<option value="above100">Di atas 100rb</option>
						</select>
					</div>
				</div>

				{/* Product Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{filteredProducts.map((product) => (
						<div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
							{/* Image */}
							<div className="relative h-48 md:h-64 overflow-hidden bg-gray-100">
								<img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
								<button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:text-red-500 transition-colors">
									<Heart className="w-4 h-4" />
								</button>
								{/* Quick Action Overlay */}
								<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
									<a
										href={generateWaLink(product.name)}
										target="_blank"
										rel="noreferrer"
										className="bg-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
										style={{ color: theme.colors.primary }}
									>
										Quick View
									</a>
								</div>
							</div>

							{/* Details */}
							<div className="p-4 text-center">
								<span className="text-xs uppercase tracking-wider text-gray-400 mb-1 block">{product.category}</span>
								<h4 className="font-bold text-lg mb-2 truncate" style={{ fontFamily: theme.fonts.sub }}>
									{product.name}
								</h4>
								<p className="text-xl font-bold mb-4" style={{ color: theme.colors.primary }}>
									Rp {product.price.toLocaleString("id-ID")}
								</p>

								<a
									href={generateWaLink(product.name)}
									target="_blank"
									rel="noreferrer"
									className="w-full block py-2 rounded-lg text-sm font-semibold border transition-colors flex items-center justify-center gap-2"
									style={{
										borderColor: theme.colors.primary,
										color: theme.colors.primary,
									}}
								>
									<MessageCircle className="w-4 h-4" />
									Tanya Penjual
								</a>
							</div>
						</div>
					))}
				</div>

				{/* Empty State */}
				{filteredProducts.length === 0 && (
					<div className="text-center py-20 opacity-50">
						<p>Produk tidak ditemukan untuk filter ini.</p>
					</div>
				)}
			</div>
		</section>
	);
}
