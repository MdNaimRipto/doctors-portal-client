import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ selectedDate, treatment, setTreatment }) => {
    const { name, slots } = treatment

    const handleBooking = (event) => {
        event.preventDefault()
        const form = event.target;
        const date = form.date.value;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentName: treatment.name,
            appointmentDate: date,
            bookingDate: new Date(),
            userName: name,
            userEmail: email,
            phone: phone,
            slot: slot
        }
        console.log(booking)
        setTreatment(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input name="date" type="text" value={format(selectedDate, "PP")}
                            className="input w-full mx-auto my-4 bg-gray-200" disabled />
                        <select name="slot" className="select w-full mb-4 bg-gray-200">
                            <option disabled defaultValue>Select Appointment Time</option>
                            {
                                slots.map((slot, index) =>
                                    <option
                                        key={index}
                                        value={slot}
                                    >{slot}</option>)
                            }
                        </select>

                        <input name="name" type="text" placeholder="Full Name"
                            className="input w-full mx-auto mb-4 bg-gray-200" />
                        <input name="email" type="email" placeholder="Email Address"
                            className="input w-full mx-auto mb-4 bg-gray-200" />
                        <input name="phone" type="tel" placeholder="Phone Number"
                            className="input w-full mx-auto mb-4 bg-gray-200" />
                        <button
                            type='submit'
                            className='btn btn-neutral text-white font-semibold w-full'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;