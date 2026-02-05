import { useEffect, useRef } from "react";

export default function BookingAgentCarousel() {
    const trackRef = useRef(null);
    const indexRef = useRef(0);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const slides = track.children;

        const interval = setInterval(() => {
            indexRef.current =
                (indexRef.current + 1) % slides.length;

            slides[indexRef.current].scrollIntoView({
                behavior: "smooth",
                inline: "center",
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="font-heading text-center text-3xl md:text-5xl text-black mb-4">
                    Booking Agent
                    <span className="text-[#f2cd1c]"> Verification</span>
                </h2>

                <p className="text-center text-gray-500 text-sm max-w-xl mx-auto mb-16">
                    All bookings are processed using authorized agent systems.
                    You can verify these credentials before payment.
                </p>

                {/* Carousel Track */}
                <div
                    ref={trackRef}
                    className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                >

                    {/* IRCTC */}
                    <div className="snap-center min-w-[90%] md:min-w-[60%] lg:min-w-[45%]
                        bg-white border border-gray-200 rounded-2xl px-8 py-10">

                        <p className="text-xs uppercase tracking-widest text-gray-400">
                            Train Booking
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold text-black">
                            IRCTC Authorized Agent
                        </h3>

                        <p className="mt-4 text-sm text-gray-600 max-w-md">
                            Train tickets are booked only through IRCTC-approved
                            PSP agent credentials.
                        </p>

                        <div className="mt-6 font-mono text-lg tracking-wider
                            bg-gray-50 inline-block px-5 py-3 rounded-lg
                            border border-gray-300 text-black">
                            IRCTC-AGENT-ID-TN9152QU
                        </div>

                        <p className="mt-3 text-xs text-green-600">
                            ✔ Government approved
                        </p>
                    </div>

                    {/* SeatSeller */}
                    <div className="snap-center min-w-[90%] md:min-w-[60%] lg:min-w-[45%]
                        bg-white border border-gray-200 rounded-2xl px-8 py-10">

                        <p className="text-xs uppercase tracking-widest text-gray-400">
                            Bus Booking
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold text-black">
                            SeatSeller Partner Agent
                        </h3>

                        <p className="mt-4 text-sm text-gray-600 max-w-md">
                            Bus tickets are issued via SeatSeller’s
                            authorized booking infrastructure.
                        </p>

                        <div className="mt-6 font-mono text-lg tracking-wider
                            bg-gray-50 inline-block px-5 py-3 rounded-lg
                            border border-gray-300 text-black">
                            SEATSELLER-ID-24899140
                        </div>

                        <p className="mt-3 text-xs text-green-600">
                            ✔ Verified booking partner
                        </p>
                    </div>

                    {/* Trust Promise */}
                    <div className="snap-center min-w-[90%] md:min-w-[60%] lg:min-w-[45%]
                        bg-white border border-gray-200 rounded-2xl px-8 py-10">

                        <p className="text-xs uppercase tracking-widest text-gray-400">
                            Quickets Promise
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold text-black">
                            Transparent & WhatsApp-first
                        </h3>

                        <p className="mt-4 text-sm text-gray-600 max-w-md">
                            You are free to verify agent IDs during chat.
                            No OTP requests. No forced payments.
                        </p>

                        <p className="mt-6 text-sm font-medium text-[#f2cd1c]">
                            Pay only after confirmation.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
