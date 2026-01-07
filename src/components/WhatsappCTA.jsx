import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppCTA() {
    return (
        <button
            aria-label="Book on WhatsApp"
            onClick={() => window.open("https://wa.me/918300984737", "_blank")}
            className="relative mt-8 px-10 py-4 rounded-full font-semibold text-lg text-black cursor-pointer overflow-hidden group outline-none border-none"
        >
            {/* GLOW BORDER */}
            <span className="absolute -inset-[2px] rounded-full bg-[linear-gradient(45deg,#25D366,#9AFFC2,#25D366,#0fa958,#25D366)] bg-[length:600%_600%] blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 animate-glow" />

            {/* BUTTON SURFACE */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] transition-colors duration-200 group-active:bg-transparent" />

            {/* CONTENT */}
            <span className="relative z-10 inline-flex items-center gap-3 transition-colors duration-200 group-active:text-black">
        <FaWhatsapp className="text-xl" />
        Book on WhatsApp
      </span>
        </button>
    );
}
