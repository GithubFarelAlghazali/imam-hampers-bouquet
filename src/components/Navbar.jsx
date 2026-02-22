"use client";
import { title, subTitle } from "@/helpers/fonts";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<nav className="fixed left-0 right-0 top-0 z-50 px-6 py-4 shadow-sm bg-accent2">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				<div className="flex items-center gap-2">
					<h1 className={"md:text-2xl text-lg font-bold tracking-wide text-primary " + title.className}>Imam Hampers & Bouquet</h1>
				</div>

				<div className={"hidden md:flex items-center gap-8 font-medium " + subTitle.className}>
					<a href="/#home" className="hover:text-primary transition-colors">
						Beranda
					</a>
					<a href="/#katalog" className="hover:text-primary transition-colors">
						Katalog
					</a>
					<a href="/#custom" className="hover:text-primary transition-colors">
						Custom
					</a>
					<a href="/#contact" className="hover:text-primary transition-colors">
						Kontak
					</a>
				</div>

				<button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
					{mobileMenuOpen ? <X /> : <Menu />}
				</button>
			</div>

			{mobileMenuOpen && (
				<div className="md:hidden absolute top-full left-0 w-full bg-[/#fff7ed] border-b shadow-lg p-4 flex flex-col gap-4">
					<a href="/#" className="block py-2">
						Beranda
					</a>
					<a href="/#katalog" className="block py-2">
						Katalog
					</a>
					<a href="/#about" className="block py-2">
						Tentang Kami
					</a>
					<input type="text" placeholder="Cari..." className="w-full p-2 border rounded" />
				</div>
			)}
		</nav>
	);
}
