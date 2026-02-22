"use client";
import Image from "next/image";
import { title } from "@/helpers/fonts";
import { MessageCircle, ArrowLeft } from "lucide-react";
import generateWaLink from "@/helpers/generateChat";
import products from "@/helpers/products";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
	const { id } = useParams();
	const product = products.find((prod) => prod.id.toString() === id);

	const handleChat = () => generateWaLink(product.product);

	return (
		<main className=" pt-28 flex lg:flex-row flex-col md:px-20 px-5 lg:gap-20 gap-8 justify-between relative">
			<button className="cursor-pointer" title="Kembali ke beranda" onClick={() => history.back()}>
				<ArrowLeft className="absolute lg:top-28 top-20" />
			</button>

			{product ? (
				<>
					<div className="h-fit w-fit ">
						<Image src={`/products/${product.img}`} alt={product.product} width={500} height={500} className="rounded-2xl  shadow-2xl" />
					</div>
					<article className="flex flex-col gap-10 lg:w-1/2">
						<h1 className={`${title.className} text-5xl`}>{product.product}</h1>
						<p>{product.desc}</p>
						<span className="font-semibold text-3xl">Rp {product.price.toLocaleString("id-ID")}</span>
						<button onClick={handleChat} className="text-white bg-emerald-700 w-fit p-5 flex items-center gap-3 rounded-2xl cursor-pointer">
							<MessageCircle className="size-5" />
							<span>Tanyakan produk ke penjual</span>
						</button>
					</article>
				</>
			) : (
				<h1 className="text-center w-full p-20 font-semibold text-2xl">Produk tidak ditemukan 🔍</h1>
			)}
		</main>
	);
}
