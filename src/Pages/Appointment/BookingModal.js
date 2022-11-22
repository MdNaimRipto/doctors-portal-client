import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../ContextProvider/AuthProvider';

const BookingModal = ({ selectedDate, treatment, setTreatment, refetch }) => {
    const { user } = useContext(AuthContext)
    const { name, slots, price } = treatment

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
            treatmentCharge: price,
            appointmentDate: date,
            bookingDate: new Date(),
            userName: name,
            userEmail: email,
            phone: phone,
            slot: slot
        }
        fetch("https://doctors-portal-server-three-puce.vercel.app/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data)
                    setTreatment(null)
                    toast('Booking Successful!',
                        {
                            icon: '👏',
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        }
                    );
                    refetch()
                }
                else {
                    setTreatment(null)
                    toast.error(data.message,
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        }
                    );
                }
            })
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

                        <input name="name" type="text" defaultValue={user?.displayName} placeholder="Full Name"
                            className="input w-full mx-auto mb-4 bg-gray-200" disabled />
                        <input name="email" type="email" defaultValue={user?.email} placeholder="Email Address"
                            className="input w-full mx-auto mb-4 bg-gray-200" disabled />
                        {
                            user?.uid &&
                            <input name="price" defaultValue={`Charge: $${price}`}
                                className="input w-full mx-auto mb-4 bg-gray-200" disabled />
                        }
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