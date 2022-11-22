import React from 'react';
import clock from "../../Assets/icons/clock.svg"
import marker from "../../Assets/icons/marker.svg"
import phone from "../../Assets/icons/phone.svg"

const Info = () => {
    return (
        <div>
            <div className="container relative px-4 py-16 w-full md:w-[85%] mx-auto md:px-24 lg:px-8 lg:py-20 text-white">
                <div className="relative grid gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    <div className="px-6 py-12 transition duration-300 transform bg-gradient-to-r from-primary to-secondary rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                        <div className='flex flex-col md:flex-row items-center text-center md:text-left'>
                            <div className='mr-4 mb-3 md:mb-0'>
                                <img src={clock} alt="" />
                            </div>
                            <div>
                                <h2 className='font-semibold text-lg mb-1'>
                                    Opening Hours
                                </h2>
                                <p className='text-sm'>
                                    From: 9.00 A.M To: 8.00 P.M
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-12 transition duration-300 transform bg-neutral rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                        <div className='flex flex-col md:flex-row items-center text-center md:text-left'>
                            <div className='mr-4 mb-3 md:mb-0'>
                                <img src={marker} alt="" />
                            </div>
                            <div>
                                <h2 className='font-semibold text-lg mb-1'>
                                    Visit our location
                                </h2>
                                <p className='text-sm'>
                                    Brooklyn, NY 10036, United States
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-12 transition duration-300 transform bg-gradient-to-r from-primary to-secondary rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                        <div className='flex flex-col md:flex-row items-center text-center md:text-left'>
                            <div className='mr-4'>
                                <img src={phone} alt="" />
                            </div>
                            <div>
                                <h2 className='font-semibold text-lg mb-1'>
                                    Contact us now
                                </h2>
                                <p className='text-sm'>
                                    +000 123 456789
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;