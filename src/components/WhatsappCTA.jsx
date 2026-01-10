// import { FaWhatsapp } from "react-icons/fa";
//
// export default function WhatsAppCTA() {
//     return (
//         <button
//             aria-label="Book on WhatsApp"
//             onClick={() => window.open("https://wa.me/918300984737", "_blank")}
//             className="relative mt-8 px-10 py-4 rounded-full font-semibold text-lg text-black cursor-pointer overflow-hidden group outline-none border-none"
//         >
//             {/* GLOW BORDER */}
//             <span className="absolute -inset-[2px] rounded-full bg-[linear-gradient(45deg,#25D366,#9AFFC2,#25D366,#0fa958,#25D366)] bg-[length:600%_600%] blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 animate-glow" />
//
//             {/* BUTTON SURFACE */}
//             <span className="absolute inset-0 rounded-full bg-[#25D366] transition-colors duration-200 group-active:bg-transparent" />
//
//             {/* CONTENT */}
//             <span className="relative z-10 inline-flex items-center gap-3 transition-colors duration-200 group-active:text-black">
//         <FaWhatsapp className="text-xl" />
//         Book on WhatsApp
//       </span>
//         </button>
//     );
// }

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppCTA() {
    const handleClick = () => {
        const phoneNumber = "918300984737"; // masked
        const message = "Hi! I want to book a bus ticket with Quickets";

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank", "noopener,noreferrer");
    };


    return (
        <button
            onClick={handleClick}
            className="group relative mt-8 flex items-center gap-3 overflow-hidden rounded-full bg-[#25D366] px-10 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
            aria-label="Chat with us on WhatsApp"
        >
            {/* ANIMATED GRADIENT BORDER (Glow) */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] opacity-0 transition-opacity duration-500 group-hover:animate-shimmer group-hover:opacity-100" />

            {/* ICON WITH PULSE */}
            <div className="relative flex h-6 w-6 items-center justify-center">
                <FaWhatsapp className="relative z-10 text-2xl transition-transform duration-300 group-hover:rotate-[12deg]" />
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-20"></span>
            </div>

            <span className="relative z-10">Book on WhatsApp</span>

            {/* INNER SHADOW FOR DEPTH */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] pointer-events-none" />
        </button>
    );
}