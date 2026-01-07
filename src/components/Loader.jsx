import logoIcon from "../assets/Quickets_Typo.png";

export default function Loader() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
            <div className="flex flex-col items-center gap-8">

                {/* LOGO ICON */}
                <img
                    src={logoIcon}
                    alt="Quickets"
                    className="w-20 md:w-24 object-contain animate-pulse"
                    draggable={false}
                />

                {/* ANIMATED BARS */}
                <div className="flex gap-2" aria-label="Loading">
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
