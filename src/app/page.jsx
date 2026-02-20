"use client";

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BubbleChat from "@/components/BubbleChat";
import HomeSection from "@/sections/Home";
import CatalogSection from "@/sections/Catalog";
import AboutSection from "@/sections/About";

export default function Home() {
	const generateWaLink = (productName = "") => {
		const phone = "628123456789"; // Ganti dengan nomor asli
		let text = "Halo Imam Hampers, saya ingin bertanya";
		if (productName) text += ` tentang produk *${productName}*`;
		return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
	};

	return (
		<div className="min-h-screen relative overflow-x-hidden bg-accent2 text-addis ">
			<NavBar />
			<HomeSection />
			<CatalogSection />
			<AboutSection />
			<Footer />
			<BubbleChat />
		</div>
	);
}
