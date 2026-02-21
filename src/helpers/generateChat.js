export default function generateWaLink(productName) {
	const phone = "+6282333131351";
	let text = "Halo Kak, aku mau tanya ";
	productName ? (text += `soal produk *${productName}* , apa bisa dibantu ya?`) : (text += "soal produk kakak, bisa dijelaskan lebih lanjut?");
	window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
}
