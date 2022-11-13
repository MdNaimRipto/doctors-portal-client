import React from 'react';
import treatment from "../../Assets/images/treatment.png"
import PrimaryButton from '../../Components/PrimaryButton';

const ExceptionalCare = () => {
    return (
        <div className="px-4 py-16 mx-auto md:px-4 lg:px-8 lg:py-20 w-[96%] md:[96%] lg:w-9/12">
            <div className="grid gap-8 md:gap-8 lg:gap-16 row-gap-8 lg:grid-cols-2">
                <div>
                    <img
                        className="object-cover w-full rounded shadow-lg mr-7"
                        src={treatment}
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-neutral sm:text-4xl sm:leading-none">
                            <p className='mb-3'>Exceptional Dental</p>
                            <p className='mb-3'>Care, on Your Terms</p>
                        </h2>
                        <p className=" text-gray-800 text-sm font-semibold leading-7">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                        </p>
                        <PrimaryButton></PrimaryButton>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ExceptionalCare;