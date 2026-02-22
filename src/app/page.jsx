"use client";

import BubbleChat from "@/components/BubbleChat";
import HomeSection from "@/sections/Home";
import CatalogSection from "@/sections/Catalog";
import ServicesSection from "@/sections/Services";
import { text } from "@/helpers/fonts";

export default function Home() {
	return (
		<div className={"min-h-screen md:px-30 pt-10 md:pt-3 relative overflow-x-hidden  " + text.className}>
			<HomeSection />
			<CatalogSection />
			<ServicesSection />
			<BubbleChat />
		</div>
	);
}
