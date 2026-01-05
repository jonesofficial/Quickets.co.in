import { FaWhatsapp } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

export default function LanguageSupport() {
    const leftRef = useScrollReveal();
    const chatRef = useScrollReveal();

    const pillRefs = [
        useScrollReveal(),
        useScrollReveal(),
        useScrollReveal(),
        useScrollReveal()
    ];

    const bubbleRefs = [
        useScrollReveal(),
        useScrollReveal(),
        useScrollReveal(),
        useScrollReveal(),
        useScrollReveal(),
        useScrollReveal()
    ];

    return (
        <section className="bg-white text-black py-24 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div ref={leftRef} className="reveal reveal-left">
                    <h2 className="font-heading text-4xl md:text-6xl leading-tight">
                        English not required.<br />
                        <span className="text-[#F2CD1C]">Tamil supported.</span>
                    </h2>

                    <p className="mt-6 text-gray-400 max-w-md">
                        Talk to Quickets the way you talk to people around you.
                        Ticket booking should feel natural — not technical.
                    </p>

                    {/* Language Pills */}
                    <div className="mt-10 flex flex-wrap gap-3">
                        {[
                            "தமிழ் (Tamil)",
                            "हिंदी (Hindi)",
                            "తెలుగు (Telugu)",
                            "More Languages Coming Soon."
                        ].map((text, index) => (
                            <span
                                key={text}
                                ref={pillRefs[index]}
                                className={`reveal reveal-up delay-${index + 1} px-5 py-2 rounded-full ${
                                    index === 0
                                        ? "bg-[#111] border border-[#F2CD1C] text-[#F2CD1C] font-semibold"
                                        : index === 3
                                            ? "text-[#111] font-heading text-2xl"
                                            : "bg-[#111] border border-gray-600 text-gray-400"
                                }`}
                            >
                {text}
              </span>
                        ))}
                    </div>
                </div>

                {/* RIGHT CHAT MOCK */}
                <div ref={chatRef} className="reveal reveal-right bg-[#111] text-white rounded-2xl p-6 shadow-[0_0_40px_rgba(37,211,102,0.15)]">
                    <div className="flex items-center gap-2 mb-6 text-green-500">
                        <FaWhatsapp size={20} />
                        <span className="font-semibold">Quickets</span>
                    </div>

                    <div className="space-y-4 text-sm">
                        {[
                            { text: "வணக்கம் 👋 எனக்கு ஒரு பஸ் டிக்கெட் வேண்டும்", side: "left" },
                            { text: "சரி 👍 எங்கிருந்து – எங்கு?", side: "right" },
                            { text: "சென்னை → கோயம்புத்தூர்", side: "left" },
                            { text: "இன்று மாலை பஸ்கள் கிடைக்கின்றன. உறுதி செய்யலாமா?", side: "right" },
                            { text: "ஆம் 👍", side: "left" },
                            { text: "🎟 உங்கள் டிக்கெட் பதிவு செய்யப்பட்டது", side: "right" }
                        ].map((msg, index) => (
                            <div
                                key={index}
                                ref={bubbleRefs[index]}
                                className={`reveal reveal-up delay-${index + 1} ${
                                    msg.side === "right"
                                        ? "bg-[#25D366] text-black ml-auto"
                                        : "bg-[#1f1f1f]"
                                } p-3 rounded-xl w-fit max-w-[80%]`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
