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
// import { useEffect, useState } from "react";
// import bus from "../assets/bus.png";
// import train from "../assets/train.png";
// import heroBg from "../assets/hero-bg.jpg";
// import WhatsAppCTA from "../components/WhatsappCTA.jsx";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
//
// export default function HeroBus() {
//     const vehicles = [
//         { type: "bus", image: bus, alt: "Bus" },
//         { type: "train", image: train, alt: "Train" },
//     ];
//
//     const [active, setActive] = useState(0);
//
//     // ⏱ 10 SECOND AUTO SWITCH
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActive((prev) => (prev + 1) % vehicles.length);
//         }, 10000); // 10s
//
//         return () => clearInterval(interval);
//     }, []);
//
//     const prev = () =>
//         setActive((prev) => (prev - 1 + vehicles.length) % vehicles.length);
//
//     const next = () =>
//         setActive((prev) => (prev + 1) % vehicles.length);
//
//     return (
//         <section className="relative h-[100svh] overflow-hidden px-6 pt-28 md:pt-24">
//
//             {/* BACKGROUND */}
//             <div
//                 className="absolute inset-0 z-0 bg-cover bg-center"
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
//                 {/* BOOKING + VEHICLE */}
//                 <div className="relative inline-block">
//
//                     <h1 className="font-heading text-[132px] md:text-[230px] leading-[0.68]">
//                         BOOKING
//                     </h1>
//
//                     {/* VEHICLE LAYER */}
//                     <div
//                         className="absolute left-1/2 top-[55%] md:top-[52%]
//                         -translate-x-1/2 -translate-y-1/2
//                         w-[320px] md:w-[580px] h-[200px] md:h-[360px]"
//                     >
//
//                         {vehicles.map((v, index) => {
//                             const isActive = index === active;
//
//                             return (
//                                 <img
//                                     key={v.type}
//                                     src={v.image}
//                                     alt={v.alt}
//                                     className={`
//                                         absolute inset-0 w-full h-auto
//                                         pointer-events-none
//                                         drop-shadow-[0_35px_40px_rgba(0,0,0,0.85)]
//
//                                         transition-all
//                                         duration-[1600ms]
//                                         ease-[cubic-bezier(0.19,1,0.22,1)]
//
//                                         ${isActive
//                                         ? "opacity-100 translate-y-0 scale-100 blur-0"
//                                         : "opacity-0 translate-y-[80px] scale-[0.82] blur-[8px]"
//                                     }
//                                     `}
//                                 />
//                             );
//                         })}
//
//                     </div>
//
//                     {/* CONTROLS */}
//                     <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 flex gap-4">
//
//                         <button
//                             onClick={prev}
//                             className="w-10 h-10 rounded-full
//                             border border-[#f2cd1c]/40
//                             flex items-center justify-center
//                             hover:border-[#f2cd1c] transition"
//                             aria-label="Previous"
//                         >
//                             <FiChevronLeft className="text-[#f2cd1c]" />
//                         </button>
//
//                         <button
//                             onClick={next}
//                             className="w-10 h-10 rounded-full
//                             border border-[#f2cd1c]/40
//                             flex items-center justify-center
//                             hover:border-[#f2cd1c] transition"
//                             aria-label="Next"
//                         >
//                             <FiChevronRight className="text-[#f2cd1c]" />
//                         </button>
//
//                     </div>
//
//                 </div>
//
//                 {/* CTA */}
//                 <div className="mt-16 md:mt-24 flex flex-col items-center">
//                     <p className="text-[#F2CD1C] font-semibold text-sm md:text-lg">
//                         Book tickets using WhatsApp
//                     </p>
//
//                     <WhatsAppCTA />
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
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function HeroBus() {
    const vehicles = [
        { type: "bus", image: bus, alt: "Bus" },
        { type: "train", image: train, alt: "Train" },
    ];

    const [active, setActive] = useState(0);

    // ⏱ 10 SECOND AUTO SWITCH
    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % vehicles.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [vehicles.length]);

    const prev = () =>
        setActive((prev) => (prev - 1 + vehicles.length) % vehicles.length);

    const next = () =>
        setActive((prev) => (prev + 1) % vehicles.length);

    return (
        <section className="relative h-[100svh] overflow-hidden px-6 pt-28 md:pt-24 bg-black">

            {/* BACKGROUND LAYERS */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s] scale-110"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div className="absolute inset-0 z-10 bg-black/55" />
            <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.85)_80%)]" />

            {/* HERO CONTENT */}
            <div className="relative z-30 flex flex-col items-center justify-center h-full text-center">

                <h1 className="font-heading text-[64px] md:text-[110px] text-white leading-none tracking-tighter">
                    TICKET
                </h1>

                {/* BOOKING + VEHICLE CONTAINER */}
                <div className="relative inline-block perspective-[1000px]">

                    <h1 className="font-heading text-[132px] md:text-[230px] text-white leading-[0.68] tracking-tighter select-none">
                        BOOKING
                    </h1>

                    {/* VEHICLE STAGE */}
                    <div
                        className="absolute left-1/2 top-[55%] md:top-[52%]
                        -translate-x-1/2 -translate-y-1/2
                        w-[340px] md:w-[650px] h-[200px] md:h-[400px]
                        pointer-events-none"
                    >
                        {vehicles.map((v, index) => {
                            const isActive = index === active;

                            return (
                                <img
                                    key={v.type}
                                    src={v.image}
                                    alt={v.alt}
                                    className={`
                                        absolute inset-0 w-full h-auto object-contain
                                        drop-shadow-[0_45px_50px_rgba(0,0,0,0.9)]
                                        will-change-transform

                                        /* THE "REAL" MOVEMENT ANIMATION */
                                        transition-all
                                        duration-[1800ms]
                                        ease-[cubic-bezier(0.23,1,0.32,1)]

                                        ${isActive
                                        ? "opacity-100 translate-y-0 scale-100 blur-0 rotate-0 z-20"
                                        : "opacity-0 translate-y-24 scale-[0.4] blur-xl -rotate-6 z-10"
                                    }
                                    `}
                                    style={{
                                        // Slight delay for the incoming vehicle makes it feel like one replaces the other
                                        transitionDelay: isActive ? "300ms" : "0ms"
                                    }}
                                />
                            );
                        })}
                    </div>

                    {/* CONTROLS */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-10 flex gap-6">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full
                            border border-[#f2cd1c]/30 bg-black/20 backdrop-blur-sm
                            flex items-center justify-center
                            hover:border-[#f2cd1c] hover:scale-110 transition-all active:scale-95"
                            aria-label="Previous"
                        >
                            <FiChevronLeft className="text-[#f2cd1c] text-xl" />
                        </button>

                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full
                            border border-[#f2cd1c]/30 bg-black/20 backdrop-blur-sm
                            flex items-center justify-center
                            hover:border-[#f2cd1c] hover:scale-110 transition-all active:scale-95"
                            aria-label="Next"
                        >
                            <FiChevronRight className="text-[#f2cd1c] text-xl" />
                        </button>
                    </div>
                </div>

                {/* CTA SECTION */}
                <div className="mt-20 md:mt-28 flex flex-col items-center">
                    <p className="text-[#F2CD1C] font-semibold text-sm md:text-lg uppercase tracking-widest mb-4">
                        Book tickets using WhatsApp
                    </p>

                    <WhatsAppCTA />

                    <p className="mt-4 text-sm text-white/50 italic">
                        You chat. We book.
                    </p>
                </div>

            </div>
        </section>
    );
}