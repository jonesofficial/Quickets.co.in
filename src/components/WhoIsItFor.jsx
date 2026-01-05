import useScrollReveal from "../hooks/useScrollReveal";

export default function WhoIsItFor() {
    const titleRef = useScrollReveal();
    const textRef = useScrollReveal();

    const cardRefs = [
        useScrollReveal(),
        useScrollReveal(),
        useScrollReveal(),
        useScrollReveal()
    ];

    const variants = ["reveal-left", "reveal-up", "reveal-up", "reveal-right"];

    return (
        <section className="bg-black text-white py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">

                {/* Heading */}
                <h2 ref={titleRef} className="reveal reveal-up font-heading text-4xl md:text-6xl leading-tight">
                    Not everyone likes apps.<br />
                    <span className="text-[#F2CD1C]">That’s why Quickets exists.</span>
                </h2>

                {/* Subtext */}
                <p ref={textRef} className="reveal reveal-up delay-1 mt-6 text-gray-400 max-w-2xl mx-auto">
                    We built Quickets for people who want tickets booked —
                    not screens to learn.
                </p>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">

                    {[
                        { title: "Parents & Elders", desc: "No apps. Just WhatsApp." },
                        { title: "Frequent Travelers", desc: "Fast bookings. No logins." },
                        { title: "Small-town Users", desc: "Works on any phone." },
                        { title: "Busy Professionals", desc: "Text once. Done." }
                    ].map((item, index) => (
                        <div
                            key={item.title}
                            ref={cardRefs[index]}
                            className={`reveal ${variants[index]} delay-${index + 1} bg-[#111] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(242,205,28,0.25)] transition`}
                        >
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
