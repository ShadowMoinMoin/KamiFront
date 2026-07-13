import Experience from "../../components/landing/Experience";
import Gallery from "../../components/landing/Gallery";
import Hero from "../../components/landing/Hero";
import Location from "../../components/landing/Location";
import ReservationBanner from "../../components/landing/ReservationBanner";
import SignatureDishes from "../../components/landing/SignatureDishes";
import Story from "../../components/landing/Story";
import Testimonials from "../../components/landing/Testimonials";

export default function LandingPage() {
    return (
        <>
            <main>
                <Hero />
                <Experience/>
                <SignatureDishes/>
                <Story/>
                <Gallery/>
                <ReservationBanner/>
                <Testimonials/>
                <Location/>
            </main>
        </>
    )
}