// import Navbar from "./components/NavBar"
// import HeroBus  from "./components/HeroBus"
// import './App.css'
// import TaglineSection from "@/components/TaglineSection.jsx";
// import BookingSteps from "@/components/BookingSteps.jsx";
// import WhoIsItFor from "@/components/WhoIsItFor.jsx";
// import LanguageSupport from "@/components/LanguageSupport.jsx";
// import BookingAvailability from "@/components/BookingAvailability.jsx";
// import FooterContact from "@/components/FooterContact.jsx";
//
// export default function App() {
//     return (
//         <div className="min-h-screen bg-black">
//             <Navbar/>
//             <HeroBus/>
//             <TaglineSection/>
//             <BookingSteps/>
//             <WhoIsItFor/>
//             <LanguageSupport/>
//             <BookingAvailability/>
//             <FooterContact/>
//         </div>
//     );
// }

import { useEffect, useState } from "react";

import Navbar from "./components/NavBar";
import HeroBus from "./components/HeroBus";
import TaglineSection from "@/components/TaglineSection.jsx";
import BookingSteps from "@/components/BookingSteps.jsx";
import WhoIsItFor from "@/components/WhoIsItFor.jsx";
import LanguageSupport from "@/components/LanguageSupport.jsx";
import BookingAvailability from "@/components/BookingAvailability.jsx";
import FooterContact from "@/components/FooterContact.jsx";
import Loader from "@/components/Loader.jsx";

import "./App.css";

export default function App() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let rafId;

        const markLoaded = () => {
            rafId = requestAnimationFrame(() => {
                setLoaded(true);
            });
        };

        if (document.readyState === "complete") {
            markLoaded();
        } else {
            window.addEventListener("load", markLoaded, { once: true });
        }

        return () => {
            window.removeEventListener("load", markLoaded);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    if (!loaded) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <HeroBus />
            <TaglineSection />
            <BookingSteps />
            <WhoIsItFor />
            <LanguageSupport />
            <BookingAvailability />
            <FooterContact />
        </div>
    );
}
