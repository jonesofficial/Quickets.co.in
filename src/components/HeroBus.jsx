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

// import { useEffect, useState } from "react";
// import bus from "../assets/bus.png";
// import train from "../assets/train.png";
// import flight from "../assets/flight.png";
// import heroBg from "../assets/hero-bg.jpg";
// import WhatsAppCTA from "../components/WhatsappCTA.jsx";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
//
// export default function HeroBus() {
//     const slides = [
//         { id: "bus", image: bus, label: "Bus Booking via WhatsApp" },
//         { id: "train", image: train, label: "Train Booking via WhatsApp" },
//         { id: "flight", image: flight, label: "Flight Booking via WhatsApp" },
//     ];
//
//     const [index, setIndex] = useState(0);
//     const [isTransitioning, setIsTransitioning] = useState(true);
//
//     // 🔁 Auto slide every 10 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prev) => prev + 1);
//             setIsTransitioning(true);
//         }, 10000);
//
//         return () => clearInterval(interval);
//     }, []);
//
//     // ♻️ Seamless loop reset
//     useEffect(() => {
//         if (index === slides.length) {
//             setTimeout(() => {
//                 setIsTransitioning(false);
//                 setIndex(0);
//             }, 900); // must match transition duration
//         }
//     }, [index, slides.length]);
//
//     const prev = () => {
//         setIsTransitioning(true);
//         setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//     };
//
//     const next = () => {
//         setIsTransitioning(true);
//         setIndex((prev) => prev + 1);
//     };
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
//             {/* HERO CONTENT */}
//             <div className="relative z-30 flex flex-col items-center justify-center h-full text-center">
//
//                 {/* TITLE */}
//                 <h1 className="font-heading text-[64px] md:text-[110px] leading-none z-10">
//                     TICKET
//                 </h1>
//
//                 {/* BOOKING */}
//                 <h1 className="font-heading text-[132px] md:text-[230px] leading-[0.68] relative z-10">
//                     BOOKING
//                 </h1>
//
//                 {/* CAROUSEL */}
//                 <div
//                     className="
//                         absolute left-1/2
//                         top-[52%] sm:top-[48%] md:top-[13%] xl:top-[10%]
//                         -translate-x-1/2
//                         w-full max-w-6xl
//                         h-[240px] sm:h-[260px] md:h-[300px] xl:h-[340px]
//                         overflow-hidden
//                         z-40
//                     "
//                 >
//                     {/* SLIDER TRACK */}
//                     <div
//                         className={`flex h-full ${
//                             isTransitioning
//                                 ? "transition-transform duration-[900ms] ease-in-out"
//                                 : ""
//                         }`}
//                         style={{ transform: `translateX(-${index * 100}%)` }}
//                     >
//                         {[...slides, ...slides].map((slide, i) => (
//                             <div
//                                 key={`${slide.id}-${i}`}
//                                 className="min-w-full flex items-end justify-center"
//                             >
//                                 {/*<img*/}
//                                 {/*    src={slide.image}*/}
//                                 {/*    alt={slide.label}*/}
//                                 {/*    className="*/}
//                                 {/*        w-[220px] sm:w-[260px] md:w-[500px] xl:w-[580px]*/}
//                                 {/*        pointer-events-none*/}
//                                 {/*        drop-shadow-[0_50px_55px_rgba(0,0,0,0.95)]*/}
//                                 {/*    "*/}
//                                 {/*/>*/}
//
//                                 <img
//                                     src={slide.image}
//                                     alt={slide.label}
//                                     className="
//                                         w-[220px] sm:w-[260px] md:w-[500px] xl:w-[580px]
//                                         pointer-events-none
//                                         drop-shadow-[0_50px_55px_rgba(0,0,0,0.9)]
//                                     "
//                                     style={{
//                                         WebkitMaskImage: `
//                                             linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%),
//                                             linear-gradient(to top, transparent 0%, black 22%, black 100%)
//                                         `,
//                                                                         WebkitMaskComposite: "destination-in",
//                                                                         maskImage: `
//                                             linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%),
//                                             linear-gradient(to top, transparent 0%, black 22%, black 100%)
//                                         `,
//                                         maskComposite: "intersect",
//                                     }}
//                                 />
//
//
//                             </div>
//                         ))}
//                     </div>
//
//                     {/* CONTROLS */}
//                     <button
//                         onClick={prev}
//                         className="
//                             absolute left-[6%] sm:left-[10%] md:left-[16%]
//                             top-1/2 -translate-y-1/2
//                             w-9 h-9 md:w-10 md:h-10
//                             rounded-full
//                             border border-[#f2cd1c]/40
//                             flex items-center justify-center
//                         "
//                         aria-label="Previous"
//                     >
//                         <FiChevronLeft className="text-[#f2cd1c]" />
//                     </button>
//
//                     <button
//                         onClick={next}
//                         className="
//                             absolute right-[6%] sm:right-[10%] md:right-[16%]
//                             top-1/2 -translate-y-1/2
//                             w-9 h-9 md:w-10 md:h-10
//                             rounded-full
//                             border border-[#f2cd1c]/40
//                             flex items-center justify-center
//                         "
//                         aria-label="Next"
//                     >
//                         <FiChevronRight className="text-[#f2cd1c]" />
//                     </button>
//                 </div>
//
//                 {/* CONTEXT TEXT */}
//                 <p className="mt-12 sm:mt-16 md:mt-24 text-[#F2CD1C] font-semibold text-sm md:text-lg tracking-wide">
//                     {slides[index % slides.length].label}
//                 </p>
//
//                 {/* CTA */}
//                 <div className="mt-6 flex flex-col items-center">
//                     <WhatsAppCTA />
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
import flight from "../assets/flight.png";
import heroBg from "../assets/hero-bg.jpg";
import WhatsAppCTA from "../components/WhatsappCTA.jsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function HeroBus() {
    const slides = [
        { id: "bus", image: bus },
        { id: "train", image: train },
        { id: "flight", image: flight },
    ];

    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => prev + 1);
            setIsTransitioning(true);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (index === slides.length) {
            setTimeout(() => {
                setIsTransitioning(false);
                setIndex(0);
            }, 900);
        }
    }, [index, slides.length]);

    const prev = () => {
        setIsTransitioning(true);
        setIndex((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    const next = () => {
        setIsTransitioning(true);
        setIndex((prev) => prev + 1);
    };

    return (
        <section className="relative h-[100svh] overflow-hidden px-6 pt-28 md:pt-24">

            {/* BACKGROUND */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div className="absolute inset-0 z-10 bg-black/55" />
            <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.85)_80%)]" />

            {/* HERO CONTENT */}
            <div className="relative z-30 flex flex-col items-center justify-center h-full text-center">

                <div className="relative w-full flex flex-col items-center">

                    <h1 className="font-heading text-[64px] md:text-[110px] leading-none">
                        TICKET
                    </h1>

                    <h1
                        className="font-heading text-[132px] md:text-[230px] leading-[0.68]"
                        style={{ textShadow: "0 20px 40px rgba(0,0,0,0.6)" }}
                    >
                        BOOKING
                    </h1>

                    {/* CAROUSEL */}
                    <div
                        className="
                            absolute left-1/2
                            top-1/2 md:top-[13%] xl:top-[10%]
                            -translate-x-1/2
                            -translate-y-[34%] sm:-translate-y-[18%] md:translate-y-0
                            w-full max-w-6xl
                            h-[220px] sm:h-[250px] md:h-[300px] xl:h-[340px]
                            overflow-hidden
                            z-40
                        "
                    >
                        <div
                            className={`flex h-full ${
                                isTransitioning
                                    ? "transition-transform duration-[900ms] ease-in-out"
                                    : ""
                            }`}
                            style={{ transform: `translateX(-${index * 100}%)` }}
                        >
                            {[...slides, ...slides].map((slide, i) => (
                                <div
                                    key={`${slide.id}-${i}`}
                                    className="min-w-full flex items-end justify-center"
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.id}
                                        className="
                                            w-[300px] sm:w-[340px] md:w-[500px] xl:w-[600px]
                                            pointer-events-none
                                            animate-[floatSlow_7s_ease-in-out_infinite]
                                        "
                                    />
                                </div>
                            ))}
                        </div>

                        {/* CONTROLS */}
                        <button
                            onClick={prev}
                            className="
                                absolute left-4 md:left-8
                                top-1/2 -translate-y-1/2
                                w-9 h-9 md:w-10 md:h-10
                                rounded-full
                                border border-[#f2cd1c]/40
                                flex items-center justify-center
                                opacity-40 hover:opacity-100 transition
                            "
                        >
                            <FiChevronLeft className="text-[#f2cd1c]" />
                        </button>

                        <button
                            onClick={next}
                            className="
                                absolute right-4 md:right-8
                                top-1/2 -translate-y-1/2
                                w-9 h-9 md:w-10 md:h-10
                                rounded-full
                                border border-[#f2cd1c]/40
                                flex items-center justify-center
                                opacity-40 hover:opacity-100 transition
                            "
                        >
                            <FiChevronRight className="text-[#f2cd1c]" />
                        </button>
                    </div>
                </div>

                {/* TRAVEL RAIL */}
                <div className="mt-20 flex items-center gap-4 text-[#F2CD1C] text-xs tracking-widest uppercase">
                    <span className="h-[1px] w-10 bg-[#F2CD1C]/60" />
                    <span>BUSES • TRAINS • FLIGHTS</span>
                    <span className="h-[1px] w-10 bg-[#F2CD1C]/60" />
                </div>

                {/* CTA */}
                <div className="mt-6 flex flex-col items-center">
                    <WhatsAppCTA />
                    <p className="mt-2 text-sm opacity-60">
                        You chat. We book.
                    </p>
                </div>

            </div>

            <style>{`
                @keyframes floatSlow {
                    0% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-8px) scale(1.01); }
                    100% { transform: translateY(0) scale(1); }
                }
            `}</style>
        </section>
    );
}

