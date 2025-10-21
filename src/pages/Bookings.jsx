import { useReducer, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import BookingForm from "../components/BookingForm/BookingForm";
import Footer from "../components/Footer/Footer";
import { fetchAPI, submitAPI } from '../components/api'

const ACTIONS = {
    UPDATE: "update_times"
}

function timesReducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE:
      return action.date;
    default:
      return state;
  }
}

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export default function Bookings() {
  const [availableTimes, dispatch] = useReducer(timesReducer,[], initializeTimes);

  const updateTimes = (date) => {
    const newTimes = fetchAPI(new Date(date));
    dispatch({ type: ACTIONS.UPDATE, date: newTimes });
  };

  return (
    <main className="min-h-screen bg-white-primary">
      <Navbar />
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
      <Footer className="absolute bottom-0"/>
    </main>
  );
}
