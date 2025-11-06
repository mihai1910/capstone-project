import React, { useReducer } from "react";
import Navbar from "../components/Navbar/Navbar";
import BookingForm from "../components/BookingForm/BookingForm";
import Footer from "../components/Footer/Footer";
import { fetchAPI } from '../components/api';

type AvailableTimes = string[];

interface UpdateTimesAction {
  type: "update_times";
  date: AvailableTimes;
}

type TimesAction = UpdateTimesAction;
type TimesState = AvailableTimes;

function timesReducer(state: TimesState, action: TimesAction): TimesState {
  switch (action.type) {
    case "update_times":
      return action.date;
    default:
      return state;
  }
}

const initializeTimes = (): TimesState => {
  const today = new Date();
  return fetchAPI(today);
};

export default function Bookings() {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  const updateTimes = (date: string): void => {
    const newTimes: AvailableTimes = fetchAPI(new Date(date));
    dispatch({ type: "update_times", date: newTimes });
  };

  return (
    <main className="min-h-screen bg-white-primary">
      <Navbar />
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
      <Footer className="absolute bottom-0"/>
    </main>
  );
}
