//
//
// import bus from "../assets/bus.png";
// import LightPillar from "./LightPillar";
// import { FaWhatsapp } from "react-icons/fa";
//
//
// export default function HeroBus() {
//     return (
//         <section
//             className="
//         relative
//         h-[100svh]
//         overflow-hidden
//         bg-black
//         px-6
//         pt-24
//         grid
//         grid-rows-[auto_1fr_auto]
//         items-center
//       "
//         >
//             {/* ================= BACKGROUND EFFECT ================= */}
//             <div className="absolute inset-0 z-0 pointer-events-none">
//                 <LightPillar
//                     topColor="#ffe047"
//                     bottomColor="#f2cd1c"
//                     intensity={1.2}
//                     glowAmount={0.001} />
//             </div>
//
//             {/* ================= HERO VISUAL STACK ================= */}
//             <div className="relative z-10 flex justify-center mt-35 md:mt-5">
//             <div className="relative text-center leading-none">
//
//                     <h1 className="font-heading text-[70px] md:text-[110px] leading-none m-0">
//                         TICKET
//                     </h1>
//
//                     <h1 className="
//                           font-heading
//                           text-[140px]
//                           md:text-[230px]
//                           leading-[0.65]
//                           m-0
//                           md:mt-0
//                         ">
//                         BOOKING
//                     </h1>
//
//                     {/* BUS FLOATING ON TEXT */}
//                     <img
//                         src={bus}
//                         alt="Bus"
//                         className="
//                                 absolute
//                                 left-1/2
//                                 -translate-x-1/2
//                                 top-[24%]
//                                 md:top-[30%]
//                                 w-[320px]
//                                 md:w-[560px]
//                                 pointer-events-none
//                                 z-20
//                             "
//                                     />
//                 </div>
//             </div>
//
//             {/* ================= CTA STACK ================= */}
//             <div className="relative z-30 flex flex-col items-center -mt-6 md:mt-20 pb-2 md:pb-6">
//             <p className="text-[#F2CD1C] font-bold text-sm md:text-lg">
//                     Book tickets using WhatsApp
//                 </p>
//
//                 {/*<a*/}
//                 {/*    href="https://wa.me/XXXXXXXXXX?text=Hi%20Quickets%20I%20want%20to%20book%20a%20ticket"*/}
//                 {/*    className="mt-4 bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition"*/}
//                 {/*>*/}
//                 {/*    Book on WhatsApp*/}
//                 {/*</a>*/}
//
//                 <a
//                     href="https://wa.me/+918300984737?text=Hi%20Quickets!%20I%20want%20to%20book%20a%20ticket"
//                     className="group mt-20 inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]"
//                 >
//                     <span>Book on WhatsApp</span>
//                 </a>
//
//                 <p className="mt-1 opacity-50 text-sm">
//                     You chat. We book.
//                 </p>
//             </div>
//         </section>
//     );
// }
//
//
// import bus from "../assets/bus.png";
// import heroBg from "../assets/hero-bg.jpg";
// import { FaWhatsapp } from "react-icons/fa";
//
// export default function HeroBus() {
//     return (
//         <section className="relative h-[100svh] overflow-hidden px-6 pt-24 grid grid-rows-[auto_1fr_auto] items-center">
//
//             {/* BACKGROUND IMAGE */}
//             <div
//                 className="absolute inset-0 z-0 bg-cover bg-center will-change-transform animate-fadeIn"
//                 style={{ backgroundImage: `url(${heroBg})` }}
//             />
//
//             {/* DARK OVERLAY */}
//             <div className="absolute inset-0 z-10 bg-black/55" />
//
//             {/* VIGNETTE */}
//             <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.85)_75%)]" />
//
//             {/* HERO TEXT */}
//             <div className="relative z-30 flex justify-center mt-24 md:mt-10">
//                 <div className="relative text-center leading-none">
//
//                     <h1 className="font-heading text-[70px] md:text-[110px] leading-none">
//                         TICKET
//                     </h1>
//
//                     <h1 className="font-heading text-[140px] md:text-[230px] leading-[0.65]">
//                         BOOKING
//                     </h1>
//
//                     {/* BUS */}
//                     <img
//                         src={bus}
//                         alt="Bus"
//                         className="
//               absolute left-1/2 -translate-x-1/2
//               top-[24%] md:top-[30%]
//               w-[320px] md:w-[560px]
//               pointer-events-none
//               drop-shadow-[0_35px_40px_rgba(0,0,0,0.85)]
//             "
//                     />
//                 </div>
//             </div>
//
//             {/* CTA */}
//             <div className="relative z-30 flex flex-col items-center -mt-6 md:mt-20 pb-6">
//                 <p className="text-[#F2CD1C] font-semibold text-sm md:text-lg">
//                     Book tickets using WhatsApp
//                 </p>
//
//                 <a
//                     href="https://wa.me/918300984737?text=Hi%20Quickets!%20I%20want%20to%20book%20a%20ticket"
//                     className="
//             mt-16 inline-flex items-center gap-2
//             bg-[#25D366] text-black
//             px-8 py-4 rounded-xl font-semibold text-lg
//             transition-all duration-300
//             hover:scale-105 hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]
//           "
//                 >
//                     <FaWhatsapp />
//                     Book on WhatsApp
//                 </a>
//
//                 <p className="mt-2 text-sm opacity-60">
//                     You chat. We book.
//                 </p>
//             </div>
//
//         </section>
//     );
// }


import bus from "../assets/bus.png";
import heroBg from "../assets/hero-bg.jpg";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroBus() {
    return (
        <section className="relative h-[100svh] overflow-hidden px-6 pt-28 md:pt-24">

            {/* BACKGROUND */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center animate-fadeIn"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div className="absolute inset-0 z-10 bg-black/55" />
            <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.85)_80%)]" />

            {/* ================= HERO ================= */}
            <div className="relative z-30 flex flex-col items-center justify-center h-full text-center">

                {/* TICKET */}
                <h1 className="font-heading text-[64px] md:text-[110px] leading-none">
                    TICKET
                </h1>

                {/* BOOKING + BUS (ANCHOR GROUP) */}
                <div className="relative inline-block">

                    {/* BOOKING */}
                    <h1 className="font-heading text-[132px] md:text-[230px] leading-[0.68]">
                        BOOKING
                    </h1>

                    {/* BUS FLOATING ON TEXT */}
                    <img
                        src={bus}
                        alt="Bus"
                        className="
              absolute
              left-1/2
              -translate-x-1/2
              -translate-y-1/2

              top-[55%] md:top-[52%]

              w-[300px] md:w-[560px]
              pointer-events-none
              drop-shadow-[0_35px_40px_rgba(0,0,0,0.85)]
            "
                    />
                </div>

                {/* CTA */}
                <div className="mt-14 md:mt-20 flex flex-col items-center">
                    <p className="text-[#F2CD1C] font-semibold text-sm md:text-lg">
                        Book tickets using WhatsApp
                    </p>

            {/*        <a*/}
            {/*            href="https://wa.me/91XXXXXXXXXX?text=Hi%20Quickets!%20I%20want%20to%20book%20a%20ticket"*/}
            {/*            className="*/}
            {/*  mt-8 inline-flex items-center gap-2*/}
            {/*  bg-[#25D366] text-black*/}
            {/*  px-8 py-4 rounded-xl font-semibold text-lg*/}
            {/*  transition-all duration-300*/}
            {/*  hover:scale-105 hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]*/}
            {/*"*/}
            {/*        >*/}
            {/*            <FaWhatsapp />*/}
            {/*            Book on WhatsApp*/}
            {/*        </a>*/}

                    <a
                        href="https://wa.me/91XXXXXXXXXX?text=Hi%20Quickets!%20I%20want%20to%20book%20a%20ticket"
                        className="
    relative overflow-hidden
    mt-8 inline-flex items-center gap-3
    bg-[#25D366] text-black
    px-9 py-4 rounded-2xl font-semibold text-lg
    transition-transform duration-150 ease-out
    active:scale-[0.96]
    focus:outline-none
    group
    shadow-[0_10px_30px_rgba(37,211,102,0.35)]
  "
                    >
                        {/* RIPPLE LAYER */}
                        <span
                            className="
      absolute inset-0
      bg-white/30
      scale-0
      group-active:scale-100
      transition-transform duration-500
      rounded-full
    "
                        />

                        {/* ICON */}
                        <FaWhatsapp className="relative z-10 text-xl transition-transform duration-300 group-hover:-rotate-6 group-active:scale-90" />

                        {/* TEXT */}
                        <span className="relative z-10">
    Book on WhatsApp
  </span>

                        {/* GLOW */}
                        <span
                            className="
                              pointer-events-none
                              absolute -inset-1
                              rounded-2xl
                              opacity-0
                              group-hover:opacity-100
                              transition-opacity duration-300
                              blur-xl
                              bg-[#25D366]/50
                            "
                        />
                    </a>


                    <p className="mt-2 text-sm opacity-60">
                        You chat. We book.
                    </p>
                </div>

            </div>
        </section>
    );
}
