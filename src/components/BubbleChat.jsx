import { MessageCircle } from "lucide-react";
import generateWaLink from "@/helpers/generateChat";

export default function BubbleChat() {
	return (
		<button onClick={() => generateWaLink()} rel="noreferrer" className="fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl text-white flex items-center gap-2 hover:scale-105 transition-transform animate-bounce-slow bg-green-700">
			<MessageCircle className="w-6 h-6" />
			<span className="font-bold hidden md:inline">Chat Admin</span>
		</button>
	);
}
