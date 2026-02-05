import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
export default function BookingAgentCarousel() {
    const slides = [
        {
            tag: "Train Booking",
            title: "IRCTC Authorized Agent",
            desc: "Train tickets are booked using IRCTC-approved PSP credentials.",
            id: "IRCTC-AGENT-ID-TN9152QU",
            verified: "Government approved",
        },
        {
            tag: "Bus Booking",
            title: "SeatSeller Partner Agent",
            desc: "Bus tickets are issued via SeatSeller’s authorized network.",
            id: "SEATSELLER-ID-24899140",
            verified: "Verified booking partner",
        },
        {
            tag: "Quickets Promise",
            title: "Transparent & WhatsApp-first",
            desc: "Verify agent IDs on chat. No OTP requests. Pay only after confirmation.",
            id: null,
            verified: null,
        },
    ];

    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const prev = () =>
        setActive((prev) => (prev - 1 + slides.length) % slides.length);

    const next = () =>
        setActive((prev) => (prev + 1) % slides.length);

    return (
        <section className="bg-white py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto relative">

                {/* Heading */}
                <h2 className="font-heading text-center text-3xl md:text-5xl text-black mb-4">
                    Booking Agent
                    <span className="text-[#f2cd1c]"> Verification</span>
                </h2>

                <p className="text-center text-gray-500 text-sm max-w-xl mx-auto mb-16">
                    Verified agent infrastructure used for every booking.
                </p>

                {/* Carousel */}
                <div className="relative">

                    {/* Track */}
                    <div
                        className="flex transition-transform duration-700 ease-out"
                        style={{
                            transform: `translateX(calc(50% - ${(active + 0.5) * 360}px))`,
                        }}
                    >
                        {slides.map((slide, index) => {
                            const isActive = index === active;

                            return (
                                <div
                                    key={index}
                                    className={`w-[320px] md:w-[360px] mx-4 transition-all duration-700
                                    ${isActive
                                        ? "scale-100 opacity-100"
                                        : "scale-90 opacity-50"
                                    }`}
                                >
                                    <div className="bg-white border border-gray-200 rounded-3xl px-8 py-10 h-full">

                                        <p className="text-xs uppercase tracking-widest text-gray-400">
                                            {slide.tag}
                                        </p>

                                        <h3 className="mt-2 text-2xl font-semibold text-black">
                                            {slide.title}
                                        </h3>

                                        <p className="mt-4 text-sm text-gray-600">
                                            {slide.desc}
                                        </p>

                                        {slide.id && (
                                            <div className="mt-6 font-mono text-lg tracking-wider
                                                bg-gray-50 px-5 py-3 rounded-lg border border-gray-300 inline-block">
                                                {slide.id}
                                            </div>
                                        )}

                                        {slide.verified && (
                                            <p className="mt-3 text-xs text-green-600">
                                                ✔ {slide.verified}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Controls */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2
                            w-11 h-11 rounded-full bg-white border border-gray-300
                            flex items-center justify-center
                            hover:bg-gray-100 transition"
                        aria-label="Previous"
                    >
                        <FiChevronLeft size={22} className="text-gray-700" />
                    </button>


                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2
                            w-11 h-11 rounded-full bg-white border border-gray-300
                            flex items-center justify-center
                            hover:bg-gray-100 transition"
                        aria-label="Next"
                    >
                        <FiChevronRight size={22} className="text-gray-700" />
                    </button>


                </div>
            </div>
        </section>
    );
}
