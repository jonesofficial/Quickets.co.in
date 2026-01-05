import Navbar from "./components/NavBar"
import HeroBus  from "./components/HeroBus"
import './App.css'
import TaglineSection from "@/components/TaglineSection.jsx";
import BookingSteps from "@/components/BookingSteps.jsx";
import WhoIsItFor from "@/components/WhoIsItFor.jsx";
import LanguageSupport from "@/components/LanguageSupport.jsx";
import BookingAvailability from "@/components/BookingAvailability.jsx";
import FooterContact from "@/components/FooterContact.jsx";

export default function App() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar/>
            <HeroBus/>
            <TaglineSection/>
            <BookingSteps/>
            <WhoIsItFor/>
            <LanguageSupport/>
            <BookingAvailability/>
            <FooterContact/>
        </div>
    );
}
