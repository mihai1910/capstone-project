import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api";

export default function BookingForm({ availableTimes, updateTimes }) {
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setResDate(newDate);
    updateTimes(newDate)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      date: resDate,
      time: resTime,
      guests,
      occasion
    };

    const success = submitAPI(formData);

    if (success) {
      alert('thank you for registering')
      navigate('/thank-you');
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 lg:justify-center">
      <label htmlFor="res-date" className="font-markazi text-[30px]/1 mt-12 mx-2">Choose Date</label>
      <input 
        type="date" 
        id="res-date" 
        className="font-karla text-black border-1 p-2 mx-2 lg:w-100 bg-white rounded-2xl"
        value={resDate}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time" className="font-markazi text-[30px]/1 mx-2 z-2">Choose Time</label>
      <select 
        id="res-time" 
        className="font-karla text-black border-1 p-2 mx-2 bg-white rounded-2xl z-2"
        value={resTime}
        onChange={(e) => setResTime(e.target.value)}
      >
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests" className="font-markazi text-[30px]/1 mx-2">Number of guests</label>
      <input 
        type="number" 
        placeholder="1" 
        id="guests" 
        min="1" 
        max="10" 
        onChange={(e) => setGuests(e.target.value)} 
        value={guests}
        className="font-karla text-black border-1 p-2 mx-2 bg-white rounded-2xl" 
      />

      <label htmlFor="occasion" className="font-markazi text-[30px]/1 mx-2">Occasion</label>
      <select 
        id="occasion" 
        className="font-karla text-black border-1 p-2 mx-2 bg-white rounded-2xl" 
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input 
        type='submit' 
        value='Make your reservation' 
        className="navlinks bg-yellow-primary w-auto mb-full justify-self-center cursor-pointer" 
      />
    </form>
  );
}
