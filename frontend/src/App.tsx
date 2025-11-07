import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Bookings from "./pages/Bookings"
import ConfirmedBooking from "./pages/ConfirmedBooking"
import React, { JSX } from "react"

export default function App():JSX.Element {
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