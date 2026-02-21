"use client";

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BubbleChat from "@/components/BubbleChat";
import HomeSection from "@/sections/Home";
import CatalogSection from "@/sections/Catalog";
import ServicesSection from "@/sections/Services";
import { text } from "@/helpers/fonts";

export default function Home() {
	return (
		<div className={"min-h-screen relative overflow-x-hidden bg-accent2 text-addis " + text.className}>
			<NavBar />
			<div className="md:px-30 pt-10 md:pt-3">
				<HomeSection />
				<CatalogSection />
				<ServicesSection />
			</div>
			<Footer />
			<BubbleChat />
		</div>
	);
}
