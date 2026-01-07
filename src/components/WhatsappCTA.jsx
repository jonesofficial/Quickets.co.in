import { useState } from "react";
import { FaBus, FaTicketAlt } from "react-icons/fa";

export default function WhatsAppCTA() {
    const [stage, setStage] = useState("idle"); // idle | moving | done

    const startAnimation = () => {
        if (stage !== "idle") return;

        setStage("moving");

        setTimeout(() => {
            setStage("done");

            setTimeout(() => {
                window.open("https://wa.me/918300984737", "_blank");
            }, 300);
        }, 500);
    };

    return (
        <button
            aria-label="Book on WhatsApp"
            onClick={startAnimation}
            onMouseEnter={() => stage === "idle" && setStage("moving")}
            className="relative mt-8 inline-flex items-center justify-center gap-3 bg-[#25D366] text-black px-10 py-4 rounded-full font-semibold text-lg cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] active:scale-[0.96]"
        >
            {/* BUS ICON */}
            <span
                className={`absolute left-4 transition-all duration-500 ease-in-out ${
                    stage === "idle"
                        ? "opacity-100 translate-x-0"
                        : stage === "moving"
                            ? "opacity-100 translate-x-[180px]"
                            : "opacity-0 translate-x-[180px]"
                }`}
            >
        <FaBus className="text-xl" />
      </span>

            {/* TEXT */}
            <span className="relative z-10">
        Book on WhatsApp
      </span>

            {/* TICKET ICON */}
            <span
                className={`absolute right-4 transition-all duration-500 ease-in-out ${
                    stage === "done"
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75"
                }`}
            >
        <FaTicketAlt className="text-xl" />
      </span>
        </button>
    );
}
