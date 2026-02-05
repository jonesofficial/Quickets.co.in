import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function BookingAgentCarousel() {
    const slides = [
        {
            tag: "Train Booking",
            title: "TravelIQ",
            subtitle: "IRCTC Authorized PSP",
            desc: "Train tickets are booked using TravelIQ’s IRCTC-approved PSP infrastructure.",
            id: "TRAVELIQ-IRCTC-ID-XXXX",
        },
        {
            tag: "Authorized Providers",
            title: "Booking Providers",
            subtitle: "Verified & Approved",
            desc: "We book tickets only through authorized providers for train and bus travel.",
            id: null,
        },
        {
            tag: "Bus Booking",
            title: "SeatSeller",
            subtitle: "Official Bus Aggregator",
            desc: "Bus tickets are issued via SeatSeller’s authorized booking network.",
            id: "SEATSELLER-ID-XXXX",
        },
    ];

    const [centerIndex, setCenterIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCenterIndex((prev) => (prev + 1) % slides.length);
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    const rotateLeft = () =>
        setCenterIndex((prev) => (prev - 1 + slides.length) % slides.length);

    const rotateRight = () =>
        setCenterIndex((prev) => (prev + 1) % slides.length);

    const getSlide = (offset) =>
        slides[(centerIndex + offset + slides.length) % slides.length];

    const left = getSlide(-1);
    const center = getSlide(0);
    const right = getSlide(1);

    return (
        <section className="bg-black py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto relative">

                {/* Heading */}
                <h2 className="font-heading text-center text-3xl md:text-5xl text-white mb-4">
                    Booking Agent
                    <span className="text-[#f2cd1c]"> Providers</span>
                </h2>

                <p className="text-center text-white/70 text-sm max-w-xl mx-auto mb-16">
                    Train and bus tickets are booked using verified provider systems.
                </p>

                {/* Slides */}
                <div className="flex items-center justify-center gap-8">

                    <Slide data={left} scale="scale-90" opacity="opacity-60" />

                    <Slide
                        data={center}
                        scale="scale-100"
                        opacity="opacity-100"
                        highlight
                    />

                    <Slide data={right} scale="scale-90" opacity="opacity-60" />
                </div>

                {/* Controls */}
                <button
                    onClick={rotateLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2
                    w-11 h-11 rounded-full bg-black
                    border border-[#f2cd1c]/50
                    flex items-center justify-center
                    hover:border-[#f2cd1c] transition"
                    aria-label="Previous"
                >
                    <FiChevronLeft size={22} className="text-[#f2cd1c]" />
                </button>

                <button
                    onClick={rotateRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2
                    w-11 h-11 rounded-full bg-black
                    border border-[#f2cd1c]/50
                    flex items-center justify-center
                    hover:border-[#f2cd1c] transition"
                    aria-label="Next"
                >
                    <FiChevronRight size={22} className="text-[#f2cd1c]" />
                </button>

            </div>
        </section>
    );
}

function Slide({ data, scale, opacity, highlight }) {
    return (
        <div
            className={`w-[300px] md:w-[340px] transition-all duration-700
            ${scale} ${opacity}`}
        >
            <div
                className={`bg-black border rounded-3xl px-8 py-10
                ${highlight
                    ? "border-[#f2cd1c]"
                    : "border-[#f2cd1c]/30"
                }`}
            >
                <p className="text-xs uppercase tracking-widest text-white/60">
                    {data.tag}
                </p>

                <h3 className="mt-2 text-3xl font-semibold text-white">
                    {data.title}
                </h3>

                <p className="mt-1 text-sm text-white/70">
                    {data.subtitle}
                </p>

                <p className="mt-5 text-sm text-white/80">
                    {data.desc}
                </p>

                {data.id && (
                    <div className="mt-6 font-mono text-sm tracking-wider
                        bg-black px-4 py-2 rounded-lg
                        border border-[#f2cd1c]/50
                        text-[#f2cd1c] inline-block">
                        {data.id}
                    </div>
                )}
            </div>
        </div>
    );
}
