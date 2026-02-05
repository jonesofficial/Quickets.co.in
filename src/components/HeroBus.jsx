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

import bus from "../assets/bus.png";
import train from "../assets/train.png";
import heroBg from "../assets/hero-bg.jpg";
import WhatsAppCTA from "../components/WhatsappCTA.jsx";

export default function HeroBus() {
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

                <h1 className="font-heading text-[132px] md:text-[230px] leading-[0.68] relative">
                    BOOKING
                </h1>

                {/* VEHICLE COMPOSITION */}
                <div className="relative w-full max-w-6xl mt-4 md:mt-8 h-[220px] md:h-[380px]">

                    {/* BUS */}
                    <img
                        src={bus}
                        alt="Bus Booking"
                        className="
                            absolute left-0 md:left-[5%] bottom-0
                            w-[260px] md:w-[480px]
                            drop-shadow-[0_35px_40px_rgba(0,0,0,0.85)]
                        "
                    />

                    {/* TRAIN */}
                    <img
                        src={train}
                        alt="Train Booking"
                        className="
                            absolute right-0 md:right-[5%] bottom-0
                            w-[300px] md:w-[560px]
                            drop-shadow-[0_35px_40px_rgba(0,0,0,0.85)]
                        "
                    />

                </div>

                {/* CTA */}
                <div className="mt-12 md:mt-16 flex flex-col items-center">
                    <p className="text-[#F2CD1C] font-semibold text-sm md:text-lg">
                        Book bus & train tickets using WhatsApp
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
