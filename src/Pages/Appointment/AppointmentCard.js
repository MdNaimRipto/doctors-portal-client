import React from 'react';

const AppointmentCard = ({ appointment, setTreatment }) => {
    const { name, slots, price } = appointment
    return (
        <div
            className="px-5 py-6 bg-white border rounded shadow-sm  text-center font-semibold mb-4">
            <h6 className="text-primary text-xl mb-3 font-bold leading-5">{name}</h6>
            <p className="text-sm text-neutral mb-2">
                {slots.length > 0 ? slots[0] : "Try Again Another Day"}
            </p>
            <p className="text-sm text-neutral mb-2">
                {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available.
            </p>
            <p className="text-sm text-neutral">
                Charge: ${price}
            </p>
            <label
                disabled={slots.length === 0}
                onClick={() => { setTreatment(appointment) }}
                htmlFor="booking-modal"
                className="btn mt-6 px-4 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white font-semibold border-0 rounded shadow-md shadow-[#9f9f9fa6]">
                Book Appointment
            </label>
        </div>
    );
};

export default AppointmentCard;