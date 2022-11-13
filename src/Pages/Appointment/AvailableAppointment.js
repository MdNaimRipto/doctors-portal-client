import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointments, setAppointments] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <section className='my-12'>
            <p className='text-primary text-center font-semibold text-xl'>
                You have Selected {format(selectedDate, "PP")}
            </p>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
                    {
                        appointments.map(appointment =>
                            <AppointmentCard
                                key={appointment._id}
                                appointment={appointment}
                                setTreatment={setTreatment}
                            />)
                    }
                </div>
                {
                    treatment &&
                    <BookingModal
                        selectedDate={selectedDate}
                        treatment={treatment}
                        setTreatment={setTreatment}
                    />
                }
            </div>
        </section>
    );
};

export default AvailableAppointment;