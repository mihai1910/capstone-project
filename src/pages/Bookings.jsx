import Navbar from '../components/Navbar/Navbar'
import BookingForm from '../components/BookingForm/BookingForm'
import Footer from '../components/Footer/Footer'
import { useReducer } from 'react'
import { availableTimes as mockTimes } from '../components/BookingForm/availableTimes'

function updateTimes(availableTimes, action){
    
}

export default function Home(){
    const initializeTimes= () => mockTimes;

    const updateTimes = (state, action) => {
        return mockTimes;
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    return(
        <main className='bg-white-primary min-h-screen'>
            <Navbar className='border-b-1 border-b-gray-300 shadow-md'/>
            <BookingForm />
            <Footer className='absolute bottom-0'/>
        </main>
    )
}