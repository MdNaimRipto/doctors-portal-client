import React from 'react';
import banner from "../../Assets/images/chair.png"
import appointmentBg from "../../Assets/images/bg.png"
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header style={{ background: `url(${appointmentBg})` }}>
            <div className="px-4 py-16 mx-auto w-full md:w-[85%] md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className='block md:block lg:hidden'>
                        <img
                            className="object-cover w-full h-56 md:h-72 rounded shadow-lg"
                            src={banner}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <p className='text-lg font-semibold text-neutral'>
                            Selected Date {format(selectedDate, "PP")}
                        </p>
                    </div>
                    <div className='hidden md:hidden lg:block'>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src={banner}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;