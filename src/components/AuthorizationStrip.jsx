export default function AuthorizationStrip() {
    return (
        <section className="bg-black py-10 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Title */}
                <h3 className="text-center text-white text-xl font-heading mb-6">
                    Authorized Booking
                    <span className="text-[#f2cd1c]"> Providers</span>
                </h3>

                {/* Strip */}
                <div className="border border-[#f2cd1c]/30 rounded-xl px-6 py-5">

                    {/* Train */}
                    <div className="flex items-center justify-between py-3 border-b border-[#f2cd1c]/20">
                        <div className="flex items-center gap-3">
                            <span className="text-[#f2cd1c] text-sm">🚆</span>
                            <div>
                                <p className="text-white text-xs uppercase tracking-wider">
                                    Train
                                </p>

                                <div className="flex items-center gap-2">
                                    <p className="text-white text-sm font-medium">
                                        TravelIQ
                                    </p>

                                    {/* Green Stamp */}
                                    <span className="text-[10px] font-semibold
                                        px-2 py-[2px] rounded-full
                                        bg-green-600/15 text-green-400
                                        border border-green-500/40">
                                        ✔ Authorized
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-white/60 text-xs">
                            IRCTC Authorized PSP
                        </p>
                    </div>

                    {/* Bus */}
                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                            <span className="text-[#f2cd1c] text-sm">🚌</span>
                            <div>
                                <p className="text-white text-xs uppercase tracking-wider">
                                    Bus
                                </p>

                                <div className="flex items-center gap-2">
                                    <p className="text-white text-sm font-medium">
                                        SeatSeller
                                    </p>

                                    {/* Green Stamp */}
                                    <span className="text-[10px] font-semibold
                                        px-2 py-[2px] rounded-full
                                        bg-green-600/15 text-green-400
                                        border border-green-500/40">
                                        ✔ Authorized
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-white/60 text-xs">
                            Official Bus Aggregator
                        </p>
                    </div>

                </div>

                {/* Footnote */}
                <p className="mt-4 text-center text-white/50 text-xs">
                    Verify agent credentials on WhatsApp before payment.
                </p>

            </div>
        </section>
    );
}
