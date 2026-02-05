export default function AuthorizationStrip() {
    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <h2 className="font-heading text-center text-3xl md:text-4xl text-white mb-12">
                    Authorized Booking
                    <span className="text-[#f2cd1c]"> Providers</span>
                </h2>

                {/* Strip */}
                <div className="border border-[#f2cd1c]/40 rounded-2xl px-8 py-10">

                    {/* Train */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6 border-b border-[#f2cd1c]/20">
                        <div className="flex items-center gap-4">
                            <span className="text-[#f2cd1c] text-xl">🚆</span>
                            <div>
                                <p className="text-white text-sm uppercase tracking-wider">
                                    Train Booking
                                </p>
                                <p className="text-white text-lg font-semibold">
                                    TravelIQ
                                </p>
                            </div>
                        </div>

                        <div className="text-white/70 text-sm">
                            IRCTC Authorized PSP
                        </div>
                    </div>

                    {/* Bus */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6">
                        <div className="flex items-center gap-4">
                            <span className="text-[#f2cd1c] text-xl">🚌</span>
                            <div>
                                <p className="text-white text-sm uppercase tracking-wider">
                                    Bus Booking
                                </p>
                                <p className="text-white text-lg font-semibold">
                                    SeatSeller
                                </p>
                            </div>
                        </div>

                        <div className="text-white/70 text-sm">
                            Official Bus Aggregator
                        </div>
                    </div>

                </div>

                {/* Footnote */}
                <p className="mt-6 text-center text-white/60 text-sm">
                    You can verify agent credentials on WhatsApp before making any payment.
                </p>

            </div>
        </section>
    );
}
