import Logo from "../assets/Quickets_Logo.png";
import {
    FaInstagram,
    FaFacebookF,
    FaEnvelope,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

export default function FooterContact() {
    const year = new Date().getFullYear();

    const brandRef = useScrollReveal();
    const serviceRef = useScrollReveal();
    const contactRef = useScrollReveal();
    const ctaRef = useScrollReveal();
    const metaRef = useScrollReveal();

    return (
        <footer className="bg-black text-white">

            {/* MAIN GRID */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">

                    {/* BRAND */}
                    <div ref={brandRef} className="reveal reveal-up flex flex-col items-center">
                        <img src={Logo} alt="Quickets logo" className="w-14 mb-4" />
                        <h3 className="font-heading text-3xl text-[#f2cd1c]">Quickets</h3>
                        <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
                            A WhatsApp-first ticket booking platform built for
                            speed, simplicity, and real people across India.
                        </p>
                        <p className="mt-4 text-xs text-gray-500">
                            No apps. No forms.<br />Just a conversation.
                        </p>
                    </div>

                    {/* SERVICES */}
                    <div ref={serviceRef} className="reveal reveal-up delay-1 flex flex-col items-center">
                        <h4 className="text-lg font-semibold mb-5">Booking Services</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-center justify-center gap-2">
                                🚌 Bus Booking
                                <span className="text-green-500 text-xs font-semibold">● Live</span>
                            </li>
                            <li className="opacity-60">🚆 Train Booking (Coming soon)</li>
                            <li className="opacity-60">✈️ Flight Booking (Coming soon)</li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div ref={contactRef} className="reveal reveal-up delay-2 flex flex-col items-center">
                        <h4 className="text-lg font-semibold mb-5">Stay Connected</h4>

                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>
                                <a href="https://wa.me/918300984737" className="flex items-center justify-center gap-3 hover:text-white transition">
                                    <FaWhatsapp className="text-green-500" /> WhatsApp Support
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/quickets" className="flex items-center justify-center gap-3 hover:text-white transition">
                                    <FaInstagram /> instagram.com/quickets
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=61585380280168" className="flex items-center justify-center gap-3 hover:text-white transition">
                                    <FaFacebookF /> facebook.com/quickets
                                </a>
                            </li>
                            <li>
                                <a href="mailto:quicketsofficial@gmail.com" className="flex items-center justify-center gap-3 hover:text-white transition">
                                    <FaEnvelope /> quicketsofficial@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+918300984737" className="flex items-center justify-center gap-3 hover:text-white transition">
                                    <FaPhoneAlt /> +91 8300984737
                                </a>
                            </li>
                            <li className="flex items-center justify-center gap-3 text-gray-500">
                                <FaMapMarkerAlt /> Coimbatore, India
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* CTA STRIP */}
            <div ref={ctaRef} className="reveal reveal-up bg-[#0f2d1c] px-6 py-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-lg font-semibold text-white">Ready to book your ticket?</p>
                        <p className="text-sm text-gray-300">We’re just a WhatsApp message away.</p>
                    </div>
                    <a
                        href="https://wa.me/918300984737?text=Hi%20Quickets%20I%20want%20to%20book%20a%20ticket"
                        className="inline-flex items-center gap-3 bg-[#25D366] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                    >
                        <FaWhatsapp /> Book on WhatsApp
                    </a>
                </div>
            </div>

            {/* FOOTER META */}
            <div ref={metaRef} className="reveal bg-black px-6 py-5 border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                    <span>© {year} Quickets. All rights reserved.</span>
                    <span>
            Booking powered by <strong className="text-gray-300">SeatSeller</strong>
          </span>
                </div>
            </div>

        </footer>
    );
}
