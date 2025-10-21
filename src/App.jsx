import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Bookings from "./pages/Bookings"
import ConfirmedBooking from "./pages/ConfirmedBooking"

export default function App() {
    return(
        <main>
            <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/bookings' element={<Bookings />}></Route>
                <Route path='/confirmation' element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    )
}