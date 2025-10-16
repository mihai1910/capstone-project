import { useState } from "react";
import { Link } from "react-router-dom";
import { availableTimes } from "./availableTimes";

export default function BookingForm() {
    const [resDate, setResDate] = useState('');
    const [resTime, setResTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    
    const formTime = () => {
        return(
        availableTimes.map(availableTime => (
            <option key={availableTime} value={availableTime}>{availableTime}</option>
        ))
    )
    }

    return(
        <form className="grid gap-5 lg:justify-center">
            <label htmlFor="res-date" className="font-markazi text-[30px]/1 mt-8 mx-2">Choose Date</label>
            <input type="date" id='res-date' value={resDate} name='res-date' required
            className="font-karla text-black border-1 p-2 mx-2 lg:w-100 bg-white rounded-2xl" 
            onChange={e => setResDate(e.target.value)} />

            <label htmlFor="res-time" className="font-markazi text-[30px]/1 mx-2">Choose Time</label>
            <select id='res-time' value={resTime} name='res-time' required
            className="font-karla text-black border-1 p-2 mx-2 bg-white rounded-2xl" 
             onChange={e => setResTime(e.target.value)} >
                {formTime()}
            </select>

            <label htmlFor="guests" className="font-markazi text-[30px]/1 mx-2">Number of guests</label>
            <input type="number" id='guests' value={guests} name='guests' placeholder="1" min="1" max="10" 
            className="font-karla text-black border-1 p-2 mx-2 bg-white rounded-2xl"
            onChange={e => setGuests(e.target.value)} />

            <label htmlFor="occasion" className="font-markazi text-[30px]/1 mx-2">Occasion</label>
            <select id='occasion' value={occasion} name='occasion' 
            className="font-karla text-black border-1 p-2 mx-2 bg-white rounded-2xl" 
            onChange={e => setOccasion(e.target.value)} >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <Link to='/thank-you' className="justify-self-center"><input type='submit' value='Make your reservation' 
            className="navlinks bg-yellow-primary w-auto  mb-full" />
            </Link>
        </form>
    )
}