"use client";

import HomeSection from "@/sections/Home";
import NavBar from "@/sections/Navbar";
import React, { useState } from "react";
import { ShoppingCart, User, Search, Heart, MessageCircle, Instagram, Phone, MapPin, ArrowRight, Menu, X, Filter } from "lucide-react";

const ImamHampersLanding = () => {
	const [activeCategory, setActiveCategory] = useState("All");
	const [priceFilter, setPriceFilter] = useState("all"); // all, under100, above100

	// Konfigurasi Warna & Font (Updated to Tailwind CSS Palette)
	const theme = {
		colors: {
			primary: "#9a3412", // orange-800 (Closest to Terracotta)
			secondary: "#57534e", // stone-600 (Closest to Taupe Grey)
			accent1: "#e9d5ff", // purple-200 (Closest to Thistle)
			accent2: "#fff7ed", // orange-50 (Closest to Old Lace)
			text: "#451a03", // amber-950 (Closest to Dark Coffee)
			white: "#FFFFFF",
		},
		fonts: {
			header: '"Prata", serif',
			sub: '"Lato", sans-serif',
			body: '"DM Sans", sans-serif',
		},
	};

	// Dummy Data Produk
	const products = [
		{ id: 1, name: "Luxury Flower Bouquet", category: "Bouquet", price: 150000, image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=800", rating: 5 },
		{ id: 2, name: "Snack Tower Surprise", category: "Snack", price: 85000, image: "https://images.unsplash.com/photo-1595350669259-7b567ae22d99?auto=format&fit=crop&q=80&w=800", rating: 4.8 },
		{ id: 3, name: "Graduation Doll Set", category: "Boneka", price: 120000, image: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=800", rating: 4.9 },
		{ id: 4, name: "Custom Money Bouquet", category: "Uang", price: 250000, image: "https://images.unsplash.com/photo-1623860082823-74e2a86266f5?auto=format&fit=crop&q=80&w=800", rating: 5 },
		{ id: 5, name: "Exclusive Gift Box", category: "Hampers", price: 180000, image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800", rating: 4.7 },
		{ id: 6, name: "Chocolate Love", category: "Snack", price: 65000, image: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&q=80&w=800", rating: 4.6 },
	];

	// Filter Logic
	const filteredProducts = products.filter((product) => {
		const categoryMatch = activeCategory === "All" || product.category === activeCategory;
		const priceMatch = priceFilter === "all" ? true : priceFilter === "under100" ? product.price < 100000 : product.price >= 100000;
		return categoryMatch && priceMatch;
	});

	// WhatsApp Link Generator
	const generateWaLink = (productName = "") => {
		const phone = "628123456789"; // Ganti dengan nomor asli
		let text = "Halo Imam Hampers, saya ingin bertanya";
		if (productName) text += ` tentang produk *${productName}*`;
		return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
	};

	return (
		<div style={{ backgroundColor: theme.colors.accent2, color: theme.colors.text, fontFamily: theme.fonts.body }} className="min-h-screen relative overflow-x-hidden">
			{/* Inject Google Fonts */}
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;700&family=Lato:wght@400;700&family=Prata&display=swap');
      `}</style>

			{/* --- NAVBAR --- */}
			<NavBar />
			{/* --- HERO SECTION --- */}
			<HomeSection />

			{/* --- CATEGORY / FILTER SECTION --- */}

			{/* --- ABOUT SECTION --- */}
			<section id="about" className="py-20 px-6 relative overflow-hidden">
				{/* Background Blob */}
				<div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-40 pointer-events-none" style={{ backgroundColor: theme.colors.accent1 }}></div>

				<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
					<div className="w-full md:w-1/2 relative">
						<div className="relative z-10 rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden shadow-2xl">
							<img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=1000" alt="Tentang Kami" className="w-full h-[500px] object-cover" />
						</div>
						{/* Decorative Box behind */}
						<div className="absolute -bottom-6 -right-6 w-full h-full border-2 rounded-tr-[4rem] rounded-bl-[4rem] -z-0" style={{ borderColor: theme.colors.primary }}></div>
					</div>

					<div className="w-full md:w-1/2">
						<h3 className="text-4xl mb-6 leading-tight" style={{ fontFamily: theme.fonts.header, color: theme.colors.primary }}>
							Tentang <br /> Imam Hampers & Bouquet
						</h3>
						<p className="mb-6 leading-relaxed text-lg" style={{ color: theme.colors.secondary }}>
							Kami adalah usaha jasa kreatif yang tidak hanya menjual produk, tetapi membantu Anda merancang momen spesial. Fokus kami adalah memberikan sentuhan personal pada setiap hadiah.
						</p>

						<ul className="space-y-4 mb-8">
							{["Bisa request sesuai budget & keinginan", "Tema custom (Wisuda, Ultah, Anniversary)", "Pilihan bunga fresh & artificial", "Siap kirim ke area kampus & kantor"].map((item, idx) => (
								<li key={idx} className="flex items-center gap-3">
									<div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
									<span className="font-medium">{item}</span>
								</li>
							))}
						</ul>

						<button className="px-8 py-3 rounded text-white shadow-lg flex items-center gap-2" style={{ backgroundColor: theme.colors.secondary }}>
							Baca Selengkapnya <ArrowRight className="w-4 h-4" />
						</button>
					</div>
				</div>
			</section>

			{/* --- TESTIMONIAL / TRUST --- */}
			<section className="py-16 px-6 bg-white/50">
				<div className="max-w-5xl mx-auto text-center">
					<h3 className="text-2xl font-serif italic mb-10" style={{ color: theme.colors.secondary }}>
						"Terima kasih telah menjadi bagian dari momen bahagia ribuan pelanggan kami."
					</h3>
					<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
						{/* Logos Placeholder */}
						<div className="font-bold text-xl">Universitas Indonesia</div>
						<div className="font-bold text-xl">Event Kampus</div>
						<div className="font-bold text-xl">Graduation 2024</div>
					</div>
				</div>
			</section>

			{/* --- FOOTER --- */}
			<footer id="contact" className="text-white pt-16 pb-8 px-6 mt-10" style={{ backgroundColor: theme.colors.text }}>
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
					{/* Brand */}
					<div className="col-span-1 md:col-span-1">
						<h2 className="text-2xl font-bold mb-4 font-serif text-white">Imam Hampers</h2>
						<p className="text-sm opacity-70 mb-6">Menyediakan jasa kreatif pembuatan hadiah seperti Bouquet & Hampers untuk membuat momen lebih spesial & berkesan.</p>
						<div className="flex gap-4">
							<a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
								<Instagram className="w-5 h-5" />
							</a>
							<a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
								<MessageCircle className="w-5 h-5" />
							</a>
						</div>
					</div>

					{/* Links */}
					<div>
						<h4 className="font-bold mb-4 text-lg" style={{ color: theme.colors.accent1 }}>
							Menu
						</h4>
						<ul className="space-y-2 text-sm opacity-80">
							<li>
								<a href="#" className="hover:text-white transition">
									Beranda
								</a>
							</li>
							<li>
								<a href="#katalog" className="hover:text-white transition">
									Katalog Produk
								</a>
							</li>
							<li>
								<a href="#about" className="hover:text-white transition">
									Tentang Kami
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition">
									FAQ
								</a>
							</li>
						</ul>
					</div>

					{/* Categories */}
					<div>
						<h4 className="font-bold mb-4 text-lg" style={{ color: theme.colors.accent1 }}>
							Kategori
						</h4>
						<ul className="space-y-2 text-sm opacity-80">
							<li>Bouquet Bunga</li>
							<li>Bouquet Snack</li>
							<li>Bouquet Uang</li>
							<li>Hampers Custom</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="font-bold mb-4 text-lg" style={{ color: theme.colors.accent1 }}>
							Hubungi Kami
						</h4>
						<ul className="space-y-3 text-sm opacity-80">
							<li className="flex items-start gap-3">
								<MapPin className="w-5 h-5 mt-0.5 shrink-0" />
								<span>Jl. Kampus No. 123, Kawasan Mahasiswa, Kota Pelajar</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone className="w-5 h-5 shrink-0" />
								<span>+62 812-3456-7890</span>
							</li>
							<li className="flex items-center gap-3">
								<MessageCircle className="w-5 h-5 shrink-0" />
								<span>imam.hampers@email.com</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-white/10 pt-8 text-center text-xs opacity-50">&copy; 2024 Imam Hampers & Bouquet. All rights reserved.</div>
			</footer>

			{/* Floating Chat Button */}
			<a
				href={generateWaLink()}
				target="_blank"
				rel="noreferrer"
				className="fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl text-white flex items-center gap-2 hover:scale-105 transition-transform animate-bounce-slow"
				style={{ backgroundColor: "#25D366" }} // WhatsApp Green
			>
				<MessageCircle className="w-6 h-6" />
				<span className="font-bold hidden md:inline">Chat Admin</span>
			</a>
		</div>
	);
};

export default ImamHampersLanding;
