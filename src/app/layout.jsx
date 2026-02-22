import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { text } from "@/helpers/fonts";

export const metadata = {
	title: "Imam Hampers & Bouquet - Hadiah Terbaik untuk setiap Momen Berharga",
	description: "Jasa pembuatan Buket & Hampers untuk hadiah, kado, atau wisuda.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="id" className="scroll-smooth scroll-pt-20">
			<body className={`${text.className} antialiased bg-accent2 text-addis`}>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
