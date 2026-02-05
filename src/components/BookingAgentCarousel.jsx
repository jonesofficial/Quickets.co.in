import { useEffect, useRef } from "react";

export default function BookingAgentCarousel() {
    const trackRef = useRef(null);

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % el.children.length;
            el.children[index].scrollIntoView({
                behavior: "smooth",
                inline: "center"
            });
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-black text-white py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="font-heading text-center text-3xl md:text-5xl mb-4">
                    Verified booking.
                    <span className="text-[#f2cd1c]"> Real agents.</span>
                </h2>

                <p className="text-center text-gray-500 text-sm max-w-xl mx-auto mb-14">
                    Every ticket is booked using authorized systems.
                    You can verify our agent IDs before payment.
                </p>

                {/* Carousel */}
                <div
                    ref={trackRef}
                    className="flex gap-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                >

                    {/* IRCTC */}
                    <div className="snap-center min-w-[85%] md:min-w-[60%] lg:min-w-[45%] px-6 py-10 border-l-4 border-[#f2cd1c]">
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                            Train Booking
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold">
                            IRCTC Authorized Agent
                        </h3>

                        <p className="mt-4 text-sm text-gray-400 max-w-md">
                            Train tickets are booked only through IRCTC-approved
                            PSP agent credentials.
                        </p>

                        <div className="mt-6 font-mono text-lg tracking-wider bg-[#0f0f0f] inline-block px-5 py-3 border border-gray-700">
                            IRCTC-AGENT-ID-XXXX
                        </div>

                        <p className="mt-3 text-xs text-green-600">
                            ✔ Verified & government approved
                        </p>
                    </div>

                    {/* SeatSeller */}
                    <div className="snap-center min-w-[85%] md:min-w-[60%] lg:min-w-[45%] px-6 py-10 border-l-4 border-[#f2cd1c]">
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                            Bus Booking
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold">
                            SeatSeller Partner Agent
                        </h3>

                        <p className="mt-4 text-sm text-gray-400 max-w-md">
                            Bus tickets are issued via SeatSeller’s authorized
                            booking network.
                        </p>

                        <div className="mt-6 font-mono text-lg tracking-wider bg-[#0f0f0f] inline-block px-5 py-3 border border-gray-700">
                            SEATSELLER-ID-XXXX
                        </div>

                        <p className="mt-3 text-xs text-green-600">
                            ✔ Verified booking partner
                        </p>
                    </div>

                    {/* Trust promise */}
                    <div className="snap-center min-w-[85%] md:min-w-[60%] lg:min-w-[45%] px-6 py-10 border-l-4 border-[#f2cd1c]">
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                            Quickets Promise
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold">
                            Transparent & WhatsApp-first
                        </h3>

                        <p className="mt-4 text-sm text-gray-400 max-w-md">
                            You’re free to verify agent IDs during chat.
                            No OTP requests. No forced payments.
                        </p>

                        <p className="mt-6 text-sm text-[#f2cd1c]">
                            Pay only after confirmation.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
