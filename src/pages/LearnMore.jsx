export default function LearnMore() {
    return (
        <main className="bg-black text-white pt-32 pb-24 px-6">
            <div className="max-w-5xl mx-auto">

                {/* ================= INTRO ================= */}
                <section className="text-center">
                    <h1 className="font-heading text-5xl md:text-7xl leading-tight">
                        About <span className="text-[#F2CD1C]">Quickets</span>
                    </h1>

                    <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto">
                        Quickets is a WhatsApp-first ticket booking platform built to make
                        travel booking simple, fast, and human — especially for people
                        who don’t enjoy using complex apps.
                    </p>
                </section>

                {/* ================= WHY ================= */}
                <section className="mt-24">
                    <h2 className="font-heading text-3xl md:text-4xl mb-6">
                        Why Quickets exists
                    </h2>

                    <p className="text-gray-400 leading-relaxed max-w-3xl">
                        Most ticket booking platforms today are built for power users —
                        full of forms, logins, filters, and distractions.
                        <br /><br />
                        Quickets was created with a simple belief:
                        <span className="text-white font-semibold">
              {" "}booking tickets should feel like talking to a person.
            </span>
                        <br /><br />
                        If you can send a WhatsApp message, you should be able to book
                        a ticket. Nothing more should be required.
                    </p>
                </section>

                {/* ================= HOW IT WORKS ================= */}
                <section className="mt-24">
                    <h2 className="font-heading text-3xl md:text-4xl mb-6">
                        How Quickets works
                    </h2>

                    <p className="text-gray-400 leading-relaxed max-w-3xl">
                        You start by messaging Quickets on WhatsApp.
                        <br /><br />
                        We ask for your travel details, find the best available options,
                        confirm your choice, and help you complete payment securely.
                        <br /><br />
                        Once done, your ticket is booked and sent directly on WhatsApp.
                        No apps to install. No accounts to create.
                    </p>
                </section>

                {/* ================= AVAILABILITY ================= */}
                <section className="mt-24">
                    <h2 className="font-heading text-3xl md:text-4xl mb-6">
                        Service availability
                    </h2>

                    <ul className="text-gray-400 space-y-3 max-w-3xl">
                        <li>
                            🚌 <span className="text-white font-semibold">Bus booking</span> —
                            Available now
                        </li>
                        <li className="opacity-70">
                            🚆 Train booking — In development
                        </li>
                        <li className="opacity-70">
                            ✈️ Flight booking — Coming soon
                        </li>
                    </ul>

                    <p className="mt-6 text-gray-500 text-sm max-w-3xl">
                        We’re intentionally starting with bus bookings to ensure
                        reliability and a great experience before expanding further.
                    </p>
                </section>

                {/* ================= VALUES ================= */}
                <section className="mt-24">
                    <h2 className="font-heading text-3xl md:text-4xl mb-6">
                        What we care about
                    </h2>

                    <ul className="text-gray-400 space-y-4 max-w-3xl">
                        <li>• Simplicity over features</li>
                        <li>• Local languages and accessibility</li>
                        <li>• Honest communication</li>
                        <li>• Building step by step, not rushing</li>
                    </ul>
                </section>

                {/* ================= CONTACT FORM ================= */}
                <section className="mt-32">
                    <h2 className="font-heading text-3xl md:text-4xl mb-10 text-center">
                        Contact Us
                    </h2>

                    <form
                        className="max-w-3xl mx-auto grid grid-cols-1 gap-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="text"
                            placeholder="Your name"
                            className="bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#F2CD1C]"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#F2CD1C]"
                            required
                        />

                        <textarea
                            placeholder="Your message"
                            rows="5"
                            className="bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#F2CD1C]"
                            required
                        />

                        <button
                            type="submit"
                            className="mt-4 bg-[#F2CD1C] text-black font-semibold py-4 rounded-xl hover:scale-[1.02] transition"
                        >
                            Send message
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Or reach us directly on WhatsApp for faster responses.
                    </p>
                </section>

            </div>
        </main>
    );
}
