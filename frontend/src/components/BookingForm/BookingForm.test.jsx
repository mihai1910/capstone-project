import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../api";
import * as Yup from "yup";

jest.mock("../api", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

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

describe("BookingForm Component", () => {
  const mockUpdateTimes = jest.fn();

  const setup = () =>
    render(
      <MemoryRouter>
        <BookingForm availableTimes={["17:00", "18:00"]} updateTimes={mockUpdateTimes} />
      </MemoryRouter>
    );

  beforeEach(() => {
    jest.clearAllMocks();
    window.alert = jest.fn();
  });

  test("applies correct HTML5 validation attributes", () => {
    setup();

    const email = screen.getByLabelText(/email/i);
    expect(email).toHaveAttribute("type", "email");
    expect(email).toBeRequired();

    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toBeRequired();

    const guests = screen.getByLabelText(/number of guests/i);
    expect(guests).toHaveAttribute("type", "number");
    expect(guests).toHaveAttribute("min", "1");
    expect(guests).toHaveAttribute("max", "10");
  });

  test("calls updateTimes when date changes", async () => {
    setup();
    const dateInput = screen.getByLabelText(/choose date/i);
    await act(async () => {
      fireEvent.change(dateInput, { target: { value: "2025-10-22" } });
    });
    expect(mockUpdateTimes).toHaveBeenCalledWith("2025-10-22");
  });

  test("renders available times", () => {
    setup();
    const options = screen.getAllByRole("option");
    expect(options.length).toBeGreaterThanOrEqual(3);
    expect(screen.getByText("17:00")).toBeInTheDocument();
    expect(screen.getByText("18:00")).toBeInTheDocument();
  });

  test("submit button is disabled if required fields missing", () => {
    setup();
    const button = screen.getByRole("button", { name: /make your reservation/i });
    expect(button).toBeDisabled();
  });

  test("submits valid data and calls submitAPI, then navigates", async () => {
    submitAPI.mockReturnValue(true);
    setup();

    await act(async () => {
      fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: "Mihai" } });
      fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "mihai@example.com" } });
      fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2025-12-31" } });
      fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "17:00" } });
      fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "2" } });
      fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });
      fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));
    });

    await waitFor(() => {
      expect(submitAPI).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith("Thank you for registering!");
      expect(mockNavigate).toHaveBeenCalledWith("/confirmation");
    });
  });
});

describe("Yup validation schema", () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required").min(3, "At least 3 characters long"),
    lastName: Yup.string(),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    resDate: Yup.date().required("Date is required").min(new Date(), "Date cannot be in the past"),
    resTime: Yup.string().required("Time is required"),
    guests: Yup.number()
      .min(1, "Minimum 1 guest")
      .max(10, "Maximum 10 guests")
      .required("Guest number is required"),
    occasion: Yup.string().required("Occasion is required"),
  });

  test("rejects invalid data", async () => {
    const invalidData = {
      firstName: "Mi",
      email: "invalidemail",
      resDate: "2020-01-01",
      resTime: "",
      guests: 0,
      occasion: "",
    };
    await expect(validationSchema.isValid(invalidData)).resolves.toBe(false);
  });

  test("accepts valid data", async () => {
    const validData = {
      firstName: "Mihai",
      lastName: "Pop",
      email: "mihai@example.com",
      resDate: "2030-01-01",
      resTime: "18:00",
      guests: 2,
      occasion: "Birthday",
    };
    await expect(validationSchema.isValid(validData)).resolves.toBe(true);
  });
});
