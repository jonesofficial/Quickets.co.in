// import bus from "../assets/bus.png";
// import train  from "../assets/train.png";
// import heroBg from "../assets/hero-bg.jpg";
// import { FaWhatsapp } from "react-icons/fa";
// import WhatsAppCTA from "../components/WhatsappCTA.jsx";
//
//
// export default function HeroBus() {
//     return (
//         <section className="relative h-[100svh] overflow-hidden px-6 pt-28 md:pt-24">
//
//             {/* BACKGROUND */}
//             <div
//                 className="absolute inset-0 z-0 bg-cover bg-center animate-fadeIn"
//                 style={{ backgroundImage: `url(${heroBg})` }}
//             />
//             <div className="absolute inset-0 z-10 bg-black/55" />
//             <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.85)_80%)]" />
//
//             {/* HERO */}
//             <div className="relative z-30 flex flex-col items-center justify-center h-full text-center">
//
//                 <h1 className="font-heading text-[64px] md:text-[110px] leading-none">
//                     TICKET
//                 </h1>
//
//                 {/* BOOKING + BUS */}
//                 <div className="relative inline-block">
//                     <h1 className="font-heading text-[132px] md:text-[230px] leading-[0.68]">
//                         BOOKING
//                     </h1>
//
//                     <img
//                         src={bus}
//                         alt="Bus"
//                         className="absolute left-1/2 top-[55%] md:top-[52%] w-[300px] md:w-[560px] -translate-x-1/2 -translate-y-1/2 pointer-events-none drop-shadow-[0_35px_40px_rgba(0,0,0,0.85)]"
//                     />
//                 </div>
//
//                 {/* CTA */}
//                 <div className="mt-14 md:mt-20 flex flex-col items-center">
//                     <p className="text-[#F2CD1C] font-semibold text-sm md:text-lg">
//                         Book tickets using WhatsApp
//                     </p>
//
//                     <WhatsAppCTA />
//
//
//
//
//                     <p className="mt-2 text-sm opacity-60">
//                         You chat. We book.
//                     </p>
//                 </div>
//
//             </div>
//         </section>
//     );
// }
//

import { useEffect, useState } from "react";
import bus from "../assets/bus.png";
import train from "../assets/train.png";
import heroBg from "../assets/hero-bg.jpg";
import WhatsAppCTA from "../components/WhatsappCTA.jsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function HeroBus() {
    const vehicles = [
        { type: "bus", image: bus, alt: "Bus" },
        { type: "train", image: train, alt: "Train" },
    ];

    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % vehicles.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const prev = () =>
        setActive((prev) => (prev - 1 + vehicles.length) % vehicles.length);

    const next = () =>
        setActive((prev) => (prev + 1) % vehicles.length);

    return (
        <section className="relative h-[100svh] overflow-hidden px-6 pt-28 md:pt-24">

            {/* BACKGROUND */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div className="absolute inset-0 z-10 bg-black/55" />
            <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.85)_80%)]" />

            {/* HERO */}
            <div className="relative z-30 flex flex-col items-center justify-center h-full text-center">

                <h1 className="font-heading text-[64px] md:text-[110px] leading-none">
                    TICKET
                </h1>

                {/* BOOKING + VEHICLE */}
                <div className="relative inline-block">

                    <h1 className="font-heading text-[132px] md:text-[230px] leading-[0.68]">
                        BOOKING
                    </h1>

                    {/* VEHICLE LAYER */}
                    <div className="absolute left-1/2 top-[55%] md:top-[52%] -translate-x-1/2 -translate-y-1/2 w-[320px] md:w-[580px] h-[200px] md:h-[360px]">

                        {vehicles.map((v, index) => (
                            <img
                                key={v.type}
                                src={v.image}
                                alt={v.alt}
                                className={`
                                    absolute inset-0 w-full h-auto
                                    transition-all duration-700 ease-in-out
                                    pointer-events-none
                                    drop-shadow-[0_35px_40px_rgba(0,0,0,0.85)]
                                    ${index === active
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-6"
                                }
                                `}
                            />
                        ))}

                    </div>

                    {/* CONTROLS */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 flex gap-4">

                        <button
                            onClick={prev}
                            className="w-10 h-10 rounded-full
                            border border-[#f2cd1c]/40
                            flex items-center justify-center
                            hover:border-[#f2cd1c] transition"
                            aria-label="Previous"
                        >
                            <FiChevronLeft className="text-[#f2cd1c]" />
                        </button>

                        <button
                            onClick={next}
                            className="w-10 h-10 rounded-full
                            border border-[#f2cd1c]/40
                            flex items-center justify-center
                            hover:border-[#f2cd1c] transition"
                            aria-label="Next"
                        >
                            <FiChevronRight className="text-[#f2cd1c]" />
                        </button>

                    </div>

                </div>

                {/* CTA */}
                <div className="mt-16 md:mt-24 flex flex-col items-center">
                    <p className="text-[#F2CD1C] font-semibold text-sm md:text-lg">
                        Book tickets using WhatsApp
                    </p>

                    <WhatsAppCTA />

                    <p className="mt-2 text-sm opacity-60">
                        You chat. We book.
                    </p>
                </div>

            </div>
        </section>
    );
}
