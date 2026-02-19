"use client";
import { title, subTitle, text } from "@/helpers/fonts";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<nav className="fixed left-0 right-0 top-0 z-50 px-6 py-4 shadow-sm bg-orange-50">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				<div className="flex items-center gap-2">
					<h1 className={"text-2xl font-bold tracking-wide text-orange-800 " + title.className}>Imam Hampers</h1>
				</div>

				{/* Desktop Menu */}
				<div className={"hidden md:flex items-center gap-8 font-medium " + subTitle.className}>
					<a href="#home" className="hover:text-primary transition-colors">
						Beranda
					</a>
					<a href="#katalog" className="hover:text-primary transition-colors">
						Katalog
					</a>
					<a href="#about" className="hover:text-primary transition-colors">
						Tentang Kami
					</a>
					<a href="#contact" className="hover:text-primary transition-colors">
						Kontak
					</a>
				</div>

				{/* Icons */}
				<div className="hidden md:flex items-center gap-4">
					<div className="relative">
						<input type="text" placeholder="Cari hadiah..." className="pl-8 pr-4 py-1.5 rounded-full text-sm border focus:outline-none focus:ring-1 border-orange-800 bg-transparent" />
						<Search className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 opacity-50" />
					</div>
				</div>

				{/* Mobile Menu Button */}
				<button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
					{mobileMenuOpen ? <X /> : <Menu />}
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			{mobileMenuOpen && (
				<div className="md:hidden absolute top-full left-0 w-full bg-[#fff7ed] border-b shadow-lg p-4 flex flex-col gap-4">
					<a href="#" className="block py-2">
						Beranda
					</a>
					<a href="#katalog" className="block py-2">
						Katalog
					</a>
					<a href="#about" className="block py-2">
						Tentang Kami
					</a>
					<input type="text" placeholder="Cari..." className="w-full p-2 border rounded" />
				</div>
			)}
		</nav>
	);
}
