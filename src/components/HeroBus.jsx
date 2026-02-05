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

import { useEffect, useState } from "react";
import bus from "../assets/bus.png";
import train from "../assets/train.png";
import heroBg from "../assets/hero-bg.jpg";
import WhatsAppCTA from "../components/WhatsappCTA.jsx";

export default function HeroBus() {
    const vehicles = [
        {
            id: "bus",
            image: bus,
            label: "Bus Booking",
        },
        {
            id: "train",
            image: train,
            label: "Train Booking",
        },
    ];

    const [active, setActive] = useState(0);

    // ⏱ 5 SECOND GAP
    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % vehicles.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

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

                {/* TITLE */}
                <h1 className="font-heading text-[64px] md:text-[110px] leading-none">
                    TICKET
                </h1>

                <h1 className="font-heading text-[132px] md:text-[230px] leading-[0.68]">
                    BOOKING
                </h1>

                {/* VEHICLE STAGE */}
                <div className="relative mt-6 md:mt-10 w-full max-w-5xl h-[220px] md:h-[380px]">

                    {vehicles.map((v, index) => {
                        const isActive = index === active;

                        return (
                            <img
                                key={v.id}
                                src={v.image}
                                alt={v.label}
                                className={`
                                    absolute left-1/2 bottom-0
                                    -translate-x-1/2
                                    w-[280px] md:w-[560px]
                                    pointer-events-none
                                    drop-shadow-[0_35px_40px_rgba(0,0,0,0.85)]

                                    transition-all duration-[800ms] ease-out
                                    ${isActive
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-[20px]"
                                }
                                `}
                            />
                        );
                    })}

                </div>

                {/* CONTEXT TEXT (changes with vehicle) */}
                <p className="mt-6 text-[#F2CD1C] font-semibold text-sm md:text-lg transition-opacity duration-500">
                    {vehicles[active].label} via WhatsApp
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

