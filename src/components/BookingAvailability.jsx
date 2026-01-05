import useScrollReveal from "../hooks/useScrollReveal";

export default function BookingAvailability() {
    const titleRef = useScrollReveal();
    const textRef = useScrollReveal();
    const lineRef = useScrollReveal();

    const busRef = useScrollReveal();
    const trainRef = useScrollReveal();
    const flightRef = useScrollReveal();

    return (
        <section className="bg-black text-white py-20 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Heading */}
                <h2 ref={titleRef} className="reveal reveal-up font-heading text-3xl md:text-5xl text-center leading-tight">
                    What you can book with
                    <span className="text-[#f2cd1c]"> Quickets?</span>
                </h2>

                <p ref={textRef} className="reveal reveal-up delay-1 mt-4 text-center text-gray-600 max-w-xl mx-auto text-sm">
                    We’re building step by step — starting with bus bookings,
                    and expanding carefully.
                </p>

                {/* Timeline */}
                <div className="mt-14 flex justify-center">
                    <div className="relative">

                        {/* Vertical Line */}
                        <div ref={lineRef} className="timeline-line absolute left-[7px] top-0 h-full w-px bg-gray-300"></div>

                        {/* BUS — LIVE */}
                        <div ref={busRef} className="timeline-item timeline-left relative flex items-start gap-4 mb-10">
                            <div className="z-10 w-4 h-4 rounded-full bg-[#f2cd1c] shadow-[0_0_12px_rgba(242,205,28,0.7)]"></div>
                            <div>
                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                    🚌 Bus Booking
                                    <span className="text-xs font-semibold text-green-600">● Live</span>
                                </h3>
                                <p className="mt-1 text-sm text-gray-600 max-w-md">
                                    Book bus tickets instantly through WhatsApp.
                                </p>
                            </div>
                        </div>

                        {/* TRAIN — IN PROGRESS */}
                        <div ref={trainRef} className="timeline-item timeline-up relative flex items-start gap-4 mb-10">
                            <div className="z-10 w-4 h-4 rounded-full border border-gray-400 bg-white"></div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-500">
                                    🚆 Train Booking
                                </h3>
                                <p className="mt-1 text-sm text-gray-500 max-w-md">
                                    Currently in development.
                                </p>
                                <span className="text-xs text-[#f2cd1c]">In progress</span>
                            </div>
                        </div>

                        {/* FLIGHT — COMING SOON */}
                        <div ref={flightRef} className="timeline-item timeline-right relative flex items-start gap-4">
                            <div className="z-10 w-4 h-4 rounded-full border border-gray-400 bg-white"></div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-400">
                                    ✈️ Flight Booking
                                </h3>
                                <p className="mt-1 text-sm text-gray-500 max-w-md">
                                    Will be introduced once the core experience is perfected.
                                </p>
                                <span className="text-xs text-[#f2cd1c]">Coming soon</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
