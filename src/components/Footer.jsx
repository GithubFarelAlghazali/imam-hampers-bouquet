import { MessageCircle, Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
	return (
		<footer id="contact" className="text-white pt-16 pb-8 px-6 mt-10 bg-addis">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
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
					<h4 className="font-bold mb-4 text-lg text-accent1">Menu</h4>
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

				<div>
					<h4 className="font-bold mb-4 text-lg text-accent1">Kategori</h4>
					<ul className="space-y-2 text-sm opacity-80">
						<li>Bouquet Bunga</li>
						<li>Bouquet Snack</li>
						<li>Bouquet Uang</li>
						<li>Hampers Custom</li>
					</ul>
				</div>

				<div>
					<h4 className="font-bold mb-4 text-lg text-accent1">Hubungi Kami</h4>
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
	);
}
