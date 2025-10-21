import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function ConfirmedBooking(){
    return(
        <>
        <Navbar />
    <section className="flex flex-col items-center align-center mt-20 lg:mt-40 text-shadow-md">
        <h1>Your booking has been registered!</h1>
        <p className="text-black">We're going to send you an email with the booking details and confirmation as soon as possible.</p>
    </section>
        <Footer className="absolute bottom-0"/>
    </>
    )
}