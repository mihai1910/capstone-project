import Navbar from '../components/Navbar/Navbar'
import BookingForm from '../components/BookingForm/BookingForm'
import Footer from '../components/Footer/Footer'

export default function Home(){
    return(
        <main className='bg-white-primary min-h-screen'>
            <Navbar className='border-b-1 border-b-gray-300 shadow-md'/>
            <BookingForm />
            <Footer className='absolute bottom-0'/>
        </main>
    )
}