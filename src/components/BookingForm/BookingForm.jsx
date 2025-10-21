import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fetchAPI, submitAPI } from "../api";

export default function BookingForm({ availableTimes, updateTimes }) {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First name is required")
      .min(3, "At least 3 characters long"),
    lastName: Yup.string(),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    resDate: Yup.date()
      .required("Date is required")
      .min(new Date(), "Date cannot be in the past"),
    resTime: Yup.string().required("Time is required"),
    guests: Yup.number()
      .min(1, "Minimum 1 guest")
      .max(10, "Maximum 10 guests")
      .required("Guest number is required"),
    occasion: Yup.string().required("Occasion is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    resDate: "",
    resTime: "",
    guests: 1,
    occasion: "Birthday",
  };

  const handleSubmit = (values, { resetForm }) => {
    const formData = {
      name: values.firstName + " " + values.lastName,
      email: values.email,
      date: values.resDate,
      time: values.resTime,
      guests: values.guests,
      occasion: values.occasion,
    };

    const success = submitAPI(formData);

    if (success) {
      alert("Thank you for registering!");
      resetForm();
      navigate("/confirmation");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, setFieldValue }) => (
        <Form
          className="grid gap-5 lg:justify-center"
          role="form"
          aria-label="Reservation booking form"
        >
          {/* --- Name Fields --- */}
          <div className="flex items-center" role="group" aria-labelledby="name-section">
            <div className="flex flex-col gap-5">
              <label
                id="name-section"
                htmlFor="firstName"
                className="font-markazi text-[30px]/1 mt-12 mx-2"
              >
                First name
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                aria-label="First name"
                aria-required="true"
                aria-invalid={errors.firstName && touched.firstName ? "true" : "false"}
                aria-describedby="firstName-error"
                className="font-karla text-black border-1 p-2 mx-2 lg:w-47 bg-white rounded-2xl"
              />
              <ErrorMessage
                name="firstName"
                render={(msg) => (
                  <div id="firstName-error" className="errormsg" aria-live="polite">
                    {msg}
                  </div>
                )}
              />
            </div>

            <div className="flex flex-col gap-5">
              <label htmlFor="lastName" className="font-markazi text-[30px]/1 mt-12 mx-2">
                Last name <sup className="text-md">(optional)</sup>
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                aria-label="Last name"
                className="font-karla text-black border-1 p-2 mx-2 lg:w-47 bg-white rounded-2xl"
              />
            </div>
          </div>

          {/* --- Email --- */}
          <label htmlFor="email" className="font-markazi text-[30px]/1 mx-2">
            Email
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            aria-label="Email address"
            aria-required="true"
            aria-invalid={errors.email && touched.email ? "true" : "false"}
            aria-describedby="email-error"
            className="font-karla text-black border-1 p-2 mx-2 bg-white rounded-2xl"
          />
          <ErrorMessage
            name="email"
            render={(msg) => (
              <div id="email-error" className="errormsg" aria-live="polite">
                {msg}
              </div>
            )}
          />

          {/* --- Date --- */}
          <label htmlFor="resDate" className="font-markazi text-[30px]/1 mt-12 mx-2">
            Choose Date
          </label>
          <Field
            type="date"
            id="resDate"
            name="resDate"
            aria-label="Reservation date"
            aria-required="true"
            aria-invalid={errors.resDate && touched.resDate ? "true" : "false"}
            aria-describedby="resDate-error"
            className="font-karla text-black border-1 p-2 mx-2 bg-white rounded-2xl"
            onChange={(e) => {
              const newDate = e.target.value;
              setFieldValue("resDate", newDate);
              updateTimes(newDate);
            }}
          />
          <ErrorMessage
            name="resDate"
            render={(msg) => (
              <div id="resDate-error" className="errormsg" aria-live="polite">
                {msg}
              </div>
            )}
          />

          {/* --- Time --- */}
          <label htmlFor="resTime" className="font-markazi text-[30px]/1 mx-2 z-2">
            Choose Time
          </label>
          <Field
            as="select"
            id="resTime"
            name="resTime"
            aria-label="Reservation time"
            aria-required="true"
            aria-invalid={errors.resTime && touched.resTime ? "true" : "false"}
            aria-describedby="resTime-error"
            className="font-karla text-black border-1 p-2 mx-2 bg-white rounded-2xl z-2"
          >
            <option value="">Select a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="resTime"
            render={(msg) => (
              <div id="resTime-error" className="errormsg" aria-live="polite">
                {msg}
              </div>
            )}
          />

          {/* --- Guests --- */}
          <label htmlFor="guests" className="font-markazi text-[30px]/1 mx-2">
            Number of guests
          </label>
          <Field
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            aria-label="Number of guests"
            aria-required="true"
            aria-invalid={errors.guests && touched.guests ? "true" : "false"}
            aria-describedby="guests-error"
            className="font-karla text-black border-1 p-2 mx-2 bg-white rounded-2xl"
          />
          <ErrorMessage
            name="guests"
            render={(msg) => (
              <div id="guests-error" className="errormsg" aria-live="polite">
                {msg}
              </div>
            )}
          />

          {/* --- Occasion --- */}
          <label htmlFor="occasion" className="font-markazi text-[30px]/1 mx-2">
            Occasion
          </label>
          <Field
            as="select"
            id="occasion"
            name="occasion"
            aria-label="Occasion"
            aria-required="true"
            aria-invalid={errors.occasion && touched.occasion ? "true" : "false"}
            aria-describedby="occasion-error"
            className="font-karla text-black border-1 p-2 mx-2 bg-white rounded-2xl"
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </Field>
          <ErrorMessage
            name="occasion"
            render={(msg) => (
              <div id="occasion-error" className="errormsg" aria-live="polite">
                {msg}
              </div>
            )}
          />

          {/* --- Submit --- */}
          <button
            type="submit"
            aria-label="Submit reservation form"
            aria-disabled={
              !values.resDate ||
              !values.resTime ||
              !values.firstName ||
              !values.email ||
              new Date(values.resDate) < new Date()
            }
            disabled={
              !values.resDate ||
              !values.resTime ||
              !values.firstName ||
              !values.email ||
              new Date(values.resDate) < new Date()
            }
            className="navlinks bg-yellow-primary w-auto mb-full justify-self-center cursor-pointer disabled:opacity-50"
          >
            Make your reservation
          </button>
        </Form>
      )}
    </Formik>
  );
}
