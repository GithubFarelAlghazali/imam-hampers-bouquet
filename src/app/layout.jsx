import "./globals.css";

export const metadata = {
	title: "Imam Hampers & Bouquet - Hadiah Terbaik untuk setiap Momen Berharga",
	description: "Jasa pembuatan Buket & Hampers untuk hadiah, kado, atau wisuda.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={` antialiased`}>{children}</body>
		</html>
	);
}
