import { FaRegCommentDots, FaTicketAlt } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

export default function TaglineSection() {
    const badgeRef = useScrollReveal();
    const titleRef = useScrollReveal();
    const textRef = useScrollReveal();
    const chatRef = useScrollReveal();
    const arrowRef = useScrollReveal();
    const ticketRef = useScrollReveal();

    return (
        <section className="relative w-full bg-black py-24 px-6 flex justify-center overflow-hidden">
            <div className="max-w-5xl text-center">

                {/* Badge */}
                <div ref={badgeRef} className="reveal reveal-scale inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#F2CD1C]/40 text-[#F2CD1C] text-xs tracking-wide mb-6">
                    WHATSAPP-FIRST BOOKING
                </div>

                {/* Headline */}
                <h2 ref={titleRef} className="reveal reveal-up font-heading text-white text-5xl md:text-7xl leading-[1.05]">
                    A conversation<br />
                    <span className="text-[#F2CD1C]">is all it takes</span>
                </h2>

                {/* Supporting Line */}
                <p ref={textRef} className="reveal reveal-up delay-1 mt-6 text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
                    You message us on WhatsApp.
                    <br className="hidden md:block" />
                    We handle the search, options, and booking —
                    and send your ticket right back.
                </p>

                {/* Chat → Ticket */}
                <div className="mt-10 flex justify-center items-center gap-6 text-sm text-gray-400">

                    <div ref={chatRef} className="reveal reveal-left delay-2 flex items-center gap-2">
                        <FaRegCommentDots className="text-[#F2CD1C]" />
                        <span>Chat</span>
                    </div>

                    <span ref={arrowRef} className="reveal delay-3 opacity-40 text-lg">
            →
          </span>

                    <div ref={ticketRef} className="reveal reveal-right delay-2 flex items-center gap-2">
                        <FaTicketAlt className="text-[#F2CD1C]" />
                        <span>Ticket</span>
                    </div>

                </div>

            </div>
        </section>
    );
}
