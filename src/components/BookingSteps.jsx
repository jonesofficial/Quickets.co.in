import { useEffect, useRef } from "react";

import step1 from "../assets/steps/step-01-whatsapp.png";
import step2 from "../assets/steps/step-02-details.png";
import step3 from "../assets/steps/step-03-choose.png";
import step4 from "../assets/steps/step-04-pay.png";
import step5 from "../assets/steps/step-05-ticket.png";

export default function BookingSteps() {
    const cardRefs = useRef([]);

    const steps = [
        { step: "01", title: "Start a chat", desc: "Message Quickets on WhatsApp to begin your booking.", image: step1 },
        { step: "02", title: "Share travel details", desc: "Tell us your route, date, time, and number of passengers.", image: step2 },
        { step: "03", title: "Choose & confirm", desc: "We show the best available options. You choose one.", image: step3 },
        { step: "04", title: "Pay", desc: "Complete payment securely through UPI, Netbanking or Cards.", image: step4 },
        { step: "05", title: "Get Ticket", desc: "Once we receive the payment, your ticket will be booked.", image: step5 }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        cardRefs.current.forEach(el => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const directions = ["step-left", "step-up", "step-right", "step-left", "step-right"];

    return (
        <section className="bg-white text-black py-20 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="font-heading text-[48px] md:text-[72px] text-center mb-16">
                    Book in <span className="text-[#f2cd1c]">5</span> simple steps
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                    {steps.map((item, index) => (
                        <div
                            key={item.step}
                            ref={el => (cardRefs.current[index] = el)}
                            className={`step ${directions[index]} delay-${index} rounded-2xl p-6 bg-black text-white transition-transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(242,205,28,0.35)] max-w-[340px] mx-auto md:max-w-none`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[140px] object-contain mb-4"
                            />

                            <span className="text-[#F2CD1C] font-bold text-3xl">
                {item.step}
              </span>

                            <h3 className="mt-3 font-semibold text-lg">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm opacity-70 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
