import Image from "next/image";

export default function ProductDetailPage() {
	return (
		<main className="h-screen pt-24">
			<div>
				<Image src={"/products/buket-bunga.webp"} alt="buket" width={500} height={500} />
			</div>
		</main>
	);
}
