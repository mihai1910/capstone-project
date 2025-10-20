import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import BookingForm from './BookingForm'

test('renders BookingForm labels and inputs', () => {
    const availableTimes = ['17:00', '18:00']
    const dispatch = () => {}
    render(
        <MemoryRouter>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </MemoryRouter>
    )
    const dateLabel = screen.getByText(/Choose Date/i)
    expect(dateLabel).toBeInTheDocument()
})