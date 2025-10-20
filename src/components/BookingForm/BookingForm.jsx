import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 

export default function BookingForm( { availableTimes, dispatch } ) {
    const [resDate, setResDate] = useState('');
    const [resTime, setResTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const navigate = useNavigate();

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setResDate(newDate);

        dispatch({ type: "update_times", date: newDate })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!resDate || !resTime || !occasion){
            alert("Please fill all fields");
        return;
        }
        navigate("/thank-you")
    }
    
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
            <input type="date" id='res-date' value={resDate} name='res-date' required data-test-id="currentDate"
            className="font-karla text-black border-1 p-2 mx-2 lg:w-100 bg-white rounded-2xl" 
            onChange={e => setResDate(e.target.value)} />

            <label htmlFor="res-time" className="font-markazi text-[30px]/1 mx-2">Choose Time</label>
            <select id='res-time' value={resTime} name='res-time' required data-test-id="current-time"
            className="font-karla text-black border-1 p-2 mx-2 bg-white rounded-2xl" 
             onChange={e => setResTime(e.target.value)} >
                {formTime()}
            </select>

            <label htmlFor="guests" className="font-markazi text-[30px]/1 mx-2">Number of guests</label>
            <input type="number" id='guests' value={guests} name='guests' data-test-id="currentGuests"
            placeholder="1" min="1" max="10" 
            className="font-karla text-black border-1 p-2 mx-2 bg-white rounded-2xl"
            onChange={e => setGuests(e.target.value)} />

            <label htmlFor="occasion" className="font-markazi text-[30px]/1 mx-2">Occasion</label>
            <select id='occasion' value={occasion} name='occasion' data-test-id="currentOccasion"
            className="font-karla text-black border-1 p-2 mx-2 bg-white rounded-2xl" 
            onChange={e => setOccasion(e.target.value)} >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <button type='submit' value='Make your reservation' onSubmit={handleSubmit} data-test-id="submitinfo"
            className="navlinks justify-self-center bg-yellow-primary w-auto  mb-full" />
        </form>
    )
}