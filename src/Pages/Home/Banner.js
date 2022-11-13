import React from 'react';
import banner from "../../Assets/images/chair.png"
import PrimaryButton from '../../Components/PrimaryButton';
import bannerBg from "../../Assets/images/bg.png"

const Banner = () => {
    return (
        <header style={{ background: `url(${bannerBg})` }}>
            <div className="px-4 py-16 mx-auto w-full md:w-[85%] md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className='block md:block lg:hidden'>
                        <img
                            className="object-cover w-full h-56 md:h-72 rounded shadow-lg"
                            src={banner}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-[600] tracking-tight text-[#3A4256] sm:text-4xl sm:leading-none">
                                <span className='none md:block mb-3 mr-2 md:mr-0'>Your New Smile Starts</span>
                                Here
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae. explicabo.
                            </p>
                            <PrimaryButton />
                        </div>
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

export default Banner;