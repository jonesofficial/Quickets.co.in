export default function Loader() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
            <div className="flex flex-col items-center gap-6">

                {/* LOGO / BRAND */}
                <div className="text-yellow-400 font-heading tracking-widest text-xl">
                    QUICKETS
                </div>

                {/* ANIMATED BARS */}
                <div className="flex gap-2">
                    <span className="loader-bar delay-0" />
                    <span className="loader-bar delay-1" />
                    <span className="loader-bar delay-2" />
                </div>

                {/* TAGLINE */}
                <p className="text-white/60 text-sm tracking-wide">
                    Booking tickets…
                </p>
            </div>
        </div>
    );
}
