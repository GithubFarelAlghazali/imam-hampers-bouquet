import { title, subTitle, text } from "@/helpers/fonts";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
	return (
		<section id="about" className="py-20 px-6 relative overflow-hidden">
			<div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-40 pointer-events-none bg-accent-1"></div>

			<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
				<div className="w-full md:w-1/2 relative">
					<div className="relative z-10 rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden shadow-2xl">
						<img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=1000" alt="Tentang Kami" className="w-full h-125 object-cover" />
					</div>
					<div className="absolute -bottom-6 -right-6 w-full h-full border-2 rounded-tr-[4rem] rounded-bl-[4rem] z-0 border-y-primary"></div>
				</div>

				<div className="w-full md:w-1/2">
					<h3 className={"text-4xl mb-6 leading-tight text-shadow-primary" + title.className}>
						Tentang <br /> Imam Hampers & Bouquet
					</h3>
					<p className="mb-6 leading-relaxed text-lg text-secondary">
						Kami adalah usaha jasa kreatif yang tidak hanya menjual produk, tetapi membantu Anda merancang momen spesial. Fokus kami adalah memberikan sentuhan personal pada setiap hadiah.
					</p>

					<ul className="space-y-4 mb-8">
						{["Bisa request sesuai budget & keinginan", "Tema custom (Wisuda, Ultah, Anniversary)", "Pilihan bunga fresh & artificial", "Siap kirim ke area kampus & kantor"].map((item, idx) => (
							<li key={idx} className="flex items-center gap-3">
								<div className="w-2 h-2 rounded-full bg-primary"></div>
								<span className="font-medium">{item}</span>
							</li>
						))}
					</ul>

					<button className="px-8 py-3 rounded text-white shadow-lg flex items-center gap-2 bg-secondary">
						Baca Selengkapnya <ArrowRight className="w-4 h-4" />
					</button>
				</div>
			</div>
		</section>
	);
}
