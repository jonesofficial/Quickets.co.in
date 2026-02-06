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
    const slides = [
        { id: "bus", image: bus, label: "Bus Booking" },
        { id: "train", image: train, label: "Train Booking" },
    ];

    const [index, setIndex] = useState(0);

    // ⏱ Auto slide every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const prev = () =>
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    const next = () =>
        setIndex((prev) => (prev + 1) % slides.length);

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

                <h1 className="font-heading text-[132px] md:text-[230px] leading-[0.68]">
                    BOOKING
                </h1>

                {/* CAROUSEL STAGE */}
                <div className="relative mt-6 md:mt-10 w-full max-w-5xl h-[220px] md:h-[380px] overflow-hidden">

                    {/* SLIDER */}
                    <div
                        className="flex h-full transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {slides.map((slide) => (
                            <div
                                key={slide.id}
                                className="min-w-full flex items-end justify-center"
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.label}
                                    className="w-[280px] md:w-[560px]
                                    drop-shadow-[0_35px_40px_rgba(0,0,0,0.85)]
                                    pointer-events-none"
                                />
                            </div>
                        ))}
                    </div>

                    {/* CONTROLS */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2
                        w-10 h-10 rounded-full
                        border border-[#f2cd1c]/40
                        flex items-center justify-center
                        hover:border-[#f2cd1c] transition"
                        aria-label="Previous"
                    >
                        <FiChevronLeft className="text-[#f2cd1c]" />
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2
                        w-10 h-10 rounded-full
                        border border-[#f2cd1c]/40
                        flex items-center justify-center
                        hover:border-[#f2cd1c] transition"
                        aria-label="Next"
                    >
                        <FiChevronRight className="text-[#f2cd1c]" />
                    </button>
                </div>

                {/* LABEL */}
                <p className="mt-6 text-[#F2CD1C] font-semibold text-sm md:text-lg">
                    {slides[index].label} via WhatsApp
                </p>

                {/* CTA */}
                <div className="mt-6 flex flex-col items-center">
                    <WhatsAppCTA />
                    <p className="mt-2 text-sm opacity-60">
                        You chat. We book.
                    </p>
                </div>

            </div>
        </section>
    );
}
