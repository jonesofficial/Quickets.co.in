import Logo from "../assets/Quickets_Typo.png";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 nav-animate">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO */}
                <img
                    src={Logo}
                    alt="Quickets"
                    className="h-14 md:h-18 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)] contrast-110"
                    style={{ animation: "navEnter 0.5s ease-out forwards" }}
                />

                {/* RIGHT ACTIONS */}
                <div
                    className="flex items-center gap-6"
                    style={{ animation: "navEnter 0.7s ease-out forwards" }}
                >
                    <a
                        href="https://wa.me/918300984737?text=Hi%20Quickets%20I%20want%20to%20book%20a%20ticket"
                        className="hidden md:inline-flex items-center gap-2 border-2 border-green-500 text-green-500 px-4 py-2 rounded-xl font-semibold hover:bg-green-500 hover:text-black transition"
                    >
                        Book on WhatsApp
                    </a>
                </div>

            </div>
        </header>
    );
}
