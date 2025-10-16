import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Bookings from "./pages/Bookings"

export default function App() {
    return(
        <main>
            <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/bookings' element={<Bookings />}></Route>
            </Routes>
        </main>
    )
}