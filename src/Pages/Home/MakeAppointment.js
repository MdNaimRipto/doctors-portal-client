import React from 'react';
import doctor from '../../Assets/images/doctor.png'
import appointment from '../../Assets/images/appointment.png'
import PrimaryButton from '../../Components/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section
            className='mt-24'
            style={{
                background: `url(${appointment})`
            }}>
            <div className="container px-4 mx-auto md:px-4 lg:px-8 pb-8 lg:pb-0">
                <div className="grid gap-8 md:gap-8 lg:gap-4 row-gap-8 lg:grid-cols-2 text-white">
                    <div>
                        <img
                            className="object-cover w-full -mt-32 hidden lg:block"
                            src={doctor}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div>
                            <h2 className=" mb-1 font-sans text-base font-bold tracking-tight text-primary">
                                Appointment
                            </h2>
                            <h2 className=" mb-6 font-sans text-2xl font-bold tracking-tight">
                                Make an appointment Today
                            </h2>
                            <p className="font-semibold leading-7 text-sm">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                            </p>
                            <Link to="/appointment">
                                <PrimaryButton></PrimaryButton>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;