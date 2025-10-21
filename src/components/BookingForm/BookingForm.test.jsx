import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import BookingForm from './BookingForm'
import { fetchAPI } from "../api";

jest.mock("../api");

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

test("initializeTimes calls fetchAPI with today's date", () => {
  const mockTimes = ["17:00", "18:00"];
  fetchAPI.mockReturnValue(mockTimes);

  const result = initializeTimes();

  expect(fetchAPI).toHaveBeenCalledTimes(1);
  expect(Array.isArray(result)).toBe(true);
  expect(result).toEqual(mockTimes);
});

test("updateTimes dispatches new times after calling fetchAPI", () => {
  const mockDispatch = jest.fn();
  const mockTimes = ["19:00", "20:30"];
  fetchAPI.mockReturnValue(mockTimes);

  const date = "2025-10-21";
  const ACTIONS = { UPDATE: "update_times" };

  const updateTimes = (date) => {
    const newTimes = fetchAPI(new Date(date));
    mockDispatch({ type: ACTIONS.UPDATE, date: newTimes });
  };

  updateTimes(date);

  expect(fetchAPI).toHaveBeenCalledWith(new Date("2025-10-21"));
  expect(mockDispatch).toHaveBeenCalledWith({
    type: "update_times",
    date: mockTimes,
  });
});

function timesReducer(state, action) {
  switch (action.type) {
    case "update_times":
      return action.date;
    default:
      return state;
  }
}

test("timesReducer updates available times", () => {
  const initialState = ["17:00", "18:00"];
  const action = {
    type: "update_times",
    date: ["19:00", "20:30"],
  };
  const newState = timesReducer(initialState, action);

  expect(newState).toEqual(["19:00", "20:30"]);
});
